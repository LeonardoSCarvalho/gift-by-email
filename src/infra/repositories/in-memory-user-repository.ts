import { UserRepository } from "@/application/ports/user-repository"
import { UserData } from "@/domain/entities/user-data"

export class InMemoryUserRepository implements UserRepository {
  constructor(private readonly users: UserData[]) {}
  async add(user: UserData): Promise<void> {
    const exists = await this.exists(user.email)
    if (exists) {
      return
    }
    this.users.push(user)
  }
  async findUserByEmail(email: string): Promise<UserData | null> {
    const user = this.users.find((user) => user.email === email)
    return user ?? null
  }
  async findAllUsers(): Promise<UserData[] | null> {
    return this.users.length > 0 ? this.users : null
  }
  async exists(email: string): Promise<boolean> {
    const user = await this.findUserByEmail(email)
    return user !== null
  }
}
