import Joi from 'joi';
import db from './connection.js';

const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required(),
    imageURL: Joi.string().uri({
        scheme: [
            /https?/
        ]
    })
});

const messages = db.get('messages');

export function getAll() {
    return messages.find();
}

export function create(message) {
    if (!message.username) message.username = 'Anonymous';

    const result = Joi.validate(message, schema);
    if (result.error == null) {
        message.created = new Date();
        return messages.insert(message);
    } else {
        return Promise.reject(result.error);
    }
}