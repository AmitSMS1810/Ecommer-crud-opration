const supabase = require('../config/supabase.js');

const creatUser = async (req, res) => {

    try {
        const { name, mobile, city, state } = req.body;

        const { data, error } = await supabase.from('userTable').insert([
            {
                name: name,
                mobile: mobile,
                city: city,
                state: state
            }
        ])
        if (error) {
            console.error("Error during user creation:", error);
            return res.status(400).json({ error: error.message });
        }
        res.status(201).json({
            sucess: true,
            message: "User created successfully",
            data
        });
    }
    catch (error) {
        console.error("Error during user creation:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getUser = async (req, res) => {
    try {
        const { data, error } = await supabase.from('userTable').select('*');
        if (error) {
            console.error("Error fetching users:", error);
            return res.status(400).json({ error: error.message });
        }
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, mobile, city, state } = req.body;

        const { data, error } = await supabase.from('userTable').update({
            name: name,
            mobile: mobile,
            city: city,
            state: state
        }).eq('id', id);

        if (error) {
            console.error("Error during user update:", error);
            return res.status(400).json({ error: error.message });
        }
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data
        });
    }
    catch (error) {
        console.error("Error during user update:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase.from('userTable').delete().eq('id', id);

        if (error) {
            console.error("Error during user deletion:", error);
            return res.status(400).json({ error: error.message });
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data
        });
    }
    catch (error) {
        console.error("Error during user deletion:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getTotlalUsers = async (req, res) => {
    try {
        const { data, error } = await supabase.from('userTable').select('*', { count: 'exact' });
        if (error) {
            console.error("Error fetching users:", error);
            return res.status(400).json({ error: error.message });
        }
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            totalUsers: data.length
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = { creatUser, getUser,updateUser, deleteUser, getTotlalUsers };