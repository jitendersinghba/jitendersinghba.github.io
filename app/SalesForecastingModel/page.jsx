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

          {/* Project Overview */}
          <div className={styles.summarySection}>
            <p>
              This project examines three widely used forecasting models, Excel Forecasting, SARIMA, and Prophet. I applied them to Walmart's weekly sales data (from a Kaggle demo dataset). Each model was selected for its distinct approach to forecasting. Excel for its accessibility and simplicity, SARIMA for capturing seasonality and trends, and Prophet for its flexibility and ability to handle real-world business complexities.<br />
              By comparing these models side by side, the analysis highlights how different forecasting techniques can meet a range of business needs, from rapid scenario checks to long-term, data-driven planning. The findings not only illustrate each model's unique strengths and limitations, but also underscore the value of aligning analytics solutions with the specific goals and challenges of the organization.<br />
              Ultimately, this project aims to help business leaders and analysts make more informed choices about which forecasting approach best supports strategic decision-making and operational effectiveness.
            </p>
          </div>

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
                  <td>Most accurate, robust</td>
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
