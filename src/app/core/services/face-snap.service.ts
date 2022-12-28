import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";


@Injectable({
    providedIn: 'root'
})

export class FaceSnapService{
    faceSnaps$!: Observable<FaceSnap>;

    constructor(private http: HttpClient){}

    getAllFaceSnap(): Observable<FaceSnap[]>{
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap>{
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    snapFaceSnapById(faceSnapId:number,snaptype: 'snap' | 'unsnap'){
        return  this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: (snaptype === 'snap') ? faceSnap.snaps+=1 : faceSnap.snaps-=1
            })),
            switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`,updatedFaceSnap) )
        );
    }

    saveNewFacaSnap(formValue: {title:string,description:string,imageUrl:string, location?: string}): Observable<FaceSnap>{
        return this.getAllFaceSnap().pipe(
            map(faceSnaps => [...faceSnaps].sort((a,b) => a.id - b.id) ),
            map(sortedFaceSnaps => (sortedFaceSnaps[sortedFaceSnaps.length - 1])),
            map(prochainFaceSnap => ({
                ...formValue,
                createdDate: new Date(),
                snaps: 0,
                id: prochainFaceSnap.id + 1
            })),
            switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps',newFaceSnap))
        );
    }

}