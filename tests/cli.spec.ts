import { CLI } from "../JS-TS/solutions";

describe('Cli should work', () => {
    jest.setTimeout(10000);
    const cli = new CLI();

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    it('handleAdd should add new todo', async() => {
        await cli.run(['add', 'TestTodo']);
        await cli.run(['list']);

        const output = logSpy.mock.calls.map((call) => call.join(' ')).join('\n');
        expect(output).toContain('TestTodo');

        logSpy.mockRestore();
    })
})