import styles from './salesforecasting.module.scss';
import MagneticButton from '../components/MagneticButton';
import FloatingNav from '../components/FloatingNav';

export default function SalesForecasting() {
  return (
    <>
      {/* Floating navigation always visible */}
      <FloatingNav alwaysVisible={true} />

      <section className={styles.salesForecastingPage}>
        <div className={styles.narrowContent}>

          {/* ================= HERO & EXECUTIVE SUMMARY ================= */}
          <header className={styles.hero}>
            <h1>
              Sales Forecasting Models<br />
              Excel, SARIMA, and Prophet
            </h1>
            <p className={styles.subtitle}>
              Smarter inventory, fewer lost sales, and greater agility in planning
            </p>
          </header>

          <section className={styles.execSummarySection}>
            <h2>Executive Summary</h2>
            <p>
              This project was driven by a simple curiosity of how close can I get to perfect sales predictions, regardless of the tools and techniques used? In a retail world where every company develops its own tailored forecasting systems, often using proprietary data and complex models, I wanted to put widely accessible, generic approaches to the test.
              <br /><br />
              Using a demo Walmart sales data, I compared three common forecasting methods, Excel, SARIMA, and Prophet, each representing a different level of sophistication and accessibility in the industry. While some companies invest in custom-built, highly specialized solutions, most still rely on off-the-shelf or open-source tools, aiming for the best possible accuracy with reasonable effort.
              <br /><br />
              My goal was clear: predict sales as accurately as possible using demo data, benchmark their performance, and cut through the noise about which approach actually delivers. While it's true that more advanced, niche models exist, the reality is that most organizations weigh effort against accuracy, and in practice, everyone is looking for the sweet spot. This project not only measures what's possible with common forecasting tools but also clarifies when and why you might push for something more advanced.
            </p>
          </section>

          {/* ================= BUSINESS PROBLEM & CONTEXT ================= */}
          <section className={styles.contextSection}>
            <h2>Business Problem & Context</h2>
            <p>
              Accurately forecasting sales is one of retail's biggest challenges. There is always an element of uncertainty, and even the best tools can miss the mark. For this project, I set out to explore which forecasting method could get the closest to reality, using publicly available Walmart sales data from Kaggle.
              <br /><br />
              The aim was to move beyond theory and put three widely used approaches - Excel, SARIMA, and Prophet to the test on real-world retail data. By comparing these models side by side, I wanted to see not only which performs best on paper, but also which can actually be trusted to guide decision-making in the unpredictable, fast-paced world of retail. This hands-on analysis offers practical insights for anyone facing similar forecasting challenges, whether in retail or any industry where accurate demand prediction matters.
            </p>
          </section>

          {/* ================= DATA UNDERSTANDING & PREPARATION ================= */}
          <section className={styles.dataSection}>
            <h2>Data Understanding & Preparation</h2>
            <p>
              The dataset I used for this analysis is a publicly available Walmart sales dataset from Kaggle, which covers multiple years and a wide range of stores. To ensure a fair comparison between forecasting models, I began by addressing data quality issues commonly encountered in real business settings. This included handling missing values, filtering out extreme outliers such as sudden zero-sales weeks, and aligning time periods across stores. Where small gaps appeared, I applied straightforward business logic, such as carrying forward the last known sales value, to keep the dataset as realistic as possible. The goal was to prepare the data in a way that reflects the kinds of decisions and challenges a business would actually face when forecasting sales in production.
            </p>
          </section>

          {/* ================= WHY FORECASTING MATTERS ================= */}
          <section className={styles.dataSection}>
            <h2>Why Forecasting Matters</h2>
            <p>
              Even a small improvement in forecast accuracy can translate into millions saved by reducing excess inventory and minimizing lost sales. Effective sales forecasting allows businesses to spot emerging trends, prepare for shifts in demand, and make confident, informed decisions at every level. Accurate forecasts don't just improve the bottom line, they also help teams avoid last-minute surprises, keep customers satisfied by meeting demand, and make day-to-day planning smoother and less stressful. When forecasting is reliable and easy to interpret, everyone from warehouse staff to senior management can plan ahead with greater confidence and peace of mind.
            </p>
          </section>

          {/* ================= MODEL APPROACHES ================= */}
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

          {/* ================= ACTUAL SALES COMPARISON ================= */}
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
                <div className={styles.caption}>Prophet Actual Sales Model</div>
              </div>
            </div>
          </section>

          {/* ================= VISUALS: SALES FORECAST GRAPHS ================= */}
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

          {/* ================= FORECASTED SALES TABLES ================= */}
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

          {/* ================= MODEL PERFORMANCE RESULTS ================= */}
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

          {/* ================= ANALYSIS & BUSINESS RELEVANCE ================= */}
          <section className={styles.analysisSection}>
            <h2>Analysis & Business Relevance</h2>
            <p>
               Comparing all three models provides a practical view of how forecasting works in real business scenarios. Excel forecasting offers the quickest way to estimate future sales; it’s perfect when you want quick numbers or need to explain the forecast to someone who doesn’t care about the math, just results. SARIMA, on the other hand, is designed for time series with strong seasonality and repeating trends, such as weekly or yearly retail cycles. It produces more robust forecasts where regular patterns exist, but can be less adaptable if unexpected events occur or if the underlying sales behavior changes abruptly. Prophet stands out for its flexibility and ability to handle a variety of real-world data challenges, including missing values, abrupt trend changes, and multiple seasonalities (for example, weekly, monthly, and holiday effects at the same time). In this analysis, Prophet produced the most accurate forecasts, as shown by its lower error rate, making it well-suited for operational planning and business-critical decisions.
               <br /><br />
               Each model adds value depending on the business question at hand. For day-to-day operations and tactical planning, Prophet provides detailed and reliable insights that help teams optimize inventory and respond quickly to market shifts. SARIMA remains valuable where stable, seasonal patterns drive sales, and Excel is always available for quick checks or when results need to be explained to a broad audience. Using a combination of these models ensures both speed and accuracy, empowering organizations to act confidently on their data. When communicating these findings to business stakeholders, I focus on what matters most: the impact on inventory, sales, and operational confidence. For example, even a 1% improvement in forecast accuracy could save a retailer with $10 million in annual sales up to $100,000 each year, simply by reducing excess stock and missed sales opportunities. I use clear visuals and straightforward language to bridge the gap between analytics and business value. In a real-world setting, model performance must be monitored continuously. This means regularly comparing forecasted sales to actual results, flagging significant deviations, and retraining or adjusting models as new sales patterns or business drivers emerge. Ongoing monitoring ensures that forecasting stays accurate, actionable, and fully aligned with changing business needs.
               </p>
               
            </section>

          {/* ================= IMPLEMENTATION & NEXT STEPS ================= */}
          <section className={styles.implementationSection}>
            <h2>Recommendations & Implementation</h2>
            <p>
              Based on the results of this analysis, I recommend using Prophet as the primary forecasting tool for regular sales planning, given its flexibility and accuracy in handling real-world business data. Integrating Prophet into existing planning workflows, whether for weekly, monthly, or seasonal forecasts can help improve inventory management and overall decision-making. Excel can still be valuable for quick checks or communicating straightforward results, while SARIMA remains a good option where sales patterns are highly regular and seasonal. For even more robust forecasting, future improvements could include incorporating additional variables such as promotional calendars, holiday effects, and other business drivers as data becomes available. Regularly reviewing and updating the forecasting process will help ensure continued accuracy as business needs and market conditions evolve.
            </p>
          </section>

          {/* ================= FOOTER NAVIGATION ================= */}
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
