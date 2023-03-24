import '../styles/app.css'
import MintProvider from "../context/MintingProvider";
import { Provider} from "react-redux";
import store from '../src/redux/configureStore'
export default function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <MintProvider>
                <Component {...pageProps} />
            </MintProvider>
        </Provider>)
}