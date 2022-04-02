import InputTexArea from '../../ui/InputTexArea'
import InputType from '../../ui/InputType'

const FormInsCursEmpren = ({ state, onChangeInput, onSubmit, error, inputFile }) => {
  return (
    <section>
      <div className="formProOne">
        <div className="titleSubtitle">
          <h2>Inscripcion Emprendedor</h2>
          <p>Diligencia las información principal de los Emprendedores</p>
        </div>
        <form
        onSubmit={onSubmit}
        >
          <div className="row">
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
                type="text"
                name="profesion"
                label="Ingresa tu profesion"
                value={state?.profesion}
                handleChange={onChangeInput}
                error={error?.profesion}
                textError={error?.textError?.profesion}
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
            <div className="col-md-6">
              <InputType
                type="file"
                name="url_imagen"
                label="Ingresa tu imagen de perfil"
                handleChange={inputFile}
                accept="image/*"
                error={error?.url_imagen}
                textError={error?.textError?.url_imagen}
              />
            </div>
            <div className="col-md-12">
              <InputTexArea
                name="descripcion"
                label="Ingresa tu descripción"
                value={state?.descripcion}
                handleChange={onChangeInput}
                error={error?.descripcion}
                textError={error?.textError?.descripcion}
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
