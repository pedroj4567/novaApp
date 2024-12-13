import {Router} from 'express'
import {registrarProyecto,modificarProyecto,eliminarProyecto,listarProyecto} from '../controller/proyectoControlador.js'
const router = Router();

router.get('/', listarProyecto)

router.post('/',registrarProyecto)

router.put('/:id',modificarProyecto)

router.delete('/:id',eliminarProyecto);

export default router;