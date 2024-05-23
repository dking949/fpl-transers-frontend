/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="background">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
