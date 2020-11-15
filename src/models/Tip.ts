import BaseModel from './BaseModel';

export default class Tip extends BaseModel {
  id!: number;
  description!: string;
  webLink!: string;
  lang!: string;

  static tableName = 'tips';
  static idColumn = 'id';
}
