exports.sanitizeUser=(user)=>{
    return {
        _id:user._id,
        email:user.email,
        isVerified:user.isVerified,
        roll_Number:user.rollNumber,
        role:user.role,
        firstName:user.firstName,
        lastName:user.lastName

    }
}