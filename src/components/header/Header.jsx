import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './header.module.css'
import logo from '../../../public/images/planet-logo.png';

function Header() {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isHomePage = pathname === '/'

  return (
      <header className = {styles.header}>
          <Link
            to = "/"
            className="flex items-center "
          >
            <picture className={styles.logoWrapper}>
              <img
                src={logo}
                height = '100%'
                width = '100%'
              />
            </picture>
            
          </Link>
        {
          !isHomePage && (
            <div className="text-end space-x-3 mr-6">
              <button
                type="button"
                className="btn nav-links"
                onClick={() => {
                  navigate('/');
                }}
              >
                Home
              </button>
            </div>
          )
        }
      </header>
  );
}

export default Header;
