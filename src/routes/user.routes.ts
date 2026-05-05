import { Router } from 'express';
import controller from '../controllers/user.controller';

const router = Router();

// Create
router.post('/', controller.createUserHandler);

// Read all
router.get('/', controller.getUsersHandler);

// Read one
router.get('/:id', controller.getUserHandler);

// Update
router.put('/:id', controller.updateUserHandler);

// Delete
router.delete('/:id', controller.deleteUserHandler);

export default router;
