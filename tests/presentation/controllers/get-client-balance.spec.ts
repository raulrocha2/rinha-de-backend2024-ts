class GetBalanceController {
  async handle(httpRequest: any): Promise<any> {
    return {
      statusCode: 404,
    };
  }
}

describe("Get Balance Controller", () => {
  test("should return 404 if client id is invalid", async () => {
    const sut = new GetBalanceController();
    const httpRequest = {
      params: {
        id: 0,
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(404);
  });
});
