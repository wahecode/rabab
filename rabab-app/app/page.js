import App from './app'
import ReduxProvider from './components/ReduxProvider'

export default function Home() {
    return (
        <ReduxProvider>
            <App />
        </ReduxProvider>
    )
}
