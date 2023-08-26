const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM') {
      return a + b;
    } else {
      throw new Error('Invalid calculation type');
    }
  }
};


module.exports = Utils;
