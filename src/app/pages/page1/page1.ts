import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router'; 

@Component({
    selector: 'page1',
    templateUrl: './page1.html',
})
export class Page1 implements OnInit {
    id:any=0;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe(par => this.id = par.id);
    }

    //Programmatic navigate
    onClickGoSubpage2() {
        //console.log('onClickGoSubpage2');
        this.router.navigate(['page2',{outlets:{subpageview:'subpage2'}}]);
    }
    //this.router.navigate([{ outlets: { bookPopup: null }}]);
}
