// @flow

type BachApiRoom = {
  building: string,
  category: string,
  pk_big: string,
  label_verbose: string,
  size: number,
  bookable: number, // 1 means bookable
  id: number,
  label: string,
};

type BeaconBulletinRoom = {
  name: string,
  building: string,
  level: string,
};

export default function storeBachApiRoom(room: BachApiRoom): BeaconBulletinRoom {
  const { building, label } = room;

  return {
    name: label,
    building,
    level: label.substring(label.indexOf('.') + 1, label.lastIndexOf('.')),
  };
}
