import { makeAutoObservable } from "mobx";

export default class DeviceStore{
  constructor(){
    this._types = [
      {id: 1, name: 'smartphones'},
      {id: 2, name: 'laptops'}
    ];
    this._brands = [
      {id: 1, name: 'Xiaomi'},
      {id: 2, name: "HP"}
    ];
    this._devices = [
      {id: 1, name: "Redmi 9", price: 1000, rating: 1, img: "http://dudu.com/img.png"},
      {id: 2, name: "Redmi 9", price: 1000, rating: 1, img: "http://dudu.com/img.png"},
      {id: 3, name: "Redmi 9", price: 1000, rating: 1, img: "http://dudu.com/img.png"},
      {id: 4, name: "Redmi 9", price: 1000, rating: 1, img: "http://dudu.com/img.png"}
    ];
    makeAutoObservable(this);
  }

  setTypes(types){
    this._types = types;
  }

  setBrands(brands){
    this._brands = brands;
  }

  setDevices(devices){
    this._devices = devices;
  }

  get types(){
    return this._types;
  }

  get brands(){
    return this._brands;
  }

  get devices(){
    return this._devices;
  }
}