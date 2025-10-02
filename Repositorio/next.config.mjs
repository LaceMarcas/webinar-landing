/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración estricta de seguridad - NO ignorar errores
  eslint: {
    // Removido: ignoreDuringBuilds: true - Ahora se aplican reglas estrictas
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Removido: ignoreBuildErrors: true - Ahora se aplican verificaciones estrictas
    ignoreBuildErrors: false,
  },

  // Optimización de imágenes habilitada para mejor rendimiento
  images: {
    // Removido: unoptimized: true - Ahora se optimizan las imágenes
    unoptimized: false,
    domains: ['localhost', 'vercel-storage.com', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers de seguridad adicionales
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  // Configuración de compilación optimizada
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Configuración experimental para mejor rendimiento
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Configuración de salida para producción
  output: 'standalone',
}

export default nextConfig