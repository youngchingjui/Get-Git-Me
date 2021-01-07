export const getIndexOfMin = (arr) => {
  let minIndex = 0

  for (const [i, value] of arr.entries()) {
    if (value < arr[minIndex]) {
      minIndex = i
    }
  }
  return minIndex
}
