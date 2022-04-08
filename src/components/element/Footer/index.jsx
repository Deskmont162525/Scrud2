const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">
            © 2020 IBSER | Todos los derechos reservados
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://twitter.com/IbserOficial"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.facebook.com/ibserorg/"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F24966786%2Fadmin%2F"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
            //   https://api.whatsapp.com/send/?phone=&text&app_absent=0
              href={`https://api.whatsapp.com/send?phone=+573118721109&text=hola,%20me%20contacto%20contigo%20por%20medio%20del%20aplicativo%20web?`}
              target="_blank"
              aria-label="Parveen Anand whatsapp Profile"
            >
              <i className="fab fa-whatsapp" style={{fontSize:"20px"}}></i>
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.youtube.com/channel/UCgkCVRjfgoGoss3qkmcErgw"
              aria-label="Facebook"
            >
              <i className="fab fa-youtube" style={{fontSize:"20px"}}></i>
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.instagram.com/ibser_org/"
              aria-label="LinkedIn"
            >
              <i className="fab fa-instagram" style={{fontSize:"20px"}}></i>
            </a>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a
              className="link-dark text-decoration-none me-3"
              href="https://www.ibser.org/politica-de-privacidad/"
            >
              Ver políticas de privacidad y protección de datos personales
            </a>
            <br />
            <a
              className="link-dark text-decoration-none"
              href="https://www.ibser.org/dian-art-364-5/"
            >
              Ver requisitos art. 364-5 Estatuto Tributario
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
