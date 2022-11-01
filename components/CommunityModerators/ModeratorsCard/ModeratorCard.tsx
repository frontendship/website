import React from 'react';
import styles from "./ModeratorCard.module.css";

const ModeratorsCard = ({ image, name, title }: any) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={image} alt="moderator" />
            </div>
            <div className={styles.textWrapper}>
                <p className={styles.name}>{name}</p>
                <p className={styles.title}>{title}</p>
            </div>
        </div>

    )
}

export default ModeratorsCard;