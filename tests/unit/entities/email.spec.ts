import { Email } from "@/domain/entities/email"

describe("Email  validator", () => {
  it("Should not accept null string", () => {
    const payload = null as unknown as string
    expect(Email.validade(payload)).toBeFalsy()
  })
  it("should accept valid email", () => {
    const email = "aby@mail.com"
    expect(Email.validade(email)).toBeTruthy()
  })
})
