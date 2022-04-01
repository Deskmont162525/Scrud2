const InputType = ({
  name,
  value,
  type,
  label,
  handleChange,
  pattern,
  title,
  error,
  textError
}) => {
  return (
    <div className="form-group mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className= {error === true ? "form-control is-invalid" : error === false ? "form-control is-valid" :"form-control"}
        id={name} //"nombrecompleto"
        name={name}
        value={value}
        aria-describedby={name}
        onChange={handleChange}
        required="required"
        pattern={pattern}
        title={title}
      />
      {textError ? <div className="invalid-feedback">{textError}</div>
        : <div className="invalid-feedback">Campo obligatorio *</div>
       } 
    </div>
  )
}

export default InputType
