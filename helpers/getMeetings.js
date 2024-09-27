const getMeetings = (db,res) => {

    db.serialize(() => {
        db.all('SELECT * FROM meetings',(error,rows) => {
            if (error) console.log(error)
            res.send(JSON.stringify(rows))
        })
    })
}

module.exports = getMeetings