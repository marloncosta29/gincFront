import { action } from 'typesafe-actions'
import { Repository, RepositoryTypes } from './types'

export const loadRequest = () => action(RepositoryTypes.LOAD_REQUEST)
export const loadSuccess = (data: Repository[]) => action(RepositoryTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(RepositoryTypes.LOAD_FAILURE)