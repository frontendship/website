import Image from 'next/image'
import Link from 'next/link'
import { Icon } from 'components'
import styles from './Card.module.scss'
import sampleData from './sample.json'

const Card = () => {
  return (
    <div className={styles.blogContainer}>
      {sampleData.map((blog: any) => (
        <div className={styles.card} key={blog.id}>
          <div className={styles.imgContainer}>
            <Image
              src="/cat.jpeg"
              alt={blog.image}
              layout="responsive"
              width={347}
              height={347}
              className={styles.image}
            />
          </div>
          <div className={styles.header}>
            <div className={styles.hr}></div>
            <div className={styles.title}>
              {blog.title}
              <div className={styles.readMore}>
                <Link href={blog.path}>
                  <span className="flex items-center gap-2">
                    Read More <Icon icon="arrow-right" size={10} />{' '}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
