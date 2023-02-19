import { ISearchParam } from './ISearchParam'

export interface IRepository<T> {
  readonly name: string

  getById(id: string, collection: T[]): T

  search({ searchString, pageParam }: ISearchParam): Promise<T[]>

  getAllGames(): Promise<T[]>
}
