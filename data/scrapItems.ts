export type ScrapItem = {
  id: string
  name: string
  slug: string
  category: string
  description: string
  condition: string
  location: string
  image: string
}

export const scrapItems: ScrapItem[] = [
  {
    id: '1',
    name: 'Copper Scrap',
    slug: 'copper-scrap',
    category: 'Copper Scrap',
    description: 'High-quality copper scrap available for buyers.',
    condition: 'Good',
    location: 'Sharjah, UAE',
    image: '/images/copper.jpg'
  },
  {
    id: '2',
    name: 'Aluminum Sheets',
    slug: 'aluminum-sheets',
    category: 'Aluminum Scrap',
    description: 'Mixed aluminum sheets and offcuts.',
    condition: 'Mixed',
    location: 'Sharjah, UAE',
    image: '/images/aluminium.jpg'
  },
  {
    id: '3',
    name: 'Brass Scrap',
    slug: 'brass-scrap',
    category: 'Brass Scrap',
    description: 'Ferrous iron scrap suitable for recycling.',
    condition: 'Used',
    location: 'Sharjah, UAE',
    image: '/images/brass.jpg'
  },
  {
    id: '4',
    name: 'Computer Items',
    slug: 'computer-items',
    category: 'Computer Items',
    description: 'Mixed aluminum sheets and offcuts.',
    condition: 'Mixed',
    location: 'Sharjah, UAE',
    image: '/images/computer.jpg'
  },
  {
    id: '5',
    name: 'AC Scrap',
    slug: 'acscrap',
    category: 'AC Scrap',
    description: 'Ferrous iron scrap suitable for recycling.',
    condition: 'Used',
    location: 'Sharjah, UAE',
    image: '/images/ac.jpg'
  },
  {
    id: '6',
    name: 'Compressor Scrap',
    slug: 'compressor-scrap',
    category: 'Compressor Scrap',
    description: 'High-quality copper scrap available for buyers.',
    condition: 'Good',
    location: 'Sharjah, UAE',
    image: '/images/compressor.jpg'
  },
  {
    id: '7',
    name: 'Battery',
    slug: 'battery',
    category: 'battery',
    description: 'Mixed aluminum sheets and offcuts.',
    condition: 'Mixed',
    location: 'Sharjah, UAE',
    image: '/images/battery.jpg'
  }
]
