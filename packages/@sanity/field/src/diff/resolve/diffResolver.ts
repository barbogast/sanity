import {ArrayOfOptionsFieldDiff} from '../../types/array/diff'
import {DatetimeFieldDiff} from '../../types/datetime/diff'
import {UrlFieldDiff} from '../../types/url/diff'
import {SlugFieldDiff} from '../../types/slug/diff'
import {DiffComponentResolver} from '../../types'

export const diffResolver: DiffComponentResolver = function diffResolver({schemaType}) {
  // datetime or date
  if (['datetime', 'date'].includes(schemaType.name)) {
    return DatetimeFieldDiff
  }

  if (schemaType.name === 'url') {
    return UrlFieldDiff
  }

  if (schemaType.name === 'slug') {
    return SlugFieldDiff
  }

  if (schemaType.jsonType === 'array' && Array.isArray((schemaType as any).options?.list)) {
    return ArrayOfOptionsFieldDiff
  }

  return undefined
}
