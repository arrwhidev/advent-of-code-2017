function parseInput(input) {
    return input
        .split('\n')
        .filter(l => l !== '')
        .map(l => {
            const [depth, range] = l.split(': ')
            return { depth: parseInt(depth), range: parseInt(range) }
        });
}

function generateLayers(input) {
    const lines = parseInput(input)
    const maxDepth = Math.max(...lines.map(l => l.depth))
    const layers = new Array(maxDepth)
    for (let d = 0; d < maxDepth; d++) {
        const { range = 0 } = lines.find(l => l.depth === d) || {}
        layers[d] = { range }
    }
    return layers
}

class Scanner {
    constructor(layers) {
        layers.forEach(l => {
            l.scannerPos = 0
            l.scannerMode = 'inc'
        })
    }

    inc(layers) {
        layers.filter(l => l.range !== 0).forEach(l => {
            if (l.scannerMode === 'inc' && l.scannerPos === (l.range - 1)) l.scannerMode = 'dec';
            if (l.scannerMode === 'dec' && l.scannerPos === 0) l.scannerMode = 'inc'
            l.scannerPos = (l.scannerMode === 'inc') ? l.scannerPos + 1 : l.scannerPos - 1
        })
    }
}

function traverseFirewall(layers) {
    const scanner = new Scanner(layers)
    return layers.reduce((severity, layer, i) => {
        if (layer.scannerPos === 0) {
            severity += (i * layer.range)
        }
        scanner.inc(layers)
        return severity
    }, 0);
}

module.exports = { generateLayers, traverseFirewall }
