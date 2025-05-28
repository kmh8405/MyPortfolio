import SkillSection from '../components/SkillSection';
import styles from '../styles/Skills.module.css';

import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaGithub, FaCuttlefish 
} from 'react-icons/fa';

import { 
  SiTypescript, SiCplusplus, SiJquery, SiMysql, SiExpress, 
  SiNotion, SiGoogle 
} from 'react-icons/si';

import { TbBrandCSharp } from "react-icons/tb";

import { VscVscode } from 'react-icons/vsc';
import { DiVisualstudio } from 'react-icons/di';

const Skills = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Skills</h1>

      {/* Frontend Section */}
      <SkillSection
        title="Frontend"
        skills={[
          { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
          { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
          { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
          { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
          { name: 'React', icon: <FaReact color="#61DAFB" /> },
        ]}
        descriptionItems={[
          'HTML, CSS로 정적 웹페이지 구성 가능 (Grid/Flex 활용)',
          'JavaScript로 네비게이션, 달력, 메모장 등 인터랙티브 기능 구현 경험',
          'TypeScript는 학습 중이며 JS 문법에 타입 명시를 중심으로 사용 경험 있음',
          'React로 컴포넌트 단위 UI 구성, 페이지 라우팅, props/state 관리 가능',
        ]}
      />

      {/* Backend Section */}
      <SkillSection
        title="Backend"
        skills={[
          { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
          { name: 'Express', icon: <SiExpress color="#ffffff" /> },
          { name: 'C', icon: <FaCuttlefish color="#A8B9CC" /> },
          { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
          { name: 'C#', icon: <TbBrandCSharp color="#239120" /> },
          { name: 'Python', icon: <FaPython color="#3776AB" /> },
        ]}
        descriptionItems={[
          'Node.js 학습을 통해 HTTP 처리, 라우팅, 파일 시스템, npm 등 기본 개념을 이해하고 간단한 서버 구축 경험 보유',
          'C/C++ 언어를 활용한 기본 문법 및 알고리즘 문제 풀이 경험',
          'C#과 .NET Framework 기반으로 Windows Forms 애플리케이션 개발 경험 (OCR + DeepL API 기반 번역 애플리케이션 구현)',
          'Python과 Jupyter Notebook을 사용한 웹 크롤링 경험 (HTML 구조 분석 및 데이터 추출)',
        ]}
      />

      {/* DB & Library Section */}
      <SkillSection
        title="DB / Library"
        skills={[
          { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
          { name: 'jQuery', icon: <SiJquery color="#0769AD" /> },
        ]}
        descriptionItems={[
          'MySQL을 사용한 간단한 테이블 설계 및 CRUD(create, read, update, delete) 등을 포함한 기초 SQL 쿼리 작성 경험',
          'jQuery를 활용해 fadeIn/out, slide 등의 인터랙션 애니메이션 및 이벤트 처리 구현 경험',
          'Ajax를 활용해 외부 API로부터 데이터를 비동기적으로 호출 및 화면에 동적으로 렌더링',
          'PubMed의 efetch 엔드포인트를 사용해 특정 키워드의 최신 논문 데이터를 실시간으로 수집 및 표시',
        ]}
      />

      {/* Tools Section */}
      <SkillSection
        title="Tools"
        skills={[
          { name: 'GitHub', icon: <FaGithub color="#ffffff" /> },
          { name: 'Notion', icon: <SiNotion color="#ffffff" /> },
          { name: 'Google Workspace', icon: <SiGoogle color="#4285F4" /> },
          { name: 'VSCode', icon: <VscVscode color="#007ACC" /> },
          { name: 'Visual Studio', icon: <DiVisualstudio color="#5C2D91" /> },
        ]}
        descriptionItems={[
          'GitHub를 통한 프로젝트 관리 및 배포',
          'Notion과 Google Workspace 기반 문서화 및 협업 경험 다수',
          'VSCode를 이용한 프론트엔드/백엔드 통합 개발 환경 구성',
          'Visual Studio로 C# 및 Windows Forms 개발 경험',
        ]}
      />
    </div>
  );
};

export default Skills;