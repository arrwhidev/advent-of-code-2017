function convertRow(row) {
    const item = { name: '', weight: 0, items: [] };

    const [firstHalf, secondHalf] = row.split('-> ')
    let [name, weight] = firstHalf.split(' ')

    item.name = name
    item.weight = parseInt(weight.replace(/\D+/g, ''))
    if (secondHalf) {
        item.items = secondHalf.split(', ');
    }

    return item
}

function findRoot(lines) {
    const rows = lines
        .map(row => convertRow(row))
        .filter(row => row.items.length > 0);

    const allChildNodes = rows.reduce((all, row) => [...all, ...row.items], []);
    return rows.reduce((root, row) => {
        if (!root) {
            const isac = allChildNodes.includes(row.name)
            if (!isac) {
                root = row.name
            }
        }

        return root
    }, null);
}

module.exports = { convertRow, findRoot }
