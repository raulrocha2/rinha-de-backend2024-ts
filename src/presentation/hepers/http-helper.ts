import { IHttpResponse } from "../protocols";

export const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 404,
  body: error,
});

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  body: data,
});
