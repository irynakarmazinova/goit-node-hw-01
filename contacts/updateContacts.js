const fs = require("fs/promises");

const contactsPath = require("./contactsPath");

const updateContacts = async (contacts) => {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

module.exports = updateContacts;
