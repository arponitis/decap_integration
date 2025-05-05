import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation',
    description: (
      <>
        Comprehensive documentation to help you get started and understand all features.
      </>
    ),
  },
  {
    title: 'Blog',
    description: (
      <>
        Stay updated with the latest news, tutorials, and announcements.
      </>
    ),
  },
  {
    title: 'Decap CMS',
    description: (
      <>
        Easy content management with Decap CMS integration.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 