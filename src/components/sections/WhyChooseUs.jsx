import './WhyChooseUs.css';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Icon from '../ui/Icon';

const features = [
  {
    icon: 'gem',
    title: 'Expert, qualified team',
    text: 'Skilled, fully-trained therapists who take pride in precision and every fine detail.',
  },
  {
    icon: 'leaf',
    title: 'Premium products',
    text: 'We use only high-quality, skin-loving brands for beautiful, long-lasting results.',
  },
  {
    icon: 'shield',
    title: 'Spotless & hygienic',
    text: 'An immaculate, sanitised studio where your comfort and safety always come first.',
  },
  {
    icon: 'heart',
    title: 'Warm, friendly service',
    text: 'A welcoming, relaxed atmosphere where every client is treated with genuine care.',
  },
  {
    icon: 'star',
    title: 'Loved & 5-star rated',
    text: 'Consistently glowing reviews from clients across York and beyond.',
  },
  {
    icon: 'mapPin',
    title: 'Central York location',
    text: 'Perfectly placed at 10 Colliergate in the heart of the city centre.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why section" id="why">
      <div className="container">
        <SectionHeading
          eyebrow="Why SK Unique Studio"
          title={
            <>
              The difference is in the <em>detail</em>
            </>
          }
          subtitle="A premium experience built on expertise, care and an uncompromising standard of quality."
        />

        <div className="why__grid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08} className="why__card">
              <span className="why__icon">
                <Icon name={f.icon} size={26} />
              </span>
              <h3 className="why__title">{f.title}</h3>
              <p className="why__text">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
