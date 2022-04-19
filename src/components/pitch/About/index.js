import React from 'react';
import { rootPath } from 'src/utils/env';
import styles from './About.module.scss';

export default function About({ content }) {
  console.log(content);
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center order-2 order-lg-1">
            <div className={styles.content}>
              <h1>{content.title}</h1>
              <h2>{content.subtitle}</h2>
              <div dangerouslySetInnerHTML={{__html: content.text}} />
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1 order-1 order-lg-2">
            <img className="img-fluid" src={`${rootPath}/images/wireframes/project-details.svg`} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}