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
    case SongReducerActionType.ToggleIsPlaying:
      return {
        ...state,
        isPlaying: action.payload,
      };
    case SongReducerActionType.SetCurrentPlayingSong:
      const { selectedSong, isPlaying, selectedSongId } = action.payload;
      return {
        ...state,
        selectedSong,
        isPlaying,
        selectedSongId,
      };
    default:
      return state;
  }
};
