import axios from "axios";

export async function fetchData<T>(url: string): Promise<T> | never {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
