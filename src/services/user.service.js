export async function getUsers() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  const users = await fetch(
    proxyUrl + "https://us-central1-ap-2-6aa89.cloudfunctions.net/user"
  ).then((response) => response.json().then((data) => data));

  return users;
}
