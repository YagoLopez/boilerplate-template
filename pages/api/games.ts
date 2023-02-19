import { NextApiRequest, NextApiResponse } from 'next'
import allGames from '@/data/games.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(allGames)
  } catch (e) {
    res.status(500).json(e)
  }
}
