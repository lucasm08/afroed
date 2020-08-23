import BaseModel from './BaseModel';

export default class User extends BaseModel {
  username!: string;
  password!: string;
  name!: string;

  static tableName = 'user';

  static modelPaths = [__dirname];
}
