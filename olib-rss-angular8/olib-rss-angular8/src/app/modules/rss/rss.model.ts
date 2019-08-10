export class Rss{
    id : number;
    title : string;
	link : string;
	description : string;
	pubDate : string;

    constructor(r){
        if(r){
            this.id = r.id;
            this.title=r.title;
            this.link=r.link;
            this.description=r.description;
            this.pubDate=r.pubDate;
        }else{
            this.title='';
            this.link='';
            this.description='';
            this.pubDate='';
        }
    }
}