module.exports=(allowedRoles)=>{
  return (req,res,next)=>{
    if(!allowedRoles.includes(req.user.roles)){
      return res.status(403).json({message:"Access denied"})
    }
    next();
  };
};