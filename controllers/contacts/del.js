const { Contact } = require("../../models");

const del = async (req, res) => {
  const { contactId } = req.params;
  const deleteContact = await Contact.findByIdAndDelete(contactId);
  if (!deleteContact) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  res.json({
    deleteContact,
  });
};

module.exports = del;
