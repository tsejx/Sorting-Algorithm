/**
 * 方法说明：快速排序
 * @param {Array} array 待排序数组
 * @return {Array}
 */

// 方法一
function quickSort(arr, left, right) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
    if (left < right) {
      var x = arr[right],
          i = left - 1,
          temp;
      for (var j = left; j <= right; j++) {
        if (arr[j] <= x) {
          i++;
          // temp = arr[i];
          // arr[i] = arr[j];
          // arr[j] = temp;
          [arr[i],arr[j]] = [arr[j],arr[i]]; // ES6解构赋值
        }
      }
      quickSort(arr, left, i - 1);
      quickSort(arr, i + 1, right);
    }
    return arr;
  } else {
    return 'arr is not an Array or left or right is not a number!';
  }
}

// 方法2
function quickSort2(arr){
  if(arr.length <= 1){
    return arr;
  }
  var base = arr.splice(~~(arr.length/2), 1)[0];
  var left = [];
  var right = [];
  while(arr.length){
    if(arr[0] < base){
      left.push(arr.shift());
    }else{
      right.push(arr.shift());
    }
  }
  return quickSort(left).concat(base, quickSort(right));
}

// 方法3
function quickSort3(arr) {
  return arr.length <= 1 ? arr : quickSort(arr.slice(1).filter(item => item <= arr[0])).concat(arr[0], quickSort(arr.slice(1).filter(item => item > arr[0])));
}