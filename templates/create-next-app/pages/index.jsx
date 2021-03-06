import Head from "next/head";
import Home from "components/Home";

const home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
};

export default home;
