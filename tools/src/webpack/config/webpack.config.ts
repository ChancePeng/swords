import type {Configuration} from 'webpack';
import { CleanPlugin } from 'webpack';

const defaultConfig:Configuration =  {
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
  plugins:[
    new CleanPlugin()
  ],
  externals:/(react|glob|babel-runtime)/
}

export default defaultConfig;