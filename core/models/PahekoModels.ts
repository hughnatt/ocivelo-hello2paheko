interface PahekoSqlResult<TData> {
  count: number,
  results: TData[]
}

interface PahekoUser {

}

export type { PahekoUser, PahekoSqlResult }
