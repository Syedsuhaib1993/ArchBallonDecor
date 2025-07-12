import React, { useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

// 🎈 Replace with your decor images
import decor1 from '../assets/aqeeqah.jpeg';
import decor2 from '../assets/batpakki.jpeg';
import decor3 from '../assets/engagement.jpeg';
import decor4 from '../assets/nikkah.jpeg';
import decor5 from '../assets/welcomebaby.jpeg';
import decor6 from '../assets/birthday.jpeg';
import decor7 from '../assets/birthday2.jpeg';
import decor8 from '../assets/birthday3.jpeg';
import decor9 from '../assets/birthday4.jpeg';
import decor10 from '../assets/birthday5.jpeg';
import decor11 from '../assets/birthday6.jpeg';
import decor12 from '../assets/birthday7.jpeg';
import decor13 from '../assets/birthday8.jpeg';
import decor14 from '../assets/birthday9.jpeg';
import decor15 from '../assets/birthday10.jpeg';

// ✅ ADD your background image here!
import bgDecor from '../assets/contact.jpg'; // 🖼️ Add your own background

const BalloonDecorSlider = () => {
  const slider = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const data = [
    { img: decor1, title: "Aqeeqah Setup", description: "Colorful balloons to brighten your birthday." },
    { img: decor2, title: "Batpakki Wedding Bliss", description: "Elegant balloon arches for your big day." },
    { img: decor3, title: "Engagement", description: "Professional decor to impress your guests." },
    { img: decor4, title: "Nikkah Ceremony", description: "Adorable balloon themes for baby celebrations." },
    { img: decor5, title: "Welcome Baby", description: "Custom themes to match your dream event." },
    { img: decor6, title: "Birthday Celebration", description: "Romantic setups for memorable moments." },
    { img: decor7, title: "Birthday Celebration", description: "Romantic setups for memorable moments." },
    { img: decor8, title: "Birthday Celebration", description: "Romantic setups for memorable moments." },
    { img: decor9, title: "Birthday Celebration", description: "Romantic setups for memorable moments." },
    { img: decor10, title: "Birthday Celebration", description: "Romantic setups for memorable moments." },
    { img: decor11, title: "Birthday Celebration", description: "Romantic setups for memorable moments." },
    { img: decor12, title: "Birthday Celebration", description: "Romantic setups for memorable moments." },
    { img: decor13, title: "Birthday Celebration", description: "Romantic setups for memorable moments." },
    { img: decor14, title: "Birthday Celebration", description: "Romantic setups for memorable moments." },
    { img: decor15, title: "Birthday Celebration", description: "Romantic setups for memorable moments." },
  ];

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots:false }
      }
    ]
  };

  return (
    <div id='work' className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-8 relative overflow-hidden'>

      {/* ✅ BACKGROUND IMAGE + GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgDecor})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-pink-600 to-purple-700 opacity-80"></div>
      </div>

      {/* ✅ MAIN CONTENT */}
      <div className='relative z-10'>
        <div className='flex flex-col items-center lg:flex-row justify-between mb-10'>
          <div>
            <h1 className='text-4xl font-bold text-center lg:text-start text-white'>
              Our Balloon Decor 🎈
            </h1>
            <p className='mt-2 text-center lg:text-start text-gray-200'>
              Discover our stunning balloon decoration themes for any event.{" "}
              <span className='font-semibold'>Click to view the full image</span>
            </p>
          </div>
          <div className='flex gap-5 mt-4 lg:mt-0'>
            <button onClick={() => slider.current.slickPrev()}
              className='bg-white/50 text-white px-4 py-2 rounded-lg hover:bg-white/70 transition'>
              <FaArrowLeft size={25} />
            </button>
            <button onClick={() => slider.current.slickNext()}
              className='bg-white/50 text-white px-4 py-2 rounded-lg hover:bg-white/70 transition'>
              <FaArrowRight size={25} />
            </button>
          </div>
        </div>

        <div className='mt-5 '>
          <Slider ref={slider} {...settings}>
            {data.map((item, index) => (
              <div key={index} className='h-[400px] rounded-xl shadow-lg mb-2  cursor-pointer bg-white  overflow-hidden'>
                <img
                  src={item.img}
                  alt="decor"
                  className='h-[300px] w-full object-cover rounded-t-xl'
                  onClick={() => setModalImage(item.img)}
                />
                <div className='flex flex-col justify-center items-center p-4'>
                  <h1 className='font-semibold text-xl text-pink-700'>{item.title}</h1>
                  <p className='py-2 md:text-base text-sm text-gray-600 text-center'>{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ✅ MODAL */}
      {modalImage && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
          <button className='absolute  top-5 right-5 text-white text-3xl' onClick={() => setModalImage(null)}>
            <FaTimes />
          </button>
          <img src={modalImage} alt="Full View" className='max-w-full max-h-full object-contain rounded-lg shadow-xl' />
        </div>
      )}
    </div>
  );
};

export default BalloonDecorSlider;
