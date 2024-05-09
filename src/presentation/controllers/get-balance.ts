import { IGetClientBalance } from "@/domain/usecases/get-client-balance";
import { InvalidParamError } from "../erros";
import { badRequest } from "../hepers";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";

export class GetBalanceController implements IController {
  constructor(private readonly clientBalance: IGetClientBalance) {}
  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { id } = httpRequest.params;
    if (Number.isInteger(id) && id > -1) {
      await this.clientBalance.getById(id);
      return badRequest(new Error("client not found"));
    }
    return badRequest(new InvalidParamError());
  }
}
