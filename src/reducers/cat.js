const initialState = {
  loading: false,
  error: null,
  pets: [],
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case '':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}