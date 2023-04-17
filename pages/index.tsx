import Center from "@/components/Center";
import Sidebar from "@/components/Sidebar";
import type { NextPage } from "next";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0</title>
      </Head>
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  );
};

export default Home;
