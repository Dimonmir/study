function bfs(graph, start, target) {
    const visited = new Set(); // Множество посещенных вершин
    const queue = [start]; // Очередь для обхода

    while (queue.length > 0) {
        const current = queue.shift(); // Берем вершину из очереди

        if (current === target) {
            return true; // Элемент найден
        }

        if (!visited.has(current)) {
            visited.add(current); // Помечаем вершину как посещенную

            // Добавляем соседей текущей вершины в очередь
            const neighbors = graph.get(current) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return false; // Элемент не найден
}

// Пример использования
console.log(bfs(graph, 1, 4)); // Вывод: true
console.log(bfs(graph, 1, 5)); // Вывод: false