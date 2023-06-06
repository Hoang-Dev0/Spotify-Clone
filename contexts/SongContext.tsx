import { useSpotify } from "@/hooks/useSpotify";
import { ISongContext, SongContextState } from "@/types";
import { useSession } from "next-auth/react";
import { createContext, useContext, useReducer } from "react";

interface SongContextProvider {
  children: React.ReactNode;
}

const defaultSongContextState: SongContextState = {
  selectedSongId: undefined,
  selectedSong: null,
  isPlaying: false,
  volume: 50,
  deviceId: null,
};

export const SongContext = createContext<ISongContext>({
  songContextState: defaultSongContextState,
});

export const useSongContext = () => useContext(SongContext);

const SongContextProvider = ({ children }: SongContextProvider) => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [songContextState, dispatchSongAction] = useReducer(songReducer, defaultSongContextState)

  const songContextProviderData: ISongContext = {
    songContextState: defaultSongContextState,
  };

  return (
    <SongContext.Provider value={songContextProviderData}>
      {children}
    </SongContext.Provider>
  );
};

export default SongContextProvider;
