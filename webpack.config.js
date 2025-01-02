const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Para processar arquivos JS
        exclude: /node_modules/,
        use: 'babel-loader', // Usar Babel para transpilar
      },
      {
        test: /\.css$/, // Para processar arquivos CSS
        use: ['style-loader', 'css-loader'], // Adiciona o CSS ao bundle
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Suporte para .jsx
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Modelo do HTML
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Alvo do conteúdo estático
    },
    compress: true,
    port: 3000, // Porta do servidor de desenvolvimento
  },
};
