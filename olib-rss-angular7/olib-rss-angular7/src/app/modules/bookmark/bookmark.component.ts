import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BookmarkService } from './bookmark.service';
import { Bookmark } from './bookmark.model';

@Component({
  selector: 'olib-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  settings : any;
  source: LocalDataSource = new LocalDataSource();
  
  constructor(
    private bookmarkService : BookmarkService
  ) { }

  ngOnInit() {
    this.initializeSetting();
    this.initializeSource();
  }
  
  initializeSetting(){
    this.settings = {
      add: {
        confirmCreate : true,
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        confirmSave : true,
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns: {
        name: {
          title: 'Name',
          type: 'string',
        },
        url: {
          title: 'URL',
          type: 'string',
        }
      },
    };
  }

  initializeSource(){
    this.bookmarkService.loadBookmark().subscribe(bookmark=>{
      this.source.load(bookmark);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.bookmarkService.deleteBookmark(event.data.id).subscribe();
      event.confirm.resolve();
      location.reload();
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event){
    if (window.confirm('Are you sure you want to create?')) {
      this.bookmarkService.saveBookmark(new Bookmark(event.newData)).subscribe();
      event.confirm.resolve();
      location.reload();
    } else {
      event.confirm.reject();
    }
  }
  onEditConfirm(event){
    if (window.confirm('Are you sure you want to edit?')) {
      this.bookmarkService.updateBookmark(new Bookmark(event.newData)).subscribe();
      event.confirm.resolve();
      location.reload();
    } else {
      event.confirm.reject();
    }
  }
}
