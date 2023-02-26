import { Either, left, right } from "@/shared/either"
import { InvalidEmailError, InvalidNameError } from "../errors"
import { Email } from "./email"
import { Name } from "./name"
import { UserData } from "./user-data"

export class User {
  private constructor(readonly name: Name, readonly email: Email) {
    this.name = name
    this.email = email
  }
  static create(
    userData: UserData
  ): Either<InvalidEmailError | InvalidNameError, User> {
    const nameOrError = Name.create(userData.name)
    const emailOrError = Email.create(userData.email)
    if (nameOrError.isLeft()) return left(new InvalidNameError())
    if (emailOrError.isLeft()) return left(new InvalidEmailError())

    const name: Name = nameOrError.value as Name
    const email: Email = emailOrError.value as Email
    return right(new User(name, email))
  }
}
