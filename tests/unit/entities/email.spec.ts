import { Email } from "@/domain/entities/email"

describe("Email  validator", () => {
  it("Should not accept null string", () => {
    const payload = null as unknown as string
    expect(Email.validate(payload)).toBeFalsy()
  })
  it("should accept valid email", () => {
    const email = "aby@mail.com"
    expect(Email.validate(email)).toBeTruthy()
  })
  it("Should not accept local part with more than 64 caracters", () => {
    const email = "a".repeat(65) + "@mail.com"
    expect(Email.validate(email)).toBeFalsy()
  })
  it("Should not acccept domain part with more than 255 caracters", () => {
    const email = "aby@mail." + "a".repeat(250) + ".com"
    expect(Email.validate(email)).toBeFalsy()
  })
  it("Should not accept strings with more than 320 caracters", () => {
    const email = "a".repeat(64) + "@mail." + "a".repeat(250) + ".com"
    expect(Email.validate(email)).toBeFalsy()
  })
  it("should not accept empty local part", () => {
    const email = "@mail.com"
    expect(Email.validate(email)).toBeFalsy()
  })
  it("should not accept empty domain", () => {
    const email = "any@"
    expect(Email.validate(email)).toBeFalsy()
  })
  it("Should not accept part of email domain greater than 64", () => {
    const email = "any@" + "d".repeat(64) + ".com"
    expect(Email.validate(email)).toBeFalsy()
  })
  it("Should do not accept spaces in email", () => {
    const email = "any @mail.com"
    expect(Email.validate(email)).toBeFalsy()
  })
  it("should not accept local part with two dots", () => {
    const email = "any..email@email.com"
    expect(Email.validate(email)).toBeFalsy()
  })
  it("should not accept local part with ending dot", () => {
    const email = "any.@email.com"
    expect(Email.validate(email)).toBeFalsy()
  })
  it("should not accept enail without an at-sign", () => {
    const email = "anyemail.com"
    expect(Email.validate(email)).toBeFalsy()
  })
})
