import { useGetNewsQuery } from '../../store/api/apiNews/apiNews'
import ItemNews from '../ItemNews/ItemNews'
import styles from './ListNews.module.css'
import type { Props } from '../../types/types'

const ListNews: React.FC = () => {
    let pageSize = 8
    const { data, isLoading } = useGetNewsQuery(pageSize)

    return (
        <>
            <section className={styles.news}>
                <ul className={styles.news__list}>
                    {!isLoading &&
                        data.news.map((el: Props) => (
                            <ItemNews key={el.id} {...el} />
                        ))}
                </ul>
            </section>
        </>
    )
}

export default ListNews
