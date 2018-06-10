import React from 'react';
import TeamMember from './TeamMember';

const About = () => (
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2>About Us</h2>

          <p>
            Aexchange is a fast, reliable and fully transparent cryptocurrency exchange built by crypto enthusiasts, for crypto
            enthusiasts.
          </p>
          <p>We are a group of multi-national, multi-disciplinary cryptocurrency professionals.</p>
          <p>
            Our team came together to make this platform after seeing firsthand the need for a fast and reliable exchange on the crypto
            market.
          </p>
          <p>
            We pride ourselves on total transparency: Everything is viewable through our API, starting from order lists and ending with our
            coin reserves.{' '}
          </p>
          <p>
            Aexchange is built on several core values that guide our team in our day to day operations. Among them are complete
            transparency, a strive to help make cryptocurrency as accessible as possible, and a passion for open source.
          </p>

          <div id="team-members" className="row">

            <TeamMember
              id="you"
              name="You?"
              description={
                <div>
                  <p>
                    We are actively hiring for the Aexchange dream team. We are especially on the lookout for talented developers,
                    marketing personnel, a community manager and content writers.
                  </p>
                  <p>
                    Drop us a line at <a href="mailto:careers@n.exchange">careers@n.exchange</a>.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
