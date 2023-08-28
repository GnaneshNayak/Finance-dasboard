export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}
export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface ExpensesByCategory {
  salaries: number;
  services: number;
  supplies: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalExpenses: number;
  totalProfit: number;
  totalRevenue: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}
export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionsResponse {
  _id: string;
  __v: number;
  amount: number;
  buyer: string;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}
