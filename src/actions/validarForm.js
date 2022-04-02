export const validarForm = (stateFrom, setError) => {
  if (stateFrom?.nombre === '') {
    setError((state) => {
      return {
        ...state,
        notSend: true,
        nombre: true,
      }
    })
    return false
  } else if (stateFrom?.profesion === '') {
    setError((state) => {
      return {
        ...state,
        notSend: true,
        profesion: true,
      }
    })
    return false
  } else if (stateFrom?.redes1 === '') {
    setError((state) => {
      return {
        ...state,
        notSend: true,
        redes1: true,
      }
    })
    return false
  } else if (stateFrom?.redes2 === '') {
    setError((state) => {
      return {
        ...state,
        notSend: true,
        redes2: true,
      }
    })
    return false
  } else if (stateFrom?.redes3 === '') {
    setError((state) => {
      return {
        ...state,
        notSend: true,
        redes3: true,
      }
    })
    return false
  } else if (stateFrom?.redes4 === '') {
    setError((state) => {
      return {
        ...state,
        notSend: true,
        redes4: true,
      }
    })
    return false
  } 
  else if (stateFrom?.descripcion === '') {
    setError((state) => {
      return {
        ...state,
        notSend: true,
        descripcion: true,
      }
    })
    return false
  } else {
    return true
  }
}

export const validarFormEmpren = (stateFrom, setError) => {
    if (stateFrom?.nombre === '') {
      setError((state) => {
        return {
          ...state,
          notSend: true,
          nombre: true,
        }
      })
      return false
    } else if (stateFrom?.profesion === '') {
      setError((state) => {
        return {
          ...state,
          notSend: true,
          profesion: true,
        }
      })
      return false
    } else if (stateFrom?.correo === '') {
      setError((state) => {
        return {
          ...state,
          notSend: true,
          correo: true,
        }
      })
      return false
    } 
    else if (stateFrom?.descripcion === '') {
      setError((state) => {
        return {
          ...state,
          notSend: true,
          descripcion: true,
        }
      })
      return false
    } else {
      return true
    }
  }
  