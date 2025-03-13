import Banner from "@/components/banner/banner";
import ProductCarousel from "@/components/carousel/ProductCarousel";

function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-10">
      <header>
        <Banner />
      </header>
      <section className="">
        <h1>O MELHOR PARA VOCÊ ESTÁ AQUI</h1>
        <ProductCarousel />
      </section>
    </main>
  );
}

export default Home;
