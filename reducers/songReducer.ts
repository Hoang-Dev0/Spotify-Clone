import {
  SongContextState,
  SongReducerAction,
  SongReducerActionType,
} from "@/types";

export const songReducer = (
  state: SongContextState,
  action: SongReducerAction
): SongContextState => {
  switch (action.type) {
    case SongReducerActionType.SetDevice:
      return {
        ...state,
        deviceId: action.payload.deviceId,
      };
    default:
      return state;
  }
};
