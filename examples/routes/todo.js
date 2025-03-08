import { Todo } from '@examples/controllers';
import { Router } from 'express';

const router = Router();
export default router;

router.get('/admin/todos', Todo.readMany);
router.get('/admin/todos/:id', Todo.readOne);
router.post('/admin/todos', Todo.create);
router.put('/admin/todos/:id', Todo.update);
router.delete('/admin/todos/:id', Todo.remove);

router.post('/admin/todos/:id/check', Todo.check);
router.delete('/admin/todos/:id/check', Todo.uncheck);
