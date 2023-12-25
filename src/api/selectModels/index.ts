//统一管理上传文件相关的接口
import request from "@/utils/request";
import type {selectModelsResponse} from "@/api/selectModels/type";

enum API {
    Select_Models = "/selectModels/"
}

//上传文件接口
export const getSelectModels = (data: any) => request.post<any, selectModelsResponse>(API.Select_Models, data)
