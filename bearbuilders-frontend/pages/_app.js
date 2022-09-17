import "@rainbow-me/rainbowkit/styles.css";
import { AppProps } from "next/app";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const metisMainnet = {
  id: 1088,
  name: "Metis",
  network: "metis",
  iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Metis",
    symbol: "METIS",
  },
  rpcUrls: {
    default: "https://andromeda.metis.io/?owner=1088",
  },
  blockExplorers: {
    default: {
      name: "AndromedaExplorer",
      url: "https://andromeda-explorer.metis.io/",
    },
  },
  testnet: false,
};

const metisTestnet = {
  id: 588,
  name: "Metis Testnet",
  network: "metis",
  iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Metis Testnet",
    symbol: "METIS",
  },
  rpcUrls: {
    default: "https://stardust.metis.io/?owner=588",
  },
  blockExplorers: {
    default: {
      name: "StardustExplorer",
      url: "https://stardust-explorer.metis.io/",
    },
  },
  testnet: false,
};

const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({
      apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
export default MyApp;
