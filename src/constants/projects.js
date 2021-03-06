import EasyFood from "../static/images/projects/easyfood.svg";
import ProdigyNetwork from "../static/images/projects/prodigy-network.png";
import ProdigyAssociates from "../static/images/projects/prodigy-associates.png";
import AcercandoNaciones from "../static/images/projects/an.png";
import EllieMae from "../static/images/projects/ellie-mae.png";
import PayPal from "../static/images/projects/paypal.svg";
import BBVSite from "../static/images/projects/bbv-website.svg";
import USAVisa from "../static/images/projects/usavisa.png";
import MiBarrio from "../static/images/projects/mi-barrio.png";
import HA from "../static/images/projects/ha.png";
import BBVOss from "../static/images/projects/oss.png";
import Covid from "../static/images/projects/covid.png";
import BBVBlog from "../static/images/projects/blog.png";
import RemoteWorking from "../static/images/projects/BBVRemote.png";
import Portfolio from "../static/images/projects/portfolio.png";

import companies from './companies'
import technologies from "./technologies";

export const projects = [
  {
    year: 2020,
    title: "Portfolio",
    description: "My own web portfolio app.",
    backgroundColor: '#FFFFFF',
    image: Portfolio,
    pwa: true,
    link: 'https://blackboxvision.gitlab.io/portfolio/matias/',
    reason: 'Made with lot of love ❤.',
    code: 'https://github.com/mendozammatias/portfolio',
    company: companies.BlackBoxVision,
    technologies: [
      technologies.Javascript, technologies.React
    ]
  },
  {
    year: 2020,
    title: "Remote Working",
    description: "BlackBox Vision remote working tools and tips.",
    backgroundColor: '#FFFFFF',
    image: RemoteWorking,
    pwa: true,
    link: 'https://www.blackbox-vision.tech/remote-working',
    reason: 'BlackBox Vision little contribution based on our experience.',
    code: 'https://github.com/mendozammatias/bbv-website',
    company: companies.BlackBoxVision,
    technologies: [
      technologies.Javascript, technologies.GatsbyJS, technologies.React
    ]
  },
  {
    year: 2020,
    title: "BBV Blog",
    description: "BlackBox Vision blog with lot of interesting posts.",
    backgroundColor: '#F7F7F7',
    image: BBVBlog,
    pwa: true,
    link: 'https://blog.blackbox-vision.tech/',
    reason: 'You can read some of my last posts 😁.',
    code: null,
    company: companies.BlackBoxVision,
    technologies: [
      technologies.Javascript, technologies.TypeScript, technologies.NestJS, technologies.Ghost, technologies.React, technologies.GatsbyJS
    ]
  },
  {
    year: 2020,
    title: "COVID-19 App",
    description: "Refactor of the official Argentinian government app for COVID-19.",
    backgroundColor: '#FCFCFC',
    image: Covid,
    pwa: true,
    link: 'https://blackboxvision.gitlab.io/covid-19/corona-app/',
    reason: "When changes were ready, they decided replace it with another one 🤷🏻‍.",
    code: 'https://github.com/mendozammatias/covid-19',
    company: companies.BlackBoxVision,
    technologies: [
      technologies.Javascript, technologies.React
    ]
  },
  {
    year: 2020,
    title: "BBV OpenSource",
    description: "Open source projects showcase website.",
    backgroundColor: '#F7F7F7',
    image: BBVOss,
    pwa: true,
    link: 'https://opensource.blackbox-vision.tech/',
    reason: 'We have several OSS projects you can check here!',
    code: null,
    company: companies.BlackBoxVision,
    technologies: [
      technologies.Javascript, technologies.React, technologies.NextJS, technologies.GatsbyJS
    ]
  },
  {
    year: 2020,
    title: "Camilleros App",
    description: "Stretcher bearers assignment management app.",
    backgroundColor: '#FFFFFF',
    image: HA,
    pwa: false,
    link: null,
    reason: 'Product is only for internal use and can not be accessible from outside of the company.',
    code: null,
    company: companies.BlackBoxVision,
    technologies: [
      technologies.Javascript, technologies.React
    ]
  },
  {
    year: 2020,
    title: "Mi Barrio",
    description: "Countries management platform.",
    backgroundColor: '#444444',
    image: MiBarrio,
    pwa: false,
    link: null,
    reason: 'Product is not in production yet',
    code: null,
    company: companies.BlackBoxVision,
    technologies: [
      technologies.Javascript, technologies.TypeScript, technologies.ReactNative, technologies.PostgreSQL, technologies.GraphQL, technologies.NodeJS
    ]
  },
  {
    year: 2019,
    title: "USA Visa Travel",
    description: "USA visa requirement platform.",
    backgroundColor: '#F7F7F7',
    image: USAVisa,
    pwa: false,
    link: null,
    reason: 'Product is not in production yet',
    code: null,
    company: companies.BlackBoxVision,
    technologies: [
      technologies.Javascript, technologies.React, technologies.GatsbyJS, technologies.PostgreSQL, technologies.NodeJS, technologies.NestJS,
    ]
  },
  {
    year: 2019,
    title: "BBV Website",
    description: "Company website.",
    backgroundColor: '#F7F7F7',
    image: BBVSite,
    pwa: true,
    link: 'https://www.blackbox-vision.tech/',
    reason: 'Here you can see our info!',
    code: 'https://github.com/mendozammatias/bbv-website',
    company: companies.BlackBoxVision,
    technologies: [
      technologies.Javascript, technologies.PostgreSQL, technologies.NodeJS, technologies.NextJS, technologies.React
    ]
  },
  {
    year: 2019,
    title: "PayPal",
    description: "Dataviz product.",
    backgroundColor: '#FFFFFF',
    image: PayPal,
    pwa: false,
    link: 'https://www.paypal.com/',
    reason: 'Product is only for internal use and can not be accessible from outside of the company.',
    code: null,
    company: companies.Leniolabs,
    technologies: [
      technologies.Javascript, technologies.React
    ]
  },
  {
    year: 2019,
    title: "Investor Connect",
    description: "Backoffice product for loans management.",
    backgroundColor: '#FFFFFF',
    image: EllieMae,
    pwa: false,
    link: 'https://www.elliemae.com/',
    reason: 'Product is an internal backoffice not accessible from outside of the company.',
    code: null,
    company: companies.Leniolabs,
    technologies: [
      technologies.Javascript, technologies.React
    ]
  },
  {
    year: 2018,
    title: "Acercando Naciones",
    description: "News website.",
    backgroundColor: '#F7F7F7',
    image: AcercandoNaciones,
    pwa: true,
    link: 'https://acercandonaciones.com/',
    reason: 'Traffic was triplicated since the new version is in produciton.',
    code: null,
    company: companies.BlackBoxVision,
    technologies: [
      technologies.Javascript, technologies.React,  technologies.PostgreSQL, technologies.NodeJS, technologies.NextJS
    ]
  },
  {
    year: 2018,
    title: "Prodigy Associates",
    description: "Backoffice for investors.",
    backgroundColor: '#FFFFFF',
    image: ProdigyAssociates,
    pwa: false,
    link: 'https://www.prodigynetwork.com/partners/associates',
    reason: 'Product is an internal backoffice not accessible from outside of the company.',
    code: null,
    company: companies.SAMSistemas,
    technologies: [
      technologies.TypeScript, technologies.Redux, technologies.ReduxSaga, technologies.PostgreSQL, technologies.React, technologies.NodeJS
    ]
  },
  {
    year: 2017,
    title: "Prodigy Network",
    description: "Backoffice for investments platform.",
    backgroundColor: '#FFFFFF',
    image: ProdigyNetwork,
    pwa: false,
    link: 'https://www.prodigynetwork.com/',
    reason: 'Product is an internal backoffice not accessible from outside of the company.',
    code: null,
    company: companies.SAMSistemas,
    technologies: [
      technologies.TypeScript, technologies.Redux, technologies.ReduxSaga, technologies.PostgreSQL, technologies.React, technologies.NodeJS
    ]
  },
  {
    year: 2016,
    title: "EasyFood",
    description: "Online restaurants platform",
    backgroundColor: '#F98E12',
    image: EasyFood,
    pwa: false,
    link: null,
    reason: 'Product never went in production',
    code: null,
    company: companies.SAMSistemas,
    technologies: [
      technologies.Javascript, technologies.ReactNative, technologies.Redux, technologies.ReduxSaga, technologies.Facebook, technologies.Google
    ]
  },

]