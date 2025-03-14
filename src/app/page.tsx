import Banner from "@/components/banner/banner";
import ProductList from "@/components/productList/productList";

function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-5">
      <header>
        <Banner />
      </header>
      <section className="flex flex-col items-center justify-center">
        <div className="text-center my-8">
          <h1 className="md:text-2xl text-xl">O MELHOR PARA VOCÊ ESTÁ AQUI</h1>
        </div>
        <ProductList />
      </section>
    </main>
  );
}

export default Home;
