import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Remplacez 'VOTRE-REPO' par le nom exact de votre dépôt GitHub
// Exemple: si votre repo est github.com/username/stylo-ai → base: '/stylo-ai/'
export default defineConfig({
  plugins: [react()],
  base: '/stylo-ai/', // ← CHANGEZ ICI avec le nom de votre repo
})
