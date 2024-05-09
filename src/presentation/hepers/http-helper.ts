import { IHttpResponse } from "../protocols";

export const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 404,
  body: error,
});
