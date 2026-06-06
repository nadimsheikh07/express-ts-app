import type { Request, Response } from "express";
import UserModel from "../models/user.model";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, mobile, address } = req.body;
    const user = await UserModel.create({ name, email, mobile, address });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const getUsersHandler = async (_req: Request, res: Response) => {
  try {
    const users = await UserModel.find().lean();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const getUserHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id).lean();
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const updateUserHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const removed = await UserModel.findByIdAndDelete(id).lean();
    if (!removed) return res.status(404).json({ error: "User not found" });
    res.json(removed);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export default {
  createUserHandler,
  getUsersHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
