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
})
