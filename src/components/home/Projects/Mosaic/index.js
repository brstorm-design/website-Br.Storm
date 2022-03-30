import React, { useEffect, useRef, useState } from 'react';
import Behance from 'public/images/socials/behance.svg';
import styles from './Mosaic.module.scss';
import Image from 'next/image';
//
import catarge from 'public/images/portifolio/catarge.png';
import rivana from 'public/images/portifolio/rivana.png';
import petsvida from 'public/images/portifolio/petsvida.png';
import maptrack from 'public/images/portifolio/maptrack.png';
import daia from 'public/images/portifolio/daia.png';
import util from 'public/images/portifolio/util.png';
import { constructSequentialAnimation, handleIntersection } from 'src/modules/App';

const images = {
  catarge,
  rivana,
  petsvida,
  maptrack,
  daia,
  util,
}

export default function Mosaic({ common, content, portifolio }) {
  const projects = useRef(null);
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const refs = [projects.current];
    let dur = 2000;
    let delay = 0;
    refs.forEach(ref => {
      let targets = Array.from(ref.children);
      let opt = {
        duration: dur,
        easing: 'cubic-bezier(0.27, 0.6, 0.12, 1.02)',
        fill: 'both',
        delay: delay
      };
      let keyframes = {
        opacity: [0, 0.5, 1],
        transform: [`translateY(+500px)`, 'initial']
      };

      let entranceAnimation = constructSequentialAnimation(targets, keyframes, opt, 275);
      setAnimations(oldArray => [...oldArray, entranceAnimation]);
    });
  }, [])

  useEffect(() => {
    const refs = [projects.current];
    if (animations) {
      handleIntersection(refs, animations);
    }
  }, [animations])

  function handleHover(e) {
    if (e.type === 'mouseenter') {
      e.currentTarget.parentElement.style.zIndex = '3';
    }
    else if (e.type === 'mouseleave') {
      e.currentTarget.parentElement.style.zIndex = 'initial';
    }
  }

  return (
    <div className="row gy-4" ref={projects} id="projects-cards">
      {
        portifolio.map((item, index) => {
          return (
            <div key={`projects-${index}`} className={`col-12 col-lg-${item.size} ${styles.projects}`}>
              <a href={item.url} rel="noopener noreferrer" target="_blank" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <Image placeholder="blur" src={images[item.slug]} layout="responsive" />
                <div>
                  <h5>{item.name}</h5>
                  <span className="details">{item.type}</span>
                </div>
              </a>
            </div>
          )
        })
      }
      <div className="col-12 col-lg-3 offset-lg-5">
        <a className={styles.seeAll} rel="noopener noreferrer" target="_blank" href={content.url}>
          <Behance />
          <div>
            <h4>{content.fullPortifolio}</h4>
            <span>{common.seeMore}</span>
          </div>
        </a>
      </div>
    </div>
  )
}