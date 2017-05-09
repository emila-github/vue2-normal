import moment from 'moment'
export function datetime (value) {
  return value ? moment(value).format('YYYY-MM-DD HH:mm:ss') : '-'
}
export function dateonly (value) {
  return value ? moment(value).format('YYYY-MM-DD') : '-'
}
export default {
  datetime,
  dateonly
}
