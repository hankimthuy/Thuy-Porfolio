import { PERSON } from '@/lib/seo';



export const HERO_AVAILABILITY = 'Available for freelance · Vietnam';


export const HERO_STATS = [

  { label: PERSON.yearsExperienceShort },

  { label: '5+ Projects' },

  { label: 'User-focused delivery' },

] as const;



/** Product & outcome keywords — not a tech stack list */

export const HERO_FOCUS_CHIPS = [

  'Problem Solving',

  'User Experience',

  'Product Discovery',

  'Customer Needs'

] as const;



export const HERO_CTAS = {

  primary: { label: 'View Projects', href: '#projects' },

  secondary: { label: "Let's connect", href: '#footer' },

} as const;



export const PORTRAIT_ALT = `${PERSON.brandName} (${PERSON.fullName}) — ${PERSON.jobTitle}, professional portrait`;


