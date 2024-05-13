//统一管理上传文件相关的接口
import request from "@/utils/request";
import type {
    dataFile,
    dataFileResponse,
} from '@/api/UpLoadFiles/SpatialDiscreteData/type'

enum API {
    //空间离散数据//SWMM空间离散
    UpLoad_SWMMSpatialDiscreteData_Files = "/upLoad/SpatialDiscreteData/SWMMSpatialDiscreteData",
    Creat_SWMMSpatialDiscreteData_Table = "/creat/SpatialDiscreteData/SWMMSpatialDiscreteData/Table",
    Update_SWMMSpatialDiscreteData_Table = "/update/SpatialDiscreteData/SWMMSpatialDiscreteData/Table",
    Publish_SWMMSpatialDiscreteData = "/publish/SpatialDiscreteData/SWMMSpatialDiscreteData",

    //空间离散数据//EFDC空间离散
    UpLoad_EFDCSpatialDiscreteData_Files = "/upLoad/SpatialDiscreteData/EFDCSpatialDiscreteData",
    Creat_EFDCSpatialDiscreteData_Table = "/creat/SpatialDiscreteData/EFDCSpatialDiscreteData/Table",
    Update_EFDCSpatialDiscreteData_Table = "/update/SpatialDiscreteData/EFDCSpatialDiscreteData/Table",
    Publish_EFDCSpatialDiscreteData = "/publish/SpatialDiscreteData/EFDCSpatialDiscreteData",

    //空间离散数据//MODFLOW空间离散
    UpLoad_MODFLOWSpatialDiscreteData_Files = "/upLoad/SpatialDiscreteData/MODFLOWSpatialDiscreteData",
    Creat_MODFLOWSpatialDiscreteData_Table = "/creat/SpatialDiscreteData/MODFLOWSpatialDiscreteData/Table",
    Update_MODFLOWSpatialDiscreteData_Table = "/update/SpatialDiscreteData/MODFLOWSpatialDiscreteData/Table",
    Publish_MODFLOWSpatialDiscreteData = "/publish/SpatialDiscreteData/MODFLOWSpatialDiscreteData",

    //空间离散数据//SWMM-EFDC空间离散
    UpLoad_SWMMandEFDCInteractiveUnit_Files = "/upLoad/SpatialDiscreteData/SWMMandEFDCInteractiveUnit",
    Creat_SWMMandEFDCInteractiveUnit_Table = "/creat/SpatialDiscreteData/SWMMandEFDCInteractiveUnit/Table",
    Update_SWMMandEFDCInteractiveUnit_Table = "/update/SpatialDiscreteData/SWMMandEFDCInteractiveUnit/Table",
    Publish_SWMMandEFDCInteractiveUnit = "/publish/SpatialDiscreteData/SWMMandEFDCInteractiveUnit",

    //空间离散数据//SWMM-MODFLOW空间离散
    UpLoad_SWMMandMODFLOWInteractiveUnit_Files = "/upLoad/SpatialDiscreteData/SWMMandMODFLOWInteractiveUnit",
    Creat_SWMMandMODFLOWInteractiveUnit_Table = "/creat/SpatialDiscreteData/SWMMandMODFLOWInteractiveUnit/Table",
    Update_SWMMandMODFLOWInteractiveUnit_Table = "/update/SpatialDiscreteData/SWMMandMODFLOWInteractiveUnit/Table",
    Publish_SWMMandMODFLOWInteractiveUnit = "/publish/SpatialDiscreteData/SWMMandMODFLOWInteractiveUnit",

    //空间离散数据//EFDC-MODFLOW空间离散
    UpLoad_EFDCandMODFLOWInteractiveUnit_Files = "/upLoad/SpatialDiscreteData/EFDCandMODFLOWInteractiveUnit",
    Creat_EFDCandMODFLOWInteractiveUnit_Table = "/creat/SpatialDiscreteData/EFDCandMODFLOWInteractiveUnit/Table",
    Update_EFDCandMODFLOWInteractiveUnit_Table = "/update/SpatialDiscreteData/EFDCandMODFLOWInteractiveUnit/Table",
    Publish_EFDCandMODFLOWInteractiveUnit = "/publish/SpatialDiscreteData/EFDCandMODFLOWInteractiveUnit",
}

//空间离散数据//SWMM空间离散
export const upLoad_SWMMSpatialDiscreteData = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_SWMMSpatialDiscreteData_Files, data)
export const create_SWMMSpatialDiscreteData = (form: any) => request.post<any, dataFileResponse>(API.Creat_SWMMSpatialDiscreteData_Table, form)
export const update_SWMMSpatialDiscreteData = (form: any) => request.post<any, dataFileResponse>(API.Update_SWMMSpatialDiscreteData_Table, form)
export const publish_SWMMSpatialDiscreteData = (data: any) => request.get<any, dataFileResponse>(API.Publish_SWMMSpatialDiscreteData, data)

//空间离散数据//EFDC空间离散
export const upLoad_EFDCSpatialDiscreteData = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_EFDCSpatialDiscreteData_Files, data)
export const create_EFDCSpatialDiscreteData = (form: any) => request.post<any, dataFileResponse>(API.Creat_EFDCSpatialDiscreteData_Table, form)
export const update_EFDCSpatialDiscreteData = (form: any) => request.post<any, dataFileResponse>(API.Update_EFDCSpatialDiscreteData_Table, form)
export const publish_EFDCSpatialDiscreteData = (data: any) => request.get<any, dataFileResponse>(API.Publish_EFDCSpatialDiscreteData, data)

//空间离散数据//MODFLOW空间离散
export const upLoad_MODFLOWSpatialDiscreteData = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_MODFLOWSpatialDiscreteData_Files, data)
export const create_MODFLOWSpatialDiscreteData = (form: any) => request.post<any, dataFileResponse>(API.Creat_MODFLOWSpatialDiscreteData_Table, form)
export const update_MODFLOWSpatialDiscreteData = (form: any) => request.post<any, dataFileResponse>(API.Update_MODFLOWSpatialDiscreteData_Table, form)
export const publish_MODFLOWSpatialDiscreteData = (data: any) => request.get<any, dataFileResponse>(API.Publish_MODFLOWSpatialDiscreteData, data)

//空间离散数据//SWMM-EFDC空间离散
export const upLoad_SWMMandEFDCInteractiveUnit = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_SWMMandEFDCInteractiveUnit_Files, data)
export const create_SWMMandEFDCInteractiveUnit = (form: any) => request.post<any, dataFileResponse>(API.Creat_SWMMandEFDCInteractiveUnit_Table, form)
export const update_SWMMandEFDCInteractiveUnit = (form: any) => request.post<any, dataFileResponse>(API.Update_SWMMandEFDCInteractiveUnit_Table, form)
export const publish_SWMMandEFDCInteractiveUnit = (data: any) => request.get<any, dataFileResponse>(API.Publish_SWMMandEFDCInteractiveUnit, data)

//空间离散数据//SWMM-MODFLOW空间离散
export const upLoad_SWMMandMODFLOWInteractiveUnit = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_SWMMandMODFLOWInteractiveUnit_Files, data)
export const create_SWMMandMODFLOWInteractiveUnit = (form: any) => request.post<any, dataFileResponse>(API.Creat_SWMMandMODFLOWInteractiveUnit_Table, form)
export const update_SWMMandMODFLOWInteractiveUnit = (form: any) => request.post<any, dataFileResponse>(API.Update_SWMMandMODFLOWInteractiveUnit_Table, form)
export const publish_SWMMandMODFLOWInteractiveUnit = (data: any) => request.get<any, dataFileResponse>(API.Publish_SWMMandMODFLOWInteractiveUnit, data)

//空间离散数据//EFDC -MODFLOW空间离散
export const upLoad_EFDCandMODFLOWInteractiveUnit = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_EFDCandMODFLOWInteractiveUnit_Files, data)
export const create_EFDCandMODFLOWInteractiveUnit = (form: any) => request.post<any, dataFileResponse>(API.Creat_EFDCandMODFLOWInteractiveUnit_Table, form)
export const update_EFDCandMODFLOWInteractiveUnit = (form: any) => request.post<any, dataFileResponse>(API.Update_EFDCandMODFLOWInteractiveUnit_Table, form)
export const publish_EFDCandMODFLOWInteractiveUnit = (data: any) => request.get<any, dataFileResponse>(API.Publish_EFDCandMODFLOWInteractiveUnit, data)
