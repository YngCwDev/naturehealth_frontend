import Banner from "@/components/banner/banner";
import ProductCarousel from "@/components/carousel/ProductCarousel";

function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-5">
      <header>
        <Banner />
      </header>
      <section className="flex flex-col items-center justify-center">
        <div className="text-center my-8">
          <h1 className="text-[min(16px, 30px)]">
            O MELHOR PARA VOCÊ ESTÁ AQUI
          </h1>
        </div>
        <ProductCarousel />
      </section>
    </main>
  );
}

export default Home;
