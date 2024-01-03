export const seo = {
  title: 'Wesley Peng',
  description: '我叫 Wesley，一名前端开发工程师。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://wes1ey.cc'
      : 'http://localhost:3000'
  ),
} as const
