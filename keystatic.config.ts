import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  locale: 'es-ES',
  ui: {
    brand: { name: 'Brickell News' },
  },
  collections: {
    articles: collection({
      label: 'Noticias',
      slugField: 'titleEn',
      path: 'src/content/articles/*',
      format: { data: 'yaml' },
      schema: {
        titleEn: fields.slug({
          name: { label: 'Titulo (en)' },
        }),
        titleEs: fields.text({
          label: 'Titulo (es)',
          validation: { isRequired: true },
        }),
        summaryEn: fields.text({
          label: 'Resumen (en)',
          multiline: true,
          validation: { isRequired: true },
        }),
        summaryEs: fields.text({
          label: 'Resumen (es)',
          multiline: true,
          validation: { isRequired: true },
        }),
        image: fields.url({
          label: 'Imagen',
          validation: { isRequired: true },
        }),
        category: fields.relationship({
          label: 'Categoria',
          collection: 'categories',
          validation: { isRequired: true },
        }),
        author: fields.text({
          label: 'Autor',
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: 'Fecha',
          validation: { isRequired: true },
        }),
        featured: fields.checkbox({
          label: 'Destacada',
          defaultValue: false,
        }),
        priority: fields.integer({
          label: 'Prioridad',
          defaultValue: 0,
          validation: { min: 0, max: 10 },
        }),
      },
    }),

    categories: collection({
      label: 'Categorias',
      slugField: 'titleEn',
      path: 'src/content/categories/*',
      format: { data: 'yaml' },
      schema: {

        titleEs: fields.text({
          label: 'Nombre (es)',
          validation: { isRequired: true },
        }),
        titleEn: fields.slug({
          name: { label: 'Nombre (en)' },
        }),
      },
    }),
  },
});
