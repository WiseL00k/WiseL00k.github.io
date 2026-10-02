---
title: 一个简单的C语言菜单框架
date: 2024-12-31T01:39:15+08:00
tags: [C]
abbrlink: 'de47911f'
---

<!-- more -->

## 引言

做C语言课设总是用到菜单，发现菜单的使用频率特别高。想试着结合面向对象的思想尝试着写一个简单的C语言菜单框架。

## 数据结构

一个菜单内的内容通常由多个菜单项和一些其他信息组成。而一个菜单项内又由菜单项的内容和选择后执行的回调函数组成。而菜单项执行的回调函数通常分为两种：一种是进入下一级菜单、另一种是执行对应功能函数。

因此做如下定义：

```
// 菜单
typedef struct
{
	
} Menu;

// 菜单项
typedef struct
{

} MenuItem;

typedef struct
{

} MenuItemList;
```



可提供的接口如下：

```
void registerMenu();
void registerMenuItem();
```

待完工...
