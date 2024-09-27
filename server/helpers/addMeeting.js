const addMeeting = (db, data, res) => {
    if (!data.title || !data.info || !data.date || !data.location || !data.password) return
    
    if (data.password != "bennybob123" ) return

    db.serialize(() => {
        var stmt = db.prepare("INSERT INTO meetings VALUES (?,?,?,?)")
        stmt.run(data.date,data.title,data.location,data.info)
        stmt.finalize()
    })

    console.log('added')
    return 
}

module.exports = addMeeting
