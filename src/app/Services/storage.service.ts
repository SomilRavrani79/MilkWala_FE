import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // Create the storage instance
    this._storage = await this.storage.create();
  }

  // Store key-value pair
  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  // Retrieve value by key
  public async get(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  // Remove value by key
  public async remove(key: string) {
    await this._storage?.remove(key);
  }
}
