import "./AIUXCaseStudy.css";

const imageUrl = (name: string) =>
  `${import.meta.env.BASE_URL}images/ai-ux-workflow/${name}.png`;

function CaseImage({ name, alt, eager = false }: { name: string; alt: string; eager?: boolean }) {
  return (
    <img
      src={imageUrl(name)}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

const ratingSteps = [
  ["Orient", "Establish the agency and reporting context."],
  ["Explain the signal", "Present the headline star rating with a plain-language performance message."],
  ["Show what is behind it", "Separate overall and quality ratings from a visual performance trend and measure-level signals."],
  ["Support comparison", "Use quarterly and care-performance views so the rating can be interpreted rather than simply observed."],
];

const reviewSteps = [
  ["Understand the work item", "Retain agency/work context, current status, and essential identifiers at the top of the workspace."],
  ["Choose the review lens", "Use distinct Coding, OASIS, and POC views so the reviewer knows which part of the work they are assessing."],
  ["Record the recommendation", "Keep coding recommendations structured and editable rather than burying them in unstructured notes."],
  ["Explain the rationale", "Provide dedicated space for comments, diagnoses, notes, and disclaimers."],
  ["Make the next state visible", "Use clear review/QA status treatment so ownership and progress are understandable."],
];

const workflowSteps = [
  ["Build context", "I combined the PRD, existing flows, and expert conversations into a working understanding of the task. I used AI to summarise notes, expose unanswered questions, and generate early structures to challenge with domain experts."],
  ["Explore before committing", "For the Star Rating feature, I used a Claude MCP-enabled workflow to explore and critique different visual directions. For the Review Form, I used Codex to generate several low-fidelity wireframe directions quickly. The purpose was breadth: more ways to discuss information hierarchy and workflow logic before committing to a polished screen."],
  ["Keep human review at the centre", "I selected, combined, and refined directions based on product constraints and feedback. Medical coders and team leads remained the source of truth for specialised terms, review behaviour, and edge cases. AI was a comprehension and exploration aid—not a decision-maker for medical codes."],
  ["Make approved ideas tangible", "After a direction was agreed, I used AI to accelerate interaction exploration and make the concepts feel more real. This helped reveal questions earlier than a static happy-path screen."],
  ["Improve handoff and design QA", "For handoff, I used AI to help turn approved decisions into clearer implementation context: intended states, hierarchy, interactions, and exceptions. After development, I used it to accelerate visual and state-mismatch triage between the design and the built feature."],
];

export function AIUXCaseStudy() {
  return (
    <article className="aiw-case-study">
      <header className="aiw-hero aiw-shell">
        <div className="aiw-tags"><span>Health Care</span><span>AI</span><span>Product</span></div>
        <h1>Making complex medical-coding<br className="aiw-desktop-break" /> work easier to review by implimenting<br className="aiw-desktop-break" /> AI UX Design workflow</h1>
        <div className="aiw-focus"><strong>My focus</strong><p>Designing clearer quality signals and review workflows for Clinix</p></div>

        <dl className="aiw-meta">
          <div><dt>Product</dt><dd>Clinix, an established medical-coding platform</dd></div>
          <div><dt>Role</dt><dd>Product Designer</dd></div>
          <div><dt>Scope</dt><dd>Agency Star Rating and Review Form features</dd></div>
          <div><dt>Product context</dt><dd>A feature-level modernization within an existing admin experience, not a full product redesign</dd></div>
          <div><dt>Key inputs</dt><dd>PRD, conversations with medical coders and team leads, existing product flows</dd></div>
          <div><dt>Workflow tools</dt><dd>Figma, Claude MCP, Codex, and AI-assisted design QA</dd></div>
        </dl>
        <CaseImage name="hero" alt="A medical caregiver reading with an older patient in a bright home setting" eager />
      </header>

      <section className="aiw-brief aiw-shell">
        <div className="aiw-reading-column">
          <h2>The Brief &amp; Design Challenge</h2>
          <p>When I joined Cliniqon, Clinix was already an established operational product with familiar workflows, but its visual language and component patterns felt dated. I was asked to design two new features within this existing environment: a Client Star Rating experience for understanding agency-quality performance, and a Review Form for medical-coding work that was previously managed across photos, spreadsheets, documents, and Teams conversations.</p>
          <p>Because medical coding is specialised, evidence-heavy, and high-stakes, and I came to the project without a medical-coding background, I first had to understand how users actually worked rather than make assumptions.</p>
        </div>

        <div className="aiw-feature-row">
          <div><span>01</span><h3>Client Star Rating</h3><p>The Star Rating needed to act as a decision-support dashboard, helping agencies understand their CMS Home Health Star Rating, supporting quality measures, and performance trends.</p></div>
          <CaseImage name="client-star-rating" alt="Illustration of five people holding large rating stars" />
        </div>
        <div className="aiw-feature-row">
          <div><span>02</span><h3>Review Form</h3><p>The Review Form needed to become an evidence-to-decision workspace, bringing work-item context, supporting information, recommendations, rationale, and next steps into a more structured flow.</p></div>
          <CaseImage name="review-form" alt="Illustration of a reviewer working with records at a computer" />
        </div>
        <aside className="aiw-inline-callout">The challenge was not simply to make Clinix look more modern. It was to introduce clearer, more contemporary interaction patterns without disrupting an expert workflow or pretending that two new features could solve every legacy-product problem.</aside>
      </section>

      <section className="aiw-domain aiw-shell">
        <div className="aiw-reading-column">
          <h2>Understanding an unfamiliar domain<br className="aiw-desktop-break" /> before designing</h2>
          <p>I started with the PRD and conversations with medical coders and team leads. I mapped what information reviewers need before they can act, the language they use, where the workflow can branch, and which details should remain visible as they make a decision.</p>
          <p>AI helped me make that learning loop faster, but it was not the source of truth. I used it to organise notes, surface questions, and create alternative wireframes. Domain experts validated terminology, review logic, and exceptions.</p>
          <aside className="aiw-principle"><strong>Principle</strong><p>AI could help me understand and explore; people doing the work decided whether an idea was valid.</p></aside>
        </div>
      </section>

      <section className="aiw-deep-dive">
        <div className="aiw-shell">
          <div className="aiw-intro-grid">
            <div><h2>Client Star Rating</h2><p>The Client Star Rating work is best described in the portfolio as an agency-quality reporting experience. The final Figma design is headed Home Health Star Rating and pairs the overall rating with quality-performance context, trends, and comparison views.</p></div>
            <CaseImage name="client-star-rating-detail" alt="Overall Agency Rating dashboard with a circular 100 percent quality chart and quarterly comparison" />
          </div>

          <div className="aiw-analysis-block">
            <h3>The problem</h3><p>A star value on its own says very little. A user needs to know what it represents, whether it changed, what contributes to it, and where to look next.</p>
          </div>
          <div className="aiw-analysis-block">
            <h3>The design phase</h3><p>I organised the experience from summary to explanation:</p>
            <div className="aiw-step-grid aiw-step-grid-four">{ratingSteps.map(([title, body]) => <article key={title}><strong>{title}</strong><p>{body}</p></article>)}</div>
            <p>The design uses stars as a recognisable quality signal, but does not rely on stars alone. Supporting labels, values, time periods, and visual comparisons carry the meaning.</p>
          </div>
          <div className="aiw-analysis-block"><h3>Why this mattered</h3><p>The dashboard had to be scan-friendly without flattening the detail that an operational user may need. The solution made the hierarchy explicit:</p><p className="aiw-sequence">what is my rating? → what changed? → which measures explain it? → what should I investigate?</p></div>
          <div className="aiw-analysis-block"><h3>What to show in the portfolio</h3><ul><li>A redacted full dashboard crop</li><li>A close-up of the headline rating, quality-rating cards, and agency-performance trend</li><li>A small annotated callout showing the journey from overall rating to contributing measures</li><li>One image of the visual exploration board, which includes half-star through five-star states. It demonstrates divergent exploration without claiming that AI produced the final design.</li></ul></div>

          <div className="aiw-intro-grid aiw-review-intro">
            <div><h2>Review Form</h2><p>Before this work, a reviewer could need to move between photos, spreadsheets, documents, and Teams messages to reconstruct the context for a review. That context switching made a complex task harder to understand, harder to audit, and slower to communicate.</p></div>
            <CaseImage name="review-form-detail" alt="In-depth Coding OASIS and POC review form with agency, patient, visit and insurance details" />
          </div>
          <aside className="aiw-problem-callout"><strong>The problem statement</strong><p>Reviewers had to rebuild the context of a medical-coding case across disconnected sources before they could make or communicate a review decision.</p></aside>
          <div className="aiw-analysis-block"><h3>The design phase</h3><p>Rather than treat the experience as one long form, I structured it around the reviewer&apos;s decision-making sequence:</p><div className="aiw-step-grid aiw-step-grid-review">{reviewSteps.map(([title, body]) => <article key={title}><strong>{title}</strong><p>{body}</p></article>)}</div></div>
          <div className="aiw-analysis-block"><h3>Why this mattered</h3><p>The goal was not to remove necessary medical-coding detail. It was to put the detail in a predictable order and keep the reviewer&apos;s task visible:</p><p className="aiw-sequence">understand → assess → recommend → explain → progress</p></div>
        </div>
      </section>

      <section className="aiw-legacy aiw-shell"><div className="aiw-reading-column"><h2>Designing inside a legacy product</h2><p>I treated the existing product as a real constraint, not a blank canvas. Experienced users need continuity, and engineering needs a design that can be implemented within the product&apos;s actual boundaries.</p><p>Instead of blindly extending older components, I introduced a more deliberate hierarchy, consistent grouping, clearer states, and reusable patterns where the feature warranted them. The scope remained intentionally bounded: these features modernised two important workflows without claiming to redesign all of Clinix.</p></div></section>

      <section className="aiw-workflow aiw-shell">
        <h2>My AI-assisted workflow</h2><p>AI reduced repetitive work; it did not replace product judgment.</p>
        <div className="aiw-workflow-grid">{workflowSteps.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        <p className="aiw-workflow-note">The final review remained human-led. AI could flag a spacing, component, state, or content discrepancy; I still assessed whether the implementation preserved the intended experience.</p>
      </section>

      <section className="aiw-outcome aiw-shell"><h2>Outcome</h2><p>I did not retain formal before-and-after product metrics, so I present the impact qualitatively.</p><ul><li>I explored more viable directions before committing to a design.</li><li>I was able to turn an unfamiliar, dense workflow into an explicit information hierarchy for expert review.</li><li>The design created a clearer way to read agency-quality ratings and navigate from a headline signal to the detail behind it.</li><li>The Review Form provided a more structured workspace for recommendations, rationale, and QA progression.</li><li>AI accelerated repetitive exploration, interaction specification, and QA comparison work, leaving more time for domain understanding and design judgment.</li></ul></section>

      <section className="aiw-closing"><p>I would not claim a “10× improvement” without a recorded<br className="aiw-closing-break" /> baseline. The credible outcome is that the workflow<br className="aiw-closing-break" /> <strong>accelerated iteration and reduced repetitive QA effort.</strong></p></section>
    </article>
  );
}
