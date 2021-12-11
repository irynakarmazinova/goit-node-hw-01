const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");

const updateContactById = async ({ contactId, name, email, phone }) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex(({ id }) => id === contactId);

    if (idx === -1) {
      return null;
    }

    contacts[idx] = { id, name, email, phone };
    await updateContacts(contacts);
    return contacts[idx];
  } catch (error) {
    console.error(error);
  }
};

module.exports = updateContactById;
