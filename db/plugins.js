import joi_core from 'joi';
import joi_date from '@joi/date';

const Joi = joi_core.extend(joi_date);

import db from './connection.js';

const schema = Joi.object().keys({
    name: Joi.string().required(),
    author: Joi.string().required(),
    date_authored: Joi.date().format('DD-MM-YYYY'),
    date_updated: Joi.date().format('DD-MM-YYYY'),
    minimum_version: Joi.string().required(),
    maximum_version: Joi.string().required(),
    version: Joi.string().required(),
    description: Joi.string().max(500).required(),
});

const plugins = db.get('plugins');

export function getAll() {
    return plugins.find();
}

export function deleteAll() {
    return plugins.find();
}

export function create(plugin) {
    const result = schema.validate(plugin);
    if (result.error == null) {
        plugin.created = new Date();
        return plugins.insert(plugin);
    } else {
        return Promise.reject(result.error);
    }
}
