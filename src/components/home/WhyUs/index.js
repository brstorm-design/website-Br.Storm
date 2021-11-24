import React, { useEffect, useRef, useState } from 'react';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';
import styles from './WhyUs.module.scss';

export default function WhyUs({ content, pitch }) {
  const element = useRef(null);
  const refs = [element.current];
  const [animations, setAnimations] = useState(null);

  useEffect(() => {
    let targets = Array.from(element.current.children);
    let opt = {
      duration: 1000,
      easing: 'cubic-bezier(0.02, 0.62, 0.04, 1.01)',
      fill: 'backwards',
      delay: 0
    };
    let keyframes = {
      opacity: [0, 1],
      transform: ['translateY(+800px)', 'initial']
    };

    let textAnimation = constructSequentialAnimation(targets, keyframes, opt, 100)
    setAnimations([textAnimation]);
  }, [])

  useEffect(() => {
    if (animations) {
      const onEnd = animation => {
        animation.effect.target.querySelector('object').contentDocument.firstChild.classList.add('active');
      }
      handleIntersection(refs, animations, onEnd);
    }
  }, [animations])

  return (
    <section className={styles.section} id="why-us" style={pitch ? {paddingBottom: '0'} : null}>
      <div className={styles.title}>
        <h1 dangerouslySetInnerHTML={{__html: content.title}} />
        <p>{content.subtitle}</p>
      </div>
      <div className="container">
        <div className="row gy-4 gy-md-0" ref={element}>
          {
            content.cards.map((item, index) => {
              return (
                <div key={`whyUs-${index}`} className="col-12 col-lg-3">
                  <div className={styles.card}>
                    <object data={item.image} type="image/svg+xml" />
                    <h5>{item.title}</h5>
                    <small>{item.body}</small>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}