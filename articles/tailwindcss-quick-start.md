---
title: Tailwindcss 快速上手
date: 2021-06-23
author: 姜旗
---

当我看到 [Tailwindcss](https://tailwindcss.com/) 时，首先联想到是 [Bootstrap](https://getbootstrap.com/)。

使用过 Bootstrap 的人都知道，虽然可以使页面快速成型，但是 Bootstrap 本身存在巨大的限制，就是页面的风格被固定住了。使得扩展非常不方便。

所以大多数人选择使用 Less 或 Sass 这样 CSS 预处理器来提高效率。但始终无法避免代码的堆积，同时造成页面风格不统一。

究其根本就是因为没有*设计约束*。

## 解决的问题

Tailwindcss 使用的 `utility-first` 理念解决了以上问题同时还带来了诸多好处。

- 不需要为了类名纠结
- CSS 的输出大小在可控范围内，项目到一定规模后大小几乎是不变的，因为类名高度复用
- 统一的行为和高度的自定义能力
- 能很容易地实现响应式设计和主题切换，例如暗黑模式

自从 Tailwindcss 发布 2.1 后，携带了一个重大的更新就是 JIT mode。即时编译（just-in-time）的能力可以按需编译和加载 CSS。

它使 Tailwindcss 解锁了各种各样能力。首先带来的好处就是编译时的速度提升。