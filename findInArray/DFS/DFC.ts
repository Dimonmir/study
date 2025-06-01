function dfs(graph, start, target) {
    const visited = new Set(); // Множество посещенных вершин
    const stack = [start]; // Стек для обхода

    while (stack.length > 0) {
        const current = stack.pop(); // Берем вершину из стека

        if (current === target) {
            return true; // Элемент найден
        }

        if (!visited.has(current)) {
            visited.add(current); // Помечаем вершину как посещенную

            // Добавляем соседей текущей вершины в стек
            const neighbors = graph.get(current) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }

    return false; // Элемент не найден
}

// Пример использования
const graph = new Map([
    [1, [2, 3]],
    [2, [4]],
    [3, [4]],
    [4, []]
]);

console.log(dfs(graph, 1, 4)); // Вывод: true
console.log(dfs(graph, 1, 5)); // Вывод: false