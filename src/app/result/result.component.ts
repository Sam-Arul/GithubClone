import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
name;
data;
  constructor(private activatedRoute: ActivatedRoute, private githubApiService:GithubApiService) {
this.name = this.activatedRoute.snapshot.params.userName;
console.log(this.name);
 this.githubApiService.getUserDetails(this.name).subscribe((value)=>{

   this.data = value;
 }
 )
   }

  ngOnInit(): void {
  }

}
