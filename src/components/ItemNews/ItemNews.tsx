import styles from './ItemNews.module.css'

import type { Props } from '../../types/types'

const ItemNews: React.FC<Props> = (props) => {
    return (
        <>
            <li>
                <a href={props.url} className={styles.item} target="_blank">
                    <img
                        src={props.image}
                        alt="news"
                        className={styles.item__image}
                    />
                    <div className={styles.item__text}>
                        <h3 className={styles.item__title}>{props.title}</h3>
                        <p
                            className={styles.item__info}
                        >{`${props.published.slice(
                            0,
                            props.published.length - 9
                        )} · by ${props.author}`}</p>
                    </div>
                </a>
            </li>
        </>
    )
}

export default ItemNews
