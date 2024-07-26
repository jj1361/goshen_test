"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      media: {
        fields: ["url", "alternativeText", "id", "name", "width", "height"],
      },
      live_image: {
        fields: ["url", "alternativeText", "id", "name", "width", "height"],
      },
      campgrounds1: {
        fields: ["url", "alternativeText", "id", "name", "width", "height"],
      },
      campgrounds2: {
        fields: ["url", "alternativeText", "id", "name", "width", "height"],
      },

      buttons: {
        populate: true,
      },

      file: {
        fields: ["url", "alternativeText", "id", "name", "width", "height"],
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      social: {
        populate: {
          fields: "url",
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      form: {
        populate: {
          fields: ["name", "email", "message"],
        },
      },
      livestream: {
        populate: {
          fields: ["title", "onair", "schedule", "liveToggle", "slug"],
          // media: {
          //   fields: ["url", "alternativeText", "id", "name", "width", "height"],
          // },
        },
      },
      belief: {
        populate: {
          fields: ["text", "description"],
        },
      },
      leader: {
        populate: {
          fields: ["text", "buttonText"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      registration: {
        populate: {
          fields: [
            "name",
            "email",
            "adults",
            "children",
            "babies",
            "seniors",
            "arrival_date",
            "departure_date",
          ],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      register_button: {
        populate: {
          fields: ["registration_warning", "registration_button_text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      details: {
        populate: {
          fields: ["text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },

      donations: {
        populate: {
          fields: [
            "heading",
            "subheading",
            "instructions",
            "newTab",
            "url",
            "text",
          ],
          logo: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      pricing: {
        populate: {
          zoom: {
            fields: ["url", "alternativeText", "id", "name", "width", "height"],
          },
        },
      },
      resource: {
        populate: {
          fields: ["title", "title2"],
        },
      },
      things_needed: {
        populate: {
          fields: ["item ", "notes"],
        },
      },
      things_needed_header: {
        populate: {
          fields: ["text "],
          media: {
            fields: ["url", "alternativeText", "id", "name", "width", "height"],
          },
        },
      },
      lodging: {
        populate: {
          fields: ["basic_info ", "lodging_details", "title"],
          media: {
            fields: ["url", "alternativeText", "id", "name", "width", "height"],
          },
        },
      },
      lodging_continued: {
        populate: {
          fields: ["caption"],
          media: {
            fields: ["url", "alternativeText", "id", "name", "width", "height"],
          },
        },
      },
      gatherings: {
        populate: {
          lodging_continued: {
            populate: {
              fields: ["caption"],
              media: {
                fields: [
                  "url",
                  "alternativeText",
                  "caption",
                  "width",
                  "height",
                ],
              },
            },
          },
          register_button: {
            populate: {
              fields: ["registration_warning", "registration_button_text"],
              media: {
                fields: [
                  "url",
                  "alternativeText",
                  "caption",
                  "width",
                  "height",
                ],
              },
            },
          },
          thanks: {
            populate: {
              fields: ["confirmation", "redirect"],
              media: {
                fields: [
                  "url",
                  "alternativeText",
                  "caption",
                  "width",
                  "height",
                ],
              },
            },
          },
          things_needed_media: {
            fields: ["url", "alternativeText", "id", "name", "width", "height"],
          },
          fields: [
            "title",
            "description",
            "start_date",
            "location_name",
            "location_address",
            "location_city",
            "location_state",
            "location_zip",
            "start_date",
            "end_date",
            "registration_deadline",
            "details",
            "things_needed",
          ],
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
      },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
