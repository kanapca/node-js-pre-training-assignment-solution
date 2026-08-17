import { CLI } from "../JS-TS/solutions";

describe('Cli should work', () => {
    jest.setTimeout(10000);
    const cli = new CLI();

    

    it('handleAdd should add new todo', async() => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        await cli.run(['add', 'TestTodo']);
        await cli.run(['list']);

        const output = logSpy.mock.calls.map((call) => call.join(' ')).join('\n');
        expect(output).toContain('TestTodo');

        logSpy.mockRestore();
    });

    it('toggle should change todo status', async() => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        await cli.run(['add', 'Toggle me!', 'I shall be toggled']);
        await cli.run(['complete', '5']);
        await cli.run(['list']);

        const output = logSpy.mock.calls.map((call) => call.join(' ')).join('\n');
        expect(output).toContain('Completed');

        logSpy.mockRestore();
    });
})