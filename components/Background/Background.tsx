'use client';

import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { Icon } from '@iconify/react';

import { Background as BackgroundProps } from '@/types';

import './Background.scss';

export const Background = ({ background }: { background: BackgroundProps }) => {
  const { title, label, items } = background;

  return (
    <section id="background" className="background" aria-labelledby="background-heading">
      <div className="background__container">
        <div className="background__heading-wrapper">
          <ScrollReveal animation="slideUp">
            <span className="background__label">{label}</span>
          </ScrollReveal>
          <ScrollReveal animation="slideUp" delay={0.1}>
            <h2 id="background-heading" className="background__title">
              {title}
            </h2>
          </ScrollReveal>
        </div>

        <div className="background__grid">
          {items.map((item, i) => (
            <ScrollReveal key={i} animation="fadeInUp" delay={i * 0.1}>
              <div className="background__card">
                <div className="background__card__icon-wrapper" aria-hidden="true">
                  <Icon icon={item.icon} className="background__card__icon" />
                </div>
                <div className="background__card__body">
                  <div className="background__card__header">
                    <div>
                      <h3 className="background__card__degree">{item.degree}</h3>
                      <h4 className="background__card__field">{item.field}</h4>
                      <span className="background__card__institution">{item.institution}</span>
                    </div>
                    <div className="background__card__meta">
                      <time className="background__card__years">{item.years}</time>
                      <span className="background__card__location">{item.location}</span>
                    </div>
                  </div>
                  {item.description && (
                    <p className="background__card__description">{item.description}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Background;