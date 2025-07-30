import Package from "../models/Package.js";

export const getAllPackages = async (req, res) => {
  const packages = await Package.find({});
  res.json(packages);
};

export const createPackage = async (req, res) => {
  const newPackage = new Package(req.body);
  const saved = await newPackage.save();
  res.status(201).json(saved);
};
