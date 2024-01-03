export const emailConfig = {
  from: 'pengyw97@gmail.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://wes1ey.cc`
      : 'http://localhost:3000',
}
