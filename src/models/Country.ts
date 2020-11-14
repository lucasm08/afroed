import BaseModel from './BaseModel';

export default class Country extends BaseModel {
  id!: number;
  name!: string;
  code!: string;

  static tableName = 'coutries';
  static idColumn = 'id';
}
