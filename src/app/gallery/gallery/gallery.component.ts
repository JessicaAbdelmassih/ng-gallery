import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from 'src/app/image/image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  title = 'Recent Photos';
  @Input() filterBy?: string = 'all'
  visibleImages:any[] = [];

  constructor(private imageService: ImageService) { 
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }

}


