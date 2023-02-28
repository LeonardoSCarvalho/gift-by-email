import { UserRepository } from "@/application/ports/user-repository"
import { User } from "@/domain/entities/user"
import { UserData } from "@/domain/entities/user-data"
import { InvalidEmailError, InvalidNameError } from "@/domain/errors"
import { Either, left, right } from "@/shared/either"

export class RegiesterUserOnMailingList {
  constructor(private readonly userRepository: UserRepository) {}
  async perform(
    request: UserData
  ): Promise<Either<InvalidEmailError | InvalidNameError, UserData>> {
    const userOrError: Either<InvalidEmailError | InvalidNameError, User> =
      User.create(request)
    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }
    if (!(await this.userRepository.exists(request.email))) {
      await this.userRepository.add(request)
    }
    return right(request)
  }
}
