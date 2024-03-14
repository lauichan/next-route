import { CompanyInfo } from "@/types/companyInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "소개 페이지",
};

const fetchData = async (): Promise<CompanyInfo> => {
  const response = await fetch("http://localhost:4000/companyInfo", {
    cache: "no-cache",
  });
  return await response.json();
};

async function AboutPage() {
  const data = await fetchData();

  return (
    <>
      <div>AboutPage</div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>{data.image}</p>
    </>
  );
}

export default AboutPage;
