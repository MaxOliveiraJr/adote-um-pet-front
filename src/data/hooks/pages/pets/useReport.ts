import { useEffect, useState } from "react";
import { Report } from "../../../@Types/Report";
import { ApiService } from "../../../service/ApiService";

export function useReport() {
  const [reportList, setReportList] = useState<Report[]>([]);

  useEffect(() => {
    ApiService.get("/adocoes").then((response: any) => {
      setReportList(response.data);
    });
  }, []);

  return { reportList };
}
