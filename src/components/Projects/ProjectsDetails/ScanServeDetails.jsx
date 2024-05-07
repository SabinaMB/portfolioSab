import React from 'react'
import { useNavigate, BrowserRouter as Router} from 'react-router-dom'
import styles from './ScanServeDetails.module.css'

export const ScanServeDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>ScanServeDetails</p>
      <button className={styles.button} onClick={handleGoBack}>Go Back</button>
    </div>
  )
}
