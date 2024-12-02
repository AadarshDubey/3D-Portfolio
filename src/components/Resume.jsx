import React from 'react';
import { styles } from '../styles';

const Resume = () => {
  return (
    <div className="text-center my-5 p-4">
      <p className={styles.sectionSubText}>
        📄You can view my resume by clicking the link below📄
      </p>
      <a 
        href="https://drive.google.com/file/d/1_m_qyBcN_e9l8Ew1y7SQoWNIVyE2CEQg/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-purple-500 underline text-xl inline-block py-4 px-6 break-words"
      >
        View My Resume
      </a>
    </div>
  );
}

export default Resume;
