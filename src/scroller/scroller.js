import { useRef } from 'react'
import styles from './scroller.module.css'
import Card from '../card/card'

export default function Scroller () {

    // Storing the reference of the card and scroller
    const scrollerRef = useRef(null)
    const cardRef = useRef(null)


    function handleClickArrow (clickedArrow){

        // on click arrow we will scroll the div up to width of card .
        const cardWidth = cardRef?.current?.offsetWidth
        scrollerRef.current.scrollLeft += 
        clickedArrow === 'left' ?
        - cardWidth : cardWidth

    }


    return (
        <div className={styles.wrapper}>
            
            <div 
                className={styles.leftArrow}
                onClick={
                    () => handleClickArrow(
                        'left'
                    )
                }
            > &#8249; </div>

            <div className={styles.scroller} ref = {scrollerRef}>
                {
                    Array.from({length:10})?.map((_, index) => (
                        <Card 
                            cardId = {index}
                            reference = {
                                index === 0 ?
                                cardRef : null
                            }
                        />
                    ))
                }
            </div>

            <div 
                className={styles.rightArrow}
                onClick={
                    () => handleClickArrow(
                        'right'
                    )
                }
            > &#8250; </div>
            
        </div>
    )
}