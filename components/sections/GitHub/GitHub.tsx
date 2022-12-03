import React from 'react'
import { Icon } from 'components'
import styles from './GitHub.module.css'
import Card from './Card/Card'
import { SectionContainer } from 'components'

const GitHub = () => {
  return (
    <SectionContainer bgColor="bg-primary-blue-400">
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.descContainer}>
          <h1 className={styles.title}>
            Frontendship’e dair her şey bir arada!
          </h1>
          <p className={styles.desc}>
            Frontend ile ilgili ihtiyacınız olan her şey tek bir noktada.
            Frontendship topluluğuna katılmak için tek gereken Discord kanalına
            katılmak.
          </p>
          <button className={styles.button}>
            <span className={styles.buttonText}>
              Bir parçası ol
              <Icon icon="arrow-right" size={16} />
            </span>
          </button>
        </div>
      </div>
    </SectionContainer>
  )
}

export default GitHub
