import { ILoadClintBalanceByIdRepo } from "@/data/db";
import { IClientBalanceModel } from "@/domain/models";
import { mockClientBalance } from "@/tests/mocks";
import { DbGetClientBalanceById } from "@/data/usecases/db-get-client-balance-repo-by-id";

const makeLoadClientBalanceByIdRepo = (): ILoadClintBalanceByIdRepo => {
  class LoadClientBalanceByIdRepo implements ILoadClintBalanceByIdRepo {
    async loadById(id: string): Promise<IClientBalanceModel> {
      return await new Promise((resolve) => resolve(mockClientBalance()));
    }
  }
  return new LoadClientBalanceByIdRepo();
};

const makeSut = (): any => {
  const loadClientRepoStub = makeLoadClientBalanceByIdRepo();
  const sut = new DbGetClientBalanceById(loadClientRepoStub);
  return {
    sut,
    loadClientRepoStub,
  };
};

describe("DbGetClientBalanceById Usecase", () => {
  test("should call LoadClientBalanceByIdRepo with correct id", async () => {
    const { sut, loadClientRepoStub } = makeSut();
    const loadBalanceSpy = jest.spyOn(loadClientRepoStub, "loadById");
    await sut.getById("any_id");
    expect(loadBalanceSpy).toHaveBeenCalledWith("any_id");
  });
});
