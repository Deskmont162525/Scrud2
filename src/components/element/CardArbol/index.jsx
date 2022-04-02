const CardArbol = ({
  clasInvert,
  fecha,
  nombre,
  descripcion,
  url_imagen,
}) => {
  return (
    <li className={clasInvert}>
      <div class="timeline-image">
        <img
          class="rounded-circle img-fluid"
          src={url_imagen}
          alt="..."
        />
      </div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <h4>{fecha}</h4>
          <h4 class="subheading">{nombre}</h4>
        </div>
        <div class="timeline-body">
          <p class="text-muted">
            {descripcion}
          </p>
        </div>
      </div>
    </li>
  )
}

export default CardArbol
