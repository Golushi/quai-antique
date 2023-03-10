import React from 'react'

export default function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.3286685488038!2d5.920995215769266!3d45.56382883481061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba8fc2f53e619%3A0x7a5af7f4b32b54cd!2s43%20Rue%20de%20la%20R%C3%A9publique%2C%2073000%20Chamb%C3%A9ry!5e0!3m2!1sfr!2sfr!4v1678089550923!5m2!1sfr!2sfr"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
      className='w-[150px] h-[112.5px] xs:w-[300px] xs:h-[225px] sm:w-[600px] sm:h-[450px] object-cover overflow-hidden my-5'
    ></iframe>
  )
}
