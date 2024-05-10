import React from 'react'
import { useNavigate, BrowserRouter as Router} from 'react-router-dom'
import styles from './ScanServeDetails.module.css'
import { getImageUrl } from '../../../utils'

export const ScanServeDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div className={styles.container}>

      <div className={styles.nameWrapper}>
      <p className={styles.name}><span className={styles.spanName}>Scan & Serve:</span> revolutionizing the dining experience</p>
     </div> 

     <div className={styles.projectWrapper}>

      <div className={styles.projectDescription}>
      <p className={styles.title}>Why Choose Scan & Serve?</p>
      <p>Scan & Serve isn't just an app; it's a comprehensive solution aimed at improving restaurant operations' efficiency and enhancing the dining experience for customers. Whether you're a restaurant owner looking to streamline your services or a diner in search of a hassle-free meal, Scan & Serve caters to your needs.</p>
      </div>
      
      <div className={styles.adminWrapper}>
        <p className={styles.titleAdmin}>For restaurant administrators: a new level of control and flexibility</p>

        <div className={styles.feature1}>
        <p className={styles.feature}>Easy Setup:</p>
        <p className={styles.feature}>Start by creating an account for your restaurant. Customize your profile with your restaurant's name, description, logo, and operating hours, establishing your unique presence in the dining industry.
        </p>
        </div>
        <figure className={styles.imgSetup}>
          <img src={getImageUrl('ScanServe/restaurantSetup.png')} className={styles.img} alt="Easy setup" />
        </figure>

        <div className={styles.feature2}>
        <p className={styles.feature}>Menu Management Made Simple:</p>
        <p className={styles.feature}>Our user-friendly interface allows you to easily create, update, or delete menu items. Refresh your offerings with just a few clicks to keep your menu exciting.</p>
        </div>
        <figure className={styles.imgMenu}>
          <img src={getImageUrl('ScanServe/restaurantMenu.png')} className={styles.img} alt="Menu management" />
        </figure>

        <div className={styles.feature3}>
        <p className={styles.feature}>Table Management:</p>
        <p className={styles.feature}>Organize your seating effortlessly by setting up virtual tables in the app. Each table gets a unique QR code, ready for your guests to scan.</p>
        </div>
        <figure className={styles.imgTables}>
          <img src={getImageUrl('ScanServe/restaurantTables.png')} className={styles.img} alt="Table management" />
        </figure>

        <div className={styles.feature4}>
        <p className={styles.feature}>Real-Time Order Management:</p>
        <p className={styles.feature}>Leveraging the power of the Socket.IO library, Scan & Serve offers live order management. Receive orders as they come in, update statuses in real-time, and keep a direct communication line with your guests. Manage your restaurant operations in real-time, ensuring prompt and efficient service for every customer.</p>
        </div>
        <figure className={styles.imgOrders1}>
          <img src={getImageUrl('ScanServe/ordersManag1.png')} className={styles.img} alt="Order management" />
        </figure>
        <figure className={styles.imgOrders2}>
          <img src={getImageUrl('ScanServe/ordersManag2.png')} className={styles.img} alt="Order management" />
        </figure>
        
      </div>

      <div className={styles.guestWrapper}>
        <p className={styles.titleGuests}>For guests: a seamless and interactive dining experience</p>
      
      <div className={styles.feature5}>
      <p className={styles.feature}>Instant Access to Menus:</p>
      <p className={styles.feature} >Forget waiting for a physical menu. Scan the QR code at your table to see the restaurant's menu directly on your device. Explore the menu at your leisure, with all the details you need easily accessible.</p>
      </div>
      <figure className={styles.imgUser}>
          <img src={getImageUrl('ScanServe/user.gif')} className={styles.imgUser} alt="Access to menu" />
      </figure>

      <div className={styles.feature6}>
      <p className={styles.feature}>Effortless Ordering:</p>
      <p className={styles.feature}>After choosing your items, place your order directly through the app. Avoid the wait to catch a waiter's attention— it's all about convenience and speed.</p>
      </div>
      <figure className={styles.imgOrder}>
          <img src={getImageUrl('ScanServe/order.gif')} className={styles.imgOrder} alt="Effortless ordering" />
      </figure>

      <div className={styles.feature7}>
      <p className={styles.feature}>Real-Time Updates:</p>
      <p className={styles.feature}>From the moment you place your order until it's ready, stay informed with live updates on your order status through the app. Always know exactly when your meal will be ready to enjoy.</p>
      </div>

     </div> 
    <div className={styles.info}>
      <p>Technologies Used: </p>
      <p>React, Tailwind Css, Lottie, Node.js, Express, Mongoose, MongoDB, bcrypt, jsonwebtecken (authentication and security), Multer, Socket.IO, Cloudinary</p>
      <p className={styles.gitHub}>GitHub Repository: <a href="https://github.com/andrii-kuznichenko/restaurant-app" target="_blank" rel="noreferrer">Scan & Serve</a></p>
      <p className={styles.liveApp}>Live Application: <a href="https://scan-service.onrender.com/" target="_blank" rel="noreferrer">Scan & Serve</a></p>
      <button className={styles.button} onClick={handleGoBack}>Go Back</button>
  </div>
    </div>
    </div>
  )
}
