/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

import { createClient } from '@supabase/supabase-js'

// Use Vite client-side env vars. Do NOT expose service_role keys in client code.
const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL ?? '') as string
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY ?? '') as string

// If env is not configured, provide a safe mock supabase client so the app
// can run in "mock" mode (the hooks already fall back to getMock*() data).
function createMockSupabase() {
  function Query() {
    this._table = undefined
    this._ops = []
  }

  Query.prototype.from = function (table: string) {
    this._table = table
    return this
  }

  ;['select', 'order', 'eq', 'update', 'insert', 'single', 'limit', 'match'].forEach(fn => {
    // keep methods chainable
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(Query.prototype as any)[fn] = function () { this._ops.push(fn); return this }
  })

  // Make the query thenable so `await supabase.from(...).select(...)` works.
  Query.prototype.then = function (resolve: any) {
    // Resolve with a harmless empty result (no error) so hooks can decide to
    // use mock fallbacks. Use a short timeout to mimic async behavior.
    const result = { data: null, error: null }
    return Promise.resolve(result).then(resolve)
  }

  const mock = {
    from: function (table: string) {
      return new (Query as any)().from(table)
    },
  }

  return mock as unknown as ReturnType<typeof createClient>
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createMockSupabase()
