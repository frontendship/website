import style from "./BriefSection.module.css";
import Icon from "../Icon/Icon";
import Title from "../Title/Title";

const BriefSection = () => {
  const cardArray: any = [
    {
      iconName: "open-source",
      iconColor: "text-blue-500",
      title: "Açık Kaynak",
      description: "Her seviyeden npm paketleri geliştirerek frontendship topluluğunda yer alan herkesi açık kaynaklı projelere contribution yapmaya ve referans gösterebilecekleri işler",
    },
    {
      iconName: "github",
      title: "Deneyim",
      iconColor: "text-[#F76268]",

      description:
        "Git kullanmak, ekip çalışması yapabilmek, ekosistemde yaygın olarak kullanılan toolların kullanımını ve amaçlarını aktararak da alanda yeni kişileri ilk iş deneyimlerine hazırlamak.",
    },
    {
      iconName: "messages",
      title: "Soru Cevap",
      iconColor: "text-yellow-500",

      description: "Sorular sorabilmek veya soruları cevaplayarak herkesin seviyesini tespit etmesini ve geliştirmesini sağlamak amaçlı yardımlaşmak.",
    },
    {
      iconName: "interaction",
      iconColor: "text-green-500",
      title: "Açık Kaynak",
      description: "Her seviyeden npm paketleri geliştirerek frontendship topluluğunda yer alan herkesi açık kaynaklı projelere contribution yapmaya ve referans gösterebilecekleri işler",
    },
    {
      iconName: "calendar",
      title: "Deneyim",
      iconColor: "text-[#1D8FBF]",

      description:
        "Git kullanmak, ekip çalışması yapabilmek, ekosistemde yaygın olarak kullanılan toolların kullanımını ve amaçlarını aktararak da alanda yeni kişileri ilk iş deneyimlerine hazırlamak.",
    },
    {
      iconName: "feedback",
      title: "Soru Cevap",
      iconColor: "text-purple-500",
      description: "Sorular sorabilmek veya soruları cevaplayarak herkesin seviyesini tespit etmesini ve geliştirmesini sağlamak amaçlı yardımlaşmak.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-12">
      <div className="flex flex-col items-center">
        <Title level={2}>Frontendship'e neden katılmalıyım?</Title>
        <p className={style.subDescription}>Frontend alanında sıfırdan ileri seviyelere kadar sektöre katkı sağlayacak içerikler üretmek ve topluluğa destek sağlamak istiyoruz.</p>
      </div>
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
