import BrandCard from '@/components/ui/BrandCard'


const brandList = [
  {
    imageSrc: "/images/brands/rog.png",
    title: "ROG"
  },
  {
    imageSrc: "/images/brands/logitech.png",
    title: "Logitech"
  },
  {
    imageSrc: "/images/brands/jbl.png",
    title: "JBL"
  },
  {
    imageSrc: "/images/brands/aoc.png",
    title: "AOC"

  },
  {
    imageSrc: "/images/brands/razer.png",
    title: "Razer"
  },
  {
    imageSrc: "/images/brands/rexus.png",
    title: "Rexus"
  }
]

const BrandSection = () => {
  return (
    <div id="recomendation" className='bg-[var(--color-black-one)] text-white px-4 py-8 mb-12' >
      <div className="flex flex-row justify-between">
        <div className='text-xl'>Brand</div>
        <div className="font-medium flex items-center gap-1 cursor-pointer">See all <span>&rarr;</span></div>
      </div>
      <div id="card-list" className="flex flex-row gap-8 overflow-x-scroll ">
      
        {brandList.map((product, index) => (
          <BrandCard key={index} {...product} />
        ))} 
      </div>

    </div>
  )
}

export default BrandSection