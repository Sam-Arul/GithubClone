import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component'
import { GithubApiService } from '../github-api.service';



@Component({
  selector: 'app-repo-table',
  templateUrl: './repo-table.component.html',
  styleUrls: ['./repo-table.component.css']
})
export class RepoTableComponent implements OnInit {
 data;
  constructor(private githubApiService: GithubApiService) { 
    this.data = this.githubApiService.userData;
    console.log(this.data);
  }

  ngOnInit(): void {

    

   
  }


}


