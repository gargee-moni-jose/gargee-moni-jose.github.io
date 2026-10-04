import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import "./SaarCaseStudy.css";

const asset = (name: string) => `${import.meta.env.BASE_URL}images/saar/${name}`;

function StudyImage({ name, alt, width, height, eager = false }: {
  name: string; alt: string; width: number; height: number; eager?: boolean;
}) {
  return <img src={asset(name)} alt={alt} width={width} height={height}
    loading={eager ? "eager" : "lazy"} decoding="async" />;
}

const ideaSteps = [
  { icon: "detect", title: "Detect", body: "Automatically capture transactions from connected bank accounts" },
  { icon: "organize", title: "Organize", body: "Identify merchants and categorize spending" },
  { icon: "understand", title: "Understand", body: "Find patterns and explain why spending changed" },
  { icon: "act", title: "Act", body: "Correct data, ask questions and work toward financial goals" },
];

const mvpFeatures = [
  { icon: "transactions", title: "Automatic transactions", body: "Detect financial activity from connected bank accounts" },
  { icon: "categorization", title: "Smart categorization", body: "Organize transactions by merchant and category" },
  { icon: "overview-icon", title: "Financial overview", body: "Understand income, spending and category breakdowns" },
  { icon: "insights", title: "Explainable insights", body: "See what changed, why it changed and the transactions behind it" },
  { icon: "assistant", title: "Financial assistant", body: "Ask questions directly about your own financial activity" },
  { icon: "goals", title: "Goals", body: "Create and track savings goals" },
];

const screens = [
  { name: "home.jpg", label: "Financial overview", alt: "Saar dashboard with available income, spending categories, recent transactions and an explainable spending insight" },
  { name: "assistant-screen.jpg", label: "Financial assistant", alt: "Ask Saar assistant alongside the dashboard, answering questions about personal financial activity" },
  { name: "insights-screen.jpg", label: "Explainable insights", alt: "Saar insights explaining a ₹6,420 increase in monthly spending with supporting category breakdowns" },
  { name: "goals-screen.jpg", label: "Savings goals", alt: "Saar savings goals showing progress toward a Goa trip and emergency fund" },
  { name: "privacy-screen.jpg", label: "Data & privacy", alt: "Saar privacy controls, connected accounts, data overview and data export options" },
  { name: "transactions-screen.jpg", label: "Transactions", alt: "Saar searchable transaction history with merchant, category, account, amount and status columns" },
];

function FeatureSteps({ items, className }: { items: typeof ideaSteps; className: string }) {
  return <ol className={className} style={{ "--saar-flow-arrow": `url("${asset("flow-arrow.png")}")` } as CSSProperties}>
    {items.map((item) => <li key={item.title}>
      <StudyImage name={`${item.icon}.png`} alt="" width={272} height={272} />
      <h3>{item.title}</h3><p>{item.body}</p>
    </li>)}
  </ol>;
}

export function SaarCaseStudy() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(screens[0]);

  return <article className="saar-case-study" aria-label="Saar product case study">
    <header className="saar-hero">
      <div className="saar-tags">
        {["Personal Project", "Product Strategy", "UX/UI", "AI-assisted Build"].map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <h1>Saar</h1>
      <p className="saar-summary">A personal financial intelligence product that automatically detects bank transactions, organizes spending, and turns financial activity into clear, explainable insights.</p>
      <StudyImage name="overview.jpg" alt={screens[0].alt} width={2592} height={1938} eager />
    </header>

    <section className="saar-problem" aria-labelledby="saar-problem-title">
      <h2 className="saar-label" id="saar-problem-title">The problem</h2>
      <div className="saar-problem-grid">
        <div>
          <h3 className="saar-headline">People don&apos;t want to track<br className="saar-desktop-break" /> every expense manually</h3>
          <div className="saar-problem-callout"><ul>
            <li>Bank transactions happen continuously across UPI, cards, transfers and recurring payments.</li>
            <li>The challenge isn&apos;t recording them.</li>
            <li>It&apos;s understanding what all those transactions mean.</li>
          </ul></div>
        </div>
        <StudyImage name="payment-methods.jpg" alt="Payment methods including cards, digital wallets, bank transfers and online payment services" width={1281} height={641} />
      </div>
    </section>

    <section className="saar-idea" aria-labelledby="saar-idea-title">
      <h2 className="saar-label" id="saar-idea-title">The idea</h2>
      <p className="saar-headline">From transactions to<br className="saar-desktop-break" /> understanding</p>
      <FeatureSteps items={ideaSteps} className="saar-idea-steps" />
    </section>

    <section className="saar-mvp" aria-labelledby="saar-mvp-title">
      <h2 className="saar-label" id="saar-mvp-title">MVP</h2>
      <p className="saar-mvp-intro">I focused the first version on one job:</p>
      <p className="saar-headline">Help users understand their spending<br className="saar-desktop-break" /> without manually tracking it</p>
      <FeatureSteps items={mvpFeatures} className="saar-mvp-features" />
      <aside className="saar-not-yet">
        <h3>Not yet</h3>
        <p>Forecasting · Financial Health Score · Personal Spendable · What-if simulations</p>
        <p>I deliberately kept predictive features outside the MVP until the core transaction-understanding experience was established.</p>
      </aside>
      <div className="saar-wireframes">
        <StudyImage name="wireframes-mobile.jpg" alt="Saar mobile wireframes covering onboarding, bank connection, dashboard, transactions, insights, assistant, goals, privacy and settings" width={1280} height={1169} />
        <StudyImage name="wireframes-desktop.jpg" alt="Saar desktop wireframes covering onboarding, bank connection and import, financial overview, transaction editing, insights, assistant, goals and settings" width={1281} height={854} />
      </div>
    </section>

    <section className="saar-decisions" aria-labelledby="saar-decisions-title">
      <h2 className="saar-headline" id="saar-decisions-title">Key product decisions</h2>
      <div className="saar-decision-grid">
        <section className="saar-decision">
          <span className="saar-number" aria-hidden="true">01</span>
          <h3>Automatic first</h3>
          <p>I didn&apos;t want Saar to depend on<br className="saar-desktop-break" /> users manually logging every<br className="saar-desktop-break" /> purchase</p>
          <StudyImage name="automatic-flow.jpg" alt="Bank transaction → automatic detection → categorization → financial overview" width={840} height={296} />
          <p>Manual entry remains available for<br className="saar-desktop-break" /> exceptions rather than becoming<br className="saar-desktop-break" /> the core workflow.</p>
        </section>
        <section className="saar-decision">
          <span className="saar-number" aria-hidden="true">02</span>
          <h3>Explain the number</h3>
          <p>The goal is to move from data → meaning.</p>
          <StudyImage name="explainable-insight.jpg" alt="Food & Dining: ₹8,240, up 31% from usual spending. Most of the increase came from food delivery." width={744} height={514} />
        </section>
        <section className="saar-decision">
          <span className="saar-number" aria-hidden="true">03</span>
          <h3>Make financial AI traceable</h3>
          <p>Users can inspect the financial activity behind an insight.</p>
          <StudyImage name="traceable-ai.jpg" alt="Fact: what happened. Calculation: what the data shows. Inference: what it may mean. Evidence: which transactions support it." width={716} height={636} />
        </section>
        <section className="saar-decision">
          <span className="saar-number" aria-hidden="true">04</span>
          <h3>Let users<br className="saar-desktop-break" /> correct the<br className="saar-desktop-break" /> system</h3>
          <p>This gives users control while allowing the system to improve over time.</p>
          <StudyImage name="correct-category.jpg" alt="Correct the category of an Amazon transaction by selecting Shopping, Electronics, Bills & Utilities or Others" width={646} height={614} />
        </section>
      </div>
    </section>

    <section className="saar-product" aria-labelledby="saar-product-title">
      <h2 className="saar-headline" id="saar-product-title">The product</h2>
      <div className="saar-product-gallery">
        <StudyImage name="product-gallery.jpg" alt="Six final Saar screens: dashboard, financial assistant, insights, goals, privacy and transactions" width={2592} height={1080} />
        <div className="saar-gallery-links">
          {screens.map(screen => <button key={screen.name} type="button"
            aria-label={`Enlarge ${screen.label} screen`} aria-haspopup="dialog"
            onClick={() => { setSelected(screen); dialog.current?.showModal(); }}>
            <img src={asset(screen.name)} alt={screen.alt} width={3456} height={2168} loading="lazy" decoding="async" />
            <span className="saar-screen-label">{screen.label} ↗</span>
          </button>)}
        </div>
      </div>
    </section>

    <dialog ref={dialog} className="saar-screen-dialog" aria-labelledby="saar-screen-title"
      onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="saar-dialog-bar"><h2 id="saar-screen-title">{selected.label}</h2>
        <button type="button" aria-label="Close enlarged screen" onClick={() => dialog.current?.close()}>Close <span aria-hidden="true">×</span></button>
      </div>
      <img src={asset(selected.name)} alt={selected.alt} width={3456} height={2168} />
    </dialog>
  </article>;
}
