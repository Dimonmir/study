function binarySearch(arr: number[], target: number): number {
    let left: number = 0;
    let right: number = arr.length - 1;

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Элемент найден
        } else if (arr[mid] < target) {
            left = mid + 1; // Ищем в правой половине
        } else {
            right = mid - 1; // Ищем в левой половине
        }
    }

    return -1; // Элемент не найден
}

const sortedArray: number[] = [2, 3, 5, 8, 10];
const binaryTarget: number = 8;
console.log(binarySearch(sortedArray, binaryTarget)); // Вывод: 3