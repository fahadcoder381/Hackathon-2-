import type { NextPage } from 'next';
import product1 from '../../../public/section 3 pic/Cloud sofa three seater 1.png';
import product2 from '../../../public/section 3 pic/Cloud sofa three seater  2.png';
import Image from 'next/image';

export const Descriptionpage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 lg:px-12 py-6">
      {/* Headings Section */}
      <div className="flex flex-wrap justify-around items-center text-center gap-4 mb-6">
        <h1 className="text-2xl md:text-4xl mb-2">Description</h1>
        <h1 className="text-2xl md:text-4xl text-[#9F9F9F] mb-2">Additional Information</h1>
        <h1 className="text-2xl md:text-4xl text-[#9F9F9F]">Reviews [5]</h1>
      </div>

      {/* Description Paragraphs */}
      <div className="text-center text-sm md:text-lg px-4 mb-6">
        <p className="mb-4">
          Embodying the raw, rock 'n' roll spirit, the Kilburn portable active
          stereo speaker takes the unmistakable look and sound of Marshall,
          unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage-styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {/* Product Image 1 */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            src={product1}
            alt="Cloud Sofa Three Seater 1"
            width={1000}
            height={1000}
            className="rounded-lg bg-[#FFF9E5] object-cover max-w-full h-auto"
          />
        </div>

        {/* Product Image 2 */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            src={product2}
            alt="Cloud Sofa Three Seater 2"
            width={1000}
            height={1000}
            className="rounded-lg bg-[#FFF9E5] object-cover max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};
