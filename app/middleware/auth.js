import pkg from 'jsonwebtoken';
const { verify } = pkg;
const JWT_SECRET=process.env.JWT_SECRET

const Auth=async(req,res,next)=>{
    try{
        const token=req.header('Authorization').replace('Bearer ','')
        if(!token){
            return res.status(401).send({error:'Authentication required'})
        }

        const decoded =verify(token,JWT_SECRET);
        req.userId=decoded.userId;
        next();
    }
    catch(e){
        res.status(401).send({error:'Invalid token'})
    }
};

export default Auth;