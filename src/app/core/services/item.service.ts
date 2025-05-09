import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from '../../features/inventory/models/item.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'api/items'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Item[]>('getItems', []))
      );
  }

  getItem(id: string): Observable<Item> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Item>(url)
      .pipe(
        catchError(this.handleError<Item>(`getItem id=${id}`))
      );
  }

  saveItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item)
      .pipe(
        catchError(this.handleError<Item>('saveItem'))
      );
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${item.id}`, item)
      .pipe(
        catchError(this.handleError<Item>('updateItem'))
      );
  }

  deleteItem(id: string): Observable<Item> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Item>(url)
      .pipe(
        catchError(this.handleError<Item>('deleteItem'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}