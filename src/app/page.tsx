import Banner from "@/components/banner/banner";
import ProductCarousel from "@/components/carousel/ProductCarousel";

function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <header>
        <Banner />
      </header>
        <section className="py-10 w-full flex flex-col justify-center items-center gap-10">
        <div>
          <h1>O MELHOR PARA VOCÊ ESTÁ AQUI</h1>
        </div>
        <div className="max-w-screen-xl w-full">
          <ProductCarousel />
        </div>
      </section>
    </div>
  );
}

export default Home;
