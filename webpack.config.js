export default (options, webpack) => {
    const lazyImports = [
      '@nestjs/microservices/microservices-module',
      '@nestjs/websockets/socket-module',
    ];
  
    return {
      ...options,
        externals: [],
        context: __dirname,
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js',
            libraryTarget: 'commonjs2',
          },
      plugins: [
        ...options.plugins,
        new webpack.IgnorePlugin({
          checkResource(resource) {
            if (lazyImports.includes(resource)) {
              try {
                require.resolve(resource);
              } catch (err) {
                return true;
              }
            }
            return false;
          },
        }),
      ],
    };
  };
  