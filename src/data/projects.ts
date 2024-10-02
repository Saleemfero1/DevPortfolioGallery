import Inventory from '../assets/IThree.jpeg';
import WalletBanking from '../assets/WalletBanking.png';
import Protfolio from '../assets/DevApp.png';

export const projects = [
  {
    projectImage: Inventory,
    projectName: 'Tuple Inventory management',
    ProjectDesc:
      'Tuple Inventory Management is a web application that provides an intuitive interface for managing your inventory. Our goal is to help businesses efficiently track and control their inventory, streamline operations, and increase productivity',
    skills: ['React', 'Spring-boot', 'Mongo DB', 'ChartJS', 'Jest', 'JUnit'],
    gitLinks: {
      ui: 'https://github.com/Saleemfero1/Tuple-inventory-app-backend.git',
      backend: 'https://github.com/Saleemfero1/Tuple-Inventory-fronted-app.git',
    },
  },
  {
    projectImage: WalletBanking,
    projectName: '1Tap Banking',
    ProjectDesc:
      '1Tap Banking is a wallet banking application I developed to provide users with seamless and smooth banking transactions. This project aims to enhance my full-stack development skills by integrating key features such as user authentication, real-time transaction management, and a user-friendly interface. Utilizing technologies like React for the frontend and Java Springboot for the backend, I focused on creating an intuitive and responsive design that ensures accessibility across devices.',
    skills: ['React', 'Spring-boot', 'PostgreSql', 'Jest', 'JUnit'],
    gitLinks: {
      ui: 'https://github.com/Saleemfero1/wallet-banking.git',
      backend: 'https://github.com/Saleemfero1/wallet-banking-backend.git',
    },
  },
  {
    projectImage: Protfolio,
    projectName: 'Protfolio WebApp',
    ProjectDesc:
      'Designed and developed a personal portfolio website using React and Material-UI (MUI), showcasing projects and skills in an interactive and visually appealing manner.',
    skills: ['React', 'Jest', 'MUI', 'gitHub', 'motion-frame'],
    gitLinks: { ui: 'https://github.com/Saleemfero1/DevPortfolioGallery.git' },
  },
];
