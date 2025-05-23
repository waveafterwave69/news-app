import styles from './Header.module.css'

const Header: React.FC = () => {
    type Date = {
        dayWeek: string
        month: string
        day: number
        year: number
        timeHours: number
    }

    const dayOfWeek: string[] = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]
    const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const date = new Date()

    const currDate: Date = {
        dayWeek: dayOfWeek[date.getDay() - 1],
        month: months[date.getMonth() + 1],
        day: date.getDate(),
        year: date.getFullYear(),
        timeHours: date.getHours(),
    }

    const getGreeting = (): string => {
        const currTime = currDate.timeHours

        if (currTime >= 6 && currTime <= 12) {
            return 'Good morning'
        } else if (currTime >= 13 && currTime <= 18) {
            return 'Good afternoon'
        } else if (currTime >= 19 && currTime <= 23) {
            return 'Good evening'
        } else {
            return 'Good night'
        }
    }

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.header__title}>{getGreeting()}</h1>
                <p
                    className={styles.header__date}
                >{`${currDate.dayWeek}, ${currDate.month} ${currDate.day}, ${currDate.year}`}</p>
            </header>
        </>
    )
}

export default Header
