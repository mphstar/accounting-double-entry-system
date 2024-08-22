const path = require("path");

module.exports = {
  // Konfigurasi lain...
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Pastikan ekstensi file sudah benar
  },
};
