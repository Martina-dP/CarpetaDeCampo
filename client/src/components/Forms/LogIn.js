import React from "react";
import { Link } from "react-router-dom";

import style from "././LogIn.module.css"

// function validate(input) {

//     const errors = {};
//     if (!input.name) {
//       errors.name = "Requerido";
//     }
//     if (!input.email) {
//       errors.email = "Requerido";
//     }
//     if (
//       !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
//         input.email
//       )
//     ) {
//       errors.email = "Dirección de mail no valida";
//     }
//     if (!input.password) {
//       errors.password = "Requerido";
//     } else if (`${input.password}`.length < 7) {
//       errors.password = "La contraseña debe ser de al menos 7 caracteres";
//     }
//     return errors;
//   }

function LogIn(){ 

    // const [errors, setError] = useState({ a: "" });

// const [input, setInput] = useState({
//     mail: "",
//     password: ""
// })

// function handleChange(e){
    // setInput({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   });
    //   setError(
    //     validate({
    //       ...input,
    //       [e.target.name]: e.target.value,
    //     })
    //   );
// }

// function handleSubmit(e){
//     e.preventDefault()
    // if (Object.values(errors).length > 1)
    // Swal.fire('Completa la informacion solicitada')
    // else {
    //   dispatch(newClient(input));
    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Usuario creado correctamente',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    //   setInput({
    //     image: "",
    //     dni: "",
    //     name: "",
    //     surname: "",
    //     phone: "",
    //     email: "",
    //     password: "",
    //     password2: "",
    //     description: ""
    //   });
    //   history.push("/login");
    // }
// }

    return (
        <div className={style.total} > 
            <form >
                <div >
                    <label> Mail : </label>
                    <input 
                        type = "text"
                        placeholder="Ejemplo@gmail.com"
                        // value = {input.name}
                        name = "mail"
                        // onChange = {e => handleChange(e) }
                    />
                        {/* {errors.name && (
                            <p> {errors.name} </p>
                        )} */}
                </div>
                <div>
                    <label> Contraseña : </label>
                    <input
                        type = "text"
                        placeholder="********"
                        // value = 
                        name = "password"
                    />
                </div>
                <button type = "submit"> iniciar sesion </button>
            </form>

            <div>
                No tenes una cuenta? 
                <Link to = "/SingIn">
                    <button > crear cuenta </button>
                </Link>
            </div>
            <div>
                Te olvidaste la contraseña? 
                <Link to = "/ResetPassword">
                    <button > Recuperar contraseña </button>
                </Link>
            </div>
            <Link to = "/">
                <button > Back to Home </button>
            </Link>
           
        </div>
    )
};

export default LogIn;