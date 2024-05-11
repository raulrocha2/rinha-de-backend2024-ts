import { IClientBalanceModel } from "../models";

export interface IGetClientBalanceById {
  getById: (id: string) => Promise<IClientBalanceModel>;
}
