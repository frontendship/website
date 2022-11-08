import React from "react";
import styles from "./ContributorsSection.module.css";
import Card from "./Card";
import contributors from "./contributors.json" assert { type: "json" };
import { TitleSection } from "components";

const ContributorsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
      <TitleSection  subtitle="Frontendship’in herkes için daha verimli ve eğlenceli bir topluluk olması için katkı sağlayan üyelerimiz." title='Topluluk Moderatörleri' titleStyles={styles.title} subtitleStyles={styles.subTitle}></TitleSection>
        <div className={styles.contributors}>
          {contributors.map((contributor) => <Card name={contributor.name} role={contributor.role} image={contributor.image} /> )}
        </div>
      </div>
    </div>
  );
};

export default ContributorsSection;
