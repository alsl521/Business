//用于展示对话框
import {defineStore} from 'pinia'
import {
    create_StudyAreaScope,
    get_StudyAreaScope,
    publish_StudyAreaScope,
    update_StudyAreaScope,
    upLoad_StudyAreaScope,
    get_FlowRate,
    upLoad_FlowRate, create_FlowRate, update_FlowRate, publish_FlowRate,
} from "@/api/UpLoadFiles/BasicDataService/BasicGeographicData";

let useUpLoadDialogStore = defineStore('UpLoadDialogStore', {
    //存储数据的地方
    state: () => {
        return {
            //存储用户上传了那些数据，获取返回得到的文件路径
            uploadFiles: [] as any[],
            StudyAreaScopeDialogVisible: false,
            FLowRateDialogVisible: false,
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
    }
})

export default useUpLoadDialogStore;