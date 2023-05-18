import { useEffect, useState } from "react";
import { AxiosClient } from "../../service";

export const getPlanData = async () => {
  try {
    const { data } = await AxiosClient.get("/metadata/payment-plans");

    return { data, status: true };
  } catch (err) {
    console.log(err);
    return { err, status: false };
  }
};

export const useGetPlanData = () => {
  const [data, setPlanData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPlanData() {
      setIsLoading((loading) => !loading);
      const planData = await getPlanData();
      setIsLoading((loading) => !loading);
      if (planData.status) {
        setPlanData(planData.data);
      } else {
        setError(planData.err);
      }
    }
    fetchPlanData();
  }, []);

  return { isLoading, error, data };
};
