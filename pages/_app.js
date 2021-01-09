import { wrapper } from "../redux/Store";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
