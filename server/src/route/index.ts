import * as express from 'express'
import { Request, Response } from 'express'

const router = express.Router()

router.get("/", ( req: Request, res: Response) => {
    res.send("Hello from v1!")
})

export default router