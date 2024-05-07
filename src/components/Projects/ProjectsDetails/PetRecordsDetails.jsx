import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './PetRecordsDetails.module.css'

export const PetRecordsDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div><p className={styles.title}>PetRecordsDetails</p>
       <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}
