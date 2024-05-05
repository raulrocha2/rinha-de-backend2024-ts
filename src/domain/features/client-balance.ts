import { BalanceAccount } from "@/domain/models";

export interface IGetClientBalance {
  getBalance: (Params: ClientBalance.Params) => Promise<ClientBalance.Result>;
}

export namespace ClientBalance {
  export type Params = {
    id: number;
  };
  export type Result = undefined | BalanceAccount;
}
