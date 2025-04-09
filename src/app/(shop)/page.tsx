import BannerCarousel from "@/components/banner/banner-carousel";
import ProductList from "@/components/productList/product-list";

function Home() {
  return (
    <>
      <header>
        <BannerCarousel />
      </header>
      <section className="flex flex-col items-center justify-center  gap-4 my-10">
        <div className="text-center my-8 space-y-4 flex flex-col items-center ">
          <h1 className="text-green2">
            O MELHOR PARA VOCÊ ESTÁ AQUI
          </h1>
          <div className="md:w-28 w-20 border-2 border-darkgreen1"></div>
        </div>

        <ProductList />
      </section>
    </>
  );
}

export default Home;
