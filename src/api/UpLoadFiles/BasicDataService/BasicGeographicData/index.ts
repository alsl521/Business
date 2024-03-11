//统一管理上传文件相关的接口
import request from "@/utils/request";
import type {
    dataFile,
    dataFileResponse,
} from "@/api/UpLoadFiles/BasicDataService/BasicGeographicData/type";

enum API {
    UpLoad_StudyAreaScope_Files = "/UpLoadFiles/BasicDataService/BasicGeographicData/StudyAreaScope",
    Creat_StudyAreaScope_Table = "/creat/BasicDataService/BasicGeographicData/StudyAreaScope/Table",
    Update_StudyAreaScope_Table = "/update/BasicDataService/BasicGeographicData/StudyAreaScope/Table",
    Publish_StudyAreaScope = "/publish/BasicDataService/BasicGeographicData/StudyAreaScope",
}

//研究区范围
export const get_StudyAreaScope = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_StudyAreaScope_Files, data)
export const upLoad_StudyAreaScope = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_StudyAreaScope_Files, data)
export const create_StudyAreaScope = (form: any) => request.post<any, dataFileResponse>(API.Creat_StudyAreaScope_Table, form)
export const update_StudyAreaScope = (form: any) => request.post<any, dataFileResponse>(API.Update_StudyAreaScope_Table, form)
export const publish_StudyAreaScope = (data: any) => request.get<any, dataFileResponse>(API.Publish_StudyAreaScope, data)