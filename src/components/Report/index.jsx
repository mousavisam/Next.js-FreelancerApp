import { reportApi } from "@/services";
import { Box, Card, CardBody, Heading, Flex, Text } from "@chakra-ui/react";
import { isEmpty, startCase } from "lodash";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";

import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getStorageType } from "@/utils/storage";
import { USER_TYPES } from "@/utils/constant";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    x: {
      type: "time",
      time: {
        unit: "minute",
      },
    },
  },
};

export const Report = () => {
  const [logsData, setLogsData] = useState(null);
  const [data, setData] = useState({});
  const reportType =
    getStorageType() === USER_TYPES.FREELANCER
      ? "count_of_served_tasks"
      : "count_of_requested_tasks";

  const handleGetReport = useCallback(() => {
    reportApi.get().then((res) => {
      setData(res?.data || {});
      const userLogs = res?.data?.user_logs || [];
      const timeLogs = userLogs.map((log) => {
        const startDate = new Date(log.session_start);
        const endDate = new Date(log.session_end);
        return {
          x: startDate,
          y: endDate.getTime() - startDate.getTime(),
        };
      });

      setLogsData({
        datasets: [
          {
            data: timeLogs,
          },
        ],
      });
    });
  }, []);

  useEffect(() => {
    handleGetReport();
  }, [handleGetReport]);

  if (isEmpty(logsData)) return <div />;

  return (
    <>
      <Card p="1rem" my={{ sm: "24px", xl: "0px" }}>
        <CardBody position="relative" width="600px" p="0px 5px">
          <Flex direction="column">
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="lg">
              <Heading fontSize="xl">Reports</Heading>
              <Text>
                {startCase(reportType)}: {data[reportType]}
              </Text>
            </Box>
          </Flex>
        </CardBody>
      </Card>
      <Card p="1rem" my={{ sm: "24px", xl: "0px" }}>
        <CardBody position="relative" width="600px" p="0px 5px">
          <Flex direction="column">
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="lg">
              <Heading fontSize="xl">Logs</Heading>
              <Line data={logsData} options={options} />
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};
