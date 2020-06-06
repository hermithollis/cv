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
  linked_in: 'https://www.linkedin.com/in/hollis-vallotton/',
  formspree: 'https://formspree.io/xknqjybd'
}

export const about = [
  `I'm a software engineer with experience working in most parts of a project such as deploying, database design, front-end and back-end. Most of that experience is divided between frontend and backend with the former being my main strength. `,
  `Driven by my mission to simplify people's lives one project at a time, line by line; I always keep in mind that there's no time to waste, especially when performing essential tasks. `,
  `My passion for simplification and improvement paired with my determination to get things done has led me to build multiple projects which have improved the way users perform their jobs and utilize services offered by my clients. `,
  `Along my career I've gone from intern to leading a project and I have no intent to stop improving. I consider myself a compulsive learner in a vertical and horizontal sense. During my time as a project lead I had the chance to mentor a younger developer who was in the same position as me when I started and successfully transferring my knowledge to them while simultaneously delivering a product with great impact has been one if not the most rewarding experience I've had during my career. `,
  `I am currently working as a freelancer and I'm looking for my next challenge in a full time position. Remote opportunities would better suit my current lifestyle but I'm open to relocate if an exciting opportunity comes my way. `
]
