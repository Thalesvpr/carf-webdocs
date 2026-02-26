import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.js'],
  },
  define: {
    // react-native-web needs __DEV__
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
  },
})
