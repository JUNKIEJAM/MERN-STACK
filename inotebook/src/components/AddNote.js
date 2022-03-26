import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext';

export const AddNote = () => {

    const context=useContext(noteContext);
    const {addNote}=context;

    const [note,setNote]=useState({title:"",description:"",tag:"default"})

    const handleClick=(e)=>{
        e.prevetDEfault();
 addNote(note.title,note.description,note.tag);
    }

    const onChange=(e)=>{
setNote({...note,[e.target.name]: e.target.value})
    }

  return (
    <div>



         <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

      <div className="conatiner my-3">
  <h1>Add a Note</h1>


   <form>

     <div className="mb-3">
   
    <label htmlFor="title" className="form-label">Title</label>

    <input type="title" className="form-control" id="title" name="title" aria-describedby="emailHelp"
    onChange={onChange} />
   
    
  
  </div>
 
  <div className="mb-3">
  
    <label htmlFor="description" className="form-label">Description</label>
    
    <input type="text" className="form-control" id="description" name="description"  onChange={onChange}
    />
  
  </div>


  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>

</form>

</div>

    </div>
  )
}
