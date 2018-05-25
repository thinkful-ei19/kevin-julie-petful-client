import API_BASE_URL from '../config';

export default function fetchCat() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "content-type": "application/json"
    }
  };
  return function(dispatch) {
    return fetch(API_BASE_URL, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("there was an error");
        }
      })
      .then(res => dispatch(fetchCatSuccess(res)))
      .catch(err => dispatch(fetchCatError(err)));
  };
}

export const adpotCat = formData => dispatch => {
  dispatch(AdoptCatRequest());
  return fetch(API_BASE_URL, {
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
    .then(data => dispatch(AdoptCatSuccess(data)))
    .catch(err => dispatch(AdoptCatError(err)));
};

function fetchCatSuccess(data) {
  return {
    type: "FETCH_CAT_SUCCESS",
    payload: data
  };
}

function fetchCatError(err) {
  return {
    type: "FETCH_CAT_ERROR",
    payload: err
  };
}


function adoptCatRequest(data) {
  return {
    type: "ADOPT_CAT_SUCCESS",
    payload: data
  };
}

function adoptCatSuccess(data) {
  return {
    type: "ADOPT_CAT_SUCCESS",
    payload: data
  };
}

function adoptCatError(err) {
  return {
    type: "ADOPT_CAT_ERROR",
    payload: err
  };
}