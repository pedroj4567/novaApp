import Router from 'express'
import {listarPromotores,registrarPromotor,editarPromotor,eliminarPromotor} from '../controller/promotorControlador.js';
const router = Router();

//rutas CRUD
router.get('/',listarPromotores);

router.post('/',registrarPromotor);

router.put('/:id',editarPromotor);

router.delete('/:id', eliminarPromotor);


export default router;