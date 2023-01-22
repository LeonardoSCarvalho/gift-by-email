import { Either, left, right } from "@/shared/either"
import { InvalidEmailError } from "../errors/invalid-email-error"
import { Email } from "./email"
import { UserData } from "./user-data"

export class User {
  static create(userData: UserData): Either<InvalidEmailError, User> {
    const emailOrError = Email.create(userData.email)
    if (emailOrError.isLeft()) {
      return left(new InvalidEmailError())
    }
    return right(new User())
  }
}
