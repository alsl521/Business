//上传文件的ts类型
export interface dataFile {
    datafile: any
}

//上传文件后返回的ts类型
export interface dataFileResponse {
    code: number,
    msg: string,
    data: any
}