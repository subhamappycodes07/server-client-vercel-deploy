
const getAllDetails = async (req, res) => {
    res.status(200).json({ message: "This is a data from server test" })
}

module.exports = { getAllDetails }