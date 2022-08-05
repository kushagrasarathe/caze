import Head from "next/head";
import Layout from "../src/components/Layout";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

function MyApp({ Component, pageProps }) {
  const { chains, provider } = configureChains(
    [
      chain.mainnet,
      chain.polygon,
      chain.optimism,
      chain.arbitrum,
      chain.polygonMumbai,
    ],
    [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
  );
  const { connectors } = getDefaultWallets({
    appName: "Scientia DAO",
    chains,
  });
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <>
    <Head>
        <title>Scientia DAO</title>
        <meta
          name="description"
          content="PUBLISH and SHARE YOUR RESEARCH ON THE WORLD'S FIRST DAO COMMUNITY FOR SCIENTISTS"
        />
        <link rel="icon" href="/microscope.png" />
      </Head>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
