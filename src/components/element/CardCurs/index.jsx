import logo from '../../../assets/img/close-icon.svg'
const CardCurs = ({
  nombre,
  descripcion,
  subtitulos,
  responsable,
  categoria,
  url_curso,
  url_imagen,
  id,
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
          <div className="portfolio-caption-subheading text-muted">{categoria}</div>
        </div>
      </div>
    </div>
      <div className="portfolio-modal modal fade" id={`portfolioModal${id}`} tabindex={`-${id}`} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={logo} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">{nombre}</h2>
                                    <p className="item-intro text-muted">{subtitulos}</p>
                                    <img className="img-fluid d-block mx-auto" src={url_imagen} alt="..." />
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
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
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
