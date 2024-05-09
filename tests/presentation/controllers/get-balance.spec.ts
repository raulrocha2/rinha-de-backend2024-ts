import { GetBalanceController } from "@/presentation/controllers/get-balance";
import { IGetClientBalance } from "@/domain/usecases/get-client-balance";
import { IClientBalanceModel } from "@/domain/models";

type SutTypes = {
  sut: GetBalanceController;
  getClientBalanceStub: any;
};

const mockClientBalance = (): IClientBalanceModel => ({
  saldo: {
    total: -9098,
    data_extrato: "2024-01-17T02:34:41.217753Z",
    limite: 100000,
  },
  ultimas_transacoes: [
    {
      valor: 10,
      tipo: "c",
      descricao: "descricao",
      realizada_em: "2024-01-17T02:34:38.543030Z",
    },
    {
      valor: 90000,
      tipo: "d",
      descricao: "descricao",
      realizada_em: "2024-01-17T02:34:38.543030Z",
    },
  ],
});

const makeGetClient = (): IGetClientBalance => {
  class GetClientBalanceStub implements IGetClientBalance {
    async getById(id: string): Promise<IClientBalanceModel> {
      return await new Promise((resolve) => resolve(mockClientBalance()));
    }
  }
  return new GetClientBalanceStub();
};

const makeSut = (): SutTypes => {
  const getClientBalanceStub = makeGetClient();
  const sut = new GetBalanceController(getClientBalanceStub);
  return {
    sut,
    getClientBalanceStub,
  };
};

describe("Get Balance Controller", () => {
  test("should return 404 if client id is invalid number", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        id: -1,
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(404);
    expect(httpResponse.body).toEqual(new Error("Invalid Param!"));
  });

  test("should return 404 if client id is a string", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        id: "wrong-id",
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(404);
    expect(httpResponse.body).toEqual(new Error("Invalid Param!"));
  });

  test("should return 404 if client id not found", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        id: 0,
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(404);
    expect(httpResponse.body).toEqual(new Error("client not found"));
  });

  test("should call GetClientBalance with correct id", async () => {
    const { sut, getClientBalanceStub } = makeSut();
    const getBalanceSpy = jest.spyOn(getClientBalanceStub, "getById");
    const id = 1;
    const httpRequest = {
      params: {
        id,
      },
    };
    await sut.handle(httpRequest);
    expect(getBalanceSpy).toHaveBeenCalledWith(id);
  });
});
