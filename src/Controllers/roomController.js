const Database = require('../db/config')

module.exports = {
    async open(req, res){
        const roomId = req.params.roomId
        res.render('room', {roomId: roomId})

        const db = await Database()
        const questions = await db.all(`SELECT title
        FROM questions
        WHERE room = ${roomId}`)

        res.render("room", {roomId: roomId, questions: questions})

        await db.close()
    },
    async enter(req, res){
        const db = await Database()
        const roomId = 6019
        db.get(`SELECT id FROM rooms WHERE id=${roomId}`, (err, row)=>{
            console.log("Célula encontrada: " + row.id)
        })
        await db.close()
    },
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let isRoom = true
        let roomId = ""

        while (isRoom) {
            roomId += Math.floor((Math.random()*9)+1);
            for (let i=0; i<5; i++)
                roomId += Math.floor(Math.random()*10);

            let roomExistentIds = await db.all(`SELECT id FROM rooms WHERE id=${roomId};`)

            isRoom = roomExistentIds.some(idFound => idFound === roomId)

            if (!isRoom) {
                await db.run(`INSERT INTO rooms (
                id,
                pass
            ) VALUES (
                ${parseInt(roomId)},
                ${pass}
            );`)
            }
        }

        await db.close()

        res.redirect(`/room/${roomId}`);
    }
}