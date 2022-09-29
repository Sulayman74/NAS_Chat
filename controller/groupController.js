const { StatusCodes } = require("http-status-codes");
const Group = require("../Models/groupModel");

//  créer un groupe

exports.createNewGroup = async (req, res) => {
  const newGroup = await Group.create(req.body);
  res.status(StatusCodes.CREATED).json({
    status: "success",
    results: newGroup.length,
    newGroup,
  });
};

//  supprimer un groupe

exports.deleteGroup = async (req, res) => {
  const { id } = req.params;
  await Group.findByIdAndDelete(id);
  res.status(StatusCodes.NO_CONTENT).json({
    msg: null,
  });
};

// ajouter un membre à un groupe

exports.addUser2Group = async (req, res) => {
  const newGroup = await Group.create();
  res.status(StatusCodes.OK).json({
    status: "success",
    results: newGroup.length,
    newGroup,
  });
};

// update le groupe

exports.updateGroup = async (req, res) => {
  res.status(StatusCodes.OK).json({
    status: "success",
    msg: "Group user",
  });
};

// supprimer un membre d'un groupe

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await Group.findByIdAndDelete(id);
  res.status(StatusCodes.NO_CONTENT).json({
    msg: null,
  });
};
