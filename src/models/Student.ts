import { Model } from 'objection';
import Country from './Country';
import Field from './Field';
import Partner from './Partner';
import Opportunity from './Opportunity';

import BaseModel from './BaseModel';

export default class Student extends BaseModel {
  id!: number;
  studentId!: string;
  firstName!: string;
  lastName!: string;
  dateOfBirth!: Date;
  gender!: string;
  city!: string;
  address?: string;
  countryId!: number;
  lang!: string;
  phoneNumber!: string;
  phoneNumberCode!: number;
  whatsappNumber?: string;
  whatsappNumberCode?: number;
  institutionName!: string;
  level!: string;
  yearOfGraduation!: number;
  getNotificationUpdates!: boolean;
  status!: boolean;
  preferredMessagingMethod!: string;

  country?: Country;
  fieldsOfInterest?: Field[];
  mentorParters?: Partner[];
  opportunitiesOfInterest?: Opportunity[];

  static tableName = 'students';
  static idColumn = 'id';

  static modelPaths = [__dirname];

  static getColumns = async (): Promise<string[]> => {
    const meta = await Model.fetchTableMetadata({ table: 'Students' });

    return meta.columns;
  };

  static get relationMappings() {
    return {
      country: {
        relation: Model.BelongsToOneRelation,
        modelClass: Country,
        join: {
          from: 'students.country_id',
          to: 'countries.id',
        },
      },
      partners: {
        relation: Model.ManyToManyRelation,
        modelClass: Partner,
        join: {
          from: 'students.id',
          through: {
            from: 'students_partners.student_id',
            to: 'students_partners.partner_id',
          },
          to: 'partner.id',
        },
      },
      opportunitiesOfInterest: {
        relation: Model.ManyToManyRelation,
        modelClass: Opportunity,
        join: {
          from: 'students.id',
          through: {
            from: 'students_opportunities.student_id',
            to: 'students_opportunities.opportunity_id',
          },
          to: 'opportunity.id',
        },
      },
      fieldsOfInterest: {
        relation: Model.ManyToManyRelation,
        modelClass: Field,
        join: {
          from: 'students.id',
          through: {
            from: 'students_fields.student_id',
            to: 'students_fields.field_id',
          },
          to: 'field.id',
        },
      },
    };
  }
}
