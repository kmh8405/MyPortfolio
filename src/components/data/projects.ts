import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";
import Project3 from "../../assets/Project3.png";
import Project4 from "../../assets/Project4.png";
import Project5 from "../../assets/Project5.png";
import Project6 from "../../assets/Project6.png";
import Project7 from "../../assets/Project7.png";
import Project8 from "../../assets/Project8.png";
import TeamProject from "../../assets/TeamProject.png";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  demoUrl: string;
  sourceUrl: string;
  image: string;
  techStack: string[];
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "MyLocationWeather",
    description: `사용자의 현재 위치를 기반으로 실시간 날씨와 온도를 제공하고, 
    날씨에 따른 우산 여부 및 옷차림 가이드를 제시하는 모바일 앱입니다. 
    앱 인벤터와 외부 API(OpenWeatherAPI)를 연동하여 사용자 맞춤형 날씨 정보를 직관적으로 전달하는 데 주력했습니다.`,
    demoUrl: "",
    sourceUrl: "https://aerial-scarer-980.notion.site/Project-1-App-Inventor-App-1a04ffa3e1d780748420ddcf02756545?pvs=4",
    image: Project1,
    techStack: ["App Inventor", "OpenWeatherAPI"]
  },
  {
    id: 2,
    title: "CellBlog",
    description: `전공 내용을 바탕으로 제작한 HTML/CSS 기반의 정적 웹페이지입니다. 
    카테고리 네비게이션 및 JavaScript로 제작한 퀴즈 기능을 통해 학습 효율성과 사용자 상호작용을 고려한 설계를 실현했습니다.`,
    demoUrl: "https://kmh8405.github.io/CellBlog/",
    sourceUrl: "https://github.com/kmh8405/CellBlog",
    image: Project2,
    techStack: ["HTML5", "CSS3", "Javascript"]
  },
  {
    id: 3,
    title: "CellBlogAPI",
    description: `기존 CellBlog에 API 기능을 추가하여 동적으로 논문과 단백질 구조 정보를 불러오는 웹페이지로 확장했습니다. 
    PubMed의 fetch 라이브러리인 efetch를 사용하여 API를 통해 실시간 데이터 제공, 
    jQuery 애니메이션으로 시각적 완성도를 높였습니다.`,
    demoUrl: "https://kmh8405.github.io/CellBlogAPI/",
    sourceUrl: "https://github.com/kmh8405/CellBlogAPI",
    image: Project3,
    techStack: ["HTML5", "CSS3", "Javascript", "jQuery", "AJAX", "PubMed API", "RCSB PDB API"]
  },
  {
    id: 4,
    title: "Immune Card Game",
    description: `면역 세포 간 상호작용을 카드 게임 규칙에 접목시킨 웹 기반 게임입니다. 
    드래그 앤 드롭 인터랙션과 전공 개념을 결합하여 교육적 요소와 게임성을 동시에 고려했습니다.`,
    demoUrl: "https://kmh8405.github.io/ImmuneCardGame/",
    sourceUrl: "https://github.com/kmh8405/ImmuneCardGame",
    image: Project4,
    techStack: ["HTML5", "CSS3", "Javascript", "Drag & Drop API"]
  },
  {
    id: 5,
    title: "March Madness",
    description: `미국 대학 농구 인기 분석을 주제로 웹 크롤링과 데이터 분석을 진행한 프로젝트입니다. 
    Seaborn과 Pandas 등 다양한 데이터 분석 라이브러리를 활용하여 시각화까지 완성한 데이터 중심 프로젝트입니다.`,
    demoUrl: "https://colab.research.google.com/drive/15gGNITW41iiDl9lQNqf0kp4BGJp_Qdmx?usp=sharing",
    sourceUrl: "https://github.com/kmh8405/March_Madness",
    image: Project5,
    techStack: ["PYTHON", "Requests", "BeautifulSoup", "Pandas", "Matplotlib", "Seaborn", "Plotly"]
  },
  {
    id: 6,
    title: "CaptureTranslatorApp",
    description:  `사용자가 선택한 화면 영역을 캡쳐하여 OCR로 텍스트를 추출하고, 
    이를 DeepL API를 통해 실시간 번역하는 윈도우 데스크탑 애플리케이션입니다. 
    영어 및 일본어를 지원하며, C# 기반의 UI 구현과 API 연동을 중점으로 개발했습니다.`,
    demoUrl: "https://github.com/kmh8405/CaptureTranslator/releases/tag/v1.0",
    sourceUrl: "https://github.com/kmh8405/CaptureTranslator",
    image: Project6,
    techStack: ["C#", ".NET Framework", "Windows Forms", "Tesseract", "OpenCvSharp4", "DeepL API"]
  },
  {
    id: 7,
    title: "KMH_Portfolio",
    description: `React 기반의 포트폴리오 웹사이트로, 라우팅을 통한 페이지 전환과 다양한 
    라이브러리 활용을 통해 사용자 중심의 UI/UX를 구현했습니다. 
    컴포넌트 단위로 구조화되어 유지보수성과 확장성이 뛰어납니다.`,
    demoUrl: "https://my-portfolio-beta-lac.vercel.app/",
    sourceUrl: "https://github.com/kmh8405/MyPortfolio",
    image: Project7,
    techStack: ["React", "Typescript", "React Router", "Styled-components", "React-chrono"]
  },
  {
    id: 8,
    title: "WinFormsTCPChat",
    description: `C# Windows Forms로 제작된 간단한 로컬 데스크탑 채팅 애플리케이션입니다.
    TcpListener와 TcpClient, 그리고 NetworkStream을 활용해, 
    서버-클라이언트 간 1:1 텍스트 채팅을 구현했습니다.`,
    demoUrl: "",
    sourceUrl: "https://github.com/kmh8405/WinFormsTCPChat",
    image: Project8,
    techStack: ["C#", ".NET 8.0 Framework", "System.Net.Sockets", "System.Threading"]
  },
  {
    id: 9,
    title: "Saramsoop (Team Project)",
    description: `(현재 진행중) 많은 기업에서 활용되는 ERP 시스템에서 특히 모든 기업에서
    사용 가능한 인사(HR)시스템입니다. 크게 4가지(직원관리, 근태관리, 급여관리, 결제관리)로 
    나누어서 진행중이며, 부가 기능으로 채팅, 공지사항, 메모장 등을 추가할 예정입니다.
    본 팀프로젝트는 프론트로는 React + Typescript, 백엔드로는 C#(ASP.NET Core), DB는 
    PostgreSQL (공용DB는 Supabase)로 제작 진행중입니다.`,
    demoUrl: "",
    sourceUrl: "https://github.com/kmh8405/KMH_saramsoop",
    image: TeamProject,
    techStack: ["React", "Typescript", "React Router", "Axios", "Material UI", "ASP.NET Core", "PostgreSQL"]
  },
];
