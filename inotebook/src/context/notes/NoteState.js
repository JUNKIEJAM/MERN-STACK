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

    return (
      //  <NoteContext.Provider value={{state,update}}>
      <NoteContext.Provider value={{notes,setNotes}}>
           {props.children} 
        </NoteContext.Provider>
    )
}

export default NoteState;