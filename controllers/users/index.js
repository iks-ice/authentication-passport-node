const register = async (req, res) => {
    const {name, email, password, password2} = req.body;

    const errors = [];

    if (!name || !email || !password || !password2) {
        errors.push({msg: "Fill all fields"});
    }

    if (password !== password2) {
        errors.push({msg: "Passwords do not match"});
    }

    if (password.length < 6) {
        errors.push({msg: "Password should consist of 6 or more charachters"});
    }

    if (errors.length > 0) {
        console.log(typeof errors)
        res.render('register', {
            errors, name, email, password, password2
        })
    } else {
        res.send('hello');
    }
}
module.exports = {
    register
}