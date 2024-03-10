import {defineStore} from 'pinia'
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useMapLayerStore = defineStore('geographicLayerStore', {
    state: () => {
        return {
            showLayers: [] as any[],
            removeLayers: [] as any[],
        }
    },

    actions: {
        //去除相同的数据
        add_file_file(data: any) {
            let isEqual;
            this.showLayers.forEach((item, index) => {
                isEqual = this.isScopeEqual(item.name, data.name);
                if (isEqual) {
                    this.showLayers[index] = data; // 替换 item
                }
            });

            if (!isEqual) {
                this.showLayers.push(data)
            }
        },

        isScopeEqual(scope1: string, scope2: string): boolean {
            const scope1Suffix = scope1.split('_')[1];
            const scope2Suffix = scope2.split('_')[1];

            return scope1Suffix === scope2Suffix;
        },

        //增加到展示组
        async increment(res: any) {
            this.add_file_file(res)
        }
    },

    getters: {},
})
