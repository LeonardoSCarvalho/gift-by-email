import { RegisterUserOnMailingList } from "@/application/usecases/register-user-on-mailing-list/register-user-on-mailing-list"
import { UserData } from "@/domain/entities/user-data"
import { HttpRequest, HttpResponse } from "./ports"
import { badRequest, created } from "./utils"

export class ResgisterUserController {
  constructor(private readonly useCase: RegisterUserOnMailingList) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const userDdata: UserData = request.body
    const response = await this.useCase.perform(userDdata)
    if (response.isRight()) {
      return created(response.value)
    }
    return badRequest(response.value)
  }
}
