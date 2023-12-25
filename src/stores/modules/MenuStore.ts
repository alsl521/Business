import {defineStore} from 'pinia'
import {getSelectModels} from "@/api/selectModels";

export const useMenuStore = defineStore('menuStore', {
    state: () => {
        return {
            selectModelsContent: [],
            titleHeader: "",
            ModelName: "",
            MenuName: "",
            FileType: "",
            dialogTableVisible: false,
        }
    },

    actions: {
        async selectModels(data) {
            let result = await getSelectModels(data)
            this.selectModelsContent = result.data

            if (result.code == 1) {
                return result.code
            } else {
                return result.msg;
            }
        },

        getDialogInfo(info) {
            const parts = info.split('-')
            this.titleHeader = parts[1]
            this.MenuName = parts[1]
            this.ModelName = parts[0]
            this.findUploadFileType(this.selectModelsContent, info)
        },

        findUploadFileType(json, targetIndex: string): number | null {
            for (const item of json) {
                if (item.index === targetIndex) {
                    this.FileType = item.upload_file_type
                    return null
                }
                if (item.sub_menu_name) {
                    this.findUploadFileType(item.sub_menu_name, targetIndex);
                }
            }
        }

    },

    getters: {},

})