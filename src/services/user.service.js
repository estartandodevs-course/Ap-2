import { BASE_API } from "../config/api";

export async function getUsers() {

  const users = await fetch(BASE_API + "user").then((response) =>
    response.json().then((data) => data)
  );

  return users;
}
