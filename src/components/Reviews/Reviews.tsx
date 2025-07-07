import React from 'react';
import Image from 'next/image';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Brandon C.',
      stars: '★★★★★',
      date: 'Absolutely enjoying this system!',
      text: '”It brings dry fire training to next level. Use it daily and have been making great strides in accuracy. I would love to see the app add a time record of first shot and then total time for that round. Overall, highly recommended to any and every skill set.”',
      textClass: 'pl-2',
      image: '/contentimages/LSStes1.webp',
      width: 120,
      height: 239,
    },
    {
      id: 2,
      name: 'Alicia B.',
      stars: '★★★★★',
      date: 'Equipment is perfect.',
      text: '”Just what I needed to improve my skills. Thank you!”',
      image: '/contentimages/LSStes2.jpg',
      width: 120,
      height: 142,
    },
    {
      id: 3,
      name: 'Kolin L.',
      stars: '★★★★★',
      date: 'The Laser Strike System',
      text: '”The Laser Strike System not only saves me money on ammunition, the convenience is fantastic. I can spend short sessions becoming a better shot, in between daily tasks. The feedback is invaluable and I look forward to getting to the range after each use.”',
      image: '/contentimages/testimonial5.webp',
      width: 120,
      height: 142,
    },
    {
      id: 4,
      name: 'Kevin C.',
      stars: '★★★★★',
      date: 'This is a great product!',
      text: "”I'm so happy that I purchased this system. It has already helped with settling down my trigger pull.”",
      image: '/contentimages/LSStes3.webp',
      width: 120,
      height: 119,
    },
    {
      id: 5,
      name: 'Anthony L.',
      stars: '★★★★★',
      date: 'I love this system. Told my brother to get one too.',
      text: "”Just recommended it to my brother-in-law. I don't get to shoot as much as I would like. However, a few minutes with the system helps trigger control and sighting, improving speed and accuracy. I highly recommend it. Easy to set up and use just about anywhere!”",
      textClass: 'pl-2',
      image: '/contentimages/LSStes4.webp',
      width: 120,
      height: 239,
    },
    {
      id: 6,
      name: 'Sam C.',
      stars: '★★★★★',
      date: 'A great way to practice.',
      text: "”I like that I can use it anywhere. I like everything about it, the sound the lights, it's great fun.”",
      image: null,
      width: 0,
      height: 0,
    },
  ];

  const firstColumn = reviews.slice(0, 3);
  const secondColumn = reviews.slice(3);

  return (
    <div className="mt-20 mb-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {firstColumn.map(review => (
            <div
              key={review.id}
              className="bg-white p-3 px-4 sm:px-3 flex flex-row-reverse gap-4 border-[1px] border-[#c4c1c1]"
            >
              {review.image ? (
                <div className="flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={`${review.name}'s review`}
                    width={review.width}
                    height={review.height}
                    className="rounded"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-24 flex-shrink-0"></div>
              )}
              <div className="flex-1">
                <div className={`${review.textClass || ''}`}>
                  <div className="mb-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className="font-bold text-lg">{review.name}</span>
                      <span className="text-[#ffd700] text-xl">{review.stars}</span>
                    </div>
                  </div>
                  <span className="font-bold text-black-600 text-lg mb-3 block">{review.date}</span>
                </div>
                <div className={`text-black-600 text-sm block mt-2 ${review.textClass || ''}`}>
                  {review.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {secondColumn.map(review => (
            <div
              key={review.id}
              className="bg-white p-3 px-4 sm:px-3 flex flex-row-reverse gap-4 border-[1px] border-[#c4c1c1]"
            >
              {review.image ? (
                <div className="flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={`${review.name}'s review`}
                    width={review.width}
                    height={review.height}
                    className="rounded"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-24 flex-shrink-0"></div>
              )}
              <div className="flex-1">
                <div className={`${review.textClass || ''}`}>
                  <div className="mb-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className="font-bold text-lg">{review.name}</span>
                      <span className="text-[#ffd700] text-xl">{review.stars}</span>
                    </div>
                  </div>
                  <span className="font-bold text-black-600 text-lg mb-3 block">{review.date}</span>
                </div>
                <div className={`text-gray-800 text-sm block mt-2 ${review.textClass || ''}`}>
                  {review.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
