//统一管理上传文件相关的接口
import request from "@/utils/request";
import type {
    dataFile,
    dataFileResponse,
} from "@/api/UpLoadFiles/BasicDataService/BasicGeographicData/type";

enum API {
    UpLoad_AtmosphericPressure_Files = "/upLoad/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/AtmosphericPressure",
    Creat_AtmosphericPressure_Table = "/creat/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/AtmosphericPressure/Table",
    Update_AtmosphericPressure_Table = "/update/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/AtmosphericPressure/Table",
    Publish_AtmosphericPressure = "/publish/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/AtmosphericPressure",

    UpLoad_Evaporation_Files = "/upLoad/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Evaporation",
    Creat_Evaporation_Table = "/creat/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Evaporation/Table",
    Update_Evaporation_Table = "/update/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Evaporation/Table",
    Publish_Evaporation = "/publish/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Evaporation",

    UpLoad_Temperature_Files = "/upLoad/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Temperature",
    Creat_Temperature_Table = "/creat/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Temperature/Table",
    Update_Temperature_Table = "/update/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Temperature/Table",
    Publish_Temperature = "/publish/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Temperature",

    UpLoad_Rainfall_Files = "/upLoad/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Rainfall",
    Creat_Rainfall_Table = "/creat/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Rainfall/Table",
    Update_Rainfall_Table = "/update/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Rainfall/Table",
    Publish_Rainfall = "/publish/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/Rainfall",

    UpLoad_SolarRadiation_Files = "/upLoad/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/SolarRadiation",
    Creat_SolarRadiation_Table = "/creat/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/SolarRadiation/Table",
    Update_SolarRadiation_Table = "/update/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/SolarRadiation/Table",
    Publish_SolarRadiation = "/publish/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/SolarRadiation",

    UpLoad_CloudCover_Files = "/upLoad/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/CloudCover",
    Creat_CloudCover_Table = "/creat/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/CloudCover/Table",
    Update_CloudCover_Table = "/update/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/CloudCover/Table",
    Publish_CloudCover = "/publish/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/CloudCover",

    UpLoad_WindSpeedAndDirection_Files = "/upLoad/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/WindSpeedAndDirection",
    Creat_WindSpeedAndDirection_Table = "/creat/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/WindSpeedAndDirection/Table",
    Update_WindSpeedAndDirection_Table = "/update/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/WindSpeedAndDirection/Table",
    Publish_WindSpeedAndDirection = "/publish/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/WindSpeedAndDirection",

    UpLoad_WaterTemperature_Files = "/upLoad/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/WaterTemperature",
    Creat_WaterTemperature_Table = "/creat/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/WaterTemperature/Table",
    Update_WaterTemperature_Table = "/update/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/WaterTemperature/Table",
    Publish_WaterTemperature = "/publish/BasicDataService/MonitoringData/MeteorologicalMonitoringStation/WaterTemperature",

}

//气象监测站点大气压强
export const get_AtmosphericPressure = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_AtmosphericPressure_Files, data)
export const upLoad_AtmosphericPressure = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_AtmosphericPressure_Files, data)
export const create_AtmosphericPressure = (form: any) => request.post<any, dataFileResponse>(API.Creat_AtmosphericPressure_Table, form)
export const update_AtmosphericPressure = (form: any) => request.post<any, dataFileResponse>(API.Update_AtmosphericPressure_Table, form)
export const publish_AtmosphericPressure = (data: any) => request.get<any, dataFileResponse>(API.Publish_AtmosphericPressure, data)

//气象监测站点蒸发量
export const get_Evaporation = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_Evaporation_Files, data)
export const upLoad_Evaporation = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_Evaporation_Files, data)
export const create_Evaporation = (form: any) => request.post<any, dataFileResponse>(API.Creat_Evaporation_Table, form)
export const update_Evaporation = (form: any) => request.post<any, dataFileResponse>(API.Update_Evaporation_Table, form)
export const publish_Evaporation = (data: any) => request.get<any, dataFileResponse>(API.Publish_Evaporation, data)

//气象监测站点气温
export const get_Temperature = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_Temperature_Files, data)
export const upLoad_Temperature = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_Temperature_Files, data)
export const create_Temperature = (form: any) => request.post<any, dataFileResponse>(API.Creat_Temperature_Table, form)
export const update_Temperature = (form: any) => request.post<any, dataFileResponse>(API.Update_Temperature_Table, form)
export const publish_Temperature = (data: any) => request.get<any, dataFileResponse>(API.Publish_Temperature, data)

//气象监测站点降水量
export const get_Rainfall = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_Rainfall_Files, data)
export const upLoad_Rainfall = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_Rainfall_Files, data)
export const create_Rainfall = (form: any) => request.post<any, dataFileResponse>(API.Creat_Rainfall_Table, form)
export const update_Rainfall = (form: any) => request.post<any, dataFileResponse>(API.Update_Rainfall_Table, form)
export const publish_Rainfall = (data: any) => request.get<any, dataFileResponse>(API.Publish_Rainfall, data)

//气象监测站点太阳辐射
export const get_SolarRadiation = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_SolarRadiation_Files, data)
export const upLoad_SolarRadiation = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_SolarRadiation_Files, data)
export const create_SolarRadiation = (form: any) => request.post<any, dataFileResponse>(API.Creat_SolarRadiation_Table, form)
export const update_SolarRadiation = (form: any) => request.post<any, dataFileResponse>(API.Update_SolarRadiation_Table, form)
export const publish_SolarRadiation = (data: any) => request.get<any, dataFileResponse>(API.Publish_SolarRadiation, data)

//气象监测站点云量
export const get_CloudCover = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_CloudCover_Files, data)
export const upLoad_CloudCover = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_CloudCover_Files, data)
export const create_CloudCover = (form: any) => request.post<any, dataFileResponse>(API.Creat_CloudCover_Table, form)
export const update_CloudCover = (form: any) => request.post<any, dataFileResponse>(API.Update_CloudCover_Table, form)
export const publish_CloudCover = (data: any) => request.get<any, dataFileResponse>(API.Publish_CloudCover, data)

//气象监测站点风速风向
export const get_WindSpeedAndDirection = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_WindSpeedAndDirection_Files, data)
export const upLoad_WindSpeedAndDirection = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_WindSpeedAndDirection_Files, data)
export const create_WindSpeedAndDirection = (form: any) => request.post<any, dataFileResponse>(API.Creat_WindSpeedAndDirection_Table, form)
export const update_WindSpeedAndDirection = (form: any) => request.post<any, dataFileResponse>(API.Update_WindSpeedAndDirection_Table, form)
export const publish_WindSpeedAndDirection = (data: any) => request.get<any, dataFileResponse>(API.Publish_WindSpeedAndDirection, data)

//气象监测站点水温
export const get_WaterTemperature = (data: any) => request.get<any, dataFileResponse>(API.UpLoad_WaterTemperature_Files, data)
export const upLoad_WaterTemperature = (data: dataFile) => request.post<any, dataFileResponse>(API.UpLoad_WaterTemperature_Files, data)
export const create_WaterTemperature = (form: any) => request.post<any, dataFileResponse>(API.Creat_WaterTemperature_Table, form)
export const update_WaterTemperature = (form: any) => request.post<any, dataFileResponse>(API.Update_WaterTemperature_Table, form)
export const publish_WaterTemperature = (data: any) => request.get<any, dataFileResponse>(API.Publish_WaterTemperature, data)