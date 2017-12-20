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

module.exports = { convertRow, findRoot, convertToTree }
