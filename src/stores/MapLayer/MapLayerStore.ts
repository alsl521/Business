import {defineStore} from 'pinia'
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useMapLayerStore = defineStore('geographicLayerStore', {
    state: () => {
        return {
            showLayers: [] as any[],
            removeLayers: [] as any[],
            firstLoadLayer: true,
        }
    },

    actions: {
        //去除相同的数据
        add_map_layer_from_uploadFile(data: any) {

            let foundMatch = false;

            for (let index = 0; index < this.showLayers.length; index++) {
                const layer = this.showLayers[index];
                const isEqual = this.isScopeEqual(layer.name, data.name);

                if (isEqual) {
                    this.showLayers[index] = data; // 替换 item
                    foundMatch = true;
                    break; // 退出循环
                }
            }

            if (!foundMatch) {
                this.showLayers.push(data);
            }
        },

        //去除相同的数据
        remove_map_layer_from_showLayers(data: any) {

            let foundMatch = false;

            for (let index = 0; index < this.removeLayers.length; index++) {
                const layer = this.removeLayers[index];
                const isEqual = this.isScopeEqual(layer.name, data.name);

                if (isEqual) {
                    this.removeLayers[index] = data; // 替换 item
                    foundMatch = true;
                    break; // 退出循环
                }
            }

            if (!foundMatch) {
                this.removeLayers.push(data);
            }

            this.showLayers = this.showLayers.filter((element) => element !== data);
        },

        //去除相同的数据
        remove_map_layer_from_removeLayers(data: any) {
            const index = this.removeLayers.indexOf(data); // 查找要删除的元素的索引
            if (index !== -1) {
                this.removeLayers.splice(index, 1); // 删除找到的元素
            }
        },

        isScopeEqual(scope1: string, scope2: string): boolean {
            const scope1Suffix = scope1.split('_')[1];
            const scope2Suffix = scope2.split('_')[1];
            return scope1Suffix === scope2Suffix;
        },

        //增加到展示组
        incrementShowLayer(res: any) {
            this.add_map_layer_from_uploadFile(res)
        },

        removeShowLayer(res: any) {
            this.remove_map_layer_from_showLayers(res)
        },

        removeRemoveLayer(res: any) {
            this.remove_map_layer_from_removeLayers(res)
        },

        getAllShowMapLayer(res: any) {
            res.forEach((element: any) => {
                this.add_map_layer_from_uploadFile(element)
            });

            this.showLayers.forEach((element) => {
                if (this.removeLayers.includes(element)) {
                    this.remove_map_layer_from_showLayers(element)
                }
            });

        }
    },

    getters: {},
})
