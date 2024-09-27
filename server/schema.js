const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('thinkingclub')

db.serialize(() => {
    db.run("CREATE TABLE meetings (date TEXT, title TEXT, location TEXT, info TEXT)")
})

db.close()