import { Either, left, right } from "@/shared/either"
import { InvalidEmailError, InvalidNameError } from "../errors"
import { Email } from "./email"
import { Name } from "./name"
import { UserData } from "./user-data"

export class User {
  static create(
    userData: UserData
  ): Either<InvalidEmailError | InvalidNameError, User> {
    const nameOrError = Name.create(userData.name)
    const emailOrError = Email.create(userData.email)
    if (nameOrError.isLeft()) return left(new InvalidNameError())
    if (emailOrError.isLeft()) return left(new InvalidEmailError())

    return right(new User())
  }
}
