import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'java',
      description: {
        en: 'I build modern and advanced websites backend with Java.',
        id_ID: 'I build modern and advanced websites backend with Java.',
      },
      icon: 'devicon:java',
      image: null,
    },
    {
      id: 2,
      title: 'SpringBoot',
      description: {
        en: 'I build modern and advanced apis with the help of Java SpringBoot.',
        id_ID: 'I build modern and advanced apis with the help of Java SpringBoot.',
      },
      icon: 'devicon:spring',
      image: null,
    },
    {
      id: 3,
      title: 'javascript',
      description: {
        en: 'I build modern and advanced websites frontend with JavaScript.',
        id_ID: 'I build modern and advanced websites frontend with JavaScript.',
      },
      icon: 'devicon:javascript',
      image: null,
    },
    {
      id: 4,
      title: 'Python',
      description: {
        en: 'In Cybersecurity, I use Python, SQL, Java/JavaScript, C++, etc. But Python is the language I use more often.',
        id_ID: 'Dalam bidang Keamanan Siber, saya menggunakan Python, SQL, Java/JavaScript, C++, dll. Tapi Python adalah bahasa yang lebih sering saya gunakan.',
      },
      icon: 'devicon:python',
      image: null,
    },
  ]
})
