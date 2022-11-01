import React from 'react'
import styles from "./CommunityModerators.module.css";
import ModeratorsCard from './ModeratorsCard/ModeratorCard';

const CommunityModerators = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p className={styles.shadowTitle}>Topluluk Moderatörleri</p>
                <p className={styles.mainTitle}>Topluluk Moderatörleri</p>
                <p className={styles.desc}>Frontendship’in herkes için daha verimli ve eğlenceli bir topluluk olması için katkı sağlayan üyelerimiz.</p>
            </div>
            <div className={styles.cardContainer}>
                <ModeratorsCard profileImage={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} name={"Veysel Kartal"} title={"Frontend Developer"} />
                <ModeratorsCard profileImage={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} name={"Veysel Kartal"} title={"Frontend Developer"} />
                <ModeratorsCard profileImage={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} name={"Veysel Kartal"} title={"Frontend Developer"} />
                <ModeratorsCard profileImage={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} name={"Veysel Kartal"} title={"Frontend Developer"} />
            </div>
        </div>
    )
}

export default CommunityModerators;