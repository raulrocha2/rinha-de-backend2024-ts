import { IClientBalanceModel } from "@/domain/models";

export const mockClientBalance = (): IClientBalanceModel => ({
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
