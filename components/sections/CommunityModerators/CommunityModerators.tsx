import React from 'react'
import styles from "./CommunityModerators.module.css";
import ModeratorsCard from './ModeratorsCard/ModeratorCard';

const CommunityModerators = () => {
    const moderatorCards = [
        {
            profileImage: "https://avatars.githubusercontent.com/u/74984741?v=4",
            name: "Eray Gündoğmuş",
            title: "Frontend Developer"
        },
        {
            profileImage: "https://avatars.githubusercontent.com/u/25130814?v=4",
            name: "Orhan Özkerçin",
            title: "Frontend Developer"
        },
        {
            profileImage: "https://avatars.githubusercontent.com/u/74984741?v=4",
            name: "Eray Gündoğmuş",
            title: "Frontend Developer"
        },
        {
            profileImage: "https://avatars.githubusercontent.com/u/25130814?v=4",
            name: "Orhan Özkerçin",
            title: "Frontend Developer"
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p className={styles.shadowTitle}>Topluluk Moderatörleri</p>
                <p className={styles.mainTitle}>Topluluk Moderatörleri</p>
                <p className={styles.desc}>Frontendship’in herkes için daha verimli ve eğlenceli bir topluluk olması için katkı sağlayan üyelerimiz.</p>
            </div>
            <div className={styles.cardContainer}>
                {moderatorCards.map((card) => (
                    <ModeratorsCard profileImage={card.profileImage} name={card.name} title={card.title} />
                ))}
            </div>
        </div>
    )
}

export default CommunityModerators;