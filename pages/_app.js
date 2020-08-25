import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

import { wrapper } from '../redux/Store'

const MyApp = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp)
