import Navbar from "@/components/layout/navbar/page";
import HomeContent from "@/components/layout/home/page";
import Footer from "@/components/layout/footer/page";

function Homepage() {
	return (
		<>
			<main className="p-2 border-2 border-amber-600 w-full max-w-[1440px] max-h-[2574px] min-h-screen flex flex-col  items-center justify-start">
				<Navbar />
				<HomeContent />
				<Footer/>
			</main>
		</>
	);
}

export default Homepage;
