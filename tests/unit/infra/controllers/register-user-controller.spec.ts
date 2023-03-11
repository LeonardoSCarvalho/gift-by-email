import { RegisterUserOnMailingList } from "@/application/usecases/register-user-on-mailing-list/register-user-on-mailing-list"
import { UserData } from "@/domain/entities/user-data"
import { InvalidEmailError, InvalidNameError } from "@/domain/errors"
import { HttpRequest, HttpResponse } from "@/infra/controllers/ports/"
import { ResgisterUserController } from "@/infra/controllers/register-user-controller"
import { InMemoryUserRepository } from "@/infra/repositories/in-memory-user-repository"

describe("Registe user web controller", () => {
  it("Should return status code 201 when request contains valid user data", async () => {
    const request: HttpRequest = {
      body: {
        name: "any_name",
        email: "any@email.com",
      },
    }
    const users: UserData[] = []
    const userRepository = new InMemoryUserRepository(users)
    const registerUserOnMailingList = new RegisterUserOnMailingList(
      userRepository
    )
    const registerUserController: ResgisterUserController =
      new ResgisterUserController(registerUserOnMailingList)
    const response: HttpResponse = (await registerUserController.handle(
      request
    )) as HttpResponse
    expect(response.statusCode).toEqual(201)
    expect(response.body).toEqual(request.body)
  })
  it("Should return status code 400 when request contains invalid name", async () => {
    const requestWithInvalidName: HttpRequest = {
      body: {
        name: "a",
        email: "any@email.com",
      },
    }
    const users: UserData[] = []
    const userRepository = new InMemoryUserRepository(users)
    const registerUserOnMailingList = new RegisterUserOnMailingList(
      userRepository
    )
    const registerUserController: ResgisterUserController =
      new ResgisterUserController(registerUserOnMailingList)
    const response: HttpResponse = (await registerUserController.handle(
      requestWithInvalidName
    )) as HttpResponse
    expect(response.statusCode).toEqual(400)
    expect(response.body).toBeInstanceOf(InvalidNameError)
  })

  it("Should return status code 400 when request contains invalid name", async () => {
    const requestWithInvalidName: HttpRequest = {
      body: {
        name: "a",
        email: "any@email.com",
      },
    }
    const users: UserData[] = []
    const userRepository = new InMemoryUserRepository(users)
    const registerUserOnMailingList = new RegisterUserOnMailingList(
      userRepository
    )
    const registerUserController: ResgisterUserController =
      new ResgisterUserController(registerUserOnMailingList)
    const response: HttpResponse = (await registerUserController.handle(
      requestWithInvalidName
    )) as HttpResponse
    expect(response.statusCode).toEqual(400)
    expect(response.body).toBeInstanceOf(InvalidNameError)
  })

  it("Should return status code 400 when request contains invalid email", async () => {
    const requestWithInvalidName: HttpRequest = {
      body: {
        name: "any_name",
        email: "a",
      },
    }
    const users: UserData[] = []
    const userRepository = new InMemoryUserRepository(users)
    const registerUserOnMailingList = new RegisterUserOnMailingList(
      userRepository
    )
    const registerUserController: ResgisterUserController =
      new ResgisterUserController(registerUserOnMailingList)
    const response: HttpResponse = (await registerUserController.handle(
      requestWithInvalidName
    )) as HttpResponse
    expect(response.statusCode).toEqual(400)
    expect(response.body).toBeInstanceOf(InvalidEmailError)
  })
})
