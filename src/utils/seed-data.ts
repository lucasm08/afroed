require('dotenv').config();

import Knex from 'knex';
import { config } from '../config';
import { IdGenerator } from './helpers';

const TIPS = [
  {
    description: `
    DO – Pay Attention to Your Introductory Paragraph
    Because this is the first paragraph of your 
    essay it is your opportunity to give the 
    reader the best first impression possible. 
    The introductory paragraph not only gives 
    the reader an idea of what you will talk 
    about but also shows them how you will talk 
    about it. Put a disproportionate amount of 
    effort into this – more than the 20% a 
    simple calculation would suggest – and you 
    will be rewarded accordingly.
    `,
    webLink: 'https://bit.ly/2Isyonn',
    lang: 'en',
  },
  {
    description: `
    Le saviez-vous ?

    La balise Title est aussi celle qui s’affiche 
    dans les pages de résultats Google. 
    À cet effet, elle doit donner envie de lire 
    et de cliquer sur le lien.
    `,
    webLink: 'https://bit.ly/35g0uuJ',
    lang: 'fr',
  },
];

const COUNTRIES = [
  {
    id: 1,
    frName: 'Algerie',
    engName: 'Algeria',
    code: 213,
  },
  {
    id: 2,
    frName: "Cote D'Ivoire",
    engName: 'Ivory Coast',
    code: 225,
  },
  {
    id: 3,
    frName: 'Senegal',
    engName: 'Sénégal',
    code: 221,
  },
  {
    id: 4,
    frName: 'Burkina Faso',
    engName: 'Burkina Faso',
    code: 226,
  },
  {
    id: 5,
    frName: 'Ghana',
    engName: 'Ghana',
    code: 233,
  },
];

const LANGUAGES = [
  {
    id: 1,
    name: 'en',
  },
  {
    id: 2,
    name: 'fr',
  },
];

const FIELDS = [
  {
    id: 1,
    frName: 'Agriculture - agroalimentaire',
    engName: 'Agronomy - Agroalimentary',
  },
  {
    id: 2,
    frName: 'Architecture, urbanisme et aménagement du territoire',
    engName: 'Architecture - Urban and Regional Planning',
  },
  {
    id: 3,
    frName: 'Arts, culture, design et mode',
    engName: 'Arts - Culture - Design - Fashion',
  },
  {
    id: 4,
    frName: 'Biologie',
    engName: 'Biology',
  },
  {
    id: 5,
    frName: 'Chimie',
    engName: 'Chemistry',
  },
  {
    id: 6,
    frName: 'Communication, multimédia et journalisme',
    engName: 'Communication - Multimedia - Journalism',
  },
  {
    id: 7,
    frName: 'Droit',
    engName: 'Law',
  },
  {
    id: 8,
    frName: 'Informatique',
    engName: 'Computer Science',
  },
  {
    id: 9,
    frName: 'Langues et lettres',
    engName: 'Literature - Languages',
  },
  {
    id: 10,
    frName: 'Management, gestion, finances et commerce',
    engName: 'Management - Business Administration - Finances',
  },
  {
    id: 11,
    frName: 'Mathématiques',
    engName: 'Mathematics',
  },
  {
    id: 12,
    frName: 'Physique',
    engName: 'Physical Sciences',
  },
  {
    id: 13,
    frName: 'Santé et professions sociales',
    engName: 'Health - Community Services',
  },
  {
    id: 14,
    frName: "Sciences de l'éducation",
    engName: 'Education',
  },
  {
    id: 15,
    frName: "Sciences de l'ingénieur",
    engName: 'Engineering',
  },
  {
    id: 16,
    frName: 'Sciences économiques et politiques',
    engName: 'Economics - Politics',
  },
  {
    id: 17,
    frName: 'Sciences humaines et sociales',
    engName: 'Humanities - Social Sciences',
  },
  {
    id: 18,
    frName: 'Sports',
    engName: 'Sports',
  },
  {
    id: 19,
    frName: 'Tourisme, hôtellerie et restauration',
    engName: 'Tourism and Hospitality - Food Service',
  },
  {
    id: 20,
    frName: 'Transport et logistique',
    engName: 'Transportation - Logistics',
  },
  {
    id: 21,
    frName: 'Environnement et sciences de la terre',
    engName: 'Environment',
  },
];

const PARTNERS = [
  {
    id: 1,
    partnerId: IdGenerator('PARTN'),
    name: 'EducationUSA',
    type: 'Governmental Organization',
    city: 'Abidjan',
    address: 'U.S. Embassy, D 33, Riviera Golf rue des Ambassades, Abidjan',
    phoneNumber1: '22494145',
    phoneNumber1Code: 225,
    phoneNumber2: '',
    phoneNumber2Code: null,
    email: 'educationusa@state.gov',
    webLink: 'https://educationusa.state.gov/',
    logo: '',
    recruitementType: '',
  },
];

const OPPORTUNITIES = [
  {
    id: 1,
    opportunityId: IdGenerator('OPP'),
    name: 'African Leadership Academy',
    type: 'Scholarship',
    description: `
  The African Leadership Academy is a residential, secondary
  institution located in the outskirts of Johannesburg, 
  South Africa. It is dedicated to 16 to 19-year-olds from 
  Africa and the rest of the world, with alumni from 46 countries
  currently.
  `,
    deadline: 1609459200,
    phoneNumber1: '116993000',
    phoneNumber1Code: 27,
    phoneNumber2: '',
    phoneNumber2Code: null,
    gender: 'M|F',
    available: true,
    location: 'Johannesburg',
    image: '',
    webLink: 'https://www.africanleadershipacademy.org/',
    lang: 'en',
  },
  {
    id: 2,
    opportunityId: IdGenerator('OPP'),
    name: 'Aga Khan Academy',
    type: 'Scholarship',
    description: `
    The Aga Khan Academies are a programme 
    of the Aga Khan Development Network 
    (AKDN). The AKDN is a group of development 
    organisations with mandates that include the 
    environment, health, education, architecture, 
    culture, microfinance, rural development, disaster reduction, 
    the promotion of private-sector enterprise and the 
    revitalisation of historic cities. 
    AKDN programmes are conducted without regard to faith, 
    origin or gender
  `,
    deadline: 1609459200,
    phoneNumber1: '116993000',
    phoneNumber1Code: 27,
    phoneNumber2: '',
    phoneNumber2Code: null,
    gender: 'M|F',
    available: true,
    location: 'Kenya',
    image: '',
    webLink: 'https://www.agakhanacademies.org/',
    lang: 'en',
  },
];

const STUDENTS = [
  {
    id: 1,
    studentId: IdGenerator('STUDNT'),
    firstName: 'Lucas',
    lastName: 'Gompou',
    dateOfBirth: 879302564,
    gender: 'M',
    city: 'Abidjan',
    address: '2 Plateaux Mobile',
    lang: 'en',
    phoneNumber: '08778597',
    phoneNumberCode: 225,
    whatsappNumber: '08778597',
    whatsappNumberCode: 225,
    countryId: 2,
    institutionName: 'Lycée Garçon de Bingerville',
    level: 'Terminale',
    yearOfGraduation: 2020,
    getNotificationUpdates: true,
    status: true,
    preferredMessagingMethod: 'whatsapp',
  },
];

const STUDENTSPARTNERS = [
  {
    studentId: 1,
    partnerId: 1,
  },
];

const STUDENTSFIELDS = [
  {
    studentId: 1,
    fieldId: 1,
  },
  {
    studentId: 1,
    fieldId: 3,
  },
  {
    studentId: 1,
    fieldId: 10,
  },
];

const OPPORTUNITIESCOUNTRIES = [
  {
    countryId: 2,
    opportunityId: 1,
  },
  {
    countryId: 3,
    opportunityId: 1,
  },
  {
    countryId: 4,
    opportunityId: 2,
  },
  {
    countryId: 5,
    opportunityId: 1,
  },
  {
    countryId: 3,
    opportunityId: 2,
  },
];

const OPPORTUNITIESFIELDS = [
  {
    fieldId: 2,
    opportunityId: 1,
  },
  {
    fieldId: 5,
    opportunityId: 1,
  },
  {
    fieldId: 10,
    opportunityId: 1,
  },
  {
    fieldId: 4,
    opportunityId: 2,
  },
  {
    fieldId: 5,
    opportunityId: 2,
  },
  {
    fieldId: 9,
    opportunityId: 2,
  },
];

/** CLI script for inserting seed data.
 *
 * This should never be invoked directly from application code
 */
export const seed = async () => {
  const knex = Knex(config.knex);
  try {
    await knex('tips').insert(TIPS);
    await knex('countries').insert(COUNTRIES);
    await knex('languages').insert(LANGUAGES);
    await knex('fields').insert(FIELDS);
    await knex('partners').insert(PARTNERS);
    await knex('opportunities').insert(OPPORTUNITIES);
    await knex('students').insert(STUDENTS);
    await knex('studentsPartners').insert(STUDENTSPARTNERS);
    await knex('studentsFields').insert(STUDENTSFIELDS);
    await knex('opportunitiesCountries').insert(OPPORTUNITIESCOUNTRIES);
    await knex('opportunitiesFields').insert(OPPORTUNITIESFIELDS);
  } catch (error) {
    console.error('Seed failed', error);
    process.exit(1);
  } finally {
    console.log('Seed complete!');
    process.exit(0);
  }
};
