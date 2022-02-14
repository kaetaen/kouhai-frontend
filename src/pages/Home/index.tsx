function Home () {
  return (
    <main className="container-fluid mycover">
      <section className="jumbotron">
        <h1 className="display-4">Kouhai</h1>
        <p className="lead">Encontre seu job no mundo PHP.</p>
        <p>Encontre vagas para desenvolvedores PHP Júnior em diversas plataformas de empregos.</p>
        <p className="lead">
        <a className="btn btn-danger btn-lg" href="#" role="button">Encontre seu job</a>
        </p>
      </section>

      <section>
        <section className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Home