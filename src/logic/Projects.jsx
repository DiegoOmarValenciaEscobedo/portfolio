import calculapp from '../assets/images/projects/Calculapp.png';
import ds from '../assets/images/projects/DataStructure.png';
import sgt from '../assets/images/projects/SGT.png';
import ingzport from '../assets/images/projects/Ingzport.png';
import agromunnity from '../assets/images/projects/Agromunnity.png';
import adoptme from '../assets/images/projects/AdoptMe.png';

const Projects=[
    {
        title:'Porfolio Website',
        description:['This website was built using React and Material UI.', <br/>, 'It is hosted on Netlify and the code is available on Github.'],
        image:'https://i.imgur.com/0j1q6bD.png',
        rol:'Fullstack developer',
        technologies:['React','Material UI','Javascript', 'Netlify', 'Github', 'Vite'],
        git: ''
    },
    {
        title:'Bus Central management system',
        description:['This desktop application was built using Java and mySQL.', <br/>, 'It´s only to get a grade in my university and show my skills.', <br/>, 'It has a login system, CRUD, reports, and more.'],
        image:'https://i.imgur.com/0j1q6bD.png',
        rol:'Fullstack developer',
        technologies:['java', 'mysql', 'netbeans', 'github'],
        git: ''
    },
    {
        title:'Adopt-Me',
        description:['This web application was built using php and mySQL.',<br/>,'It´s only to get a grade in my university and show my skills.', <br/>, 'It has a login system, CRUD, reports, and more.'],
        image:adoptme,
        rol:'Fullstack developer',
        technologies:['php', 'mysql', 'github'],
        git: 'https://github.com/DiegoOmarValenciaEscobedo/adopt-me.git'
    },
    {
        title:'Agromunnity website',
        description:['This website was built using Django with Django rest framework and sqlite.', <br/>, 'It has a login system, CRUD, excel reports, and more.'],
        image: agromunnity,
        rol:'Fullstack developer',
        technologies:['Django', 'Django rest framework', 'sqlite', 'github'],
        git: 'https://github.com/DiegoOmarValenciaEscobedo/Agromunnity.git'
    },
    {
        title:'Point of sale system for a clothing store',
        description:['This desktop application was built using Java and mySQL.', <br/>, 'It´s only to get a grade in my university and show my skills.', <br/>, 'It has a login system, CRUD, reports, and more.'],
        image: ingzport,
        rol:'Fullstack developer',
        technologies:['java', 'mysql', 'netbeans', 'github'],
        git: 'https://github.com/DiegoOmarValenciaEscobedo/ingzport.git'
    },
    {
        title:'SGT',
        description:['This web application was built using django and postgresql.', <br/>, 'It has a login system, CRUD, excel reports, pdf certificates and more.'],
        image: sgt,
        rol:'Backend developer',
        technologies:['Django', 'postgresql', 'github', 'bootstrap'],
        git: 'https://github.com/DiegoOmarValenciaEscobedo/sgt.git'
    },
    {
        title:'Data structures with c++',
        description:['I worked with data structures in c++ like:',<br/>,'-Stack',<br/>,'-Queue',<br/>,'-List',<br/>,'-Binary tree',<br/>,'-Graph',<br/>,'-Hash table',<br/>,'It´s only to get a grade in my university and show my skills.'],
        image: ds,
        rol:'Data structures developer',
        technologies:['c++', 'github'],
        git: 'https://github.com/DiegoOmarValenciaEscobedo/data-structures.git'
    },
    {
        title:'React native calculator',
        description:['This mobile application was built using react native.',<br/>,'It´s only to get a grade in my university and show my skills.'],
        image: calculapp,
        rol:'Frontend developer',
        technologies:['react native', 'github', 'expo', 'javascript'],
        git: 'https://github.com/DiegoOmarValenciaEscobedo/calculapp.git'
    }
]

export default Projects;