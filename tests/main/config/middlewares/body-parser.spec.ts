import app from "@/main/config/app"
import request from "supertest"

describe("Body parser middleware", () => {
  it.skip("should parse body as json", () => {
    app.post("/test_body_parser", (req, res) => {
      res.send(req.body)
    })
    request(app)
      .post("/test_body_parser")
      .send({ name: "leonardo" })
      .expect({ name: "leonardo" })
  })
})
