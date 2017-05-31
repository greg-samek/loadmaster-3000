export const addLoad = (value) => {
  return {
    type: 'ADD_LOAD',
    value
  }
}

export const deleteLoad = () => {
  return {
    type: 'DELETE_LOAD'
  }
}

export const addMessage = (alert, timestamp) => {
  return {
    type: 'ADD_MESSAGE',
    timestamp,
    alert
  }
}