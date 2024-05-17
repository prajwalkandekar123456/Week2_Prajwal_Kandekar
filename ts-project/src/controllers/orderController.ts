import { Request, Response } from "express";
import pool from "../utils/db";
import { OrdersRequest, Order } from "../models/order";

export const processOrders = async (req: Request, res: Response) => {
  try {
    const orders: Order[] = (req.body as OrdersRequest).items;

    // Filter orders
    const filteredOrders = orders.filter(
      (order) => !order.orderBlocks.some((block) => block.lineNo % 3 === 0)
    );

    // Insert orderIDs into the database
    for (const order of filteredOrders) {
      await pool.query("INSERT INTO orders (orderID) VALUES ($1)", [
        order.orderID,
      ]);
    }

    res.status(200).send("Orders processed and stored successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while processing orders.");
  }
};
