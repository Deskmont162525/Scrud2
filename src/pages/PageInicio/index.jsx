import CardEmp from '../../components/element/CardEmp'
import CardCurs from '../../components/element/CardCurs'
import Menu from '../../components/element/Menu'
import CardArbol from '../../components/element/CardArbol'
import { useState } from 'react'
import { validarFormEmpren } from '../../actions/validarForm'
import Footer from '../../components/element/Footer'
import { dataCurso, dataEmprende } from '../../actions/objets'


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
      <Footer />
    </>
  )
}

export default PageInicio
