module.exports = (err, req, res, next) => {
  if (err.message === 'abc') return res.status(403).end()
  res.send(err.message)
}
