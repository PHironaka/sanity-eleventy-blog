export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff89c4a6176d02850b1f3c5',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-e1b7f3kn',
                  apiId: '395ad2df-c405-422b-8658-2e10e8dd1d29'
                },
                {
                  buildHookId: '5ff89c4aeb32771aac2515a4',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-gbnmu7mp',
                  apiId: '557b2cec-1ae9-4522-8962-0b3c05651a12'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PHironaka/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-gbnmu7mp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
