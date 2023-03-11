import { UserData } from "@/domain/entities/user-data"
import { InMemoryUserRepository } from "@/infra/repositories/in-memory-user-repository"

describe("In memory User repository", () => {
  it("Should return null if user is not found", async () => {
    const users: UserData[] = []
    const useRepository = new InMemoryUserRepository(users)
    const user = await useRepository.findUserByEmail("any@email.com")
    expect(user).toBeNull()
  })
  it("Should return null if user is empty", async () => {
    const users: UserData[] = []
    const useRepository = new InMemoryUserRepository(users)
    const user = await useRepository.findUserByEmail("")
    expect(user).toBeNull()
  })
  it("Should return if it is found in the repository", async () => {
    const users: UserData[] = []
    const name = "any_name"
    const email = "any_email"
    const userRepository = new InMemoryUserRepository(users)
    await userRepository.add({ name, email })
    const user = await userRepository.findUserByEmail(email)
    expect(user?.name).toEqual(name)
  })
})
