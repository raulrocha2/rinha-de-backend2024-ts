export interface IClientBalanceModel {
  saldo: {
    total: number;
    data_extrato: string;
    limite: number;
  };
  ultimas_transacoes?: ILastTransactions[];
}

export interface ILastTransactions {
  valor: number;
  tipo: TypeOfTransaction;
  descricao: string;
  realizada_em: string;
}

// credito ou debito
type TypeOfTransaction = "c" | "d";
