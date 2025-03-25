import React from "react";

const Payment = () => {
  return (
    <div>
      <div className="h-fit bg-white rounded-2xl px-4 pt-4 pb-2 min-w-1/4 shadow-md">
        <h2 className="py-4 border-b-2">Resumo</h2>
        <p className="py-4 font-semibold">Items</p>
        <div className="space-y-3">
          <div className="flex justify-between ">
            <div>2ax</div>
            <div>1500.00 Mts</div>
          </div>
          <div className="flex justify-between ">
            <div>2x</div>
            <div>1500.00 Mts</div>
          </div>
        </div>
        <div className="mt-10 mb-2 pt-2 border-t-2">
          <div className="flex justify-between px-2 py-2">
            <span>Total(4):</span>
            <span className="text-green2">3000.00 Mts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
