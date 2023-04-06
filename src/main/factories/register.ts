import { RegisterUserOnMailingList } from "@/application/usecases/register-user-on-mailing-list/register-user-on-mailing-list"
import { RegisterUserController } from "@/infra/controllers/register-user-controller"
import { InMemoryUserRepository } from "@/infra/repositories/in-memory-user-repository"

export const makeRegisterUserController = (): RegisterUserController => {
  const inMemoryUserRepository = new InMemoryUserRepository([])
  const registerUserOnMailingList = new RegisterUserOnMailingList(
    inMemoryUserRepository
  )
  const registerUserController = new RegisterUserController(
    registerUserOnMailingList
  )
  return registerUserController
}
