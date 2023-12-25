//创建用户上传厂库，用于存储用户上传了那些数据
import {defineStore} from 'pinia'
import {dataUpLoad} from "@/api/upLoadFile";

let useUpLoadFilesStore = defineStore('UpLoadFileStore', {
    //存储数据的地方
    state: () => {
        return {
            uploadFiles: [],
        }
    },

    //进行额外操作
    getters: {},

    //进行数据异步操作的地方
    actions: {
        async upLoadFile(data) {
            let result = await dataUpLoad(data)
            if (result.code == 1) {
                this.uploadFiles.push(result.data)
                return result.code
            } else {
                return result.msg;
            }
        }
    }
})

//对外暴露数据
export default useUpLoadFilesStore;