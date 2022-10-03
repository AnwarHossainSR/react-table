/* eslint-disable @typescript-eslint/no-explicit-any */

import { IColumnProps } from '../types/common';

// eslint-disable-next-line import/prefer-default-export
export const COLUMNS: IColumnProps[] = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'DOB',
    accessor: 'date_fo_birth',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
];
