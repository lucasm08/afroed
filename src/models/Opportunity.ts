import { Model } from 'objection';
import BaseModel from './BaseModel';
import Country from './Country';
import Field from './Field';

export default class Opportunity extends BaseModel {
  id!: number;
  opportunityId!: string;
  name!: string;
  type!: string;
  description?: string;
  deadline?: Date | null;
  phoneNumber1!: string;
  phoneNumber1Code!: number;
  phoneNumber2?: string;
  phoneNumber2Code?: string;
  gender!: string;
  available!: boolean;
  location?: string;
  image?: string;
  webLink?: string;
  lang?: string;
  eligibleCountries?: Country[];
  fieldsOfStudy?: Field[];

  static get relationMappings() {
    return {
      eligibleCountries: {
        relation: Model.ManyToManyRelation,
        modelClass: Country,
        join: {
          from: 'opportunities.id',
          through: {
            from: 'opportunities_coutries.opportunity_id',
            to: 'opportunities_coutries.country_id',
          },
          to: 'country.id',
        },
      },
      fieldsOfStudy: {
        relation: Model.ManyToManyRelation,
        modelClass: Field,
        join: {
          from: 'opportunities.id',
          through: {
            from: 'opportunities_fields.opportunity_id',
            to: 'opportunities_fields.field_id',
          },
          to: 'field.id',
        },
      },
    };
  }

  static tableName = 'opportunities';
  static idColumn = 'id';

  static modelPaths = [__dirname];
}
