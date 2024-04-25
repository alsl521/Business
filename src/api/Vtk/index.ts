//统一管理上传文件相关的接口
import request from "@/utils/request";
import type {
    dataFile,
    dataFileResponse,
} from "@/api/Vtk/type";

enum API {
    upLoad_VtkData_UnderwaterTerrain_get_csv_data = "/upLoad/VtkData/UnderwaterTerrain",
}

//河流监测站点流量
export const get_UnderwaterTerrain = (data: any) => request.get<any, dataFileResponse>(API.upLoad_VtkData_UnderwaterTerrain_get_csv_data, data)
export const upLoad_UnderwaterTerrain = (data: dataFile) => request.post<any, dataFileResponse>(API.upLoad_VtkData_UnderwaterTerrain_get_csv_data, data)
