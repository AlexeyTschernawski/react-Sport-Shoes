import React from 'react'
import styles from './Card.module.scss'


function Card({title, imageUrl, price, onFavorite, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    }

    console.log(isAdded);

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/unliked.svg" alt="Unlilked" />
            </div>
            <img width={138} height={92} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{price}</b>
                </div>

                <img className={styles.plus} 
                onClick={onClickPlus} 
                src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
                alt="plus" />

            </div>
        </div>
    )
}

export default Card