import { User } from "@/domain/entities/user"
import { InvalidEmailError } from "@/domain/errors/invalid-email-error"
import { InvalidNameError } from "@/domain/errors/invalid-name-error"
import { left } from "@/shared/either"

describe("User domain entity ", () => {
  it("Should not create user with invalid e-mail address", () => {
    const invalidEmail = "invalid_email"
    const error = User.create({ name: "John Doe", email: invalidEmail })
    expect(error).toEqual(left(new InvalidEmailError()))
    expect(error.value).toBeInstanceOf(InvalidEmailError)
    expect(error.isLeft()).toBeTruthy()
  })

  it("Should not create user with invalid name (too few characters)", () => {
    const invalidName = "o     "
    const error = User.create({ name: invalidName, email: "any@email.com" })
    expect(error).toEqual(left(new InvalidNameError()))
  })

  it("Should not create user with invalid name (too many characters)", () => {
    const invalidName = "o".repeat(257)
    const error = User.create({ name: invalidName, email: "any@email.com" })
    expect(error).toEqual(left(new InvalidNameError()))
  })

  it("Should create user with valid data", () => {
    const validName = "any_name"
    const validEmail = "any@email.com"
    const user: User = User.create({ name: validName, email: validEmail })
      .value as User
    expect(user.name).toEqual({ name: "any_name" })
    expect(user.email).toEqual({ email: "any@email.com" })
  })
})
