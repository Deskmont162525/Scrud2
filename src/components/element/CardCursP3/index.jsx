import { useState } from 'react'
import logo from '../../../assets/img/close-icon.svg'
import CardArbol from '../CardArbol'
import CardEmp from '../CardEmp'
import FormInsCurs from '../FormInsCurs'
const dataEmprende = [
  {
    fecha: '2009-2011',
    nombre: 'Emprendedor 1',
    descripcion:
      'Un emprendedor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.',
    profesion: 'Preogramador full stack',
    redes1: 'twiter',
    redes2: 'face',
    redes3: 'linkedin',
    url_imagen:
      'https://images-na.ssl-images-amazon.com/images/I/513ifiugRxL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
  },
  {
    fecha: '2009-2020',
    nombre: 'Emprendedor 2',
    descripcion: 'Un emprendedor',
    profesion: 'Preogramador full stack',
    redes1: 'twiter',
    redes2: 'face',
    redes3: 'linkedin',
    url_imagen:
      'https://i.blogs.es/580ccb/cafe3/1366_2000.jpg',
  },
  {
    fecha: '2009-2021',
    nombre: 'Emprendedor 3',
    descripcion: 'Un emprendedor',
    profesion: 'Preogramador full stack',
    redes1: 'twiter',
    redes2: 'face',
    redes3: 'linkedin',
    url_imagen:
      'https://img.freepik.com/foto-gratis/cafe-puede-hacerlo-mejor-hombre-negocios-tomando-cafe-antes-trabajo-hombre-barbudo-disfrutando-pausa-cafe-oficina-mi-manana-perfecta-paso-tomando-cafe_474717-16919.jpg',
  },
]
const CardCursP3 = ({
  nombre,
  descripcion,
  subtitulos,
  responsable,
  categoria,
  url_curso,
  url_imagen,
  id,
  idI,
  nombreI,
  descripcionI,
  profesionI,
  redes1I,
  redes2I,
  redes3I,
  url_imagenI,
  src,
}) => {
  const [openFrom, setOpenForm] = useState(false)
  const showForm = () => setOpenForm(!openFrom)
  return (
    <>
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href={`#portfolioModal${id}`}
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={url_imagen} alt="..." />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">{nombre}</div>
            <div className="portfolio-caption-subheading text-muted">
              {categoria}
            </div>            
          </div>
        </div>
        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="row">
              <CardEmp
                key={idI}
                nombre={nombreI}
                descripcion={descripcionI}
                profesion={profesionI}
                redes1={redes1I}
                redes2={redes2I}
                redes3={redes3I}
                url_imagen={url_imagenI}
              />
            </div>
          </div>
        </section>
      </div>
      <div
        className="portfolio-modal modal fade"
        id={`portfolioModal${id}`}
        tabIndex={`-${id}`}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src={logo} alt="Close modal" />
            </div>
            <div className="container">
            <iframe width="560" height="315" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div className="row justify-content-center">
                <div className="container">
                  <div className="text-center">
                    <h2 className="section-heading text-uppercase">Historial</h2>
                    <h3 className="section-subheading text-muted">
                      de Investigación.
                    </h3>
                  </div>
                  <ul className="timeline">
                    {dataEmprende?.map((k, i) => {
                      let clasInvert = ''
                      i % 2 === 0
                        ? (clasInvert = 'timeline-inverted')
                        : (clasInvert = '')
                      return (
                        <CardArbol
                          clasInvert={clasInvert}
                          key={i}
                          fecha={k?.fecha}
                          nombre={k?.nombre}
                          profesion={k?.profesion}
                          descripcion={k?.descripcion}
                          redes1={k?.redes1}
                          redes2={k?.redes2}
                          redes3={k?.redes3}
                          url_imagen={k?.url_imagen}
                        />
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardCursP3
