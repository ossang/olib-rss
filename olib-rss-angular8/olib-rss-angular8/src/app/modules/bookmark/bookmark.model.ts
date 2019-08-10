export class Bookmark{
    id : number;
    name : string;
    url : string;

    constructor(b){
        if(b){
            this.id = b.id;
            this.name = b.name;
            this.url = b.url;
        }else{
            this.id = 0;
            this.name  = '';
            this.url = '';
        }
    }

}