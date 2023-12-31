import APIResponse from "./types";

class ApiClient {
  public async Get<T>(endpoint: string): Promise<APIResponse<T>> {
    return await fetch(endpoint, {
      method: 'GET',
      // For Set-Cookie
      credentials: "include",
    })
    .then(res => {
      if (!res.ok) {
        console.error('error : #%d : %s', res.status, res.statusText);
        throw new Error(res.statusText)
      }
      // TODO recoilで管理したい
      // if (res.headers.get("X-Csrf-Token") !== "") {
      //   Cookies.set('X-Csrf-Token', res.headers.get("X-Csrf-Token") as string)
      // }

      return res.json() as Promise<APIResponse<T>>
    })
  }

  public async Post<T>(endpoint: string, data: { [key: string]: any }): Promise<APIResponse<T>> {
    return fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      credentials: "include",
      headers: {
        'Accept': 'application/json;charset=utf-8',
        // 'X-Csrf-Token': Cookies.get('X-Csrf-Token') as string,
      },
      body: JSON.stringify(data),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json() as Promise<APIResponse<T>>
    })
  }
}

const apiClient: ApiClient = new ApiClient()

export default apiClient;
