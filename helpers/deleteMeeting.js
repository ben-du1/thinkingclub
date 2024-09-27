const deleteMeeting = (db,data) => {
    console.log('recieved')

    if (!data.title || !data.info || !data.date || !data.location || !data.password) return
    
    if (data.password != "bennybob123" ) return

    db.serialize(() => {
        var stmt = db.prepare("DELETE FROM meetings WHERE title=? AND info=? AND date=? AND location=? ")
        stmt.run(data.title,data.info,data.date,data.location)
        stmt.finalize()
    })

    console.log("deleted")
    return
}

module.exports = deleteMeeting