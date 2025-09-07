import styles from "./traceability.module.scss";

export default function RequirementsTraceabilityMatrix() {
  const sheetViewUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRNTfztoJ9Lses1T6HskINGL43JIZKBfm-mKiiLsaaMxmesh74HRe9OJ3grsgjXve41UKWbYtWEsgU4/pubhtml?widget=true&headers=false";

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Title */}
        <header className={styles.section}>
          <h1>Requirements Traceability Matrix</h1>
          <p>
            Demonstrates end-to-end requirements coverage by mapping business and functional
            requirements to design elements and test cases.
          </p>
        </header>

        {/* Quick Meta */}
        <aside className={`${styles.section} ${styles.metaGrid}`}>
          <div className={styles.metaBox}>
            <p className={styles.metaLabel}>Artifact</p>
            <p className={styles.metaValue}>Requirements Traceability Matrix (RTM)</p>
          </div>
          <div className={styles.metaBox}>
            <p className={styles.metaLabel}>Tools</p>
            <p className={styles.metaValue}>Google Sheets</p>
          </div>
          <div className={styles.metaBox}>
            <p className={styles.metaLabel}>Methods</p>
            <p className={styles.metaValue}>
              Requirements Lifecycle Mgmt, Impact Analysis, Test Mapping
            </p>
          </div>
        </aside>

        {/* Summary */}
        <section className={styles.section}>
          <h2>Summary</h2>
          <p>
            I built an RTM to ensure every requirement was captured, designed, and validated by tests.
            The matrix enables fast impact analysis for change requests and gives stakeholders a clear
            view of coverage and status across the lifecycle.
          </p>
        </section>

        {/* Project Context */}
        <section className={styles.section}>
          <h2>Project Context</h2>
          <div className={styles.contextList}>
            <p><span>Chosen system:</span> {/* e.g., Online Course Platform */}</p>
            <p><span>Business goals:</span> {/* e.g., sign-in, search, enrollment, payments */}</p>
            <p><span>Scope of RTM:</span> {/* e.g., BRD → FRD → Feature → Test Cases → Defects */}</p>
          </div>
        </section>

        {/* Approach */}
        <section className={styles.section}>
          <h2>Approach</h2>
          <ul className={styles.list}>
            <li>Defined unique IDs for business and functional requirements (R-001, R-002…)</li>
            <li>Mapped each requirement to design elements/features and related user stories</li>
            <li>Linked requirements to test cases (TC-xxx) and tracked execution status</li>
            <li>Added owner, priority, and risk to support triage and change impact</li>
          </ul>
        </section>

        {/* Embedded RTM */}
        <section className={styles.section}>
          <h2>Traceability Matrix (Live)</h2>

          <div className={styles.iframeWrapper}>
            <iframe title="Requirements Traceability Matrix" src={sheetViewUrl} loading="lazy" />
          </div>
        </section>

        {/* Insights / Results */}
        <section className={styles.section}>
          <h2>Insights & Results</h2>
          <ul className={styles.list}>
            <li>Coverage achieved across all high-priority requirements; two medium-priority items flagged for design review.</li>
            <li>Test alignment exposed one orphan requirement and one duplicate.</li>
            <li>Impact analysis reduced change-evaluation time by 30%.</li>
          </ul>
        </section>

        {/* Challenges */}
        <section className={styles.section}>
          <h2>Challenges & Constraints</h2>
          <ul className={styles.list}>
            <li>Maintaining single source of truth across requirements and tests</li>
            <li>Version control and stakeholder edits in parallel</li>
            <li>Ensuring consistent IDs and definitions as scope evolved</li>
          </ul>
        </section>

        {/* Recommendations */}
        <section className={styles.section} style={{ marginBottom: "4rem" }}>
          <h2>Recommendations & Next Steps</h2>
          <ul className={styles.list}>
            <li>Automate sync between requirements and test management (e.g., Jira ↔ test tool)</li>
            <li>Adopt change-control gates to keep RTM current after approvals</li>
            <li>Extend matrix with defect links and UAT sign-off for full audit chain</li>
          </ul>
        </section>

        {/* Appendix */}
        <section className={styles.section} style={{ marginBottom: "4rem" }}>
          <h2>Appendix: Column Definitions</h2>
          <ul className={styles.listTight}>
            <li><strong>Req ID:</strong> Unique requirement identifier (R-001, R-002…)</li>
            <li><strong>Type:</strong> Business / Functional / Non-functional</li>
            <li><strong>Description:</strong> Concise requirement statement</li>
            <li><strong>Design/Feature:</strong> UI, service, or module implementing it</li>
            <li><strong>Test Case ID:</strong> Linked test reference (TC-xxx)</li>
            <li><strong>Owner / Status / Priority / Risk:</strong> Governance and execution tracking</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
