'use client';

import MagneticButton from '../components/MagneticButton';
import Link from 'next/link';
import styles from './Projects.module.scss';

const projects = [
  {
    name: 'Sales Forecasting & Business Trend Model',
    tool: 'Python, Excel',
    link: '/SalesForecastingModel', // Direct link to your custom page
  },
  {
    name: 'Executive KPI Dashboard',
    tool: 'Tableau',
    link: '/KPI_Dashboard', // You can change this later
  },
  {
    name: 'Customer Segmentation & Retention Analysis',
    tool: 'SQL, Python',
    link: '/projects', // You can change this later
  },
  {
    name: 'Business Process Mapping & Optimization',
    tool: 'Lucidchart, Excel',
    link: '/projects', // You can change this later
  },
  {
    name: 'Agile Sprint Tracker & Requirements Breakdown',
    tool: 'JIRA, Confluence, Excel',
    link: '/projects', // You can change this later
  },
];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <Link
            href={project.link}
            key={index}
            className={styles.projectItem}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className={styles.projectName}>{project.name}</div>
            <div className={styles.projectTool}>{project.tool}</div>
          </Link>
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
