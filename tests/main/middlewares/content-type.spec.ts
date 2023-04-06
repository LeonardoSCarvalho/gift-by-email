import app from "@/main/config/app"
import request from "supertest"

describe("Content Type Middleware", () => {
  it("Should return default content type  as json", async () => {
    app.get("/content-type-test", (req, res) => {
      res.send("")
    })
    await request(app).get("/content-type-test").expect("content-type", /json/)
  })
  it("Should return xml content type when forced", async () => {
    app.get("/content-type-test-xml", (req, res) => {
      res.type("xml")
      res.send("")
    })
    await request(app)
      .get("/content-type-test-xml")
      .expect("content-type", "application/xml; charset=utf-8")
  })
})
