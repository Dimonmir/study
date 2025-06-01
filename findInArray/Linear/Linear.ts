function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const array: number[] = [3, 5, 2, 8, 10];
const target: number = 8;
console.log(linearSearch(array, target)); // Вывод: 3