const express = require('express')
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const { listarTasks, crearTaks, actualizarTaks, eliminarTaks } = require('../Controllers/task.js');

router.use( validarJWT )

router.get('/', listarTasks)
router.post('/', crearTaks)
router.put('/:id', actualizarTaks)
router.delete('/:id', eliminarTaks)

module.exports = router;

const crearTaks = async (req, res = express.request) => {
    const task = new Task(req.body);

    try {
        task.user = req.uid;
        const saved = await task.save();
        res.json({
            ok: true,
            task: saved
        })
    } catch(error) {
        console.log( error );
        res.statusCode(500).json({
            ok: false,
            task: 'Internal Error'
        })
    }
}

const listarTasks = async (req, res = express.request) => {
    const tasks = await Task.find()
                        .populate('user', 'name');

    try {
        res.statusCode(200).json({
            ok: true,
            tasks,
        })
    } catch(error) {
        console.log(500).json({
            ok: false,
            msg: 'Error Interno',
        })
    }
}