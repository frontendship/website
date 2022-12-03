import Image from "next/image";
import PlayButton from "./PlayButton";
import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerLeft}>
        <h1 className={styles.title}>Kendine bir proje bul</h1>
        <p className={styles.description}>
          Ekosisteme dair her çeşit bilgiye ulaşmana yardımcı olmak için bir
          araya gelen topluluk: Frontendship
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonFill}>Kimdir</button>
          <button className={styles.buttonBorder}>Discord</button>
        </div>
      </div>
      <div className={styles.bannerRight}>
        <div className={styles.videoContainer}>
          <PlayButton
            icon="play-circle"
            color="white"
            size={50}
            className={styles.playButton}
          />

          <Image
            src="/banner-asset/image1.png"
            width={280}
            height={370}
            objectFit="cover"
            alt="image1"
            className={styles.image}
          />
        </div>
        <div className={styles.imageCol}>
          <Image
            src="/banner-asset/image3.png"
            width={270}
            height={252}
            objectFit="cover"
            alt="image1"
            className={styles.image}
          />
          <Image
            src="/banner-asset/image2.png"
            width={270}
            height={240}
            objectFit="cover"
            alt="image1"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
