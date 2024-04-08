class NumberGenerator {
    constructor() {
        this.numbers = {};
    }

    generate6of49(iterations) {
        for (let i = 0; i < iterations; i++) {
            this.numbers[i] = [];
            for (let n = 0; n < 6; n++) {
                this.numbers[i].push(this.newNumber(i, 49));
            }
            this.numbers[i].sort((a, b) => a - b);
            this.numbers[i] = this.numbers[i].join(',');
        }
    }

    generateJoker(iterations) {
        for (let i = 0; i < iterations; i++) {
            const key = `${i}j`;
            this.numbers[key] = [];
            for (let n = 0; n < 5; n++) {
                this.numbers[key].push(this.newNumber(key, 45));
            }
            const joker = this.newNumber(i + 1 + 'j', 20);
            this.numbers[key].sort((a, b) => a - b);
            this.numbers[key] = this.numbers[key].join(',') + ' - ' + joker;
        }
    }

    newNumber(currentIteration, maxNumber) {
        let number = Math.floor(Math.random() * maxNumber) + 1;
        if (this.numbers[currentIteration] &&
            Array.isArray(this.numbers[currentIteration]) &&
            this.numbers[currentIteration].includes(number)) {
            return this.newNumber(currentIteration, maxNumber);
        }
        return number;
    }

    printNumbers(sixNumbersIterations = 3, jokerIterations = 2) {
        this.generate6of49(sixNumbersIterations);
        this.generateJoker(jokerIterations);
    }
}

class WeightedNumberGenerator {

    constructor() {
        this.numbers = {};
    }
    weightedRandomNumber(frequencies) {
        const total = Object.values(frequencies).reduce((acc, val) => acc + val, 0);
        let rand = Math.floor(Math.random() * total) + 1;
        let runningTotal = 0;
        for (const [number, frequency] of Object.entries(frequencies)) {
            runningTotal += frequency;
            if (rand <= runningTotal) {
                return parseInt(number);
            }
        }
        return 1; // Fallback in case something goes wrong
    }

    generateLotteryTicket(frequencies, amount) {
        const ticket = [];
        while (ticket.length < amount) {
            const number = this.weightedRandomNumber(frequencies);
            if (!ticket.includes(number)) {
                ticket.push(number);
            }
        }
        ticket.sort((a, b) => a - b);

        let key;
        if (amount === 5) {
            const joker = Math.floor(Math.random() * 20) + 1;
            ticket.push('/');
            ticket.push(joker);
            key = 'j' + Object.keys(this.numbers).length;
        } else {
            key = Object.keys(this.numbers).length;
        }

        this.numbers[key] = ticket;
    }
}

const sixOfFortyNineNumberFrequency = {
    1: 248,
    2: 275,
    3: 258,
    4: 284,
    5: 296,
    6: 288,
    7: 254,
    8: 253,
    9: 269,
    10: 265,
    11: 246,
    12: 273,
    13: 278,
    14: 241,
    15: 246,
    16: 251,
    17: 266,
    18: 251,
    19: 233,
    20: 246,
    21: 247,
    22: 238,
    23: 267,
    24: 262,
    25: 276,
    26: 259,
    27: 282,
    28: 253,
    29: 247,
    30: 262,
    31: 227,
    32: 258,
    33: 270,
    34: 250,
    35: 227,
    36: 286,
    37: 251,
    38: 254,
    39: 256,
    40: 236,
    41: 257,
    42: 226,
    43: 249,
    44: 259,
    45: 254,
    46: 244,
    47: 241,
    48: 263,
    49: 230
};

const jokerNumberFrequency = {
    1: 304,
    2: 312,
    3: 355,
    4: 316,
    5: 334,
    6: 328,
    7: 315,
    8: 313,
    9: 293,
    10: 321,
    11: 280,
    12: 273,
    13: 295,
    14: 292,
    15: 269,
    16: 320,
    17: 320,
    18: 321,
    19: 327,
    20: 341,
    21: 207,
    22: 207,
    23: 219,
    24: 219,
    25: 200,
    26: 192,
    27: 250,
    28: 226,
    29: 215,
    30: 208,
    31: 216,
    32: 218,
    33: 207,
    34: 206,
    35: 206,
    36: 192,
    37: 220,
    38: 178,
    39: 213,
    40: 223,
    41: 204,
    42: 198,
    43: 204,
    44: 217,
    45: 237
};