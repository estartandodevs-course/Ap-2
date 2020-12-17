import { BASE_API } from "../config/api";

export async function getUsers() {
  const users = await fetch(BASE_API + "user").then((response) =>
    response.json().then((data) => data)
  );

  return users;
}

export async function createUser(userForm) {
  console.log(userForm);
  const options = { method: "POST", body: userForm };
  const response = await fetch(BASE_API + "user", options).then((response) =>
    response.json().then((data) => data)
  );

  return response;
}
