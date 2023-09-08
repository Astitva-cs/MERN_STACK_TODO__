import Jwt  from "jsonwebtoken"

 const  verifyToken = async(req,res,next)=>{
    try{
         const token = req.cookies.token.token
         if(!token) return res.status(401).json({message: "unauthorized"})
         Jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(401).json({message:"wrong credentials"})
        }
        
        req.user=user;
        })
        next()
    }
    catch(err){
        next(err)
    }
}

export default verifyToken