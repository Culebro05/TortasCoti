const { Strategy }= require ('passport-local')
const bcrypt = require('bcrypt')

const LocalStrategy= new Strategy(
async (email, password, done ) => {
try{
const userTest =[

{ name: ' emilio', email: 'user1@gmail.com', password:'$2b$10$bhC/oxayn8dVRxxhZoHWg.FbMa4cgfo4VeO//9NJzlyHRjJOFY84O', rol: 'user'},
{ name: ' karen', email: 'adm@gmail.com', password:'$2b$10$bhC/oxayn8dVRxxhZoHWg.FbMa4cgfo4VeO//9NJzlyHRjJOFY84O', rol: 'admi'},
{ name: ' diana', email: 'user2@gmail.com', password:'$2b$10$bhC/oxayn8dVRxxhZoHWg.FbMa4cgfo4VeO//9NJzlyHRjJOFY84O',rol: 'user'}
]
const user = userTest[1]
if(!user)return done (null, null)
console.log(user)
const isMatch = await bcrypt.compare(password, user.password)
if(!isMatch) throw { status:401, mssage:'no autorizado', error:true }
done(null, user)

}catch(error) {
done (error, false )

}
}
)

module.exports = LocalStrategy
