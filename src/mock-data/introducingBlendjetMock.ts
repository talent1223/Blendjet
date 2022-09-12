import { IntroducingBlendjetProps } from '../components/IntroducingBlendjet/IntroducingBlendjet';
export const introducingBlendjetMock: IntroducingBlendjetProps = {
  screenWidth: window.innerWidth,
  title: 'Introducing BlendJet 2',
  subtitle: 'Next-Gen Portable Blender',
  description:
    'The BlendJet 2 portable blender delivers game-changing technology that lets you make fresh smoothies, shakes, or mixed drinks wherever you go.',
  features: {
    title: 'Blendjet Features',
    fields: [
      {
        icon: 'Globe',
        title: 'Draagbaar',
        description:
          'Perfect voor het jagen in de stad. Lichtgewicht en duurzaam gebouwd. Stop het in je tas en drink recht uit de pot.',
      },
      {
        icon: 'Lightning',
        title: 'Krachtig',
        description:
          'Grote blenderprestaties, compact formaat. Gepatenteerde TurboJet™-technologie klaart alles in 20 seconden: ijs, bevroren fruit, bladgroenten en nog  veel meer.',
      },
      {
        icon: 'Charge',
        title: 'USB-oplaadbaar',
        description:
          'Gaat meer dan 15 mengsels mee en laadt snel op. Waterbestendige USB-C oplaadpoort. Omkeerbare kabel meegeleverd.',
      },
      {
        icon: 'Drop',
        title: 'Zelfreinigend',
        description:
          'Gewoon water toevoegen, zeep en mengen. Spoelen en je bent klaar om te gaan!',
      },
    ],
  },
  image: {
    src: '//images.ctfassets.net/strhx3d94c40/2826IGPC4SeJ3ZxguhTAZ4/44e3bc3f698a08ef6c936e0e1d9aa79c/BlendJet-2-BLACK_8b5ecbb0-0dc8-46e3-9cd4-b20ed07f4fbd.png',
  },
  buttonText: 'GET YOURS NOW',
  buttonLink: '/products/blendjet-2',
};
