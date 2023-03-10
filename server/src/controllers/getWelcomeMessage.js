const getWelcomeMessage = async (req, res) => {
    res.status(200).send("welcome to Server")
}

module.exports = { getWelcomeMessage }