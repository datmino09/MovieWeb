let _loading = false;
const _subs = new Set();

export function setLoading(val) {
  _loading = Boolean(val);
  _subs.forEach((s) => s(_loading));
}

export function getLoading() {
  return _loading;
}

export function subscribe(fn) {
  _subs.add(fn);
  return () => _subs.delete(fn);
}
