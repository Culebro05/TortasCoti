const {Strategy, ExtractJwt} = require('passport-jwt')
const {config} = require ('../../../config/index')
const TOK = encodeURIComponent (config.dbTok)


const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: TOK
}

const JwtStrategy = new Strategy(options, (payload, done)=>{
  return done(null, payload)
  })

  module.exports = JwtStrategy
