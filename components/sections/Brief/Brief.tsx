import { Icon, Title, SectionContext, SectionContainer } from 'components'
import style from './Brief.module.css'
import sampleData from './sample.json'

const Brief = () => {
  return (
    <SectionContainer bgColor="bg-primary-blue-400 ">
      <SectionContext
        subtitle="Frontend alanında sıfırdan ileri seviyelere kadar sektöre katkı sağlayacak içerikler üretmek ve topluluğa destek sağlamak istiyoruz."
        title="Frontendship'e neden katılmalıyım?"
        titleStyles="text-5xl font-semibold my-4 text-white"
      />
      <div className="flex max-w-7xl">
        <div className={style.card}>
          {sampleData?.map((card: any, index: number) => (
            <div className={style.cardContent} key={card.title + index}>
              <Icon
                icon={card.iconName}
                size={35}
                className={`mb-3 ${
                  card.iconColor ? card.iconColor : 'text-black-900'
                }`}
              />
              <Title level={6}>{card.title}</Title>
              <p className={style.description}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
export default Brief
