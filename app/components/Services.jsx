'use client';

import MagneticButton from './MagneticButton';
import Link from 'next/link';
import styles from './Services.module.scss';

const services = [
  {
    name: 'Analytics Setup & Implementation',
    tool: 'Google Analytics 4, GTM, Google Ads, Meta Pixel',
    // link: '/your-link-here' // Add link for this service later
  },
  {
    name: 'Tag Auditing & Troubleshooting',
    tool: 'GTM Preview, GA4 DebugView, Tag Assistant',
    // link: '/your-link-here' // Add link for this service later
  },
  {
    name: 'Dashboard Creation & Reporting',
    tool: 'Looker Studio, Google Sheets, GA4, Power BI',
    // link: '/your-link-here' // Add link for this service later
  },
  {
    name: 'Funnel & Conversion Analysis',
    tool: 'GA4 Explorer, Looker Studio, Hotjar, Microsoft Clarity',
    // link: '/your-link-here' // Add link for this service later
  },
  {
    name: 'CRO & UX Improvement',
    tool: 'GA4, Hotjar, Google Optimize, Google Lighthouse',
    // link: '/your-link-here' // Add link for this service later
  },
];

export default function Services() {
  return (
    // ✅ Keeps #services anchor functional
    <section id="services" className={styles.services}>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.serviceItem}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className={styles.serviceName}>{service.name}</div>
            <div className={styles.serviceTool}>{service.tool}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
