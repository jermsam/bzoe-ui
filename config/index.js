import PasswordValidator from 'password-validator'
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

 export const type='LocalBusiness'
export const legalName='B\'Zoe Homecare Services'
export const url =publicRuntimeConfig.FRONTEND_URL;
 export const logo =`${url}/imgs/xx.png`


export const schema = new PasswordValidator();
schema
.is().min(4)                                    // Minimum length 8
.is().max(4) 
.has().digits()  

export default schema;
// export const foundingDate='February 2010'
export const contact={
    email:'prossielockett@bzoehomecare.org',
    phone:'+1 (888) 545 4331'
}

export const ogImage=`${url}/imgs/ogimage.png`

export const title='In-home Care, Respite Care, Elderly Care & Companion Care'

export const address={
    country:'US',
    region:'North America',
    zipCode:'98004',
    city:'Bothel',
    street:'12400 SE 38TH ST. # 50462',
    state:'Washington'
}

export const socialLinks={
    facebook:'https://www.facebook.com/homecarebellevue',
    twitter:'https://twitter.com/bzoehomecare',
    instagram:'https://www.instagram.com/bzoehomcare',
    linkedin:'https://www.linkedin.com/company/b-zoe-homecare-giving-services',
    care:'https://www.care.com/b/l/b-zoe-home-caregiving-services/bellevue-wa'
}

export const description="Home care services for the elderly is our priority at B'zoe. Find the best quality care. We would love to hear from you."
