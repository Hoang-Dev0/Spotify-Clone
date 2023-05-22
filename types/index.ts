import { DefaultSession, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

export enum TokenError {
  refreshAccessToken = "RefreshAccessToken",
}

export interface ExtendedToken extends JWT {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: number;
  user: User;
  error?: TokenError;
}

export interface ExtendedSession extends DefaultSession {
  accessToken: ExtendedToken["accessToken"];
  error: ExtendedToken["error"];
}

export interface PlaylistContextState {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
  selectedPlaylistId: string | null;
  selectedPlaylist: any | null;
}

export interface IPlaylistContext {
  playlistContextState: PlaylistContextState;
  updatePlaylistContextState: (
    updatedObj: Partial<PlaylistContextState>
  ) => void;
}
