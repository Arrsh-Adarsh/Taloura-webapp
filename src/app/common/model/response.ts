export interface ResponseEntity<T = any> {
    statusCode: number,
    statusName: string,
    message: string,
    timeStamp: Date,
    payload?: T
}