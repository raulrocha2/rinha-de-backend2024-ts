export class InvalidParamError extends Error {
  constructor() {
    super("Invalid Param!");
    this.name = "InvalidParamError";
  }
}
