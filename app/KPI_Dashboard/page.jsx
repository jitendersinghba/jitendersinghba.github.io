'use client';

import { useEffect, useRef } from 'react';
import styles from './kpi.module.scss';
import FloatingNav from '../components/FloatingNav';
import MagneticButton from '../components/MagneticButton';

export default function KPIDashboardPage() {
  const vizRef = useRef(null);

  useEffect(() => {
    function resizeViz() {
      const divElement = vizRef.current;
      if (!divElement) return;
      const vizElement = divElement.getElementsByTagName('object')[0];
      if (!vizElement) return;
      const width = divElement.offsetWidth;
      if (width > 800) {
        vizElement.style.minWidth = '420px';
        vizElement.style.maxWidth = '1200px';
        vizElement.style.width = '100%';
        vizElement.style.minHeight = '587px';
        vizElement.style.maxHeight = '827px';
        vizElement.style.height = (width * 0.75) + 'px';
      } else if (width > 500) {
        vizElement.style.minWidth = '420px';
        vizElement.style.maxWidth = '1200px';
        vizElement.style.width = '100%';
        vizElement.style.minHeight = '587px';
        vizElement.style.maxHeight = '827px';
        vizElement.style.height = (width * 0.75) + 'px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '2577px';
      }
    }

    resizeViz();
    window.addEventListener('resize', resizeViz);

    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    const vizElement = vizRef.current?.getElementsByTagName('object')[0];
    if (vizElement) {
      vizElement.parentNode.insertBefore(script, vizElement);
    }

    return () => {
      window.removeEventListener('resize', resizeViz);
    };
  }, []);

  return (
    <>
      <FloatingNav alwaysVisible={true} />

      <section className={styles.kpiDashboardPage}>
        <div className={styles.narrowContent}>
          <header className={styles.hero}>
            <h1>KPI Dashboard</h1>
            <p className={styles.subtitle}>
              Executive overview of bank performance across all key metrics
            </p>
          </header>

          {/* === OVERVIEW SECTION === */}
          <div className={styles.projectOverview}>
            <h2>Overview</h2>
            <p>
              For this project, I took a sample banking dataset from Kaggle and built a KPI dashboard using Tableau.
              The goal was to give bank executives a quick, actionable overview of their business—so they can instantly
              see what’s working, what’s not, and where to focus next. This dashboard is designed to make decision-making
              data-driven and simple.
            </p>
          </div>

          {/* === DASHBOARD EMBED === */}
          <div
            className="tableauPlaceholder"
            id="viz1750627638108"
            ref={vizRef}
            style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}
          >
            <noscript>
              <a href="#">
                <img
                  alt="Dashboard 1"
                  src="https://public.tableau.com/static/images/KP/KPIDashboard_17506086622930/Dashboard1/1_rss.png"
                  style={{ border: 'none' }}
                />
              </a>
            </noscript>
            <object className="tableauViz" style={{ display: 'none' }}>
              <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
              <param name="embed_code_version" value="3" />
              <param name="site_root" value="" />
              <param name="name" value="KPIDashboard_17506086622930/Dashboard1" />
              <param name="tabs" value="no" />
              <param name="toolbar" value="yes" />
              <param
                name="static_image"
                value="https://public.tableau.com/static/images/KP/KPIDashboard_17506086622930/Dashboard1/1.png"
              />
              <param name="animate_transition" value="yes" />
              <param name="display_static_image" value="yes" />
              <param name="display_spinner" value="yes" />
              <param name="display_overlay" value="yes" />
              <param name="display_count" value="yes" />
              <param name="language" value="en-US" />
              <param name="filter" value="publish=yes" />
            </object>
          </div>

          {/* === DASHBOARD EXPLANATION SECTION === */}
          <div className={styles.dashboardExplanation}>
            <h2>Dashboard Components Explained</h2>
            <ul>
              <li>
                <strong>Total Customers:</strong> Shows the total number of customers (10,000) in the bank. This gives a sense of the bank’s scale and market presence.
              </li>
              <li>
                <strong>Customers by Geography:</strong> Breaks down the customer base by country—France (5,014), Germany (2,509), and Spain (2,477). Useful for spotting strong and weak markets.
              </li>
              <li>
                <strong>Active/Inactive Customers:</strong> Splits customers into active (5,151) and inactive (4,849). This highlights engagement and the risk of losing business.
              </li>
              <li>
                <strong>Gender Split:</strong> Displays the male (54.6%) and female (45.4%) breakdown. Useful for understanding demographics and targeting future campaigns.
              </li>
              <li>
                <strong>Average Balance:</strong> Shows the average customer account balance ($76,486), a key profitability indicator.
              </li>
              <li>
                <strong>Card Type Distribution:</strong> Breaks down how many customers have Silver (2,496) vs. Diamond (2,507) cards. This helps track product adoption and potential upsell opportunities.
              </li>
              <li>
                <strong>Churn Rate:</strong> Measures what percentage of customers the bank is losing (20.4%). High churn is a signal for urgent action.
              </li>
            </ul>
          </div>

          {/* === RECOMMENDATION SECTION === */}
          <div className={styles.recommendation}>
            <h2>My Recommendation</h2>
            <p>
              Looking at the dashboard, my first priority would be to address the <strong>high churn rate</strong> and the large number of inactive customers.
              Re-engaging these users and understanding why they’re leaving should be the top focus, as it will have the biggest immediate impact on growth and profitability.
              Initiatives like targeted outreach, customer feedback collection, and improved service for at-risk segments can quickly move the needle.
            </p>
          </div>

          {/* Navigation Button */}
          <div className={styles.footerNav} style={{ justifyContent: 'flex-end' }}>
            <a href="/#projects" style={{ textDecoration: 'none' }}>
              <MagneticButton className={styles.magneticBtn}>Next</MagneticButton>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
