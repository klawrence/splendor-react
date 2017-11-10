export function authenticityToken() {
  return document.querySelector("meta[name=csrf-token]").content
}

export function defaultHeaders() {
  return {
    'X-CSRF-Token': authenticityToken(),
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
  }
}

