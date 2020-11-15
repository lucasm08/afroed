import BaseModel from './BaseModel';

export default class Partner extends BaseModel {
  id!: number;
  partnerId!: string;
  name!: string;
  type!: string;
  address?: string;
  city!: string;
  phoneNumber1!: string;
  phoneNumber1Code!: number;
  phoneNumber2?: string;
  phoneNumber2Code?: string;
  email!: string;
  webLink?: string;
  logo?: string;
  recruitementType?: string;

  static tableName = 'partners';
  static idColumn = 'id';
}
