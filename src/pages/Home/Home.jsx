import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import Testimonials from "../../component/Testimonial/Testimonials";
import Services from "../../component/services/Services";


const Home = () => {
   const testimonials = useLoaderData()
   return (
      <div className="relative bg-white">
         <Banner></Banner>
         <Services></Services>
         <Testimonials testimonials={testimonials}></Testimonials>
         <Footer></Footer>
      </div>
   );
};

export default Home;