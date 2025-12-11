export default {
	async fetch(request, env, ctx) {
		if (request.url.includes('/api/') || request.url.endsWith('/login') || request.url.endsWith('/logout') || request.url.endsWith('/css/theme.css')) {
			const url = new URL(request.url);
			url.hostname = env.BACKEND_HOSTNAME;
			const modifiedRequest = new Request(url.toString(), request);
			return fetch(modifiedRequest);
		}
		return new Response('Not Found', { status: 404 });
	},
};
