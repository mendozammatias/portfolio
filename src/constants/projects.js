import EasyFood from "../static/images/projects/easyfood.svg";
import AN from "../static/images/projects/an.png";


import companies from './companies'
import technologies from "./technologies";

export const projects = [
  {
    year: 2020,
    title: "COVID-19 App",
    description: "News website",
    image: AN,
    pwa: true,
    link: 'https://acercandonaciones.com/',
    reason: null,
    code: '',
    company: companies.BlackBoxVision,
    technologies: [
      technologies.React
    ]
  },
  {
    year: 2018,
    title: "Acercando Naciones",
    description: "News website",
    image: AN,
    pwa: true,
    link: 'https://acercandonaciones.com/',
    reason: null,
    code: '',
    company: companies.BlackBoxVision,
    technologies: [
      technologies.React
    ]
  },
  {
    year: 2017,
    title: "Prodigy Network",
    description: "Backoffice for investments platform",
    image: AN,
    pwa: true,
    link: 'https://acercandonaciones.com/',
    reason: null,
    code: '',
    company: companies.BlackBoxVision,
    technologies: [
      technologies.React
    ]
  },
  {
    year: 2016,
    title: "EasyFood",
    description: "Online restaurants platform",
    image: EasyFood,
    pwa: false,
    link: null,
    reason: 'Product never went in production',
    code: null,
    company: companies.SAMSistemas,
    technologies: [
      technologies.React
    ]
  },

]