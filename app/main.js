// import unused from '../exports/exporter'; // <-- Throws a no-cycle error when uncommented

import unused from 'exports/exporter'; // <-- Will not throw a no-cycle error, but it should!

export default function () {
  return;
}
