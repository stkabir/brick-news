import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'titleEn',
      path: 'src/content/articles/*',
      format: { data: 'yaml' },
      schema: {
        titleEn: fields.slug({ name: { label: 'Title (EN)' } }),
        titleEs: fields.text({ label: 'Title (ES)' }),
        summaryEn: fields.text({ label: 'Summary (EN)', multiline: true }),
        summaryEs: fields.text({ label: 'Summary (ES)', multiline: true }),
        image: fields.text({ label: 'Image URL' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Business', value: 'business' },
            { label: 'Events', value: 'events' },
            { label: 'Headline News', value: 'headline-news' },
            { label: 'Home', value: 'home' },
            { label: 'Lifestyle', value: 'lifestyle' },
            { label: 'News', value: 'news' },
            { label: 'Real Estate', value: 'real-estate' },
          ],
          defaultValue: 'news',
        }),
        author: fields.text({ label: 'Author' }),
        date: fields.date({ label: 'Date' }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        priority: fields.integer({ label: 'Priority (higher = more visible)', defaultValue: 0 }),
      },
    }),

    categories: collection({
      label: 'Categories',
      slugField: 'titleEn',
      path: 'src/content/categories/*',
      format: { data: 'yaml' },
      schema: {
        titleEn: fields.slug({ name: { label: 'Title (EN)' } }),
        titleEs: fields.text({ label: 'Title (ES)' }),
      },
    }),

    sections: collection({
      label: 'Sections',
      slugField: 'titleEn',
      path: 'src/content/sections/*',
      format: { data: 'yaml' },
      schema: {
        titleEn: fields.slug({ name: { label: 'Title (EN)' } }),
        titleEs: fields.text({ label: 'Title (ES)' }),
        descriptionEn: fields.text({ label: 'Description (EN)', multiline: true }),
        descriptionEs: fields.text({ label: 'Description (ES)', multiline: true }),
        sectionLayout: fields.select({
          label: 'Layout',
          options: [
            { label: 'Hero', value: 'hero' },
            { label: 'Grid', value: 'grid' },
            { label: 'List', value: 'list' },
            { label: 'Sidebar', value: 'sidebar' },
          ],
          defaultValue: 'list',
        }),
        categories: fields.array(
          fields.text({ label: 'Category slug' }),
          { label: 'Categories', itemLabel: (props) => props.value }
        ),
        order: fields.integer({ label: 'Order', defaultValue: 0 }),
      },
    }),
  },
});
