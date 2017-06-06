import { INIT_PERIKOPEN, GET_TODAY_PERIKOPEN, SET_TODAY_PERIKOPEN } from '../constants'
import moment from 'moment'

export function initPerikopen(n){
	return {
		type: INIT_PERIKOPEN,
		payload: n
	}
}

export function getPerikopenToday() {
	var today = moment().format('YYYY-MM-YY');
	var now = moment(today).format('x');
	return {
		type: GET_TODAY_PERIKOPEN,
		payload: now
	}
}

export function setPerikopenToday(n) {
	return {
		type: SET_TODAY_PERIKOPEN,
		payload: n
	}
}