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
    <div id="recomendation" className='bg-[var(--color-black-one)] text-white' >
      <div className="flex flex-row justify-between">
        <div>Recomendation</div>
        <div className="font-medium flex items-center gap-1 cursor-pointer">See all <span>&rarr;</span></div>
      </div>
      <div id="card-list" className="flex flex-row gap-8 overflow-x-scroll ">
      {/* <div id="card-list" className=" flex flex-row p-2 gap-8  overflow-x-auto"></div> */}
        {recomendationProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))} 
      </div>

    </div>
  )
}

export default Recomendation