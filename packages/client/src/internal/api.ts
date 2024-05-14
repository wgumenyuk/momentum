const BASE_URL = (import.meta.env.DEV) ?
  "http://localhost:3000/api/v1" :
  "http://localhost:8080/api/v1";

const request = async (
  method: string,
  endpoint: string,
  data?: Record<string, unknown>
) => {
  const token = localStorage.get("TOKEN");
  
  const headers: HeadersInit = {};

  if(token) {
    headers.Authorization = token;
  }

  const requestInit: RequestInit = {
    method,
    headers
  };

  if((method === "POST" || method === "PUT") && !!data) {
    requestInit.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}/${endpoint}`, requestInit);

  if(!response.ok) {
    return;
  }

  return response.json();
};

export const Auth = {
  login: (data: Record<string, unknown>) => request("POST", "/auth/login", data),
  register: (data: Record<string, unknown>) => request("POST", "/auth/register", data),
  logout: () => request("POST", "/auth/logout")
};
