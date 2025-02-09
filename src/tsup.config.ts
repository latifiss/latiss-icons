import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],   
  dts: true,               
  clean: true,              
  external: ['react', 'react-native'], 
  minify: false,           
  skipNodeModulesBundle: true,
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : '.js',
  }),
});

