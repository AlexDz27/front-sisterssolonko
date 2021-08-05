export async function load(url) {
  const response = await fetch(url);

  const parsedResponse = response.json();

  return parsedResponse;
}