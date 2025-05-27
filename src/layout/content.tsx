import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import ContactInfo from "../pages/ContactInfo";
import styles from './layout.module.css';

const Content : React.FC = () => {
    return (
        <div className = {styles.content}>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/aboutme" element = {<AboutMe/>}/>
                <Route path = "/skills" element = {<Skills/>}/>
                <Route path = "/projects" element = {<Projects/>}/>
                <Route path = "/contact" element = {<ContactInfo/>}/>
                <Route path = "*" element = {'페이지가 존재하지 않습니다. 다시 확인해주세요.'}/>
            </Routes>
        </div>
    )
}

export default Content;