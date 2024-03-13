import { CompanyInfo } from "@/types/companyInfo";

async function AboutPage() {
  const response = await fetch("http://localhost:3000/api/company");
  const { data }: { data: CompanyInfo } = await response.json();

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
