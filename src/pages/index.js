import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import HomepageFeatures from '../components/HomeFeatures';
import HomeMember from '../components/HomeMember';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img
            alt='backend logo'
            className={styles.heroLogo}
            src='../../static/img/backend-breakfast.svg'
          />
          <span
            className={styles.heroTitleTextHtml}
            dangerouslySetInnerHTML={{
              __html: '<b>汇总</b>，<b>分析</b>，<b>总结</b> 构建 <b>后端</b> 开发技能知识栈'
            }}
          />
        </h1>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/about/index">
            <div>Get Started</div>
          </Link>
          <Link
            className="button button--info"
            to="/blog">
            <div>Milestones</div>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=BladeCode&amp;repo=Backend-Skill-Stack&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <HomeMember /> */}
      </main>
    </Layout>
  );
}
