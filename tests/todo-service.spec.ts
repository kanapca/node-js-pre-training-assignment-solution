import { TodoApi } from '../JS-TS/solutions/todo-api';
import { TodoService } from "../JS-TS/solutions/todo-service";

describe('create', () => {
  jest.setTimeout(1000);
  const service = new TodoService(new TodoApi());

  it('create() adds todo', async() => {
      const created = await service.create('Service Item');
      expect(created.title).toBe('Service Item');
  })

  it('toggleStatus() should change status', async() => {
    const [todo] = await service.search('service');
    const toggled = await service.toggleStatus(todo!.id);
    expect(toggled.status).not.toBe(todo!.status);
  })

  it('search() should return matching items', async() => {
    const list = await service.search('SERVICE');
    expect(list.length).toBeGreaterThan(0);
  })


  it('error must be thrown when updating non-existent id', async() => {
    await expect(service.toggleStatus(-1)).rejects.toThrow();
  })

  it('error must be thrown when creating a todo without a title', async() => {
    await expect(service.create()).rejects.toThrow();
  })

  it('error must be thrown when searching for a todo without a keyword', async() => {
    await expect(service.search()).rejects.toThrow();
  })
})