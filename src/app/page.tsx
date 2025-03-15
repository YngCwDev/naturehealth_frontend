import Banner from "@/components/banner/banner";
import ProductList from "@/components/productList/productList";

function Home() {
  return (
    <main className="">
      <header>
        <Banner lg={"Prostate.png"} md={"flyer_md.png"} sm={"flyer_sm.png"} />
      </header>
      <section className="flex flex-col items-center justify-center  gap-4 my-10">
        <div className="text-center my-8 space-y-4 flex flex-col items-center ">
          <h1 className="md:text-2xl lg:text-3xl text-xl text-green2">
            O MELHOR PARA VOCÊ ESTÁ AQUI
          </h1>
          <div className="md:w-28 w-20 border-2 border-darkgreen1"></div>
        </div>
        <ProductList />
      </section>
      <section>
        <Banner lg={"banner2.png"} />
      </section>
    </main>
  );
}

export default Home;
