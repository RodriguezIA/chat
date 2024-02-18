import { Request, Response } from "express"
import { CreateAccountSchema } from '../models/account'
import { create } from '../db/account'

export const createAccount = async(req: Request, res: Response) => {
    try {
        const newAccount = CreateAccountSchema.parse(req.body)
        const query = await create(newAccount)
        res.status(200).json({ message: 'Cuenta creada exitosamente', data: query });
    } catch (error: any) {
        console.error('Error de validación:', error.errors);
        res.status(400).json({ error: 'Los datos proporcionados no son válidos' });
    }
}