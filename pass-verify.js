const bcrypt =require ('bcrypt')


async function verifyPassword (){

const  myPassword='un password 20.20'
const myPasswordHashed='$2b$10$nDuUe3M5gGw11/TrEebOJuPu8HIQVXE6MjumeYyui9TwlsStDZ3hC'
const isMatch =await bcrypt.compare(myPassword, myPasswordHashed)

console.log(isMatch)
}

verifyPassword ()
