import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a>Project 1</a></h3>
											<h3><span>Sentiment Analysis of Airline Twitter Data</span></h3>
											<span>
												Employed Natural Language Processing techniques to determine general sentiment of tweets regarding various airlines;
												Used Naive Bayes Classifier and Support Vector Machine models to compare airlines based on sentiment
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a>Project 2</a></h3>
											<h3><span>Space Trader</span></h3>
											<span>
												Developed fully functional web application; used SQL Alchemy to store game data and Python Flask for full game functionality
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a>Project 3</a></h3>
											<h3><span>Automated Algorithm Design</span></h3>
											<span>
												Collaboratively work on developing genetic programs that optimize current algorithms; Use DEAP framework to create and test new primitives and algorithms
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
