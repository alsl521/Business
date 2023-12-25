//统一管理上传文件相关的接口
import request from "@/utils/request";
import type {dataFile, dataFileResponse} from "@/api/upLoadFile/type";

enum API {
    UpLoad_Files = "/UpLoadFiles/"
}

//上传文件接口
export const dataUpLoad = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_Files, data)
