import type {dataFile, dataFileResponse} from "@/api/UpLoadFiles/BasicDataService/BasicGeographicData/type";
import request from "@/utils/request";

enum API {
    UpLoad_EFDCInitialWaterLevel_Files = "upLoad/ModelData/EFDC/InitialWaterLevel",
    UpLoad_EFDCParameter_Files = "upLoad/ModelData/EFDC/Parameter",
    set_efdc_time = "set/efdc/time",
}

export const upLoad_EFDCInitialWaterLevel = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_EFDCInitialWaterLevel_Files, data)
export const upLoad_EFDCParameter = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_EFDCParameter_Files, data)
export const set_efdc_time = (data: dataFile) => request.post<any, dataFileResponse>(API.set_efdc_time, data)