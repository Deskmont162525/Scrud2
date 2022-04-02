import Header from '../Header'

const Menu = ({ clasImage, onCangeInput, search }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img
              src="https://www.ibser.org/wp-content/uploads/2019/09/logoibserhorizontalblanco.png"
              alt="..."
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li class="nav-item">
                {/* <input type="search" 
                value={search}
                onChange={onCangeInput}
                /> */}
                <div class="search">
                  <input
                    class="search-txt"
                    type="text"
                    value={search}
                    onChange={onCangeInput}
                    placeholder="Palabra clave"
                  />

                  <a class="search-btn" href="#">
                    <i class="fas fa-search"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Header clasImage={clasImage} />
    </>
  )
}

export default Menu
