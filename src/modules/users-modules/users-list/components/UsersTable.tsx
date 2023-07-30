import { Dispatch, FC, SetStateAction } from 'react'

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { createColumnHelper } from '@tanstack/table-core'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

import { UsersTableUserActions } from './UsersTableUserActions'
import { UsersTableUserIdCell } from './UsersTableUserIdCell'

import { TableSortIcon } from '@/components/table-sort-icon'
import { UserForSuperAdminViewModel } from '@/types'

export type UsersItem = Pick<
  UserForSuperAdminViewModel,
  'userId' | 'userName' | 'createdAt' | 'status'
>

const columnHelper = createColumnHelper<UsersItem>()

interface Props {
  users: UsersItem[]
  sorting: SortingState
  setSorting: Dispatch<SetStateAction<SortingState>>
}

export const UsersTable: FC<Props> = ({ users, sorting, setSorting }) => {
  const { t } = useTranslation()

  const columns = [
    columnHelper.accessor('userId', {
      id: 'id',
      header: t('userList.table.userId'),
      cell: props => <UsersTableUserIdCell row={props.row} />,
      enableSorting: true,
    }),
    columnHelper.accessor('userName', {
      id: 'userName',
      header: t('userList.table.username'),
      cell: info => info.getValue(),
      enableSorting: true,
    }),
    columnHelper.accessor('createdAt', {
      id: 'createdAt',
      header: t('userList.table.dateAdded'),
      cell: info => dayjs(info.getValue()).format('DD.MM.YYYY'),
      enableSorting: true,
    }),
    columnHelper.display({
      id: 'actions',
      cell: props => <UsersTableUserActions viewInfo={true} row={props.row} />,
      enableSorting: false,
    }),
  ]

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    manualSorting: true,
  })

  return (
    <>
      <div className=" text-accent-500 p-2 block max-w-full ">
        <div className={`max-w-[972px]`}>
          <table className="w-full">
            <thead
              className={
                'h-12 bg-dark-500 border-2 border-dark-500 border-r-2 text-light-100 font-semibold text-sm'
              }
            >
              {table.getHeaderGroups().map((headerGroup, key) => (
                <tr key={key}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div
                          className={clsx('flex items-center justify-center select-none', {
                            'cursor-pointer': header.column.getCanSort(),
                          })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}

                          <TableSortIcon
                            isCanSort={header.column.getCanSort()}
                            isSorted={header.column.getIsSorted()}
                          />
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody className="w-full">
              {table.getRowModel().rows.map(row => {
                return (
                  <tr
                    className={'border-[1px] border-dark-500 text-light-100 font-normal text-sm'}
                    key={row.id}
                  >
                    {row.getVisibleCells().map(cell => {
                      return (
                        <td
                          className={'pb-3 pt-3 text-center'}
                          key={cell.id}
                          style={{ width: cell.column.getSize() }}
                        >
                          <div className="w-full flex align-middle justify-center">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
