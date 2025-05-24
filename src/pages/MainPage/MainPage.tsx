import ListNews from '../../components/ListNews/ListNews'
import Promo from '../../components/Promo/Promo'
import download from '../../img/download.svg'
import { useGetNewsQuery } from '../../store/api/apiNews/apiNews'
import styles from './MainPage.module.css'

const MainPage: React.FC = () => {
    const { isLoading } = useGetNewsQuery('')

    return (
        <>
            {isLoading ? (
                <img src={download} alt="loading" className={styles.loading} />
            ) : (
                <>
                    <Promo />
                    <ListNews />
                </>
            )}
        </>
    )
}

export default MainPage
