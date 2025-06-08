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
               Comparing all three models shows how forecasting really works in business. Excel forecasting is the fastest way to get a sales estimate and is great when someone just needs a number or wants to see a clear result without technical details. SARIMA works best when sales follow regular cycles, like weekly or yearly patterns, so it does well when things are predictable but is less flexible when sales suddenly change. Prophet is different because it can handle the messy reality of business data, like missing numbers, sudden changes in trends, and different seasonal effects at the same time. In this project, Prophet gave the most accurate results and was the most reliable choice for planning and big decisions.
               <br /><br />
               The value of each model depends on what the business needs. For day-to-day planning and keeping up with changes in demand, Prophet’s forecasts help teams manage inventory and avoid missing sales. SARIMA is still useful when things follow a regular pattern, and Excel is always handy when people want a quick answer or when you have to explain something to someone who is not technical. When I show these results to business people, I always focus on what really matters, like how just a 1% improvement in forecast accuracy could help a retailer with $10 million in sales save up to $100,000 a year by cutting down on extra inventory and lost sales. I keep the language and visuals simple so anyone can see the value.
               <br /><br />
               In a real business, it is also important to keep track of how well the forecasts are working. This means checking the forecasts against what actually happens, looking for big differences, and updating the models when business patterns or outside factors change. Keeping an eye on things makes sure the forecasts keep working and really help the business.
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
