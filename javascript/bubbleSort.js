/**
 * 方法说明：冒泡排序
 * @param {Array} arr
 * @return {Array}
 */

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) { //相邻元素两两对比
        // var temp = arr[j + 1]; //元素交换
        // arr[j + 1] = arr[j];
        // arr[j] = temp;
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; // ES6解构赋值
      }
    }
  }
  return arr;
}

// 1.改进冒泡排序
function bubbleSort2(arr) {
  var i = arr.length - 1; //初始时,最后位置保持不变
  while (i > 0) {
    var pos = 0; //每趟开始时,无记录交换
    for (var j = 0; j < i; j++)
      if (arr[j] > arr[j + 1]) {
        pos = j; //记录交换的位置
        // var tmp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = tmp;
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; // ES6解构赋值
      }
    i = pos; //为下一趟排序作准备
  }
  return arr;
}

// 2.改进冒泡排序
function bubbleSort3(arr) {
  var low = 0;
  var high = arr.length - 1; //设置变量的初始值
  var j;
  // var tmp;
  while (low < high) {
    for (j = low; j < high; ++j) //正向冒泡,找到最大者
      if (arr[j] > arr[j + 1]) {
        // tmp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = tmp;
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; // ES6解构赋值
      }
      --high; //修改high值, 前移一位
    for (j = high; j > low; --j) //反向冒泡,找到最小者
      if (arr[j] < arr[j - 1]) {
        // tmp = arr[j];
        // arr[j] = arr[j - 1];
        // arr[j - 1] = tmp;
        [arr[j],arr[j-1]] = [arr[j-1],arr[j]]; // ES6解构赋值
      }
      ++low; //修改low值,后移一位
  }
  return arr;
}