import styles from './salesforecasting.module.scss';
import MagneticButton from '../components/MagneticButton';
import FloatingNav from '../components/FloatingNav';

export default function SalesForecasting() {
  return (
    <>
      {/* Always show FloatingNav on this page */}
      <FloatingNav alwaysVisible={true} />
      <section className={styles.salesForecastingPage}>
        <div className={styles.narrowContent}>
          
          {/* Executive Summary */}
          <header className={styles.hero}>
            <h1>Sales Forecasting Models<br />Excel, SARIMA, and Prophet</h1>
            <p className={styles.subtitle}>
              Smarter inventory, fewer lost sales, and greater agility in planning
            </p>
          </header>
          <section className={styles.execSummarySection}>
            <h2>Executive Summary</h2>
            <p>
            This project was driven by a simple curiosity of how close can I get to perfect sales predictions, regardless of the tools and techniques used? In a retail world where every company develops its own tailored forecasting systems, often using proprietary data and complex models, I wanted to put widely acccessible, generic approaches to the test. <br /><br /> Using a demo Walmart sales data, I compared three common forecasting methods, Excel, SARIMA, and Prophet, each representing a different level of sophistication and accessibility in the industry. While some companies invest in custom-built, highly specialized solutions, most still rely on off-the-shelf or open-source tools, aiming for the best possible accuracy with reasonable effort.
            <br /><br /> My goal was clear: predict sales as accurately as possible using demo data, benchmark their performance, and cut through the noise about which approach actually delivers. While it's true that more advanced, niche models exist, the reality is that most organizations weigh effort against accuracy, and in practice, everyone is looking for the sweet spot. This project not only measures what's possible with common forecasting tools but also clarifies when and why you might push for something more advanced.
            </p>
          </section>
          
          {/* Business Problem / Context */}
          <section className={styles.contextSection}>
            <h2>Business Problem & Context</h2>
            <p>
              For large retailers, inaccurate sales forecasts can lead to millions in lost revenue through excess inventory, stockouts, and missed demand spikes. For example, running out of stock before a major sales event like Black Friday can directly impact customer satisfaction and long-term loyalty. This project addresses a core challenge faced by retail business leaders: how to select the right forecasting approach to balance speed, accuracy, and business needs in a high-stakes environment.
            </p>
          </section>
          
          {/* Data Understanding & Preparation */}
          <section className={styles.dataSection}>
            <h2>Data Understanding & Preparation</h2>
            <p>
              The dataset was sourced from a Kaggle Walmart weekly sales demo and included multiple years of sales data across various stores. Data preparation steps involved handling missing values, filtering out extreme outliers (such as sudden zero-sales weeks), and aligning time periods for fair comparison. I used basic business logic to fill small gaps, such as carrying forward last known sales, to maintain a realistic forecasting scenario similar to what a business would face in production.
            </p>
          </section>

          {/* Why Sales Forecasting Matters */}
          <section className={styles.impactSection}>
            <h2>Why Forecasting Matters</h2>
            <p>
              Even a 1% improvement in forecast accuracy can save millions by reducing excess inventory and lost sales. Having the right forecasting helps businesses spot trends early, prepare for demand changes, and make confident, well-informed decisions across the organization.
              Accurate forecasts don't just affect the numbers, they help teams avoid last-minute surprises, keep customers satisfied by meeting demand, and make everyday planning less stressful. When forecasting is reliable and easy to understand, everyone from warehouse staff to senior management can plan ahead with greater peace of mind.
            </p>
          </section>

          {/* Model Approaches */}
          <section className={styles.modelSection}>
            <h2>Approaches Used</h2>
            <div className={styles.modelsGrid}>
              <div className={styles.modelBlock}>
                <h3>Excel Forecasting</h3>
                <ul>
                  <li><b>Strengths:</b> Fast, transparent, easy to explain to non-technical audiences.</li>
                  <li><b>Limitations:</b> Misses seasonality, outliers, or sudden trend changes.</li>
                </ul>
              </div>
              <div className={styles.modelBlock}>
                <h3>SARIMA (Python)</h3>
                <ul>
                  <li><b>Strengths:</b> Captures seasonality and trend, interpretable, robust for regular cycles.</li>
                  <li><b>Limitations:</b> Needs careful tuning; less flexible for irregular events.</li>
                </ul>
              </div>
              <div className={styles.modelBlock}>
                <h3>Prophet (Python)</h3>
                <ul>
                  <li><b>Strengths:</b> Handles missing data, trend shifts, and multiple seasonalities. Robust for business.</li>
                  <li><b>Limitations:</b> Slightly more complex setup for simple use-cases.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Actual Sales Comparison */}
          <section className={styles.actualSalesSection}>
            <h2>Actual Sales</h2>
            <div className={styles.actualSalesList}>
              <div className={styles.actualSalesBlock}>
                <img src="/sales-forecasting/excel_actual_sales.png" alt="Excel Actual Sales" />
                <div className={styles.caption}>Excel Actual Sales Model</div>
              </div>
              <div className={styles.actualSalesBlock}>
                <img src="/sales-forecasting/sarima_actual_sales.png" alt="SARIMA Actual Sales" />
                <div className={styles.caption}>SARIMA Actual Sales Model</div>
              </div>
              <div className={styles.actualSalesBlock}>
                <img src="/sales-forecasting/prophet_actual_sales.png" alt="Prophet Actual Sales" />
                <div className={styles.caption}>Prophet Acutal Sales Model</div>
              </div>
            </div>
          </section>

          {/* Visuals: Sales Forecast Graphs */}
          <section className={styles.visuals}>
            <h2>Sales Forecast (Next 20 Weeks)</h2>
            <div className={styles.visualList}>
              <div className={styles.visualBlock}>
                <img src="/sales-forecasting/excel_forecast.png" alt="Excel Forecast" />
                <div className={styles.caption}>
                  <strong>Excel Forecast:</strong> Simple trend extension, but limited for seasonality.
                </div>
              </div>
              <div className={styles.visualBlock}>
                <img src="/sales-forecasting/sarima_forecast.png" alt="SARIMA Forecast" />
                <div className={styles.caption}>
                  <strong>SARIMA:</strong> Captures cyclical patterns and uncertainty.
                </div>
              </div>
              <div className={styles.visualBlock}>
                <img src="/sales-forecasting/prophet_forecast.png" alt="Prophet Forecast" />
                <div className={styles.caption}>
                  <strong>Prophet:</strong> Handles trend changes and multiple seasonality.
                </div>
              </div>
            </div>
          </section>

          {/* Visuals: Forecast Values Tables */}
          <section className={styles.tablesSection}>
            <h2>Forecasted Sales Values (Next 20 Weeks)</h2>
            <div className={styles.tablesList}>
              <div className={styles.tableBlock}>
                <img src="/sales-forecasting/excel_forecast_table.png" alt="Excel Forecast Values" />
                <div className={styles.caption}><strong>Excel Forecasted Values</strong></div>
              </div>
              <div className={styles.tableBlock}>
                <img src="/sales-forecasting/sarima_forecast_table.png" alt="SARIMA Forecast Values" />
                <div className={styles.caption}><strong>SARIMA Forecasted Values</strong></div>
              </div>
              <div className={styles.tableBlock}>
                <img src="/sales-forecasting/prophet_forecast_table.png" alt="Prophet Forecast Values" />
                <div className={styles.caption}><strong>Prophet Forecasted Values</strong></div>
              </div>
            </div>
          </section>

          {/* Results: Model Performance */}
          <section className={styles.metricsSection}>
            <h2>Model Performance Results</h2>
            <table className={styles.metricsTable}>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Strengths</th>
                  <th>When to Use</th>
                  <th>MAPE (Error %)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Excel</td>
                  <td>Fast, transparent</td>
                  <td>Quick checks, board visuals</td>
                  <td>Not Applicable</td>
                </tr>
                <tr>
                  <td>SARIMA</td>
                  <td>Seasonality, trend</td>
                  <td>Regular, seasonal retail data</td>
                  <td>5.85%</td>
                </tr>
                <tr>
                  <td>Prophet</td>
                  <td>Most accurate, versatile</td>
                  <td>Business-critical forecasting</td>
                  <td>4.05%</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Detailed Model Analysis and Business Application */}
          <section className={styles.analysisSection}>
            <h2>Analysis & Business Application</h2>
            <p>
              Comparing all three models provides a practical view of how forecasting works in real business scenarios. Excel forecasting offers the quickest way to estimate future sales, It’s perfect when you want quick numbers or need to explain the forecast to someone who doesn’t care about the math, just results.
              <br /><br />
              SARIMA, on the other hand, is designed for time series with strong seasonality and repeating trends, such as weekly or yearly retail cycles. It produces more robust forecasts where regular patterns exist, but can be less adaptable if unexpected events occur or if the underlying sales behavior changes abruptly.
              <br /><br />
              Prophet stands out for its flexibility and ability to handle a variety of real-world data challenges, including missing values, abrupt trend changes, and multiple seasonalities (for example, weekly, monthly, and holiday effects at the same time). In this analysis, Prophet produced the most accurate forecasts, as shown by its lower error rate, making it well-suited for operational planning and business-critical decisions.
              <br /><br />
              Each model adds value depending on the business question at hand. For day-to-day operations and tactical planning, Prophet provides detailed and reliable insights that help teams optimize inventory and respond quickly to market shifts. SARIMA remains valuable where stable, seasonal patterns drive sales, and Excel is always available for quick checks or when results need to be explained to a broad audience. Using a combination of these models ensures both speed and accuracy, empowering organizations to act confidently on their data.
            </p>
          </section>

          {/* Implementation & Next Steps */}
          <section className={styles.implementationSection}>
            <h2>Implementation & Next Steps</h2>
            <p>
              To operationalize the most effective forecasting approach, I recommend integrating Prophet into existing reporting workflows for weekly or monthly planning, with Excel as a backup for rapid checks. This could be rolled out as an automated dashboard for business managers and planners, updated as new sales data becomes available. Future improvements could involve incorporating promotional calendars, holiday events, and additional sales drivers for even more robust forecasting.
            </p>
          </section>

          {/* Stakeholder Communication */}
          <section className={styles.stakeholderSection}>
            <h2>Stakeholder Communication</h2>
            <p>
              To maximize adoption, I designed outputs tailored to different audiences: interactive dashboards and charts for executives and finance, and simple actionable reports for store managers. I also documented the process in a way that enables both technical and non-technical stakeholders to understand, trust, and act on the forecasts.
            </p>
          </section>

          {/* Lessons Learned / Challenges */}
          <section className={styles.lessonsSection}>
            <h2>Lessons Learned & Challenges</h2>
            <p>
              The biggest challenge was handling irregularities in the sales data and tuning advanced models like SARIMA for stability. I learned that real-world business forecasting isn’t just about finding the “best” model—it’s about aligning analytics with business context, data realities, and clear stakeholder communication.
            </p>
          </section>

          {/* Footer Navigation */}
          <div className={styles.footerNav} style={{ justifyContent: 'flex-end' }}>
            <a href="/#projects" style={{ textDecoration: "none" }}>
              <MagneticButton className={styles.magneticBtn}>Next</MagneticButton>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
