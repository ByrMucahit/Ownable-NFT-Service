import '../styles/app.css'
import MintProvider from "../context/MintingProvider";

export default function MyApp({Component, pageProps}) {
    return (<MintProvider><Component {...pageProps} /></MintProvider>)
}