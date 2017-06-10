// @flow
import { createSelector } from 'reselect';

import type { ReduxState } from '../reducers';
import type { Room } from '../reducers/data';
import availableBeaconsSelector from './availableBeacons';

// This selector takes the ids of all available beacons and returns all the rooms assigned to it
const availableRoomsSelector: (state: ReduxState) => Room[] = createSelector(
  state => state.data,
  state => availableBeaconsSelector(state),
  (data, availableBeacons) => {
    const { rooms } = data;
    const availableRooms = availableBeacons.map(ab => {
      return ab.assignedRooms.map(ar => rooms[ar]);
    });

    return availableRooms;
  }
);

export default availableRoomsSelector;