import type {dataFile, dataFileResponse} from "@/api/UpLoadFiles/SpatialDiscreteData/type";
import request from "@/utils/request";

enum API {
    Modify_Data = "modify/data",
    Get_All_Upload_Files = "get/all/upload/files",
    Run_Files = "run/file",
    Get_All_Layers = "get/all/layers",
}

export const get_All_Upload_Files = () => request.get<any, dataFileResponse>(API.Get_All_Upload_Files)

export const run_Files = () => request.get<any, dataFileResponse>(API.Run_Files)

export const get_All_Layers = () => request.get<any, dataFileResponse>(API.Get_All_Layers)

export const Modify_Data = (data: any) => request.post<any, dataFileResponse>(API.Modify_Data, data)