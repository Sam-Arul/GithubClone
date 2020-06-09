import { Component, OnInit, Input } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms'
import { GithubApiService } from '../github-api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchForm;
 userData;
 userRepos;
  constructor(private router:Router) {
    this.searchForm=new FormGroup({
      userName : new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }

  // async getUserDetails(userName){
  //   let profile = await fetch('https://api.github.com/users/'+userName)
  //   .then(response => response.json())
  //   .then(data => {
  //     this.githubApiService.userData = data;
  //    // console.log(this.userData);
  //   })
  // }

  //  getUserrepos(userName){
  //    let repos =  fetch('https://api.github.com/users/'+userName+'/repos')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.githubApiService.userRepo = data;
  //    // console.log(this.userRepos);
  //   })
  //   .catch(error => console.error(error))
  // }

//  sendUserName(){
// if(this.searchForm.valid){
//   console.log(this.searchForm.value.userName)
//      this.githubApiService.getUserDetails(this.searchForm.value.userName).subscribe((data)=>{
//         console.log(data);
//         this.githubApiService.userData = data;
//      })
   // submitData(){
      //this.router.navigateByUrl('/user/'+this.searchForm.value.userName);
   // }


    
  }
  

//   }


// }
