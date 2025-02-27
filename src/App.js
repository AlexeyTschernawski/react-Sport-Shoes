import React from 'react';

import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import ModalLogin from './components/ModalLogin';
import { storage } from "./firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";




function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/works");
            console.log("Response data:", res.data);

            // Получаем URL изображений из Firebase
            const worksWithImages = await Promise.all(
                res.data.map(async (item) => {
                    try {
                        const fileRef = ref(storage, item.image); // `item.image` - имя файла в Firebase
                        const imageUrl = await getDownloadURL(fileRef); // Получаем URL

                        return { ...item, imageUrl };
                    } catch (error) {
                        console.error("Ошибка загрузки изображения:", error);
                        return { ...item, imageUrl: null }; // Если ошибка, ставим null
                    }
                })
            );

            setItems(worksWithImages);
        } catch (error) {
            console.error("Ошибка получения данных:", error);
        }
    };

    fetchData();
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
      <Header 
        onClickCart={() => setCartOpened(true)} 
        onClickUser={() => setAuthModalOpen(true)}  
        />

      {isAuthModalOpen && <ModalLogin onClose={() => setAuthModalOpen(false)} />}

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
                description={item.description}
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
