import express from 'express'
import { getLogsByField } from '../controllers/logController'
import { getLogsByDateRange } from '../controllers/logController';

const router = express.Router()

router.get('/:fieldName', getLogsByField)

router.get('/logsByDateRange', getLogsByDateRange);

export default router