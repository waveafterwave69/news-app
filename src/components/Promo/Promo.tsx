import { useGetNewsQuery } from '../../store/api/apiNews/apiNews'
import styles from './Promo.module.css'

const Promo: React.FC = () => {
    const { data } = useGetNewsQuery('')
    console.log(data)

    return (
        <>
            <section className={styles.promo}>
                {data && (
                    <div className={styles.promo__content}>
                        <a
                            href={data.news[0].url}
                            target="_blank"
                            className={styles.promo__link}
                        >
                            <img
                                src={data.news[0].image}
                                alt="news"
                                className={styles.promo__img}
                            />
                        </a>
                        <h2 className={styles.promo__title}>
                            {data.news[0].title}
                        </h2>
                        <p
                            className={styles.promo__info}
                        >{`${data.news[0].published.slice(
                            0,
                            data.news[0].published.length - 9
                        )} · by ${data.news[0].author}`}</p>
                    </div>
                )}
            </section>
        </>
    )
}

export default Promo
