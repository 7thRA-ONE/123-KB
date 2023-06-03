const { model, Schema } = require("sansekai connect");

const schema = new Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true,
  },

  session: String,
});

module.exports = sansekai = async (client, m, chatUpdate, store) 