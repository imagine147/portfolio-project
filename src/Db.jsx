import Icon1 from '../src/assets/icons/Vector.svg'
import Icon2 from '../src/assets/icons/tag 1.svg'
import Icon3 from '../src/assets/icons/carbon_ibm-engineering-test-mgmt.svg'
import Icon4 from '../src/assets/icons/feather-pen 1.svg'

export const skills =[
  {
    id: 1,
    name: 'Responsive Design',
    desc: 'I specialize in building responsive, mobile-first web applications that adapt seamlessly to various screen sizes and devices by using modern CSS techniques and performance optimization strategies.',
    icon: Icon1
  },

  {
    id: 2,   
    name: 'Front-End Frameworks',
    desc: 'Proficient in React and Next.js, enabling me to create dynamic, interactive user interfaces that enhance user experience and engagement.',
    icon: Icon2
  },

  {
    id: 3,
    name: 'Testing and Debugging',
    desc: 'Utilizing various testing frameworks and tools to ensure application reliability and performance, including unit, integration, and end-to-end testing.',
    icon: Icon3
  },

  {
    id: 4,
    name: 'Cloud Services',
    desc: 'Familiar with cloud platforms like Vercel and AWS, enabling me to deploy and manage applications in scalable, secure environments.',
    icon: Icon4
  }
]



import Img1 from '../src/assets/icons/Avatar Image.png'
import Img2 from '../src/assets/icons/Avatar Image (1).png'
import Img3 from  '../src/assets/icons/Avatar Image (2).png'

export const testimonial = [
  {
    id: 1,
    name: 'Dianne Russell',
    desc: 'Starbucks',
    rate: 5,
    img: Img1,
    comment: "The mobile experience is just as polished as desktop. They nailed the layout, animations, and performance—my portfolio now feels like a professional product."
  },

  {
    id: 2,
    name: 'Kristin Watson',
    desc: 'Louis Vuitton',
    rate: 5,
    img: Img2,
     comment: "Professional, fast, and pixel-perfect. They delivered a responsive interface that feels custom-built for every device. Highly recommend!"
  },

  {
    id: 3,
    name: 'Kathryn Murphy',
    desc: "McDonald's",
    rate: 5,
    img: Img3,
     comment: "Our website looks incredible on every device thanks to their responsive design skills. From mobile to desktop, the experience is seamless and fast—exactly what our users needed."
  }
]

import Image1 from '../src/assets/icons/download (1).png'
import Image2 from '../src/assets/icons/download (2).png'
import Image3 from '../src/assets/icons/download.png'

export const portfolio =[
  {
    id: 1,
    name: 'Event-Cove',
    desc: 'Browse a curated list of upcoming events across various categories, including music festivals, marathons, fundraisers, and more.',
    img: Image1,
    button: 'View website',
    link: 'https://discover-events-git-main-olajides-projects-93bc3a9f.vercel.app/'
  },

  {
    id: 2,
    name: 'Trad-Express',
    desc: 'This crypto website is a sleek, modern investment platform designed to help users research, invest in, and track digital assets—all in one place',
    img: Image2,
    button: 'View website',
    link: 'https://trad-form-olajides-projects-93bc3a9f.vercel.app/'
  },

  {
    id: 3,
    name: 'Portfolio',
    desc: 'This is a minimal, responsive placeholder website created to showcase the outcome of converting a Figma-based design into a live web page. It serves as a clean and focused template for demonstrating: Figma to code work-flow showcasing the design and layout of a website, without any specific content or functionality.',
    img: Image3,
    button: 'View website',
    link: 'https://figma-project-ashen-seven.vercel.app/'
  }
]
