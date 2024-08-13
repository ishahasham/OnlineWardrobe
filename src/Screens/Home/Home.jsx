import React, { useEffect, useState } from "react";
import Navbar1 from '../../Components/Navbar1/Navbar1';
import styles from './Home.module.css';
import Button from '../../Components/Button/Button';
import { GrDeliver } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";
import Footer from '../../Components/Footer/Footer';
import Cards from '../../Components/Cards/Cards';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const fetchData = await fetch('https://fakestoreapi.com/products');
    const response = await fetchData.json();
    setData(response);
  };

  return (
    <main>
      <section className={styles['home-container']}>
        <Navbar1 />
        <section className={styles['content']}>
          <p className={styles['description']}>
            Summer Collection
          </p> 
          <h1 className={styles['heading']}>Introducing <br />New Arrivals</h1>
          <p className={styles['description']}>
            Explore our latest summer collection with vibrant colors and trendy designs.
          </p>
          <a href="#feature-products" className={styles['btn-collection']}>View Collection</a>
        </section>
      </section>
      <section className={styles['quote-para']}>
        <h2 className={styles['para-p']}>
          Shopping is cheaper than <br /> therapy.
        </h2>
        <p className={styles['para-n']}>
          _____________________________OnlineWardrobe
        </p>
      </section>
      <section className={styles['quote-end']}></section>
      <section id="feature-products" className={styles['products-section']}>
        <h1>Feature Products</h1>
        <div className={styles['cards-container']}>
          {data.map((e, i) => (
            <Cards 
              key={i} 
              id={e.id} 
              title={e.title} 
              image={e.image} 
              desc={e.description} 
            />
          ))}
        </div>
      </section>
      <br />
      <section className={styles['button-card-container']}>
        <Button text={'Express Delivery'} icon={<GrDeliver />} />
        <Button text={'Order Tracking'} icon={<FaLocationDot />} />
        <Button text={'Regular Discounts'} icon={<MdOutlineDiscount />} />
      </section>
      <br />
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
