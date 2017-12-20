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

function convertToTree(lines) {
    const allNodes = lines.map(row => convertRow(row))
    const root = findRoot(lines)
    const rootNode = allNodes.find(n => n.name === root)
    const tree = {}
    recAdd(tree, rootNode, allNodes)
    return tree
}

function recAdd(tree, node, allNodes) {
    if (!node) return
    tree[node.name] = node
    tree[node.name].children = {}

    node.items.forEach(childName => {
        const childNode = allNodes.find(n => n.name === childName)
        recAdd(tree[node.name].children, childNode, allNodes)
    })

    tree[node.name].items = tree[node.name].children;
    delete tree[node.name].children
}

function findUnbalance(node) {
    const itemKeys = Object.keys(node.items)
    if (itemKeys.length === 0) return node.weight
    let totals = []
    itemKeys.forEach((itemKey, i) => {
        const w = findUnbalance(node.items[itemKey])
        if (i > 0 && w !== totals[i-1]) {
            const diff = w - totals[i-1]
            console.log(`Expected ${totals[i-1]} but got ${w}. Diff = ${diff}. Weight of ${itemKey} should be ${node.items[itemKey].weight - diff}`);
        }
        totals.push(w)
    });

    return node.weight + totals.reduce((a, b) => a + b, 0);
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

module.exports = { convertRow, findRoot, convertToTree, findUnbalance }
