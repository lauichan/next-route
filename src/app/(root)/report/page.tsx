import ReportTable from "@/components/report/ReportTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo Analytics",
  description: "통계 페이지",
};

async function ReportPage() {
  return <ReportTable />;
}

export default ReportPage;
