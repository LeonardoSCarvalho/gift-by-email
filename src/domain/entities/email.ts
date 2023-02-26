import { Either, left, right } from "@/shared/either"
import { InvalidEmailError } from "../errors/invalid-email-error"

export class Email {
  private constructor(readonly email: string) {}
  static create(email: string): Either<InvalidEmailError, Email> {
    if (!Email.validate(email)) {
      return left(new InvalidEmailError())
    }
    return right(new Email(email))
  }
  static validate(email: string): boolean {
    const emailRegex =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    if (!email) return false
    if (!emailRegex.test(email)) return false
    if (email.length > 320) return false
    const [local, domain] = email.split("@")
    if (domain.length > 255 || domain.length === 0) return false
    if (local.length > 64 || local.length === 0) return false
    const domailParts = domain.split(".")
    if (
      domailParts.some(function (part) {
        return part.length > 63
      })
    ) {
      return false
    }
    return true
  }
}
