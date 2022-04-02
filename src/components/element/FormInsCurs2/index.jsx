import InputTexArea from '../../ui/InputTexArea'
import InputType from '../../ui/InputType'

const FormInsCurs2 = ({ state, onChangeInput, onSubmit, error }) => {
  return (
    <section>
      <div className="formProOne">
        <div className="titleSubtitle">
          <h2>Inscripcion al startup</h2>
          <p>Diligencia las información principal del startup</p>
        </div>
        <form
        onSubmit={onSubmit}
        >
          <div className="row">
            <div className="col-md-6">
              <InputType
                type="text"
                name="nombre"
                label="Ingresa el nombre del curso"
                value={state?.nombre}
                handleChange={onChangeInput}
                error={error?.nombre}
                textError={error?.textError?.nombre}
              />
            </div>
            <div className="col-md-6">
              <InputType
                type="text"
                name="subtitulos"
                label="Ingresa un subtitulo"
                value={state?.subtitulos}
                handleChange={onChangeInput}
                error={error?.subtitulos}
                textError={error?.textError?.subtitulos}
              />
            </div>
            <div className="col-md-6">
              <InputType
                type="text"
                name="investigador"
                label="Ingresa el nombre de la persona a cargo"
                value={state?.investigador?.nombre}
                handleChange={onChangeInput}
                error={error?.investigador}
                textError={error?.textError?.investigador.nombre}
              />
            </div>
            <div className="col-md-6">
              <InputType
                type="text"
                name="categoria"
                label="Ingresa la categoria del curso"
                value={state?.categoria}
                handleChange={onChangeInput}
                error={error?.categoria}
                textError={error?.textError?.categoria}
              />
            </div>
            <div className="col-md-6">
              <InputType
                type="text"
                name="url_curso"
                label="Ingresa la url del curso"
                value={state?.url_curso}
                handleChange={onChangeInput}
                error={error?.url_curso}
                textError={error?.textError?.url_curso}
              />
            </div>
           
            <div className="col-md-6">
              <InputType
                type="file"
                name="url_imagen"
                label="Ingresa tu imagen del curso"
                value={state?.url_imagen}
                handleChange={onChangeInput}
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
          <button className="btn btn-primary btn-xl" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </section>
  )
}

export default FormInsCurs2
