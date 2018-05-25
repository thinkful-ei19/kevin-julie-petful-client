import API_BASE_URL from '../config';

export const fetchCat = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "content-type": "application/json"
    }
  };
  return function(dispatch) {
    dispatch(fetchCatRequest());
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

export const adpotCat = () => dispatch => {
  dispatch(adoptCatRequest());
  return fetch(API_BASE_URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.statusText;
    })
    .then(data => dispatch(adoptCatSuccess(data)))
    .catch(err => dispatch(adoptCatError(err)));
};

function fetchCatRequest() {
  return {
    type: "FETCH_CAT_REQUEST",
  };
}

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


function adoptCatRequest() {
  return {
    type: "ADOPT_CAT_SUCCESS"
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