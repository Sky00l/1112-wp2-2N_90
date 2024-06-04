import { useEffect } from 'react';
import {getBooking} from '../services/apiBookings';

const Bookings_xx = () => {
 useEffect(()=> {
  getBooking(1).then((data) => console.log('booking(1) data', data))
 }, []);


  return <>Bookings_xx page</>;
};

export default Bookings_xx;
