export default function messages(action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        {
          timestamp: action.timestamp,
          alert: action.alert
        },
        ...state
      ]

    default:
      return state
  }
}