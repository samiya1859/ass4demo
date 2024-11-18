// pages/_app.tsx
import "../styles/globals.css"; // Import global styles
import Navbar from "../components/Navbar"; // Import Navbar component

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ElementType;
  pageProps: any;
}) {
  return (
    <div>
      {/* Navbar will be present across all pages */}
      <Navbar />

      {/* This renders the content of the specific page like index.tsx, about.tsx, etc. */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
