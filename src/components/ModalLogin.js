import { useState } from "react";
import "./ModalLogin.scss";

function ModalLogin({ onClose }) {
    const [isRegister, setIsRegister] = useState(false);
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{isRegister ? "Регистрация" : "Вход"}</h2>
  
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
  
          {isRegister && (
            <>
              <input type="text" placeholder="Имя" />
              <div className="role-selection">
                <label>
                  <input type="radio" name="role" value="User" required />
                  Пользователь
                </label>
                <label>
                  <input type="radio" name="role" value="Artist" required />
                  Художник
                </label>
              </div>
            </>
          )}
  
          <div className="modal-buttons">
            <button onClick={() => setIsRegister(!isRegister)} className="toggle-btn">
              {isRegister ? "Назад ко входу" : "Зарегистрироваться"}
            </button>
            <button className="login-btn">Войти</button>
            <button onClick={onClose} className="close-btn">Закрыть</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ModalLogin;