import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Logo } from '../Logo/logo';
import { getClassNav } from '../../utils/getLinkClass';
import { StateContext } from '../../store/GlobalProvider';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { favourites, cart } = useContext(StateContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__nav">
          <Logo classN={'logo__header'} />

          <div className="header__nav-list">
            <NavLink to="/" className={getClassNav}>
              Home
            </NavLink>

            <NavLink to="/phones" className={getClassNav}>
              Phones
            </NavLink>

            <NavLink to="/tablets" className={getClassNav}>
              Tablets
            </NavLink>

            <NavLink to="/accessories" className={getClassNav}>
              Accessories
            </NavLink>
          </div>
        </div>

        <div className="header__menu-container">
          <button className="header__icon icon" onClick={toggleMenu}>
            <img
              src="img/icons/menu.svg"
              alt="menu"
              className="icon__img icon__img-scale"
            />
          </button>
        </div>

        <div className="header__icons">
          <Link to={`/favourites`} className="header__icon icon">
            {favourites.length > 0 ? (
              <div className="header__scale">
                <img
                  src="img/icons/heart-like.svg"
                  alt="favourites"
                  className="icon__img"
                />
                <div className="icon__count">
                  <p className="icon__count-number">{favourites.length}</p>
                </div>
              </div>
            ) : (
              <img
                src="img/icons/heart-like.svg"
                alt="favourites"
                className="icon__img icon__img-scale"
              />
            )}
          </Link>
          <Link to={`/cart`} className="header__icon icon">
            {cart.length > 0 ? (
              <div className="header__scale">
                <img
                  src="img/icons/shopping-bag.svg"
                  alt="Shopping bag"
                  className="icon__img icon__img-scale"
                />
                <div className="icon__count">
                  <p className="icon__count-number">{cart.length}</p>
                </div>
              </div>
            ) : (
              <img
                src="img/icons/shopping-bag.svg"
                alt="Shopping bag"
                className="icon__img icon__img-scale"
              />
            )}
          </Link>
        </div>
      </header>
      {menuOpen && <BurgerMenu toggleMenu={toggleMenu} />}
    </>
  );
};
