import Menu from '../../components/element/Menu'
import { useState } from 'react'
import CardCursP3 from '../../components/element/CardCursP3'
import { dataEncurso, dataFutura, dataHistorico } from '../../actions/objets'
import Footer from '../../components/element/Footer'


const PageInicio3 = () => {
  const [search, setSearch] = useState("")
  const onCangeInput = (e) => {
    setSearch(e.target.value)
  }
  
  // dataEncurso, dataFutura
  const filterState = () => {      
    return dataHistorico?.filter(
      (e) =>
      e.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || e?.investigador?.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    )
  }
  const filterState1 = () => {      
    return dataEncurso?.filter(
      (e) =>
      e.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || e?.investigador?.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    )
  }
  const filterState2 = () => {      
    return dataFutura?.filter(
      (e) =>
      e.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || e?.investigador?.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    )
  }
  return (
    <>
      <Menu clasImage="masthead3" onCangeInput={onCangeInput} search={search}/>

      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Nuestro Historial de Eventos</h2>
            <h3 className="section-subheading text-muted">
              Todas las actividades realizadas en la que participaron muchas personas y se realizaron eventos pasados.
            </h3>
          </div>        
          <div className="row">
            {
              /* aqui el mapeo de la data  CardCurs*/
              filterState()?.map((k, i) => {
                return (
                  <>
                    <CardCursP3
                      key={i}
                      nombre={k?.nombre}
                      descripcion={k?.descripcion}
                      subtitulos={k?.subtitulos}
                      responsable={k?.responsable}
                      categoria={k?.categoria}
                      url_curso={k?.url_curso}
                      url_imagen={k?.url_imagen}
                      id={i}
                      idI={i}
                      nombreI={k?.investigador?.nombre}
                      descripcionI={k?.investigador?.descripcion}
                      profesionI={k?.investigador?.profesion}
                      redes1I={k?.investigador?.redes1}
                      redes2I={k?.investigador?.redes2}
                      redes3I={k?.investigador?.redes3}
                      url_imagenI={k?.investigador?.url_imagen}
                      src={k.src}
                    />
                  </>
                )
              })
            }
          </div>         
        </div>
      </section>

      {/* copias */}

      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Nuestros Eventos Proceso</h2>
            <h3 className="section-subheading text-muted">
              Podrás participar de nuestras actividades llenas de conocimiento y experiencias para el desarrollo empresarial.
            </h3>
          </div>        
          <div className="row">
            {
              /* aqui el mapeo de la data  CardCurs*/
              filterState1()?.map((k, i) => {
                return (
                  <>
                    <CardCursP3
                      key={i}
                      nombre={k?.nombre}
                      descripcion={k?.descripcion}
                      subtitulos={k?.subtitulos}
                      responsable={k?.responsable}
                      categoria={k?.categoria}
                      url_curso={k?.url_curso}
                      url_imagen={k?.url_imagen}
                      id={i}
                      idI={i}
                      nombreI={k?.investigador?.nombre}
                      descripcionI={k?.investigador?.descripcion}
                      profesionI={k?.investigador?.profesion}
                      redes1I={k?.investigador?.redes1}
                      redes2I={k?.investigador?.redes2}
                      redes3I={k?.investigador?.redes3}
                      url_imagenI={k?.investigador?.url_imagen}
                      src={k.src}
                    />
                  </>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* // segunda copia */}

      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Nuestros Eventos a Proyecto</h2>
            <h3 className="section-subheading text-muted">
              Podrás participar de nuestras actividades llenas de conocimiento y experiencias para el desarrollo empresarial.
            </h3>
          </div>
          <br />          
          <div className="row">
            {
              /* aqui el mapeo de la data  CardCurs*/
              filterState2()?.map((k, i) => {
                return (
                  <>
                    <CardCursP3
                      key={i}
                      nombre={k?.nombre}
                      descripcion={k?.descripcion}
                      subtitulos={k?.subtitulos}
                      responsable={k?.responsable}
                      categoria={k?.categoria}
                      url_curso={k?.url_curso}
                      url_imagen={k?.url_imagen}
                      id={i}
                      idI={i}
                      nombreI={k?.investigador?.nombre}
                      descripcionI={k?.investigador?.descripcion}
                      profesionI={k?.investigador?.profesion}
                      redes1I={k?.investigador?.redes1}
                      redes2I={k?.investigador?.redes2}
                      redes3I={k?.investigador?.redes3}
                      url_imagenI={k?.investigador?.url_imagen}
                      src={k.src}
                    />
                  </>
                )
              })
            }
          </div>         
        </div>
      </section>
      <Footer/>
      
    </>

  )
}

export default PageInicio3
