const notFound = (req,res) => res.status(404).send('page does not exist')
module.exports = notFound