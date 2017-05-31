export default function loads(action) {
  switch (action.type) {
    case ADD_LOAD:
      return [
        {
          value: action.value
        },
        ...state
      ]

    case DELETE_LOAD:
      return state.splice(1);

    default:
      return state
  }
}