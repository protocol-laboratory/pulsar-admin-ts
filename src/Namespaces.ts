import { AxiosInstance } from "axios";

class Namespaces {
  private http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  public async list(tenant: string): Promise<string[]> {
    const response = await this.http.get(`/admin/v2/namespaces/${tenant}`);
    return response.data;
  }
}

export default Namespaces;
