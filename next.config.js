
const nextConfig = {
  distDir: 'build', 

  images: {
    domains: ['roar.media']
  },

  async headers() {
    return [
      {
        source: '/(.*)', 
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', 
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
