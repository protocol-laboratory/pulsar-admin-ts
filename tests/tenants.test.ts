import PulsarAdmin from '../src';

describe('Tenants', () => {
  const pulsarAdmin = new PulsarAdmin({host: 'localhost', port: 8080});

  it('should return a non-empty list of tenants', async () => {
    const tenants = await pulsarAdmin.tenants.list();

    expect(tenants).toBeInstanceOf(Array);
    expect(tenants.length).toBeGreaterThan(0);
  });
});
