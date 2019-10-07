export class ApiClient {
  private static host = 'http://localhost:8080';

  public static get = async (path: string) => ApiClient.doRequest('GET', path);

  public static post = async (path: string, body?: any) => ApiClient.doRequest('POST', path, body);

  public static put = async (path: string, body: any) => ApiClient.doRequest('PUT', path, body);

  public static delete = async (path: string) => ApiClient.doRequest('DELETE', path);

  private static doRequest = async (method: string, path: string, body?: any) => {
    const response = await fetch(`${ ApiClient.host }/api${ path }`, {
      method,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined
    });

    /*if (response.status < 200 || response.status >= 300) {
      return await response.text();
    }*/

    try {
      return await response.json();
    } catch (_) {
      return null;
    }
  };
}
