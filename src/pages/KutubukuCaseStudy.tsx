import { useRef, useState } from "react";
import type { Project } from "../data";
import { Arrow } from "../components/Shell";
import "./KutubukuCaseStudy.css";

const imageUrl = (name: string) => `${import.meta.env.BASE_URL}images/kutubuku/${name}`;
const gallery = {
  home: { name: "home-page.jpg", title: "The homepage", alt: "KutuBooku homepage introducing personalised book boxes, how the service works, reading benefits, box contents and FAQs", width: 432, height: 1801 },
  step1: { name: "step-1.jpg", title: "Introduce your reader", alt: "First subscription step collecting the child's name, age and reading preferences, with the benefits of a KutuBooku box", width: 432, height: 493 },
  step2: { name: "step-2.jpg", title: "Choose a reading plan", alt: "Second subscription step showing book-box plan options and their benefits", width: 432, height: 426 },
  step3: { name: "step-3.jpg", title: "Delivery details", alt: "Third subscription step with shipping details and a clear order summary", width: 432, height: 323 },
  purchase: { name: "complete-purchase.jpg", title: "Complete your purchase", alt: "KutuBooku purchase screen with a subscription summary and payment options", width: 432, height: 293 },
  orders: { name: "my-orders.jpg", title: "My orders", alt: "KutuBooku account screen showing current subscriptions and order information", width: 432, height: 322 },
  login: { name: "log-in.jpg", title: "Welcome back", alt: "KutuBooku login screen for returning subscribers", width: 432, height: 270 },
  contact: { name: "contact-page.jpg", title: "Stay in touch", alt: "KutuBooku contact page with an enquiry form, support information and reading imagery", width: 432, height: 615 },
  illustrator: { name: "join-as-illustrator-form.jpg", title: "Join as an illustrator", alt: "KutuBooku enquiry form for illustrators who want to collaborate on children's books", width: 432, height: 260 },
};
type GalleryScreen = typeof gallery.home;

export function KutuBookuCaseStudy({ project, next }: { project: Project; next: Project }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [selected, setSelected] = useState<GalleryScreen>(gallery.home);
  const dialog = useRef<HTMLDialogElement>(null);

  function image(screen: GalleryScreen, eager = false) {
    return <img src={imageUrl(screen.name)} alt={screen.alt} width={screen.width} height={screen.height}
      loading={eager ? "eager" : "lazy"} decoding="async" />;
  }
  function screen(screen: GalleryScreen, className = "") {
    return <figure className={`kutu-figure ${className}`}>
      <button type="button" className="kutu-image-button" aria-label={`Enlarge ${screen.title} design`} aria-haspopup="dialog"
        onClick={() => { setSelected(screen); dialog.current?.showModal(); }}>
        {image(screen)}
      </button>
      <figcaption>{screen.title}</figcaption>
    </figure>;
  }

  return <article className="kutu-editorial">
    <header className="kutu-intro">
      <a className="kutu-back" href="#/projects"><span aria-hidden="true">←</span> All projects</a>
      <h1>KutuBooku</h1>
      <p className="kutu-summary">A warm, parent-friendly website for a personalised book subscription service for children aged 0–8. Making the joy of reading easy to discover, choose and bring home.</p>
      <div className="kutu-intro-bottom">
        <div className="kutu-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <button type="button" className="kutu-about-toggle" aria-expanded={aboutOpen} aria-controls="kutu-about-project"
          onClick={() => setAboutOpen(open => !open)}>
          About the project <span aria-hidden="true">{aboutOpen ? "−" : "+"}</span>
        </button>
      </div>
      <section id="kutu-about-project" className="kutu-about" hidden={!aboutOpen} aria-label="About the project">
        <div>
          <h2>A thoughtful service, a confident family decision.</h2>
          <p>KutuBooku curates book boxes around each child&apos;s pace and interests. Parents need to understand how the boxes work, what they receive and which plan suits their family before subscribing.</p>
          <p>I designed the service story and subscription journey as one connected experience, from the homepage and plan selection to purchase, account access and ongoing orders.</p>
        </div>
        <dl>
          <div><dt>Client</dt><dd>KutuBooku</dd></div>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Timeline</dt><dd>{project.timeline}</dd></div>
          <div><dt>Scope</dt><dd>Website design, subscription flow and account screens</dd></div>
        </dl>
      </section>
    </header>

    <figure className="kutu-figure kutu-hero">
      <button type="button" className="kutu-image-button" aria-label="Enlarge The homepage design" aria-haspopup="dialog"
        onClick={() => { setSelected(gallery.home); dialog.current?.showModal(); }}>
        <div className="kutu-home-window">{image(gallery.home, true)}</div>
      </button>
      <figcaption>The homepage introduces the service through illustration, book boxes and a clear reading journey.</figcaption>
    </figure>

    <section className="kutu-gallery-section" aria-label="Subscription design">
      <div className="kutu-image-pair kutu-onboarding">
        {screen(gallery.step1)}
        {screen(gallery.step2)}
      </div>
      <blockquote>A reading journey that moves from curiosity to a subscription.</blockquote>
      <div className="kutu-image-pair kutu-checkout">
        {screen(gallery.step3)}
        {screen(gallery.purchase)}
      </div>
    </section>

    <section className="kutu-story" aria-labelledby="kutu-story-title">
      <h2 id="kutu-story-title">Playful, reassuring<br /> and easy to scan.</h2>
      <div><p>Friendly illustration and soft colour make the service welcoming. A consistent structure keeps the practical decisions simple: understand the box, choose a plan and complete the purchase.</p>
        <p>Pricing and benefits stay together, while the three-step flow makes the next action clear. The experience continues into account access and order management after the first box.</p>
      </div>
    </section>

    <section className="kutu-gallery-section" aria-label="Account and support design">
      <div className="kutu-image-pair kutu-account">
        {screen(gallery.login)}
        {screen(gallery.orders)}
      </div>
      <blockquote>The relationship continues after the first book box.</blockquote>
      <div className="kutu-image-pair kutu-support">
        {screen(gallery.contact)}
        {screen(gallery.illustrator)}
      </div>
    </section>

    <section className="kutu-project-notes" aria-label="Project details">
      <div><h2>The experience</h2><p>A welcoming introduction, clear subscription choices, and useful account and support screens for an ongoing reading habit.</p></div>
      <dl><div><dt>Client</dt><dd>KutuBooku</dd></div><div><dt>Industry</dt><dd>Education</dd></div><div><dt>Discipline</dt><dd>UX/UI · Website design</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div></dl>
    </section>
    <a className="kutu-next" href={`#/project/${next.slug}`}>
      <span>Next project</span><div><h2>{next.title}</h2><p>{next.summary}</p></div><Arrow />
    </a>

    <dialog ref={dialog} className="kutu-dialog" aria-labelledby="kutu-dialog-title"
      onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="kutu-dialog-bar"><h2 id="kutu-dialog-title">{selected.title}</h2><button type="button" aria-label="Close enlarged design" onClick={() => dialog.current?.close()}>Close ×</button></div>
      {image(selected, true)}
    </dialog>
  </article>;
}
