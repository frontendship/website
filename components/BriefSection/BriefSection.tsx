import {Icon, Title,TitleSection} from "components"
import style from "./BriefSection.module.css";
import contentData from "./contentData.json";

const BriefSection = () => {
  const cardArray: any = contentData;

  return (
    <div className="flex flex-col justify-center items-center py-12">
      <TitleSection  subtitle="Frontend alanında sıfırdan ileri seviyelere kadar sektöre katkı sağlayacak içerikler üretmek ve topluluğa destek sağlamak istiyoruz." title='Frontendship&apos;e neden katılmalıyım?'></TitleSection>
      <div className="flex max-w-7xl">
        <div className={style.card}>
          {cardArray?.map((card: any, index: number) => (
            <div className={style.cardContent} key={card.title + index}>
              <Icon icon={card.iconName} size={35} className={`mb-3 ${card.iconColor ? card.iconColor : "text-black-900"}`} />
              <Title level={6}>{card.title}</Title>
              <p className={style.description}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BriefSection;
