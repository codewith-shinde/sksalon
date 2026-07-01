import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Pricing.css';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { serviceCategories } from '../../data/services';
import { formatPrice } from '../../utils/format';
import { whatsappLink } from '../../utils/whatsapp';

export default function Pricing() {
  const [active, setActive] = useState(serviceCategories[0].id);
  const current =
    serviceCategories.find((c) => c.id === active) || serviceCategories[0];

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <SectionHeading
          eyebrow="Price List"
          title={
            <>
              Transparent, honest <em>pricing</em>
            </>
          }
          subtitle="Every treatment, clearly priced. Choose a category to view the full menu."
        />

        <div
          className="pricing__tabs"
          role="tablist"
          aria-label="Service categories"
        >
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              aria-controls={`panel-${cat.id}`}
              id={`tab-${cat.id}`}
              className={`pricing__tab ${active === cat.id ? 'is-active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.name}
              {active === cat.id && (
                <motion.span
                  className="pricing__tab-underline"
                  layoutId="pricing-underline"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            id={`panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="pricing__panel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pricing__panel-head">
              <div>
                <h3 className="pricing__panel-title">{current.name}</h3>
                <p className="pricing__panel-tag">{current.tagline}</p>
              </div>
              <Button
                href={whatsappLink(current.whatsappContext)}
                variant="dark"
                size="sm"
                icon="whatsapp"
              >
                Book {current.name}
              </Button>
            </div>

            <div className="pricing__groups">
              {current.groups.map((group) => (
                <div className="pricing__group" key={group.title}>
                  <h4 className="pricing__group-title">
                    <Icon name="sparkle" size={15} /> {group.title}
                  </h4>
                  <ul className="pricing__list">
                    {group.items.map((item) => (
                      <li className="pricing__row" key={item.name + item.price}>
                        <span className="pricing__name">
                          {item.name}
                          {item.note && (
                            <span className="pricing__note"> ({item.note})</span>
                          )}
                        </span>
                        <span className="pricing__dots" aria-hidden="true" />
                        <span className="pricing__amount">
                          {formatPrice(item.price, item.from)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="pricing__footnote">
          Prices are a guide and may vary with length, complexity or product
          choice. For anything not listed, please{' '}
          <a
            href={whatsappLink('Hello, I have a question about your pricing.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            message us on WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
