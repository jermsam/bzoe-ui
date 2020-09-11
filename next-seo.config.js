import{
  type,
  logo,
  title,
  description,
  url,
  legalName,
  socialLinks,
  address,
  contact,
  ogImage
  } from 'config'

  import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
  
  export const SEO= {
    title,
  titleTemplate: `%s | B'Zoe `,
  description,
    itemScope: true,
    itemType: 'http://schema.org/Article',
    prefix: 'og: http://ogp.me/ns#',
    openGraph: {
      type,
      locale: 'en_IE',
      url,
      site_name: legalName,
      images: [
        {
          url: ogImage,
          width: 900,
          height: 522,
          alt: 'Quality Home Care Services For the Elderly Around Snohomish and King County.'
        }
      ],
    },
    
    twitter: {
      handle: '@bzoehomecare',
      site: socialLinks.twitter,
      cardType: 'summary_large_image',
    },
    facebook: {
      appId: publicRuntimeConfig.FACEBOOK_APP_ID,
      site: socialLinks.facebook,
    },
  };
  
  export const SCHEMA={
    type,
    id:url,
    name:legalName,
    description,
    url,
    sameAs:[
      socialLinks.facebook,
      socialLinks.twitter,
      socialLinks.instagram,
      socialLinks.linkedin,
      url,
    ],
    logo,
    telephone:contact.phone,
    address:{
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zipCode,
      addressCountry: address.country,
    },
    
    images:[
      logo,
      ogImage,
      `${url}/imgs/ogimage-about.png`,
      `${url}/imgs/ogimage-customers.png`,
      `${url}/imgs/ogimage-services.png`,
      `${url}/imgs/ogimage-seniorpersonalcare.png`,
      `${url}/imgs/ogimage-companioncare.png`,
      `${url}/imgs/ogimage-respitecare.png`,
    ],
    openingHours:[
      {
        opens: '00:00',
        closes: '00:00',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        validFrom: '2010-02-23',
        validThrough: '2025-04-02',
      }
    ]
  }
  
  export const LOGO={
    logo,
        url,
  }