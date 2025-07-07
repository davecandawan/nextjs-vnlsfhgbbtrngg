import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import CallToActionButton from '../UI/CallToActionButton';
import PackageSelection from '../PackageSelection/PackageSelection';
import Faqs from '../Faqs/Faqs';
import StickyBanner from '../StickyBanner/StickyBanner';
import Reviews from '../Reviews/Reviews';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { primaryFont, interRegular } from '@/app/fonts';

const Slideshow = dynamic(() => import('../Slideshow/Slideshow'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>,
});

interface ContentProps {
  buttonText?: string;
}

const Content: React.FC<ContentProps> = ({
  buttonText = 'Give Me My Enhanced Laser Strike System + Virtual Steel Target!',
}) => {
  const scrollToPackages = useCallback(() => {
    const packagesSection = document.getElementById('package-selection');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="min-h-screen bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
      <div className="w-full bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
        <div className="w-full max-w-[1240px] mx-auto pt-5 lg:px-20 bg-white">
          <Slideshow />
        </div>
      </div>
      <div className="w-full max-w-[1240px] mx-auto px-5 py-1 lg:px-20 bg-white">
        <div className="space-y-2">
          <div className="mt-1 mb-8">
            <div className="mt-1">
              <AddToCartButton />
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-1">
              <div className="flex-shrink-0">
                <Image
                  src="/contentimages/reviewstars.webp"
                  alt="5 star rating"
                  width={114}
                  height={20}
                  className="w-[85px] sm:w-[114px] h-auto inline-block"
                />
              </div>
              <span className="font-semibold text-lg sm:text-2xl whitespace-nowrap">
                116 Reviews
              </span>
            </div>
            <div className="bg-[#f7f2f2] py-2 sm:py-2 sm:px-6 inline-block text-[13px] sm:text-2xl whitespace-nowrap overflow-x-auto w-full sm:w-auto">
              <span className="inline-flex items-center">
                <span className="mr-1">✨</span>
                <strong>
                  <span className="hidden sm:inline">Highly rated by customers for: </span>
                  <span className="sm:hidden">Highly rated by customers for: </span>
                  <u>ease of use</u>, <u>quality</u>
                </strong>
              </span>
            </div>
          </div>
          {/* Testimonial Section */}
          <div className="max-w-4xl mx-auto mb-8 p-4 bg-[#f9f9f9] rounded-lg shadow-sm border border-[#ddd]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="relative">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                  <Image
                    src="/contentimages/testimonialLSSHolsterMobilesize.avif"
                    alt="Don T."
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 56px, 64px"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2f78c9] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  ✓
                </div>
              </div>
              <div className="text-center sm:text-left min-w-[120px]">
                <div className="font-bold">Don T.</div>
                <div className="text-[13px] text-gray-600 mb-2">Verified Buyer</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-lg font-semibold mb-2">Top Review</div>

                <div className="text-yellow-400 text-xl">★★★★★</div>

                <span className="font-semibold text-lg mb-2">
                  I've already saved $100s in ammo and range time!
                </span>

                <span className="text-[15px] text-gray-600 leading-tight block">
                  "It's a fantastic tool for improving trigger control. The setup is simple and
                  helps refine each shot. It's a cost-effective way to train without wasting ammo.
                  Highly recommended for anyone serious about honing their shooting skills!"
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] py-5 px-0">
            <Image
              src="/contentimages/BlockImage1Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center pb-1 -mb-6 md:mb-0 md:pt-1">
            <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-0 px-2">
              <div className="font-jawbreak uppercase">LOVE IT OR YOU DON'T PAY A DIME!</div>
            </h1>
          </header>
          <div className="mt-1 mb-8">
            <div className="mt-1">
              <AddToCartButton />
            </div>
          </div>

          {/* Trust Badges */}
          <div className="w-full max-w-4xl mx-auto my-6 px-3 py-5">
            <div className="flex justify-between items-center sm:flex-wrap sm:justify-center sm:gap-4">
              <div className="w-[22%] sm:w-[140px] h-auto aspect-[140/120] relative">
                <Image
                  src="/contentimages/VNSH_MONEY-BACK.webp"
                  alt="Money Back Guarantee"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[24%] sm:w-[165px] h-auto aspect-[165/120] relative">
                <Image
                  src="/contentimages/VNSH_SECURE-CHECKOUT.webp"
                  alt="Secure Checkout"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[24%] sm:w-[170px] h-auto aspect-[170/120] relative">
                <Image
                  src="/contentimages/VNSH_aMERICAN.webp"
                  alt="American Made"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[24%] sm:w-[170px] h-auto aspect-[170/120] relative">
                <Image
                  src="/contentimages/VNSH_FAST-SHIP.webp"
                  alt="Fast Shipping"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <header id="benefits" className="text-center pb-1 -mb-6 md:mb-0 md:pt-1">
            <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-4 px-2">
              <div className="font-jawbreak uppercase">
                Why This System Ensures You{' '}
                <span className="text-[#ff0000] underline">
                  Make The One Shot You Can't Afford To Miss
                </span>
              </div>
            </h1>
          </header>
          <div className="space-y-4 text-xl leading-tight md:text-xl font-inter">
            <p>
              ✅ <span className="font-bold">Helps Eliminate “Recoil Flinch”:</span> Recoil itself
              has zero impact on your accuracy. But your anticipation of recoil can have a serious
              impact. Since the Laser Strike takes recoil out of the equation, you can train
              yourself to eliminate the “recoil flinch” that plagues so many shooters.
            </p>
            <p>
              🔫 😌 <span className="font-bold">Reduces Firearm Wear-and-Tear:</span> Not only is
              the Laser Strike guaranteed to be 100% safe for your guns, but it also minimizes
              overall wear and the frequency with which you need to clean them – since it reduces
              the amount of live ammo you use.
            </p>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] py-5 px-0">
            <Image
              src="/contentimages/BlockImage2Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4 text-xl leading-tight md:text-xl font-inter">
            <p>
              🔄 <span className="font-bold">Works With a Wide Range of Firearms:</span> If your gun
              shoots 9MM, .45 ACP, .40 S&W, and .380 ACP, then it will work with the Laser Strike.
              Just be sure to select the appropriate caliber when placing your order.
            </p>
            <p>
              🛡️ <span className="font-bold">100% Safe (and Quiet) for Home Use:</span> After
              ensuring your gun is fully unloaded and contains nothing but the laser cartridge, the
              Laser Strike lets you safely practice around friends and family with zero worry.
            </p>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] py-0 px-0">
            <Image
              src="/contentimages/BlockImage3Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4 text-xl leading-tight md:text-xl md:py-4 py-4 font-inter">
            <p>
              🙌 <span className="font-bold">Incredibly Simple to Setup ANYWHERE:</span> All it
              takes is 5 yards of space and 5 minutes of prep to start training anywhere you want!
            </p>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] px-0 md:px-0">
            <Image
              src="/contentimages/BlockImage4Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center pt-2 pb-1 -mb-6 md:mb-0 md:pt-4">
            <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-0 px-2">
              <div className="font-jawbreak uppercase">
                Use IT APP-FREE With Our Digital Steel Target
              </div>
            </h1>
          </header>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] px-0 md:px-0">
            <Image
              src="/contentimages/DigitalTargetDesktop2.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed mb-4">
              By far the coolest thing about the new Enhanced Laser Strike System is the fact it
              comes with a “digital steel” target – which works seamlessly with your laser cartridge
              insert.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Just rack the insert, fire at the digital steel, and grin ear-to-ear every time you
              hear it PING! 🤠
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Effortlessly shoot over and over and the target will reset and track each shot.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Portable, rechargeable and super easy to use, it makes training extra fun.
            </p>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] px-0 md:px-0 md:py-5">
            <Image
              src="/contentimages/DigitalTarget2Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center pt-2 pb-1 -mb-6 md:mb-0 md:py-4">
            <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-0 px-2">
              <div className="font-jawbreak uppercase">
                Plus... You're Getting An Iron-Clad, Money-Back Guarantee
              </div>
            </h1>
          </header>
          <div className="space-y-6">
            <div className="w-4/5 md:w-[30%] mx-auto px-4 md:px-0">
              <Image
                src="/contentimages/VNSH_MONEY-BACK.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p>Love everything about your order, or we’ll refund you every penny.</p>
            <p>It’s that simple.</p>
            <p>
              If you aren’t totally thrilled, all you have to do is contact our US-Based Support
              Team within 60 days to get a full refund.
            </p>
            <p className="font-bold">
              Plus, we also give you a 2-year workmanship guarantee as well!
            </p>
            <p>
              We know you’ll love your VNSH gear, which is why we’re happy to extend you these
              iron-clad guarantees.
            </p>
            <p>
              So if you want to get an awesome price on the{' '}
              <span className="font-bold italic">
                fastest, easiest way to become a dead accurate shooter…
              </span>
            </p>
            <p id="package-selection" className="text-lg md:text-xl font-medium mb-8">
              Then you owe it to yourself to grab this deal now!
            </p>

            {/* Reviews Component */}
            <div className="mb-12">
              <Reviews />
            </div>

            {/* Package Selection Component */}
            <div id="targetselection">
              <PackageSelection />
            </div>

            <header id="faqs" className="text-center pt-2 pb-1 -mb-6 md:mb-0 md:py-4">
              <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-0 px-2">
                <div className="font-jawbreak uppercase">Frequently Asked Questions</div>
              </h1>
            </header>
          </div>
        </div>
        <StickyBanner />
      </div>
    </div>
  );
};

export default Content;
