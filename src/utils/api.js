class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getRequestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  login(userData) {
    return fetch(`${this._baseUrl}/auth/login`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    }).then(this._getRequestResult);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(this._getRequestResult);
  }

  getDoctors() {
    return fetch(`${this._baseUrl}/doctors`, {
      headers: {
        ...this._headers,
      },
    }).then(this._getRequestResult);
  }

  getServices() {
    return fetch(`${this._baseUrl}/services`, {
      headers: {
        ...this._headers,
      },
    }).then(this._getRequestResult);
  }

  getDirections() {
    return fetch(`${this._baseUrl}/directions`, {
      headers: {
        ...this._headers,
      },
    }).then(this._getRequestResult);
  }

  // getInitialData(token) {
  //   return Promise.all([this.getUserInfo(token), this.getSavedMovies(token)]);
  // }
}

// Создание экземпляра класса Api
const mainApi = new MainApi({
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
