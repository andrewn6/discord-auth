import Loading from '../components/Loading';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  return loading ? <Loading /> : (
    <Component {...pageProps} />
  );
}

export default MyApp
