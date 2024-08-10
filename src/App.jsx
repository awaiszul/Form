import React, { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({
    firstname : "",
    lastname : "",
    username : "",
    email : "",
    password : ""
  })

  const[error, setError]=useState({});

  const handlesubmit =(e)=>{
    e.preventDefault() 
    // console.log(formData);
    const validateError = validateform(formData);
    setError(validateError)
    if (Object.keys(validateError).length===0) {
      console.log("Successfully Submitted", formData);
      
    }
  }

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value} )
  }

  const validateform = (data)=>{
    let error ={};
    if (!data.firstname) {
      error.firstname = "First Name is required"
    }
    if (!data.lastname) {
      error.lastname = "Last Name is required"
    }
    if (!data.username) {
      error.username = "username is required"
    }
    if (!data.email) {
      error.email = "Email is required"
    }
    else if (!validateEmail(data.email)) {
      error.email="Invalid Email"
    }
    if (!data.password) {
      error.password = "Password is required"
    }
    return error
  }


  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
  return (
    <>
      <div className="container">
        
        <h3>Registration Form</h3>
        <div className="form-wrapper">
          
          <form action=""  onSubmit={handlesubmit}>
            <div className="form-control">
              <input type="text" name='firstname' autoComplete='off' placeholder='First Name' onChange={handleChange} value={formData.firstname} />
              {error.firstname && <span>{error.firstname} </span> }
            </div>
            <div className="form-control">
              <input type="text" name='lastname' autoComplete='off' placeholder='Last Name' onChange={handleChange} value={formData.lastname} />
              {error.lastname && <span>{error.lastname} </span> }
            </div>
            <div className="form-control">
              <input type="text" name='username' autoComplete='off' placeholder='User Name' onChange={handleChange} value={formData.username} />
              {error.username && <span>{error.username} </span> }
            </div>
            <div className="form-control">
              <input type="email" name='email' autoComplete='off' placeholder='Email' onChange={handleChange} value={formData.email} />
              {error.email && <span>{error.email} </span> }
            </div>
            <div className="form-control">
              <input type="password" name='password' autoComplete='off' placeholder='Password' onChange={handleChange} value={formData.password} />
              {error.password && <span>{error.password} </span> }
            </div>
            <button type='Submit'> Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
