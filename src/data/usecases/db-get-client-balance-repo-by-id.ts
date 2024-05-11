import { IGetClientBalanceById } from "@/domain/usecases/get-client-balance";
import { ILoadClintBalanceByIdRepo } from "../db";

export class DbGetClientBalanceById implements IGetClientBalanceById {
  constructor(
    private readonly loadClientBalanceRepo: ILoadClintBalanceByIdRepo
  ) {}
  async getById(id: string): Promise<any> {
    await this.loadClientBalanceRepo.loadById(id);
  }
}
