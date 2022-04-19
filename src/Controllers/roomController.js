module.exports = {
    create(req, res){
        let roomId = 232345;
        res.redirect(`/room/${roomId}`);
        

    }
}