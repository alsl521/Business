//统一管理上传文件相关的接口
import request from "@/utils/request";
import type {
    dataFile,
    dataFileResponse,
} from "@/api/UpLoadFiles/BasicDataService/BasicGeographicData/type";

enum API {
    UpLoad_StudyAreaScope_Files = "/upLoadFiles/BasicDataService/BasicGeographicData/StudyAreaScope",
    Creat_StudyAreaScope_Table = "/creat/BasicDataService/BasicGeographicData/StudyAreaScope/Table",
    Update_StudyAreaScope_Table = "/update/BasicDataService/BasicGeographicData/StudyAreaScope/Table",
    Publish_StudyAreaScope = "/publish/BasicDataService/BasicGeographicData/StudyAreaScope",

    UpLoad_AdministrativeDivision_Files = "upLoad/BasicDataService/BasicGeographicData/AdministrativeDivision",
    UpLoad_LandUse_Files = "upLoad/BasicDataService/BasicGeographicData/LandUse",
    UpLoad_HydrogeologicalMap_Files = "upLoad/BasicDataService/BasicGeographicData/HydrogeologicalMap",
    UpLoad_River_Files = "upLoad/BasicDataService/BasicGeographicData/River",

    UpLoad_GeologicBody_Files = "/upLoad/BasicDataService/GeologicalData/GeologicalBody",
    UpLoad_DEM_Files = "upLoad/BasicDataService/TopographicData/DEM",
}

//研究区范围
export const get_StudyAreaScope = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_StudyAreaScope_Files, data)
export const upLoad_StudyAreaScope = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_StudyAreaScope_Files, data)
export const create_StudyAreaScope = (form: any) => request.post<any, dataFileResponse>(API.Creat_StudyAreaScope_Table, form)
export const update_StudyAreaScope = (form: any) => request.post<any, dataFileResponse>(API.Update_StudyAreaScope_Table, form)
export const publish_StudyAreaScope = (data: any) => request.get<any, dataFileResponse>(API.Publish_StudyAreaScope, data)

export const get_HydrogeologicalMap = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_HydrogeologicalMap_Files)
export const upLoad_HydrogeologicalMap = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_HydrogeologicalMap_Files, data)

export const get_AdministrativeDivision = () => request.get<any, dataFileResponse>(API.UpLoad_AdministrativeDivision_Files)
export const upLoad_AdministrativeDivision = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_AdministrativeDivision_Files, data)

export const get_River = () => request.get<any, dataFileResponse>(API.UpLoad_River_Files)
export const upLoad_River = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_River_Files, data)

export const get_LandUse = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_LandUse_Files)
export const upLoad_LandUse = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_LandUse_Files, data)

export const get_GeologicBody = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_GeologicBody_Files)
export const upLoad_GeologicBody = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_GeologicBody_Files, data)

export const get_DEM = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_DEM_Files)
export const upLoad_DEM = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_DEM_Files, data)