import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { IRepository } from '../interfaces/IRepository'

export const useRepository = <T>(repository: IRepository<T>) => {
  const useGetById = (id: string, collection: T[]) =>
    repository.getById(id, collection)

  const useSearchPaginated = (
    searchString: string,
    initialData = undefined
  ) => {
    return useInfiniteQuery(
      [`${repository.name}-search-${searchString}`],
      ({ pageParam = 1 }) => repository.search({ searchString, pageParam }),
      {
        initialData,
        getPreviousPageParam: (context: Record<string, any>) =>
          context.pre_page,
        getNextPageParam: (context: Record<string, any>) => context.next_page,
      }
    )
  }

  const useGetAllGames = () => {
    return useQuery([`${repository.name}`], () => repository.getAllGames())
  }

  return {
    useGetById,
    useSearchPaginated,
    useGetAllGames,
  }
}
