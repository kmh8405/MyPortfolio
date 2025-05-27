// pages/AboutMe.tsx
import styles from '../styles/AboutMe.module.css';
import { FaUser, FaBirthdayCake, FaMapMarkerAlt } from 'react-icons/fa';
import Timeline from '../components/Timeline.tsx';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>

      {/* 3열 그리드 - 이름, 생년월일, 위치 */}
      <div className={styles.gridThree}>
        <div className={styles.gridItem}><FaUser /> 김민혁</div>
        <div className={styles.gridItem}><FaBirthdayCake /> 1998.12.12</div>
        <div className={styles.gridItem}><FaMapMarkerAlt /> 서울특별시 금천구</div>
      </div>
      
      <h2 className={styles.sectionTitle}>💡Who am I?</h2>

      {/* 2열 그리드 - 이미지 + 자기소개 */}
      <div className={styles.gridTwo}>
        <img src="../src/assets/me.jpg" alt="프로필 이미지" className={styles.profileImg} />
        <div className={styles.introText}>
          <p><b>낯선 환경에서도 끝까지 해내는 집념이 저의 가장 큰 무기입니다.</b></p>
          <p>고1에 영어 한마디 못한 채 미국에 이민해 고등학교와 대학교까지 졸업했습니다.</p>
          <p>단어 하나하나 새벽까지 찾아가며 공부하던 그때의 태도로 지금도 배워갑니다.</p>
          <p>비전공자이자 늦게 시작한 개발 공부지만, 오히려 더 열심히 배우고 스스로 실습하며 채워가고 있습니다.</p>
          <p><b>'시작은 미약하나 그 끝은 창대하리라'</b>는 마음으로, 오늘도 지식을 쌓으며 차근차근 성장 중입니다.</p>
        </div>
      </div>
      
      <h2 className={styles.sectionTitle}>🎓Education</h2>

      {/* 타임라인 + 이미지 */}
      <div className={styles.gridTwoTimeline}>
        <Timeline />
        <div className={styles.TimelineImg}>
          <img src="../src/assets/GraduationPic.jpg" alt="대학 졸업사진" className={styles.timelineImg} />
          <img src="../src/assets/UniversityDiploma.jpg" alt="대학 졸업장" className={styles.timelineImg} />
          <img src="../src/assets/HighschoolDiploma.jpg" alt="고등학교 졸업장" className={styles.timelineImg} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
