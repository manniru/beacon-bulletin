// @flow
import type { Beacon, Room, Booking } from '../../apiTypes';

export type DataAction =
  | {| type: 'FETCH_BEACONS' |}
  | {| type: 'FETCH_BEACONS_STARTED' |}
  | {| type: 'FETCH_BEACONS_SUCCESS', beacons: Beacon[] |}
  | {| type: 'FETCH_BEACONS_ERROR', error: Object |}
  | {| type: 'FETCH_ROOMS' |}
  | {| type: 'FETCH_ROOMS_STARTED' |}
  | {| type: 'FETCH_ROOMS_SUCCESS', rooms: Room[] |}
  | {| type: 'FETCH_ROOMS_ERROR', error: Object |}
  | {| type: 'FETCH_BOOKINGS' |}
  | {| type: 'FETCH_BOOKINGS_STARTED' |}
  | {| type: 'FETCH_BOOKINGS_SUCCESS', bookings: Booking[] |}
  | {| type: 'FETCH_BOOKINGS_ERROR', error: Object |}
  | {| type: 'POST_BOOKING', booking: Booking |}
  | {| type: 'POST_BOOKING_STARTED' |}
  | {| type: 'POST_BOOKING_SUCCESS' |}
  | {| type: 'POST_BOOKING_ERROR', error: Object |}
  | {| type: 'STORE_RANGED_BEACONS', beacons: Beacon[] |};

export function fetchBeacons(): DataAction {
  return { type: 'FETCH_BEACONS' };
}

export function fetchBeaconsStarted(): DataAction {
  return { type: 'FETCH_BEACONS_STARTED' };
}

export function fetchBeaconsSuccess(beacons: Beacon[]): DataAction {
  return { type: 'FETCH_BEACONS_SUCCESS', beacons };
}

export function fetchBeaconsError(error: Object): DataAction {
  return { type: 'FETCH_BEACONS_ERROR', error };
}

export function fetchRooms(): DataAction {
  return { type: 'FETCH_ROOMS' };
}

export function fetchRoomsStarted(): DataAction {
  return { type: 'FETCH_ROOMS_STARTED' };
}

export function fetchRoomsSuccess(rooms: Room[]): DataAction {
  return { type: 'FETCH_ROOMS_SUCCESS', rooms };
}

export function fetchRoomsError(error: Object): DataAction {
  return { type: 'FETCH_ROOMS_ERROR', error };
}

export function fetchBookings(): DataAction {
  return { type: 'FETCH_BOOKINGS' };
}

export function fetchBookingsStarted(): DataAction {
  return { type: 'FETCH_BOOKINGS_STARTED' };
}

export function fetchBookingsSuccess(bookings: Booking[]): DataAction {
  return { type: 'FETCH_BOOKINGS_SUCCESS', bookings };
}

export function fetchBookingsError(error: Object): DataAction {
  return { type: 'FETCH_BOOKINGS_ERROR', error };
}
