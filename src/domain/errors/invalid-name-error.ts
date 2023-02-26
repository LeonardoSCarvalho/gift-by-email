export class InvalidNameError extends Error {
  constructor() {
    super("Invalid name")
    this.name = "InvalidNameError"
  }
}
