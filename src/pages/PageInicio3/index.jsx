import CardEmp from '../../components/element/CardEmp'
import CardCurs from '../../components/element/CardCurs'
import Menu from '../../components/element/Menu'

const dataEmprende = [
  {
    nombre: 'Emprendedor 1',
    descripcion: 'Un emprendedor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.',
    profesion: 'Preogramador full stack',
    redes1: 'twiter',
    redes2: 'face',
    redes3: 'linkedin',
    url_imagen:
      'https://st2.depositphotos.com/43673054/42963/v/1600/depositphotos_429633430-stock-illustration-deadpool-weapon.jpg',
  },
  {
    nombre: 'Emprendedor 2',
    descripcion: 'Un emprendedor',
    profesion: 'Preogramador full stack',
    redes1: 'twiter',
    redes2: 'face',
    redes3: 'linkedin',
    url_imagen:
      'https://st2.depositphotos.com/43673054/42963/v/1600/depositphotos_429633430-stock-illustration-deadpool-weapon.jpg',
  },
  {
    nombre: 'Emprendedor 3',
    descripcion: 'Un emprendedor',
    profesion: 'Preogramador full stack',
    redes1: 'twiter',
    redes2: 'face',
    redes3: 'linkedin',
    url_imagen:
      'https://st2.depositphotos.com/43673054/42963/v/1600/depositphotos_429633430-stock-illustration-deadpool-weapon.jpg',
  },
]
const dataCurso = [
    {
      nombre: 'Curso de Programación 1',
      subtitulos:'Lenguaje de py',
      descripcion: 'Un emprendedor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.',
      responsable: 'Ivan Duque',
      categoria: 'Web',
      url_curso:'https://www.youtube.com/watch?v=DAdRO6ByBoU',
      url_imagen:
        'https://st2.depositphotos.com/43673054/42963/v/1600/depositphotos_429633430-stock-illustration-deadpool-weapon.jpg',
    },
    {
        nombre: 'Curso de Programación 1',
        subtitulos:'Lenguaje de py',
        descripcion: 'Un emprendedor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.',
        responsable: 'Ivan Duque',
        categoria: 'Web',
        url_curso:'https://www.youtube.com/watch?v=DAdRO6ByBoU',
        url_imagen:
          'https://st2.depositphotos.com/43673054/42963/v/1600/depositphotos_429633430-stock-illustration-deadpool-weapon.jpg',
    },
    {
        nombre: 'Curso de Programación 1',
        subtitulos:'Lenguaje de py',
        descripcion: 'Un emprendedor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.',
        responsable: 'Ivan Duque',
        categoria: 'Web',
        url_curso:'https://www.youtube.com/watch?v=DAdRO6ByBoU',
        url_imagen:
          'https://st2.depositphotos.com/43673054/42963/v/1600/depositphotos_429633430-stock-illustration-deadpool-weapon.jpg',
    },
  ]
const PageInicio3 = () => {
  return (
    <>
      <Menu />
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            {dataEmprende?.map((e, i) => {
              return (
                <CardEmp
                  key={i}
                  nombre={e.nombre}
                  descripcion={e.descripcion}
                  profesion={e.profesion}
                  redes1={e.redes1}
                  redes2={e.redes2}
                  redes3={e.redes3}
                  url_imagen={e.url_imagen}
                />
              )
            })}
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
              <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    {/* aqui el mapeo de la data  CardCurs*/
                        dataCurso?.map((k, i) => {
                            return (
                              <CardCurs
                                key={i}
                                nombre={k.nombre}
                                descripcion={k.descripcion}
                                subtitulos={k.subtitulos}
                                responsable={k.responsable}
                                categoria={k.categoria}
                                url_curso={k.url_curso}
                                url_imagen={k.url_imagen}
                                id={i}
                              />
                            )
                          })    
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default PageInicio3
