//用于展示对话框
import {defineStore} from 'pinia'
import {
    get_StudyAreaScope,upLoad_StudyAreaScope,create_StudyAreaScope,update_StudyAreaScope,publish_StudyAreaScope,
    get_FlowRate,upLoad_FlowRate, create_FlowRate, update_FlowRate, publish_FlowRate, 
    get_AtmosphericPressure,upLoad_AtmosphericPressure,create_AtmosphericPressure, update_AtmosphericPressure, publish_AtmosphericPressure, 
    get_Evaporation,upLoad_Evaporation,create_Evaporation, update_Evaporation, publish_Evaporation, 
    get_Temperature,upLoad_Temperature,create_Temperature, update_Temperature, publish_Temperature, 
    get_Rainfall,upLoad_Rainfall,create_Rainfall, update_Rainfall, publish_Rainfall, 
    get_SolarRadiation,upLoad_SolarRadiation,create_SolarRadiation, update_SolarRadiation, publish_SolarRadiation, 
    get_CloudCover,upLoad_CloudCover,create_CloudCover, update_CloudCover, publish_CloudCover, 
    get_WindSpeedAndDirection,upLoad_WindSpeedAndDirection,create_WindSpeedAndDirection, update_WindSpeedAndDirection, publish_WindSpeedAndDirection, 
    get_WaterTemperature,upLoad_WaterTemperature,create_WaterTemperature, update_WaterTemperature, publish_WaterTemperature, 
} from "@/api/UpLoadFiles/BasicDataService/BasicGeographicData";

let useUpLoadDialogStore = defineStore('UpLoadDialogStore', {
    //存储数据的地方
    state: () => {
        return {
            //存储用户上传了那些数据，获取返回得到的文件路径
            uploadFiles: [] as any[],
            StudyAreaScopeDialogVisible: false,
            FLowRateDialogVisible: false,
            AtmosphericPressureDialogVisible: false,
            EvaporationDialogVisible: false,
            TemperatureDialogVisible: false,
            RainfallDialogVisible: false,
            SolarRadiationDialogVisible: false,
            CloudCoverDialogVisible: false,
            WindSpeedAndDirectionDialogVisible: false,
            WaterTemperatureDialogVisible: false,
        }
    },

    //进行额外操作
    getters: {},

    //进行数据异步操作的地方
    actions: {
        async get_StudyAreaScope_Data() {
            let result: any = await get_StudyAreaScope(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                this.StudyAreaScopeDialogVisible = false
            }
        },

        async upLoad_StudyAreaScope_Data(data: any) {
            let result = await upLoad_StudyAreaScope(data)
            if (result.code == 1) {
                return result
            }
        },

        async create_StudyAreaScope_Table(form: any) {
            let result = await create_StudyAreaScope(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_StudyAreaScope_Table(form: any) {
            let result = await update_StudyAreaScope(form)
            if (result.code == 1) {
                return result
            }
        },

        async publish_StudyAreaScope() {
            let result = await publish_StudyAreaScope(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                return result
            }
        },

        //流量
        async get_FlowRate_Data() {
            let result: any = await get_FlowRate(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                this.FLowRateDialogVisible = false
            }
        },

        async upLoad_FlowRate_Data(data: any) {
            let result = await upLoad_FlowRate(data)
            if (result.code == 1) {
                return result
            }
        },

        async create_FlowRate_Table(form: any) {
            let result = await create_FlowRate(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_FlowRate_Table(form: any) {
            let result = await update_FlowRate(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_FlowRate() {
            let result = await publish_FlowRate(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                return result
            }
        },

        //大气压强
        async get_AtmosphericPressure_Data() {
            let result: any = await get_AtmosphericPressure(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                this.AtmosphericPressureDialogVisible = false
            }
        },

        async upLoad_AtmosphericPressure_Data(data: any) {
            let result = await upLoad_AtmosphericPressure(data)
            if (result.code == 1) {
                return result
            }
        },

        async create_AtmosphericPressure_Table(form: any) {
            let result = await create_AtmosphericPressure(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_AtmosphericPressure_Table(form: any) {
            let result = await update_AtmosphericPressure(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_AtmosphericPressure() {
            let result = await publish_AtmosphericPressure(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                return result
            }
        },
    
        //蒸发量
        async get_Evaporation_Data() {
            let result: any = await get_Evaporation(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                this.EvaporationDialogVisible = false
            }
        },

        async upLoad_Evaporation_Data(data: any) {
            let result = await upLoad_Evaporation(data)
            if (result.code == 1) {
                return result
            }
        },

        async create_Evaporation_Table(form: any) {
            let result = await create_Evaporation(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_Evaporation_Table(form: any) {
            let result = await update_Evaporation(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_Evaporation() {
            let result = await publish_Evaporation(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                return result
            }
        },

        //气温
        async get_Temperature_Data() {
            let result: any = await get_Temperature(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                this.TemperatureDialogVisible = false
            }
        },

        async upLoad_Temperature_Data(data: any) {
            let result = await upLoad_Temperature(data)
            if (result.code == 1) {
                return result
            }
        },

        async create_Temperature_Table(form: any) {
            let result = await create_Temperature(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_Temperature_Table(form: any) {
            let result = await update_Temperature(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_Temperature() {
            let result = await publish_Temperature(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                return result
            }
        },

        //降雨量
        async get_Rainfall_Data() {
            let result: any = await get_Rainfall(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                this.RainfallDialogVisible = false
            }
        },

        async upLoad_Rainfall_Data(data: any) {
            let result = await upLoad_Rainfall(data)
            if (result.code == 1) {
                return result
            }
        },

        async create_Rainfall_Table(form: any) {
            let result = await create_Rainfall(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_Rainfall_Table(form: any) {
            let result = await update_Rainfall(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_Rainfall() {
            let result = await publish_Rainfall(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                return result
            }
        },

        //太阳辐射
        async get_SolarRadiation_Data() {
            let result: any = await get_SolarRadiation(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                this.SolarRadiationDialogVisible = false
            }
        },

        async upLoad_SolarRadiation_Data(data: any) {
            let result = await upLoad_SolarRadiation(data)
            if (result.code == 1) {
                return result
            }
        },

        async create_SolarRadiation_Table(form: any) {
            let result = await create_SolarRadiation(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_SolarRadiation_Table(form: any) {
            let result = await update_SolarRadiation(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_SolarRadiation() {
            let result = await publish_SolarRadiation(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                return result
            }
        },

        //云量
        async get_CloudCover_Data() {
            let result: any = await get_CloudCover(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                this.CloudCoverDialogVisible = false
            }
        },

        async upLoad_CloudCover_Data(data: any) {
            let result = await upLoad_CloudCover(data)
            if (result.code == 1) {
                return result
            }
        },

        async create_CloudCover_Table(form: any) {
            let result = await create_CloudCover(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_CloudCover_Table(form: any) {
            let result = await update_CloudCover(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_CloudCover() {
            let result = await publish_CloudCover(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                return result
            }
        },

        //风速风向
        async get_WindSpeedAndDirection_Data() {
            let result: any = await get_WindSpeedAndDirection(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                this.WindSpeedAndDirectionDialogVisible = false
            }
        },

        async upLoad_WindSpeedAndDirection_Data(data: any) {
            let result = await upLoad_WindSpeedAndDirection(data)
            if (result.code == 1) {
                return result
            }
        },

        async create_WindSpeedAndDirection_Table(form: any) {
            let result = await create_WindSpeedAndDirection(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_WindSpeedAndDirection_Table(form: any) {
            let result = await update_WindSpeedAndDirection(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_WindSpeedAndDirection() {
            let result = await publish_WindSpeedAndDirection(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                return result
            }
        },

        //水温
        async get_WaterTemperature_Data() {
            let result: any = await get_WaterTemperature(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                this.WaterTemperatureDialogVisible = false
            }
        },

        async upLoad_WaterTemperature_Data(data: any) {
            let result = await upLoad_WaterTemperature(data)
            if (result.code == 1) {
                return result
            }
        },

        async create_WaterTemperature_Table(form: any) {
            let result = await create_WaterTemperature(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_WaterTemperature_Table(form: any) {
            let result = await update_WaterTemperature(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_WaterTemperature() {
            let result = await publish_WaterTemperature(null)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                return result
            }
        },
    }
})

export default useUpLoadDialogStore;