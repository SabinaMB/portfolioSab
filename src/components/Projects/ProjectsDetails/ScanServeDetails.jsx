import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ScanServeDetails.module.css'

export const ScanServeDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <p className={styles.title}>ScanServeDetails</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}