import request from "@/utils/request";

enum API {
    Get_Total_Time = "get/total/time",
}


export const get_total_time = () => request.get<any, any>(API.Get_Total_Time)
export const UpLoad_total_time = (data: any) => request.post<any, any>(API.Get_Total_Time, data)