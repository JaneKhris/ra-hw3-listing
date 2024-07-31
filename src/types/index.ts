import { dataArray } from '../data/data';

export type TDataArray = typeof dataArray;

type TData = typeof dataArray[0];

type TAdd = {
    currency?: string,
    level?: string
}

export type TDataExtended = TData & TAdd

export type TDataExtendedArray = TDataExtended[];

export type Props = { dataArray: TDataArray};

