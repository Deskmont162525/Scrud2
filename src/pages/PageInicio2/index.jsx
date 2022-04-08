import Menu from '../../components/element/Menu'
import CardCursP2 from '../../components/element/CardCursP2'
import FormInsCurs from '../../components/element/FormInsCurs'
import { useState } from 'react'
import { validarForm } from '../../actions/validarForm'
import Footer from '../../components/element/Footer'
import { dataCurso } from '../../actions/objets'


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
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PageInicio2
