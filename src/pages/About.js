export default function About() {
    let message = "Providing Queen’s University students with the opportunity to learn about data and develop analytical skills through the following:"
    return (
      <section className="section-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">
                            Queen's Data Analytics Association
                        </h2>
                        <p className="section-subtitle">{message}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}