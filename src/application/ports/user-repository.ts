import { UserData } from "@/domain/entities/user-data"

export interface UserRepository {
  add(user: UserData): Promise<void>
  findUserByEmail(email: string): Promise<UserData | null>
  findAllUsers(): Promise<UserData[] | null>
  exists(email: string): Promise<boolean>
}
