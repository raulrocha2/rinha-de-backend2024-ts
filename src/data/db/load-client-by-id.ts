import { IClientBalanceModel } from "@/domain/models";

export interface ILoadClintBalanceByIdRepo {
  loadById: (id: string) => Promise<IClientBalanceModel>;
}
