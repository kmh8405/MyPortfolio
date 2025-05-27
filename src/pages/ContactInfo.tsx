import { FaGithub, FaEnvelope, FaDiscord, FaBloggerB } from 'react-icons/fa';
import styles from '../styles/ContactInfo.module.css';
import { PiCopyLight } from 'react-icons/pi';
import { useState } from 'react';
import GmailLogo from '../assets/GmailLogo.png';
import TistoryLogo from '../assets/TistoryLogo.png';
import GithubLogo from '../assets/GithubLogo.png';
import DiscordLogo from '../assets/DiscordLogo.png';

const Contact = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const email = 'kmh.ssem8405@gmail.com';
  const blogUrl = 'https://kmh1212.tistory.com/';
  const githubUrl = 'https://github.com/kmh8405';
  const discordUrl = 'https://discord.com/';
  const discordId = '@muvich';

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('복사 실패: ', err);
    }
  };

  return (
    <div className={styles.contactContainer}>
        <h1>Contact Me</h1>
        <div className={styles.statusCard}>
            <h3>응답 가능 시간</h3>
            <p>📅 매일: 오전 8시 ~ 오후 10시</p>
            <p>📬 이메일 확인 주기: 하루 평균 3~4회</p>
            <p>⏱ 평균 응답 시간: 24시간 이내</p>
        </div>
        <div className={styles.gridContainer}>
            {/* Gmail */}
            <div className={styles.gridItem}>
                <img src={GmailLogo} alt="Gmail" className={styles.logoImage} />
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                    <FaEnvelope /> Gmail
                </a>
                <div className={styles.row}>
                    <span className={styles.text}>{email}</span>
                    <button onClick={() => handleCopy(email)} className={styles.copyBtn}>
                        <PiCopyLight size={18} />
                    </button>
                    {copiedText === email && <span className={styles.copiedMsg}>복사 완료</span>}
                </div>
            </div>

            {/* Blog */}
            <div className={styles.gridItem}>
                <img src={TistoryLogo} alt="Tistory" className={styles.logoImage} />
                <a href={blogUrl} target="_blank" rel="noopener noreferrer">
                    <FaBloggerB /> Blog
                </a>
                <div className={styles.row}>
                    <span className={styles.text}>{blogUrl}</span>
                    <button onClick={() => handleCopy(blogUrl)} className={styles.copyBtn}>
                        <PiCopyLight size={18} />
                    </button>
                    {copiedText === blogUrl && <span className={styles.copiedMsg}>복사 완료</span>}
                </div>
            </div>

            {/* GitHub */}
            <div className={styles.gridItem}>
                <img src={GithubLogo} alt="GitHub" className={styles.logoImage} />
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                </a>
                <div className={styles.row}>
                    <span className={styles.text}>{githubUrl}</span>
                    <button onClick={() => handleCopy(githubUrl)} className={styles.copyBtn}>
                        <PiCopyLight size={18} />
                    </button>
                    {copiedText === githubUrl && <span className={styles.copiedMsg}>복사 완료</span>}
                </div>
            </div>

            {/* Discord */}
            <div className={styles.gridItem}>
                <img src={DiscordLogo} alt="Discord" className={styles.logoImage} />
                <a href={discordUrl} target="_blank" rel="noopener noreferrer">
                    <FaDiscord /> Discord
                </a>
                <div className={styles.row}>
                    <span className={styles.text}>{discordId}</span>
                    <button onClick={() => handleCopy(discordId)} className={styles.copyBtn}>
                        <PiCopyLight size={18} />
                    </button>
                    {copiedText === discordId && <span className={styles.copiedMsg}>복사 완료</span>}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;
