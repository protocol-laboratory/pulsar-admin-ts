import axios, { AxiosInstance } from "axios";
import Tenants from "./Tenants";
import Namespaces from "./Namespaces";

interface PulsarAdminConfig {
  host: string;
  port: number;
}

class PulsarAdmin {
  private readonly http: AxiosInstance;

  public tenants: Tenants;
  public namespaces: Namespaces;

  constructor(config: PulsarAdminConfig) {
    const baseUrl = `http://${config.host}:${config.port}`;

    this.http = axios.create({
      baseURL: baseUrl,
    });

    this.tenants = new Tenants(this.http);
    this.namespaces = new Namespaces(this.http);
  }
}

export default PulsarAdmin;
