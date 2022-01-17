const path = require('path');
const glob = require('glob');

const initEntry = () => {
  const pathname = './src/**/*.*(js|jsx|ts|tsx)';
  const filepaths = glob.sync(pathname);
  const config = {};
  filepaths.forEach(filepath => {
    const filename = filepath.replace('./src','');
    config[filename] = filepath;
  });
  return config;
}

const entry = initEntry();

const outputFileName = (chunk) => {
  const name = chunk.chunk.name;
  const filename = name.replace('ts','js').replace('jsx','js');
  return filename;
}

module.exports = {
  entry,
  output:{
    filename:outputFileName,
    path:path.resolve(process.cwd(),'./lib'),
    libraryTarget:'commonjs2'
  },
  mode:'production',
  resolve:{
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module:{
    rules:[
      {
        test:/.(js|jsx|ts|tsx)$/,
        use:[
          'babel-loader',
          'ts-loader',
        ],
        exclude:/node_modules/
      }
    ]
  },
  externals:/(^react|glob|^babel-runtime|^webpack|path)/
}