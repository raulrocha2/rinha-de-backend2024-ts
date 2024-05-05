export type BalanceAccount = {
  totalAmount: number;
  dateBalance: Date;
  bounder: number;
  lastTransaction?: LastTransaction;
};

export type LastTransaction = {
  amount: number;
  transactinType: string;
  description: string;
  transactionDate: Date;
};
