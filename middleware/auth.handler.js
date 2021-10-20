function checkApiKey(req, res, next){
  try{
  const apikey = req.headers['api']
  if(apikey == '75321') next()
  else throw{ status: 401, message: 'no autorizado', error: true}
 } catch(error) {
   return res.status(error.status || 500).send({message: error.message})
 }
}

module.exports= {checkApiKey}
