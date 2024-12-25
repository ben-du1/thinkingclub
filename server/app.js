const express = require('express')
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose()
const addMeeting = require(__dirname+'/helpers/addmeeting.js')
const getMeetings = require(__dirname+'/helpers/getmeetings.js')
const deleteMeeting = require(__dirname+'/helpers/deletemeeting.js')

const db = new sqlite3.Database('thinkingclub')

const app = express()

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/api/meeting/add',(req,res) => {
    console.log(req.body)
    addMeeting(db,req.body,res)
})

app.get('/api/meeting/list',(req,res) => {
    getMeetings(db,res)
})

app.post('/api/meeting/delete',(req,res) => {
    deleteMeeting(db,req.body)
})

app.get('/api/poster',(req,res) => {
    res.download(__dirname+"/thinkingclub.pdf")
})

app.listen(4000,() => {
    console.log('thinkingclub v-1 running')
})