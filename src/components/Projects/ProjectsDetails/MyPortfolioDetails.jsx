import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './MyPortfolioDetails.module.css'

export const MyPortfolioDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div><p className={styles.title}>MyPortfolioDetails</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
    
  )
}
