import {Router} from 'express'
import {listarUsuarios,eliminarUsuario,editarUsuario} from '../controller/usuarioControlador.js'
import { verificarToken } from '../middleware/authJwt.js';
const router = Router();

//Listamos una lista general de usuarios
router.get('/',verificarToken,listarUsuarios)

//Editamos la data de un usuario
router.put('/:id',editarUsuario)

//eliminar un usuario

router.delete('/:id',eliminarUsuario)


export default router;