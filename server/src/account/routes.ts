import { Router } from "express"
import { createAccount } from './controllers'

const router: Router = Router()

router.post('/sig-in', createAccount)

export default router
