import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.gitdemo',
  appName: 'gitdemo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
