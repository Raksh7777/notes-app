const fs=require('fs')
const notes=require('./notes.js')
const yargs=require('yargs')
 yargs.command({
     command:'add',
     describe:'Add a new note',
     builder:{
         title:{
             describe:'Note Title',
             demandOption:true,
             type:'string'
         },
         body:{
             describe:'Note Body',
             demandOption:true,
             type:'string'
         }
     },
     handler: function(argv){
         notes.addNote(argv.title,argv.body)
     }
 })
yargs.command({
    command:'remove',
    describe:'To remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'list your notes',
    handler:function(){
       notes.listNotes()
    }
})
yargs.command({
    command:'read',
    describe:'Reading notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.readNote(argv.title)
    }
})

 yargs.parse()

