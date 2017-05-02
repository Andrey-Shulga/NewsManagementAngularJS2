export class News {

    constructor(
        public title: string,
        public date: Date,
        public brief: string,
        public content: string,
        public id?: number) {
    }
}