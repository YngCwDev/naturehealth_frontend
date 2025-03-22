import { Product } from "@/lib/types";
import React from "react";

const Reviews = ({ product }: Product) => {




  return (
    <section>
      <h2 className="text-green2 font-bold uppercase text-2xl mb-4">
        Comentários
      </h2>
      <div>
        {(product.comments &&
          product.comments.map((comment, index) => (
            <div key={index}>
              <p>
                <strong>{comment.owner}</strong>: {comment.comment}
              </p>
              <p>Rating: {comment.rating}/5</p>
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
    </section>
  );
};

export default Reviews;
