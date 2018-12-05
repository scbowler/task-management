const { users } = require('../../db/models');
const validation = require('../../helpers/validation');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

exports.createAccount = (req, res) => {
    const {email, firstName, lastName, password} = req.body;
    const errors = [];

    try {
        if (!email) errors.push('No email address provided');
        else if (validation.email(email)) errors.push('Invalid email address provided');

        if (!firstName) errors.push('No first name provided');
        else if (!validation.name(firstName)) errors.push('Invalid first name provided');

        if (!lastName) errors.push('No last name provided');
        else if (!validation.name(lastName)) errors.push('Invalid last name provided');

        if(!password) errors.push('No password provided');
        else if(validation.password(password)) errors.push('Invalid password provided');

        if(errors.length){
            throw new StatusError(422, errors);
        }

        res.send({
            success: true,
            testStuff: 'This is create account'
        });
    } catch(err){
        console.log('Error Message:', err.message);
        console.log('Error Array:', err.array);

        sendError(res, err, 'Error creating new account');
    }

    
}
