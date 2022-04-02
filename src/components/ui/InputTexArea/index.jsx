const InputTexArea = ({
    name,
    value,
    label,
    handleChange,
    title,
    error,
    textError,
    required,
  }) => {
    return (
      <div className="form-group mb-3">
        <label className="form-label">{label}</label>
        <textarea
          className= {error === true ? "form-control is-invalid" : error === false ? "form-control is-valid" :"form-control"}
          id={name} 
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          title={title}
        />
        {textError ? <div className="invalid-feedback">{textError}</div>
          : <div className="invalid-feedback">Campo obligatorio *</div>
         } 
      </div>
    )
  }
  
  export default InputTexArea
  