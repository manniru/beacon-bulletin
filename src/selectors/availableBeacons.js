// @flow
import { createSelector } from 'reselect';

import type { ReduxState } from '../reducers';
import type { Beacon } from '../reducers/data';

// This selector takes an array of beacon ids to return a list of beacons
const availableBeaconsSelector: (state: ReduxState) => Beacon[] = createSelector(
  state => state.data,
  data => {
    const { beacons, rangedBeacons } = data;
    const availableBeacons = rangedBeacons.map(rb => beacons.byId[rb]);

    return availableBeacons;
  }
);

export default availableBeaconsSelector;
