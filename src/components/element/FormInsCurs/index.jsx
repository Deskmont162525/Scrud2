import InputTexArea from '../../ui/InputTexArea'
import InputType from '../../ui/InputType'

const FormInsCurs = ({ state, onChangeInput, onSubmit, error, inputFile }) => {
  return (
    <section>
      <div className="formProOne">
        <div className="titleSubtitle">
          <h2>Inscripción a Investigación</h2>
          <p>Diligencia la información principal para ser parte de nuestro equipo de investigadores.</p>
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
                type="text"
                name="redes1"
                label="Ingresa tu linck de twiter"
                value={state?.redes1}
                handleChange={onChangeInput}
                error={error?.redes1}
                textError={error?.textError?.redes1}
              />
            </div>
            <div className="col-md-6">
              <InputType
                type="text"
                name="redes2"
                label="Ingresa tu linck de facebook"
                value={state?.redes2}
                handleChange={onChangeInput}
                error={error?.redes2}
                textError={error?.textError?.redes2}
              />
            </div>
            <div className="col-md-6">
              <InputType
                type="text"
                name="redes3"
                label="Ingresa tu linck de linkedin"
                value={state?.redes3}
                handleChange={onChangeInput}
                error={error?.redes3}
                textError={error?.textError?.redes3}
              />
            </div>
            <div className="col-md-6">
              <InputType
                type="text"
                name="redes4"
                label="Ingresa tu número whatsapp"
                value={state?.redes4}
                handleChange={onChangeInput}
                error={error?.redes4}
                textError={error?.textError?.redes4}
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
            <div className="col-md-6">
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

export default FormInsCurs
