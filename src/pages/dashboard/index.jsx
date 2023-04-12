import { getStorageType } from "@/utils/storage";
import {
  AuthLayout,
  Dashboard as DashboardUI,
  RelatedTasks,
  Proposals,
} from "../../components";
import { USER_TYPES } from "@/utils/constant";

const Dashboard = () => {
  const isFreelancer = getStorageType() === USER_TYPES.FREELANCER;

  return (
    <AuthLayout>{isFreelancer ? <RelatedTasks /> : <Proposals />}</AuthLayout>
  );
};

export default Dashboard;
