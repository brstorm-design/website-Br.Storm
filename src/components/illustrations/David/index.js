import { useEffect } from 'react';
import { applyStyles } from 'src/modules/App';
import styles from './David.module.scss';

export default function David({ forwardedRef, translate }) {

  useEffect(() => {
    let targets = forwardedRef.current.querySelectorAll('img[alt="comment"]');
    window.requestAnimationFrame(() => {
      applyStyles(targets, translate);
    });
  });

  useEffect(() => {
    setTimeout(function toggle() {
      let words = document.getElementById('obj').contentDocument.firstChild;
      words.classList.toggle('active');
      setTimeout(() => {
        toggle();
      }, 3000);
    }, 2000);
  }, []);

  const options = {
    rootMargin: '-200px 0px -200px 0px'
  }

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          document.getElementById('color').classList.add('active');
        }, 1500);
        observer.unobserve(entry.target);
      }
    })
  }

  useEffect(() => {
    const target = document.getElementById('purpose-image');
    let observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    }
  }, []);

  return (
    <div className={styles.image}>
      <div ref={forwardedRef} id="purpose-image">
        <img src="/images/purpose/david.png" alt="david" />
        <svg id="color" width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: 'overlay' }}>
            <rect width="150" height="40" fill="#E93CAC" />
          </g>
          <g style={{ mixBlendMode: 'multiply' }}>
            <rect width="150" height="40" fill="#E93CAC" />
          </g>
        </svg>
        <img src="/images/purpose/seal.svg" alt="seal" />
        <img src="/images/purpose/comment-michelangelo.svg" alt="comment" />
        <img src="/images/purpose/pattern.svg" alt="pattern" />
        <img src="/images/purpose/pin.svg" alt="pin" />
        <img src="/images/purpose/exploring-the-infinite.svg" alt="writing" />
        <div>
          <object id="obj" data="/images/purpose/words.svg" type="text/svg+xml" />
        </div>
      </div>
    </div>
  )
}