import type { Configuration } from 'webpack';
import {merge} from 'webpack-merge';
import libraryConfig from './config/create.library.config';

type CreateType = 'default'|'library';

interface Options {
  webpack?:Configuration,
}

const createConfig = (type:CreateType,options?:Options) => {
  let config = {};
  const {webpack={}} = options || {};
  if(type==='library'){
    config = libraryConfig;
  }
  return merge(config,webpack)
}

export default createConfig;