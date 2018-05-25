const apiUrl = "/api/dog";

export function fetchDog() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "content-type": "application/json"
    }
  };
  return function(dispatch) {
    return fetch(apiUrl, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("there was an error");
        }
      })
      .then(res => dispatch(fetchDogSuccess(res)))
      .catch(err => dispatch(fetchDogError(err)));
  };
};

export const adpotDog = formData => dispatch => {
  dispatch(AdoptDogRequest());
  return fetch('http://localhost:8080/api/dogs', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => dispatch(AdoptDogSuccess(data)))
    .catch(err => dispatch(AdoptDogError(err)));
};

function fetchDogSuccess(data) {
  return {
    type: "FETCH_DOG_SUCCESS",
    payload: data
  };
}

function fetchDogError(err) {
  return {
    type: "FETCH_DOG_ERROR",
    payload: err
  };
}

function adoptDogRequest(data) {
  return {
    type: "ADOPT_DOG_SUCCESS",
    payload: data
  };
}

function adoptDogSuccess(data) {
  return {
    type: "ADOPT_DOG_SUCCESS",
    payload: data
  };
}

function adoptDogError(err) {
  return {
    type: "ADOPT_DOG_ERROR",
    payload: err
  };
}