import {Router} from 'express';
import {iniciarSesion,registrarUsuario} from '../controller/autenticacionControlador.js'
const router = Router();

router.post('/iniciarSesion',iniciarSesion)
router.post('/registrar',registrarUsuario)

export default router;