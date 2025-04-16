export async function rewrites() {
  return [{
    source: '/gallery-uploads/:path*',
    destination: '/uploads/gallery/:path*'
  }]
}