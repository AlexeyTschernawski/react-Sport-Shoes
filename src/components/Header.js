function Header() {
    return(
        <header className="d-flex justify-between align-center p-40">

        <div className="d-flex align-center">
          <img width={70} height={70} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React app</h3>
            <p>Sport Shoes</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>50 Euro</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>

      </header>
    )
}

export default Header