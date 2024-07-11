import { star } from '../assets/icons';
function PopularProductCard({ imgURL, name, price }) {
  return (
    <div>
      <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className=" w-[280px] h-[280px] " />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} />
          <p className=" font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 leading-normal font-palanquin text-xl font-semibold">
          {name}
        </h3>
        <p className="mt-2 font-montserrat font-semibold text-coral-red leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
}

export default PopularProductCard;
