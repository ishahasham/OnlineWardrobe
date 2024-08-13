import React, { useEffect, useState } from 'react';
import styles from './SingleProduct.module.css';
import Navbar1 from '../../Components/Navbar1/Navbar1';
import Footer from '../../Components/Footer/Footer';
import { useParams, Link } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams();
    const [singleData, setSingleData] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getSingleData();
        getRelatedProducts();
    }, [id]);

    const getSingleData = async () => {
        const fetchData = await fetch(`https://fakestoreapi.com/products/${id}`);
        const response = await fetchData.json();
        setSingleData([response]);
    };

    const getRelatedProducts = async () => {
        const fetchData = await fetch('https://fakestoreapi.com/products');
        const response = await fetchData.json();
        const filteredProducts = response.filter(product => product.id !== parseInt(id));
        setRelatedProducts(filteredProducts.slice(0, 4)); // Show 4 related products
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleAddToCart = () => {
        // Logic for adding to cart
        console.log(`Added ${quantity} item(s) to the cart`);
    };

    return (
        <main>
            <header className={styles['singleproduct-container']}>
                <Navbar1 />
            </header>
            <section className={styles.productDetails}>
                {singleData.length > 0 && singleData.map((e, i) => (
                    <div key={i} className={styles.productCard}>
                        <img src={e.image} alt={e.title} className={styles.productImage} />
                        <div className={styles.productInfo}>
                            <h1>{e.title.slice(0, 20)}</h1>
                            <p>{e.description.slice(0, 150)}</p>
                            <p className={styles.price}>${e.price}</p>
                            <div className={styles.quantitydiv}>
                            <div className={styles.quantityControl}>
                                <button onClick={handleDecrement} className={styles.quantityButton}>-</button>
                                <span className={styles.quantity}>{quantity}</span>
                                <button onClick={handleIncrement} className={styles.quantityButton}>+</button>
                            </div>
                            <button onClick={handleAddToCart} className={styles.addToCartButton}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <section className={styles.relatedProducts}>
                <h2>Related Products</h2>
                <div className={styles.relatedProductsContainer}>
                    {relatedProducts.map((product) => (
                        <Link key={product.id} to={`/products/${product.id}`} className={styles.relatedProductCard}>
                            <img src={product.image} alt={product.title} className={styles.relatedProductImage} />
                            <div className={styles.relatedProductInfo}>
                                <h4>{product.title.slice(0, 20)}</h4>
                                <p className={styles.price}>${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    );
};

export default SingleProduct;
