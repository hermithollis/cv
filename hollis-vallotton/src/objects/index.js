import Home from '@/components/Home'
import Skillset from '@/components/Skillset'
import About from '@/components/About'
import Contact from '@/components/Contact'

export const orderArray = [
  { name: 'Home', component: Home },
  { name: 'About', component: About },
  { name: 'Skillset', component: Skillset },
  { name: 'Contact', component: Contact }
]

export const order = orderArray.map(section => section.name)

export const skillset = [
  {
    name: 'frontend',
    skills: [
      {
        icon: 'js.png',
        text: 'JavaScript'
      },
      {
        icon: 'html-orange.png',
        text: 'HTML'
      },
      {
        icon: 'css-blue.png',
        text: 'CSS'
      },
      {
        icon: 'materialui.png',
        text: 'Material-UI'
      },
      {
        icon: 'bootstrap.png',
        text: 'Bootstrap'
      },
      {
        icon: 'react.png',
        text: 'React.js'
      },
      {
        icon: 'vue.png',
        text: 'Vue.js'
      },
      {
        icon: 'redux.png',
        text: 'Redux'
      }
    ]
  },
  {
    name: 'backend',
    skills: [
      {
        icon: 'node.png',
        text: 'Node.js'
      },
      {
        icon: 'express.png',
        text: 'Express.js'
      },
      {
        icon: 'sails.png',
        text: 'Sails.js'
      }
    ]
  },
  {
    name: 'libraries',
    skills: [
      {
        icon: 'axios.png',
        text: 'Axios'
      },
      {
        icon: 'immutable.png',
        text: 'Immutable.js'
      }
    ]
  },
  {
    name: 'databases',
    skills: [
      {
        icon: 'mysql.png',
        text: 'MySql'
      }
    ]
  },
  {
    name: 'testing',
    skills: [
      {
        icon: 'jest.png',
        text: 'Jest'
      }
    ]
  },
  {
    name: 'other',
    skills: [
      {
        icon: 'git.png',
        text: 'Git'
      },
      {
        icon: 'docker.png',
        text: 'Docker'
      },
      {
        icon: 'webpack.png',
        text: 'Webpack'
      },
      {
        icon: 'prettier.png',
        text: 'Prettier'
      },
      {
        icon: 'eslint.png',
        text: 'EsLint'
      },
      {
        icon: 'jira.png',
        text: 'Jira'
      }
    ]
  }
]

export const constants = {
  email: 'hollis.d.vallotton@gmail.com',
  resume_url: 'https://hollisvallottondev.github.io',
  github: 'https://github.com/hollisvallottondev',
  linked_in: 'https://www.linkedin.com/in/hollis-vallotton/'
}
