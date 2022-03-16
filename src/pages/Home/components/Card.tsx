function Card ({content, source}) {

    const contentData: IJobs = content
    const cardStyle = {
      padding: '5px'
    }
  
    if (source === 'catho')
    {
      const date = new Date(contentData.job_updated_at)
      const published_at = date.toLocaleDateString()
      return (
        <div className="col-lg-3 col-md-6 col-sm-12" style={cardStyle}>
          <div className="card border-success mycard">
            <div className="card-body text-left">
              <h5 className="card-title text-center"><strong>{contentData.title}</strong></h5>
              <p className="card-text">{contentData.description}</p>
              <p className="card-text"><strong>Faixa salárial: </strong>{contentData.pay_scale}</p>
              <p className="card-text"><strong>Data de publicação: </strong>{published_at}</p>
              <div className='text-center'>
                <a href={contentData.url} target="_blank" className="btn btn-danger">Candidate-se</a>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if (source == 'programathor')
    {
        const description: string = contentData.job_details?.join(', ')
        return (
          <div className="col-lg-3 col-md-6 col-sm-12 " style={cardStyle}>
            <div className="card border-success mycard">
              <div className="card-body text-left">
                <h5 className="card-title text-center"><strong>{contentData.title}</strong></h5>
                <p className="card-text">{description}</p>
                <div className='text-center'>
                <a href={contentData.url} target="_blank" className="btn btn-danger">Candidate-se</a>
              </div>  
              </div>
            </div>
          </div>
      )
    }
  }

  export default Card