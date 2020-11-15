import BaseModel from './BaseModel';

export default class Field extends BaseModel {
  id!: number;
  name!: string;
  static tableName = 'fields';
  static idColumn = 'id';
}
