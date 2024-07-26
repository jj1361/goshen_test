module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  // ckeditor: {
  //   enabled: true,
  //   resolve: "./src/plugins/strapi-plugin-ckeditor",
  // },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "mtech.websites@gmail.com",
        defaultReplyTo: "mtech.websites@gmail.com",
      },
    },
  },
  
});
