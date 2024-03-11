//统一管理上传文件相关的接口
import request from "@/utils/request";
import type {
    dataFile,
    dataFileResponse,
} from "@/api/UpLoadFiles/BasicDataService/BasicGeographicData/type";

enum API {
    UpLoad_FlowRate_Files = "/upLoad/BasicDataService/MonitoringData/RiverMonitoringStation/FlowRate",
    Creat_FlowRate_Table = "/creat/BasicDataService/MonitoringData/RiverMonitoringStation/FlowRate/Table",
    Update_FlowRate_Table = "/update/BasicDataService/MonitoringData/RiverMonitoringStation/FlowRate/Table",
    Publish_FlowRate = "/publish/BasicDataService/MonitoringData/RiverMonitoringStation/FlowRate",
}

//河流监测站点流量
export const get_FlowRate = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_FlowRate_Files, data)
export const upLoad_FlowRate = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_FlowRate_Files, data)
export const create_FlowRate = (form: any) => request.post<any, dataFileResponse>(API.Creat_FlowRate_Table, form)
export const update_FlowRate = (form: any) => request.post<any, dataFileResponse>(API.Update_FlowRate_Table, form)
export const publish_FlowRate = (data: any) => request.get<any, dataFileResponse>(API.Publish_FlowRate, data)