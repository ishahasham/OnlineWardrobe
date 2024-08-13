import React from 'react'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import styles from './About.module.css';
import cloth2 from '../../assets/cloth2.jpg';
import dis from '../../assets/dis.jpg'
import ImgCard from '../../Components/ImgCard/ImgCard';
import r1 from '../../assets/r1.jpg';
import r2 from '../../assets/r2.jpg'
import r3 from '../../assets/r3.jpg'
import r4 from '../../assets/r4.jpg'
import r5 from '../../assets/r5.jpg'
import r6 from '../../assets/r6.jpg'
import Button from '../../Components/Button/Button';
import { GrDeliver } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";
import Footer from '../../Components/Footer/Footer';

const About = () => {
  return (
    <main>
    <header className={styles['about-container']}>
      <Navbar1/>
      <div className={styles['about-content']} >
        <h1 className={styles['about-h']}>About us</h1>
      </div>
    </header>
    <br />
    <section className={styles['section1']}>
      <div>
        <div><img src={cloth2} width='200px' alt="" className={styles['keyframe-img']} /></div>
        <div>
          <h3>Latest Trends For All</h3>
          <p>Lorem ipsum dolor sit amet consectetur
           adipisicing elit. <br />
            Ut facere numquam magnam placeat itaque. Ad.</p>
        </div>
      </div>
      <div>
      <div><img src={dis} width='200px' alt=""  className={styles['keyframe-img']} /></div>
        <div>
          <h3>Sale on latest fashion</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere numquam magnam placeat itaque. Ad.</p>
        </div>
      </div>
    </section>
    <section className={styles['sec1-end']}></section>
    <section className={styles['theyloveus']}>
      <h2 className={styles['about-m']}>They Love Us</h2>
      <p className={styles['about-para']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

      <section className={styles['img-card-container']}>
          <ImgCard title={'Stella Jones'} p={'Super Model'} img={r2}/>
          <ImgCard title={'Carlos Hughes'} p={'Student'} img={r3} />
          <ImgCard title={'Mark Adams'} p={'Entrepreneur'} img={r1}/>
        </section>
        <br />
        <section className={styles['img-card-container']}>
          <ImgCard title={'James Hobbs'} p={'Bussinessman'} img={r6}/>
          <ImgCard title={'Chloe Newts'} p={'Student'} img={r4}/>
          <ImgCard title={'Brianna Stark'} p={'Fashion Designer'} img={r5}/>
        </section>
    </section>
    <br /><br />
    <section  className={styles['button-card-container']}>
      <Button text={'Express Delivery'} icon={<GrDeliver />}/>
      <Button text={'Order Tracking'} icon={<FaLocationDot />}/>
      <Button text={'Regular Discounts'} icon={<MdOutlineDiscount />}/>
    </section>
    <br /><br />
    <footer>
      <Footer/>
    </footer>
    </main>
  )
}

export default About
