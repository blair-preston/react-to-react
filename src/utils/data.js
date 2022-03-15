import axios from "axios";

export async function getData(ENDPOINT) {
  let response = await axios.get(`https://wizard-world-api.herokuapp.com/${ENDPOINT}`);
  return response.data;
}

// had to add export to get the getData function to work for the routes