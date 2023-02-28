import { UserRepository } from "@/application/ports/user-repository"
import { InMemoryUserRepository } from "@/application/repositories/in-memory-user-repository"
import { RegiesterUserOnMailingList } from "@/application/usecases/register-user-on-mailing-list/register-user-on-mailing-list"
import { UserData } from "@/domain/entities/user-data"

describe("Regiter User on mailing list use case", () => {
  it("Should add user with complete data in mailing list", async () => {
    const users: UserData[] = []
    const userRepository: UserRepository = new InMemoryUserRepository(users)
    const registerUserOnMailingList = new RegiesterUserOnMailingList(
      userRepository
    )
    const name = "any name"
    const email = "any@email.com"
    const response = await registerUserOnMailingList.perform({ name, email })
    const user = await userRepository.findUserByEmail(email)
    expect(user).toBeTruthy()
    expect(response.value.name).toBe(name)
  })
})
