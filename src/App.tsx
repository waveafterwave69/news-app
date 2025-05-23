import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage'

const App: React.FC = () => {
    return (
        <>
            <div className="container">
                <Header />

                <MainPage />
            </div>
        </>
    )
}

export default App
