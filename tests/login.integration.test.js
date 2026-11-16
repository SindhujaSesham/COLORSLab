
const API_URL = "http://127.0.0.1:8000/Login.php";

test("Login API returns correct JSON for invalid credentials", async () => {

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      login: "nonexistent_test_user",
      password: "incorrect_password"
    })
  });

  expect(response.status).toBe(200);

  const data = await response.json();

  expect(data).toEqual({
    id: 0,
    firstName: "",
    lastName: "",
    error: "No Records Found"
  });
});
