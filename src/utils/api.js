const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

function getItems(token) {
  return fetch(`${baseUrl}/items`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function updateUserProfile(data, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

function addItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkResponse);
}

function deleteItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => (res.ok ? res.json() : Promise.reject("Delete failed")));
}

function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function removeCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export {
  checkResponse,
  getItems,
  addItem,
  deleteItem,
  addCardLike,
  removeCardLike,
  updateUserProfile,
};
