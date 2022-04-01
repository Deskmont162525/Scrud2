import InputType from "../../ui/InputType"

const FormAdmin = ({ state, setState }) => {
  return (
    <form
    // onSubmit={(e)=>handledSubmitEntradaUpdate(e,idunic)}
    >
      <div className="row">
        <div className="col-md-6">
          <InputType 
          type="text"
          label="eeeeeeeeeee"
          
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <InputType 
          type="text"
          label="aaaaaaaaaaaaaa"
          
          />
        </div>
      </div>
    </form>
  )
}

export default FormAdmin
