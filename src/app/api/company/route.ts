import { CompanyInfo } from "@/types/companyInfo";

export async function GET(request: Request) {
  const response = await fetch("http://localhost:4000/companyInfo");
  const data: CompanyInfo = await response.json();

  if (!data) {
    return new Response("CompanyInfo is not found", { status: 404 });
  }

  return Response.json({ data });
}
