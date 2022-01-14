import glob from 'glob';
import path from 'path';
import defaultConfig from './webpack.config';
import {merge} from 'webpack-merge';

const initEntry = () => {
  const pathname = './src/**/*.*(js|jsx|ts|tsx)';
  const filepaths = glob.sync(pathname);
  const config:Record<string,any> = {};
  filepaths.forEach(filepath => {
    const filename = filepath.replace('./src','');
    config[filename] = filepath;
  });
  return config;
}

const entry = initEntry();

const outputFileName = (chunk:Record<string,any>) => {
  const name:string = chunk.chunk.name;
  const filename = name.replace('ts','js').replace('jsx','js');
  return filename;
}

const config:Record<string,any> = {
  entry,
  output:{
    filename:outputFileName,
    path:path.resolve(process.cwd(),'./lib'),
    libraryTarget:'commonjs2'
  },
  mode:'production',
}

export default merge(defaultConfig,config);