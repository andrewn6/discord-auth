import '../styles/globals.css';
import Loading from '../components/loading';
import API from '../api'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const api = new API();
    }
  });

  return loading ? <Loading /> : (
    <Component {...pageProps} />
  );
}

export default MyApp
