
const getAllDetails = async (req, res) => {
    res.status(200).json({ message: "frontend connected with backend via vercel" })
}

module.exports = { getAllDetails }