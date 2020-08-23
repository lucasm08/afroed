import { Model, ModelOptions, QueryContext } from 'objection';

export default class BaseModel extends Model {
  id!: number;
  createdDate?: Date;
  updatedDate?: Date;

  $beforeInsert(queryContext: QueryContext): Promise<any> | void {
    this.createdDate = new Date();
    this.updatedDate = new Date();
  }
  $beforeUpdate(opt: ModelOptions, queryContext: QueryContext): Promise<any> | void {
    this.updatedDate = new Date();
  }

  static modelPaths = [__dirname];

  $parseDatabaseJson(json: object) {
    const res = super.$parseDatabaseJson(json);
    toDate(res, 'createdAt');
    toDate(res, 'updatedAt');
    return res;
  }

  $formatDatabaseJson(json: object) {
    const res = super.$formatDatabaseJson(json);
    toTime(res, 'createdAt');
    toTime(res, 'updatedAt');
    return res;
  }
}
const toDate = (obj: any, fieldName: string): any => {
  if (obj != null && typeof obj[fieldName] === 'number') {
    obj[fieldName] = new Date(obj[fieldName]);
  }
  return obj;
};

const toTime = (obj: any, fieldName: string): any => {
  if (obj != null && obj[fieldName] != null && obj[fieldName].getTime) {
    obj[fieldName] = obj[fieldName].getTime();
  }
  return obj;
};
