/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Excluir el directorio Repositorio de la construcción
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        'Repositorio': 'commonjs Repositorio',
      })
    }
    return config
  },
}

export default nextConfig
