const{config}=require('../config/index')
const coti = encodeURIComponent(config.dbKey)

function checkApiKey(req, res, next){
  try{
  const apiKey = req.headers['api']
  if(apiKey == coti) next()
  else throw{ status: 401, message: 'no autorizado', error: true}
 } catch(error) {
   return res.status(error.status || 500).send({message: error.message})
 }
}

module.exports= {checkApiKey}
