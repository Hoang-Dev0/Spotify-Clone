import { spotifyApi } from "@/config/spotify";
import { useSpotify } from "@/hooks/useSpotify";
import { IPlaylistContext, PlaylistContextState } from "@/types";
import { useSession } from "next-auth/react";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface PlaylistContextProvider {
  children: ReactNode;
}

const defaultPlaylistContextState: PlaylistContextState = {
  playlists: [],
  selectedPlaylistId: null,
  selectedPlaylist: null,
};

export const PlaylistContext = createContext<IPlaylistContext>({
  playlistContextState: defaultPlaylistContextState,
  updatePlaylistContextState: () => {},
});

export const usePlaylistContext = () => useContext(PlaylistContext);

export const PlaylistContextProvider = ({
  children,
}: PlaylistContextProvider) => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();

  const [playlistContextState, setPlaylistContextState] = useState(
    defaultPlaylistContextState
  );

  const updatePlaylistContextState = (
    updatedObj: Partial<PlaylistContextState>
  ) => {
    setPlaylistContextState((prev) => ({
      ...prev,
      ...updatedObj,
    }));
  };

  useEffect(() => {
    const getUserPlaylist = async () => {
      const userPlaylistResponse = await spotifyApi.getUserPlaylists();
      updatePlaylistContextState({
        playlists: userPlaylistResponse.body.items,
      });
    };

    if (spotifyApi.getAccessToken()) {
      getUserPlaylist();
    }
  }, [session, spotifyApi]);

  const playlistContextProviderData = {
    playlistContextState,
    updatePlaylistContextState,
  };

  return (
    <PlaylistContext.Provider value={playlistContextProviderData}>
      {children}
    </PlaylistContext.Provider>
  );
};
