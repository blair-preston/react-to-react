import axios from "axios";

export async function getData(URL) {
  let response = await axios.get(URL);
  return response.data;
}
// had to add export to get the getData function to work for the routes


// 4. changed getData parameter to take a URL instead of ENDPOINT 
// 5. change each route page to have individual URL's 