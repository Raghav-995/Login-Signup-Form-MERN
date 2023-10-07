import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const[date,setDate] = useState();
    const [country, setSelectValue] = useState();
    const[city,setCity] = useState();
    const[gender,setGender] = useState();
    const[phone,setPhone] = useState();
    const navigate = useNavigate();

const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, '');

    setPhone(result);
if (isNumber(result)) {
      console.log('✅ It is a valid number');
    } else {
      console.log('⛔️ It is NOT a valid number');
    }
  };
const handleChanges = (event) => {
    const result = event.target.value.replace(/[^a-z]/gi, '');

    setName(result);
  };
    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:3001/register', {name, email, password,date,country,city,gender,phone})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/login');
            }
            
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3 text-primary'>Register</h2>
                    <form onSubmit={handleSubmit}>
                       <div class='row'> <div class='col-md-6'><div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Name"
                                className="form-control" 
                                id="exampleInputname" value={name}
                                onChange={handleChanges}
                                required
                            /> <div class="valid-feedback">
     				 Looks good!
   				 </div>
                        </div></div>   <div class='col-md-6'>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div></div></div>  
			<div class='row'><div class='col-md-6'>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div></div>
				<div class='col-md-6'>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputDate1" className="form-label">
                                <strong>Date Of Birth</strong>
                            </label>
                            <input 
                                type="date" 
                                placeholder="Enter date"
                                className="form-control" 
                                id="exampleDate1" 
                                onChange={(event) => setDate(event.target.value)}
                                required
                            />
                        </div></div></div>
				<div class='row'><div class='col-md-6'>
					  <div class="md-3 text-start">
    <label for="validationCustom04" class="form-label"><strong>Country</strong></label>
    <select class="form-select" onChange={(event) => setSelectValue(event.target.value)} id="validationCustom01" required>
      <option selected disabled value="">Choose...</option>
      <option value="INDIA">INDIA</option>
        <option value="USA">USA</option>
        <option value="CANADA">CANADA</option>
        <option value="SAUDI">SAUDI</option>
        <option value="JAPAN">JAPAN</option>
      </select>
    
    <div class="invalid-feedback">
      Please select a valid country.
    </div>
  </div></div>
			<div class='col-md-6'>
			 <div class="md-3 text-start">
    <label for="validationCustom04" class="form-label"><strong>City</strong></label>
    <select class="form-select" onChange={(event) => setCity(event.target.value)} id="validationCustom02" required>
      <option selected disabled value="">Choose...</option>
      <option value="Hyderabad">Hyderabad</option>
        <option value="California">California</option>
        <option value="Toronto">Toronto</option>
        <option value="Arab">Arab</option>
        <option value="Tokyo">Tokyo</option>
      </select>
    
    <div class="invalid-feedback">
      Please select a valid city.
    </div>
  </div></div></div>
				<div class='row'><div class='col-md-6'>
				<div class="md-3 text-start">
    <label for="validationCustom04" class="form-label"><strong>Gender</strong></label>
    <select class="form-select" onChange={(event) => setGender(event.target.value)} id="validationCustom03" required>
      <option selected disabled value="">Choose...</option>
      <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Transgender">Transgender</option>
          </select>
    
    <div class="invalid-feedback">
      Please select a valid gender.
    </div>
  </div></div>
			<div class='col-md-6'>
                        <div className="mb-3 text-start">
                            <label htmlFor="examplePhone1" className="form-label">
                                <strong>Phone</strong>
                            </label>
                            <input 
                                type="phone" 
                                placeholder="9951-123-123"
                                className="form-control" 
                                id="examplePhone1" 
				value={phone}  pattern="^\d{4}-\d{3}-\d{4}$"
                                onChange={handleChange}
                                required
                            />
                        </div></div>	
				</div>

<div class="col-12 align-items-left">
    <div class="form-check">
      <input  class="form-check-input is-invalid checkbox-inline" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
      <label class="form-check-label " for="invalidCheck3">
        Agree to terms and conditions provided above information is correct
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>

                    <p className='container my-2'>Already have an account ?</p>
                    <Link to='/login' className="btn btn-secondary">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register