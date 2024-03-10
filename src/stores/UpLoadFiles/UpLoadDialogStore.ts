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

    //进行数据操作的地方
    actions: {
        //去除相同的数据
        add_file_file(data: any) {
            let isEqual = false;
            this.uploadFiles.forEach((item, index) => {
                isEqual = this.isScopeEqual(item.name, data.name);
                if (isEqual) {
                    this.uploadFiles[index] = data; // 替换 item
                }
            });

            if (!isEqual) {
                this.uploadFiles.push(data)
            }
        },

        isScopeEqual(scope1: string, scope2: string): boolean {
            const scope1Suffix = scope1.split('_')[1];
            const scope2Suffix = scope2.split('_')[1];

            return scope1Suffix === scope2Suffix;
        },

        //研究区范围
        async get_StudyAreaScope_Data() {
            let result: any = await get_StudyAreaScope(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
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
                this.add_file_file(result.data)
                return result
            }
        },

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

        async publish_FlowRate() {
            let result = await publish_FlowRate(null)
            if (result.code == 1) {
                this.add_file_file(result.data)
                return result
            }
        },
    }
})

export default useUpLoadDialogStore;