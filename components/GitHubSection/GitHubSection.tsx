import React from "react";
import GitHubSectionCard from "../GitHubSectionCard/GitHubSectionCard";
import Icon from "../Icon/Icon";
import styles from "./GitHubSection.module.css";

const GithubSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <GitHubSectionCard />
      </div>
      <div className={styles.descContainer}>
        <h1 className={styles.title}>Frontendship’e dair her şey bir arada!</h1>
        <p className={styles.desc}>
          Frontend ile ilgili ihtiyacınız olan her şey tek bir noktada.
          Frontendship topluluğuna katılmak için tek gereken Discord kanalına
          katılmak.
        </p>
        <button className={styles.button}>
          <span className={styles.buttonText}>
            Bir parçası ol
            <Icon icon="arrow-right" size={16} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default GithubSection;
