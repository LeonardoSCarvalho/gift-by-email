import { UserRepository } from "@/application/ports/user-repository"
import { RegisterUserOnMailingList } from "@/application/usecases/register-user-on-mailing-list/register-user-on-mailing-list"
import { UserData } from "@/domain/entities/user-data"
import { InvalidEmailError, InvalidNameError } from "@/domain/errors"
import { InMemoryUserRepository } from "@/infra/repositories/in-memory-user-repository"
import { left } from "@/shared/either"

describe("Regiter User on mailing list use case", () => {
  it("Should add user with complete data in mailing list", async () => {
    const users: UserData[] = []
    const userRepository: UserRepository = new InMemoryUserRepository(users)
    const registerUserOnMailingList = new RegisterUserOnMailingList(
      userRepository
    )
    const name = "any name"
    const email = "any@email.com"
    const response = await registerUserOnMailingList.perform({ name, email })
    const user = await userRepository.findUserByEmail(email)
    expect(user).toBeTruthy()
    expect(response.value.name).toBe(name)
  })

  it("Should not add user with invalid email to mailing list", async () => {
    const users: UserData[] = []
    const userRepository: UserRepository = new InMemoryUserRepository(users)
    const registerUserOnMailingList = new RegisterUserOnMailingList(
      userRepository
    )
    const name = "any name"
    const emailInvalid = "invalid_email"
    const response = await registerUserOnMailingList.perform({
      name,
      email: emailInvalid,
    })
    const user = await userRepository.findUserByEmail(emailInvalid)
    expect(user).toBeNull()
    expect(response).toEqual(left(new InvalidEmailError()))
  })

  it("Should not add user with invalid name to mailing list", async () => {
    const users: UserData[] = []
    const userRepository: UserRepository = new InMemoryUserRepository(users)
    const registerUserOnMailingList = new RegisterUserOnMailingList(
      userRepository
    )
    const nameInvalid = "i"
    const email = "any@email.com"
    const response = await registerUserOnMailingList.perform({
      name: nameInvalid,
      email,
    })
    const user = await userRepository.findUserByEmail(email)
    expect(user).toBeNull()
    expect(response).toEqual(left(new InvalidNameError()))
  })
})
