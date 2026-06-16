

export interface RequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
}

class ApiController {
  private baseUrl = "http://localhost:4000";

  async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const response = await fetch(
      `${this.baseUrl}${endpoint}`,
      {
        method: options.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: options.body
          ? JSON.stringify(options.body)
          : undefined,
      }
    );

    if (!response.ok) {
      throw new Error(
        `Erro ${response.status}: ${response.statusText}`
      );
    }

    return response.json();
  }

  get<T>(endpoint: string) {
    return this.request<T>(endpoint);
  }

  post<T>(endpoint: string, body: unknown) {
    return this.request<T>(endpoint, {
      method: "POST",
      body,
    });
  }

  put<T>(endpoint: string, body: unknown) {
    return this.request<T>(endpoint, {
      method: "PUT",
      body,
    });
  }

  delete<T>(endpoint: string) {
    return this.request<T>(endpoint, {
      method: "DELETE",
    });
  }
}

export const apiController =   new ApiController();