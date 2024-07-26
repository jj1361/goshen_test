

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2024-06-20',
// });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req,res) {
console.log('app router checkout_sessions.js');
  if (req.method === 'POST') {
    console.log('checkout_sessions.js');
    const name = req.body.name;
    const email = req.body.email;
    const adults = req.body.adults;
    const children = req.body.children;
    const babies = req.body.babies;
    const seniors = req.body.seniors;
    const arrival = req.body.arrival_date;
    const departure = req.body.departure_date;

 
    try {

    
      // Create Checkout Sessions from body params.
      let temp;
      if (
        adults > 0 &&
        (children === '0' || children === '') &&
        (seniors === '0' || seniors === '') &&
        (babies === '0' || babies === '')
      ) {
        temp = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRHJq06vvlhwKYtFawLn4zz', //Adults
              quantity: adults,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: arrival,
                    value: arrival,
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: departure,
                    value: departure,
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        adults > 0 &&
        children > 0 &&
        (seniors === '0' || seniors === '') &&
        (babies === '0' || babies === '')
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRHJq06vvlhwKYtFawLn4zz', //Adults
              quantity: adults,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRIAv06vvlhwKYtkoEKK7Cw', //Children
              quantity: children,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        adults > 0 &&
        children > 0 &&
        babies > 0 &&
        (seniors === '0' || seniors === '')
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRHJq06vvlhwKYtFawLn4zz', //Adults
              quantity: adults,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRIAv06vvlhwKYtkoEKK7Cw', //Children
              quantity: children,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Babies
              quantity: babies,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (adults > 0 && children > 0 && babies > 0 && seniors > 0) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRHJq06vvlhwKYtFawLn4zz', //Adults
              quantity: adults,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRIAv06vvlhwKYtkoEKK7Cw', //Children
              quantity: children,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Babies
              quantity: babies,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRatJ06vvlhwKYtUTxDWx4q', //Seniors
              quantity: seniors,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        adults > 0 &&
        (children === '0' || children === '') &&
        (babies === '0' || babies === '') &&
        seniors > 0
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRHJq06vvlhwKYtFawLn4zz', //Adults
              quantity: adults,
              adjustable_quantity: {
                enabled: true,
              },
            },

            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRatJ06vvlhwKYtUTxDWx4q', //Seniors
              quantity: seniors,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        adults > 0 &&
        (children === '0' || children === '') &&
        (babies === '0' || babies === '') &&
        (seniors === '0' || seniors === '')
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRHJq06vvlhwKYtFawLn4zz', //Adults
              quantity: adults,
              adjustable_quantity: {
                enabled: true,
              },
            },

            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Babies
              quantity: babies,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        children > 0 &&
        (adults === '0' || adults === '') &&
        (babies === '0' || babies === '') &&
        (seniors === '0' || seniors === '')
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRIAv06vvlhwKYtkoEKK7Cw', //Children
              quantity: children,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        children > 0 &&
        (adults === '0' || adults === '') &&
        (babies === '0' || babies === '') &&
        seniors > 0
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRIAv06vvlhwKYtkoEKK7Cw', //Children
              quantity: children,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRatJ06vvlhwKYtUTxDWx4q', //Seniors
              quantity: seniors,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: arrival,
                    value: arrival,
                  },
                  {
                    label: arrival,
                    value: arrival,
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Juneteenth',
                    value: 101924,
                  },
                  {
                    label: 'Sukkot',
                    value: 102424,
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        children > 0 &&
        (adults === '0' || adults === '') &&
        babies > 0 &&
        seniors > 0
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRIAv06vvlhwKYtkoEKK7Cw', //Children
              quantity: children,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRatJ06vvlhwKYtUTxDWx4q', //Seniors
              quantity: seniors,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Babies
              quantity: babies,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        children > 0 &&
        (adults === '0' || adults === '') &&
        babies > 0 &&
        (seniors === '0' || seniors === '')
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRIAv06vvlhwKYtkoEKK7Cw', //Children
              quantity: children,
              adjustable_quantity: {
                enabled: true,
              },
            },

            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Babies
              quantity: babies,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        babies > 0 &&
        (children === '0' || children === '') &&
        (seniors === '0' || seniors === '') &&
        (adults === '0' || adults === '')
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Babies
              quantity: babies,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        babies > 0 &&
        (children === '0' || children === '') &&
        (seniors === '0' || seniors === '') &&
        adults > 0
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRHJq06vvlhwKYtFawLn4zz', //Adults
              quantity: adults,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Babies
              quantity: babies,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        babies > 0 &&
        (children === '0' || children === '') &&
        seniors > 0 &&
        adults > 0
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRHJq06vvlhwKYtFawLn4zz', //Adults
              quantity: adults,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Babies
              quantity: babies,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRatJ06vvlhwKYtUTxDWx4q', //Seniors
              quantity: seniors,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        babies > 0 &&
        (children === '0' || children === '') &&
        seniors > 0 &&
        adults > 0
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRHJq06vvlhwKYtFawLn4zz', //Adults
              quantity: adults,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Babies
              quantity: babies,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRatJ06vvlhwKYtUTxDWx4q', //Seniors
              quantity: seniors,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        seniors > 0 &&
        (children === '0' || children === '') &&
        (adults === '0' || adults === '') &&
        (babies === '0' || babies === '')
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRatJ06vvlhwKYtUTxDWx4q', //Seniors
              quantity: seniors,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        seniors > 0 &&
        (children === '0' || children === '') &&
        (adults === '0' || adults === '') &&
        babies > 0
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRatJ06vvlhwKYtUTxDWx4q', //Seniors
              quantity: seniors,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Babies
              quantity: babies,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else if (
        seniors > 0 &&
        (children === '0' || children === '') &&
        adults > 0 &&
        babies > 0
      ) {
        temp = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRatJ06vvlhwKYtUTxDWx4q', //Seniors
              quantity: seniors,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Babies
              quantity: babies,
              adjustable_quantity: {
                enabled: true,
              },
            },
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1PRHJq06vvlhwKYtFawLn4zz', //Adults
              quantity: adults,
              adjustable_quantity: {
                enabled: true,
              },
            },
          ],
          custom_fields: [
            {
              key: 'name',
              label: {
                type: 'custom',
                custom: 'Full Name',
              },
              type: 'text',
            },
            {
              key: 'arrival',
              label: {
                type: 'custom',
                custom: 'Estimated Arrival Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Wednesday, Oct. 16, 2024',
                    value: '101624',
                  },
                  {
                    label: 'Wednesday, Oct. 17, 2024',
                    value: '101724',
                  },
                ],
              },
            },

            {
              key: 'departure',
              label: {
                type: 'custom',
                custom: 'Estimated Departure Date',
              },
              type: 'dropdown',
              dropdown: {
                options: [
                  {
                    label: 'Thursday, Oct. 24, 2024',
                    value: '102424',
                  },
                  {
                    label: 'Friday, Oct. 25, 2024',
                    value: '102524',
                  },
                ],
              },
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      }

      const session = temp;
      // await stripe.checkout.sessions.create({
      //   line_items: [
      //     {
      //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      //       price: 'price_1PRHJq06vvlhwKYtFawLn4zz', //Adult
      //       quantity: adults,
      //       adjustable_quantity: {
      //         enabled: true,
      //       },
      //     },
      //     {
      //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      //       price: 'price_1PRIAv06vvlhwKYtkoEKK7Cw', //Child over 12
      //       quantity: 1,
      //       adjustable_quantity: {
      //         enabled: true,
      //       },
      //     },
      //     {
      //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      //       price: 'price_1PRb1Q06vvlhwKYtR8UnC1hp', //Child under 12
      //       quantity: 1,
      //       adjustable_quantity: {
      //         enabled: true,
      //       },
      //     },
      //     {
      //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      //       price: 'price_1PRatJ06vvlhwKYtUTxDWx4q', //Senior
      //       quantity: 1,
      //       adjustable_quantity: {
      //         enabled: true,
      //       },
      //     },
      //   ],

      console.log(session);
      res.json({ clientSecret });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}