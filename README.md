# Sorting Algorithm 

在计算机科学与数学中，一个排序算法（英语：Sorting algorithm）是一种能将一串数据依照特定排序方式进行排列的一种算法。最常用到的排序方式是数值顺序以及字典顺序。有效的排序算法在一些算法（例如搜索算法与合并算法）中是重要的，如此这些算法才能得到正确解答。排序算法也用在处理文字数据以及产生人类可读的输出结果。基本上，排序算法的输出必须遵守下列两个原则：

 1. 输出结果为递增序列（递增是针对所需的排序顺序而言）
 2. 输出结果是原输入的一种排列、或是重组

### 排序算法说明

#### （1）排序的定义：对一序列对象根据某个关键字进行排序；

* 输入：n个数：a1,a2,a3,...,an 
* 输出：n个数的排列:a1',a2',a3',...,an'，使得a1'<=a2'<=a3'<=...<=an'。

再讲的形象点就是排排坐，调座位，高的站在后面，矮的站在前面咯。

#### （2）对于评述算法优劣术语的说明

* 稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；
* 不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；

* 内排序：所有排序操作都在内存中完成； 
* 外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；

* 时间复杂度: 一个算法执行所耗费的时间。 
* 空间复杂度: 运行完一个程序所需内存的大小。

关于时间空间复杂度的更多了解请戳这里，或是看书程杰大大编写的《大话数据结构》还是很赞的，通俗易懂。

#### （3）排序算法图片总结(图片来源于网络):

排序对比：

![][1]

这里写图片描述

**图片名词解释**： n: 数据规模 k:“桶”的个数 In-place: 占用常数内存，不占用额外内存 Out-place: 占用额外内存

排序分类：

![][2]


## 排序算法列表

在这个表格中，n是要被排序的纪录数量以及k是不同键值的数量。

### 稳定的排序

* 冒泡排序（bubble sort）— O(n2)
* 插入排序（insertion sort）—O(n2)
* 鸡尾酒排序（cocktail sort）—O(n2)
* 桶排序（bucket sort）—O(n)；需要O(k)额外空间
* 计数排序（counting sort）—O(n+k)；需要O(n+k)额外空间
* 归并排序（merge sort）—O(n log n)；需要O(n)额外空间
* 原地归并排序— O(n log2 n)如果使用最佳的现在版本
* 二叉排序树排序（binary tree sort）— O(n log n)期望时间；O(n2)最坏时间；需要O(n)额外空间
* 鸽巢排序（pigeonhole sort）—O(n+k)；需要O(k)额外空间
* 基数排序（radix sort）—O(n·k)；需要O(n)额外空间
* 侏儒排序（gnome sort）— O(n2)
* 图书馆排序（library sort）— O(n log n)期望时间；O(n2)最坏时间；需要(1+ε)n额外空间
* 块排序（block sort）— O(n log n)

### 不稳定的排序

* 选择排序（selection sort）—O(n2)
* 希尔排序（shell sort）—O(n log2 n)如果使用最佳的现在版本
* Clover排序算法（Clover sort）—O(n)期望时间，O(n2)最坏情况
* 梳排序— O(n log n)
* 堆排序（heap sort）—O(n log n)
* 平滑排序（smooth sort）— O(n log n)
* 快速排序（quick sort）—O(n log n)期望时间，O(n2)最坏情况；对于大的、随机数列表一般相信是最快的已知排序
* 内省排序（introsort）—O(n log n)
* 耐心排序（patience sort）—O(n log n + k)最坏情况时间，需要额外的O(n + k)空间，也需要找到最长的递增子序列（longest increasing subsequence）

### 不实用的排序

* Bogo排序— O(n × n!)，最坏的情况下期望时间为无穷。
* Stupid排序—O(n3);递归版本需要O(n2)额外内存
* 珠排序（bead sort）— O(n) or O(√n),但需要特别的硬件
* 煎饼排序—O(n),但需要特别的硬件
* 臭皮匠排序（stooge sort）算法简单，但需要约n^2.7的时间


参考资料：[https://github.com/damonare/Sorts][3]


  [1]: https://camo.githubusercontent.com/0bb4e89a39a21e1f11d4fccfa65946c8421c2356/687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313533323132373136
  [2]: https://camo.githubusercontent.com/1e3caaff1bad189238445096025d9d961fd359d0/687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313534303336383837
  [3]: https://github.com/damonare/Sorts