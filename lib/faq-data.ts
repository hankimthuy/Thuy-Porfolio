import { PERSON, SITE_URL } from '@/lib/seo';

export const FAQ_ITEMS = [
  {
    question: 'Who is Han Kim Thuy?',
    answer: `This is the portfolio of Han Kim Thuy (Hàn Kim Thủy), also written as Thuy Han Kim or hankimthuy online. I am a Product Engineer and Product Owner based in Vietnam. You can reach me at ${PERSON.email}, on GitHub (hankimthuy), LinkedIn (thuyhankim), or at ${SITE_URL}.`,
  },
  {
    question: 'Are you available as a freelance Product Owner or Product Engineer in Vietnam?',
    answer:
      'Yes—outside my full-time role I take scoped freelance work in Vietnam (GMT+7) and abroad. Typical engagements include product discovery, UX-oriented delivery, and helping small teams ship usable products. Zalo (0947 701 601) is fastest; you can also email or message me on LinkedIn with the problem, audience, and timeline.',
  },
  {
    question: 'What drives you to build products?',
    answer:
      "I'm driven by empathy. For me, a product is simply a solution to a real human problem. My motivation comes from seeing something I've built actually reduce someone's frustration, save them time, or (like in my MimoSe project) help them understand themselves better.",
  },
  {
    question: 'Why do you focus on UX-Oriented Development?',
    answer:
      "As a Product Engineer, I'm the closest person to the end-user. Focusing on UX is a natural extension of that role. I believe a 'feature' isn't 'done' when the code is merged; it's 'done' when the user can achieve their goal effortlessly. This mindset is the foundation of my product-focused approach.",
  },
  {
    question: 'How do you handle ambiguity and changing requirements?',
    answer:
      "I embrace them—change is a core part of the Agile/Scrum process. When requirements change, I don't see it as a problem; I see it as 'new information.' My first step is to ask 'why' to understand the new business goal or user insight. Then, I collaborate with the team (PO, BA, Designers) to assess the impact, break down the new task, and re-prioritize.",
  },
  {
    question: 'How do you work with a freelance client?',
    answer:
      "We start with a short conversation about the problem, who's affected, and what success looks like—you don't need a technical spec upfront. I help clarify scope and timing, keep communication simple, and focus on whether the solution works for real users. My goal is to solve the right need, not to impress with tools.",
  },
  {
    question: 'How can I reach you about freelance work?',
    answer:
      "Zalo (0947 701 601) is fastest. You can also email thuyhankim@gmail.com or message me on LinkedIn. Share what you're trying to solve, who it's for, and any timeline—I will let you know if freelance collaboration is a good fit.",
  },
] as const;
