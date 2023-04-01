import { AxiosInstance } from 'axios';

class Tenants {
  private http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  public async list(): Promise<string[]> {
    const response = await this.http.get('/admin/v2/tenants');
    return response.data;
  }
}

export default Tenants;
