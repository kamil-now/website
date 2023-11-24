const alreadyVisitedKey = 'already-vsited';

export function isFirstVisit() {
  return !sessionStorage.getItem(alreadyVisitedKey);
}

export function registerFirstVisit() {
  sessionStorage.setItem(alreadyVisitedKey, 'true')
}
