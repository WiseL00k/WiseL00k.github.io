---
title: Git commit信息规范
date: 2024-12-09T11:59:37+08:00
tags: [Git]
cover: "https://pic.imgdb.cn/item/67569ffad0e0a243d4e043ea.png"
abbrlink: 'afba152f'
---

在个人开发中，对于commit message(提交信息)，个人开发者往往比较随意，只要写的自己能看懂就行。但是养成良好的commit规范，也能够或多或少地提升自己的个人开发效率。也便于在出现bug时，方便回溯排查。

<!-- more -->

但是在团队开发中，Commit message(提交信息)就显得尤为重要，一个好的commit message总是能够提升团队开发效率的。因此这里介绍一种常用的commit message规范--[Angular规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit?tab=t.0#heading=h.greljkmo14y0)。如下图：

![](https://pic.imgdb.cn/item/67569ffad0e0a243d4e043ea.png)

## Angular规范

### Commit message 的格式

每次提交，Commit message 都包括三个部分：header，body 和 footer。

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

其中，header 是必需的，body 和 footer 可以省略。
不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。

### Header

Header部分只有一行，包括三个字段：`type`（必需）、`scope`（可选）和 `subject`（必需）。

#### type

用于说明 commit 的类别，只允许使用下面7个标识。

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

如果type为 `feat`和 `fix`，则该 commit 将肯定出现在 Change log 之中。其他情况（`docs`、`chore`、`style`、`refactor`、`test`）由你决定，要不要放入 Change log，建议是不要。

#### scope

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

例如在 `Angular`，可以是 `$location`, `$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`等。

如果你的修改影响了不止一个 `scope`，你可以使用 `*`代替。

#### subject

`subject`是 commit 目的的简短描述，不超过50个字符。

其他注意事项：

- 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
- 第一个字母小写
- 结尾不加句号（.）

### Body

Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。

```livecodeserver
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

有两个注意点:

- 使用第一人称现在时，比如使用change而不是changed或changes。
- 永远别忘了第2行是空行
- 应该说明代码变动的动机，以及与以前行为的对比。

### Footer

Footer 部分只用于以下两种情况：

#### 不兼容变动

如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。

```yaml
BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```

#### 关闭 Issue

如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。

```mipsasm
Closes #234
```

### Revert

还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。

```pgsql
revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

Body部分的格式是固定的，必须写成 `This reverts commit <hash>`.，其中的hash是被撤销 commit 的 SHA 标识符。

如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。

## Git 提交类型对照表

| 类型         | 特征                     | 常见示例                                         |
| ------------ | ------------------------ | ------------------------------------------------ |
| **feat**     | 新功能                   | 添加新模块、实现新接口、增加新命令               |
| **fix**      | 修复 bug                 | 修复崩溃、逻辑错误、边界条件问题                 |
| **refactor** | 代码重构，不改变功能     | 拆分类、提取函数、移动函数到新文件、优化模块依赖 |
| **style**    | 代码格式调整，不改变逻辑 | 缩进、空格、换行、注释样式、命名规范             |
| **docs**     | 文档修改                 | README 更新、注释补充、Wiki 文档修改             |
| **test**     | 测试相关                 | 新增单元测试、修改测试代码、修复测试逻辑         |
| **chore**    | 构建/工具/杂项           | 修改构建脚本、依赖更新、CI/CD 配置               |
| **perf**     | 性能优化                 | 提升算法效率、减少内存/CPU 使用                  |
| **ci**       | 持续集成相关             | 修改 GitHub Actions、GitLab CI 配置              |
| **build**    | 构建系统                 | makefile/CMake 修改、打包脚本修改                |

## 参考文章

[git commit 规范指南 - 不挑食的程序员 - SegmentFault 思否](https://segmentfault.com/a/1190000009048911)
