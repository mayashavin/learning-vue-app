import type { App } from 'vue';

export default {
	install(app: App<Element>, options: { limit: number }) {
		const truncate = (str: string) => {
			if (str.length > options.limit) {
				return `${str.slice(0, options.limit)}...`;
			}
			
			return str;
		}
		app.config.globalProperties.$truncate = truncate;
		
		app.provide("plugins", { truncate }); //For <script setup> only
	}
}