import { actp } from "../actionType";

export const switchClose = () => {
  return {
    type: actp.close,
    payload: 0,
  };
};

export const switchOn = () => {
  return {
    type: actp.open,
    payload: 1,
  };
};
