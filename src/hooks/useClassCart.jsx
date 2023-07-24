import { useContext } from "react";

import { useQuery } from "react-query";
import { AuthContext } from "../Providers/AuthProvider";

const useClassCart = () => {
  const { user, loading } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token');

  const {
    refetch,
    data: classItem = [],
    isLoading,
  } = useQuery({
    queryKey: ["classcarts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://final-assignment-server-flax.vercel.app/classcart?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return { classItem, refetch, isLoading };
};
export default useClassCart;
