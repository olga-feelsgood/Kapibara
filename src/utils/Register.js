export const BASE_URL = 'http://localhost:3000/api'//ввести корректный адрес

function checkRes(res) {
  if (res.ok) {
    return res.json()
  }
  else {
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }
}

export function registerNewUser({ surname, name, middlename }) {
  console.log({ surname, name, middlename })
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ surname, name, middlename })
  })
    .then(checkRes)
}