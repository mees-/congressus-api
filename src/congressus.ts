import axios, { Axios } from "axios"

interface CongressusOptions {
  timeout: number
}

export default class Congressus {
  private _token: string

  private httpClient: Axios

  constructor(token: string, options?: CongressusOptions) {
    this._token = token
    this.httpClient = axios.create({
      baseURL: "https://api.congressus.nl/v20/",
      timeout: options?.timeout ?? 2000,
      headers: { Authorization: `Bearer:${this._token}` },
      responseType: "json",
    })
  }
}
