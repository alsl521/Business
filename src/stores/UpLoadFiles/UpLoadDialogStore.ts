//用于展示对话框
import {defineStore} from 'pinia'
import {
    get_StudyAreaScope,
    upLoad_StudyAreaScope,
    create_StudyAreaScope,
    update_StudyAreaScope,
    publish_StudyAreaScope,
    upLoad_GeologicBody,
    get_GeologicBody,
    get_DEM,
    upLoad_DEM,
    upLoad_LandUse,
    get_LandUse,
    get_HydrogeologicalMap,
    upLoad_HydrogeologicalMap,
    get_AdministrativeDivision,
    upLoad_AdministrativeDivision,
    get_River, upLoad_River,
} from "@/api/UpLoadFiles/BasicDataService/BasicGeographicData";
import {
    create_FlowRate,
    get_FlowRate, get_UnderwaterRelief, publish_FlowRate, update_FlowRate,
    upLoad_FlowRate, upLoad_UnderwaterRelief
} from "@/api/UpLoadFiles/BasicDataService/MonitoringData/RiverMonitoringStation";
import {
    create_AtmosphericPressure,
    create_CloudCover,
    create_Evaporation,
    create_Rainfall,
    create_SolarRadiation,
    create_Temperature, create_WaterTemperature, create_WindSpeedAndDirection,
    get_AtmosphericPressure,
    get_CloudCover,
    get_Evaporation,
    get_Rainfall,
    get_SolarRadiation,
    get_Temperature, get_WaterTemperature, get_WindSpeedAndDirection,
    publish_AtmosphericPressure,
    publish_CloudCover,
    publish_Evaporation,
    publish_Rainfall,
    publish_SolarRadiation,
    publish_Temperature, publish_WaterTemperature, publish_WindSpeedAndDirection,
    update_AtmosphericPressure,
    update_CloudCover,
    update_Evaporation,
    update_Rainfall,
    update_SolarRadiation,
    update_Temperature, update_WaterTemperature, update_WindSpeedAndDirection,
    upLoad_AtmosphericPressure,
    upLoad_CloudCover,
    upLoad_Evaporation,
    upLoad_Rainfall,
    upLoad_SolarRadiation,
    upLoad_Temperature, upLoad_WaterTemperature, upLoad_WindSpeedAndDirection
} from "@/api/UpLoadFiles/BasicDataService/MonitoringData/MeteorologyMonitoringStation";
import {
    create_EFDCandMODFLOWInteractiveUnit,
    create_EFDCSpatialDiscreteData,
    create_MODFLOWSpatialDiscreteData,
    create_SWMMandEFDCInteractiveUnit,
    create_SWMMandMODFLOWInteractiveUnit,
    create_SWMMSpatialDiscreteData, publish_EFDCandMODFLOWInteractiveUnit,
    publish_EFDCSpatialDiscreteData,
    publish_MODFLOWSpatialDiscreteData,
    publish_SWMMandEFDCInteractiveUnit,
    publish_SWMMandMODFLOWInteractiveUnit,
    publish_SWMMSpatialDiscreteData, update_EFDCandMODFLOWInteractiveUnit,
    update_EFDCSpatialDiscreteData,
    update_MODFLOWSpatialDiscreteData,
    update_SWMMandEFDCInteractiveUnit,
    update_SWMMandMODFLOWInteractiveUnit,
    update_SWMMSpatialDiscreteData, upLoad_EFDCandMODFLOWInteractiveUnit,
    upLoad_EFDCSpatialDiscreteData,
    upLoad_MODFLOWSpatialDiscreteData,
    upLoad_SWMMandEFDCInteractiveUnit,
    upLoad_SWMMandMODFLOWInteractiveUnit,
    upLoad_SWMMSpatialDiscreteData
} from "@/api/UpLoadFiles/SpatialDiscreteData";
import {
    create_ModelData_SWMM_SpatialDiscrete_RainGauge,
    publish_ModelData_SWMM_SpatialDiscrete_RainGauge, set_SWMM_time,
    update_ModelData_SWMM_SpatialDiscrete_RainGauge,
    upLoad_ModelData_SWMM_ParameterDiscrete_HRU,
    upLoad_ModelData_SWMM_ParameterDiscrete_Junction,
    upLoad_ModelData_SWMM_ParameterDiscrete_RainGauge,
    upLoad_ModelData_SWMM_SpatialDiscrete_Junction,
    upLoad_ModelData_SWMM_SpatialDiscrete_RainGauge
} from "@/api/UpLoadFiles/ModelData/SWMM";
import {
    get_MODFLOW_Time, get_MODFLOWInitialWaterLevel,
    set_MODFLOW_Time,
    upLoad_Infiltration,
    upLoad_MODFLOWInitialWaterLevel, upLoad_MODFLOWSurfaceRive,
    upLoad_StoreWater
} from "@/api/UpLoadFiles/ModelData/MODFLOW";
import {set_efdc_time, upLoad_EFDCInitialWaterLevel, upLoad_EFDCParameter} from "@/api/UpLoadFiles/ModelData/EFDC";
import {get_total_time, UpLoad_total_time} from "@/api/UpLoadFiles/ModelData/TotalTimeDispersion";
import {get_All_Layers, get_All_Upload_Files, Modify_Data, run_Files} from "@/api/modelRun";

let useUpLoadDialogStore = defineStore('UpLoadDialogStore', {
    //存储数据的地方
    state: () => {
        return {
            //存储用户上传了那些数据，获取返回得到的文件路径
            uploadFiles: [] as any[],
            //基础数据服务//基础地理数据
            StudyAreaScopeDialogVisible: false,
            HydrogeologicalMapDialogVisible: false,
            AdministrativeDivisionDialogVisible: false,
            RiverDialogVisible: false,

            //基础数据服务//地形地貌数据//土地利用
            LandUseDialogVisible: false,

            //基础数据服务//监测数据//河流监测站点
            FLowRateDialogVisible: false,
            UnderwaterReliefDialogVisible: false,

            //基础数据服务//监测数据/气象监测站点//气温
            AtmosphericPressureDialogVisible: false,
            EvaporationDialogVisible: false,
            TemperatureDialogVisible: false,
            RainfallDialogVisible: false,
            SolarRadiationDialogVisible: false,
            CloudCoverDialogVisible: false,
            WindSpeedAndDirectionDialogVisible: false,
            WaterTemperatureDialogVisible: false,

            //基础数据服务//地形地貌数据//DEM数据
            DEMDialogVisible: false,

            //基础数据服务//地质体概念数据
            GeologicBodyDialogVisible: false,

            //空间离散数据
            SWMMSpatialDiscreteDataDialogVisible: false,
            EFDCSpatialDiscreteDataDialogVisible: false,
            MODFLOWSpatialDiscreteDataDialogVisible: false,
            EFDCandMODFLOWInteractiveUnitDialogVisible: false,
            SWMMandMODFLOWInteractiveUnitDialogVisible: false,
            SWMMandEFDCInteractiveUnitDialogVisible: false,

            //总时间离散
            TotalTimeDispersionDialogVisible: false,

            //模型数据/SWMM/空间离散数据
            SWMMRainGaugeSpatialDispersionDialogVisible: false,
            SWMMJunctionSpatialDispersionDialogVisible: false,

            //模型数据//SWMM//时间离散
            SWMMTimeDispersionDialogVisible: false,

            //模型数据//SWMM//参数离散
            SWMMHruParameterDispersionDialogVisible: false,
            SWMMJunctionParameterDispersionDialogVisible: false,
            SWMMRainGaugeParameterDispersionDialogVisible: false,

            //模型数据//MODFLOW//渗透（水力传导）
            MODFLOWInfiltrationDialogVisible: false,

            //模型数据//MODFLOW//贮水（给水度）
            MODFLOWStoreWaterDialogVisible: false,

            //模型数据//MODFLOW//时间离散
            MODFLOWTimeDispersionDialogVisible: false,

            //模型数据//MODFLOW//初始水位
            MODFLOWInitialWaterLevelDialogVisible: false,

            //模型数据//MODFLOW//路表河流
            MODFLOWSurfaceRiveDialogVisible: false,

            //模型数据//EFDC//时间离散
            EFDCTimeDispersionDialogVisible: false,

            //模型数据//EFDC//参数离散
            EFDCParameterDispersionDialogVisible: false,

            //模型数据//MEFDC//初始水位
            EFDCInitialWaterLevelDialogVisible: false,

            ModelCouplingParameterSettingDialogVisible: false,

            ModelDataValidationDialogVisible: false,
        }
    },

    //进行额外操作
    getters: {},

    //进行数据操作的地方
    actions: {

        async modify_data(data: any) {
            let result = await Modify_Data(data)
            if (result.code == 1) {
                return result
            } else {
                return result
            }
        },

        //去除相同的数据
        add_file_file(data: any) {

            let foundMatch = false;

            for (let index = 0; index < this.uploadFiles.length; index++) {
                const layer = this.uploadFiles[index];
                const isEqual = this.isScopeEqual(layer.name, data.name);

                if (isEqual) {
                    this.uploadFiles[index] = data; // 替换 item
                    foundMatch = true;
                    break; // 退出循环
                }
            }

            if (!foundMatch) {
                this.uploadFiles.push(data);
            }
        },

        isScopeEqual(scope1: string, scope2: string): boolean {
            const scope1Suffix = scope1.split('_')[1];
            const scope2Suffix = scope2.split('_')[1];

            return scope1Suffix === scope2Suffix;
        },

        //#region 基础数据服务//基础地理数据//研究区范围
        //研究区范围
        async get_StudyAreaScope_Data() {
            let result: any = await get_StudyAreaScope(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.StudyAreaScopeDialogVisible = false
            } else {
                return result.code
            }
        },

        async upLoad_StudyAreaScope_Data(data: any) {
            let result = await upLoad_StudyAreaScope(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            } else {
                return result.code
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

        async publish_StudyAreaScope_Data() {
            let result = await publish_StudyAreaScope(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //基础数据服务//基础地理数据//行政区划
        async get_AdministrativeDivision_Data() {
            let result = await get_AdministrativeDivision()
            if (result.code == 1) {
                return result.data
            }
        },

        async upLoad_AdministrativeDivision_Data(data: any) {
            let result = await upLoad_AdministrativeDivision(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            } else {
                return result.code
            }
        },

        //基础数据服务//基础地理数据//行政区划
        async get_River_Data() {
            let result = await get_River()
            if (result.code == 1) {
                return result.data
            }
        },

        async upLoad_River_Data(data: any) {
            let result = await upLoad_River(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            } else {
                return result.code
            }
        },

        //# region 基础数据服务//地质数据//地质体概念数据
        //地质体概念数据
        async get_LandUse_Data() {
            let result: any = await get_LandUse(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.LandUseDialogVisible = false
            }
        },

        async upLoad_LandUse_Data(data: any) {
            let result = await upLoad_LandUse(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        //#endregion

        //# region 基础数据服务//地质数据//地质体概念数据
        //地质体概念数据
        async get_HydrogeologicalMap_Data() {
            let result: any = await get_HydrogeologicalMap(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.LandUseDialogVisible = false
            }
        },

        async upLoad_HydrogeologicalMap_Data(data: any) {
            let result = await upLoad_HydrogeologicalMap(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        //#endregion

        //# region 基础数据服务//监测数据//河流监测站点//流量
        //流量
        async get_FlowRate_Data() {
            let result: any = await get_FlowRate(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.FLowRateDialogVisible = false
            }
        },

        async upLoad_FlowRate_Data(data: any) {
            let result = await upLoad_FlowRate(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
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
            if (result.code == 1) {
                return result
            }
        },

        async publish_FlowRate_Data() {
            let result = await publish_FlowRate(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 基础数据服务//地质数据//地质体概念数据
        //地质体概念数据
        async get_UnderwaterRelief_Data() {
            let result: any = await get_UnderwaterRelief(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.UnderwaterReliefDialogVisible = false
            }
        },

        async upLoad_UnderwaterRelief_Data(data: any) {
            let result = await upLoad_UnderwaterRelief(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        //#endregion

        //# region 基础数据服务//监测数据/气象监测站点//大气压强
        //大气压强
        async get_AtmosphericPressure_Data() {
            let result: any = await get_AtmosphericPressure(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.AtmosphericPressureDialogVisible = false
            }
        },

        async upLoad_AtmosphericPressure_Data(data: any) {
            let result = await upLoad_AtmosphericPressure(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
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

        async publish_AtmosphericPressure_Data() {
            let result = await publish_AtmosphericPressure(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 基础数据服务//监测数据/气象监测站点//蒸发量
        //蒸发量
        async get_Evaporation_Data() {
            let result: any = await get_Evaporation(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.EvaporationDialogVisible = false
            }
        },

        async upLoad_Evaporation_Data(data: any) {
            let result = await upLoad_Evaporation(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
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

        async publish_Evaporation_Data() {
            let result = await publish_Evaporation(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 基础数据服务//监测数据/气象监测站点//气温
        async get_Temperature_Data() {
            let result: any = await get_Temperature(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.TemperatureDialogVisible = false
            }
        },

        async upLoad_Temperature_Data(data: any) {
            let result = await upLoad_Temperature(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
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

        async publish_Temperature_Data() {
            let result = await publish_Temperature(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 基础数据服务//监测数据/气象监测站点//降雨量
        //降雨量
        async get_Rainfall_Data() {
            let result: any = await get_Rainfall(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.RainfallDialogVisible = false
            }
        },

        async upLoad_Rainfall_Data(data: any) {
            let result = await upLoad_Rainfall(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
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

        async publish_Rainfall_Data() {
            let result = await publish_Rainfall(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 基础数据服务//监测数据/气象监测站点//太阳辐射
        //太阳辐射
        async get_SolarRadiation_Data() {
            let result: any = await get_SolarRadiation(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.SolarRadiationDialogVisible = false
            }
        },

        async upLoad_SolarRadiation_Data(data: any) {
            let result = await upLoad_SolarRadiation(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
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

        async publish_SolarRadiation_Data() {
            let result = await publish_SolarRadiation(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 基础数据服务//监测数据/气象监测站点//云量
        //云量
        async get_CloudCover_Data() {
            let result: any = await get_CloudCover(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.CloudCoverDialogVisible = false
            }
        },

        async upLoad_CloudCover_Data(data: any) {
            let result = await upLoad_CloudCover(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
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

        async publish_CloudCover_Data() {
            let result = await publish_CloudCover(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 基础数据服务//监测数据/气象监测站点//风速风向
        //风速风向
        async get_WindSpeedAndDirection_Data() {
            let result: any = await get_WindSpeedAndDirection(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.WindSpeedAndDirectionDialogVisible = false
            }
        },

        async upLoad_WindSpeedAndDirection_Data(data: any) {
            let result = await upLoad_WindSpeedAndDirection(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
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

        async publish_WindSpeedAndDirection_Data() {
            let result = await publish_WindSpeedAndDirection(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 基础数据服务//监测数据/气象监测站点//水温
        //水温
        async get_WaterTemperature_Data() {
            let result: any = await get_WaterTemperature(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.WaterTemperatureDialogVisible = false
            }
        },

        async upLoad_WaterTemperature_Data(data: any) {
            let result = await upLoad_WaterTemperature(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
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

        async publish_WaterTemperature_Data() {
            let result = await publish_WaterTemperature(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 基础数据服务//地质数据//地质体概念数据
        //地质体概念数据
        async get_DEM_Data() {
            let result: any = await get_DEM(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.DEMDialogVisible = false
            }
        },

        async upLoad_DEM_Data(data: any) {
            let result = await upLoad_DEM(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        //#endregion

        //# region 基础数据服务//地质数据//地质体概念数据
        //地质体概念数据
        async get_GeologicBody_Data() {
            let result: any = await get_GeologicBody(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                this.GeologicBodyDialogVisible = false
            }
        },

        async upLoad_GeologicBody_Data(data: any) {
            let result = await upLoad_GeologicBody(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        //#endregion

        //# region 空间离散数据//SWMM空间离散
        //SWMM空间离散

        async upLoad_SWMMSpatialDiscreteData_Data(data: any) {
            let result = await upLoad_SWMMSpatialDiscreteData(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        async create_SWMMSpatialDiscreteData_Table(form: any) {
            let result = await create_SWMMSpatialDiscreteData(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_SWMMSpatialDiscreteData_Table(form: any) {
            let result = await update_SWMMSpatialDiscreteData(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_SWMMSpatialDiscreteData_Data() {
            let result = await publish_SWMMSpatialDiscreteData(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 空间离散数据//EFDC空间离散
        //EFDC空间离散

        async upLoad_EFDCSpatialDiscreteData_Data(data: any) {
            let result = await upLoad_EFDCSpatialDiscreteData(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        async create_EFDCSpatialDiscreteData_Table(form: any) {
            let result = await create_EFDCSpatialDiscreteData(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_EFDCSpatialDiscreteData_Table(form: any) {
            let result = await update_EFDCSpatialDiscreteData(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_EFDCSpatialDiscreteData_Data() {
            let result = await publish_EFDCSpatialDiscreteData(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 空间离散数据//MODFLOW空间离散
        //EFDC空间离散

        async upLoad_MODFLOWSpatialDiscreteData_Data(data: any) {
            let result = await upLoad_MODFLOWSpatialDiscreteData(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        async create_MODFLOWSpatialDiscreteData_Table(form: any) {
            let result = await create_MODFLOWSpatialDiscreteData(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_MODFLOWSpatialDiscreteData_Table(form: any) {
            let result = await update_MODFLOWSpatialDiscreteData(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_MODFLOWSpatialDiscreteData_Data() {
            let result = await publish_MODFLOWSpatialDiscreteData(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 空间离散数据//SWMM-EFDC空间离散
        //SWMMandEFDC空间离散

        async upLoad_SWMMandEFDCInteractiveUnit_Data(data: any) {
            let result = await upLoad_SWMMandEFDCInteractiveUnit(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        async create_SWMMandEFDCInteractiveUnit_Table(form: any) {
            let result = await create_SWMMandEFDCInteractiveUnit(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_SWMMandEFDCInteractiveUnit_Table(form: any) {
            let result = await update_SWMMandEFDCInteractiveUnit(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_SWMMandEFDCInteractiveUnit_Data() {
            let result = await publish_SWMMandEFDCInteractiveUnit(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 空间离散数据//SWMM-MODFLOW空间离散
        //SWMMandMODFLOW空间离散

        async upLoad_SWMMandMODFLOWInteractiveUnit_Data(data: any) {
            let result = await upLoad_SWMMandMODFLOWInteractiveUnit(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        async create_SWMMandMODFLOWInteractiveUnit_Table(form: any) {
            let result = await create_SWMMandMODFLOWInteractiveUnit(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_SWMMandMODFLOWInteractiveUnit_Table(form: any) {
            let result = await update_SWMMandMODFLOWInteractiveUnit(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_SWMMandMODFLOWInteractiveUnit_Data() {
            let result = await publish_SWMMandMODFLOWInteractiveUnit(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 空间离散数据//EFDCandMODFLOW空间离散
        //EFDCandMODFLOW空间离散

        async upLoad_EFDCandMODFLOWInteractiveUnit_Data(data: any) {
            let result = await upLoad_EFDCandMODFLOWInteractiveUnit(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        async create_EFDCandMODFLOWInteractiveUnit_Table(form: any) {
            let result = await create_EFDCandMODFLOWInteractiveUnit(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_EFDCandMODFLOWInteractiveUnit_Table(form: any) {
            let result = await update_EFDCandMODFLOWInteractiveUnit(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_EFDCandMODFLOWInteractiveUnit_Data() {
            let result = await publish_EFDCandMODFLOWInteractiveUnit(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 模型数据//SWMM//空间离散//降雨量
        //降雨量

        async upLoad_ModelData_SWMM_SpatialDiscrete_RainGauge_Data(data: any) {
            let result = await upLoad_ModelData_SWMM_SpatialDiscrete_RainGauge(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        async create_ModelData_SWMM_SpatialDiscrete_RainGauge_Table(form: any) {
            let result = await create_ModelData_SWMM_SpatialDiscrete_RainGauge(form)
            if (result.code == 1) {
                return result
            }
        },

        async update_ModelData_SWMM_SpatialDiscrete_RainGauge_Table(form: any) {
            let result = await update_ModelData_SWMM_SpatialDiscrete_RainGauge(form)
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async publish_ModelData_SWMM_SpatialDiscrete_RainGauge_Data() {
            let result = await publish_ModelData_SWMM_SpatialDiscrete_RainGauge(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
        //#endregion

        //# region 模型数据//SWMM//空间离散//节点
        //节点
        async upLoad_ModelData_SWMM_SpatialDiscrete_Junction_Data(data: any) {
            let result = await upLoad_ModelData_SWMM_SpatialDiscrete_Junction(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        //#endregion

        //# region 模型数据//SWMM//参数离散//HRU
        //节点
        async upLoad_ModelData_SWMM_ParameterDiscrete_HRU_Data(data: any) {
            let result = await upLoad_ModelData_SWMM_ParameterDiscrete_HRU(data)
            if (result.code == 1) {
                return result
            }
        },

        //#endregion

        //# region 模型数据//SWMM//参数离散//RainGauge
        //节点
        async upLoad_ModelData_SWMM_ParameterDiscrete_RainGauge_Data(data: any) {
            let result = await upLoad_ModelData_SWMM_ParameterDiscrete_RainGauge(data)
            if (result.code == 1) {
                return result
            }
        },

        //#endregion

        //# region 模型数据//SWMM//参数离散//RainGauge
        //节点
        async upLoad_ModelData_SWMM_ParameterDiscrete_Junction_Data(data: any) {
            let result = await upLoad_ModelData_SWMM_ParameterDiscrete_Junction(data)
            if (result.code == 1) {
                return result
            }
        },

        //#endregion

        //# region 模型数据//MODFLOW//渗透（水力传导）
        //地质体概念数据
        async upLoad_Infiltration_Data(data: any) {
            let result = await upLoad_Infiltration(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        //#endregion

        //# region 模型数据//MODFLOW//贮水（给水度）
        //贮水（给水度）
        async upLoad_StoreWater_Data(data: any) {
            let result = await upLoad_StoreWater(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        //#endregion

        //# region 模型数据//MODFLOW//初始水位
        //贮水（给水度）
        async upLoad_MODFLOWInitialWaterLevel_Data(data: any) {
            let result = await upLoad_MODFLOWInitialWaterLevel(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        async get_MODFLOWInitialWaterLevel_Data() {
            let result: any = await get_MODFLOWInitialWaterLevel()
            if (result.code == 1) {
                return result
            }
        },

        //#endregion

        //# region 模型数据//MODFLOW//初始水位
        //地质体概念数据
        async upLoad_MODFLOWSurfaceRive_Data(data: any) {
            let result = await upLoad_MODFLOWSurfaceRive(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        //#endregion

        //# region 模型数据//EFDC//初始水位
        //地质体概念数据
        async upLoad_EFDCInitialWaterLevel_Data(data: any) {
            let result = await upLoad_EFDCInitialWaterLevel(data)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },

        //#endregion


        //# region 模型数据//SWMM//参数离散//RainGauge
        //节点
        async upLoad_ModelData_EFDCParameter_Data(data: any) {
            let result = await upLoad_EFDCParameter(data)
            if (result.code == 1) {
                return result
            }
        },

        //#endregion

        //# region 模型数据//SWMM//参数离散//RainGauge
        //节点
        async get_total_time_Data() {
            let result = await get_total_time()
            if (result.code == 1) {
                return result.data
            }
        },

        async upload_total_time_Data(data: any) {
            console.log(data)
            let result = await UpLoad_total_time(data)
            if (result.code == 1) {
                this.TotalTimeDispersionDialogVisible = false
                return result.data

            }
        },

        //#endregion


        //# region 模型数据//SWMM//参数离散//RainGauge
        async set_SWMM_time_Data(data: any) {
            let result = await set_SWMM_time(data)
            if (result.code == 1) {
                this.SWMMTimeDispersionDialogVisible = false
                return result.data
            }
        },

        //#endregion

        //# region 模型数据//SWMM//参数离散//RainGauge
        async set_MODFLOW_time_Data(data: any) {
            let result = await set_MODFLOW_Time(data)
            if (result.code == 1) {
                this.MODFLOWTimeDispersionDialogVisible
                    = false
                return result.data
            }
        },

        async get_MODFLOW_time_Data() {
            let result = await get_MODFLOW_Time()
            if (result.code == 1) {
                return result.data
            }
        },

        //#endregion


        //# region 模型数据//SWMM//参数离散//RainGauge
        async set_efdc_time_Data(data: any) {
            let result = await set_efdc_time(data)
            if (result.code == 1) {
                this.EFDCTimeDispersionDialogVisible
                    = false
                return result.data
            }
        },

        //#endregion
        async get_All_Upload_Files_Data() {
            let result = await get_All_Upload_Files()
            console.log(result)
            if (result.code == 1) {
                return result
            }
        },

        async run_Models() {
            let result = await run_Files()
            if (result.code == 1) {
                return result.data
            }
        },

        async get_All_Layers_Data() {
            let result = await get_All_Layers()
            if (result.code == 1) {
                return result.data
            }
        },


    }
})

export default useUpLoadDialogStore;