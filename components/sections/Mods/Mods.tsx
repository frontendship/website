import React from 'react'
import styles from './Mods.module.css'
import Card from './Card/Card'
import mods from './sample.json' assert { type: 'json' }
import { SectionContext } from 'components'

const Contributors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <SectionContext
          subtitle="Frontendship’in herkes için daha verimli ve eğlenceli bir topluluk olması için katkı sağlayan üyelerimiz."
          title="Topluluk Moderatörleri"
          titleStyles={styles.title}
          subtitleStyles={styles.subTitle}
        />
        <div className={styles.item}>
          {mods.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              role={item.role}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contributors
