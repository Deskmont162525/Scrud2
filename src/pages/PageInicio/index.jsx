import CardEmp from '../../components/element/CardEmp'
import CardCurs from '../../components/element/CardCurs'
import Menu from '../../components/element/Menu'
import CardArbol from '../../components/element/CardArbol'
import { useState } from 'react'
import { validarFormEmpren } from '../../actions/validarForm'

const dataEmprende = [
  {
    fecha: '2009-2011',
    nombre: 'Antonio Foronda',
    descripcion:
      'Un emprendedor que supero todos sus miedos y ahora es el mejor en todo lo que se propone',
    profesion: 'Programador Web Full Stack',
    redes1: 'twiter',
    redes2: 'face',
    redes3: 'linkedin',
    redes4: 'whatssap',
    url_imagen:
      'https://www.rutanmedellin.org/images/1pruebas/foto-persona.jpg',
  },
  {
    fecha: '2009-2020',
    nombre: 'Michel Carmona',
    descripcion: 'Persona creativa responsable con iniciativa Quiso superar su lentitud para toma de desiciones y gracias a nuestros cursos lo ha logrado.',
    profesion: 'Preogramadora Full Stack',
    redes1: 'twiter',
    redes2: 'face',
    redes3: 'linkedin',
    redes4: 'whatssap',
    url_imagen:
      'https://us.123rf.com/450wm/leungchopan/leungchopan1503/leungchopan150300977/37362478-retrato-de-hombre-asi%C3%A1tico.jpg?ver=6',
  },
  {
    fecha: '2009-2021',
    nombre: 'Mario Sanchez',
    descripcion: 'Persona con iniciativa conviccion y con ideas firmes Para lo cual quiso tomar nuestro curso de emprendimiento y esta full.',
    profesion: 'Preogramadora full stack',
    redes1: 'twiter',
    redes2: 'face',
    redes3: 'linkedin',
    redes4: 'whatssap',
    url_imagen:
      'https://cdn.pixabay.com/photo/2016/01/17/14/23/albert-einstein-1144965_960_720.jpg',
  },
  {
    fecha: '2009-2011',
    nombre: 'Agregado para prueba',
    descripcion:
      'Un emprendedor que supero todos sus miedos y ahora es el mejor en todo lo que se propone',
    profesion: 'Programador Web Full Stack',
    redes1: 'twiter',
    redes2: 'face',
    redes3: 'linkedin',
    redes4: 'whatssap',
    url_imagen:
      'https://www.rutanmedellin.org/images/1pruebas/foto-persona.jpg',
  },
]
const dataCurso = [
  {
    src:'https://www.youtube.com/embed/VeZyaqM5ugw',
    nombre: 'Aceleracion de Empresas',
    subtitulos: 'Startup',
    descripcion:
      'Aprende a poner tus ideas en marcha',
    categoria: 'Curso de emprendimiento 2',
    url_curso: 'https://www.youtube.com/watch?v=DAdRO6ByBoU',
    url_imagen:
      'https://cdn.pixabay.com/photo/2017/02/01/09/31/arrows-2029160_960_720.png',
    investigador: {
      nombre: 'Michel Carmona',
      descripcion: 'Un emprendedor',
      profesion: 'Preogramador full stack',
      redes1: 'twiter',
      redes2: 'face',
      redes3: 'linkedin',
      redes4: 'whatssap',
      url_imagen:
        'https://www.rutanmedellin.org/images/1pruebas/foto-persona.jpg',
    },
  },
  
  {
    src:'https://www.youtube.com/embed/JwywjDlxtSI',
    nombre: 'Que es y como funciona el startup',
    subtitulos: 'Definicion de Startup',
    descripcion:
      'Ingresa en este mundo de los nuevos negocios',

    categoria: 'Informativo',
    url_curso: 'https://www.youtube.com/watch?v=DAdRO6ByBoU',
    url_imagen:
      'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg',
    investigador: {
      nombre: 'Michel Carmona',
      descripcion: 'Un emprendedor',
      profesion: 'Preogramador full stack',
      redes1: 'twiter',
      redes2: 'face',
      redes3: 'linkedin',
      redes4: 'whatssap',
      url_imagen:
        'https://cdn.euroinnova.edu.es/img/subidasEditor/3-1625193426-1625543620.webp',
    },
  },
  {
    src:'https://www.youtube.com/embed/Lrab91Msiho',
    nombre: 'Paso a paso para crear startup',
    subtitulos: 'proyeccion de ideas',
    descripcion:
      'Capacitacion paso a paso para desarollar una idea con las definiciones del startup',

    categoria: 'Capacitación',
    url_curso: 'https://www.youtube.com/watch?v=DAdRO6ByBoU',
    url_imagen:
      'https://cdn.pixabay.com/photo/2019/02/21/14/09/handshake-4011419_960_720.jpg',
    investigador: {
      nombre: 'Mario Sanchez',
      descripcion: 'Un emprendedor',
      profesion: 'Preogramador full stack',
      redes1: 'twiter',
      redes2: 'face',
      redes3: 'linkedin',
      redes4: 'whatssap',
      url_imagen:
        'https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/gi_-_racha_0.jpg?itok=Ih_EjUZb',
    },
  },
]
const PageInicio = () => {
  const [search, setSearch] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [error, setError] = useState()
  const [openFrom, setOpenForm] = useState(false)
  const [stateFrom, setStateForm] = useState({
    fecha: Date(),
    nombre: '',
    descripcion: '',
    profesion: '',
    correo: '',
    url_imagen: '',
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
          textError:"Tienes campos sin completar *"
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
  const inputFile = (e) => {
    setStateForm((state) => {
      return {
        ...state,
        [e.target.name]: e.target.files[0].name,
      }
    })
    if (e.target.value === '') {       
      setError((state) => {
        return {
          ...state,
          notSend: true,
          [e.target.name]: true,
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
  const showForm = () => {
    setConfirm(false)
    setOpenForm(!openFrom)
  }
  const onCangeInputSearch = (e) => {
    setSearch(e.target.value)
  }

  const filterState = () => {
    return dataCurso?.filter((e) => e.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const respons = validarFormEmpren(stateFrom,setError)
    if(respons){
      // console.log("respuesta", respons)
      setConfirm(true)
    setOpenForm(false)
    e.target.reset()
    }    
  }
  return (
    <>
      <Menu clasImage="masthead" onCangeInput={onCangeInputSearch} search={search} />
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Nuestros Productos, Servicios y Startups
            </h2>
            <h3 className="section-subheading text-muted">
              Aquí encontrarás como desarrollar tus ideas de negocios
              escalables, utilizando conocimientos y herramientas de las
              startups globlales. También puedes descargar material de apoyo,
              recursos e inscribirte para participar.
            </h3>
          </div>
          <div className="row">
            {
              /* aqui el mapeo de la data  CardCurs*/
              filterState()?.map((k, i) => {
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
                    confirm={confirm}
                    onSubmit={onSubmit}
                    error={error}
                    openFrom={openFrom}
                    showForm={showForm}
                    onChangeInput={onChangeInput}
                    stateFrom={stateFrom}
                    inputFile={inputFile}
                    src={k.src}
                  />
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Ultimos Casos de Exito{' '} 
            </h2>
            <h3 className="section-subheading text-muted">
              A continuación encontrarás los testimonios de nuestros
              emprendedores que han tenido exito en sus ideas de negocio.
            </h3>
          </div>
          <ul className="timeline">
            {dataEmprende?.map((k, i) => {
              let clasInvert = ''
              i % 2 === 0
                ? (clasInvert = 'timeline-inverted')
                : (clasInvert = '')
              return (
                <CardArbol
                  clasInvert={clasInvert}
                  key={i}
                  fecha={k?.fecha}
                  nombre={k?.nombre}
                  profesion={k?.profesion}
                  descripcion={k?.descripcion}
                  redes1={k?.redes1}
                  redes2={k?.redes2}
                  redes3={k?.redes3}
                  url_imagen={k?.url_imagen}
                />
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default PageInicio
