import Hero from '../components/home/Hero.jsx';
import ProjectsList from '../components/home/ProjectsList.jsx';
import Expertise from '../components/home/Expertise.jsx';
import AboutTeaser from '../components/home/AboutTeaser.jsx';
import Parcours from '../components/home/Parcours.jsx';

export default function Home({ nav, onEnterWorld }) {
  return (
    <main>
      <Hero />
      <ProjectsList nav={nav} onEnterWorld={onEnterWorld} />
      <Expertise />
      <AboutTeaser nav={nav} />
      <Parcours />
    </main>
  );
}
