const CardEmp = ({
  nombre,
  descripcion,
  profesion,
  redes1,
  redes2,
  redes3,
  url_imagen,
}) => {
  return (
    <div className="col-lg-4">
      <div className="team-member">
        <img
          className="mx-auto rounded-circle"
          src={url_imagen}
          alt="..."
        />
        <h4>{nombre}</h4>
        <p className="text-muted">{profesion}</p>
        <p className="text-muted">{descripcion}</p>
        <a
          className="btn btn-dark btn-social mx-2"
          href={redes1}
          aria-label="Parveen Anand Twitter Profile"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="btn btn-dark btn-social mx-2"
          href={redes2}
          aria-label="Parveen Anand Facebook Profile"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          className="btn btn-dark btn-social mx-2"
          href={redes3}
          aria-label="Parveen Anand LinkedIn Profile"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  )
}

export default CardEmp
