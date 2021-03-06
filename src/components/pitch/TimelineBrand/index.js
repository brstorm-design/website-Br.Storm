import React, { useContext, useEffect, useRef, useState } from 'react';
import { getMaxHeight } from 'src/modules/App';
import { rootPath } from 'src/utils/env';
import styles from './TimelineBrand.module.scss';
//
// icons
import Brief from 'public/images/icons/Notebook.svg';
import Research from 'public/images/icons/Research.svg';
import Design from 'public/images/icons/Idea.svg';
import Refinement from 'public/images/icons/Compass.svg';
import Presentation from 'public/images/icons/Presentation.svg';
import Feedback from 'public/images/icons/Chat.svg';
import Collaterals from 'public/images/icons/Checklist.svg';
import Delivery from 'public/images/icons/Flag.svg';
import { SmoothScrollContext } from 'src/contexts/SmoothScrollContext';

export default function TimelineBrand({ steps, service }) {
  const [lineHeight, setLineHeight] = useState(0);
  const line = useRef(null);

  function Line() {
    return <div
      ref={line}
      style={{ height: `${lineHeight}px`, opacity: service === 'web' ? '0' : '1' }}
      className={styles.line}
    />
  }

  let screenCenter;
  let target;
  let maxLineHeight;
  let numbers;

  function handleScroll() {
    const top = document.querySelector(`.${styles.cards}`).getBoundingClientRect().top;
    const lineBottom = line.current.getBoundingClientRect().bottom;
    let height = screenCenter - top;
    if (top < screenCenter && height < (maxLineHeight + 50)) {
      setLineHeight(height);
    }

    numbers.forEach((number, index) => {
      let margin;
      index === 0 ? margin = 50 : margin = 0;
      // 👆 adicionando uma margem de 100px para o primeiro elemento ficar ativo
      if (number.getBoundingClientRect().top + margin < lineBottom) {
        number.parentElement.classList.add(styles.active);
      } else {
        number.parentElement.classList.remove(styles.active);
      }
    });
  }

  const { scroll } = useContext(SmoothScrollContext);

  useEffect(() => {
    const cardList = document.querySelectorAll(`.${styles.cards} > div`);
    //
    screenCenter = window.innerHeight / 2;
    target = document.querySelector(`.${styles.line}:last-child`);
    maxLineHeight = getMaxHeight(cardList);
    numbers = document.querySelectorAll(`.${styles.cards} > div span`);
  }, [scroll]);

  useEffect(() => {
    scroll?.on('scroll', handleScroll);
    return () => {
      scroll?.off('scroll', handleScroll);
    }
  }, [screenCenter, target, scroll]);

  const icons = [
    Brief,
    Research,
    Design,
    Refinement,
    Presentation,
    Feedback,
    Collaterals,
    Delivery,
  ]

  return (
    <div>
      <div className={`${styles.cards} ${service === 'web' ? styles.web : ''}`} id="cards">
        {
          steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <div key={`step-${index}`}>
                <span style={{ opacity: service === 'web' ? '0' : '1' }} id={`step-${index + 1}`} className={styles.number}>{index + 1}</span>
                <Icon />
                <h5>{step.name}</h5>
                <small>{step.text}</small>
                {index === 0 ? <Line /> : null}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}