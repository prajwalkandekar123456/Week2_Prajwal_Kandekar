import { Request, Response } from "express";

export const arrayOperations = (req: Request, res: Response) => {
  const array: number[] = req.body.array;

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
