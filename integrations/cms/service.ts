// Wix CMS service disabled for static GitHub Pages deployment
export const cms = {
  getCollection: () => Promise.resolve({ items: [] }),
  getItem: () => Promise.resolve(null),
  query: () => ({
    find: () => Promise.resolve({ items: [] }),
  }),
};

export default cms;
