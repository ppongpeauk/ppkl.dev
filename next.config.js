module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        "source": "/:path*",
        "has": [
          {
            "type": "host",
            "value": "card.ppkl.dev"
          }
        ],
        "destination": "/card/:path*"
      }
    ]
  }
}
