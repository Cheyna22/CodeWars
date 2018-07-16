function validatePIN (pin) {
  if(pin.length === 4 || pin.length === 6) {
  return /[a-z][0-9]\D/.test(pin);
  } else {
  return false;
  }
}