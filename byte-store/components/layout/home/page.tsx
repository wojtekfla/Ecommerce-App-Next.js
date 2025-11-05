import HeroSlider from "./HeroSlider";
import Recomendation from "./Recomendation";
import CategorySection from "./CategorySection";
import BrandSection from "./BrandSection";


const HomeContent = () => {
  return (
    <section className="m-1 p-1 border-2 border-blue-800 w-full max-w-[1440px] h-[1860px]">
      <div id="main-page" className="w-full flex flex-col gap-12 bg-[var(--color-black-one)]">
        <HeroSlider />
        <CategorySection />
        <Recomendation />
        <BrandSection />
      </div>
      
    </section>
  )
}

export default HomeContent