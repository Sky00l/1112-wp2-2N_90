import { useQuery } from "@tanstack/react-query";
import { getBookings } from '../../services/apiBookings';

export const getBookings = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['bookings_90'],
        queryFn: getBooking(1)
    })
    return { data, error, isLoading };
};