import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState=(props)=>{
  /*  const s1={
        "name":"Harry",
        "class":"5b"
    }

const [state,setState]=useState(s1);

   const update=()=>{
    setTimeout(()=>{
        setState({
        "name":"anmol",
        "class":"8a"
        })
    },1000)   
   }
*/

const initialNotes=[
    {
        "_id":{"$oid":"62386d539256da1a2cfc4ad1"},
        "user":{"$oid":"62386c9aae09403f6c57d9c4"},"title":"anmol",
        "description":"my college is NSUT",
        "tag":"personal",
        "date":{"$date":"2022-03-21T12:19:31.434Z"},"timestamp":{"$date":"2022-03-21T12:19:31.434Z"},"__v":0
    },
    {
        "_id":{"$oid":"62386d539256da1a2cfc4ad1"},
        "user":{"$oid":"62386c9aae09403f6c57d9c4"},"title":"anmol",
        "description":"my college is NSUT",
        "tag":"personal",
        "date":{"$date":"2022-03-21T12:19:31.434Z"},"timestamp":{"$date":"2022-03-21T12:19:31.434Z"},"__v":0
    },
    {
        "_id":{"$oid":"62386d539256da1a2cfc4ad1"},
        "user":{"$oid":"62386c9aae09403f6c57d9c4"},"title":"anmol",
        "description":"my college is NSUT",
        "tag":"personal",
        "date":{"$date":"2022-03-21T12:19:31.434Z"},"timestamp":{"$date":"2022-03-21T12:19:31.434Z"},"__v":0
    },
    {
        "_id":{"$oid":"62386d539256da1a2cfc4ad1"},
        "user":{"$oid":"62386c9aae09403f6c57d9c4"},"title":"anmol",
        "description":"my college is NSUT",
        "tag":"personal",
        "date":{"$date":"2022-03-21T12:19:31.434Z"},"timestamp":{"$date":"2022-03-21T12:19:31.434Z"},"__v":0
    }
]

const [notes,setNotes]=useState(initialNotes)


// add a note
const addNote=(title,description,tag)=>{

    // todo: API CALL

    console.log('add a new note')
 const note={
    
        "_id":{"$oid":"62386d539256da1a2cfc4ad1"},
        "user":{"$oid":"62386c9aae09403f6c57d9c4"},
        "title":title,
        "description":description,
        "tag":tag,
        "date":{"$date":"2022-03-21T12:19:31.434Z"},"timestamp":{"$date":"2022-03-21T12:19:31.434Z"},"__v":0
    
}

setNotes(notes.concat(note))
}

// delete a note
const deleteNote=(id)=>{
    console.log("Deleting " +id);
   const newNotes=notes.filter((note)=>{return note._id!==id})

setNotes(newNotes);
   
}
   

//edit a note
const editNote=(id,title,description,tag)=>{
    
}

    return (
      //  <NoteContext.Provider value={{state,update}}>
      <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
           {props.children} 
        </NoteContext.Provider>
    )
    }

export default NoteState;