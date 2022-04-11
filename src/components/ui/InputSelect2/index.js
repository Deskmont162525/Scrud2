// import '../../assets/css/style8.css';
import React from 'react'

function InputSelect2({ label, name, dataOptions, onChangeSelect,valueSelect,id, error }) {
    const showData = dataOptions?.map((e) => {
        return (
            <option key={e.id} value={e.value}>{e.name}</option>
        )
    })
    return (
        <div className="chooseTicketType">
            <div className="form-group mb-3">
                <label className="form-label">{label}</label>
                <select className={error === true ? "form-select is-invalid" : error === false ? "form-select is-valid" :"form-select"}
                name={name}
                id={id}
                value={valueSelect}
                onChange={onChangeSelect}
                required                
                >
                    <option value="">Selecciona una opción</option>
                    {showData}
                </select>
                <div className="valid-feedback"></div>
                <div className="invalid-feedback">Selecciona una opción *</div>
            </div>
        </div>
    )
}

export default InputSelect2;