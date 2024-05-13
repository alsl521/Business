import type {dataFile, dataFileResponse} from "@/api/UpLoadFiles/BasicDataService/BasicGeographicData/type";
import request from "@/utils/request";

enum API {
    UpLoad_Infiltration_Files = "upLoad/ModelData/MODFLOW/Infiltration",
    UpLoad_StoreWater_Files = "upLoad/ModelData/MODFLOW/StoreWater",
    UpLoad_InitialWaterLevel_Files = "upLoad/ModelData/MODFLOW/InitialWaterLevel",
    UpLoad_SurfaceRive_Files = "upLoad/ModelData/MODFLOW/SurfaceRive",
    set_MODFLOW_Time = "set/modflow/time",
}

export const upLoad_Infiltration = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_Infiltration_Files, data)
export const upLoad_StoreWater = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_StoreWater_Files, data)
export const upLoad_MODFLOWInitialWaterLevel = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_InitialWaterLevel_Files, data)
export const get_MODFLOWInitialWaterLevel = () => request.get<any, dataFileResponse>(API.UpLoad_InitialWaterLevel_Files)
export const upLoad_MODFLOWSurfaceRive = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_SurfaceRive_Files, data)
export const set_MODFLOW_Time = (data: dataFile) => request.post<any, dataFileResponse>(API.set_MODFLOW_Time, data)
export const get_MODFLOW_Time = () => request.get<any, dataFileResponse>(API.set_MODFLOW_Time)