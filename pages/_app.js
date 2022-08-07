import Layout from "../components/Layout";
import TransactionContextProvider from "../contexts/TransactionContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TransactionContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TransactionContextProvider>
  );
}

export default MyApp;
