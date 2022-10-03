/* eslint-disable @typescript-eslint/no-explicit-any */

import { IColumnProps } from '../types/common';

// eslint-disable-next-line import/prefer-default-export
export const COLUMNS: IColumnProps[] = [
  {
    Header: 'Id',
    Footer: 'ID',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
  },
  {
    Header: 'DOB',
    Footer: 'DOB',
    accessor: 'date_fo_birth',
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
  },
];
