import styles from './card.module.css'

export default function Card ({cardId, reference}) {
    return (
        <div 
            className={styles.card} 
            ref={reference}
        >
            {cardId}
        </div>
    )
}