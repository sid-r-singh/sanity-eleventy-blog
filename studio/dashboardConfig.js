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
                  buildHookId: '601d4376095b32eceb9e387f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-znmukvc7',
                  apiId: '24d55165-6e9e-43a6-9617-2da683c90cb5'
                },
                {
                  buildHookId: '601d437649428cd5186010bf',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-v2n8ndiv',
                  apiId: 'e7aaa698-e320-4c09-ab43-de907b937711'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sid-r-singh/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-v2n8ndiv.netlify.app', category: 'apps'}
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
