function test(spec) {
	spec.describe('My first test script', () => {
		spec.it('Test works', async () => {
			// await spec.fillIn('Scene.TextInput', 'some string');
			// await spec.press('Scene.button');
			// await spec.exists('NextScene');
			await spec.exists('Overview.ToArchive');
			await spec.press('Overview.ToItemForm');
			await spec.exists('ItemForm.ToOverview');
			await spec.press('ItemForm.ToOverView');
			await spec.exists('Overview.ToItemForm');
		});
	});
}

export { test };

