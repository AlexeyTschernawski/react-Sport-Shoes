function Header(props) {
    return(
        <header className="d-flex justify-between align-center p-40">

        <div className="d-flex align-center">
          <img width={70} height={70} src="/img/logo.png" alt="logotype" />
          <div>
            <h3 className="text-uppercase">React app</h3>
            <p>Sport Shoes</p>
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
            <span>50 Euro</span>
          </li>
          <li className="mr-10 cu-p">
            <img width={18} height={18} src="/img/heart.svg" alt="bookmarks" />
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>

      </header>
    )
}

export default Header