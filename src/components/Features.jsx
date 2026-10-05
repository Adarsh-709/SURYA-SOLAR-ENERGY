import React from 'react';
import { Home, Factory, Wrench } from 'lucide-react';
import './Features.css';

const solutions = [
  {
    icon: <Home size={40} />,
    title: 'Domestic Solar',
    desc: 'Power your home completely with free solar energy. Reduce electricity bills to zero, claim the PM Surya Ghar Govt Subsidy, and earn by exporting excess power to the grid through Net Metering.'
  },
  {
    icon: <Factory size={40} />,
    title: 'Commercial Solar',
    desc: 'Built for businesses, factories, and schools. Drastically lower your operational costs, claim accelerated tax depreciation, and showcase your brand as a green, sustainable industry leader.'
  },
  {
    icon: <Wrench size={40} />,
    title: 'Maintenance & Support',
    desc: 'Our relationship doesn\'t end at installation. We provide comprehensive Annual Maintenance Contracts (AMC), deep cleaning, health-checks, and lightning-fast troubleshooting for 25+ years.'
  }
];

const Features = () => {
  return (
    <section id="solutions" className="features-section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="heading-lg">Our Solar <br/><span>Solutions</span></h2>
          <p className="text-muted">Tailored energy systems to meet your exact power requirements.</p>
        </div>

        <div className="features-grid three-col">
          {solutions.map((sol, idx) => (
            <div className="feature-card glass-panel animate-fade-up" style={{ animationDelay: `${0.1 * (idx + 1)}s` }} key={idx}>
              <div className="feature-icon text-accent">{sol.icon}</div>
              <h3 className="feature-title">{sol.title}</h3>
              <p className="feature-desc text-muted">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
