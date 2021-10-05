import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';

const QUOTES = [
  {
    thumbnail: require('../../data/quotes/christopher-chedeau.jpg').default,
    name: 'Christopher "vjeux" Chedeau',
    title: 'Lead Prettier Developer',
    text: '',
    // title: translate({
    //   id: 'homepage.quotes.christopher-chedeau.title',
    //   message: 'Lead Prettier Developer',
    //   description: 'Title of quote of Christopher Chedeau on the home page',
    // }),
    // text: (
    //   <Translate
    //     id="homepage.quotes.christopher-chedeau"
    //     description="Quote of Christopher Chedeau on the home page">
    //     I&apos;ve helped open source many projects at Facebook and every one
    //     needed a website. They all had very similar constraints: the
    //     documentation should be written in markdown and be deployed via GitHub
    //     pages. I’m so glad that Docusaurus now exists so that I don’t have to
    //     spend a week each time spinning up a new one.
    //   </Translate>
    // ),
  },
  {
    thumbnail: require('../../data/quotes/hector-ramos.jpg').default,
    name: 'Hector Ramos',
    title: 'Lead React Native Advocate',
    text: ''
    // title: translate({
    //   id: 'homepage.quotes.hector-ramos.title',
    //   message: 'Lead React Native Advocate',
    //   description: 'Title of quote of Hector Ramos on the home page',
    // }),
    // text: (
    //   <Translate
    //     id="homepage.quotes.hector-ramos"
    //     description="Quote of Hector Ramos on the home page">
    //     Open source contributions to the React Native docs have skyrocketed
    //     after our move to Docusaurus. The docs are now hosted on a small repo in
    //     plain markdown, with none of the clutter that a typical static site
    //     generator would require. Thanks Slash!
    //   </Translate>
    // ),
  },
  {
    thumbnail: require('../../data/quotes/ricky-vetter.jpg').default,
    name: 'Ricky Vetter',
    title: 'ReasonReact Developer',
    // title: translate({
    //   id: 'homepage.quotes.risky-vetter.title',
    //   message: 'ReasonReact Developer',
    //   description: 'Title of quote of Ricky Vetter on the home page',
    // }),
    text: '',
    // text: (
    //   <Translate
    //     id="homepage.quotes.risky-vetter"
    //     description="Quote of Ricky Vetter on the home page">
    //     Docusaurus has been a great choice for the ReasonML family of projects.
    //     It makes our documentation consistent, i18n-friendly, easy to maintain,
    //     and friendly for new contributors.
    //   </Translate>
    // ),
  },
];

export default function HomeMember() {
  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          {QUOTES.map((quote) => (
            <div className="col" key={quote.name}>
              <div className="avatar avatar--vertical margin-bottom--sm">
                <Image
                  alt={quote.name}
                  className="avatar__photo avatar__photo--xl"
                  // img={quote.thumbnail}
                  img={require('../../data/quotes/hector-ramos.jpg')}
                  style={{ overflow: 'hidden' }}
                />
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">{quote.name}</div>
                  <small className="avatar__subtitle">{quote.title}</small>
                </div>
              </div>
              <p className="text--center text--italic padding-horiz--md">
                {quote.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
