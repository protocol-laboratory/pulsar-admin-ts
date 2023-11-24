import PulsarAdmin from "../src";

describe("PulsarAdmin", () => {
  it("should instantiate with provided host and port", () => {
    const pulsarAdmin: PulsarAdmin = new PulsarAdmin({
      host: "localhost",
      port: 8080,
    });

    expect(pulsarAdmin).toBeInstanceOf(PulsarAdmin);
  });
});
