import {SHOW_ALERT} from '../Types';
import { HIDE_ALERT } from "../Types";
import { SHOW_LOADER } from "../Types";
import { ADD_NOTE } from "../Types";
import { FETCH_NOTES } from "../Types";
import { REMOVE_NOTE } from "../Types";

const handlers = {
  [SHOW_ALERT]: (state, { payloader }) => ({ ...payloader, visible: true }),
  [HIDE_ALERT]: (state) => ({ ...state, visible: false }),
  DEFAULT: (state) => state,
};

export const showAlert = {}
export const alertReducer = ({state,action}) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state,action);
}