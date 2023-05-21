import { spotifyApi } from "@/config/spotify";
import { ExtendedSession, TokenError } from "@/types";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const useSpotify = () => {
  const { data: session } = useSession();

  useEffect(() => {
    // if no have session, it means that the user is not logged
    if (!session) return;

    // if refresh token fails, redirect to login page
    if ((session as ExtendedSession).error === TokenError.refreshAccessToken) {
      signIn();
    }

    spotifyApi.setAccessToken(session.accessToken);
  }, [session]);
  return spotifyApi;
};
