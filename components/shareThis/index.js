import React from 'react'
import { StickyShareButtons } from 'sharethis-reactjs';
import {description,title,url,ogImage} from 'config'

export default()=>{

    return <StickyShareButtons
    config={{
      alt:'Share B\'Zoe Homecare Services with your social network',
      alignment: 'left', // alignment of buttons (left, center, right)
      color: 'social', // set the color of buttons (social, white)
      enabled: true, // show/hide buttons (true, false)
      font_size: 16, // font size for the buttons
      labels: 'cta', // button labels (cta, counts, null)
      language: 'en', // which language to use (see LANGUAGES)
      min_count: 0, // hide react counts less than min_count (INTEGER)
      networks: [
        'facebook',
        'linkedin',
        'twitter',
        'pinterest',
        'whatsapp',
      ],
      padding: 12, // padding within buttons (INTEGER)
      radius: 4, // the corner radius on each button (INTEGER)
      // show_total: true, // show/hide the total share count (true, false)
      show_mobile: true, // show/hide the buttons on mobile (true, false)
      show_toggle: true, // show/hide the toggle buttons (true, false)
      size: 48, // the size of each button (INTEGER)
      top: 260, // offset in pixels from the top of the page
      // size: 35, // the size of each button (INTEGER),
      url, // (defaults to current url)
      image:ogImage, // (defaults to og:image or twitter:image)
     title,
    description,
    
    }}
  />

}