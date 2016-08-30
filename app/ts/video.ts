export class Video {
  id: number;
  title: string;
  videoCode: string;
  description: string;
  
  constructor(id: number, title: string, videoCode: string, description:string) {
    this.id = id;
    this.title = title;
    this.videoCode = videoCode;
    this.description = description;
  }
}