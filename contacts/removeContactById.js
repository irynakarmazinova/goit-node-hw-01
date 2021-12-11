const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    //   const updateContacts = contacts.filter(({ id }) => id !== contactId);
    const idx = contacts.findIndex(({ id }) => id === contactId);

    if (idx === -1) {
      return null;
    }

    const newContacts = contacts.filter((_, index) => index !== idx);
    await updateContacts(newContacts);
    return contacts[idx];

    // const removeContact = contacts.splice(idx, 1);
    // await updateContacts(contacts);
    // return removeContact;
  } catch (error) {
    console.error(error);
  }
};

module.exports = removeContactById;
