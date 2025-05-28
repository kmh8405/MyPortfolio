import { Chrono } from "react-chrono";
import styles from "../styles/Timeline.module.css";

const Timeline = () => {
  const items = [
    {
      title: "2025.02 ~ 2025.07",
      cardTitle: "KOSTA (한국소프트웨어기술진흥협회)",
      cardSubtitle: "Node.js기반 DevOps 개발자 양성 훈련과정",
      cardDetailedText: `Javascript를 중심으로 프론트엔드와 백엔드, 데이터베이스 등 다양한 언어 및 기술들을 실무 중심으로 공부하면서 
      기획부터 배포까지의 전 과정을 경험하며 개발 프로세스에 대한 이해를 높였습니다.`,
    },
    {
      title: "2017.08 ~ 2024.08",
      cardTitle: "University of California, Merced 졸업",
      cardSubtitle: "Molecular & Cell Biology 전공",
      cardDetailedText: `논리적 사고를 바탕으로 실험 설계 및 분석을 수행하였고, 다수의 팀 프로젝트를 통해 
      협업 능력과 커뮤니케이션 역량을 키웠습니다. 비전공자임에도 불구하고 이러한 문제 해결 중심의 학문적 경험은 
      개발자로서의 성장에도 긍정적인 영향을 주고 있습니다.`,
    },
    {
      title: "2014.11 ~ 2017.05",
      cardTitle: "Abraham Lincoln High School 졸업",
      cardSubtitle: "고교 시절 미국으로 이민",
      cardDetailedText: `낯선 환경과 언어 장벽 속에서도 꾸준한 노력으로 현지 고등학교를 졸업하고 
      대학에 진학했습니다. 이 경험을 통해 스스로 동기를 부여하며 도전하는 자세와 끈기를 길렀습니다.`,
    }
  ];

  return (
    <div className={styles.timelineWrapper}>
      <Chrono
        items={items}
        mode="VERTICAL"
        theme={{
          primary: "#4e91fc",
          secondary: "#f0f0f0",
          cardBgColor: "#ffffffdd",
          cardTitleColor: "#000",
          titleColor: "#333",
        }}
        cardHeight={120}
        scrollable
        disableToolbar={true}
      />
    </div>
  );
};

export default Timeline;