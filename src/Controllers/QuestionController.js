const Database = require("../db/config")

module.exports = {
    index(req, res) {
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password

        console.log(`${roomId}, ${questionId}, ${action}, ${password}`)

    },
    async create(req, res) {
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room

        await db.run(`INSERT INTO questions(
            title,
            room,
            read
        ) VALUES (
            "${question}",
            ${roomId},
            0
        );`)
            
        db.close()

        res.redirect(`/room/${roomId}`)
    }
}