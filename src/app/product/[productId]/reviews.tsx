"use client";
import GlobalRating from "@/components/rating/globalRating";
import Rating from "@/components/rating/rating";
import { Product } from "@/lib/types";

const Reviews = ({ product }: Product) => {
  return (
    <section className="my-10 py-16 bg-white p-4 md:p-8 lg:p-16">
      <h2 className="text-green2 font-bold uppercase text-2xl mb-16">
        Comentários
      </h2>

      <div className="flex max-sm:flex-col">
        <div className="md:min-w-[30vw] w-full">
          <GlobalRating />
        </div>
        <div className="space-y-6">
          {(product.comments &&
            product.comments.map((comment, index) => (
              <div key={index} className="space-y-2">
                <div className="flex gap-4">
                  <Rating /> {comment.rating} de 5
                </div>
                <div className="space-y-2">
                  <p className="text-neutral-500 text-sm">
                    {comment.owner} - {comment.publishDate} (Ha 20 dias atras){" "}
                  </p>
                  <p>{comment.comment}</p>
                </div>
              </div>
            ))) || (
            <div className="space-x-10">
              <span>Seja o primeiro a comentar</span>
              <span>
                <button>Escrever</button>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
