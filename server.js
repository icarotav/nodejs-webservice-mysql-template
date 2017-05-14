import setupApp from './src/app';

function startApp() {
	const port = process.env.PORT || 4000;

	setupApp()
		.listen(port, () => console.log(`App running at http://localhost:${port}`))
}

export default startApp;