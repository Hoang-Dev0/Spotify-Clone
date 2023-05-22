import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/24/outline";
import IconButton from "./IconButton";
import { signOut, useSession } from "next-auth/react";
import { usePlaylistContext } from "@/contexts/PlaylistContext";
import { useSpotify } from "@/hooks/useSpotify";

const Divider = () => <hr className="border-t-[0.1px] border-gray-800" />;

const Sidebar = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const {
    playlistContextState: { playlists },
    updatePlaylistContextState,
  } = usePlaylistContext();

  const setSelectedPlaylist = async (playlistId: string) => {
    const playlistResponse = await spotifyApi.getPlaylist(playlistId);
    updatePlaylistContextState({
      selectedPlaylistId: playlistId,
      selectedPlaylist: playlistResponse.body,
    });
  };

  return (
    <div className="text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block scroll-hidden">
      <div className="space-y-4">
        {session?.user && (
          <button
            onClick={() => {
              signOut();
            }}
          >
            {session.user.name} - Log out
          </button>
        )}
        <IconButton icon={HomeIcon} label="Home" />
        <IconButton icon={MagnifyingGlassIcon} label="Search" />
        <IconButton icon={BuildingLibraryIcon} label="Your Library" />
        <Divider />
        <IconButton icon={PlusCircleIcon} label="Create Playlist" />
        <IconButton icon={HeartIcon} label="Liked Songs" />
        <IconButton icon={RssIcon} label="Your episodes" />
        <Divider />

        {/* Playlists */}
        {playlists.map(({ id, name }) => (
          <p
            key={id}
            className="cursor-pointer hover:text-white"
            onClick={() => setSelectedPlaylist(id)}
          >
            {name}
          </p>
        ))}
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
        <p>Hoang</p>
      </div>
    </div>
  );
};

export default Sidebar;

const a = [1, 2, 3].map((item, index) => {});
