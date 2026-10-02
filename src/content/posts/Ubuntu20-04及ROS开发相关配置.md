---
title: Ubuntu20.04及ROS开发相关配置
date: 2025-02-05T18:24:48+08:00
tags: [RM, ROS]
abbrlink: '86654e9a'
---

## Ubuntu20.04安装

### 前言

下文的安装方式，都是针对UEFI的，如果是传统的Legacy，需要另找教程

查看BIOS启动模式，在Windows11下，可以先通过 `win`  + `r`，然后输入 命令 `msinfo32`，之后在弹出的面板中找到BIOS模式，若为UEFI，则可使用下文中的方法。

### 镜像下载

下载Ubuntu20.04.06的安装镜像，下面给出几个网站，以供下载

[Index of /ubuntu-releases/20.04.6/ | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/20.04.6/)

[上海交通大学镜像 20.04.6](https://mirror.sjtu.edu.cn/ubuntu-releases/20.04.6/)

[华为云镜像](https://repo.huaweicloud.com/ubuntu-releases/20.04.6/)

点击 `ubuntu-20.04.6-desktop-amd64.iso`开始下载。

### 制作启动盘

制作启动盘，首先需要准备一个U盘，移动硬盘也可以。U盘推荐是支持USB3.0的，这样安装的时候速度快一些。当然USB2.0也可以。

我这里使用的启动盘制作工具是ventoy

[Download . Ventoy](https://www.ventoy.net/cn/download.html)

注意，制作启动盘会格式化掉U盘的所有数据，请**提前做好数据备份工作**。

![](https://pic1.imgdb.cn/item/67927187d0e0a243d4f74192.png)

制作好后，你的U盘名称应该会被修改为带 `Ventoy`字样的名字。

制作好启动盘后，将下载好的镜像，直接拖入到制作好的启动盘中。

之后将BIOS启动项，改为U盘优先。

重启后，按照个人需求进行分区安装，即可

### 安装显卡驱动(可选)

[Ubuntu下apt工具包安装NVIDIA driver_apt nvidia驱动-CSDN博客](https://blog.csdn.net/weixin_46584887/article/details/122726265)

## 安装好后一些可选的配置

### 镜像源配置

如果apt下载软件的时候，网络不流畅，可尝试更换国内镜像源

[ubuntu 20.04 设置国内镜像源（阿里源、清华源）_ubuntu 20.04 镜像源-CSDN博客](https://blog.csdn.net/MacWx/article/details/137689898)

截止2025-1-20号，在我实际安装好系统后，似乎已经帮你提前更换好镜像源了。镜像源为清华镜像源

## ROS安装

参考B站该视频

[机器人操作系统ROS的安装心得以及rosdep问题的处理_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1aP41137k9?spm_id_from=333.788.videopod.sections&vd_source=55533c48a38dfb13cd7032c2b5bcd86c)

### 可能遇到的问题

[ubuntu 20.04安装ROS noetic添加秘钥失败 gpg: no valid OpenPGP data found._ubuntu20.04安装ros 添加密钥不成功-CSDN博客](https://blog.csdn.net/qq_37416258/article/details/118696718)

一般原因是因为网址是外网，网络不流畅所导致。有条件，使用科学上网手段也能解决。

#### 无法定位软件包

查看系统中的 软件和更新， 看看更新选项下的订阅，是否是订阅全部。

### 其他ROS相关工具

#### catkin tools

用于替代catkin_make的构建工具

执行下面命令，安装catkin tools

```bash
sudo apt install python3-catkin-tools
```

#### rosmon

用于替代roslaunch的工具，更加好用

执行下面命令，安装rosmon

```bash
sudo apt install ros-noetic-rosmon
```

#### plotjuggler

一款可视化图形调试工具

执行下面命令，安装plotjuggler

```bash
sudo apt install ros-noetic-plotjuggler
```

如果使用的时候，没有 `ROS Topic Listener`

继续执行

```bash
sudo apt install ros-noetic-plotjuggler-ros
```

#### controller-manager

用于可视化控制器的管理

```bash
sudo apt install ros-noetic-rqt-controller-manager
```



## 相关软件安装

### 超级终端

在终端下执行

```bash
sudo apt install terminator
```

[安装terminator(ubuntu上超好用的终端)_terminator ubuntu-CSDN博客](https://blog.csdn.net/wanttifa/article/details/127536695)



打开终端，输入

```bash
ibus-setup
```

将 表情符号快捷键取消即可。

[【ubuntu】20.04下 Ctrl+Shift+E 无法使用 terminator 分屏问题解决_control+shift+e被占用-CSDN博客](https://blog.csdn.net/czczczzczc/article/details/115595695)



### CLion

官网下载tar.gz压缩包，解压到一个目录

之后使用 `bash` 运行 `bin` 目录下的 `clion.sh`，即可打开CLion。

#### 破解激活

激活码文件夹放到 `bin` 目录下 。 ./install.sh 之后 ，用激活文件 vmoptions 里面的几个文件替换掉 clion/bin 里面的 clion64.vmoptions jetbrains_client64.vmoptions

还有 plugins/gateway-plugin/resources 里面的 gateway.vmoptions 

激活码文件要一直放在～，充当 javaagent

之后，打开Activation_Code文件夹下的CLion.txt，将其中的文本全选，这段文本就是CLion的激活码，直接打开CLion后，选择使用激活码激活，即可破解

#### Tips

[Ubuntu 20.04中安装CLion并创建桌面快捷方式_ubuntu clion 2021.1.2 eval reset-CSDN博客](https://blog.csdn.net/m0_46477492/article/details/122827564)

### Typora

[实用指南：Ubuntu22.04安装配置typora - yfceshi - 博客园](https://www.cnblogs.com/yfceshi/p/19101389)

### Snipaste

[Snipaste 下载](https://zh.snipaste.com/download.html)

下载AppImage

#### 额外配置(可选)

[添加icon_Ubuntu下为AppImage应用添加图标并添加到应用-CSDN博客](https://blog.csdn.net/weixin_42171132/article/details/112618136)

## 队内环境配置

### bashrc

保证基本的ROS的环境变量已经导入

给home目录下的bashrc文件**追加**以下内容

```bash
alias wired='ssh -o StrictHostKeyChecking=no -l "dynamicx" "192.168.100.2"'

export HAS_SWITCH=has
export camera_type=hk_camera
export ROBOT_TYPE=hero
export ROS_IP=`ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | grep -v '172.17.0.1'`
if test -z "${ROS_IP}"
then
export ROS_IP=`dig +short localhost`
fi
#export ROS_IP='192.168.100.1'
export HW_NAME=rm_can_hw
#export ROS_MASTER_URI=http://192.168.100.2:11311

echo "ROS IP: ${ROS_IP}" | lolcat
echo "ROS Master URI: ${ROS_MASTER_URI}" | lolcat
echo "coding前记得先查看是否同步远程上游仓库
git pull upstream" | lolcat
```

### 队内代码

#### 部署**rm_ecat**

安装依赖

⾸先要把所有依赖拉下来，放在专⻔的⼯作空间⾥

这里建议在你当前用户的`home`目录下创建,路径就是`~/depend_ws`

```bash
mkdir -p depend_ws/src
cd depend_ws/src && catkin_init_workspace
git clone git@github.com:gdut-dynamic-x/soem_interface.git
git@github.com:ANYbotics/any_node.git
git@github.com:ANYbotics/message_logger.git
```

然后在depend_ws下设置install模式，使⽤release编译

```bash
catkin config -DCMAKE_BUILD_TYPE=Release
catkin install
```

接着设置依赖的路径

```bash
catkin config --extend /opt/ros/noetic
```

回到depend_ws下编译

```bash
catkin build
```

#### 编译**rm_ecat**

去到rm_ws/src下，拉rm_ecat，ecat_manager

```bash
git clone git@github.com:gdut-dynamic-x/ecat_manager_dev.git
git clone git@github.com:gdut-dynamic-x/rm_ecat_dev.git
```

设置依赖关系

```bash
catkin config --extend /xxxpath/depend_ws/install
```

回到rm_ws下编译

```bash
catkin build
```

#### 创建工作空间

在你当前用户的`home`目录下创建一个目录 ,我这里叫`rm_ws`,路径就是`~/rm_ws`

在 `rm_ws`下创建 `src`目录，进入到 `src`目录

依次执行下列命令

```bash
catkin_init_workspace
cd ..
catkin init
catkin build
```

将下列几个包，都克隆到 `src`目录下

`rm_control`

`rm_controllers`

`rm_config`

`rm_manual`

`rm_bringup`

`rm_description`

克隆好后，执行下列命令

```bash
cd ../
rosdep install --from-paths . --ignore-src
catkin build
```

*请确保已经安装好catkin tools*

### 测试

可以跟着这个教程，看看能不能把机器人驱动起来。

[Gazebo 底盘 | rm-controls documentation](https://rm-control-docs.netlify.app/quick_start/gazebo_chassis)

不一定完全一致，有些地方可能会有出入

## 一些可能出现的问题

### 解决在ubuntu的firefox浏览器下不能看b站视频的问题

在终端执行

```bash
sudo apt install ubuntu-restricted-extras
```

[ubuntu20.04自带的火狐浏览器无法播放B站等其他视频怎么办_ubuntu20.04 b站看不了视频-CSDN博客](https://blog.csdn.net/m0_56514535/article/details/140820330)
