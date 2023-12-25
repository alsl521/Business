//上传文件的ts类型
export interface dataFile {
    ModelName: string,
    MenuName: string,
    datafile: any
}

//上传文件后返回的ts类型
export interface selectModelsMenu {
    index: string,
    menu_name: string,
    sub_menu_name: selectModelsMenu,
    upload_file_type: boolean
}


//上传文件后返回的ts类型
export interface selectModelsResponse {
    code: number,
    msg: string,
    data: selectModelsMenu
}


