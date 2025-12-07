import HeroSlider from "./HeroSlider";
import Recomendation from "./Recomendation";
import CategorySection from "./CategorySection";
import BrandSection from "./BrandSection";

const HomePage = () => {
  return (
    <section className="w-full overflow-x-hidden">
      <div
        id="main-page"
        className="w-full flex flex-col gap-8 sm:gap-12 bg-black-one"
      >
        <HeroSlider />
        <CategorySection />
        <Recomendation />
        <BrandSection />
      </div>
    </section>
  );
};

export default HomePage;
