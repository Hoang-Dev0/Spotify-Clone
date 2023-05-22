import { usePlaylistContext } from "@/contexts/PlaylistContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import UserIcon from "@/assets/user.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Center = () => {
  const { data: session } = useSession();
  const { playlistContextState } = usePlaylistContext();
  return (
    <div className="flex-grow text-white relative h-screen overflow-y-scroll scroll-hidden">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full py-1 pl-1 pr-2">
          <Image
            src={session?.user?.image || UserIcon}
            alt="User avatar"
            height={40}
            width={40}
            className="rounded-full object-cover"
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="icon" />
        </div>
      </header>
    </div>
  );
};

export default Center;
