---
title: myOS
date: 2025-04-12T16:45:17+08:00
tags: [操作系统]
abbrlink: '36abf099'
---

# 自制操作系统

## 学习过程

#### 关于一个程序的组成

这张图片形象展示了一个程序是如何在代码中分布的

![](https://pic1.imgdb.cn/item/67fa705988c538a9b5cc6d46.png)

一共有五个区域

#### **1.栈区**

- 栈区由编译器自动分配释放，由操作系统自动管理，无须手动管理。
- 栈区上的内容只在函数范围内存在，当函数运行结束，这些内容也会自动被销毁。
- 栈区按内存地址由高到低方向生长，其最大大小由编译时确定，速度快，但自由性差，最大空间不大。
- 栈区是先进后出原则，即先进去的被堵在屋里的最里面，后进去的在门口，释放的时候门口的先出去。

**存放内容：**临时创建的局部变量和const定义的局部变量存放在栈区。
函数调用和返回时，其入口参数和返回值存放在栈区。

#### 2.堆区

堆区由程序员分配内存和释放。
堆区按内存地址由低到高方向生长，其大小由系统内存/虚拟内存上限决定，速度较慢，但自由性大，可用空间大。

**这里可能还会有内存映射段，用于动态链接库/文件映射**

#### 3.全局(静态)区

##### 全局(静态)区介绍

通常是用于那些在编译期间就能确定存储大小的变量的存储区，但它用于的是在整个程序运行期间都可见的全局变量和静态变量。
全局区有 .bss段 和 .data段组成，可读可写。

##### BSS段

BSS段（Block Started by Symbol segment）是计算机程序内存布局中的一个重要组成部分，主要用于存储程序中未初始化的全局变量和静态变量。它位于数据段（.data段）之后，堆（heap）段之前

未初始化的全局变量和未初始化的静态变量存放在.bss段。
初始化为0的全局变量和初始化为0的静态变量存放在.bss段。
.bss段不占用可执行文件空间，其内容由操作系统初始化。

BSS段的主要特点是：

1. **存储内容：**专门用于存放程序中未初始化的全局变量和静态变量
2. **初始化特性：**在程序加载到内存时会被系统自动清零（初始化为0或空指针）
3. **空间效率**：在可执行文件中不占用实际存储空间，只记录所需空间大小

BSS段在计算机系统中发挥着重要作用，具有多项优势：

1. **内存效率**：通过只记录未初始化变量所需空间大小而不实际存储零值，显著减小可执行文件体积 
   - 例如：一个包含`int ar[30000];`的程序，编译后文件比初始化版本`int ar[300000] = {1, 2, 3...}`
2. **运行效率**：操作系统可批量清零BSS段，比单独初始化每个变量更高效 
3. **编程便利**：程序员无需显式初始化全局/静态变量为零，简化代码编写 
4. **嵌入式系统优势**：在资源受限的嵌入式环境中，BSS段能有效节省宝贵的内存空间

##### .data段

已初始化的全局变量存放在.data段。
已初始化的静态变量存放在.data段。
.data段占用可执行文件空间，其内容有程序初始化。

#### 4. 常量区

- **字符串**、**数字**等常量存放在常量区。
- **const修饰的全局变量**存放在常量区。
- 程序运行期间，**常量**区的内容不可以被修改。

#### 5.代码区

- 程序执行代码存放在代码区，其值不能修改（若修改则会出现错误）。
- 字符串常量和define定义的常量也有可能存放在代码区。

#### 操作系统的启动流程

下图展示了经典操作系统的启动流程

![](https://pic1.imgdb.cn/item/67fa704f88c538a9b5cc6d44.png)

- BIOS(Basic Input/Output System)，基本输入输出系统，该系统存储于主板的ROM芯片上，计算机在开机时，会最先读取该系统，然后会有一个加电自检过程，这个过程其实就是检查CPU和内存，计算机最基本的组成单元(控制器、运算器和存储器)，还会检查其他硬件，若没有异常就开始加载BIOS程序到内存当中。详细的BIOS功能，这边就不说了，BIOS主要的一个功能就是存储了磁盘的启动顺序，BIOS会按照启动顺序去查找第一个磁盘头的MBR信息，并加载和执行MBR中的Bootloader程序，若第一个磁盘不存在MBR，则会继续查找第二个磁盘(PS：启动顺序可以在BIOS的界面中进行设置)，一旦BootLoader程序被检测并加载内存中，BIOS就将控制权交接给了BootLoader程序。 
-  MBR(Master Boot Record)，主引导记录，MBR存储于磁盘的头部，大小为512bytes，其中，446bytes用于存储BootLoader程序，64bytes用于存储分区表信息，最后2bytes用于MBR的有效性检查。 
-  GRUB(Grand Unified Bootloader)，多系统启动程序，其执行过程可分为三个步骤： 
  - Stage1：这个其实就是MBR，它的主要工作就是查找并加载第二段Bootloader程序(stage2)，但系统在没启动时，MBR根本找不到文件系统，也就找不到stage2所存放的位置，因此，就有了stage1_5
  - Stage1_5：该步骤就是为了识别文件系统
  - Stage2：GRUB程序会根据/boot/grub/grub.conf文件查找Kernel的信息，然后开始加载Kernel程序，当Kernel程序被检测并在加载到内存中，GRUB就将控制权交接给了Kernel程序。

**注意！现代操作系统使用了UEFI启动，但是我们现在不说UEFI，请自行忽略**

但是这样也需要我们的Boot程序按照[Mutileboot](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMulti-booting&objectId=1414532&objectType=1&isNewArticle=undefined) 规范来编译内核，才可以被GRUB引导。 按照Mutileboot规范，内核必须在起始的8KB中的(512字节)包含这一个多引导项头（Multiboot header)。 **而且，这个多引导项头里面必须有3个4字节对齐的块。**

#### 一些指令

`clt`，表示clear interrupt，关闭所有硬件中断

`hlt` ，表示停止CPU运行，即HALT



### 镜像制作

#### 安装grub-legacy xorriso mtools

在ubuntu20.04中输入

```bash
sudo apt install grub-efi-amd64 xorriso mtools virtualbox virtualbox-ext-pack
```

依次执行

```bash
mkdir iso
mkdir iso/boot
mkdir iso/boot/grub
cp $< iso/boot/
echo 'set timeout=0' > iso/boot/grub/grub.cfg
echo 'set default=0' >> iso/boot/grub/grub.cfg
echo '' >> iso/boot/grub/grub.cfg
echo 'menuentry "my os" {' >> iso/boot/grub/grub.cfg
echo '  multiboot /boot/mykernel.bin' >> iso/boot/grub/grub.cfg
echo '  boot' >> iso/boot/grub/grub.cfg
echo '}' >> iso/boot/grub/grub.cfg
grub-mkrescue --output=$@ iso
rm -rf iso
```



### GDT表实现

早期操作系统对内存的操作是开放的，程序程序可直接访问所有物理内存，包括操作系统区域，易导致系统崩溃

并且所有代码运行在相同权限级别，无法隔离用户程序与内核。安全性不好。这种模式称为**实模式**

而后出现了**保护模式**，保护模式的实现就是基于GDT表。保护模式安全性更高，对于内存管理更好。

#### GDT表

GDT表（Global Descriptor Table，全局描述符表）是x86架构处理器在**保护模式**下用于管理内存分段的核心数据结构。

##### **基本定义与作用**

- **功能**：GDT表是一个描述符数组，每个描述符占用8字节，用于定义内存段的基地址、界限（大小）和属性（如代码/数据段、特权级、读写权限等）
- **全局性**：系统中仅有一个GDT表，所有任务共享，而局部描述符表（LDT）可为单个任务提供额外的段定义
- **内存保护**：通过段描述符中的特权级（DPL）和类型（Type）字段，限制不同程序对内存的访问，防止非法操作 

#### 段描述符

![](https://pic1.imgdb.cn/item/6804923958cb8da5c8b88ff5.png)

## 参考资料

[C语言：内存分配---栈区、堆区、全局区、常量区和代码区_c 内存布局-CSDN博客](https://blog.csdn.net/MQ0522/article/details/114823770)

[VV的操作系统笔记（一）操作系统I SeeYou!!!! -腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1414532)

[保护模式 3讲-段寄存器GDT表与个人代码总结 - iBinary - 博客园](https://www.cnblogs.com/iBinary/p/13198073.html)
