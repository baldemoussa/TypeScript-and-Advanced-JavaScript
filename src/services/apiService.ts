import {NetworkError} from '../utils/errorHandler'

export default async function apiServices(): Promise<any> {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new NetworkError(`HTTP error: ${response.status}`);
    }
    const productsData = await response.json();
    return Promise.resolve(productsData);
  } catch (error) {
    if (error instanceof NetworkError) {
      return Promise.reject(`Network or endpoint issue ---> ${error.message}`);
    }else{
      return Promise.reject(error);
    }
  }

}