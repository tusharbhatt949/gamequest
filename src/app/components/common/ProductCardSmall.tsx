import Button from "../ui/Button";
import RatingStars from "../ui/RatingStars";
import Link from "next/link";
import { Product } from "@/types/productTypes";
import CustomImage from "../ui/CustomImage";
import Image from "next/image";
import IMAGES from "@/utils/imagePaths";

interface ProductCardSmallProps {
  productData: Product;
  onBuyClick?: () => void;
}

const ProductCardSmall: React.FC<ProductCardSmallProps> = ({ productData }) => {
  return (
    <>
      <Link href={`/product-details/${productData.id}`}>
        <div className="bg-yellow-100 rounded-lg shadow-md p-4 flex-shrink-0 min-w-[341px] max-w-[350px] h-[383px] flex flex-col justify-between">
          <div>
            <div className="bg-[#3D352A] text-white rounded-full pl-1 pr-3 py-0.5 text-[10px] flex w-fit items-center justify-center">
              <Image
                src={IMAGES.greenDot.src}
                width={20}
                height={20}
                alt={IMAGES.greenDot.alt}
              />
              Discount {productData?.discountPercentage} %
            </div>
            <div className="flex items-center justify-center text-xs ">
              <CustomImage
                src={productData?.thumbnail}
                alt={productData?.title}
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
          </div>

          <div>
            <div className="py-3">
              <h3 className="font-semibold text-xl text-[#281E1F]">
                {productData?.title}
              </h3>
              <div>
                <RatingStars rating={productData?.rating} size={15} />
              </div>
              <div className="text-sm text-red-600 font-medium space-x-1  capitalize">
                {productData?.tags.map((genre: string, i: number) => (
                  <span key={i}>
                    {genre}
                    {i < productData?.tags.length - 1 && (
                      <span className=""> •</span>
                    )}
                  </span>
                ))}
                <p className="text-black text-xs">
                  {productData?.returnPolicy}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-[#281E1F] mr-3">
                ${productData?.price}
              </span>
              <Button
                text="Buy Now"
                className="w-full font-semibold hover:bg-[#422400] hover:text-[#ffffff]"
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCardSmall;
