import React,{useContext} from 'react';
import Notes from './Notes';
export const Home = () => {


  return (

    <div class="container">
       <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

      <div className="conatiner my-3">
      <h1>Add a Note</h1>

   <form>

     <div class="mb-3">
   
    <label for="exampleInputEmail1" className="form-label">Email address</label>

    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  
  </div>
 
  <div class="mb-3">
  
    <label for="exampleInputPassword1" className="form-label">Password</label>
    
    <input type="password" className="form-control" id="exampleInputPassword1" />
  
  </div>

  <div class="mb-3 form-check">
  
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
 
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>

</form>

</div>

<Notes />
</div>
  
  )
}
