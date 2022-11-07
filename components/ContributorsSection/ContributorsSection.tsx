import React from "react";
import styles from "./ContributorsSection.module.css";
import Card from "./Card";
import contributors from "./contributors.json" assert { type: "json" };

const ContributorsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>Topluluk Moderatörleri</h1>
        <h2 className={styles.subtitle}>Frontendship’in herkes için daha verimli ve eğlenceli bir topluluk olması için katkı sağlayan üyelerimiz.</h2>
        <div className={styles.contributors}>
          {contributors.map((contributor) => <Card name={contributor.name} role={contributor.role} image={contributor.image} /> )}
        </div>
      </div>
    </div>
  );
};

export default ContributorsSection;
