function Drawer({onClose, items = []}) {
    return (

        <div  className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Cart <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" /></h2>

                <div className="items">

                    {items.map((obj) => (
                        <div className="cartItem d-flex align-ceter mb-20">
                        <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">{obj.title}</p>
                            <b>{obj.price}</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>


                    ))}

                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Total:</span>
                            <div></div>
                            <b>135,98 €</b>
                        </li>
                    </ul>
                    <button className="greenButton">place an order <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>

    );
}

export default Drawer