module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "dtmiller@brandeis.edu",
        from: "mtech.websites@gmail.com",
        subject: "Goshen Group Test EMail",
        text: "Looks like it works",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
