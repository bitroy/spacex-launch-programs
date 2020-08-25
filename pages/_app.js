import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../redux/Store'

function MyApp({ Component, pageProps }) {
  	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

const wrapper = createWrapper(() => store)

export default wrapper.withRedux(MyApp)
