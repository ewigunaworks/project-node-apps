import express from 'express'

import { 
    getIndex,
    getUser
} from "../controllers/User.js"

const router = express.Router()

router.get('/', getIndex)
router.get('/users', getUser)

export default router