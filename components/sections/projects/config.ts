import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    slug: 'portfolio',
    description:
      'A personal portfolio to showcase your coding projects, resume, and skills in a beautifully designed format.',
    thumbnail: '/images/projects/portfolio/cover.jpg'
  },
  {
    name: 'AgriProPlus',
    slug: 'agriproplus',
    description:
      'AgriPro+ is an innovative app designed to support farming families by providing tailored solutions to ensure their success and happiness in every harvest.',
    thumbnail: '/images/projects/agriproplus/cover.jpg'
  },
  {
    name: 'MediKart',
    slug: 'medikart',
    description:
      'MediKart is a comprehensive MERN stack platform designed to facilitate seamless and secure online healthcare shopping.',
    thumbnail: '/images/projects/medikart/cover.jpg'
  },
  {
    name: 'ECommerce ',
    slug: 'react',
    description:
      'An e-commerce platform built using React and  Redux to facilitate online shopping.',
    thumbnail: '/images/projects/react/cover.jpg'
  }
];

export { projects };
