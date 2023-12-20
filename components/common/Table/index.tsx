import React, { ReactNode } from 'react';

const UNIT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

type FractionalUnit = (typeof UNIT)[number];

interface Props<T extends string> {
  labelList: {
    label: string;
    value: T;
    gridFractionalUnit: FractionalUnit;
  }[];
  itemList: Record<T, string | number | ReactNode>[];
}

export default function Table<T extends string>({ itemList, labelList }: Props<T>) {
  const headerValueList = labelList.map((label) => label.value);
  const fractionalUnitInfo = labelList.reduce((acc, cur) => {
    return { ...acc, [cur.value]: cur.gridFractionalUnit };
  }, {}) as Record<T, FractionalUnit>;

  const isEmpty = itemList.length === 0;

  return (
    <table className="bg-white w-full  rounded-md shadow-md overflow-x-auto">
      <thead className="">
        <tr className="border-b py-2 bg-purple-100 text-gray-600 font-bold grid grid-flow-col  gap-6 rounded-t-md px-4">
          {labelList.map((label) => (
            <th
              className={`w-full col-span-${label.gridFractionalUnit}`}
              scope="col"
              key={label.value}
              align="center"
            >
              {label.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isEmpty && <p className="p-6 font-semibold text-lg">데이터가 없습니다.</p>}
        {itemList.map((item) => {
          return (
            <tr
              className="grid grid-flow-col gap-6 bg-white py-3 border-b px-4 "
              key={item[headerValueList[0]]?.toString()}
            >
              {headerValueList.map((t, index) => {
                if (index === 0) {
                  return (
                    <th
                      className={`w-full col-span-${fractionalUnitInfo[t]}`}
                      scope="row"
                      align="center"
                      key={t}
                    >
                      {item[t]}
                    </th>
                  );
                }

                return (
                  <td
                    className={`w-full col-span-${fractionalUnitInfo[t]} last:rounded-b-md`}
                    align="center"
                    key={t}
                  >
                    {item[t]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
