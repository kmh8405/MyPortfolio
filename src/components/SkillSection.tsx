import React, { useState } from 'react';
import styles from '../styles/Skills.module.css';
import Button from './button';

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillSectionProps = {
  title: string;
  skills: Skill[];
  descriptionItems: string[];
};

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills, descriptionItems }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h1>{title}</h1>
        <Button
        text={showDesc ? 'See Less' : 'See More'}
        onClick={() => setShowDesc(!showDesc)}
        />
      </div>

      <div className={styles.skillGrid}>
        {skills.map((skill, idx) => (
          <div key={idx} className={styles.skillCard}>
            <div className={styles.icon}>{skill.icon}</div>
            <div className={styles.name}>{skill.name}</div>
          </div>
        ))}
      </div>

      {showDesc && (
        <ul className={styles.description}>
          {descriptionItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SkillSection;
