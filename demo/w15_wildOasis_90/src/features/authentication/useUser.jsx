import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export const useUser = () => {
    const {data:user,isLoading} = useQuery({
        queryKey:['user_xx'],
        queryFn: getCurrentUser,
    });
    const isAuthenticated =user?.role === 'authenticated'
    return {user, isLoading, isAuthenticated}
}