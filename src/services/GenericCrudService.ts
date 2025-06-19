import { BaseModel } from "../models/BaseModel";

//first receive a generic type T that extends BaseModel
export class GenericCrudService<T extends BaseModel> {
  //data of type T in an array
  private data: T[];

  //constructor that initializes the data array
  //if no initial data is provided, it defaults to an empty array
  constructor(initialData: T[] = []) {
    this.data = initialData;
  }

  //this method return the array of data
  //it is used to get all the data
  getAll(){
    return this.data;
  }
}
