'use client';

import MagneticButton from './MagneticButton';
import Link from 'next/link';
import styles from './Services.module.scss';

const services = [
  {
    name: 'Radical Honesty',
    tool: ['If a solution isn\'t the right fit, I will be the first to tell you.'],
  },
  {
    name: 'Relationships First',
    tool: ['I am building relationships that will last a lifetime.'],
  },
  {
    name: 'Actually Helping You',
    tool: ['I look for your actual problems and bring real solutions.'],
  },
  {
    name: 'Straightforward Value',
    tool: ['No pitches or pressure, just pure value.'],
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.serviceItem}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className={styles.serviceName}>{service.name}</div>
            <div className={styles.serviceTool}>
              {service.tool.map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < service.tool.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}