import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

// Feature Box Component
function Feature({title, description}: {title: string, description: React.JSX.Element}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Top Banner
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning Now 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

// Poori Homepage
export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Homepage"
      description="An AI-Native Textbook for the Physical AI & Humanoid Robotics Course.">
      
      {/* 1. TOP BANNER */}
      <HomepageHeader />
      
      <main>
        {/* 2. FEATURES SECTION */}
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature 
                title="Learn with ROS 2"
                description={<>Master the Robot Operating System (ROS 2), the industry standard, to control your humanoid's every move.</>}
              />
              <Feature 
                title="Simulate with NVIDIA Isaac"
                description={<>Create hyper-realistic simulations and generate synthetic data using the powerful NVIDIA Isaac Sim platform.</>}
              />
              <Feature 
                title="Build Real-World AI"
                description={<>Connect Large Language Models to your robot and teach it to understand natural language commands.</>}
              />
            </div>
          </div>
        </section>

        {/* 3. NAYA SECTION: "WHO IS THIS BOOK FOR?" */}
        <section className={styles.audienceSection}>
          <div className="container text--center">
            <h2>Who Is This Book For?</h2>
            <div className="row">
              <div className="col col--4">
                <h4>🤖 Robotics Students</h4>
                <p>Build a strong foundation in modern robotics and prepare for the future.</p>
              </div>
              <div className="col col--4">
                <h4>👩‍💻 Software Developers</h4>
                <p>Transition your coding skills from the digital world to physical, embodied AI.</p>
              </div>
              <div className="col col--4">
                <h4>🔬 AI Enthusiasts</h4>
                <p>Explore the exciting intersection of AI, simulation, and hardware.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. AAKHRI SECTION: "CALL TO ACTION" */}
        <section className={styles.ctaSection}>
          <div className="container text--center">
            <h2>Ready to Build the Future?</h2>
            <p>Dive into the first chapter and start your journey into the world of Physical AI today.</p>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Let's Get Started!
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}