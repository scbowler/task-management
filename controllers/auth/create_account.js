const { tokenForUser, userDataToSend } = require('./authentication');
const { users } = require('../../db/models');
const validation = require('../../helpers/validation');
const { errorFlag, sendError, StatusError } = require('../../helpers/error_handling');

exports.createAccount = async (req, res) => {
    const {color, email, firstName, lastName, password} = req.body;
    const errors = [];

    try {
        if (!email) errors.push('No email address provided');
        else if (!validation.email(email)) errors.push('Invalid email address provided');

        if (!firstName) errors.push('No first name provided');
        else if (!validation.name(firstName)) errors.push('Invalid first name provided');

        if (!lastName) errors.push('No last name provided');
        else if (!validation.name(lastName)) errors.push('Invalid last name provided');

        if(!password) errors.push('No password provided');
        else if(!validation.password(password)) errors.push('Invalid password provided');

        if(!email.includes('learningfuze.com')) errors.push('Not an approved email address');

        if(errors.length){
            throw new StatusError(422, errors);
        }

        const existingUser = await users.findOne({ where: { email } });

        if (existingUser) throw new StatusError(422, null, 'Email already in use' + errorFlag);

        let user = null;

        try {
            const newUser = users.build({
                color: color || '#f9a825',
                email,
                firstName,
                lastName,
                password
            });

            user = await newUser.save();
        } catch (err) {
            throw new Error('Unable to create new user' + errorFlag);
        }

        res.send({
            token: tokenForUser(user),
            user: userDataToSend(user)
        });
    } catch(err){
        sendError(res, err, 'Error creating new account');
    }   
}
