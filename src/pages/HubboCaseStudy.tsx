import './HubboCaseStudy.css';

function StudyImage({ name, alt, eager = false }: { name: string; alt: string; eager?: boolean }) {
  return <img src={`${import.meta.env.BASE_URL}images/hubbo/case-study/${name}.png`} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />;
}

export function HubboCaseStudy() {
  return (
    <article className="hubbo-pdf">
      <header className="hp-hero">
        <div className="hp-tags"><span>F&amp;B</span><span>Website Design</span></div>
        <h1>Making a complex POS product<br className="hp-desktop-break" /> easier to understand and act on<br className="hp-desktop-break" /> for lead generation</h1>
        <p className="hp-summary">HUBBO POS is an all-in-one point-of-sale platform for F&amp;B businesses across Southeast Asia. I led the redesign of its marketing website to make the product clearer, easier to explore and more conversion-focused.</p>
        <dl className="hp-meta"><div><dt>ROLE</dt><dd>Design Lead &amp; PoC</dd></div><div><dt>Client</dt><dd>HUBBO POS, South-East Asia</dd></div><div><dt>Year</dt><dd>2024</dd></div></dl>
        <StudyImage name="overview" alt="HUBBO POS homepage and product interface presented on a yellow background" eager />
        <aside className="hp-focus"><strong>My focus</strong><p>Help potential customers understand what HUBBO POS does, why it matters to their business, and what they should do next.</p></aside>
      </header>

      <section className="hp-challenge hp-cream">
        <h2>The Challenge</h2><p>The existing website had three major problems.</p>
        <div className="hp-challenge-item"><span>01</span><h3>The product wasn't immediately clear</h3><p>HUBBO POS had multiple capabilities, but the previous website made it difficult for<br className="hp-desktop-break" /> visitors to understand</p>
          <ul className="hp-list"><li>What the product actually does</li><li>Which problems it solves</li><li>Who it is designed for</li><li>Why it is different from other POS platforms</li></ul>
        </div>
        <div className="hp-challenge-item"><span>02</span><h3>The conversion path wasn't clear</h3><p>The website had CTAs, but they weren't always connected to a clear user journey.<br />Visitors could consume information without having an obvious next step.</p></div>
        <div className="hp-challenge-item"><span>03</span><h3>The website needed to support lead<br className="hp-desktop-break" /> generation</h3><p>The website had CTAs, but they weren't always connected to a clear user journey.<br />Visitors could consume information without having an obvious next step.</p></div>
      </section>

      <section className="hp-goal hp-dark"><h2>The Goal</h2><p>Rather than treating the redesign as a visual refresh, I defined the objective around three questions</p>
        <div className="hp-goal-cards"><p>Can a restaurant owner understand the product quickly?</p><p>Can they find the information relevant to their business?</p><p>Can they easily take the next step?</p></div>
        <StudyImage name="the-goal" alt="Three overlapping HUBBO POS website screens explaining the product and its benefits" />
      </section>

      <section className="hp-research"><div className="hp-research-grid"><div><h2>Research &amp; Market Analysis</h2><p>Before designing the interface, I first focused on understanding HUBBO POS from both a product and market perspective. I mapped its core capabilities, key features, user needs, value propositions, existing content, navigation, and conversion points. I then studied Southeast Asian POS products, global restaurant-management platforms, SaaS websites, B2B lead-generation patterns, CTA strategies, pricing structures, and product storytelling to understand how similar products communicate value clearly and drive action.</p></div><StudyImage name="research-market-analysis" alt="" /></div>
        <aside className="hp-callout">How are successful products making a complex software offering easier to understand and easier to act on?</aside>
      </section>

      <section className="hp-media hp-cream"><h2>User Persona</h2><StudyImage name="user-persona" alt="Restaurant owner personas: Merlin Chu, Raahim Nor, and Biliena Ji Xu, with their business needs" /></section>
      <section className="hp-media hp-ia"><h2>Information Architecture</h2><StudyImage name="information-architecture" alt="HUBBO POS sitemap mapping required pages, templates, navigation and page content" /></section>

      <section className="hp-campaign"><div><h2>Campaign Page as a Strategic MVP</h2><p>Due to time constraints, we proposed a campaign page.</p><aside><strong>Launching the first conversion touchpoint before the full redesign</strong><p>The complete website redesign required more time, but the business needed a stronger digital presence immediately.</p><p>Instead of waiting for the entire website to be completed, we proposed creating a campaign page that could function as an initial lead-generation touchpoint.</p></aside></div><StudyImage name="campaign-page-as-a-strategic-mvp" alt="Campaign page combining a demo form, product information and supporting proof" /></section>

      <section className="hp-media hp-cream"><h2>Wireframe</h2><StudyImage name="wireframe" alt="Greyscale HUBBO POS website wireframes showing page structure and content hierarchy" /></section>
      <section className="hp-media hp-dark"><h2>Visual Design</h2><StudyImage name="visual-design" alt="Final HUBBO POS website pages with yellow branding, product imagery and conversion forms" /></section>
      <section className="hp-media hp-cream hp-responsive"><h2>One clear product story, adapted<br className="hp-desktop-break" /> to every decision context</h2><p>The system was designed across desktop, tablet and mobile from the start. Content order, hierarchy and the lead path stay coherent as the space changes.</p><StudyImage name="one-clear-product-story-adapted-to-every-decision-context" alt="HUBBO POS layouts at two desktop widths, tablet and mobile" /></section>
      <section className="hp-media"><h2>Design System &amp; Reusable Components</h2><StudyImage name="design-system-reusable-components" alt="HUBBO POS component library, typography, colour tokens and reusable interface elements" /></section>

      <section className="hp-handoff hp-cream"><h2>From design to implementation we prepared</h2><ul className="hp-list"><li>Responsive specifications</li><li>Spacing and layout guidance</li><li>Component states</li><li>Asset specifications</li><li>Interaction behaviour</li><li>Page-level documentation</li></ul><p>The goal was to reduce ambiguity during implementation and maintain consistency between the approved designs and the final website.</p></section>
      <section className="hp-media hp-qa"><h2>Quality doesn't stop at handoff</h2><p>During deployment, created a Design Quality Assurance document and reviewed the implementation against the approved designs.</p><StudyImage name="quality-doesnt-stop-at-handoff" alt="Design QA document with annotated implementation reviews for desktop and mobile" /></section>
      <section className="hp-closing hp-dark"><p>The redesign shifted HUBBO POS from a feature-heavy website toward a clearer product story, helping visitors understand the platform, evaluate its relevance and take the next step with less friction.</p></section>
    </article>
  );
}
