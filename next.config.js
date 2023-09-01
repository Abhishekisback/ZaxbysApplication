/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "fakestoreapi.com",
      "res.cloudinary.com",
      "zaxbys-strapi.onrender.com",
    ],
  },
};

module.exports = nextConfig;
