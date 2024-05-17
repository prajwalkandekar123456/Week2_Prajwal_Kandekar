export interface OrderBlock {
  lineNo: number;
}

export interface Order {
  orderID: string;
  orderBlocks: OrderBlock[];
}

export interface OrdersRequest {
  items: Order[];
}
