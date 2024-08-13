import React, { useEffect, useState } from "react";
import Navbar1 from '../../Components/Navbar1/Navbar1';
import styles from './Products.module.css';
import Footer from '../../Components/Footer/Footer';
import Cards from '../../Components/Cards/Cards';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi();
  }, []); // Add empty dependency array to run only once when the component mounts

  const getApi = async () => {
    const fetchData = await fetch('https://fakestoreapi.com/products');
    const response = await fetchData.json();
    setData(response);
  }

  return (
    <main>
      <header className={styles['product-container']}>
        <Navbar1 />
      </header>
      <section className={styles['products-section']}>
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
      <Footer />
    </main>
  )
}

export default Products;
