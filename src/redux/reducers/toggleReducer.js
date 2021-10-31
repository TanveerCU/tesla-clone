import { actp } from "../actionType";

const inaitialState = { state: 1 };

export const blurReducer = (state = inaitialState, { type, payload }) => {
  switch (type) {
    case actp.close:
      return { state: payload };
    case actp.open:
      return { state: payload };
    default:
      return state;
  }
};
