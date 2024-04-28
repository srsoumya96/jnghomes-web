import { Component } from '@angular/core';
import { Projects } from '../dB/projects';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  filteredProjects : any[] = [];
  activeTab = 'All';
  isDetailedView: boolean = false;
  selectedProject : any;

  constructor(private activatedRoute : ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((param : any) => {
      this.activeTab = param.params.tab || 'All';
      this.setTab(this.activeTab);
    })
  }

  setTab(tab : string) {
    this.activeTab = tab;
    if(tab === 'All') {
      this.filteredProjects = Projects;
      return;
    }
    this.filteredProjects = Projects.filter((a) => a.project_status === tab);
  }

  openDetailedView(project : any) {
    this.isDetailedView = true;
    this.selectedProject = project;
  }

  closeDetailedView() {
    this.isDetailedView = false;
    this.selectedProject = null;
  }
}
