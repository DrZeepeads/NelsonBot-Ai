module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./App'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './App/components',
          '@screens': './App/screens',
          '@utils': './App/utils',
          '@api': './App/api',
          '@hooks': './App/hooks',
          '@features': './App/features',
        },
      },
    ],
  ],
};

