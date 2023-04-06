import app from "@/main/config/app"
import request from "supertest"

describe("Register router", () => {
  it.skip("should return an account on success", async () => {
    app.post("/test_cors", (req, res) => {
      res.send()
    })
    await request(app)
      .post("/api/register")
      .send({
        name: "leonardo",
        email: "teste@mail.com",
      })
      .expect(201)
  })
})
