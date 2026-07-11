import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import { dirname, resolve } from 'node:path'

export default defineConfig({
	build: {
		rolldownOptions: {
			input: {
				main: resolve(import.meta.dirname, 'index.html'),
				rsvp: resolve(import.meta.dirname, 'rsvp/index.html'),
			},
		},
	},
	plugins: [cloudflare()],
});
