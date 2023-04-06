import { Router } from "express"
import { adaptRoute } from "../adapters"
import { makeRegisterUserController } from "../factories"

export default (router: Router): void => {
  router.post("/register", adaptRoute(makeRegisterUserController()))
}
