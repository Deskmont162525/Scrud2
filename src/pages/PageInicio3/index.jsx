import Menu from '../../components/element/Menu'
import CardCursP2 from '../../components/element/CardCursP2'
import FormInsCurs from '../../components/element/FormInsCurs'
import { useState } from 'react'
import CardCursP3 from '../../components/element/CardCursP3'

const dataCurso = [
  {
    src:'https://www.youtube.com/embed/1ispGvPfXEs',
    nombre: 'Martin Cuartas',
    subtitulos: 'Solución para una empresa ',
    descripcion:
      'Análisis para solucionar necesidades de una empresa',
    categoria: 'Capacitacion',
    url_curso: 'https://www.youtube.com/watch?v=DAdRO6ByBoU',
    url_imagen:
      'https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_960_720.jpg',
    investigador: {
      nombre: 'Michel Carmona',
      descripcion: 'Un emprendedor',
      profesion: 'Preogramador full stack',
      redes1: 'twiter',
      redes2: 'face',
      redes3: 'linkedin',
      redes4: '3137647574',
      url_imagen:
        'https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/gi_-_racha_0.jpg?itok=Ih_EjUZb',
    },
  },
  {
    src:'https://www.youtube.com/embed/sxu_QNCWiCA',
    nombre: 'Inovación de una empresa publica',
    subtitulos: 'Inovación',
    descripcion:
      'Ingresa en este mundo de los nuevos negocios',

    categoria: 'Informativo',
    url_curso: 'https://www.youtube.com/watch?v=DAdRO6ByBoU',
    url_imagen:
      'https://cdn.pixabay.com/photo/2016/03/03/10/17/social-media-1233873__340.jpg',
    investigador: {
      nombre: 'Mario Sanchez',
      descripcion: 'Un emprendedor',
      profesion: 'Preogramador full stack',
      redes1: 'twiter',
      redes2: 'face',
      redes3: 'linkedin',
      redes4: '3194111191',
      url_imagen:
        'https://cdn.euroinnova.edu.es/img/subidasEditor/3-1625193426-1625543620.webp',
    },
  },
  {
    src:'https://www.youtube.com/embed/GsqJJmVemHI',
    nombre: 'Proyecto de investigacion de las comunidades',
    subtitulos: 'Comunidades',
    descripcion:
      'Capacitacion paso a paso para desarollar una idea con las definiciones del startup',

    categoria: 'Información',
    url_curso: 'https://www.youtube.com/watch?v=DAdRO6ByBoU',
    url_imagen:
      'https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475661_960_720.jpg',
    investigador: {
      nombre: 'Antonio Foronda',
      descripcion: 'Un emprendedor',
      profesion: 'Preogramador full stack',
      redes1: 'twiter',
      redes2: 'face',
      redes3: 'linkedin',
      redes4: '3246017492',
      url_imagen:
        'https://www.rutanmedellin.org/images/1pruebas/foto-persona.jpg',
    },
  },
]
const PageInicio3 = () => {
  const [openFrom, setOpenForm] = useState(false)
  const showForm = () => setOpenForm(!openFrom)
  const [openFrom1, setOpenForm1] = useState(false)
  const showForm1 = () => setOpenForm1(!openFrom1)
  const [search, setSearch] = useState("")
  const onCangeInput = (e) => {
    setSearch(e.target.value)
  }
  const filterState = () => {    
    return dataCurso?.filter(
      (e) =>
      e.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || e?.investigador?.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    )
  }
  return (
    <>
      <Menu clasImage="masthead3" onCangeInput={onCangeInput} search={search}/>

      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Nuestros Eventos</h2>
            <h3 className="section-subheading text-muted">
              Podrás participar de nuestras actividades llenas de conocimiento y experiencias para el desarrollo empresarial.
            </h3>
          </div>
          <div className="text-center">
            <h3 className="section-heading text-uppercase">
              ¿Quieres ser parte de nuestros eventos?
            </h3>
            <a className="btn btn-primary btn-xl " href='#'>
              Has clic aquí
            </a>
          </div>
          {openFrom && <FormInsCurs />}
          <br />          
          <div className="row">
            {
              /* aqui el mapeo de la data  CardCurs*/
              filterState()?.map((k, i) => {
                return (
                  <>
                    <CardCursP3
                      key={i}
                      nombre={k?.nombre}
                      descripcion={k?.descripcion}
                      subtitulos={k?.subtitulos}
                      responsable={k?.responsable}
                      categoria={k?.categoria}
                      url_curso={k?.url_curso}
                      url_imagen={k?.url_imagen}
                      id={i}
                      idI={i}
                      nombreI={k?.investigador?.nombre}
                      descripcionI={k?.investigador?.descripcion}
                      profesionI={k?.investigador?.profesion}
                      redes1I={k?.investigador?.redes1}
                      redes2I={k?.investigador?.redes2}
                      redes3I={k?.investigador?.redes3}
                      url_imagenI={k?.investigador?.url_imagen}
                      src={k.src}
                    />
                  </>
                )
              })
            }
          </div>
          <div className="text-center">
            <h3 className="section-heading text-uppercase">
              ¿Quieres ser parte de nuestros eventos?
            </h3>
            <a
              className="btn btn-primary btn-xl text-uppercase" href='#'>
              Has clic aquí
            </a>
          </div>
          {openFrom1 && <FormInsCurs />}
        </div>
      </section>
    </>
  )
}

export default PageInicio3
