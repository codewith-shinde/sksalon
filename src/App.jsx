import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import ScrollProgress from './components/layout/ScrollProgress';
import FloatingActions from './components/layout/FloatingActions';
import Hero from './components/sections/Hero';

// Below-the-fold sections are code-split and lazy-loaded for a fast first paint.
const About = lazy(() => import('./components/sections/About'));
const Services = lazy(() => import('./components/sections/Services'));
const Pricing = lazy(() => import('./components/sections/Pricing'));
const WhyChooseUs = lazy(() => import('./components/sections/WhyChooseUs'));
const Gallery = lazy(() => import('./components/sections/Gallery'));
const CTABand = lazy(() => import('./components/sections/CTABand'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));

const Fallback = () => (
  <div className="section-fallback" aria-hidden="true">
    <span className="section-fallback__spinner" />
  </div>
);

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Suspense fallback={<Fallback />}>
          <About />
          <Services />
          <Pricing />
          <WhyChooseUs />
          <Gallery />
          <CTABand />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<Fallback />}>
        <Footer />
      </Suspense>
      <FloatingActions />
    </>
  );
}
