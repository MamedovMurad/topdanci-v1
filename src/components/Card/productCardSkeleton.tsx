import { FunctionComponent } from "react";

const ProductCardSkeleton: FunctionComponent = () => {
  return (
    <div className="w-full block overflow-hidden lg:bg-[#F0F0F0] bg-white lg:rounded-2xl rounded-[10px] animate-pulse">
      <div className="relative lg:h-[217px] h-[135px] lg:rounded-2xl rounded-[10px] overflow-hidden bg-gray-300">
        <div className="absolute top-0 left-0 w-8 h-8 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-[51px] h-[18px] bg-gray-400 rounded"></div>
      </div>

      <div className="lg:flex items-end justify-between lg:p-[10px] px-[6px] h-24 lg:mt-2 mt-[2px]">
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-400 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="flex items-center gap-x-1 lg:mt-3 mt-[6px]">
            <div className="h-3 bg-gray-300 rounded w-16"></div>
            <div className="h-3 bg-gray-300 rounded w-6"></div>
            <div className="h-3 bg-gray-400 rounded w-10"></div>
          </div>
        </div>
        <div className="text-right space-y-2 mt-2 lg:mt-0 lg:w-1/3">
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          <div className="h-3 bg-gray-400 rounded w-1/3"></div>
        </div>
      </div>

      <div className="lg:px-[10px] px-[6px] mt-2">
        <div className="h-[35px] bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
