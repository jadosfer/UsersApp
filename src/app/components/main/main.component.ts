import { UserSenderService } from './../../services/user-sender.service';
import { AppRoutingModule } from './../../app-routing/app-routing.module';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, Output, EventEmitter } from '@angular/core';
//import { Project } from '../../../models/project';


import { NgForm } from '@angular/forms';
//import * as $ from "jquery";
//import { ProjectComponent } from '../project/project.component';
//import { FilterPipe } from '../../../pipes/filter.pipe';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from '../../services/users.service';

//import { ClientLocationsService } from '../../../services/client-locations.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit
{
  users: User[] = [];
 
  //clientLocations: Observable<ClientLocation[]>;
  showLoading: boolean = true;

  // newUser: User = new User();
  // editUser: User = new User();
  // editIndex: number = null;
  // deleteUser: User = new User();
  // deleteIndex: number = null;
  // searchBy: string = "projectName";
  // searchText: string = "";

  currentPageIndex: number = 0;
  pages: any[] = [];
  pageSize: number = 3;

  @ViewChild("newForm") newForm: NgForm;
  @ViewChild("editForm") editForm: NgForm;

  //constructor(private projectsService: ProjectsService, private clientLocationsService: ClientLocationsService)
  constructor(private userService: UsersService, public userSenderService: UserSenderService)
  {
  }
  
  ngOnInit()
  {
    if (this.users.length !== 0) {
      console.log("No hace el get")
    }
    else {      
      console.log("Obtiene los usuarios")
      this.userService.getAllUsers().subscribe(
        (response: User[]) =>
        {
          this.users = response;
          this.showLoading = false;
          //this.calculateNoOfPages();
        } 
      );
    }

    //this.clientLocations = this.clientLocationsService.getClientLocations();
  }

  onAnchorClick(index: number) {
    this.userSenderService.user = this.users[index];
  }

  // calculateNoOfPages()
  // {    
  //   var resultProjects = filterPipe.transform(this.projects, this.searchBy, this.searchText);
  //   var noOfPages = Math.ceil(resultProjects.length  / this.pageSize);

  //   this.pages = [];
  //   for (let i = 0; i < noOfPages; i++)
  //   {
  //     this.pages.push( { pageIndex: i });
  //   }

  //   this.currentPageIndex = 0;
  // }

  // isAllChecked: boolean = false;

  // @ViewChildren("usr") usrs : QueryList<UserComponent>;

  // isAllCheckedChange(event)
  // {
  //   let usr = this.usrs.toArray();
  //   for (let i = 0; i < usr.length; i++)
  //   {
  //     usr[i].isAllCheckedChange(this.isAllChecked);
  //   }
  // }

  // @ViewChild("usrID") usrID: ElementRef;

  // onNewClick(event)
  // {
  //   this.newForm.resetForm();
  //   setTimeout(() => {
  //     this.usrID.nativeElement.focus();
  //   }, 100);
  // }

  // onSaveClick()
  // {
  //   if (this.newForm.valid)
  //   {
  //     this.newUser.clientLocation.clientLocationID = 0;
  //     this.usersService.insertUser(this.newUser).subscribe((response) =>
  //     {
  //       //Add Project to Grid
  //       var u: User = new User();
  //       p.projectID = response.projectID;
  //       p.projectName = response.projectName;
  //       p.dateOfStart = response.dateOfStart;
  //       p.teamSize = response.teamSize;
  //       p.clientLocation = response.clientLocation;
  //       p.active = response.active;
  //       p.clientLocationID = response.clientLocationID;
  //       p.status = response.status;
  //       this.projects.push(p);

  //       //Clear New Project Dialog - TextBoxes
  //       this.newProject.projectID = null;
  //       this.newProject.projectName = null;
  //       this.newProject.dateOfStart = null;
  //       this.newProject.teamSize = null;
  //       this.newProject.active = false;
  //       this.newProject.clientLocationID = null;
  //       this.newProject.status = null;

  //       $("#newFormCancel").trigger("click");
  //       this.calculateNoOfPages();
  //     }, (error) =>
  //       {
  //         console.log(error);
  //       });
  //   }
  // }

  // onEditClick(event, index: number)
  // {
  //   this.editForm.resetForm();
  //   setTimeout(() =>
  //   {
  //     this.editProject.projectID = this.projects[index].projectID;
  //     this.editProject.projectName = this.projects[index].projectName;
  //     this.editProject.dateOfStart = this.projects[index].dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd
  //     this.editProject.teamSize = this.projects[index].teamSize;
  //     this.editProject.active = this.projects[index].active;
  //     this.editProject.clientLocationID = this.projects[index].clientLocationID;
  //     this.editProject.clientLocation = this.projects[index].clientLocation;
  //     this.editProject.status = this.projects[index].status;
  //     this.editIndex = index;
  //   }, 100);
  // }

  // onUpdateClick()
  // {
  //   if (this.editForm.valid)
  //   {
  //     this.projectsService.updateProject(this.editProject).subscribe((response: Project) =>
  //     {
  //       var p: Project = new Project();
  //       p.projectID = response.projectID;
  //       p.projectName = response.projectName;
  //       p.dateOfStart = response.dateOfStart;
  //       p.teamSize = response.teamSize;
  //       p.clientLocation = response.clientLocation;
  //       p.active = response.active;
  //       p.clientLocationID = response.clientLocationID;
  //       p.status = response.status;
  //       this.projects[this.editIndex] = p;

  //       this.editProject.projectID = null;
  //       this.editProject.projectName = null;
  //       this.editProject.dateOfStart = null;
  //       this.editProject.teamSize = null;
  //       this.newProject.active = false;
  //       this.newProject.clientLocationID = null;
  //       this.newProject.status = null;

  //       $("#editFormCancel").trigger("click");
  //     },
  //       (error) =>
  //       {
  //         console.log(error);
  //       });
  //   }
  // }

  // onDeleteClick(event, index: number)
  // {
  //   this.deleteIndex = index;
  //   this.deleteProject.projectID = this.projects[index].projectID;
  //   this.deleteProject.projectName = this.projects[index].projectName;
  //   this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
  //   this.deleteProject.teamSize = this.projects[index].teamSize;
  // }

  // onDeleteConfirmClick()
  // {
  //   this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(
  //     (response) =>
  //     {
  //       this.projects.splice(this.deleteIndex, 1);
  //       this.deleteProject.projectID = null;
  //       this.deleteProject.projectName = null;
  //       this.deleteProject.teamSize = null;
  //       this.deleteProject.dateOfStart = null;

  //       this.calculateNoOfPages();
  //     },
  //     (error) =>
  //     {
  //       console.log(error);
  //     });
  // }

  onSearchClick()
  {
    // this.projectsService.SearchProjects(this.searchBy, this.searchText).subscribe(
    //   (response: Project[]) =>
    //   {
    //     this.projects = response;
    //   },
    //   (error) => 
    //   {
    //     console.log(error);
    //   });
  }

  // onSearchTextKeyup(event)
  // {
  //   this.calculateNoOfPages();
  // }

  // onHideShowDetails(event)
  // {
  //   this.projectsService.toggleDetails();
  // }

  // onPageIndexClicked(pageIndex: number)
  // {
  //   this.currentPageIndex = pageIndex;
  // }
}
