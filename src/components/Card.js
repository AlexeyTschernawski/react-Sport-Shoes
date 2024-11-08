function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unliked.svg" alt="Unlilked" />
            </div>
            <img width={138} height={92} src="/img/sneakers/1.jpg" alt="Sneakers" />
            <h5>Man's running Shoes</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>48,99 €</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    )
}

export default Card