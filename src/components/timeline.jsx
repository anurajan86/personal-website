import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at GTRI <span>May 2020-present</span></h2>
                        <p>Currently, I am working as a Student Assistant at the Georgia Tech Research Institute. I work on changing/improving a new evolutionary framework for algorithms. Tasks include writing and running unit tests to ensure effectiveness of framework and creating new primitives to improve how well framework handles text and image data. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Barcelona Study Abroad <span>May 2019-July 2019</span></h2>
                        <p>I spent Summer 2019 studying abroad in Barcelona. I got to travel to new places all around Europe, and even Africa. Coursework included Computing Ethics, Discrete Math, and Database Systems.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Georgia Tech Student <span>August 2018-present</span></h2>
                        <p>I am pursuing my undergraduate degree with a major in Computer Science. I have completed coursework in Machine Learning, AI, Algorithms, Multivariable Calculus, Linear Algebra, and more. I worked for a semester as a fitness attendant at the Campus Recreation Center. I have participated numerous hackathons, such as HackGT, HammerHacks, and Hacklytics. I like to spend free time either working on personal projects, watching TV, or working out at the gym.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>High School <span>2014-2018</span></h2>
                        <p>I attended a J.L. Mann High School in Greenville, South Carolina. During my time there, I was captain of the Varsity Tennis Team, I won the National Merit Scholarship, and I scored a 1560/1600 on my SAT.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
