const Database = require('../db/config')

module.exports = {
    Open(req, res){
        res.render('room')
    },
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let isRoom = true
        let roomId = 000000

        while (isRoom) {
            roomId = Math.floor(Math.random() * (10 ** 6));
            // for (let i=0; i<6; i++)
            //     roomId += Math.floor(Math.random()*10);

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