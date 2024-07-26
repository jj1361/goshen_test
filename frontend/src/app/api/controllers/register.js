'use strict';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::checkout.checkout', ({stripe})=>({
    async create(ctx){
        const {name, email, adults, children, babies, seniors} = ctx.request.body
    }
}));