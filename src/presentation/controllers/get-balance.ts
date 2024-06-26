import { IGetClientBalanceById } from "@/domain/usecases/get-client-balance";
import { InvalidParamError, ServerError } from "../erros";
import { badRequest, ok } from "../hepers";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";

export class GetBalanceController implements IController {
  constructor(private readonly clientBalance: IGetClientBalanceById) {}
  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params;
      if (Number.isInteger(id) && id > -1) {
        const clientBalance = await this.clientBalance.getById(id);
        if (clientBalance) {
          return ok(clientBalance);
        }
        return badRequest(new Error("client not found"));
      }
      return badRequest(new InvalidParamError());
    } catch (error: any) {
      return badRequest(new ServerError(error.stack));
    }
  }
}
