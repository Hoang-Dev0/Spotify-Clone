import { usePlaylistContext } from "@/contexts/PlaylistContext";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import UserIcon from "@/assets/user.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { pickRandom } from "@/utils/pickRandom";
import Songs from "./Songs";

const colors = [
  "from-red-500",
  "from-green-500",
  "from-blue-500",
  "from-purple-500",
  "from-indigo-500",
  "from-yellow-500",
];

const Center = () => {
  const { data: session } = useSession();
  const {
    playlistContextState: { selectedPlaylistId, selectedPlaylist },
  } = usePlaylistContext();

  const [fromColors, setFromColors] = useState<string | null>(null);
  useEffect(() => {
    setFromColors(pickRandom(colors));
  }, [selectedPlaylistId]);

  return (
    <div className="flex-grow text-white relative h-screen overflow-y-scroll scroll-hidden">
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full py-1 pl-1 pr-2"
          onClick={() => {
            signOut();
          }}
        >
          <Image
            src={session?.user?.image || UserIcon}
            alt="User avatar"
            width={40}
            className="rounded-full object-cover h-[40px]"
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="icon" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b ${fromColors} to-black h-80 p-8`}
      >
        {selectedPlaylist && (
          <>
            <Image
              src={selectedPlaylist.images[0].url}
              alt="Playlist Image"
              height={176}
              width={176}
              className="shadow-2xl"
            />
            <div>
              <p>PLAYLIST</p>
              <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl">
                {selectedPlaylist.name}
              </h1>
            </div>
          </>
        )}
      </section>
      <div>
        <Songs />
      </div>
    </div>
  );
};

export default Center;
