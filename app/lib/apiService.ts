import { API_BASE_PATH } from "./constant";

//  make custom fetch
const customFetch = async <T>(url:string,options: RequestInit): Promise<T> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return (response.json());
  } catch (error) {
    throw error;
  }
};

//  mae get request

export const makeGetRequest = async <T>( path:string,params?: Record<string, any>): Promise<T> => {
  const queryParams = new URLSearchParams(params).toString();
  const getUrl = params ? `${API_BASE_PATH+path}?${queryParams}` : API_BASE_PATH+path;
  const options: RequestInit = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  return customFetch<T>(getUrl, options);
};

// make post request
export const makePostRequest = async <T>(path:string,data: Record<string, any>): Promise<T> => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  };
  return customFetch<T>(API_BASE_PATH+path,options);
};


