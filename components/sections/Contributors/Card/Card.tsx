import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'

interface CardProps {
  profileImage: String
  name: String
  title: String
}

const Card = ({ profileImage, name, title }: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={`${profileImage}`}
          alt="moderator"
        />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.name}>{name}</p>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  )
}

export default Card
