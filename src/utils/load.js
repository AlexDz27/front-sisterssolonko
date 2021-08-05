export async function load(url) {
  const response = await fetch(url);

  console.log(response);

  const parsedResponse = response.json();

  return parsedResponse;
}