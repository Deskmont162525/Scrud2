import React from 'react'
import logo from '../../../assets/img/close-icon.svg'
import FormInsCursEmpren from '../FormInsCursEm'
const CardCurs = ({
  nombre,
  descripcion,
  subtitulos,
  categoria,
  url_imagen,
  id,
  confirm,
  onSubmit,
  error,
  openFrom,
  showForm,
  onChangeInput,
  stateFrom,
  inputFile,
  src,
  inscripcion1,
}) => {
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
                        <strong>Nombre:</strong>
                        {nombre}
                      </li>
                      <li>
                        <strong>Categoria:</strong>
                        {categoria}
                      </li>
                    </ul>
                    <div className="butunDetalle">
                      {inscripcion1 === 'inscripcion' && (
                        <a
                          href="https://www.ibser.org/gerencia-de-proyectos-digitales/"
                          className="btn btn-primary "
                          target="_blank"
                          type="button"
                          // onClick={showForm}
                        >
                          !Inscríbete¡
                        </a>
                      )}
                      <br />
                      <button className="btn btn-primary " type="button">
                        Descarga pdf
                      </button>
                      <br />
                       <button
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-xmark me-1"></i>
                        Close Startup
                      </button>
                      <br />
                    </div>
                    {openFrom && (
                      <FormInsCursEmpren
                        state={stateFrom}
                        onChangeInput={onChangeInput}
                        onSubmit={onSubmit}
                        error={error}
                        inputFile={inputFile}
                      />
                    )}
                    {confirm && (
                      <div className="portfolio-caption">
                        <br />
                        <div className="portfolio-caption-heading">
                          REGISTRO CORRECTO
                        </div>
                        <div className="portfolio-caption-subheading text-muted">
                          Gracias por tu registro, recibiras un correo con la
                          información pertinente.
                        </div>
                      </div>
                    )}
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

export default CardCurs
