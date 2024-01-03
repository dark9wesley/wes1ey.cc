export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://wes1ey.cc'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
