import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = ({name,email,phone,subject,message}) => {
  const errors = {};
  if(name === "") errors.name = "Se requiere un nombre";
  if(!regexEmail.test(email)) errors.email = "Debe ser un correo electrónico";
  if(phone<=0) errors.phone = "Sólo números positivos";
  if(!subject) errors.subject = "Se requiere un asunto";
  if(!message) errors.message = "Se requiere un mensaje";     
  return errors;
}

export default function Contact () {
  
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) =>{

    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    },);

    setErrors(validate({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = event =>{
    event.preventDefault();

    if(!Object.keys(errors).length){
      alert("Datos completos");
      setErrors({name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',});
      setInputs({
      name: '',
      email: '',
      phone: 0,
      subject: '',
      message: '',
      });
    }
    else{
      alert("Debes corregir los errores");
    }
    
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
          <br></br>
          <input htmlFor="name" onChange={handleChange} name="name" placeholder="Escribe tu nombre..." type="text" value={inputs.name} className={errors.name && 'warning'}></input>
          <p className='danger'>{errors.name}</p>
          <hr></hr>
        
        <label>Correo Electrónico:</label>
          <br></br>
          <input htmlFor="email" onChange={handleChange} name="email" placeholder="Escribe tu email..." type="text" value={inputs.email} className={errors.email && 'warning'}></input>
          <p className='danger'>{errors.email}</p>
          <hr></hr>
        

        <label>Teléfono:</label>
          <br></br> 
          <input htmlFor="phone" onChange={handleChange} name="phone" placeholder="Escribe un teléfono..." type="number" value={inputs.phone} className={errors.phone && 'warning'}></input>
          <p className='danger'>{errors.phone}</p>

        

        <label>Asunto:  </label>
          <br></br>
          <input htmlFor="subject" onChange={handleChange} name="subject" placeholder="Escribe el asunto..." type="text" value={inputs.subject} className={errors.subject && 'warning'}></input>
          <p className='danger'>{errors.subject}</p>
       
      

        <label>Mensaje:</label>
          <br></br>
          <textarea htmlFor="message" onChange={handleChange} name="message" placeholder="Escribe tu mensaje..." type="text" value={inputs.message} className={errors.message && 'warning'}></textarea>
          <p className='danger'>{errors.message}</p>
        
        
        <button type="submit">Enviar</button>
      </form>
    </div>
    )
}
