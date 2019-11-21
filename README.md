# prismic-react-typescript
A detailed example of Prismic CMS integration in ReactJS and TypeScript.

## About

The solution is a fully working example of headless Prismic CMS (https://prismic.io/) integration with a bespoke NodeJS/React application with TypeScript.

### What it contains

1) Separated and fully tested Prismic module that you can plug to your application
2) Smart React application where Prismic content is provided to components as a `prop`

## Approach

There are many different ways to integrate Prismic CMS with your NodeJS project. Prismic endpoints are relatively fast in providing the response, although I felt like I prefer to checkout whole the content upon loading the project first time, then cache it on my end and process accordingly as per React App route settings. It allows to avoid a constant spinner and helps in prerending in-flight. The working, commercial example you can see on my website: https://www.bazazeglarska.pl

In order to correctly address the issue we need to create some assumtions on web application side and on Prismic side.

### Prismic CMS
In regard with the Prismic repository

1) keep the Prismic repository reasonabily simple so that users (other department team members and content editors) can understand it and intuitively start working on it without a fear of change
2) make Prismic responsible only for content delivery
3) split the content on Prismic side into two categories:
  1) dynamic data (i.e. list of podcasts, posts, articles, news, images etc.)
  2) text within a layout
4) each page can have a different layout
5) each page can have dynamic content assigned or linked as the same slug
6) support many languages

### Web application

1) Keep it simple for junior/mid devs on React side
2) There needs to be a logical bridge and consistency between Prismic naming and application naming
3) Keep TypeScript simple


