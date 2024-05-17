"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayOperations = void 0;
const arrayOperations = (req, res) => {
    const array = req.body.array;
    // Example array operations
    const filteredArray = array.filter((num) => num % 2 === 0);
    const mappedArray = array.map((num) => num * 2);
    const reducedSum = array.reduce((acc, num) => acc + num, 0);
    res.json({
        filteredArray,
        mappedArray,
        reducedSum,
    });
};
exports.arrayOperations = arrayOperations;
