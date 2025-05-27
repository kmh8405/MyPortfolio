import React from "react";
import "./NavSidebar.css";
import { FaHome, FaUser, FaCogs, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import ProfilePic from '../../assets/ProfilePic.jpg';

const NavSidebar: React.FC = () => {
  return (
    <div className="nav-sidebar">
      <div className="profile-section">
        <div className="profile-pic-wrapper" title="현재 구직 중입니다.">
          <img
            src={ProfilePic}
            alt="Profile"
            className="profile-pic"
          />
          <span className="online-dot" />
        </div>
        <div className="intro-text">
          <p>안녕하세요</p>
          <p>신입 풀스택 개발자</p>
          <p>김민혁 입니다.</p>
        </div>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="/" className="nav-link">
              <FaHome className="icon" />
              <span className="link-text">Home</span>
            </a>
          </li>
          <li>
            <a href="/aboutme" className="nav-link">
              <FaUser className="icon" />
              <span className="link-text">About Me</span>
            </a>
          </li>
          <li>
            <a href="/skills" className="nav-link">
              <FaCogs className="icon" />
              <span className="link-text">Skills</span>
            </a>
          </li>
          <li>
            <a href="/projects" className="nav-link">
              <FaProjectDiagram className="icon" />
              <span className="link-text">Projects</span>
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
              <FaEnvelope className="icon" />
              <span className="link-text">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavSidebar;
