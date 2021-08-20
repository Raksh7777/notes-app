const fs=require('fs')
const { title } = require('process')
const getNotes = function () {
    return 'Your notes...'
}
const addNote=function(title,body){
    notes=loadNotes()
   const duplicateNotes=notes.filter(function(note){
       return note.title===title
   })
   debugger
   if(duplicateNotes.length===0){
   notes.push({
       title:title,
       body:body
   })
   saveNotes(notes)
   console.log("New note added!")
}
else{
     console.log("Note title already taken!")
}
}
const removeNote= function(title){
   notes=loadNotes()
  const matchedNote=notes.filter(function(note){
      return note.title===title
  })
 if (matchedNote.length!=0)
    {
        notes=notes.filter(function(note){
            return note.title!=title
        })
    saveNotes(notes)
    console.log("Note removed successfully!")
    }
  else {
console.log("Note with title "+title+" does not exist")
}
}
//lising all notes
const listNotes=function(){
    const notes=loadNotes()
    console.log("NOTES LIST")
    notes.forEach(element => {
        console.log(element.title)
    });
}
//read notes
const readNote=function(title){
    const notes=loadNotes()
    const toRead=notes.filter((note)=>note.title===title)//use find instead of filter later on
    console.log(toRead)
}
const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=function(){
    try{
        const databuffer=fs.readFileSync('notes.json')
        const dataJSON=databuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
 
}
module.exports = {getNotes:getNotes,addNote:addNote,
removeNote:removeNote,
listNotes:listNotes,
readNote:readNote}