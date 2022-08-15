class GuessingGame {
  constructor() {}

  array = [];

  setRange(min, max) {
    for (let i = min; i < max; i++) this.array.push(i);
  }

  guess() {
    return this.array[this.getNumber()];
  }

  lower() {
    this.array = this.array.slice(0, this.getNumber());
  }

  greater() {
    this.array = this.array.slice(this.getNumber());
  }

  getNumber() {
    return Math.ceil(this.array.length / 2);
  }
}

module.exports = GuessingGame;
