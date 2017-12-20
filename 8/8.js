function runInstructions(lines) {
    return lines
        .map(line => convertLineToInstruction(line))
        .reduce((register, inst) => {
            if (!register[inst.reg]) register[inst.reg] = 0
            if (!register[inst.condition.reg]) register[inst.condition.reg] = 0
            if (inst.execCondition(register)) inst.execInstruction(register)
            return register
        }, {})
}

function convertLineToInstruction(line) {
    const parts = line.split(' ')
    return {
        reg: parts[0],
        op: (parts[1] === 'inc') ? '+=' : '-=',
        amount: parseInt(parts[2]),
        condition: {
            reg: parts[4],
            op: parts[5],
            amount: parts[6]
        },
        execCondition: function(reg) {
            const ev = `reg['${this.condition.reg}'] ${this.condition.op} ${this.condition.amount}`;
            return eval(ev);
        },
        execInstruction: function(reg) {
            const ev = `reg['${this.reg}'] ${this.op} ${this.amount}`;
            eval(ev);
        }
    }
}

module.exports = { runInstructions }
