import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo.png'
import { Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section1}>
          <img src={logo} width='120px' alt="" />
          <p className='mt-4'>Transform your style with OnlineWardrobe <br /> where fashion
           meets elegance. Discover the latest trends and timeless 
            classics to elevate your wardrobe every day.</p>
        </div>
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>All Products</p>
          <p>About Us</p>
        </div>
        <div className={styles.section}>
          <h4>Shop Collections</h4>
          <p>Men's Jeans</p>
          <p>Women's Tops</p>
          <p>Hoodies</p>
          <p>Jackets</p>
          <p>Shoes</p>
        </div>
        <div className={styles.section}>
          <h4>Shop Collections</h4>
          <p>Men's Jeans</p>
          <p>Women's Tops</p>
          <p>Hoodies</p>
          <p>Jackets</p>
          <p>Shoes</p>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.copyRight}>
          <p>Copyright &copy; 2024 OnlineWardrobe</p>
          </div>
        <div className={styles.developedBy}>
          <p>Developed by <Link to="https://github.com/ishahasham" className={styles.link} >Syeda Isha Hasham</Link></p>
        </div>
      </div>
    </footer>

  );
}

export default Footer;

