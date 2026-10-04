import { BottomBar, Nav, useHashRoute, useReveal } from "./components/Shell";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";
import { ProjectDetail } from "./pages/ProjectDetail";
import { PasswordGate } from "./components/PasswordGate";

function View({ route }: { route: string }) {
  if (route.startsWith("/project/")) {
    const slug = route.replace("/project/", "");
    const project = <ProjectDetail slug={slug} />;

    return slug === "hubbo-pos" ? (
      <PasswordGate>{project}</PasswordGate>
    ) : (
      project
    );
  }
  switch (route) {
    case "/projects":
      return <Projects />;
    case "/about":
      return <About />;
    case "/resume":
      return <Resume />;
    case "/contact":
      return <Contact />;
    default:
      return <Home />;
  }
}

const TITLES: Record<string, string> = {
  "/project/saar": "Saar — Gargee Moni Jose",
  "/": "Gargee Moni Jose — Product Designer / UI UX Designer",
  "/projects": "Projects — Gargee Moni Jose",
  "/about": "About — Gargee Moni Jose",
  "/resume": "Résumé — Gargee Moni Jose",
  "/contact": "Contact — Gargee Moni Jose",
};

export default function App() {
  const route = useHashRoute();
  useReveal(route);

  const key = TITLES[route]
    ? route
    : route.startsWith("/project/") ? "/project" : "/";
  document.title =
    TITLES[key] ??
    "Case Study — Gargee Moni Jose";

  const isContact = route === "/contact";

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Nav route={route} />

      <main id="main" className="flex-1">
        <View route={route} />
      </main>

      {!isContact && <BottomBar />}
    </div>
  );
}
