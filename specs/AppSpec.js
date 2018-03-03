function test(spec) {
	spec.describe('My feature', () => {
		spec.it('works', async () => {
			await spec.fillIn('Scene.TextInput', 'some string');
			await spec.press('Scene.button');
			await spec.exists('NextScene');
		});
	});
}

export { test };

