import React from 'react';
import{Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';





function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('http://localhost:5000/items').then((res) => {
      setItems(res.data);
    });
    axios.get('http://localhost:5000/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('http://localhost:5000/cart', obj)
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:5000/cart/${id}`);
    console.log(`Deleting item with id: ${id}`);
     setCartItems((prev) => prev.filter(item=>item.id !== id));
  }

  const onAddToFavorite = (obj) => {
    axios.post('http://localhost:5000/favorites', obj)
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }



  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes> {/* ✅ Обязательно оборачиваем Route в Routes */}
        <Route path="/test" element={<h1>Test information</h1>} />
      </Routes>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `search: "${searchValue}"` : 'all shoes'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />

            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src="img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) =>onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default App;
