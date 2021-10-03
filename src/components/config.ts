import { ref } from 'vue'

const Info = ref({
  name: 'John Doe',
  email: 'john@doe.com',
  mobile: '+12 34567890',
  gh_username: 'SignorMercurio',
  blog: 'https://example.com',
})

const Skills = ref([
  {
    label: 'Go',
    value: 95,
  },
  {
    label: 'HTML / CSS / Javascript',
    value: 90,
  },
  {
    label: 'Typescript',
    value: 75,
  },
  {
    label: 'Vue.js',
    value: 90,
  },
  {
    label: 'Python',
    value: 80,
  },
  {
    label: 'C',
    value: 85,
  },
  {
    label: 'SQL',
    value: 70,
  },
  {
    label: 'Docker',
    value: 80,
  },
  {
    label: 'Kubernetes',
    value: 90,
  },
])

const Misc = ref([
  'Lorem ipsum',
  'dolor sit amet',
  'consectetur adipiscing',
  'elit Integer maximus',
  'commodo magna',
  'sit amet congue',
  'dui mattis sit amet',
  'Praesent ornare',
  'felis nulla',
  'non venenatis',
  'enim auctor ut',
])

const Edus = ref([
  {
    school: 'University of Cosmos',
    time: '2000.09 - 2001.07',
    major: 'Human and Cosmos',
    degree: '学士',
    link: 'https://www.example.com',
  },
  {
    school: 'University of Galaxy',
    time: '2001.09 - 2002.11',
    major: 'The other side of Galaxy',
    degree: '硕士',
    link: 'https://www.example.com',
  },
])

const WorkType = '实习'

const Works = ref([
  {
    company: 'Lorem ipsum dolor sit amet',
    time: '2000.01 - 2000.07',
    work: 'Engineer',
    link: 'https://example.com',
  },
  {
    company: 'Consectetur adipiscing elit',
    time: '2001.01 - 2001.07',
    work: 'Researcher',
    link: 'https://example.com',
  },
])

const Awards = ref([
  {
    competition: 'Integer maximus commodo magna',
    time: '2018',
    award: 'sit amet congue',
  },
  {
    competition: 'Praesent ornare felis nulla',
    time: '2019',
    award: 'dui mattis sit amet',
  },
  {
    competition: 'non venenatis enim auctor ut',
    time: '2017,2018,2019',
    award: 'Sed nec ante',
  },
  {
    competition: 'in mauris tempus fringilla',
    time: '2019',
    award: 'Vestibulum aliquam',
  },
  {
    competition: 'maximus est scelerisque vestibulum',
    time: '2019',
    award: 'Aliquam ac',
  },
  {
    competition: 'commodo, auctor nunc nec',
    time: '2019',
    award: 'arcu In ac',
    extra: 'a justo',
  },
  {
    competition: 'vestibulum Quisque lacus',
    time: '2019',
    award: 'facilisis et',
    extra: 'tincidunt sit',
  },
  {
    competition: 'Ut gravida rutrum nisi',
    time: '2019',
    award: 'eget egestas',
  },
  {
    competition: 'Praesent ultricies nulla',
    time: '2020',
    award: 'et semper',
    extra: 'auctor eget',
  },
  {
    competition: 'Nunc et porta nunc',
    time: '2020',
    award: 'Donec egestas orci',
  },
  {
    competition: 'sed condimentum pharetra',
    time: '2020',
    award: 'in ex vel lectus',
  },
])

const OpenSrc = ref([
  'SignorMercurio/Resume-Template',
  'actions/starter-workflows',
  'actions/toolkit',
  'actions/setup-node',
  'actions/javascript-action',
  'actions/typescript-action',
  'actions/labeler',
  'actions/http-client',
])

const Projects = ref([
  {
    name: 'Curabitur',
    desc: 'viverra lectus sit amet ullamcorper',
    tech: ['HTML', 'CSS', 'JS'],
  },
  {
    name: 'posuere Fusce',
    desc: 'varius faucibus mi non aliquam Morbi',
    tech: ['C', 'Assembly'],
  },
  {
    name: 'scelerisque viverra',
    desc: 'massa ut viverra',
    business: true,
    tech: ['Vue.js'],
  },
  {
    name: 'pellentesque vel',
    desc: 'Morbi accumsan sapien',
    school: true,
    tech: ['Python'],
  },
  {
    name: 'quis rhoncus',
    desc: 'viverra orci magna',
    tech: ['Go'],
  },
  {
    name: 'tempus arcu',
    desc: 'eu varius ligula',
    business: true,
    tech: ['C++'],
  },
  {
    name: 'ligula vel eros',
    desc: 'Suspendisse quis nunc mollis',
    business: true,
    tech: ['Shell'],
  },
  {
    name: 'aliquam elit ac',
    desc: 'placerat nibh',
    business: true,
    tech: ['Node.js', 'Java'],
  },
  {
    name: 'Nam feugiat',
    desc: 'mattis nisi in pellentesque',
    school: true,
    tech: ['Ruby'],
  },
  {
    name: 'enim scelerisque',
    desc: 'vulputate Donec vulputate',
    tech: ['Rust'],
  },
  {
    name: 'orci diam',
    desc: 'vel consequat',
    tech: ['Electron'],
  },
  {
    name: 'mauris pretium et',
    desc: 'Fusce a aliquet metus Fusce convallis tortor',
    tech: ['Haskell'],
  },
  {
    name: 'nec velit tincidunt',
    desc: 'ut congue nibh accumsan',
    tech: ['PHP'],
  },
  {
    name: 'Quisque pellentesque',
    desc: 'mollis lorem at pulvinar mi mattis',
    tech: ['Lisp'],
  },
])

export { Info, Skills, Misc, Edus, WorkType, Works, Awards, OpenSrc, Projects }
