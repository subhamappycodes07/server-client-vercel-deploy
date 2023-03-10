
const getAllDetails = async (req, res) => {
    res.status(200).json({ msg: "This is a data from server test" })
}

module.exports = { getAllDetails }