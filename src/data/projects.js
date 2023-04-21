import preventHelp from '../assets/project-images/preventHelp.png'
import elRomano from '../assets/project-images/elRomano.png'

//AVALIABLE COLORS:
/**
 * red ,orange, yellow, green, teal, blue, cyan, purple, pink,
 * */

export const projectsData = [
  {
    id: 1,
    name: 'Prevent Help',
    image: preventHelp,
    desc:
      'This was my first web development project where we can see information about the COVID-19 pandemic and register through a form to receive more information as well as health centers on the map.',
    linkRepository: 'https://github.com/eduarchilon/preveentHealth',
    linkDeploy: 'https://eduarchilon.github.io/preveentHealth/index.html',
    tecnologies: [
      { id: 1, name: 'Html5', color: 'yellow' },
      { id: 2, name: 'Css3', color: 'red' },
      { id: 3, name: 'JavaScript', color: 'whiteAlpha' },
    ],
  },
  {
    id: 2,
    name: 'Librería El Romano',
    image: elRomano,
    desc:
      'This project is an ecommerce website that sells books from different categories. It works through login authentication and it was done in a group for a programming workshop at the university.',
    linkRepository:
      'https://github.com/Lenh22/TP-TALLER-2-LIBROS/tree/dev/Front-End/libros-angular',
    linkDeploy: 'https://tp-taller-2-libros.vercel.app/',
    tecnologies: [
      { id: 1, name: 'Angular', color: 'yellow' },
      { id: 2, name: 'Boostrap 5', color: 'red' },
      { id: 3, name: 'Firebase', color: 'whiteAlpha' },
    ],
  },
  // {
  //   id: 3,
  //   name: 'Project 3',
  //   image: '',
  //   desc: 'Hola soy una desc.',
  //   linkRepository: 'www.com',
  //   linkDeploy: 'www.oo',
  //   tecnologies: [
  //     { id: 1, name: 'Java' },
  //     { id: 2, name: 'Php' },
  //     { id: 3, name: 'JavaScript' },
  //   ],
  // },
  // {
  //   id: 4,
  //   name: 'Project 4',
  //   image: '',
  //   desc: 'Hola soy una desc.',
  //   linkRepository: 'www.com',
  //   linkDeploy: 'www.oo',
  //   tecnologies: [
  //     { id: 1, name: 'Java' },
  //     { id: 2, name: 'Php' },
  //     { id: 3, name: 'JavaScript' },
  //   ],
  // },
]
