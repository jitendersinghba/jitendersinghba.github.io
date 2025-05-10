'use client';

import MagneticButton from '../components/MagneticButton'; // ✅
import styles from './Projects.module.scss';

const projects = [
  {
    name: 'Sales Forecasting & Business Trend Model',
    tool: 'Python, Excel',
  },
  {
    name: 'Executive KPI Dashboard',
    tool: 'Power BI',
  },
  {
    name: 'Customer Segmentation & Retention Analysis',
    tool: 'SQL, Python',
  },
  {
    name: 'Business Process Mapping & Optimization',
    tool: 'Lucidchart, Excel',
  },
  {
    name: 'Agile Sprint Tracker & Requirements Breakdown',
    tool: 'JIRA, Confluence, Excel',
  },
];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.projectName}>{project.name}</div>
            <div className={styles.projectTool}>{project.tool}</div>
          </div>
        ))}
      </div>

      <div className={styles.moreWrapper}>
        <MagneticButton
          className={styles.moreButton}
          onClick={() => (window.location.href = '/projects')}
        >
          More
        </MagneticButton>
      </div>
    </section>
  );
}
