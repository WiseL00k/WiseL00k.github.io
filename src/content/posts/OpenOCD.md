---
title: OpenOCD
date: 2025-06-24T10:55:15+08:00
tags: [嵌入式, 调试]
abbrlink: '7f05fc90'
---

## 问题表

### 烧录Stm32F103C8T6报错

正版c8t6的idcode应该是0x1ba01477

#### 原因及解决方案

原因，使用的其实是一颗被打上了 STM32F103C8T6 丝印的国产 32 芯片，也就是山寨版芯片，需要在cfg里加入一句（加在source[findtarget/stm32f1x.cfg]前）：

set CPUTAPID 0x2ba01477

自定义 TAPID，或者也可以将 TAPID 值设置为0以禁用检测

[解决 OpenOCD 0x2ba01477 问题 - 前进笔记](https://0x1.ink/p/66)
