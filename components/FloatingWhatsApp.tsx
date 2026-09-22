'use client'

import { companyInfo } from '../data/company'

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('Hi, I would like to know more about your scrap inventory.')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105 hover:bg-green-600 animate-float"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M19.11 17.47c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.99 2.66 1.12 2.84c.14.18 1.95 2.98 4.73 4.18 1.76.76 2.45.83 3.33.7.51-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.03 4C9.93 4 5 8.93 5 15.03c0 1.94.51 3.83 1.47 5.5L5 28l7.63-1.44A11 11 0 0 0 16.03 26.06C22.13 26.06 27.06 21.13 27.06 15.03 27.06 8.93 22.13 4 16.03 4zm0 20.06c-1.73 0-3.43-.46-4.91-1.34l-.35-.21-4.53.86.86-4.42-.23-.37A9.05 9.05 0 0 1 6.97 15.03c0-5 4.06-9.06 9.06-9.06s9.06 4.06 9.06 9.06-4.06 9.03-9.06 9.03z" />
      </svg>
    </a>
  )
}
