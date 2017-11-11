export function mapHash(hash, render) {
  return Object.keys(hash).map( (key) => (
    render(key, hash[key])
  ))
}