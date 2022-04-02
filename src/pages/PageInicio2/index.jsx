import Menu from '../../components/element/Menu'
import CardCursP2 from '../../components/element/CardCursP2'
import FormInsCurs from '../../components/element/FormInsCurs'
import { useState } from 'react'
import { validarForm } from '../../actions/validarForm'

const dataCurso = [
  {
    src:'https://www.youtube.com/embed/yaSNyls5ENY',
    nombre: 'Martin Cuartas',
    subtitulos: 'Solución para una empresa ',
    descripcion:
      'Análisis para solucionar necesidades de una empresa',
    categoria: 'Capacitacion',
    url_curso: 'https://www.youtube.com/watch?v=DAdRO6ByBoU',
    url_imagen:
      'https://cdn.pixabay.com/photo/2016/12/31/16/52/dart-1943313_960_720.jpg',
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
const PageInicio2 = () => {
  const [openFrom, setOpenForm] = useState(false)
  const showForm = () => {
    setOpenForm(!openFrom)
    setConfirm(false)
  }
  const [openFrom1, setOpenForm1] = useState(false)
  const showForm1 = () => setOpenForm1(!openFrom1)
  const [search, setSearch] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [confirm1, setConfirm1] = useState(false)
  const [error, setError] = useState()
  const [stateFrom, setStateForm] = useState({
    nombre: '',
    descripcion: '',
    subtitulos: '',
    categoria: '',
    url_curso: '',
    url_imagen: '',
    investigador: '',
  })

  const onChangeInput = (e) => {
    setStateForm((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      }
    })
    if (e.target.value === '') {
      setError((state) => {
        return {
          ...state,
          notSend: true,
          [e.target.name]: true,
          textError: 'Tienes campos sin completar *',
        }
      })
    } else {
      setError((state) => {
        return {
          ...state,
          notSend: false,
          [e.target.name]: false,
        }
      })
    }
  }
  const onCangeInputSearch = (e) => {
    setSearch(e.target.value)
  }

  const filterState = () => {
    return dataCurso?.filter(
      (e) =>
      e.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || e?.investigador?.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const respons = validarForm(stateFrom, setError)
    if (respons) {
      setConfirm(true)
    setOpenForm(false)
    }
    
  }
  return (
    <>
      <Menu
        clasImage="masthead2"
        onCangeInput={onCangeInputSearch}
        search={search}
      />

      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Investigación y Consultoría
            </h2>
            <h3 className="section-subheading text-muted">
              Aquí encontrarás los detalles de las investigaciones y
              consultorías recientes, con sus investigadores a cargo. Con los
              cuales puedes interactuar por medio de los enlaces de sus redes
              sociales y demás.También puedes descargar los brochure de cada
              investigación y consultoría.{' '}
            </h3>
          </div>
          <div className="text-center">
            <h3 className="section-heading text-uppercase">
              ¿Quieres ser parte de nuestro grupo de investigadores?
            </h3>
            <a className="btn btn-primary btn-xl " onClick={showForm}>
              Has clic aquí
            </a>
          </div>
          {openFrom && (
            <FormInsCurs
              onChangeInput={onChangeInput}
              stateFrom={stateFrom}
              onSubmit={onSubmit}
              error={error}
            />
          )}
          {confirm && (
            <div className="portfolio-caption">
              <br />
              <div className="portfolio-caption-heading">REGISTRO CORRECTO</div>
              <div className="portfolio-caption-subheading text-muted">
                Gracias por tu registro, recibiras un correo con la información
                pertinente.
              </div>
            </div>
          )}
          <br />
          <div className="row">
            {
              /* aqui el mapeo de la data  CardCurs*/
              filterState()?.map((k, i) => {
                return (
                  <>
                    <CardCursP2
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
                      redes4I={k?.investigador?.redes4}
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
              ¿Quieres ser parte de nuestro grupo de investigadores?
            </h3>
            <a
              className="btn btn-primary btn-xl text-uppercase"
              onClick={showForm1}
            >
              Has clic aquí
            </a>
          </div>
          {openFrom1 && (
            <FormInsCurs
              onChangeInput={onChangeInput}
              stateFrom={stateFrom}
              onSubmit={onSubmit}
              error={error}
            />
          )}
          {confirm1 && (
            <div className="portfolio-caption">
              <br />
              <div className="portfolio-caption-heading">REGISTRO CORRECTO</div>
              <div className="portfolio-caption-subheading text-muted">
                Gracias por tu registro, recibiras un correo con la información
                pertinente.
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default PageInicio2
