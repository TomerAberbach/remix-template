import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import { installGlobals } from '@remix-run/node'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'

installGlobals()

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    remix({
      appDirectory: `src`,
      ignoredRouteFiles: [`**/.*`],
    }),
    tsconfigPaths(),
    visualizer({ emitFile: true }),
  ],
})
