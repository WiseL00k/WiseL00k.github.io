---
title: "MCP && Cline"
date: 2025-03-14T19:50:32+08:00
tags: [学习]
cover: "https://pic1.imgdb.cn/item/67d425a588c538a9b5bdadb4.png"
abbrlink: 'da8d2046'
---

## MCP

MCP全名（Model Context Protocol，模型上下文协议），其定义了应用程序和 AI 模型之间交换上下文信息的方式。这使得开发者能够**以一致的方式将各种数据源、工具和功能连接到 AI 模型**（一个中间协议层），就像 USB-C 让不同设备能够通过相同的接口连接一样。MCP 的目标是创建一个通用标准，使 AI 应用程序的开发和集成变得更加简单和统一。

以往使用LLM大模型，都是用户输入文本，模型输出文本。得到的结果都是文本内容，用户需要自行理解后再对软件进行操作进而得到想到的结果。讲大白话就是：**让AI不再只输出干巴巴的文本内容，而是直接通过输出的文本内容自动操作你的软件，得到你想要的结果。**

![](https://pic4.zhimg.com/v2-3a242914e1f4958e631dd158e043b7c3_r.jpg)



![](https://picx.zhimg.com/v2-9fe7fb51f264338a079a444eefa041b1_1440w.jpg)

[MCP (Model Context Protocol)，一篇就够了。 - 知乎](https://zhuanlan.zhihu.com/p/29001189476)

## Cline

Cline官网 [Cline - AI Autonomous Coding Agent for VS Code](https://cline.bot/)



## 使用时遇到的一些问题

在使用Cline时，遇到了如下报错

![](https://pic1.imgdb.cn/item/6845420a58cb8da5c83a11ec.png)

这里的报错显示Cline不能查看到命令行的输出，说明命令行终端和Cline之间存在不兼容问题。

我的操作系统平台是Windows，这里使用的命令行终端是powershell。

在网上查询后，发现是版本问题，查看了我的版本，为5.1，后更新为7.5.1，问题得到解决

更新过程参考了下列网站内容：

[从 Windows PowerShell 5.1 迁移到 PowerShell 7 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/whats-new/migrating-from-windows-powershell-51-to-powershell-7?view=powershell-7.5)



## 小结

#### 一些集成指南

[MCP技术与Cline集成指南：打造智能AI助手的数据连接解决方案_vscode mcp-CSDN博客](https://blog.csdn.net/weixin_46074689/article/details/144619607)
