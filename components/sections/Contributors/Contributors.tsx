import React from 'react'
import styles from './Contributors.module.css'
import Card from './Card/Card'

import { SectionContainer, SectionContext } from 'components'

const Contributors = () => {
  const sampleData = [
    {
      profileImage: 'https://avatars.githubusercontent.com/u/74984741?v=4',
      name: 'Eray Gündoğmuş',
      title: 'Frontend Developer',
    },
    {
      profileImage: 'https://avatars.githubusercontent.com/u/25130814?v=4',
      name: 'Orhan Özkerçin',
      title: 'Frontend Developer',
    },
    {
      profileImage: 'https://avatars.githubusercontent.com/u/74984741?v=4',
      name: 'Eray Gündoğmuş',
      title: 'Frontend Developer',
    },
    {
      profileImage: 'https://avatars.githubusercontent.com/u/25130814?v=4',
      name: 'Orhan Özkerçin',
      title: 'Frontend Developer',
    },
  ]

  return (
    <SectionContainer bgColor="bg-gray-200">
      <SectionContext
        title="Our contributors"
        subtitle="Frontendship’in herkes için daha verimli ve eğlenceli bir topluluk
        olması için katkı sağlayan üyelerimiz."
      />
      <div className={styles.cardContainer}>
        {sampleData?.map((card, index) => (
          <Card
            key={index}
            profileImage={card.profileImage}
            name={card.name}
            title={card.title}
          />
        ))}
      </div>
    </SectionContainer>
  )
}

export default Contributors
