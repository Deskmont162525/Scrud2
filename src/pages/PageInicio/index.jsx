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
const PageInicio = () => {
  return (
    <>
      <Menu />  
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

export default PageInicio
