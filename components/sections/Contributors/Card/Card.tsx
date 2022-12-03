import React from 'react'
import styles from './ModeratorCard.module.css'

interface CardProps {
  profileImage: String
  name: String
  title: String
}

const ModeratorsCard = ({ profileImage, name, title }: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={`${profileImage}`} alt="moderator" />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.name}>{name}</p>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  )
}

export default ModeratorsCard
