function hashSearch(arr: number[], target: number): number {
    const hashTable: { [key: number]: number } = {};

    for (let i = 0; i < arr.length; i++) {
        hashTable[arr[i]] = i;
    }
    
    return hashTable[target] !== undefined ? hashTable[target] : -1;
}

// Пример использования
const hashArray: number[] = [3, 5, 2, 8, 10];
const hashTarget: number = 8;
console.log(hashSearch(hashArray, hashTarget)); // Вывод: 3