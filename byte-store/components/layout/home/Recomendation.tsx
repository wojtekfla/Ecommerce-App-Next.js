import ProductCard from '@/components/ui/ProductCard'

const recomendationProducts = [
  {
    imageSrc: "/images/01-home/rec-mouse2.png",
    title: "Mouse",
    description: "Logitech G502 Hero",
    price: 54.99,
    promoPrice: 34.99
  },
  {
    imageSrc: "/images/01-home/rec-headphones2.png",
    title: "Headphone",
    description: "Sony WH-CH510",
    price: 59.99
  },
  {
    imageSrc: "/images/01-home/rec-monitor1.png",
    title: "Monitor",
    description: "AOC 24G2E",
    price: 209.99
  },
  {
    imageSrc: "/images/01-home/rec-keyboard2.png",
    title: "Keyboard",
    description: "Razer Huntsman Elite",
    price: 106.85
  },
  {
    imageSrc: "/images/01-home/rec-monitor2.png",
    title: "Monitor",
    description: "ROG Swift PG259QN",
    price: 299.95
  }
]

const Recomendation = () => {
  return (
    <section id="recomendation" className='bg-[var(--color-black-one)] text-white max-w-[1360px] mx-auto w-full px-4 py-8' >
      <div className="flex flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recommendation</h2>
        <div className="font-medium flex items-center gap-1 cursor-pointer hover:text-[var(--color-orange-one)] transition-colors text-sm sm:text-base">
          See all <span>&rarr;</span>
        </div>
      </div>
      <div id="card-list" className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {recomendationProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))} 
      </div>
    </section>
  )
}

export default Recomendation