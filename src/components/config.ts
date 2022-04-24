// import { ref } from 'vue'
// import { setCssVar } from 'quasar'

// setCssVar('primary', '#616161')
// setCssVar('secondary', '#e0e0e0')
// setCssVar('info', '#eeeeee')
// setCssVar('dark', '#424242')

// const Info = ref({
//   title: 'Personal Info',
//   name: 'John Doe',
//   email: 'john@doe.com',
//   mobile: '+12 34567890',
//   gh_username: 'SignorMercurio',
//   blog: 'https://example.com',
// })

// const JobIntention = ref({
//   title: 'Job Intention',
//   jobs: [
//     {
//       icon: 'fas fa-user-cog',
//       name: 'IT Developer',
//     },
//   ],
// })

// const Skills = ref({
//   title: 'Skills',
//   skills: [
//     {
//       label: 'Go',
//       value: 90,
//     },
//     {
//       label: 'Vue.js',
//       value: 90,
//     },
//     {
//       label: 'HTML / CSS / Javascript',
//       value: 90,
//     },
//     {
//       label: 'Python',
//       value: 85,
//     },
//     {
//       label: 'Docker',
//       value: 85,
//     },
//     {
//       label: 'Kubernetes',
//       value: 80,
//     },
//     {
//       label: 'C / C++',
//       value: 80,
//     },
//     {
//       label: 'Shell',
//       value: 75,
//     },
//     {
//       label: 'Typescript',
//       value: 75,
//     },
//     {
//       label: 'Assembly',
//       value: 70,
//     },
//     {
//       label: 'SQL',
//       value: 70,
//     },
//   ],
// })

// const Misc = ref({
//   title: 'Miscellaneous',
//   misc: [
//     'Lorem ipsum',
//     'dolor sit amet',
//     'consectetur adipiscing',
//     'elit Integer maximus',
//     'commodo magna',
//     'sit amet congue',
//     'dui mattis sit amet',
//     'Praesent ornare',
//     'felis nulla',
//   ],
// })

// const Edus = ref({
//   title: 'Education',
//   edus: [
//     {
//       school: 'University of Cosmos',
//       time: '2000.09 - 2001.07',
//       major: 'Human and Cosmos',
//       degree: 'Bachelor',
//       link: 'https://www.example.com',
//     },
//     {
//       school: 'University of Galaxy',
//       time: '2001.09 - 2002.11',
//       major: 'The other side of Galaxy',
//       degree: 'Master',
//       link: 'https://www.example.com',
//     },
//   ],
// })

// const Works = ref({
//   title: 'Internship',
//   works: [
//     {
//       company: 'Lorem ipsum dolor sit amet',
//       time: '2000.01 - 2000.07',
//       work: 'Engineer',
//       link: 'https://example.com',
//     },
//     {
//       company: 'Consectetur adipiscing elit Nulla ut nisl ac sapien',
//       time: '2001.01 - 2001.07',
//       work: 'Researcher',
//       link: 'https://example.com',
//     },
//   ],
// })

// const Awards = ref({
//   title: 'Awards',
//   header: ['Year', 'Competition Name', 'Prize'],
//   awards: [
//     {
//       competition: 'Praesent ornare felis nulla',
//       time: '2019',
//       award: 'dui mattis sit amet',
//     },
//     {
//       competition: 'non venenatis enim auctor ut',
//       time: '2017,2018,2019',
//       award: 'Sed nec ante',
//     },
//     {
//       competition: 'in mauris tempus fringilla',
//       time: '2019',
//       award: 'Vestibulum aliquam',
//     },
//     {
//       competition: 'maximus est scelerisque vestibulum',
//       time: '2019',
//       award: 'Aliquam ac',
//     },
//     {
//       competition: 'commodo, auctor nunc nec',
//       time: '2019',
//       award: 'arcu In ac, a justo',
//     },
//     {
//       competition: 'vestibulum Quisque lacus',
//       time: '2019',
//       award: 'facilisis et, tincidunt sit',
//     },
//     {
//       competition: 'Ut gravida rutrum nisi',
//       time: '2019',
//       award: 'eget egestas',
//     },
//     {
//       competition: 'Praesent ultricies nulla',
//       time: '2020',
//       award: 'et semper, auctor eget',
//     },
//     {
//       competition: 'Nunc et porta nunc',
//       time: '2020',
//       award: 'Donec egestas orci',
//     },
//     {
//       competition: 'sed condimentum pharetra',
//       time: '2020',
//       award: 'in ex vel lectus',
//     },
//   ],
// })

// const OpenSrc = ref({
//   title: 'Open Source Contribution',
//   openSrc: [
//     'SignorMercurio/Resume-Template',
//     'actions/starter-workflows',
//     'actions/toolkit',
//     'actions/setup-node',
//     'actions/javascript-action',
//     'actions/typescript-action',
//     'actions/labeler',
//     'actions/http-client',
//   ],
// })

// const Projects = ref({
//   title: 'Projects',
//   projects: [
//     {
//       name: 'Curabitur',
//       desc: 'viverra lectus sit amet ullamcorper',
//       tech: ['HTML', 'CSS', 'JS'],
//     },
//     {
//       name: 'posuere Fusce',
//       desc: 'varius faucibus mi non aliquam Morbi',
//       tech: ['C', 'Assembly'],
//     },
//     {
//       name: 'scelerisque viverra',
//       desc: 'massa ut viverra',
//       tech: ['Vue.js'],
//       badge: 'Commercial use',
//       url: 'https://example.com',
//       detail:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisl ac sapien elementum posuere.',
//     },
//     {
//       name: 'pellentesque vel',
//       desc: 'Morbi accumsan sapien',
//       tech: ['Python'],
//       badge: 'University use',
//       detail:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisl ac sapien elementum posuere.',
//     },
//     {
//       name: 'quis rhoncus',
//       desc: 'viverra orci magna',
//       tech: ['Go'],
//       detail:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisl ac sapien elementum posuere.',
//     },
//     {
//       name: 'tempus arcu',
//       desc: 'eu varius ligula',
//       tech: ['C++'],
//       badge: 'Commercial use',
//       detail:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisl ac sapien elementum posuere.',
//     },
//     {
//       name: 'ligula vel eros',
//       desc: 'Suspendisse quis nunc mollis',
//       tech: ['Shell'],
//       badge: 'Commercial use',
//     },
//     {
//       name: 'aliquam elit ac',
//       desc: 'placerat nibh',
//       tech: ['Node.js', 'Java'],
//       badge: 'Commercial use',
//       detail:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisl ac sapien elementum posuere.',
//     },
//     {
//       name: 'Nam feugiat',
//       desc: 'mattis nisi in pellentesque',
//       tech: ['Ruby'],
//       badge: 'University use',
//       detail:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisl ac sapien elementum posuere.',
//     },
//     {
//       name: 'enim scelerisque',
//       desc: 'vulputate Donec vulputate',
//       tech: ['Rust'],
//     },
//     {
//       name: 'orci diam',
//       desc: 'vel consequat',
//       tech: ['Electron'],
//     },
//     {
//       name: 'mauris pretium et',
//       desc: 'Fusce a aliquet metus Fusce convallis tortor',
//       tech: ['Haskell'],
//       badge: 'Production-ready',
//       detail:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisl ac sapien elementum posuere.',
//     },
//     {
//       name: 'nec velit tincidunt',
//       desc: 'ut congue nibh accumsan',
//       tech: ['PHP'],
//       badge: 'Production-ready',
//       detail:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisl ac sapien elementum posuere.',
//     },
//     {
//       name: 'Quisque pellentesque',
//       desc: 'mollis lorem at pulvinar mi mattis',
//       tech: ['Lisp'],
//       url: 'https://www.example.com',
//     },
//   ],
// })

// export {
//   Info,
//   JobIntention,
//   Skills,
//   Misc,
//   Edus,
//   Works,
//   Awards,
//   OpenSrc,
//   Projects,
// }
