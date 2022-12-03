import Link from 'next/link'
import React from 'react'
import { Icon } from 'components'
import styles from './Card.module.css'

const GitHub = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <Icon icon="star" size={20} />
          <span className={styles.title}>Frontendship</span>
        </div>
        <div className={styles.images}>
          <div className={styles.imageContainer}>
            <img
              src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image1"
              className={styles.image}
            />
            <img
              src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image2"
              className={styles.image}
            />
            <img
              src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image3"
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <span>
              <span className={styles.semibold}>+12 </span>Katkıda Bulunan
            </span>
          </div>
        </div>
        <div>
          <h2 className={styles.subtitle}>
            Nasıl katılabilir ve katkı sağlayabilirsiniz?
          </h2>
          <p className={styles.desc}>
            Discord sunucusuna aşağıdaki linkten katılabilirsiniz. Topluluğun
            sosyal medya hesaplarını takip ederek bizimle iletişime geçebilir ve
            günlük shiplerinizi alabilirsiniz. Frontendship'in bir parçası
            olarak değer katmaya başlayabilirsin.
          </p>
        </div>
        <div>
          <Link passHref href="https://github.com/frontendship">
            <a
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              Göz at ve katkı sağla
              <Icon icon="arrow-right" size={16} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GitHub
