import { usePlaylistContext } from "@/contexts/PlaylistContext";
import { useSongContext } from "@/contexts/SongContext";
import { useSpotify } from "@/hooks/useSpotify";
import { SongReducerActionType } from "@/types";
import { convertDuration } from "@/utils/durationConverter";
import Image from "next/image";
import { FC } from "react";
interface Props {
  item: SpotifyApi.PlaylistTrackObject;
  itemIndex: number;
}

const Song: FC<Props> = ({ item: { track }, itemIndex }) => {
  const spotifyApi = useSpotify();
  const {
    songContextState: { deviceId },
    dispatchSongAction,
  } = useSongContext();

  const {
    playlistContextState: { selectedPlaylist },
  } = usePlaylistContext();

  const playSong = async () => {
    if (!deviceId) return;

    dispatchSongAction({
      type: SongReducerActionType.SetCurrentPlayingSong,
      payload: {
        selectedSongId: track?.id,
        selectedSong: track,
        isPlaying: true,
      },
    });

    await spotifyApi.play({
      device_id: deviceId,
      context_uri: selectedPlaylist?.uri, // specify playlist of song
      offset: {
        uri: track?.uri as string, // specify position of song in playlist
      },
    });
  };

  return (
    <div
      className="grid grid-cols-1 text-gray-500 px-5 py-4 hover:bg-gray-900 rounded-lg cursor-pointer"
      onClick={playSong}
    >
      <div className="flex items-center space-x-4">
        <p className="block basis-3">{itemIndex + 1}</p>
        <div>
          <Image
            src={track?.album.images[0].url || ""}
            alt="track cover"
            height={40}
            width={40}
          />
        </div>
        <div className="flex-1">
          <p className="w-36 lg:w-72 truncate text-white">{track?.name}</p>
          <p>{track?.artists[0].name}</p>
        </div>
        {/* <div className="flex flex-1 flex items-center ml-auto md:ml-0"> */}
        <p className="hidden md:block w-40 flex-1">{track?.album.name}</p>
        <p className="basis-8">
          {convertDuration(track?.duration_ms as number)}
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Song;
