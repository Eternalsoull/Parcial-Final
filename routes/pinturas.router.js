//Crear un enrutador de express en el que todas las rutas inician con api
const router = require('express').Router();
const {validatorHandler} = require('../middlewares/validator.handler');
const loggerMiddleware = require('../middlewares/loggerMiddleware');
const nodemailer = require('nodemailer');


const { getPinturaSchema, createPinturaSchema, updatePinturaSchema } = require('../schemas/pinturas.schema');

//Importar el controlador de pinturas
const service = require('../services/pinturas.service');




//Definir las rutas de pinturas
router.get('/',
loggerMiddleware,
    async (req,res)=>{
        const pinturas = await service.index()
        res.json(pinturas);
    }
);

router.get('/:id',
loggerMiddleware,
validatorHandler(getPinturaSchema, 'params'),
    async (req,res)=>{
        const id = req.params.id
        const pintura = await service.show(id)
        res.json(pintura)
    }
);

router.post('/', 
loggerMiddleware,
validatorHandler(createPinturaSchema, 'body'),
    async (req,res)=>{



        const body = req.body
        const pintura = await service.store(body)

        var transport = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 587,
            auth: {
              user: "api",
              pass: "9eb5dcf9b4df51de29ffd12ebaad67ca"
            }
          });
        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            // send mail with defined transport object
            const info = await transport.sendMail({
              from: 'mailtrap@cualquiera.com',
              to: "victorjsvm2@gmail.com",
              subject: "Pintura creada", 
              text: `Se ha creado un nuevo registro con ID: ${pintura.id}`,
            });
          
            console.log("Message sent: %s", info.messageId);

            }
        res.status(201).json(pintura)
    }
);

router.put('/:id', 
loggerMiddleware,
validatorHandler(getPinturaSchema, 'params'),
validatorHandler(updatePinturaSchema, 'body'),
    async (req,res)=>{
        const id = req.params.id
        const body = req.body
        const pintura = await service.update(id, body)
        res.json(pintura)
    }
);

router.delete('/:id', 
loggerMiddleware,
validatorHandler(getPinturaSchema, 'params'),
    async (req,res)=>{
        const id = req.params.id
        const pintura = await service.destroy(id)
        res.json(pintura)
    }
);

//Exportar el enrutador
module.exports = router;