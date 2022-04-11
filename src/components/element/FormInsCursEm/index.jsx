import InputType from '../../ui/InputType'
import InputSelect2 from '../../ui/InputSelect2'
const dataOptionsPerso = [
  { id: 'CC', name: 'Cédula', value: 'CC' },
  { id: 'CE', name: 'Cédula extranjería', value: 'CE' },
  { id: 'PP', name: 'Pasaporte', value: 'PP' },
  { id: 'NIT', name: 'NIT', value: 'NIT' },
]
const FormInsCursEmpren = ({ state, onChangeInput, onSubmit, error, inputFile }) => {
  return (
    <section>
      <div className="formProOne">
        <div className="titleSubtitle">
          <h2>Inscripción</h2>
          <p>Diligencia las información principal</p>
        </div>
        <form
        onSubmit={onSubmit}
        >
          <div className="row">
          <div className="col-md-6">
              <InputSelect2
              dataOptions={dataOptionsPerso}
              />
            </div>
          <div className="col-md-6">
              <InputType
                type="text"
                name="numdocument"
                label="Ingresa tu número de documento"
                value={state?.numdocument}
                handleChange={onChangeInput}
                error={error?.numdocument}
                textError={error?.textError?.numdocument}
              />
            </div>            
            <div className="col-md-6">
              <InputType
                type="text"
                name="nombre"
                label="Ingresa tu nombre completo"
                value={state?.nombre}
                handleChange={onChangeInput}
                error={error?.nombre}
                textError={error?.textError?.nombre}
              />
            </div>
            
            <div className="col-md-6">
              <InputType
                type="email"
                name="correo"
                label="Ingresa tu Correo"
                value={state?.correo}
                handleChange={onChangeInput}
                error={error?.correo}
                textError={error?.textError?.correo}
              />
            </div>
          </div>
          {error?.notSend && (
             <div className="invalid-feedback">{error?.textError}</div> 
          )} 
          <button className="btn btn-primary btn-xl" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </section>
  )
}

export default FormInsCursEmpren
