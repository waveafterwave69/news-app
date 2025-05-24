import { useGetNewsQuery } from '../../store/api/apiNews/apiNews'
import ItemNews from '../ItemNews/ItemNews'
import styles from './ListNews.module.css'
import type { Props } from '../../types/types'

const ListNews: React.FC = () => {
    const { data } = useGetNewsQuery('')
    console.log(data)

    return (
        <>
            <section className={styles.news}>
                <ul className={styles.news__list}>
                    {data && data.news.map((el: Props) => <ItemNews {...el} />)}
                </ul>
            </section>
        </>
    )
}

export default ListNews
