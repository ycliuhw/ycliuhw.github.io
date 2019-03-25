export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

export function isEmpty(str) {
  return !str || str === '' || str === 'undefined' || str === undefined;
}

export function isDigits(data) {
  return /^\d+$/.test(data);
}