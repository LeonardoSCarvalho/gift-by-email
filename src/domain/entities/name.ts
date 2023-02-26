import { Either, left, right } from "@/shared/either"
import { InvalidNameError } from "../errors"

export class Name {
  private constructor(private readonly name: string) {}
  static create(name: string): Either<InvalidNameError, Name> {
    if (!Name.validate(name)) return left(new InvalidNameError())
    return right(new Name(name))
  }
  static validate(name: string) {
    if (!name) return false
    if (name.trim().length < 2 || name.trim().length > 256) return false
    return true
  }
}
