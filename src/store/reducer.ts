export default function addStoryReducer(state = [], action) {
  switch (action.type) {
    case "STORE_DOCUMENT":
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}
