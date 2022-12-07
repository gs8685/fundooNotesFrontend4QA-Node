import { createStore } from "redux";

const reducer = (state = { extendedaction: "Keep" }, action) => {
  switch (action.type) {
    case "NOTES":
      return { extendedaction: (state.extendedaction = "Notes") };
    case "REMINDER":
      return { extendedaction: (state.extendedaction = "Reminder") };
    case "LABELS":
      return { extendedaction: (state.extendedaction = "Edit Labels") };
    case "ARCHIVE":
      return { extendedaction: (state.extendedaction = "Archive") };
    case "DELETE":
      return { extendedaction: (state.extendedaction = "Delete") };
    default:
      return { extendedaction: state.extendedaction };
  }
};

const store = createStore(reducer);
export default store;
