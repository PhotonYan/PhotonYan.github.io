# 来源与改编

参考作者：Grant Sanderson / 3Blue1Brown。

- 傅里叶变换原动画与说明：https://www.3blue1brown.com/lessons/fourier-transforms/
- 傅里叶级数、积分提取系数：https://www.3blue1brown.com/lessons/fourier-series/
- 波形绕到复平面的原代码：https://github.com/3b1b/videos/blob/master/_2018/fourier.py
- 旋转向量、圆圈与共享时间的原代码：https://github.com/3b1b/videos/blob/master/_2019/diffyq/part4/fourier_series_scenes.py

本报告改编了原代码中的复平面绕卷映射和旋转向量构造方法，迁移到 Manim Community 0.21。中文排版、信号、DFT 采样、系数与单边谱幅度对应、二维图像基以及播放器为本课程重新设计。未使用原视频片段作为交付内容。

本文件夹的改编傅里叶动画、插图与 fourier_visuals.py 场景代码按 CC BY-NC-SA 4.0 提供。完整许可见 3Blue1Brown-LICENSE.txt。字体遵循各自许可；方正字体使用系统已安装版本，未打包。

方正小标宋_GBK用于标题，方正黑体_GBK用于短标注；数学使用 MathTex，英文字体保留 CMU Serif / Arial。CMU 字体及其许可在 fonts 文件夹。


## 2026-10-03：奇偶采样与递归动画

N17 的配对频率/奇偶采样说明与 N18 的递归分流结构，参考教师提供的 Veritasium《这个算法改变了世界》（[Bilibili](https://www.bilibili.com/video/BV1CY411R7bA/)，相关段落约17:15–18:45；[视频原始来源](https://www.youtube.com/watch?v=nmgFG7PUHfo)）。动画由本项目使用 Manim 独立实现，使用原生曲线、点、字形和公式，不嵌入原视频画面、字幕或台标。原参考视频的权利属于原作者。

## 精简版新增波形分解

C01 参考教师给出的 Veritasium《这个算法改变了世界》7:25–7:38：[Bilibili](https://www.bilibili.com/video/BV1CY411R7bA/)，[原始视频](https://www.youtube.com/watch?v=nmgFG7PUHfo)。使用自定义六项正弦和、原生曲线与共用扫线独立复现分解思想，未嵌入参考画面、声音或字幕。C03 的采样图也参考同一视频的离散采样说明，独立展示完整复数采样向量。C02 完整代码与高亮、C04 图像系数保留示例为本项目编写。
