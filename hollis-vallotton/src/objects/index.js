import Home from '@/components/Home'
import Work from '@/components/Work'
import About from '@/components/About'
import Contact from '@/components/Contact'

export const orderArray = [
  { name: 'Home', component: Home },
  { name: 'About', component: About },
  { name: 'Work', component: Work },
  { name: 'Contact', component: Contact }
]

export const order = orderArray.map(section => section.name)
