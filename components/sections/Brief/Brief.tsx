import { Icon, Title, SectionContext } from 'components'
import style from './Brief.module.css'
import sampleData from './sample.json'

const Brief = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <SectionContext
        subtitle="Frontend alanında sıfırdan ileri seviyelere kadar sektöre katkı sağlayacak içerikler üretmek ve topluluğa destek sağlamak istiyoruz."
        title="Frontendship'e neden katılmalıyım?"
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
    </div>
  )
}
export default Brief
