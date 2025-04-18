---
title: "Reflections on GTM282: Measure,Integral & Real Analysis (实变函数论)"
description: "实变函数学十遍，泛函分析心犯寒"
author: photon
date: 2025-04-18 11:33:00 +0800
categories: [Courses, Math]
tags: [Math]
math: true
mermaid: true
image: 
    path: /assets/img/2025-04-18-Real-Analysis/cover.png
---

> 我不太确定我最近学的这部分内容应该叫做「测度论」「实变函数论」，还是「泛函分析入门」。但具体叫什么名号我想并不重要，学到了什么东西、培养了怎样的直觉可能会更关键一些。
> 
> 明天我又要回四中给高一同学做分享，老师让我讲一讲「在AI时代需要怎样培养自己的能力」。今天来学校的路上我思考了一下，感觉当下我们学习的一个重要转变趋势在于：由注重学习知识本身转向对直觉的培养。现阶段大部分专业基础课的内容很多推理LLM都能做到很好，完全可能出现让AI去考试考的比人还高的情况。把很多比较平凡的课程学的过于精细已经逐渐失去了除提升绩点外的实际价值，我们越来越不需要所谓「活字典」的存在。在这样的大背景下，我们或许该寻找一些更有效的方式、更好地展现人的所谓生物智能。
> 
> 我们可以在很多领域很笃定地实践：
> $$ Attention\ is\ all\ you\ need.$$
> 而如何培养$Attention$，目前看来便是更重要的课题了。
{: .prompt-info }

> 本文使用的记号：
> 
> $[n]:=\{1,2,\dots,n\};$
> 
> $\{x_i\}_{\Gamma}:=\{x_i:\ i\in\Gamma\}$, 其中$\Gamma$被称作指标集（Family），$\Gamma$可以不是可数集。
> 
> $\aleph_0$是可数无穷集合的基数（势），$\aleph_1=c$是连续基数。
>
> $A-B$代表两集合的差集。
{: .prompt-tip }

实变函数论实际上是在尝试对“面积”和“体积”这一类直观概念进行严格抽象，它试图在更一般的集合上定义度量（Measure）。Henri Lebesgue在20世纪初提出新的积分理论不仅拓展了可积函数的范围，也为研究不连续性、极限过程、概率统计等数学领域提供了统一的数学语言。

我们早已熟知的Riemann积分是被Riemann和定义的。如果一个函数$f(x)$在闭区间$[a,b]$上有定义，且$\{x_i\}_{[n]}$是闭区间$[a,b]$上的一个**分划**$P$，定义区间$[a,b]$上的上Riemann和$U(f,P,[a,b])$和下Riemann和$L(f,P,[a,b])$分别为：
$$\begin{gather}U(f,P,[a,b])=\sum_i m(x_i,x_{i+1})\sup_{[x_i,x_{i+1}]}f\\L(f,P,[a,b])=\sum_i m(x_i,x_{i+1})\inf_{[x_i,x_{i+1}]}f\end{gather}$$

其中$m(x_i,x_{i+1})$是区间$(x_i,x_{i+1})$的长度。如果$U(f,P,[a,b])=L(f,P,[a,b])$，则称$f(x)$在区间$[a,b]$上Riemann 可积。

这个定义看起来非常美好，因为它非常符合直观。但它有一个问题：存在大量函数的上下Riemann和并不相等。这严重限制了积分理论在更广泛的实函数上的拓展。例如著名的定义在$[0,1]$上的Dirichlet函数：
$$
\begin{equation}
f(x):=\left\{\begin{matrix}
1,&x\in \mathbb Q\cap[0,1]\\
0,&x\not\in \mathbb Q\cap[0,1]
\end{matrix}\right.
\end{equation}
$$
其上下Riemann和分别等于1和0，也就是说，Dirichlet函数并不是Riemann可积函数。Dirichlet函数可以被看作将$f(x)=0$这一函数中所有有理数点的函数值调成$1$得到的。
> 另一个并不是很好的性质在于：Riemann积分和求和、求导并不能随意换序，哪怕函数是逐点收敛的（Pointwise Converge）。后面我们会提到的Lebesgue积分虽然对这些操作也有一定限制，但它能将驻点收敛几乎处处地收紧到一致收敛，从而可以更轻易地交换次序——这会给我们带来巨大的证明上的便利。
{: .prompt-tip }

造成这一问题的主要原因在于，Riemann积分并没有很好地对无穷次操作给出很好的定义。根据Riemann积分的定义，如果我们只是在积分区间内选取**有限**个点，改变$f(x)$在这些点的值并不会影响其积分结果。但问题在于，对于Dirichlet函数，“挖点”的操作被进行了无穷次，从而我们无法通过前面对有限情况的讨论预测积分的结果。

但从直观来讲，我们应当可以预测到Dirichlet函数在$[0,1]$上的积分为0。这是因为虽然我们在无穷个点上调整了$f(x)=0$的函数值，但是调整点的数量相比$[0,1]$这个区间中所有点的数量实在是太过于稀少了，以至于尽管我们有无穷个点取到函数值$1$，但却不足以对最终的积分结果产生影响。

我们需要指出一个事实：无穷和无穷之间是有差异的。例如有理数与实数，前者可以与自然数一一对应，后者不行，因此有理数的个数和实数虽然都是无穷，但是实数个数的无穷从直观上会更多一些。

如果两个集合之间的元素可以一一对应，我们可以认为二者的元素是「同样多的」——这对于有限情况是显然的。我们称可以构造双射的两个集合$A,B$是**等势的**，记作$A\sim B$。

> 关于「有理数与自然数可以一一对应」，我们可以构造如下双射。注意到有理数均可被表示为$p/q$的形式，我们可以列出如下数表。以反对角线的方向对数表的元素编号，并以这个标号对数表中的所有元素排列，我们便可得到一个数列：$\frac{1}{1},\frac{1}{2},\frac{2}{1},\frac{1}{3}\dots$。在这个数列中，任意有理数与其序号（一个正整数）一一对应。证毕。
>$$
\begin{equation}
\begin{matrix}
     & \scriptstyle q \rightarrow &        &        &         &        \\
\scriptstyle p \downarrow & 1/1 & 1/2 & 1/3 & 1/4 & \cdots \\
         & 2/1 & 2/2 & 2/3 & 2/4 & \cdots \\
         & 3/1 & 3/2 & 3/3 & 3/4 & \cdots \\
         & 4/1 & 4/2 & 4/3 & 4/4 & \cdots \\
         & \vdots & \vdots & \vdots & \vdots & \ddots \\
\end{matrix}
\end{equation}
$$

有理数集和自然数集是等势的，偶数构成的集合与自然数构成的集合是等势的，有限项自然数构成的有序数组的几何和自然数集也是等势的——这些命题都可以通过上面给出的列表法证明。记自然数集的势（又称基数）为$\aleph_0$，读作Aleph零。实数这一类连续的集合——这种描述并不严谨，但不妨碍理解——有一个统一的名字，叫做**连续统**。连续统的基数等于$2^{\aleph_0}$。这是很好理解的，只需要你注意到任意的实数都可以被无穷位的二进制小数表示。

记严格比$\aleph_0$大的最小基数为$\aleph_1$。我们并不确定$\aleph_1$是不是$2^{\aleph_0}$，这被称作**连续统假设**。在标准集合论ZFC的公理系统中，连续统假设既无法被证明，也无法被否定。

回到对积分理论的讨论。

因为有理数是可列的，即与自然数等势的，因此我们可以构造一个集合序列：
$$
\begin{equation}
A_k=\{(x-\varepsilon/2^k,x+\varepsilon/2^k)\vert x\in \mathbb Q\cap[0,1]\}
\end{equation}
$$

其中$\varepsilon$是大于零的任意正数。用$A_k$代替Dirichlet函数中的有理数集合，并取下确界，我们有：
$$
\begin{equation}
\int_{[0,1]}f(x)\,\mathrm dx=\sup_{\varepsilon}\sum_k^\infty m(x_k-\varepsilon/2^k,x_k+\varepsilon/2^k)=\inf_{\varepsilon}2\varepsilon=0
\end{equation}
$$

我们称这种用*一个覆盖原集合的开区间族*的长度衡量原集合长度的集合长度测量方式为**外测度**，又称**Lebesgue外测度**；上述开区间族被称作原集合的一个**开覆盖**。「外测度」的外字来源于我们是「从外面包裹住集合来测量」的，这与Riemann积分中我们从集合内部进行分划的「内测度」相对。

但到这里我们还没有完全定义出Lebesgue积分。这是因为积分运算中衡量集合长度要求一个**测度函数**，而外测度在$\mathbb R$的开集系上并不是一个测度。让我们一个个来解释上一句话中出现的名词。

首先，我们需要指出，测度的建立依赖我们研究的**代数结构**。一位演员无法脱离舞台表演，不先定义好舞台我们让演员开始演出的。

代数的研究对象是是集合和集合上的结构。考虑集合$X$，其子集构成的集合$\mathcal A$（有的时候也称集合系）被称作一个 **代数（Algebra）** 当且仅当$A$满足以下三个条件：
1. 空集属于代数：$\varnothing\in \mathcal A$;
2. 代数对补集具有封闭性：$\forall P\in\mathcal A,\, X- P\in \mathcal A$;
3. 代数对并集封闭（有限可加性）：$P\in\mathcal A,\, Q\in\mathcal A\Rightarrow P\cup Q\in \mathcal A$.

如果第三个条件被增强为**可数可加性**，即对可数次（包括可数无穷）并集封闭，则代数$\mathcal A$会升级为$\sigma$-**代数**。

至此，舞台已经建好，邀请演员登场。

**测度**$m$是一个将$\sigma$-代数$\mathcal S$中的集合映射为数的函数。考虑集合$X$与其上的$\sigma$-代数$\mathcal S$，测度$\mu$是$S\rightarrow[0,\infty]$的函数。

在Riemann积分中，我们已经将开区间长度$(x_i,x_{i+1})$定义为$\vert x_{i+1}-x_i\vert $。我们希望测度能够在进行推广的过程中能够保留上述性质，即对于开区间$(a,b)$，其测度依旧等于$\vert b-a\vert $。为此我们要求，推广的测度函数$\mu(A)$必须要满足：
1. 空集是零测集：$\mu(\varnothing)=0$;
2. 开区间的测度退化为端点坐标差：$\mu(a,b)=\vert b-a\vert $;
3. 对彼此不交的集合具有可数可加性：$\displaystyle\mu\left(\bigcup_{i}^\infty A_i\right)=\sum_i^{\infty}\mu(A_i)$.

对于集合$X$，设可测空间（Measurable Space）$\mathcal S$为其所有子集构成的集合，这自然是一个$\sigma$-代数，读者可以自行验证。**Lebesgue外测度不满足上述条件中的第三条，因此Lebesgue外测度不是$\mathcal S$上的测度**。

> 这一点可以通过以下技巧验证。我们限定在$\mathbb R$上讨论。现在我们希望证明存在两个互相无交集的集合$A,B$，满足$A\cap B=\varnothing$且$\vert A\cup B\vert \neq \vert A\vert +\vert B\vert $。
>
> 我们构造一个不可测集合作为反例。这个构造依赖于**Vitali 集**。
>
> 令 $E = [0,1]$，考虑集合 $V \subseteq [0,1]$，满足以下条件：
> 
> - 对任意 $x, y \in V$，若 $x - y \in \mathbb{Q}$，则 $x = y$，则称$x,y$属于同一个**余数类**。显然每个不同的余数类之间没有交集。
> - 在每个余数类 $\bmod \mathbb{Q} \cap [-1,1]$ 中任选一个元素构成集合$V$（这一步依赖选择公理）；称这样构造的集合$V$为**Vitali 集**。
>
>定义对于任意有理数 $q \in [-1,1]$，平移集合 $V_q := V + q := \{v + q : v \in V\}$。所有这样的平移集族 $\{V_q\}_{q \in \mathbb{Q} \cap [-1,1]}$ 是**两两不交**的，并且它们的并集包含在 $[-1,2]$ 中，且几乎覆盖整个 $[0,1]$。（几乎覆盖是很重要的，不然推不出矛盾）
>
> 考虑集合
>$$
>\begin{equation}
>A := \bigcup_{q \in \mathbb{Q} \cap [0,1/2]} (V + q), \quad B := \bigcup_{q \in \mathbb{Q} \cap (1/2,1]} (V + q).
>\end{equation}
>$$
>
>则 $A \cap B = \varnothing$ 且 $A \cup B \subseteq [0,2]$，但我们有：
>- $\mu^*(A \cup B) \leq 2$；
>- 而每个 $V + q$ 的外测度是恒定的，$\mu^*(V + q) = \mu^*(V)$；
>- 因此如果 $\mu^*$ 可加，那么
>$$
>\begin{equation}\mu^*(A) + \mu^*(B) = \sum_{q \in \mathbb{Q} \cap [0,1/2]} \mu^*(V) + \sum_{q \in \mathbb{Q} \cap (1/2,1]} \mu^*(V) = \infty.\end{equation}
>$$
>
>这显然矛盾。因此 $A$ 和 $B$ 的外测度不满足可加性。

虽然Lebesgue外测度在$\mathbb R$的全体子集构成的空间上无法成为测度，但在$\mathbb R$所有开子集生成的最小$\sigma$-代数，即所有包含所有开集的$\sigma$-代数的交集这个空间上，Lebesgue集合便变得满足可数可加性，从而可以成为测度了。

我们称全集 $X$ 上由所有开集生成的最小$\sigma$-代数为Borel $\sigma$-代数，记作 $\mathcal{B}(X)$。$\mathcal B$中的集合称为**Borel 集**（Borel sets）。
> 实际上这里的全集$X$即拓扑空间。但这值得我再写一篇blog记录。大概等我读完AMS的Differential Geometry, Lie Group, asnd Symmetric Spaces再说。
{: .prompt-tip }

Lebesgue外测度在Borel集上是测度。

但这并不意味着在Borel集之外Lebesgue外测度就不能成为测度了。事实上，有一族与Borel集至多只在很少点不同的集合也是Lebesgue可测的。具体相差的有多少呢？答案是不同的点集至多只有$0$的外测度。

确切来说，如果集合$A$对任意集合 $E\subseteq\mathbb R$ 都有：
$$\begin{equation}\mu^*(E)=\mu^*(E\cap A)+\mu^*(E\cap A^c)\end{equation}$$

那么我们便称$A$是 Carathéodory 可测的；其中这里$A^c$指补集。也就是说，在这个集合 $A$ 上，$\mu^*$ 对“划分”行为是保持可加性的。所有满足这一条件的集合构成了一个 $\sigma$-代数，记作 $\mathcal{L}$，被称作 Lebesgue 可测集族。$\mu^*$ 在 $\mathcal{L}$ 上是一个真正的测度，即Lebesgue 测度。

对于任意Lebegue可测集，存在Borel集与之仅差一个零测集的集合。

由于大部分情况下我们并不关心零测集上发生的事情，大部分命题的证明可在Borel集上完成。虽然在Lebesgue集上做证明更为严谨，但有的时候这份严谨太过于沉重，会压得人心烦气躁。

从这里开始，定义$(X,\mathcal S,\mu)$为**测度空间（Measure-Space）**，$\mathcal S$中的集合是「$\mathcal S$-可测的」。这只是一种简记方式，无需多言。

引出Lebesgue积分前，我们需要先重申函数连续性的定义。

设有函数 $f : X \to Y$，其中 $X, Y$ 是带有拓扑结构的空间（即定义了开集的空间，例如 $\mathbb{R}$ 上的通常拓扑）。我们称$f$ 是连续的，当且仅当对任意 $Y$ 中的开集 $U$，其原像 $f^{-1}(U)$ 在 $X$ 中是开集。

Egorov定理指出：对于满足$\mu(X)<\infty$的测度空间$(X,\mathcal S,\mu)$，对于任意在$[a,b]$上逐点收敛的函数列$f_k$，存在测度小于任意给定常数$\varepsilon$的集合$E$满足$f_k$在$X-E$上一致收敛。

这二者启发我们以一种新的方式思考定积分。首先，Egorov定理使得我们可以用形如：
$$f=\sum_i \chi_{E_i}c_i$$
的**简单函数**列逼近几乎处处一致收敛地逼近任意函数。其中$E_i$是$f^{-1}(c_i,c_{i+1})$，$\chi_E$被称作**示性函数**，当$x\in E$时取$1$，反之取$0$。
> Dirichlet函数实际上就是$\chi_\mathbb Q$.
> {: .prompt-tip }

直观来讲，上述逼近即将$f$拆分成其各个函数值组分的和。这与Riemann积分的思考是正交的。Riemann积分通过拆分积分区间计算积分，而Lebesgue积分通过拆解值域计算积分。

在完成逼近以后，任意连续函数值域的原像根据前面的定义都是开集，从而必然Lebesgue可测，进而有限测度空间上的任何连续函数都Lebesgue可积。

记函数$\chi_E$在测度$\mu$下的积分为$\int \chi_E\ \mathrm d \mu$，根据积分的意义有：
$$\int \chi_E\ \mathrm d \mu=\mu(E)$$

Lebesgue积分类似于Riemann积分，也是线性算符，因此：
$$\int \sum c_i\chi_{A_i}\ \mathrm d\mu=\sum c_i\mu(A_i)$$

在测度$\mu$下非负定函数$f$的Lebesgue积分记作：
$$\int f\,\mathrm d \mu=\sup\left(\sum c_i\mu(A_i),\ \forall m,n,\,A_m\cap A_n=\varnothing,\, c_m\ge 0, f\ge\sum c_i\chi_{A_i} \right)$$

其中$\sup$与$f\ge\sum c_i\chi_{A_i}$共同工作，通过选择最佳的逼近简单函数得到积分值。

对于任意函数$f$，我们可以将其拆成正值部分$f^+$和负值部分$f^-$。也就是说：
$$
f^+=\left\{\begin{matrix}
f, &f>0\\
0, &f\le0
\end{matrix}\right.,\quad f^-=\left\{\begin{matrix}
0, &f>0\\
-f, &f\le0
\end{matrix}\right.$$

而$f$整体的积分为：
$$
\int f\ \mathrm d\mu=\int f^+\ \mathrm d\mu-\int f^-\ \mathrm d\mu
$$
$\vert f\vert $的积分为：
$$
\int f\ \mathrm d\mu=\int f^+\ \mathrm d\mu+\int f^-\ \mathrm d\mu
$$
由此，我们得到了Lebesgue积分的完整定义。

---

剩下待施工的部分：
- Derivative: Lebesgue导数；
- Measure Product: 更高维度的测度；
- $\mathcal L^p$ Space: 赋范空间；
- Hilbert Space: 内积和希尔伯特空间；
- Functional on Hilbert Space: 希尔伯特空间上的泛函；
- Probability: 概率测度。


> 你永远无法逃离线性代数的真实。
{: .prompt-danger }