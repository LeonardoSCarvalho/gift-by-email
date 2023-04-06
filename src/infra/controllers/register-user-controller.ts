import { UseCase } from "@/application/usecases/ports/use-case"
import { UserData } from "@/domain/entities/user-data"
import { HttpRequest, HttpResponse } from "./ports"
import { badRequest, created, serverError } from "./utils"

export class RegisterUserController {
  constructor(private readonly useCase: UseCase) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const userDdata: UserData = request.body
      const response = await this.useCase.perform(userDdata)
      if (response.isRight()) {
        return created(response.value)
      }
      return badRequest(response.value)
    } catch (error) {
      return serverError(error)
    }
  }
}
