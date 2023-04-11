export class Pokemon {
    id!: number;
    hp!: number;
    cp!: number;
    name!: string;
    picture!: string;
    types!: Array<string>;
    created!: Date;

    constructor() {
        this.id = 0;
        this.hp = 0;
        this.cp = 0;
        this.name = 'Noname';
        this.picture = 'https://pokemon1blog.files.wordpress.com/2016/05/checc81tiflor-rfvf.png?w=258&h=300';
        this.types = ['Plante'];
        this.created = new Date();
    }
}