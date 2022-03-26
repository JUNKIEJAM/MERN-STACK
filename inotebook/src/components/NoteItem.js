import React from 'react'

 const NoteItem = (props) => {
  
  
    const {note}=props;
 
    return (

        <div className="col-md-3">
         <div className="card my-3">
            <div className="card-body">
             <div className="d-flex align-items-center">

                     <h5 class="card-title">{note.title}</h5>
   
    <i className="fa fa-edit mx-2"></i>
    <i className="fa fa-trash mx-2"></i>

    </div>

    <p class="card-text">{note.description}</p>
   
  </div>
</div>
</div>
  )
}

export default NoteItem;
