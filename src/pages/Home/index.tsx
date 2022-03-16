import { useEffect, useState } from 'react'
import HttpClient from '../../services/HttpClient'
import { IData, IJobs, JobsList } from '../../types'
import Card from './components/Card'

function Home () {

  const [data, setData] = useState({})

  useEffect(() => {
    request()
  }, [1])

  async function request  ()  {
    const fetchData = new HttpClient();
    const response = await fetchData.getRequest('jobs/list-all-jobs');
    const responseData: IData = response.data
    setData(responseData);
  }

  function renderCardContent() {
    // verifica se o retorno foi o esperado
    if (data.catho) {
      const content: JobsList = [
        ...data.catho,
        ...data.programathor
      ]
      return content.map((value: IJobs, index: number) => {
        // Verifica se o dado retornado é com os dados do Catho ou Programathor
        console.log(value)
        if (value != null) {
          if (value.job_updated_at){
            return (
              <Card content={value} source={'catho'}/>
            )
          } else {
            return (
              <Card content={value} source={'programathor'}/>
            )
          }
        }
      })
    }
  }

  return (
    <main className="container-fluid mycover text-center ">
      <section className="jumbotron text-light mycover__section">
        <h1 className="display-4">Kouhai</h1>
        <p className="lead">Encontre seu job no mundo PHP.</p>
        <p>Encontre vagas para desenvolvedores PHP Júnior em diversas plataformas de empregos.</p>
        <p className="lead">
        <a className="btn btn-danger btn-lg" href="#jobs" role="button">Encontre seu job</a>
        </p>
      </section>


      <section >
        <div style={{margin: '30px'}}>
          <h1 className='text-center'> Vagas </h1>
        </div>
        <section className="container-fluid" id="jobs">
          <div className="row">
            {
              data ? renderCardContent() : <Modal />
            }
          </div>
        </section>
      </section>
    </main>
  )
}

export default Home