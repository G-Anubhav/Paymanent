import Image from "next/image";
import Marquee from "react-fast-marquee";
// import Slider from "react-slick";
import partner_1 from "/public/images/partner-1.png";
import partner_2 from "/public/images/partner-2.png";
import partner_3 from "/public/images/partner-3.png";
import partner_4 from "/public/images/partner-4.png";
import partner_5 from "/public/images/partner-5.png";

// Import css files
// import "slick-carousel/slick/slick.css";

// const Partners = () => {
//   const settings = {
//     infinite: true,
//     autoplay: true,
//     focusOnSelect: false,
//     speed: 8000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 993,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="partner">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-md-12 col-12">
//             <h4>Partners</h4>
//           </div>
//           <div className="col-md-12 col-12">
//             <Slider {...settings} className="partner-box">
//               {[
//                 partner_1,
//                 partner_2,
//                 partner_3,
//                 partner_4,
//                 partner_5,
//                 partner_2,
//               ].map((singleItm, i) => (
//                 <div key={i} className="single">
//                   <div className="item">
//                     <Image src={singleItm} alt="image" />
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;



const partners = [partner_1, partner_2, partner_3, partner_4, partner_5];

const Partners = () => (
  <div className="partner mt-60 pb-60">
    <h3 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "2rem" }}>Our Partners</h3>
    <Marquee speed={60} gradient={false} pauseOnHover={true}>
      {partners.concat(partners).map((img, i) => (
        <div key={i} style={{ margin: "0 30px" }}>
          <Image src={img} alt="partner" height={60} />
        </div>
      ))}
    </Marquee>
  </div>
);
export default Partners;
