import React from 'react'
import styles from './Card.module.scss'

function Card({title, description, imageUrl, price, onFavorite, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, description, imageUrl, price});
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite({title, description, imageUrl, price});
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/img/liked.svg" : "img/unliked.svg"} alt="Unliked" />
            </div>
            {/* Проверяем, что imageUrl не пустой */}
            <div className={styles.imageContainer}>
                {imageUrl ? (
                    <img className={styles.productImage} src={imageUrl} alt="artPicture" />
                ) : (
                    <p>Изображение недоступно</p>
                )}
            </div>

            <b>{title}</b>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                </div>
            </div>

            <h5>{description}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    
                </div>
            
                

                <img className={styles.plus} 
                onClick={onClickPlus} 
                src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
                alt="plus" />
            </div>
        </div>
    )
}

export default Card;