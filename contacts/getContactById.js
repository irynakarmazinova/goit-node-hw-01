const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find(({ id }) => id === contactId);

    if (!result) {
      return null;
    }

    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getContactById;
