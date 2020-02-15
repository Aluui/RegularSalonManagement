import { Note } from './note';

export class Photo {
    id: string;
    name: string;
    url: string;
    dateCreated: Date;
    notes: Note;
}
