import Typewriter from '../components/typewriter';
import styles from '../styles/Home.module.css';

const Home : React.FC = () => {
    return (
        <div className={styles.homeContainer}>
        <div className={styles.homeImage}>
          <img src="/src/assets/HomeProfile.jpg" alt="개발자 사진" />
        </div>
        <div className={styles.homeText}>
          <h1>Hello World!</h1>
          <h2><Typewriter/>개발자 김민혁입니다.</h2>
          <h3>끊임없이 배우고 성장하는 개발자가 되고싶습니다.</h3>
          <p>방문해 주셔서 감사합니다!</p>
        </div>
      </div>
    )
}

export default Home;
