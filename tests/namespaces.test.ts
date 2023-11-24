import PulsarAdmin from "../src";

describe("Namespaces", () => {
  const pulsarAdmin: PulsarAdmin = new PulsarAdmin({
    host: "localhost",
    port: 8080,
  });

  it("should return a non-empty list of namespaces for a tenant", async () => {
    const namespaces = await pulsarAdmin.namespaces.list("public");

    expect(namespaces).toBeInstanceOf(Array);
    expect(namespaces.length).toBeGreaterThan(0);
  });
});
