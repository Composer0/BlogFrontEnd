import "./about.css"

export default function About() {
    return (
    <div className="about">
      <h1>So you want to know more...</h1>
      <section className="section-tours" id="section-tours">
                <div id="tours" className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Most popular tours
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front card__side--front-1">
                                <div className="card__picture card__picture--1">

                                </div>

                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">
                                        The Musician
                                    </span>
                                </h4>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">In the field of music I am a clarinetist, pianist, composer, and educator. Throughout my career in music I have served many roles within different ensembles ranging from principal clarinetist, soloist, and concert master. Outside of the performing, I regularly compose music for a variety of ensembles and projects. As a composer I won the MTNA Young Artist Composition Competition in the State of Georgia and my music has contributed to the success of student film shocase winner "Payton's Place". These feats were all accomplished while I was actively teaching music. Most recently I was recognized by my school, Chukker Creek Elementary, as Teacher of the Year, an honor I take great pride in as it was awarded to me exactly a decade after I first began teaching.</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">LISTEN</a>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
                    </section>
                    </div>
  )
}
