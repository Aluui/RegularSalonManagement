import { Note } from './note.model';

export class Photo {
    id: string;
    name: string;
    url: string;
    dateCreated: Date;
    notes: Note;
}
