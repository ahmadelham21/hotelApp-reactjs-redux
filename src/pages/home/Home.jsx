import { useSelector } from "react-redux";
import Hero from "./components/Hero";
import TopOffer from "./components/TopOffer";

const Home = () => {
  const bookingList = useSelector((state) => state.bookings.bookings);
  console.log(bookingList);
  return (
    <>
      <Hero />
      <TopOffer />
    </>
  );
};

export default Home;
