import request from "@/utils/request";

enum API {
    // 用于操作模型数据//SWMM//空间离散//雨量计
    UpLoad_ModelData_SWMM_SpatialDiscrete_RainGauge_Files = "/upLoad/ModelData/SWMM/SpatialDiscrete/RainGauge",
    Creat_ModelData_SWMM_SpatialDiscrete_RainGauge_Table = "/creat/ModelData/SWMM/SpatialDiscrete/RainGauge/Table",
    Update_ModelData_SWMM_SpatialDiscrete_RainGauge_Table = "/update/ModelData/SWMM/SpatialDiscrete/RainGauge/Table",
    Publish_ModelData_SWMM_SpatialDiscrete_RainGauge = "/publish/ModelData/SWMM/SpatialDiscrete/RainGauge/",

    // 用于操作模型数据//SWMM//空间离散//雨量计
    UpLoad_ModelData_SWMM_SpatialDiscrete_Junction_Files = "/upLoad/ModelData/SWMM/SpatialDiscrete/Junction",

    // 用于操作模型数据//SWMM//参数离散
    UpLoad_ModelData_SWMM_ParameterDiscrete_HRU_Files = "/upLoad/ModelData/SWMM/ParameterDiscrete/HRU",
    UpLoad_ModelData_SWMM_ParameterDiscrete_RainGauge_Files = "/upLoad/ModelData/SWMM/ParameterDiscrete/RainGauge",
    UpLoad_ModelData_SWMM_ParameterDiscrete_Junction_Files = "/upLoad/ModelData/SWMM/ParameterDiscrete/Junction",

    Set_SWMM_time = "set/swmm/time",
}

//空间离散数据//SWMM空间离散
export const upLoad_ModelData_SWMM_SpatialDiscrete_RainGauge = (data: any) => request.post<any, any>(API.UpLoad_ModelData_SWMM_SpatialDiscrete_RainGauge_Files, data)
export const create_ModelData_SWMM_SpatialDiscrete_RainGauge = (form: any) => request.post<any, any>(API.Creat_ModelData_SWMM_SpatialDiscrete_RainGauge_Table, form)
export const update_ModelData_SWMM_SpatialDiscrete_RainGauge = (form: any) => request.post<any, any>(API.Update_ModelData_SWMM_SpatialDiscrete_RainGauge_Table, form)
export const publish_ModelData_SWMM_SpatialDiscrete_RainGauge = (data: any) => request.get<any, any>(API.Publish_ModelData_SWMM_SpatialDiscrete_RainGauge, data)

//空间离散数据//SWMM空间离散
export const upLoad_ModelData_SWMM_SpatialDiscrete_Junction = (data: any) => request.post<any, any>(API.UpLoad_ModelData_SWMM_SpatialDiscrete_Junction_Files, data)

//空间离散数据//SWMM空间离散
export const upLoad_ModelData_SWMM_ParameterDiscrete_HRU = (data: any) => request.post<any, any>(API.UpLoad_ModelData_SWMM_ParameterDiscrete_HRU_Files, data)
export const upLoad_ModelData_SWMM_ParameterDiscrete_RainGauge = (data: any) => request.post<any, any>(API.UpLoad_ModelData_SWMM_ParameterDiscrete_RainGauge_Files, data)
export const upLoad_ModelData_SWMM_ParameterDiscrete_Junction = (data: any) => request.post<any, any>(API.UpLoad_ModelData_SWMM_ParameterDiscrete_Junction_Files, data)
export const set_SWMM_time = (data: any) => request.post<any, any>(API.Set_SWMM_time, data)