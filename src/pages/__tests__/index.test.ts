import pages, { type Route } from '../index';

///////////////////// MOCKS /////////////////////
vi.mock('../404', () => ({ default: null }));
vi.mock('../home', () => ({ default: null }));
/////////////////////////////////////////////////

test('PAGES', async () => {
  /* Assertions */
  const testChildrens = async (childrens: Route[]) => {
    for (const route of childrens) {
      if (route.lazy) await expect(route.lazy()).resolves.toEqual({ Component: null });
      if (route.children) await testChildrens(route.children);
    }
  };

  await testChildrens(pages);
});
