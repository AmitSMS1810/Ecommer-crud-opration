const supabase = require('../config/supabase.js');

const signup = async(req,res) => {

   try{
    const {name,email,password} = req.body;

    const {data, error} = await supabase.auth.signUp({

        email : email.trim(),
        password : password,
        options : {
            data : {
                name : name.trim(),
            }
        }
    })
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(201).json({ 
        sucess: true,
        message: "User created successfully",
        data 
    });
   }
   catch(error){
   console.error("Error during signup:", error);
   res.status(500).json({ error: "Internal server error" });
   }
}

const login = async(req, res) => {

    try{
        const {email, password} = req.body;

    const {data, error} = await supabase.auth.signInWithPassword({
        email : email.trim(),
        password : password
    })
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ 
        sucess: true,
        message: "User logged in successfully",
        data 
    });
    }
    catch(error){
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    signup,
    login
}