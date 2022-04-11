import { useState } from 'react'
import logo from '../../../assets/img/close-icon.svg'
import CardEmp from '../CardEmp'
import FormInsCurs from '../FormInsCurs'
const CardCursP2 = ({
  nombre,
  descripcion,
  subtitulos,
  categoria,
  url_imagen,
  id,
  idI,
  nombreI,
  descripcionI,
  profesionI,
  redes1I,
  redes2I,
  redes3I,
  redes4I,
  url_imagenI,
  src,
  inscripcion,
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
                redes4={redes4I}
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
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">{nombre}</h2>
                    <p className="item-intro text-muted">{subtitulos}</p>
                    <iframe
                      width="560"
                      height="315"
                      src={src}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <p>{descripcion}</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Nombre: </strong>
                        {nombre}
                      </li>
                      <li>
                        <strong>Nombre Investigador: </strong>
                        {nombreI}
                      </li>
                      <li>
                        <strong>Categoria: </strong>
                        {categoria}
                      </li>
                    </ul>
                    <div className="butunDetalle">
                     
                      {inscripcion === 'inscripcion' && (
                        <a
                          href="https://www.ibser.org/investigacion-y-desarrollo-de-productos/"
                          className="btn btn-primary "
                          target="_blank"
                          type="button"
                          // onClick={showForm}
                        >
                          !Inscríbete¡
                        </a>
                      )}
                       <br />
                      <a
                        className="btn btn-primary "
                        href="https://mentorday.es/crowdfunding/?gclid=CjwKCAjwopWSBhB6EiwAjxmqDfUjVxIPxxYJ-kg6Y40saT5AmFotHtKKkGJI3hVvc1yvDOV_5SbNYBoCRHUQAvD_BwE"
                      >
                        Crowdfunding
                      </a>
                      <br />
                      <button className="btn btn-primary " type="button">
                        Descarga pdf
                      </button>
                      <br />
                      <button
                        className="btn btn-primary "
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-xmark me-1"></i>
                        Close Startup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardCursP2
