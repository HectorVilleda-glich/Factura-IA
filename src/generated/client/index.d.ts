
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model CategoriaGasto
 * 
 */
export type CategoriaGasto = $Result.DefaultSelection<Prisma.$CategoriaGastoPayload>
/**
 * Model TipoDocumento
 * 
 */
export type TipoDocumento = $Result.DefaultSelection<Prisma.$TipoDocumentoPayload>
/**
 * Model Factura
 * 
 */
export type Factura = $Result.DefaultSelection<Prisma.$FacturaPayload>
/**
 * Model DetalleEnvio
 * 
 */
export type DetalleEnvio = $Result.DefaultSelection<Prisma.$DetalleEnvioPayload>
/**
 * Model FacturaEnviada
 * 
 */
export type FacturaEnviada = $Result.DefaultSelection<Prisma.$FacturaEnviadaPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoriaGasto`: Exposes CRUD operations for the **CategoriaGasto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriaGastos
    * const categoriaGastos = await prisma.categoriaGasto.findMany()
    * ```
    */
  get categoriaGasto(): Prisma.CategoriaGastoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoDocumento`: Exposes CRUD operations for the **TipoDocumento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoDocumentos
    * const tipoDocumentos = await prisma.tipoDocumento.findMany()
    * ```
    */
  get tipoDocumento(): Prisma.TipoDocumentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factura`: Exposes CRUD operations for the **Factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facturas
    * const facturas = await prisma.factura.findMany()
    * ```
    */
  get factura(): Prisma.FacturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleEnvio`: Exposes CRUD operations for the **DetalleEnvio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleEnvios
    * const detalleEnvios = await prisma.detalleEnvio.findMany()
    * ```
    */
  get detalleEnvio(): Prisma.DetalleEnvioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facturaEnviada`: Exposes CRUD operations for the **FacturaEnviada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacturaEnviadas
    * const facturaEnviadas = await prisma.facturaEnviada.findMany()
    * ```
    */
  get facturaEnviada(): Prisma.FacturaEnviadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    CategoriaGasto: 'CategoriaGasto',
    TipoDocumento: 'TipoDocumento',
    Factura: 'Factura',
    DetalleEnvio: 'DetalleEnvio',
    FacturaEnviada: 'FacturaEnviada',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "categoriaGasto" | "tipoDocumento" | "factura" | "detalleEnvio" | "facturaEnviada" | "account" | "session" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      CategoriaGasto: {
        payload: Prisma.$CategoriaGastoPayload<ExtArgs>
        fields: Prisma.CategoriaGastoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaGastoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaGastoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaGastoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaGastoPayload>
          }
          findFirst: {
            args: Prisma.CategoriaGastoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaGastoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaGastoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaGastoPayload>
          }
          findMany: {
            args: Prisma.CategoriaGastoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaGastoPayload>[]
          }
          create: {
            args: Prisma.CategoriaGastoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaGastoPayload>
          }
          createMany: {
            args: Prisma.CategoriaGastoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaGastoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaGastoPayload>[]
          }
          delete: {
            args: Prisma.CategoriaGastoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaGastoPayload>
          }
          update: {
            args: Prisma.CategoriaGastoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaGastoPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaGastoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaGastoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaGastoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaGastoPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaGastoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaGastoPayload>
          }
          aggregate: {
            args: Prisma.CategoriaGastoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoriaGasto>
          }
          groupBy: {
            args: Prisma.CategoriaGastoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGastoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaGastoCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGastoCountAggregateOutputType> | number
          }
        }
      }
      TipoDocumento: {
        payload: Prisma.$TipoDocumentoPayload<ExtArgs>
        fields: Prisma.TipoDocumentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoDocumentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoDocumentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          findFirst: {
            args: Prisma.TipoDocumentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoDocumentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          findMany: {
            args: Prisma.TipoDocumentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>[]
          }
          create: {
            args: Prisma.TipoDocumentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          createMany: {
            args: Prisma.TipoDocumentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoDocumentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>[]
          }
          delete: {
            args: Prisma.TipoDocumentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          update: {
            args: Prisma.TipoDocumentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          deleteMany: {
            args: Prisma.TipoDocumentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoDocumentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoDocumentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>[]
          }
          upsert: {
            args: Prisma.TipoDocumentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          aggregate: {
            args: Prisma.TipoDocumentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoDocumento>
          }
          groupBy: {
            args: Prisma.TipoDocumentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoDocumentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoDocumentoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoDocumentoCountAggregateOutputType> | number
          }
        }
      }
      Factura: {
        payload: Prisma.$FacturaPayload<ExtArgs>
        fields: Prisma.FacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findFirst: {
            args: Prisma.FacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findMany: {
            args: Prisma.FacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          create: {
            args: Prisma.FacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          createMany: {
            args: Prisma.FacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          delete: {
            args: Prisma.FacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          update: {
            args: Prisma.FacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          deleteMany: {
            args: Prisma.FacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          upsert: {
            args: Prisma.FacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          aggregate: {
            args: Prisma.FacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactura>
          }
          groupBy: {
            args: Prisma.FacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaCountAggregateOutputType> | number
          }
        }
      }
      DetalleEnvio: {
        payload: Prisma.$DetalleEnvioPayload<ExtArgs>
        fields: Prisma.DetalleEnvioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleEnvioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleEnvioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleEnvioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleEnvioPayload>
          }
          findFirst: {
            args: Prisma.DetalleEnvioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleEnvioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleEnvioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleEnvioPayload>
          }
          findMany: {
            args: Prisma.DetalleEnvioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleEnvioPayload>[]
          }
          create: {
            args: Prisma.DetalleEnvioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleEnvioPayload>
          }
          createMany: {
            args: Prisma.DetalleEnvioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetalleEnvioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleEnvioPayload>[]
          }
          delete: {
            args: Prisma.DetalleEnvioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleEnvioPayload>
          }
          update: {
            args: Prisma.DetalleEnvioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleEnvioPayload>
          }
          deleteMany: {
            args: Prisma.DetalleEnvioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleEnvioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetalleEnvioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleEnvioPayload>[]
          }
          upsert: {
            args: Prisma.DetalleEnvioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleEnvioPayload>
          }
          aggregate: {
            args: Prisma.DetalleEnvioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleEnvio>
          }
          groupBy: {
            args: Prisma.DetalleEnvioGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleEnvioGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleEnvioCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleEnvioCountAggregateOutputType> | number
          }
        }
      }
      FacturaEnviada: {
        payload: Prisma.$FacturaEnviadaPayload<ExtArgs>
        fields: Prisma.FacturaEnviadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaEnviadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaEnviadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaEnviadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaEnviadaPayload>
          }
          findFirst: {
            args: Prisma.FacturaEnviadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaEnviadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaEnviadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaEnviadaPayload>
          }
          findMany: {
            args: Prisma.FacturaEnviadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaEnviadaPayload>[]
          }
          create: {
            args: Prisma.FacturaEnviadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaEnviadaPayload>
          }
          createMany: {
            args: Prisma.FacturaEnviadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacturaEnviadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaEnviadaPayload>[]
          }
          delete: {
            args: Prisma.FacturaEnviadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaEnviadaPayload>
          }
          update: {
            args: Prisma.FacturaEnviadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaEnviadaPayload>
          }
          deleteMany: {
            args: Prisma.FacturaEnviadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaEnviadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacturaEnviadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaEnviadaPayload>[]
          }
          upsert: {
            args: Prisma.FacturaEnviadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaEnviadaPayload>
          }
          aggregate: {
            args: Prisma.FacturaEnviadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacturaEnviada>
          }
          groupBy: {
            args: Prisma.FacturaEnviadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaEnviadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaEnviadaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaEnviadaCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    categoriaGasto?: CategoriaGastoOmit
    tipoDocumento?: TipoDocumentoOmit
    factura?: FacturaOmit
    detalleEnvio?: DetalleEnvioOmit
    facturaEnviada?: FacturaEnviadaOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    facturas: number
    detalleEnvios: number
    accounts: number
    sessions: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | UsuarioCountOutputTypeCountFacturasArgs
    detalleEnvios?: boolean | UsuarioCountOutputTypeCountDetalleEnviosArgs
    accounts?: boolean | UsuarioCountOutputTypeCountAccountsArgs
    sessions?: boolean | UsuarioCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDetalleEnviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleEnvioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type CategoriaGastoCountOutputType
   */

  export type CategoriaGastoCountOutputType = {
    facturas: number
  }

  export type CategoriaGastoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | CategoriaGastoCountOutputTypeCountFacturasArgs
  }

  // Custom InputTypes
  /**
   * CategoriaGastoCountOutputType without action
   */
  export type CategoriaGastoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGastoCountOutputType
     */
    select?: CategoriaGastoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaGastoCountOutputType without action
   */
  export type CategoriaGastoCountOutputTypeCountFacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
  }


  /**
   * Count Type TipoDocumentoCountOutputType
   */

  export type TipoDocumentoCountOutputType = {
    facturas: number
  }

  export type TipoDocumentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | TipoDocumentoCountOutputTypeCountFacturasArgs
  }

  // Custom InputTypes
  /**
   * TipoDocumentoCountOutputType without action
   */
  export type TipoDocumentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumentoCountOutputType
     */
    select?: TipoDocumentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoDocumentoCountOutputType without action
   */
  export type TipoDocumentoCountOutputTypeCountFacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
  }


  /**
   * Count Type FacturaCountOutputType
   */

  export type FacturaCountOutputType = {
    facturasEnviadas: number
  }

  export type FacturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturasEnviadas?: boolean | FacturaCountOutputTypeCountFacturasEnviadasArgs
  }

  // Custom InputTypes
  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCountOutputType
     */
    select?: FacturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeCountFacturasEnviadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaEnviadaWhereInput
  }


  /**
   * Count Type DetalleEnvioCountOutputType
   */

  export type DetalleEnvioCountOutputType = {
    facturasEnviadas: number
  }

  export type DetalleEnvioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturasEnviadas?: boolean | DetalleEnvioCountOutputTypeCountFacturasEnviadasArgs
  }

  // Custom InputTypes
  /**
   * DetalleEnvioCountOutputType without action
   */
  export type DetalleEnvioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvioCountOutputType
     */
    select?: DetalleEnvioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DetalleEnvioCountOutputType without action
   */
  export type DetalleEnvioCountOutputTypeCountFacturasEnviadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaEnviadaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: string | null
    correo: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    estado: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: string | null
    correo: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    estado: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    correo: number
    password: number
    createdAt: number
    updatedAt: number
    estado: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    correo?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    estado?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    correo?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    estado?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    correo?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    estado?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: string
    correo: string
    password: string
    createdAt: Date
    updatedAt: Date
    estado: boolean
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    correo?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estado?: boolean
    facturas?: boolean | Usuario$facturasArgs<ExtArgs>
    detalleEnvios?: boolean | Usuario$detalleEnviosArgs<ExtArgs>
    accounts?: boolean | Usuario$accountsArgs<ExtArgs>
    sessions?: boolean | Usuario$sessionsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    correo?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estado?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    correo?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estado?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    correo?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estado?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "correo" | "password" | "createdAt" | "updatedAt" | "estado", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | Usuario$facturasArgs<ExtArgs>
    detalleEnvios?: boolean | Usuario$detalleEnviosArgs<ExtArgs>
    accounts?: boolean | Usuario$accountsArgs<ExtArgs>
    sessions?: boolean | Usuario$sessionsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      facturas: Prisma.$FacturaPayload<ExtArgs>[]
      detalleEnvios: Prisma.$DetalleEnvioPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: string
      correo: string
      password: string
      createdAt: Date
      updatedAt: Date
      estado: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facturas<T extends Usuario$facturasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detalleEnvios<T extends Usuario$detalleEnviosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$detalleEnviosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends Usuario$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Usuario$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
    readonly estado: FieldRef<"Usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.facturas
   */
  export type Usuario$facturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Usuario.detalleEnvios
   */
  export type Usuario$detalleEnviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioInclude<ExtArgs> | null
    where?: DetalleEnvioWhereInput
    orderBy?: DetalleEnvioOrderByWithRelationInput | DetalleEnvioOrderByWithRelationInput[]
    cursor?: DetalleEnvioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleEnvioScalarFieldEnum | DetalleEnvioScalarFieldEnum[]
  }

  /**
   * Usuario.accounts
   */
  export type Usuario$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Usuario.sessions
   */
  export type Usuario$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model CategoriaGasto
   */

  export type AggregateCategoriaGasto = {
    _count: CategoriaGastoCountAggregateOutputType | null
    _min: CategoriaGastoMinAggregateOutputType | null
    _max: CategoriaGastoMaxAggregateOutputType | null
  }

  export type CategoriaGastoMinAggregateOutputType = {
    id_categoria_gasto: string | null
    nombre: string | null
    description: string | null
  }

  export type CategoriaGastoMaxAggregateOutputType = {
    id_categoria_gasto: string | null
    nombre: string | null
    description: string | null
  }

  export type CategoriaGastoCountAggregateOutputType = {
    id_categoria_gasto: number
    nombre: number
    description: number
    _all: number
  }


  export type CategoriaGastoMinAggregateInputType = {
    id_categoria_gasto?: true
    nombre?: true
    description?: true
  }

  export type CategoriaGastoMaxAggregateInputType = {
    id_categoria_gasto?: true
    nombre?: true
    description?: true
  }

  export type CategoriaGastoCountAggregateInputType = {
    id_categoria_gasto?: true
    nombre?: true
    description?: true
    _all?: true
  }

  export type CategoriaGastoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriaGasto to aggregate.
     */
    where?: CategoriaGastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaGastos to fetch.
     */
    orderBy?: CategoriaGastoOrderByWithRelationInput | CategoriaGastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaGastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriaGastos
    **/
    _count?: true | CategoriaGastoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaGastoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaGastoMaxAggregateInputType
  }

  export type GetCategoriaGastoAggregateType<T extends CategoriaGastoAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriaGasto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriaGasto[P]>
      : GetScalarType<T[P], AggregateCategoriaGasto[P]>
  }




  export type CategoriaGastoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaGastoWhereInput
    orderBy?: CategoriaGastoOrderByWithAggregationInput | CategoriaGastoOrderByWithAggregationInput[]
    by: CategoriaGastoScalarFieldEnum[] | CategoriaGastoScalarFieldEnum
    having?: CategoriaGastoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaGastoCountAggregateInputType | true
    _min?: CategoriaGastoMinAggregateInputType
    _max?: CategoriaGastoMaxAggregateInputType
  }

  export type CategoriaGastoGroupByOutputType = {
    id_categoria_gasto: string
    nombre: string
    description: string | null
    _count: CategoriaGastoCountAggregateOutputType | null
    _min: CategoriaGastoMinAggregateOutputType | null
    _max: CategoriaGastoMaxAggregateOutputType | null
  }

  type GetCategoriaGastoGroupByPayload<T extends CategoriaGastoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGastoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGastoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGastoGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGastoGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaGastoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria_gasto?: boolean
    nombre?: boolean
    description?: boolean
    facturas?: boolean | CategoriaGasto$facturasArgs<ExtArgs>
    _count?: boolean | CategoriaGastoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriaGasto"]>

  export type CategoriaGastoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria_gasto?: boolean
    nombre?: boolean
    description?: boolean
  }, ExtArgs["result"]["categoriaGasto"]>

  export type CategoriaGastoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria_gasto?: boolean
    nombre?: boolean
    description?: boolean
  }, ExtArgs["result"]["categoriaGasto"]>

  export type CategoriaGastoSelectScalar = {
    id_categoria_gasto?: boolean
    nombre?: boolean
    description?: boolean
  }

  export type CategoriaGastoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria_gasto" | "nombre" | "description", ExtArgs["result"]["categoriaGasto"]>
  export type CategoriaGastoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | CategoriaGasto$facturasArgs<ExtArgs>
    _count?: boolean | CategoriaGastoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaGastoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaGastoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaGastoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoriaGasto"
    objects: {
      facturas: Prisma.$FacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria_gasto: string
      nombre: string
      description: string | null
    }, ExtArgs["result"]["categoriaGasto"]>
    composites: {}
  }

  type CategoriaGastoGetPayload<S extends boolean | null | undefined | CategoriaGastoDefaultArgs> = $Result.GetResult<Prisma.$CategoriaGastoPayload, S>

  type CategoriaGastoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaGastoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaGastoCountAggregateInputType | true
    }

  export interface CategoriaGastoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoriaGasto'], meta: { name: 'CategoriaGasto' } }
    /**
     * Find zero or one CategoriaGasto that matches the filter.
     * @param {CategoriaGastoFindUniqueArgs} args - Arguments to find a CategoriaGasto
     * @example
     * // Get one CategoriaGasto
     * const categoriaGasto = await prisma.categoriaGasto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaGastoFindUniqueArgs>(args: SelectSubset<T, CategoriaGastoFindUniqueArgs<ExtArgs>>): Prisma__CategoriaGastoClient<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoriaGasto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaGastoFindUniqueOrThrowArgs} args - Arguments to find a CategoriaGasto
     * @example
     * // Get one CategoriaGasto
     * const categoriaGasto = await prisma.categoriaGasto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaGastoFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaGastoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaGastoClient<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriaGasto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGastoFindFirstArgs} args - Arguments to find a CategoriaGasto
     * @example
     * // Get one CategoriaGasto
     * const categoriaGasto = await prisma.categoriaGasto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaGastoFindFirstArgs>(args?: SelectSubset<T, CategoriaGastoFindFirstArgs<ExtArgs>>): Prisma__CategoriaGastoClient<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriaGasto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGastoFindFirstOrThrowArgs} args - Arguments to find a CategoriaGasto
     * @example
     * // Get one CategoriaGasto
     * const categoriaGasto = await prisma.categoriaGasto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaGastoFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaGastoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaGastoClient<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoriaGastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGastoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriaGastos
     * const categoriaGastos = await prisma.categoriaGasto.findMany()
     * 
     * // Get first 10 CategoriaGastos
     * const categoriaGastos = await prisma.categoriaGasto.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria_gasto`
     * const categoriaGastoWithId_categoria_gastoOnly = await prisma.categoriaGasto.findMany({ select: { id_categoria_gasto: true } })
     * 
     */
    findMany<T extends CategoriaGastoFindManyArgs>(args?: SelectSubset<T, CategoriaGastoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoriaGasto.
     * @param {CategoriaGastoCreateArgs} args - Arguments to create a CategoriaGasto.
     * @example
     * // Create one CategoriaGasto
     * const CategoriaGasto = await prisma.categoriaGasto.create({
     *   data: {
     *     // ... data to create a CategoriaGasto
     *   }
     * })
     * 
     */
    create<T extends CategoriaGastoCreateArgs>(args: SelectSubset<T, CategoriaGastoCreateArgs<ExtArgs>>): Prisma__CategoriaGastoClient<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoriaGastos.
     * @param {CategoriaGastoCreateManyArgs} args - Arguments to create many CategoriaGastos.
     * @example
     * // Create many CategoriaGastos
     * const categoriaGasto = await prisma.categoriaGasto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaGastoCreateManyArgs>(args?: SelectSubset<T, CategoriaGastoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoriaGastos and returns the data saved in the database.
     * @param {CategoriaGastoCreateManyAndReturnArgs} args - Arguments to create many CategoriaGastos.
     * @example
     * // Create many CategoriaGastos
     * const categoriaGasto = await prisma.categoriaGasto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoriaGastos and only return the `id_categoria_gasto`
     * const categoriaGastoWithId_categoria_gastoOnly = await prisma.categoriaGasto.createManyAndReturn({
     *   select: { id_categoria_gasto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaGastoCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaGastoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoriaGasto.
     * @param {CategoriaGastoDeleteArgs} args - Arguments to delete one CategoriaGasto.
     * @example
     * // Delete one CategoriaGasto
     * const CategoriaGasto = await prisma.categoriaGasto.delete({
     *   where: {
     *     // ... filter to delete one CategoriaGasto
     *   }
     * })
     * 
     */
    delete<T extends CategoriaGastoDeleteArgs>(args: SelectSubset<T, CategoriaGastoDeleteArgs<ExtArgs>>): Prisma__CategoriaGastoClient<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoriaGasto.
     * @param {CategoriaGastoUpdateArgs} args - Arguments to update one CategoriaGasto.
     * @example
     * // Update one CategoriaGasto
     * const categoriaGasto = await prisma.categoriaGasto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaGastoUpdateArgs>(args: SelectSubset<T, CategoriaGastoUpdateArgs<ExtArgs>>): Prisma__CategoriaGastoClient<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoriaGastos.
     * @param {CategoriaGastoDeleteManyArgs} args - Arguments to filter CategoriaGastos to delete.
     * @example
     * // Delete a few CategoriaGastos
     * const { count } = await prisma.categoriaGasto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaGastoDeleteManyArgs>(args?: SelectSubset<T, CategoriaGastoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriaGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGastoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriaGastos
     * const categoriaGasto = await prisma.categoriaGasto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaGastoUpdateManyArgs>(args: SelectSubset<T, CategoriaGastoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriaGastos and returns the data updated in the database.
     * @param {CategoriaGastoUpdateManyAndReturnArgs} args - Arguments to update many CategoriaGastos.
     * @example
     * // Update many CategoriaGastos
     * const categoriaGasto = await prisma.categoriaGasto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoriaGastos and only return the `id_categoria_gasto`
     * const categoriaGastoWithId_categoria_gastoOnly = await prisma.categoriaGasto.updateManyAndReturn({
     *   select: { id_categoria_gasto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaGastoUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaGastoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoriaGasto.
     * @param {CategoriaGastoUpsertArgs} args - Arguments to update or create a CategoriaGasto.
     * @example
     * // Update or create a CategoriaGasto
     * const categoriaGasto = await prisma.categoriaGasto.upsert({
     *   create: {
     *     // ... data to create a CategoriaGasto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriaGasto we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaGastoUpsertArgs>(args: SelectSubset<T, CategoriaGastoUpsertArgs<ExtArgs>>): Prisma__CategoriaGastoClient<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoriaGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGastoCountArgs} args - Arguments to filter CategoriaGastos to count.
     * @example
     * // Count the number of CategoriaGastos
     * const count = await prisma.categoriaGasto.count({
     *   where: {
     *     // ... the filter for the CategoriaGastos we want to count
     *   }
     * })
    **/
    count<T extends CategoriaGastoCountArgs>(
      args?: Subset<T, CategoriaGastoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaGastoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriaGasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGastoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaGastoAggregateArgs>(args: Subset<T, CategoriaGastoAggregateArgs>): Prisma.PrismaPromise<GetCategoriaGastoAggregateType<T>>

    /**
     * Group by CategoriaGasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGastoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGastoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGastoGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGastoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGastoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGastoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoriaGasto model
   */
  readonly fields: CategoriaGastoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriaGasto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaGastoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facturas<T extends CategoriaGasto$facturasArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaGasto$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategoriaGasto model
   */
  interface CategoriaGastoFieldRefs {
    readonly id_categoria_gasto: FieldRef<"CategoriaGasto", 'String'>
    readonly nombre: FieldRef<"CategoriaGasto", 'String'>
    readonly description: FieldRef<"CategoriaGasto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategoriaGasto findUnique
   */
  export type CategoriaGastoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaGastoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaGasto to fetch.
     */
    where: CategoriaGastoWhereUniqueInput
  }

  /**
   * CategoriaGasto findUniqueOrThrow
   */
  export type CategoriaGastoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaGastoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaGasto to fetch.
     */
    where: CategoriaGastoWhereUniqueInput
  }

  /**
   * CategoriaGasto findFirst
   */
  export type CategoriaGastoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaGastoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaGasto to fetch.
     */
    where?: CategoriaGastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaGastos to fetch.
     */
    orderBy?: CategoriaGastoOrderByWithRelationInput | CategoriaGastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriaGastos.
     */
    cursor?: CategoriaGastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriaGastos.
     */
    distinct?: CategoriaGastoScalarFieldEnum | CategoriaGastoScalarFieldEnum[]
  }

  /**
   * CategoriaGasto findFirstOrThrow
   */
  export type CategoriaGastoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaGastoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaGasto to fetch.
     */
    where?: CategoriaGastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaGastos to fetch.
     */
    orderBy?: CategoriaGastoOrderByWithRelationInput | CategoriaGastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriaGastos.
     */
    cursor?: CategoriaGastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriaGastos.
     */
    distinct?: CategoriaGastoScalarFieldEnum | CategoriaGastoScalarFieldEnum[]
  }

  /**
   * CategoriaGasto findMany
   */
  export type CategoriaGastoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaGastoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaGastos to fetch.
     */
    where?: CategoriaGastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaGastos to fetch.
     */
    orderBy?: CategoriaGastoOrderByWithRelationInput | CategoriaGastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriaGastos.
     */
    cursor?: CategoriaGastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriaGastos.
     */
    distinct?: CategoriaGastoScalarFieldEnum | CategoriaGastoScalarFieldEnum[]
  }

  /**
   * CategoriaGasto create
   */
  export type CategoriaGastoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaGastoInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoriaGasto.
     */
    data: XOR<CategoriaGastoCreateInput, CategoriaGastoUncheckedCreateInput>
  }

  /**
   * CategoriaGasto createMany
   */
  export type CategoriaGastoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoriaGastos.
     */
    data: CategoriaGastoCreateManyInput | CategoriaGastoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriaGasto createManyAndReturn
   */
  export type CategoriaGastoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * The data used to create many CategoriaGastos.
     */
    data: CategoriaGastoCreateManyInput | CategoriaGastoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriaGasto update
   */
  export type CategoriaGastoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaGastoInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoriaGasto.
     */
    data: XOR<CategoriaGastoUpdateInput, CategoriaGastoUncheckedUpdateInput>
    /**
     * Choose, which CategoriaGasto to update.
     */
    where: CategoriaGastoWhereUniqueInput
  }

  /**
   * CategoriaGasto updateMany
   */
  export type CategoriaGastoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoriaGastos.
     */
    data: XOR<CategoriaGastoUpdateManyMutationInput, CategoriaGastoUncheckedUpdateManyInput>
    /**
     * Filter which CategoriaGastos to update
     */
    where?: CategoriaGastoWhereInput
    /**
     * Limit how many CategoriaGastos to update.
     */
    limit?: number
  }

  /**
   * CategoriaGasto updateManyAndReturn
   */
  export type CategoriaGastoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * The data used to update CategoriaGastos.
     */
    data: XOR<CategoriaGastoUpdateManyMutationInput, CategoriaGastoUncheckedUpdateManyInput>
    /**
     * Filter which CategoriaGastos to update
     */
    where?: CategoriaGastoWhereInput
    /**
     * Limit how many CategoriaGastos to update.
     */
    limit?: number
  }

  /**
   * CategoriaGasto upsert
   */
  export type CategoriaGastoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaGastoInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoriaGasto to update in case it exists.
     */
    where: CategoriaGastoWhereUniqueInput
    /**
     * In case the CategoriaGasto found by the `where` argument doesn't exist, create a new CategoriaGasto with this data.
     */
    create: XOR<CategoriaGastoCreateInput, CategoriaGastoUncheckedCreateInput>
    /**
     * In case the CategoriaGasto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaGastoUpdateInput, CategoriaGastoUncheckedUpdateInput>
  }

  /**
   * CategoriaGasto delete
   */
  export type CategoriaGastoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaGastoInclude<ExtArgs> | null
    /**
     * Filter which CategoriaGasto to delete.
     */
    where: CategoriaGastoWhereUniqueInput
  }

  /**
   * CategoriaGasto deleteMany
   */
  export type CategoriaGastoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriaGastos to delete
     */
    where?: CategoriaGastoWhereInput
    /**
     * Limit how many CategoriaGastos to delete.
     */
    limit?: number
  }

  /**
   * CategoriaGasto.facturas
   */
  export type CategoriaGasto$facturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * CategoriaGasto without action
   */
  export type CategoriaGastoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaGasto
     */
    select?: CategoriaGastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaGasto
     */
    omit?: CategoriaGastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaGastoInclude<ExtArgs> | null
  }


  /**
   * Model TipoDocumento
   */

  export type AggregateTipoDocumento = {
    _count: TipoDocumentoCountAggregateOutputType | null
    _min: TipoDocumentoMinAggregateOutputType | null
    _max: TipoDocumentoMaxAggregateOutputType | null
  }

  export type TipoDocumentoMinAggregateOutputType = {
    id_tipo_documento: string | null
    nombre: string | null
  }

  export type TipoDocumentoMaxAggregateOutputType = {
    id_tipo_documento: string | null
    nombre: string | null
  }

  export type TipoDocumentoCountAggregateOutputType = {
    id_tipo_documento: number
    nombre: number
    _all: number
  }


  export type TipoDocumentoMinAggregateInputType = {
    id_tipo_documento?: true
    nombre?: true
  }

  export type TipoDocumentoMaxAggregateInputType = {
    id_tipo_documento?: true
    nombre?: true
  }

  export type TipoDocumentoCountAggregateInputType = {
    id_tipo_documento?: true
    nombre?: true
    _all?: true
  }

  export type TipoDocumentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDocumento to aggregate.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoDocumentos
    **/
    _count?: true | TipoDocumentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoDocumentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoDocumentoMaxAggregateInputType
  }

  export type GetTipoDocumentoAggregateType<T extends TipoDocumentoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoDocumento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoDocumento[P]>
      : GetScalarType<T[P], AggregateTipoDocumento[P]>
  }




  export type TipoDocumentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoDocumentoWhereInput
    orderBy?: TipoDocumentoOrderByWithAggregationInput | TipoDocumentoOrderByWithAggregationInput[]
    by: TipoDocumentoScalarFieldEnum[] | TipoDocumentoScalarFieldEnum
    having?: TipoDocumentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoDocumentoCountAggregateInputType | true
    _min?: TipoDocumentoMinAggregateInputType
    _max?: TipoDocumentoMaxAggregateInputType
  }

  export type TipoDocumentoGroupByOutputType = {
    id_tipo_documento: string
    nombre: string
    _count: TipoDocumentoCountAggregateOutputType | null
    _min: TipoDocumentoMinAggregateOutputType | null
    _max: TipoDocumentoMaxAggregateOutputType | null
  }

  type GetTipoDocumentoGroupByPayload<T extends TipoDocumentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoDocumentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoDocumentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoDocumentoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoDocumentoGroupByOutputType[P]>
        }
      >
    >


  export type TipoDocumentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_documento?: boolean
    nombre?: boolean
    facturas?: boolean | TipoDocumento$facturasArgs<ExtArgs>
    _count?: boolean | TipoDocumentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoDocumento"]>

  export type TipoDocumentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_documento?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["tipoDocumento"]>

  export type TipoDocumentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_documento?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["tipoDocumento"]>

  export type TipoDocumentoSelectScalar = {
    id_tipo_documento?: boolean
    nombre?: boolean
  }

  export type TipoDocumentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipo_documento" | "nombre", ExtArgs["result"]["tipoDocumento"]>
  export type TipoDocumentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | TipoDocumento$facturasArgs<ExtArgs>
    _count?: boolean | TipoDocumentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoDocumentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoDocumentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoDocumentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoDocumento"
    objects: {
      facturas: Prisma.$FacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo_documento: string
      nombre: string
    }, ExtArgs["result"]["tipoDocumento"]>
    composites: {}
  }

  type TipoDocumentoGetPayload<S extends boolean | null | undefined | TipoDocumentoDefaultArgs> = $Result.GetResult<Prisma.$TipoDocumentoPayload, S>

  type TipoDocumentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoDocumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoDocumentoCountAggregateInputType | true
    }

  export interface TipoDocumentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoDocumento'], meta: { name: 'TipoDocumento' } }
    /**
     * Find zero or one TipoDocumento that matches the filter.
     * @param {TipoDocumentoFindUniqueArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoDocumentoFindUniqueArgs>(args: SelectSubset<T, TipoDocumentoFindUniqueArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoDocumento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoDocumentoFindUniqueOrThrowArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoDocumentoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoDocumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoDocumento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoFindFirstArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoDocumentoFindFirstArgs>(args?: SelectSubset<T, TipoDocumentoFindFirstArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoDocumento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoFindFirstOrThrowArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoDocumentoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoDocumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoDocumentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoDocumentos
     * const tipoDocumentos = await prisma.tipoDocumento.findMany()
     * 
     * // Get first 10 TipoDocumentos
     * const tipoDocumentos = await prisma.tipoDocumento.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo_documento`
     * const tipoDocumentoWithId_tipo_documentoOnly = await prisma.tipoDocumento.findMany({ select: { id_tipo_documento: true } })
     * 
     */
    findMany<T extends TipoDocumentoFindManyArgs>(args?: SelectSubset<T, TipoDocumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoDocumento.
     * @param {TipoDocumentoCreateArgs} args - Arguments to create a TipoDocumento.
     * @example
     * // Create one TipoDocumento
     * const TipoDocumento = await prisma.tipoDocumento.create({
     *   data: {
     *     // ... data to create a TipoDocumento
     *   }
     * })
     * 
     */
    create<T extends TipoDocumentoCreateArgs>(args: SelectSubset<T, TipoDocumentoCreateArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoDocumentos.
     * @param {TipoDocumentoCreateManyArgs} args - Arguments to create many TipoDocumentos.
     * @example
     * // Create many TipoDocumentos
     * const tipoDocumento = await prisma.tipoDocumento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoDocumentoCreateManyArgs>(args?: SelectSubset<T, TipoDocumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoDocumentos and returns the data saved in the database.
     * @param {TipoDocumentoCreateManyAndReturnArgs} args - Arguments to create many TipoDocumentos.
     * @example
     * // Create many TipoDocumentos
     * const tipoDocumento = await prisma.tipoDocumento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoDocumentos and only return the `id_tipo_documento`
     * const tipoDocumentoWithId_tipo_documentoOnly = await prisma.tipoDocumento.createManyAndReturn({
     *   select: { id_tipo_documento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoDocumentoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoDocumentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoDocumento.
     * @param {TipoDocumentoDeleteArgs} args - Arguments to delete one TipoDocumento.
     * @example
     * // Delete one TipoDocumento
     * const TipoDocumento = await prisma.tipoDocumento.delete({
     *   where: {
     *     // ... filter to delete one TipoDocumento
     *   }
     * })
     * 
     */
    delete<T extends TipoDocumentoDeleteArgs>(args: SelectSubset<T, TipoDocumentoDeleteArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoDocumento.
     * @param {TipoDocumentoUpdateArgs} args - Arguments to update one TipoDocumento.
     * @example
     * // Update one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoDocumentoUpdateArgs>(args: SelectSubset<T, TipoDocumentoUpdateArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoDocumentos.
     * @param {TipoDocumentoDeleteManyArgs} args - Arguments to filter TipoDocumentos to delete.
     * @example
     * // Delete a few TipoDocumentos
     * const { count } = await prisma.tipoDocumento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoDocumentoDeleteManyArgs>(args?: SelectSubset<T, TipoDocumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoDocumentos
     * const tipoDocumento = await prisma.tipoDocumento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoDocumentoUpdateManyArgs>(args: SelectSubset<T, TipoDocumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoDocumentos and returns the data updated in the database.
     * @param {TipoDocumentoUpdateManyAndReturnArgs} args - Arguments to update many TipoDocumentos.
     * @example
     * // Update many TipoDocumentos
     * const tipoDocumento = await prisma.tipoDocumento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoDocumentos and only return the `id_tipo_documento`
     * const tipoDocumentoWithId_tipo_documentoOnly = await prisma.tipoDocumento.updateManyAndReturn({
     *   select: { id_tipo_documento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoDocumentoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoDocumentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoDocumento.
     * @param {TipoDocumentoUpsertArgs} args - Arguments to update or create a TipoDocumento.
     * @example
     * // Update or create a TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.upsert({
     *   create: {
     *     // ... data to create a TipoDocumento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoDocumento we want to update
     *   }
     * })
     */
    upsert<T extends TipoDocumentoUpsertArgs>(args: SelectSubset<T, TipoDocumentoUpsertArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoCountArgs} args - Arguments to filter TipoDocumentos to count.
     * @example
     * // Count the number of TipoDocumentos
     * const count = await prisma.tipoDocumento.count({
     *   where: {
     *     // ... the filter for the TipoDocumentos we want to count
     *   }
     * })
    **/
    count<T extends TipoDocumentoCountArgs>(
      args?: Subset<T, TipoDocumentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoDocumentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoDocumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoDocumentoAggregateArgs>(args: Subset<T, TipoDocumentoAggregateArgs>): Prisma.PrismaPromise<GetTipoDocumentoAggregateType<T>>

    /**
     * Group by TipoDocumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoDocumentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoDocumentoGroupByArgs['orderBy'] }
        : { orderBy?: TipoDocumentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoDocumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoDocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoDocumento model
   */
  readonly fields: TipoDocumentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoDocumento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoDocumentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facturas<T extends TipoDocumento$facturasArgs<ExtArgs> = {}>(args?: Subset<T, TipoDocumento$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoDocumento model
   */
  interface TipoDocumentoFieldRefs {
    readonly id_tipo_documento: FieldRef<"TipoDocumento", 'String'>
    readonly nombre: FieldRef<"TipoDocumento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoDocumento findUnique
   */
  export type TipoDocumentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where: TipoDocumentoWhereUniqueInput
  }

  /**
   * TipoDocumento findUniqueOrThrow
   */
  export type TipoDocumentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where: TipoDocumentoWhereUniqueInput
  }

  /**
   * TipoDocumento findFirst
   */
  export type TipoDocumentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDocumentos.
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDocumentos.
     */
    distinct?: TipoDocumentoScalarFieldEnum | TipoDocumentoScalarFieldEnum[]
  }

  /**
   * TipoDocumento findFirstOrThrow
   */
  export type TipoDocumentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDocumentos.
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDocumentos.
     */
    distinct?: TipoDocumentoScalarFieldEnum | TipoDocumentoScalarFieldEnum[]
  }

  /**
   * TipoDocumento findMany
   */
  export type TipoDocumentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter, which TipoDocumentos to fetch.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoDocumentos.
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDocumentos.
     */
    distinct?: TipoDocumentoScalarFieldEnum | TipoDocumentoScalarFieldEnum[]
  }

  /**
   * TipoDocumento create
   */
  export type TipoDocumentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoDocumento.
     */
    data: XOR<TipoDocumentoCreateInput, TipoDocumentoUncheckedCreateInput>
  }

  /**
   * TipoDocumento createMany
   */
  export type TipoDocumentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoDocumentos.
     */
    data: TipoDocumentoCreateManyInput | TipoDocumentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoDocumento createManyAndReturn
   */
  export type TipoDocumentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoDocumentos.
     */
    data: TipoDocumentoCreateManyInput | TipoDocumentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoDocumento update
   */
  export type TipoDocumentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoDocumento.
     */
    data: XOR<TipoDocumentoUpdateInput, TipoDocumentoUncheckedUpdateInput>
    /**
     * Choose, which TipoDocumento to update.
     */
    where: TipoDocumentoWhereUniqueInput
  }

  /**
   * TipoDocumento updateMany
   */
  export type TipoDocumentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoDocumentos.
     */
    data: XOR<TipoDocumentoUpdateManyMutationInput, TipoDocumentoUncheckedUpdateManyInput>
    /**
     * Filter which TipoDocumentos to update
     */
    where?: TipoDocumentoWhereInput
    /**
     * Limit how many TipoDocumentos to update.
     */
    limit?: number
  }

  /**
   * TipoDocumento updateManyAndReturn
   */
  export type TipoDocumentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * The data used to update TipoDocumentos.
     */
    data: XOR<TipoDocumentoUpdateManyMutationInput, TipoDocumentoUncheckedUpdateManyInput>
    /**
     * Filter which TipoDocumentos to update
     */
    where?: TipoDocumentoWhereInput
    /**
     * Limit how many TipoDocumentos to update.
     */
    limit?: number
  }

  /**
   * TipoDocumento upsert
   */
  export type TipoDocumentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoDocumento to update in case it exists.
     */
    where: TipoDocumentoWhereUniqueInput
    /**
     * In case the TipoDocumento found by the `where` argument doesn't exist, create a new TipoDocumento with this data.
     */
    create: XOR<TipoDocumentoCreateInput, TipoDocumentoUncheckedCreateInput>
    /**
     * In case the TipoDocumento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoDocumentoUpdateInput, TipoDocumentoUncheckedUpdateInput>
  }

  /**
   * TipoDocumento delete
   */
  export type TipoDocumentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter which TipoDocumento to delete.
     */
    where: TipoDocumentoWhereUniqueInput
  }

  /**
   * TipoDocumento deleteMany
   */
  export type TipoDocumentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDocumentos to delete
     */
    where?: TipoDocumentoWhereInput
    /**
     * Limit how many TipoDocumentos to delete.
     */
    limit?: number
  }

  /**
   * TipoDocumento.facturas
   */
  export type TipoDocumento$facturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * TipoDocumento without action
   */
  export type TipoDocumentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
  }


  /**
   * Model Factura
   */

  export type AggregateFactura = {
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  export type FacturaAvgAggregateOutputType = {
    monto: Decimal | null
  }

  export type FacturaSumAggregateOutputType = {
    monto: Decimal | null
  }

  export type FacturaMinAggregateOutputType = {
    id_factura: string | null
    fecha: Date | null
    proveedor: string | null
    monto: Decimal | null
    imagen: string | null
    id_empresa: string | null
    createdAt: Date | null
    updatedAt: Date | null
    id_tipo_gasto: string | null
    identificadorUsuario: string | null
    id_tipo_documento: string | null
  }

  export type FacturaMaxAggregateOutputType = {
    id_factura: string | null
    fecha: Date | null
    proveedor: string | null
    monto: Decimal | null
    imagen: string | null
    id_empresa: string | null
    createdAt: Date | null
    updatedAt: Date | null
    id_tipo_gasto: string | null
    identificadorUsuario: string | null
    id_tipo_documento: string | null
  }

  export type FacturaCountAggregateOutputType = {
    id_factura: number
    fecha: number
    proveedor: number
    monto: number
    imagen: number
    id_empresa: number
    createdAt: number
    updatedAt: number
    id_tipo_gasto: number
    identificadorUsuario: number
    id_tipo_documento: number
    _all: number
  }


  export type FacturaAvgAggregateInputType = {
    monto?: true
  }

  export type FacturaSumAggregateInputType = {
    monto?: true
  }

  export type FacturaMinAggregateInputType = {
    id_factura?: true
    fecha?: true
    proveedor?: true
    monto?: true
    imagen?: true
    id_empresa?: true
    createdAt?: true
    updatedAt?: true
    id_tipo_gasto?: true
    identificadorUsuario?: true
    id_tipo_documento?: true
  }

  export type FacturaMaxAggregateInputType = {
    id_factura?: true
    fecha?: true
    proveedor?: true
    monto?: true
    imagen?: true
    id_empresa?: true
    createdAt?: true
    updatedAt?: true
    id_tipo_gasto?: true
    identificadorUsuario?: true
    id_tipo_documento?: true
  }

  export type FacturaCountAggregateInputType = {
    id_factura?: true
    fecha?: true
    proveedor?: true
    monto?: true
    imagen?: true
    id_empresa?: true
    createdAt?: true
    updatedAt?: true
    id_tipo_gasto?: true
    identificadorUsuario?: true
    id_tipo_documento?: true
    _all?: true
  }

  export type FacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factura to aggregate.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facturas
    **/
    _count?: true | FacturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaMaxAggregateInputType
  }

  export type GetFacturaAggregateType<T extends FacturaAggregateArgs> = {
        [P in keyof T & keyof AggregateFactura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactura[P]>
      : GetScalarType<T[P], AggregateFactura[P]>
  }




  export type FacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithAggregationInput | FacturaOrderByWithAggregationInput[]
    by: FacturaScalarFieldEnum[] | FacturaScalarFieldEnum
    having?: FacturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaCountAggregateInputType | true
    _avg?: FacturaAvgAggregateInputType
    _sum?: FacturaSumAggregateInputType
    _min?: FacturaMinAggregateInputType
    _max?: FacturaMaxAggregateInputType
  }

  export type FacturaGroupByOutputType = {
    id_factura: string
    fecha: Date
    proveedor: string
    monto: Decimal
    imagen: string | null
    id_empresa: string | null
    createdAt: Date
    updatedAt: Date
    id_tipo_gasto: string
    identificadorUsuario: string
    id_tipo_documento: string | null
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  type GetFacturaGroupByPayload<T extends FacturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaGroupByOutputType[P]>
        }
      >
    >


  export type FacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_factura?: boolean
    fecha?: boolean
    proveedor?: boolean
    monto?: boolean
    imagen?: boolean
    id_empresa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id_tipo_gasto?: boolean
    identificadorUsuario?: boolean
    id_tipo_documento?: boolean
    categoriaGasto?: boolean | CategoriaGastoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tipoDocumento?: boolean | Factura$tipoDocumentoArgs<ExtArgs>
    facturasEnviadas?: boolean | Factura$facturasEnviadasArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_factura?: boolean
    fecha?: boolean
    proveedor?: boolean
    monto?: boolean
    imagen?: boolean
    id_empresa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id_tipo_gasto?: boolean
    identificadorUsuario?: boolean
    id_tipo_documento?: boolean
    categoriaGasto?: boolean | CategoriaGastoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tipoDocumento?: boolean | Factura$tipoDocumentoArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_factura?: boolean
    fecha?: boolean
    proveedor?: boolean
    monto?: boolean
    imagen?: boolean
    id_empresa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id_tipo_gasto?: boolean
    identificadorUsuario?: boolean
    id_tipo_documento?: boolean
    categoriaGasto?: boolean | CategoriaGastoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tipoDocumento?: boolean | Factura$tipoDocumentoArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectScalar = {
    id_factura?: boolean
    fecha?: boolean
    proveedor?: boolean
    monto?: boolean
    imagen?: boolean
    id_empresa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id_tipo_gasto?: boolean
    identificadorUsuario?: boolean
    id_tipo_documento?: boolean
  }

  export type FacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_factura" | "fecha" | "proveedor" | "monto" | "imagen" | "id_empresa" | "createdAt" | "updatedAt" | "id_tipo_gasto" | "identificadorUsuario" | "id_tipo_documento", ExtArgs["result"]["factura"]>
  export type FacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoriaGasto?: boolean | CategoriaGastoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tipoDocumento?: boolean | Factura$tipoDocumentoArgs<ExtArgs>
    facturasEnviadas?: boolean | Factura$facturasEnviadasArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoriaGasto?: boolean | CategoriaGastoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tipoDocumento?: boolean | Factura$tipoDocumentoArgs<ExtArgs>
  }
  export type FacturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoriaGasto?: boolean | CategoriaGastoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tipoDocumento?: boolean | Factura$tipoDocumentoArgs<ExtArgs>
  }

  export type $FacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Factura"
    objects: {
      categoriaGasto: Prisma.$CategoriaGastoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      tipoDocumento: Prisma.$TipoDocumentoPayload<ExtArgs> | null
      facturasEnviadas: Prisma.$FacturaEnviadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_factura: string
      fecha: Date
      proveedor: string
      monto: Prisma.Decimal
      imagen: string | null
      id_empresa: string | null
      createdAt: Date
      updatedAt: Date
      id_tipo_gasto: string
      identificadorUsuario: string
      id_tipo_documento: string | null
    }, ExtArgs["result"]["factura"]>
    composites: {}
  }

  type FacturaGetPayload<S extends boolean | null | undefined | FacturaDefaultArgs> = $Result.GetResult<Prisma.$FacturaPayload, S>

  type FacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaCountAggregateInputType | true
    }

  export interface FacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Factura'], meta: { name: 'Factura' } }
    /**
     * Find zero or one Factura that matches the filter.
     * @param {FacturaFindUniqueArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaFindUniqueArgs>(args: SelectSubset<T, FacturaFindUniqueArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaFindUniqueOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaFindFirstArgs>(args?: SelectSubset<T, FacturaFindFirstArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturas
     * const facturas = await prisma.factura.findMany()
     * 
     * // Get first 10 Facturas
     * const facturas = await prisma.factura.findMany({ take: 10 })
     * 
     * // Only select the `id_factura`
     * const facturaWithId_facturaOnly = await prisma.factura.findMany({ select: { id_factura: true } })
     * 
     */
    findMany<T extends FacturaFindManyArgs>(args?: SelectSubset<T, FacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Factura.
     * @param {FacturaCreateArgs} args - Arguments to create a Factura.
     * @example
     * // Create one Factura
     * const Factura = await prisma.factura.create({
     *   data: {
     *     // ... data to create a Factura
     *   }
     * })
     * 
     */
    create<T extends FacturaCreateArgs>(args: SelectSubset<T, FacturaCreateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facturas.
     * @param {FacturaCreateManyArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaCreateManyArgs>(args?: SelectSubset<T, FacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facturas and returns the data saved in the database.
     * @param {FacturaCreateManyAndReturnArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facturas and only return the `id_factura`
     * const facturaWithId_facturaOnly = await prisma.factura.createManyAndReturn({
     *   select: { id_factura: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacturaCreateManyAndReturnArgs>(args?: SelectSubset<T, FacturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Factura.
     * @param {FacturaDeleteArgs} args - Arguments to delete one Factura.
     * @example
     * // Delete one Factura
     * const Factura = await prisma.factura.delete({
     *   where: {
     *     // ... filter to delete one Factura
     *   }
     * })
     * 
     */
    delete<T extends FacturaDeleteArgs>(args: SelectSubset<T, FacturaDeleteArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Factura.
     * @param {FacturaUpdateArgs} args - Arguments to update one Factura.
     * @example
     * // Update one Factura
     * const factura = await prisma.factura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaUpdateArgs>(args: SelectSubset<T, FacturaUpdateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facturas.
     * @param {FacturaDeleteManyArgs} args - Arguments to filter Facturas to delete.
     * @example
     * // Delete a few Facturas
     * const { count } = await prisma.factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaDeleteManyArgs>(args?: SelectSubset<T, FacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaUpdateManyArgs>(args: SelectSubset<T, FacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas and returns the data updated in the database.
     * @param {FacturaUpdateManyAndReturnArgs} args - Arguments to update many Facturas.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facturas and only return the `id_factura`
     * const facturaWithId_facturaOnly = await prisma.factura.updateManyAndReturn({
     *   select: { id_factura: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacturaUpdateManyAndReturnArgs>(args: SelectSubset<T, FacturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Factura.
     * @param {FacturaUpsertArgs} args - Arguments to update or create a Factura.
     * @example
     * // Update or create a Factura
     * const factura = await prisma.factura.upsert({
     *   create: {
     *     // ... data to create a Factura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factura we want to update
     *   }
     * })
     */
    upsert<T extends FacturaUpsertArgs>(args: SelectSubset<T, FacturaUpsertArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCountArgs} args - Arguments to filter Facturas to count.
     * @example
     * // Count the number of Facturas
     * const count = await prisma.factura.count({
     *   where: {
     *     // ... the filter for the Facturas we want to count
     *   }
     * })
    **/
    count<T extends FacturaCountArgs>(
      args?: Subset<T, FacturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacturaAggregateArgs>(args: Subset<T, FacturaAggregateArgs>): Prisma.PrismaPromise<GetFacturaAggregateType<T>>

    /**
     * Group by Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaGroupByArgs['orderBy'] }
        : { orderBy?: FacturaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Factura model
   */
  readonly fields: FacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoriaGasto<T extends CategoriaGastoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaGastoDefaultArgs<ExtArgs>>): Prisma__CategoriaGastoClient<$Result.GetResult<Prisma.$CategoriaGastoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoDocumento<T extends Factura$tipoDocumentoArgs<ExtArgs> = {}>(args?: Subset<T, Factura$tipoDocumentoArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    facturasEnviadas<T extends Factura$facturasEnviadasArgs<ExtArgs> = {}>(args?: Subset<T, Factura$facturasEnviadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Factura model
   */
  interface FacturaFieldRefs {
    readonly id_factura: FieldRef<"Factura", 'String'>
    readonly fecha: FieldRef<"Factura", 'DateTime'>
    readonly proveedor: FieldRef<"Factura", 'String'>
    readonly monto: FieldRef<"Factura", 'Decimal'>
    readonly imagen: FieldRef<"Factura", 'String'>
    readonly id_empresa: FieldRef<"Factura", 'String'>
    readonly createdAt: FieldRef<"Factura", 'DateTime'>
    readonly updatedAt: FieldRef<"Factura", 'DateTime'>
    readonly id_tipo_gasto: FieldRef<"Factura", 'String'>
    readonly identificadorUsuario: FieldRef<"Factura", 'String'>
    readonly id_tipo_documento: FieldRef<"Factura", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Factura findUnique
   */
  export type FacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findUniqueOrThrow
   */
  export type FacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findFirst
   */
  export type FacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findFirstOrThrow
   */
  export type FacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findMany
   */
  export type FacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Facturas to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura create
   */
  export type FacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Factura.
     */
    data: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
  }

  /**
   * Factura createMany
   */
  export type FacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Factura createManyAndReturn
   */
  export type FacturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura update
   */
  export type FacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Factura.
     */
    data: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
    /**
     * Choose, which Factura to update.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura updateMany
   */
  export type FacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
  }

  /**
   * Factura updateManyAndReturn
   */
  export type FacturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura upsert
   */
  export type FacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Factura to update in case it exists.
     */
    where: FacturaWhereUniqueInput
    /**
     * In case the Factura found by the `where` argument doesn't exist, create a new Factura with this data.
     */
    create: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
    /**
     * In case the Factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
  }

  /**
   * Factura delete
   */
  export type FacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter which Factura to delete.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura deleteMany
   */
  export type FacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facturas to delete
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to delete.
     */
    limit?: number
  }

  /**
   * Factura.tipoDocumento
   */
  export type Factura$tipoDocumentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    where?: TipoDocumentoWhereInput
  }

  /**
   * Factura.facturasEnviadas
   */
  export type Factura$facturasEnviadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
    where?: FacturaEnviadaWhereInput
    orderBy?: FacturaEnviadaOrderByWithRelationInput | FacturaEnviadaOrderByWithRelationInput[]
    cursor?: FacturaEnviadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaEnviadaScalarFieldEnum | FacturaEnviadaScalarFieldEnum[]
  }

  /**
   * Factura without action
   */
  export type FacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
  }


  /**
   * Model DetalleEnvio
   */

  export type AggregateDetalleEnvio = {
    _count: DetalleEnvioCountAggregateOutputType | null
    _avg: DetalleEnvioAvgAggregateOutputType | null
    _sum: DetalleEnvioSumAggregateOutputType | null
    _min: DetalleEnvioMinAggregateOutputType | null
    _max: DetalleEnvioMaxAggregateOutputType | null
  }

  export type DetalleEnvioAvgAggregateOutputType = {
    contador: number | null
  }

  export type DetalleEnvioSumAggregateOutputType = {
    contador: number | null
  }

  export type DetalleEnvioMinAggregateOutputType = {
    id_detalle_envio: string | null
    timestamp: Date | null
    contador: number | null
    medio_envio: string | null
    estado: string | null
    id_usuario: string | null
  }

  export type DetalleEnvioMaxAggregateOutputType = {
    id_detalle_envio: string | null
    timestamp: Date | null
    contador: number | null
    medio_envio: string | null
    estado: string | null
    id_usuario: string | null
  }

  export type DetalleEnvioCountAggregateOutputType = {
    id_detalle_envio: number
    timestamp: number
    contador: number
    medio_envio: number
    estado: number
    id_usuario: number
    _all: number
  }


  export type DetalleEnvioAvgAggregateInputType = {
    contador?: true
  }

  export type DetalleEnvioSumAggregateInputType = {
    contador?: true
  }

  export type DetalleEnvioMinAggregateInputType = {
    id_detalle_envio?: true
    timestamp?: true
    contador?: true
    medio_envio?: true
    estado?: true
    id_usuario?: true
  }

  export type DetalleEnvioMaxAggregateInputType = {
    id_detalle_envio?: true
    timestamp?: true
    contador?: true
    medio_envio?: true
    estado?: true
    id_usuario?: true
  }

  export type DetalleEnvioCountAggregateInputType = {
    id_detalle_envio?: true
    timestamp?: true
    contador?: true
    medio_envio?: true
    estado?: true
    id_usuario?: true
    _all?: true
  }

  export type DetalleEnvioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleEnvio to aggregate.
     */
    where?: DetalleEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleEnvios to fetch.
     */
    orderBy?: DetalleEnvioOrderByWithRelationInput | DetalleEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleEnvios
    **/
    _count?: true | DetalleEnvioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleEnvioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleEnvioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleEnvioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleEnvioMaxAggregateInputType
  }

  export type GetDetalleEnvioAggregateType<T extends DetalleEnvioAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleEnvio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleEnvio[P]>
      : GetScalarType<T[P], AggregateDetalleEnvio[P]>
  }




  export type DetalleEnvioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleEnvioWhereInput
    orderBy?: DetalleEnvioOrderByWithAggregationInput | DetalleEnvioOrderByWithAggregationInput[]
    by: DetalleEnvioScalarFieldEnum[] | DetalleEnvioScalarFieldEnum
    having?: DetalleEnvioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleEnvioCountAggregateInputType | true
    _avg?: DetalleEnvioAvgAggregateInputType
    _sum?: DetalleEnvioSumAggregateInputType
    _min?: DetalleEnvioMinAggregateInputType
    _max?: DetalleEnvioMaxAggregateInputType
  }

  export type DetalleEnvioGroupByOutputType = {
    id_detalle_envio: string
    timestamp: Date
    contador: number
    medio_envio: string
    estado: string
    id_usuario: string
    _count: DetalleEnvioCountAggregateOutputType | null
    _avg: DetalleEnvioAvgAggregateOutputType | null
    _sum: DetalleEnvioSumAggregateOutputType | null
    _min: DetalleEnvioMinAggregateOutputType | null
    _max: DetalleEnvioMaxAggregateOutputType | null
  }

  type GetDetalleEnvioGroupByPayload<T extends DetalleEnvioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleEnvioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleEnvioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleEnvioGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleEnvioGroupByOutputType[P]>
        }
      >
    >


  export type DetalleEnvioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle_envio?: boolean
    timestamp?: boolean
    contador?: boolean
    medio_envio?: boolean
    estado?: boolean
    id_usuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    facturasEnviadas?: boolean | DetalleEnvio$facturasEnviadasArgs<ExtArgs>
    _count?: boolean | DetalleEnvioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleEnvio"]>

  export type DetalleEnvioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle_envio?: boolean
    timestamp?: boolean
    contador?: boolean
    medio_envio?: boolean
    estado?: boolean
    id_usuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleEnvio"]>

  export type DetalleEnvioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle_envio?: boolean
    timestamp?: boolean
    contador?: boolean
    medio_envio?: boolean
    estado?: boolean
    id_usuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleEnvio"]>

  export type DetalleEnvioSelectScalar = {
    id_detalle_envio?: boolean
    timestamp?: boolean
    contador?: boolean
    medio_envio?: boolean
    estado?: boolean
    id_usuario?: boolean
  }

  export type DetalleEnvioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_detalle_envio" | "timestamp" | "contador" | "medio_envio" | "estado" | "id_usuario", ExtArgs["result"]["detalleEnvio"]>
  export type DetalleEnvioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    facturasEnviadas?: boolean | DetalleEnvio$facturasEnviadasArgs<ExtArgs>
    _count?: boolean | DetalleEnvioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DetalleEnvioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type DetalleEnvioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $DetalleEnvioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleEnvio"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      facturasEnviadas: Prisma.$FacturaEnviadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_detalle_envio: string
      timestamp: Date
      contador: number
      medio_envio: string
      estado: string
      id_usuario: string
    }, ExtArgs["result"]["detalleEnvio"]>
    composites: {}
  }

  type DetalleEnvioGetPayload<S extends boolean | null | undefined | DetalleEnvioDefaultArgs> = $Result.GetResult<Prisma.$DetalleEnvioPayload, S>

  type DetalleEnvioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleEnvioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleEnvioCountAggregateInputType | true
    }

  export interface DetalleEnvioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleEnvio'], meta: { name: 'DetalleEnvio' } }
    /**
     * Find zero or one DetalleEnvio that matches the filter.
     * @param {DetalleEnvioFindUniqueArgs} args - Arguments to find a DetalleEnvio
     * @example
     * // Get one DetalleEnvio
     * const detalleEnvio = await prisma.detalleEnvio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleEnvioFindUniqueArgs>(args: SelectSubset<T, DetalleEnvioFindUniqueArgs<ExtArgs>>): Prisma__DetalleEnvioClient<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleEnvio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleEnvioFindUniqueOrThrowArgs} args - Arguments to find a DetalleEnvio
     * @example
     * // Get one DetalleEnvio
     * const detalleEnvio = await prisma.detalleEnvio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleEnvioFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleEnvioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleEnvioClient<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleEnvio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleEnvioFindFirstArgs} args - Arguments to find a DetalleEnvio
     * @example
     * // Get one DetalleEnvio
     * const detalleEnvio = await prisma.detalleEnvio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleEnvioFindFirstArgs>(args?: SelectSubset<T, DetalleEnvioFindFirstArgs<ExtArgs>>): Prisma__DetalleEnvioClient<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleEnvio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleEnvioFindFirstOrThrowArgs} args - Arguments to find a DetalleEnvio
     * @example
     * // Get one DetalleEnvio
     * const detalleEnvio = await prisma.detalleEnvio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleEnvioFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleEnvioFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleEnvioClient<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleEnvios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleEnvioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleEnvios
     * const detalleEnvios = await prisma.detalleEnvio.findMany()
     * 
     * // Get first 10 DetalleEnvios
     * const detalleEnvios = await prisma.detalleEnvio.findMany({ take: 10 })
     * 
     * // Only select the `id_detalle_envio`
     * const detalleEnvioWithId_detalle_envioOnly = await prisma.detalleEnvio.findMany({ select: { id_detalle_envio: true } })
     * 
     */
    findMany<T extends DetalleEnvioFindManyArgs>(args?: SelectSubset<T, DetalleEnvioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleEnvio.
     * @param {DetalleEnvioCreateArgs} args - Arguments to create a DetalleEnvio.
     * @example
     * // Create one DetalleEnvio
     * const DetalleEnvio = await prisma.detalleEnvio.create({
     *   data: {
     *     // ... data to create a DetalleEnvio
     *   }
     * })
     * 
     */
    create<T extends DetalleEnvioCreateArgs>(args: SelectSubset<T, DetalleEnvioCreateArgs<ExtArgs>>): Prisma__DetalleEnvioClient<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleEnvios.
     * @param {DetalleEnvioCreateManyArgs} args - Arguments to create many DetalleEnvios.
     * @example
     * // Create many DetalleEnvios
     * const detalleEnvio = await prisma.detalleEnvio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleEnvioCreateManyArgs>(args?: SelectSubset<T, DetalleEnvioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetalleEnvios and returns the data saved in the database.
     * @param {DetalleEnvioCreateManyAndReturnArgs} args - Arguments to create many DetalleEnvios.
     * @example
     * // Create many DetalleEnvios
     * const detalleEnvio = await prisma.detalleEnvio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetalleEnvios and only return the `id_detalle_envio`
     * const detalleEnvioWithId_detalle_envioOnly = await prisma.detalleEnvio.createManyAndReturn({
     *   select: { id_detalle_envio: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetalleEnvioCreateManyAndReturnArgs>(args?: SelectSubset<T, DetalleEnvioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetalleEnvio.
     * @param {DetalleEnvioDeleteArgs} args - Arguments to delete one DetalleEnvio.
     * @example
     * // Delete one DetalleEnvio
     * const DetalleEnvio = await prisma.detalleEnvio.delete({
     *   where: {
     *     // ... filter to delete one DetalleEnvio
     *   }
     * })
     * 
     */
    delete<T extends DetalleEnvioDeleteArgs>(args: SelectSubset<T, DetalleEnvioDeleteArgs<ExtArgs>>): Prisma__DetalleEnvioClient<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleEnvio.
     * @param {DetalleEnvioUpdateArgs} args - Arguments to update one DetalleEnvio.
     * @example
     * // Update one DetalleEnvio
     * const detalleEnvio = await prisma.detalleEnvio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleEnvioUpdateArgs>(args: SelectSubset<T, DetalleEnvioUpdateArgs<ExtArgs>>): Prisma__DetalleEnvioClient<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleEnvios.
     * @param {DetalleEnvioDeleteManyArgs} args - Arguments to filter DetalleEnvios to delete.
     * @example
     * // Delete a few DetalleEnvios
     * const { count } = await prisma.detalleEnvio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleEnvioDeleteManyArgs>(args?: SelectSubset<T, DetalleEnvioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleEnvios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleEnvioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleEnvios
     * const detalleEnvio = await prisma.detalleEnvio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleEnvioUpdateManyArgs>(args: SelectSubset<T, DetalleEnvioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleEnvios and returns the data updated in the database.
     * @param {DetalleEnvioUpdateManyAndReturnArgs} args - Arguments to update many DetalleEnvios.
     * @example
     * // Update many DetalleEnvios
     * const detalleEnvio = await prisma.detalleEnvio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetalleEnvios and only return the `id_detalle_envio`
     * const detalleEnvioWithId_detalle_envioOnly = await prisma.detalleEnvio.updateManyAndReturn({
     *   select: { id_detalle_envio: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetalleEnvioUpdateManyAndReturnArgs>(args: SelectSubset<T, DetalleEnvioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetalleEnvio.
     * @param {DetalleEnvioUpsertArgs} args - Arguments to update or create a DetalleEnvio.
     * @example
     * // Update or create a DetalleEnvio
     * const detalleEnvio = await prisma.detalleEnvio.upsert({
     *   create: {
     *     // ... data to create a DetalleEnvio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleEnvio we want to update
     *   }
     * })
     */
    upsert<T extends DetalleEnvioUpsertArgs>(args: SelectSubset<T, DetalleEnvioUpsertArgs<ExtArgs>>): Prisma__DetalleEnvioClient<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleEnvios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleEnvioCountArgs} args - Arguments to filter DetalleEnvios to count.
     * @example
     * // Count the number of DetalleEnvios
     * const count = await prisma.detalleEnvio.count({
     *   where: {
     *     // ... the filter for the DetalleEnvios we want to count
     *   }
     * })
    **/
    count<T extends DetalleEnvioCountArgs>(
      args?: Subset<T, DetalleEnvioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleEnvioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleEnvio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleEnvioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleEnvioAggregateArgs>(args: Subset<T, DetalleEnvioAggregateArgs>): Prisma.PrismaPromise<GetDetalleEnvioAggregateType<T>>

    /**
     * Group by DetalleEnvio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleEnvioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalleEnvioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleEnvioGroupByArgs['orderBy'] }
        : { orderBy?: DetalleEnvioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalleEnvioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleEnvioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleEnvio model
   */
  readonly fields: DetalleEnvioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleEnvio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleEnvioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facturasEnviadas<T extends DetalleEnvio$facturasEnviadasArgs<ExtArgs> = {}>(args?: Subset<T, DetalleEnvio$facturasEnviadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetalleEnvio model
   */
  interface DetalleEnvioFieldRefs {
    readonly id_detalle_envio: FieldRef<"DetalleEnvio", 'String'>
    readonly timestamp: FieldRef<"DetalleEnvio", 'DateTime'>
    readonly contador: FieldRef<"DetalleEnvio", 'Int'>
    readonly medio_envio: FieldRef<"DetalleEnvio", 'String'>
    readonly estado: FieldRef<"DetalleEnvio", 'String'>
    readonly id_usuario: FieldRef<"DetalleEnvio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DetalleEnvio findUnique
   */
  export type DetalleEnvioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioInclude<ExtArgs> | null
    /**
     * Filter, which DetalleEnvio to fetch.
     */
    where: DetalleEnvioWhereUniqueInput
  }

  /**
   * DetalleEnvio findUniqueOrThrow
   */
  export type DetalleEnvioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioInclude<ExtArgs> | null
    /**
     * Filter, which DetalleEnvio to fetch.
     */
    where: DetalleEnvioWhereUniqueInput
  }

  /**
   * DetalleEnvio findFirst
   */
  export type DetalleEnvioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioInclude<ExtArgs> | null
    /**
     * Filter, which DetalleEnvio to fetch.
     */
    where?: DetalleEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleEnvios to fetch.
     */
    orderBy?: DetalleEnvioOrderByWithRelationInput | DetalleEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleEnvios.
     */
    cursor?: DetalleEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleEnvios.
     */
    distinct?: DetalleEnvioScalarFieldEnum | DetalleEnvioScalarFieldEnum[]
  }

  /**
   * DetalleEnvio findFirstOrThrow
   */
  export type DetalleEnvioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioInclude<ExtArgs> | null
    /**
     * Filter, which DetalleEnvio to fetch.
     */
    where?: DetalleEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleEnvios to fetch.
     */
    orderBy?: DetalleEnvioOrderByWithRelationInput | DetalleEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleEnvios.
     */
    cursor?: DetalleEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleEnvios.
     */
    distinct?: DetalleEnvioScalarFieldEnum | DetalleEnvioScalarFieldEnum[]
  }

  /**
   * DetalleEnvio findMany
   */
  export type DetalleEnvioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioInclude<ExtArgs> | null
    /**
     * Filter, which DetalleEnvios to fetch.
     */
    where?: DetalleEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleEnvios to fetch.
     */
    orderBy?: DetalleEnvioOrderByWithRelationInput | DetalleEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleEnvios.
     */
    cursor?: DetalleEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleEnvios.
     */
    distinct?: DetalleEnvioScalarFieldEnum | DetalleEnvioScalarFieldEnum[]
  }

  /**
   * DetalleEnvio create
   */
  export type DetalleEnvioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleEnvio.
     */
    data: XOR<DetalleEnvioCreateInput, DetalleEnvioUncheckedCreateInput>
  }

  /**
   * DetalleEnvio createMany
   */
  export type DetalleEnvioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleEnvios.
     */
    data: DetalleEnvioCreateManyInput | DetalleEnvioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleEnvio createManyAndReturn
   */
  export type DetalleEnvioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * The data used to create many DetalleEnvios.
     */
    data: DetalleEnvioCreateManyInput | DetalleEnvioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleEnvio update
   */
  export type DetalleEnvioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleEnvio.
     */
    data: XOR<DetalleEnvioUpdateInput, DetalleEnvioUncheckedUpdateInput>
    /**
     * Choose, which DetalleEnvio to update.
     */
    where: DetalleEnvioWhereUniqueInput
  }

  /**
   * DetalleEnvio updateMany
   */
  export type DetalleEnvioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleEnvios.
     */
    data: XOR<DetalleEnvioUpdateManyMutationInput, DetalleEnvioUncheckedUpdateManyInput>
    /**
     * Filter which DetalleEnvios to update
     */
    where?: DetalleEnvioWhereInput
    /**
     * Limit how many DetalleEnvios to update.
     */
    limit?: number
  }

  /**
   * DetalleEnvio updateManyAndReturn
   */
  export type DetalleEnvioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * The data used to update DetalleEnvios.
     */
    data: XOR<DetalleEnvioUpdateManyMutationInput, DetalleEnvioUncheckedUpdateManyInput>
    /**
     * Filter which DetalleEnvios to update
     */
    where?: DetalleEnvioWhereInput
    /**
     * Limit how many DetalleEnvios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleEnvio upsert
   */
  export type DetalleEnvioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleEnvio to update in case it exists.
     */
    where: DetalleEnvioWhereUniqueInput
    /**
     * In case the DetalleEnvio found by the `where` argument doesn't exist, create a new DetalleEnvio with this data.
     */
    create: XOR<DetalleEnvioCreateInput, DetalleEnvioUncheckedCreateInput>
    /**
     * In case the DetalleEnvio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleEnvioUpdateInput, DetalleEnvioUncheckedUpdateInput>
  }

  /**
   * DetalleEnvio delete
   */
  export type DetalleEnvioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioInclude<ExtArgs> | null
    /**
     * Filter which DetalleEnvio to delete.
     */
    where: DetalleEnvioWhereUniqueInput
  }

  /**
   * DetalleEnvio deleteMany
   */
  export type DetalleEnvioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleEnvios to delete
     */
    where?: DetalleEnvioWhereInput
    /**
     * Limit how many DetalleEnvios to delete.
     */
    limit?: number
  }

  /**
   * DetalleEnvio.facturasEnviadas
   */
  export type DetalleEnvio$facturasEnviadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
    where?: FacturaEnviadaWhereInput
    orderBy?: FacturaEnviadaOrderByWithRelationInput | FacturaEnviadaOrderByWithRelationInput[]
    cursor?: FacturaEnviadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaEnviadaScalarFieldEnum | FacturaEnviadaScalarFieldEnum[]
  }

  /**
   * DetalleEnvio without action
   */
  export type DetalleEnvioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleEnvio
     */
    select?: DetalleEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleEnvio
     */
    omit?: DetalleEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleEnvioInclude<ExtArgs> | null
  }


  /**
   * Model FacturaEnviada
   */

  export type AggregateFacturaEnviada = {
    _count: FacturaEnviadaCountAggregateOutputType | null
    _min: FacturaEnviadaMinAggregateOutputType | null
    _max: FacturaEnviadaMaxAggregateOutputType | null
  }

  export type FacturaEnviadaMinAggregateOutputType = {
    id: string | null
    id_factura: string | null
    id_detalle_envio: string | null
  }

  export type FacturaEnviadaMaxAggregateOutputType = {
    id: string | null
    id_factura: string | null
    id_detalle_envio: string | null
  }

  export type FacturaEnviadaCountAggregateOutputType = {
    id: number
    id_factura: number
    id_detalle_envio: number
    _all: number
  }


  export type FacturaEnviadaMinAggregateInputType = {
    id?: true
    id_factura?: true
    id_detalle_envio?: true
  }

  export type FacturaEnviadaMaxAggregateInputType = {
    id?: true
    id_factura?: true
    id_detalle_envio?: true
  }

  export type FacturaEnviadaCountAggregateInputType = {
    id?: true
    id_factura?: true
    id_detalle_envio?: true
    _all?: true
  }

  export type FacturaEnviadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacturaEnviada to aggregate.
     */
    where?: FacturaEnviadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaEnviadas to fetch.
     */
    orderBy?: FacturaEnviadaOrderByWithRelationInput | FacturaEnviadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaEnviadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaEnviadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaEnviadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacturaEnviadas
    **/
    _count?: true | FacturaEnviadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaEnviadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaEnviadaMaxAggregateInputType
  }

  export type GetFacturaEnviadaAggregateType<T extends FacturaEnviadaAggregateArgs> = {
        [P in keyof T & keyof AggregateFacturaEnviada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacturaEnviada[P]>
      : GetScalarType<T[P], AggregateFacturaEnviada[P]>
  }




  export type FacturaEnviadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaEnviadaWhereInput
    orderBy?: FacturaEnviadaOrderByWithAggregationInput | FacturaEnviadaOrderByWithAggregationInput[]
    by: FacturaEnviadaScalarFieldEnum[] | FacturaEnviadaScalarFieldEnum
    having?: FacturaEnviadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaEnviadaCountAggregateInputType | true
    _min?: FacturaEnviadaMinAggregateInputType
    _max?: FacturaEnviadaMaxAggregateInputType
  }

  export type FacturaEnviadaGroupByOutputType = {
    id: string
    id_factura: string
    id_detalle_envio: string
    _count: FacturaEnviadaCountAggregateOutputType | null
    _min: FacturaEnviadaMinAggregateOutputType | null
    _max: FacturaEnviadaMaxAggregateOutputType | null
  }

  type GetFacturaEnviadaGroupByPayload<T extends FacturaEnviadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaEnviadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaEnviadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaEnviadaGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaEnviadaGroupByOutputType[P]>
        }
      >
    >


  export type FacturaEnviadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_factura?: boolean
    id_detalle_envio?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    detalleEnvio?: boolean | DetalleEnvioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facturaEnviada"]>

  export type FacturaEnviadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_factura?: boolean
    id_detalle_envio?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    detalleEnvio?: boolean | DetalleEnvioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facturaEnviada"]>

  export type FacturaEnviadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_factura?: boolean
    id_detalle_envio?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    detalleEnvio?: boolean | DetalleEnvioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facturaEnviada"]>

  export type FacturaEnviadaSelectScalar = {
    id?: boolean
    id_factura?: boolean
    id_detalle_envio?: boolean
  }

  export type FacturaEnviadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_factura" | "id_detalle_envio", ExtArgs["result"]["facturaEnviada"]>
  export type FacturaEnviadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    detalleEnvio?: boolean | DetalleEnvioDefaultArgs<ExtArgs>
  }
  export type FacturaEnviadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    detalleEnvio?: boolean | DetalleEnvioDefaultArgs<ExtArgs>
  }
  export type FacturaEnviadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    detalleEnvio?: boolean | DetalleEnvioDefaultArgs<ExtArgs>
  }

  export type $FacturaEnviadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacturaEnviada"
    objects: {
      factura: Prisma.$FacturaPayload<ExtArgs>
      detalleEnvio: Prisma.$DetalleEnvioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_factura: string
      id_detalle_envio: string
    }, ExtArgs["result"]["facturaEnviada"]>
    composites: {}
  }

  type FacturaEnviadaGetPayload<S extends boolean | null | undefined | FacturaEnviadaDefaultArgs> = $Result.GetResult<Prisma.$FacturaEnviadaPayload, S>

  type FacturaEnviadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaEnviadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaEnviadaCountAggregateInputType | true
    }

  export interface FacturaEnviadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacturaEnviada'], meta: { name: 'FacturaEnviada' } }
    /**
     * Find zero or one FacturaEnviada that matches the filter.
     * @param {FacturaEnviadaFindUniqueArgs} args - Arguments to find a FacturaEnviada
     * @example
     * // Get one FacturaEnviada
     * const facturaEnviada = await prisma.facturaEnviada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaEnviadaFindUniqueArgs>(args: SelectSubset<T, FacturaEnviadaFindUniqueArgs<ExtArgs>>): Prisma__FacturaEnviadaClient<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacturaEnviada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaEnviadaFindUniqueOrThrowArgs} args - Arguments to find a FacturaEnviada
     * @example
     * // Get one FacturaEnviada
     * const facturaEnviada = await prisma.facturaEnviada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaEnviadaFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaEnviadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaEnviadaClient<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacturaEnviada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaEnviadaFindFirstArgs} args - Arguments to find a FacturaEnviada
     * @example
     * // Get one FacturaEnviada
     * const facturaEnviada = await prisma.facturaEnviada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaEnviadaFindFirstArgs>(args?: SelectSubset<T, FacturaEnviadaFindFirstArgs<ExtArgs>>): Prisma__FacturaEnviadaClient<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacturaEnviada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaEnviadaFindFirstOrThrowArgs} args - Arguments to find a FacturaEnviada
     * @example
     * // Get one FacturaEnviada
     * const facturaEnviada = await prisma.facturaEnviada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaEnviadaFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaEnviadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaEnviadaClient<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacturaEnviadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaEnviadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacturaEnviadas
     * const facturaEnviadas = await prisma.facturaEnviada.findMany()
     * 
     * // Get first 10 FacturaEnviadas
     * const facturaEnviadas = await prisma.facturaEnviada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facturaEnviadaWithIdOnly = await prisma.facturaEnviada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacturaEnviadaFindManyArgs>(args?: SelectSubset<T, FacturaEnviadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacturaEnviada.
     * @param {FacturaEnviadaCreateArgs} args - Arguments to create a FacturaEnviada.
     * @example
     * // Create one FacturaEnviada
     * const FacturaEnviada = await prisma.facturaEnviada.create({
     *   data: {
     *     // ... data to create a FacturaEnviada
     *   }
     * })
     * 
     */
    create<T extends FacturaEnviadaCreateArgs>(args: SelectSubset<T, FacturaEnviadaCreateArgs<ExtArgs>>): Prisma__FacturaEnviadaClient<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacturaEnviadas.
     * @param {FacturaEnviadaCreateManyArgs} args - Arguments to create many FacturaEnviadas.
     * @example
     * // Create many FacturaEnviadas
     * const facturaEnviada = await prisma.facturaEnviada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaEnviadaCreateManyArgs>(args?: SelectSubset<T, FacturaEnviadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacturaEnviadas and returns the data saved in the database.
     * @param {FacturaEnviadaCreateManyAndReturnArgs} args - Arguments to create many FacturaEnviadas.
     * @example
     * // Create many FacturaEnviadas
     * const facturaEnviada = await prisma.facturaEnviada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacturaEnviadas and only return the `id`
     * const facturaEnviadaWithIdOnly = await prisma.facturaEnviada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacturaEnviadaCreateManyAndReturnArgs>(args?: SelectSubset<T, FacturaEnviadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacturaEnviada.
     * @param {FacturaEnviadaDeleteArgs} args - Arguments to delete one FacturaEnviada.
     * @example
     * // Delete one FacturaEnviada
     * const FacturaEnviada = await prisma.facturaEnviada.delete({
     *   where: {
     *     // ... filter to delete one FacturaEnviada
     *   }
     * })
     * 
     */
    delete<T extends FacturaEnviadaDeleteArgs>(args: SelectSubset<T, FacturaEnviadaDeleteArgs<ExtArgs>>): Prisma__FacturaEnviadaClient<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacturaEnviada.
     * @param {FacturaEnviadaUpdateArgs} args - Arguments to update one FacturaEnviada.
     * @example
     * // Update one FacturaEnviada
     * const facturaEnviada = await prisma.facturaEnviada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaEnviadaUpdateArgs>(args: SelectSubset<T, FacturaEnviadaUpdateArgs<ExtArgs>>): Prisma__FacturaEnviadaClient<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacturaEnviadas.
     * @param {FacturaEnviadaDeleteManyArgs} args - Arguments to filter FacturaEnviadas to delete.
     * @example
     * // Delete a few FacturaEnviadas
     * const { count } = await prisma.facturaEnviada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaEnviadaDeleteManyArgs>(args?: SelectSubset<T, FacturaEnviadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacturaEnviadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaEnviadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacturaEnviadas
     * const facturaEnviada = await prisma.facturaEnviada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaEnviadaUpdateManyArgs>(args: SelectSubset<T, FacturaEnviadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacturaEnviadas and returns the data updated in the database.
     * @param {FacturaEnviadaUpdateManyAndReturnArgs} args - Arguments to update many FacturaEnviadas.
     * @example
     * // Update many FacturaEnviadas
     * const facturaEnviada = await prisma.facturaEnviada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacturaEnviadas and only return the `id`
     * const facturaEnviadaWithIdOnly = await prisma.facturaEnviada.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacturaEnviadaUpdateManyAndReturnArgs>(args: SelectSubset<T, FacturaEnviadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacturaEnviada.
     * @param {FacturaEnviadaUpsertArgs} args - Arguments to update or create a FacturaEnviada.
     * @example
     * // Update or create a FacturaEnviada
     * const facturaEnviada = await prisma.facturaEnviada.upsert({
     *   create: {
     *     // ... data to create a FacturaEnviada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacturaEnviada we want to update
     *   }
     * })
     */
    upsert<T extends FacturaEnviadaUpsertArgs>(args: SelectSubset<T, FacturaEnviadaUpsertArgs<ExtArgs>>): Prisma__FacturaEnviadaClient<$Result.GetResult<Prisma.$FacturaEnviadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacturaEnviadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaEnviadaCountArgs} args - Arguments to filter FacturaEnviadas to count.
     * @example
     * // Count the number of FacturaEnviadas
     * const count = await prisma.facturaEnviada.count({
     *   where: {
     *     // ... the filter for the FacturaEnviadas we want to count
     *   }
     * })
    **/
    count<T extends FacturaEnviadaCountArgs>(
      args?: Subset<T, FacturaEnviadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaEnviadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacturaEnviada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaEnviadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacturaEnviadaAggregateArgs>(args: Subset<T, FacturaEnviadaAggregateArgs>): Prisma.PrismaPromise<GetFacturaEnviadaAggregateType<T>>

    /**
     * Group by FacturaEnviada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaEnviadaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacturaEnviadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaEnviadaGroupByArgs['orderBy'] }
        : { orderBy?: FacturaEnviadaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacturaEnviadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaEnviadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacturaEnviada model
   */
  readonly fields: FacturaEnviadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacturaEnviada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaEnviadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factura<T extends FacturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacturaDefaultArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalleEnvio<T extends DetalleEnvioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetalleEnvioDefaultArgs<ExtArgs>>): Prisma__DetalleEnvioClient<$Result.GetResult<Prisma.$DetalleEnvioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacturaEnviada model
   */
  interface FacturaEnviadaFieldRefs {
    readonly id: FieldRef<"FacturaEnviada", 'String'>
    readonly id_factura: FieldRef<"FacturaEnviada", 'String'>
    readonly id_detalle_envio: FieldRef<"FacturaEnviada", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FacturaEnviada findUnique
   */
  export type FacturaEnviadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
    /**
     * Filter, which FacturaEnviada to fetch.
     */
    where: FacturaEnviadaWhereUniqueInput
  }

  /**
   * FacturaEnviada findUniqueOrThrow
   */
  export type FacturaEnviadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
    /**
     * Filter, which FacturaEnviada to fetch.
     */
    where: FacturaEnviadaWhereUniqueInput
  }

  /**
   * FacturaEnviada findFirst
   */
  export type FacturaEnviadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
    /**
     * Filter, which FacturaEnviada to fetch.
     */
    where?: FacturaEnviadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaEnviadas to fetch.
     */
    orderBy?: FacturaEnviadaOrderByWithRelationInput | FacturaEnviadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacturaEnviadas.
     */
    cursor?: FacturaEnviadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaEnviadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaEnviadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacturaEnviadas.
     */
    distinct?: FacturaEnviadaScalarFieldEnum | FacturaEnviadaScalarFieldEnum[]
  }

  /**
   * FacturaEnviada findFirstOrThrow
   */
  export type FacturaEnviadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
    /**
     * Filter, which FacturaEnviada to fetch.
     */
    where?: FacturaEnviadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaEnviadas to fetch.
     */
    orderBy?: FacturaEnviadaOrderByWithRelationInput | FacturaEnviadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacturaEnviadas.
     */
    cursor?: FacturaEnviadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaEnviadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaEnviadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacturaEnviadas.
     */
    distinct?: FacturaEnviadaScalarFieldEnum | FacturaEnviadaScalarFieldEnum[]
  }

  /**
   * FacturaEnviada findMany
   */
  export type FacturaEnviadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
    /**
     * Filter, which FacturaEnviadas to fetch.
     */
    where?: FacturaEnviadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaEnviadas to fetch.
     */
    orderBy?: FacturaEnviadaOrderByWithRelationInput | FacturaEnviadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacturaEnviadas.
     */
    cursor?: FacturaEnviadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaEnviadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaEnviadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacturaEnviadas.
     */
    distinct?: FacturaEnviadaScalarFieldEnum | FacturaEnviadaScalarFieldEnum[]
  }

  /**
   * FacturaEnviada create
   */
  export type FacturaEnviadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
    /**
     * The data needed to create a FacturaEnviada.
     */
    data: XOR<FacturaEnviadaCreateInput, FacturaEnviadaUncheckedCreateInput>
  }

  /**
   * FacturaEnviada createMany
   */
  export type FacturaEnviadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacturaEnviadas.
     */
    data: FacturaEnviadaCreateManyInput | FacturaEnviadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacturaEnviada createManyAndReturn
   */
  export type FacturaEnviadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * The data used to create many FacturaEnviadas.
     */
    data: FacturaEnviadaCreateManyInput | FacturaEnviadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacturaEnviada update
   */
  export type FacturaEnviadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
    /**
     * The data needed to update a FacturaEnviada.
     */
    data: XOR<FacturaEnviadaUpdateInput, FacturaEnviadaUncheckedUpdateInput>
    /**
     * Choose, which FacturaEnviada to update.
     */
    where: FacturaEnviadaWhereUniqueInput
  }

  /**
   * FacturaEnviada updateMany
   */
  export type FacturaEnviadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacturaEnviadas.
     */
    data: XOR<FacturaEnviadaUpdateManyMutationInput, FacturaEnviadaUncheckedUpdateManyInput>
    /**
     * Filter which FacturaEnviadas to update
     */
    where?: FacturaEnviadaWhereInput
    /**
     * Limit how many FacturaEnviadas to update.
     */
    limit?: number
  }

  /**
   * FacturaEnviada updateManyAndReturn
   */
  export type FacturaEnviadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * The data used to update FacturaEnviadas.
     */
    data: XOR<FacturaEnviadaUpdateManyMutationInput, FacturaEnviadaUncheckedUpdateManyInput>
    /**
     * Filter which FacturaEnviadas to update
     */
    where?: FacturaEnviadaWhereInput
    /**
     * Limit how many FacturaEnviadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacturaEnviada upsert
   */
  export type FacturaEnviadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
    /**
     * The filter to search for the FacturaEnviada to update in case it exists.
     */
    where: FacturaEnviadaWhereUniqueInput
    /**
     * In case the FacturaEnviada found by the `where` argument doesn't exist, create a new FacturaEnviada with this data.
     */
    create: XOR<FacturaEnviadaCreateInput, FacturaEnviadaUncheckedCreateInput>
    /**
     * In case the FacturaEnviada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaEnviadaUpdateInput, FacturaEnviadaUncheckedUpdateInput>
  }

  /**
   * FacturaEnviada delete
   */
  export type FacturaEnviadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
    /**
     * Filter which FacturaEnviada to delete.
     */
    where: FacturaEnviadaWhereUniqueInput
  }

  /**
   * FacturaEnviada deleteMany
   */
  export type FacturaEnviadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacturaEnviadas to delete
     */
    where?: FacturaEnviadaWhereInput
    /**
     * Limit how many FacturaEnviadas to delete.
     */
    limit?: number
  }

  /**
   * FacturaEnviada without action
   */
  export type FacturaEnviadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaEnviada
     */
    select?: FacturaEnviadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaEnviada
     */
    omit?: FacturaEnviadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaEnviadaInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    correo: 'correo',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    estado: 'estado'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CategoriaGastoScalarFieldEnum: {
    id_categoria_gasto: 'id_categoria_gasto',
    nombre: 'nombre',
    description: 'description'
  };

  export type CategoriaGastoScalarFieldEnum = (typeof CategoriaGastoScalarFieldEnum)[keyof typeof CategoriaGastoScalarFieldEnum]


  export const TipoDocumentoScalarFieldEnum: {
    id_tipo_documento: 'id_tipo_documento',
    nombre: 'nombre'
  };

  export type TipoDocumentoScalarFieldEnum = (typeof TipoDocumentoScalarFieldEnum)[keyof typeof TipoDocumentoScalarFieldEnum]


  export const FacturaScalarFieldEnum: {
    id_factura: 'id_factura',
    fecha: 'fecha',
    proveedor: 'proveedor',
    monto: 'monto',
    imagen: 'imagen',
    id_empresa: 'id_empresa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id_tipo_gasto: 'id_tipo_gasto',
    identificadorUsuario: 'identificadorUsuario',
    id_tipo_documento: 'id_tipo_documento'
  };

  export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum]


  export const DetalleEnvioScalarFieldEnum: {
    id_detalle_envio: 'id_detalle_envio',
    timestamp: 'timestamp',
    contador: 'contador',
    medio_envio: 'medio_envio',
    estado: 'estado',
    id_usuario: 'id_usuario'
  };

  export type DetalleEnvioScalarFieldEnum = (typeof DetalleEnvioScalarFieldEnum)[keyof typeof DetalleEnvioScalarFieldEnum]


  export const FacturaEnviadaScalarFieldEnum: {
    id: 'id',
    id_factura: 'id_factura',
    id_detalle_envio: 'id_detalle_envio'
  };

  export type FacturaEnviadaScalarFieldEnum = (typeof FacturaEnviadaScalarFieldEnum)[keyof typeof FacturaEnviadaScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    estado?: BoolFilter<"Usuario"> | boolean
    facturas?: FacturaListRelationFilter
    detalleEnvios?: DetalleEnvioListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estado?: SortOrder
    facturas?: FacturaOrderByRelationAggregateInput
    detalleEnvios?: DetalleEnvioOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: string
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    estado?: BoolFilter<"Usuario"> | boolean
    facturas?: FacturaListRelationFilter
    detalleEnvios?: DetalleEnvioListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id_usuario" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estado?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    estado?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type CategoriaGastoWhereInput = {
    AND?: CategoriaGastoWhereInput | CategoriaGastoWhereInput[]
    OR?: CategoriaGastoWhereInput[]
    NOT?: CategoriaGastoWhereInput | CategoriaGastoWhereInput[]
    id_categoria_gasto?: StringFilter<"CategoriaGasto"> | string
    nombre?: StringFilter<"CategoriaGasto"> | string
    description?: StringNullableFilter<"CategoriaGasto"> | string | null
    facturas?: FacturaListRelationFilter
  }

  export type CategoriaGastoOrderByWithRelationInput = {
    id_categoria_gasto?: SortOrder
    nombre?: SortOrder
    description?: SortOrderInput | SortOrder
    facturas?: FacturaOrderByRelationAggregateInput
  }

  export type CategoriaGastoWhereUniqueInput = Prisma.AtLeast<{
    id_categoria_gasto?: string
    nombre?: string
    AND?: CategoriaGastoWhereInput | CategoriaGastoWhereInput[]
    OR?: CategoriaGastoWhereInput[]
    NOT?: CategoriaGastoWhereInput | CategoriaGastoWhereInput[]
    description?: StringNullableFilter<"CategoriaGasto"> | string | null
    facturas?: FacturaListRelationFilter
  }, "id_categoria_gasto" | "nombre">

  export type CategoriaGastoOrderByWithAggregationInput = {
    id_categoria_gasto?: SortOrder
    nombre?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: CategoriaGastoCountOrderByAggregateInput
    _max?: CategoriaGastoMaxOrderByAggregateInput
    _min?: CategoriaGastoMinOrderByAggregateInput
  }

  export type CategoriaGastoScalarWhereWithAggregatesInput = {
    AND?: CategoriaGastoScalarWhereWithAggregatesInput | CategoriaGastoScalarWhereWithAggregatesInput[]
    OR?: CategoriaGastoScalarWhereWithAggregatesInput[]
    NOT?: CategoriaGastoScalarWhereWithAggregatesInput | CategoriaGastoScalarWhereWithAggregatesInput[]
    id_categoria_gasto?: StringWithAggregatesFilter<"CategoriaGasto"> | string
    nombre?: StringWithAggregatesFilter<"CategoriaGasto"> | string
    description?: StringNullableWithAggregatesFilter<"CategoriaGasto"> | string | null
  }

  export type TipoDocumentoWhereInput = {
    AND?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    OR?: TipoDocumentoWhereInput[]
    NOT?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    id_tipo_documento?: StringFilter<"TipoDocumento"> | string
    nombre?: StringFilter<"TipoDocumento"> | string
    facturas?: FacturaListRelationFilter
  }

  export type TipoDocumentoOrderByWithRelationInput = {
    id_tipo_documento?: SortOrder
    nombre?: SortOrder
    facturas?: FacturaOrderByRelationAggregateInput
  }

  export type TipoDocumentoWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_documento?: string
    nombre?: string
    AND?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    OR?: TipoDocumentoWhereInput[]
    NOT?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    facturas?: FacturaListRelationFilter
  }, "id_tipo_documento" | "nombre">

  export type TipoDocumentoOrderByWithAggregationInput = {
    id_tipo_documento?: SortOrder
    nombre?: SortOrder
    _count?: TipoDocumentoCountOrderByAggregateInput
    _max?: TipoDocumentoMaxOrderByAggregateInput
    _min?: TipoDocumentoMinOrderByAggregateInput
  }

  export type TipoDocumentoScalarWhereWithAggregatesInput = {
    AND?: TipoDocumentoScalarWhereWithAggregatesInput | TipoDocumentoScalarWhereWithAggregatesInput[]
    OR?: TipoDocumentoScalarWhereWithAggregatesInput[]
    NOT?: TipoDocumentoScalarWhereWithAggregatesInput | TipoDocumentoScalarWhereWithAggregatesInput[]
    id_tipo_documento?: StringWithAggregatesFilter<"TipoDocumento"> | string
    nombre?: StringWithAggregatesFilter<"TipoDocumento"> | string
  }

  export type FacturaWhereInput = {
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    id_factura?: StringFilter<"Factura"> | string
    fecha?: DateTimeFilter<"Factura"> | Date | string
    proveedor?: StringFilter<"Factura"> | string
    monto?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    imagen?: StringNullableFilter<"Factura"> | string | null
    id_empresa?: StringNullableFilter<"Factura"> | string | null
    createdAt?: DateTimeFilter<"Factura"> | Date | string
    updatedAt?: DateTimeFilter<"Factura"> | Date | string
    id_tipo_gasto?: StringFilter<"Factura"> | string
    identificadorUsuario?: StringFilter<"Factura"> | string
    id_tipo_documento?: StringNullableFilter<"Factura"> | string | null
    categoriaGasto?: XOR<CategoriaGastoScalarRelationFilter, CategoriaGastoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    tipoDocumento?: XOR<TipoDocumentoNullableScalarRelationFilter, TipoDocumentoWhereInput> | null
    facturasEnviadas?: FacturaEnviadaListRelationFilter
  }

  export type FacturaOrderByWithRelationInput = {
    id_factura?: SortOrder
    fecha?: SortOrder
    proveedor?: SortOrder
    monto?: SortOrder
    imagen?: SortOrderInput | SortOrder
    id_empresa?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id_tipo_gasto?: SortOrder
    identificadorUsuario?: SortOrder
    id_tipo_documento?: SortOrderInput | SortOrder
    categoriaGasto?: CategoriaGastoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    tipoDocumento?: TipoDocumentoOrderByWithRelationInput
    facturasEnviadas?: FacturaEnviadaOrderByRelationAggregateInput
  }

  export type FacturaWhereUniqueInput = Prisma.AtLeast<{
    id_factura?: string
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    fecha?: DateTimeFilter<"Factura"> | Date | string
    proveedor?: StringFilter<"Factura"> | string
    monto?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    imagen?: StringNullableFilter<"Factura"> | string | null
    id_empresa?: StringNullableFilter<"Factura"> | string | null
    createdAt?: DateTimeFilter<"Factura"> | Date | string
    updatedAt?: DateTimeFilter<"Factura"> | Date | string
    id_tipo_gasto?: StringFilter<"Factura"> | string
    identificadorUsuario?: StringFilter<"Factura"> | string
    id_tipo_documento?: StringNullableFilter<"Factura"> | string | null
    categoriaGasto?: XOR<CategoriaGastoScalarRelationFilter, CategoriaGastoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    tipoDocumento?: XOR<TipoDocumentoNullableScalarRelationFilter, TipoDocumentoWhereInput> | null
    facturasEnviadas?: FacturaEnviadaListRelationFilter
  }, "id_factura">

  export type FacturaOrderByWithAggregationInput = {
    id_factura?: SortOrder
    fecha?: SortOrder
    proveedor?: SortOrder
    monto?: SortOrder
    imagen?: SortOrderInput | SortOrder
    id_empresa?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id_tipo_gasto?: SortOrder
    identificadorUsuario?: SortOrder
    id_tipo_documento?: SortOrderInput | SortOrder
    _count?: FacturaCountOrderByAggregateInput
    _avg?: FacturaAvgOrderByAggregateInput
    _max?: FacturaMaxOrderByAggregateInput
    _min?: FacturaMinOrderByAggregateInput
    _sum?: FacturaSumOrderByAggregateInput
  }

  export type FacturaScalarWhereWithAggregatesInput = {
    AND?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    OR?: FacturaScalarWhereWithAggregatesInput[]
    NOT?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    id_factura?: StringWithAggregatesFilter<"Factura"> | string
    fecha?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
    proveedor?: StringWithAggregatesFilter<"Factura"> | string
    monto?: DecimalWithAggregatesFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    imagen?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    id_empresa?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
    id_tipo_gasto?: StringWithAggregatesFilter<"Factura"> | string
    identificadorUsuario?: StringWithAggregatesFilter<"Factura"> | string
    id_tipo_documento?: StringNullableWithAggregatesFilter<"Factura"> | string | null
  }

  export type DetalleEnvioWhereInput = {
    AND?: DetalleEnvioWhereInput | DetalleEnvioWhereInput[]
    OR?: DetalleEnvioWhereInput[]
    NOT?: DetalleEnvioWhereInput | DetalleEnvioWhereInput[]
    id_detalle_envio?: StringFilter<"DetalleEnvio"> | string
    timestamp?: DateTimeFilter<"DetalleEnvio"> | Date | string
    contador?: IntFilter<"DetalleEnvio"> | number
    medio_envio?: StringFilter<"DetalleEnvio"> | string
    estado?: StringFilter<"DetalleEnvio"> | string
    id_usuario?: StringFilter<"DetalleEnvio"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    facturasEnviadas?: FacturaEnviadaListRelationFilter
  }

  export type DetalleEnvioOrderByWithRelationInput = {
    id_detalle_envio?: SortOrder
    timestamp?: SortOrder
    contador?: SortOrder
    medio_envio?: SortOrder
    estado?: SortOrder
    id_usuario?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    facturasEnviadas?: FacturaEnviadaOrderByRelationAggregateInput
  }

  export type DetalleEnvioWhereUniqueInput = Prisma.AtLeast<{
    id_detalle_envio?: string
    AND?: DetalleEnvioWhereInput | DetalleEnvioWhereInput[]
    OR?: DetalleEnvioWhereInput[]
    NOT?: DetalleEnvioWhereInput | DetalleEnvioWhereInput[]
    timestamp?: DateTimeFilter<"DetalleEnvio"> | Date | string
    contador?: IntFilter<"DetalleEnvio"> | number
    medio_envio?: StringFilter<"DetalleEnvio"> | string
    estado?: StringFilter<"DetalleEnvio"> | string
    id_usuario?: StringFilter<"DetalleEnvio"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    facturasEnviadas?: FacturaEnviadaListRelationFilter
  }, "id_detalle_envio">

  export type DetalleEnvioOrderByWithAggregationInput = {
    id_detalle_envio?: SortOrder
    timestamp?: SortOrder
    contador?: SortOrder
    medio_envio?: SortOrder
    estado?: SortOrder
    id_usuario?: SortOrder
    _count?: DetalleEnvioCountOrderByAggregateInput
    _avg?: DetalleEnvioAvgOrderByAggregateInput
    _max?: DetalleEnvioMaxOrderByAggregateInput
    _min?: DetalleEnvioMinOrderByAggregateInput
    _sum?: DetalleEnvioSumOrderByAggregateInput
  }

  export type DetalleEnvioScalarWhereWithAggregatesInput = {
    AND?: DetalleEnvioScalarWhereWithAggregatesInput | DetalleEnvioScalarWhereWithAggregatesInput[]
    OR?: DetalleEnvioScalarWhereWithAggregatesInput[]
    NOT?: DetalleEnvioScalarWhereWithAggregatesInput | DetalleEnvioScalarWhereWithAggregatesInput[]
    id_detalle_envio?: StringWithAggregatesFilter<"DetalleEnvio"> | string
    timestamp?: DateTimeWithAggregatesFilter<"DetalleEnvio"> | Date | string
    contador?: IntWithAggregatesFilter<"DetalleEnvio"> | number
    medio_envio?: StringWithAggregatesFilter<"DetalleEnvio"> | string
    estado?: StringWithAggregatesFilter<"DetalleEnvio"> | string
    id_usuario?: StringWithAggregatesFilter<"DetalleEnvio"> | string
  }

  export type FacturaEnviadaWhereInput = {
    AND?: FacturaEnviadaWhereInput | FacturaEnviadaWhereInput[]
    OR?: FacturaEnviadaWhereInput[]
    NOT?: FacturaEnviadaWhereInput | FacturaEnviadaWhereInput[]
    id?: StringFilter<"FacturaEnviada"> | string
    id_factura?: StringFilter<"FacturaEnviada"> | string
    id_detalle_envio?: StringFilter<"FacturaEnviada"> | string
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
    detalleEnvio?: XOR<DetalleEnvioScalarRelationFilter, DetalleEnvioWhereInput>
  }

  export type FacturaEnviadaOrderByWithRelationInput = {
    id?: SortOrder
    id_factura?: SortOrder
    id_detalle_envio?: SortOrder
    factura?: FacturaOrderByWithRelationInput
    detalleEnvio?: DetalleEnvioOrderByWithRelationInput
  }

  export type FacturaEnviadaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    id_factura_id_detalle_envio?: FacturaEnviadaId_facturaId_detalle_envioCompoundUniqueInput
    AND?: FacturaEnviadaWhereInput | FacturaEnviadaWhereInput[]
    OR?: FacturaEnviadaWhereInput[]
    NOT?: FacturaEnviadaWhereInput | FacturaEnviadaWhereInput[]
    id_factura?: StringFilter<"FacturaEnviada"> | string
    id_detalle_envio?: StringFilter<"FacturaEnviada"> | string
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
    detalleEnvio?: XOR<DetalleEnvioScalarRelationFilter, DetalleEnvioWhereInput>
  }, "id" | "id_factura_id_detalle_envio">

  export type FacturaEnviadaOrderByWithAggregationInput = {
    id?: SortOrder
    id_factura?: SortOrder
    id_detalle_envio?: SortOrder
    _count?: FacturaEnviadaCountOrderByAggregateInput
    _max?: FacturaEnviadaMaxOrderByAggregateInput
    _min?: FacturaEnviadaMinOrderByAggregateInput
  }

  export type FacturaEnviadaScalarWhereWithAggregatesInput = {
    AND?: FacturaEnviadaScalarWhereWithAggregatesInput | FacturaEnviadaScalarWhereWithAggregatesInput[]
    OR?: FacturaEnviadaScalarWhereWithAggregatesInput[]
    NOT?: FacturaEnviadaScalarWhereWithAggregatesInput | FacturaEnviadaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacturaEnviada"> | string
    id_factura?: StringWithAggregatesFilter<"FacturaEnviada"> | string
    id_detalle_envio?: StringWithAggregatesFilter<"FacturaEnviada"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UsuarioOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UsuarioOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UsuarioCreateInput = {
    id_usuario?: string
    correo: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estado?: boolean
    facturas?: FacturaCreateNestedManyWithoutUsuarioInput
    detalleEnvios?: DetalleEnvioCreateNestedManyWithoutUsuarioInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: string
    correo: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estado?: boolean
    facturas?: FacturaUncheckedCreateNestedManyWithoutUsuarioInput
    detalleEnvios?: DetalleEnvioUncheckedCreateNestedManyWithoutUsuarioInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    facturas?: FacturaUpdateManyWithoutUsuarioNestedInput
    detalleEnvios?: DetalleEnvioUpdateManyWithoutUsuarioNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    facturas?: FacturaUncheckedUpdateManyWithoutUsuarioNestedInput
    detalleEnvios?: DetalleEnvioUncheckedUpdateManyWithoutUsuarioNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: string
    correo: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estado?: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriaGastoCreateInput = {
    id_categoria_gasto?: string
    nombre: string
    description?: string | null
    facturas?: FacturaCreateNestedManyWithoutCategoriaGastoInput
  }

  export type CategoriaGastoUncheckedCreateInput = {
    id_categoria_gasto?: string
    nombre: string
    description?: string | null
    facturas?: FacturaUncheckedCreateNestedManyWithoutCategoriaGastoInput
  }

  export type CategoriaGastoUpdateInput = {
    id_categoria_gasto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facturas?: FacturaUpdateManyWithoutCategoriaGastoNestedInput
  }

  export type CategoriaGastoUncheckedUpdateInput = {
    id_categoria_gasto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facturas?: FacturaUncheckedUpdateManyWithoutCategoriaGastoNestedInput
  }

  export type CategoriaGastoCreateManyInput = {
    id_categoria_gasto?: string
    nombre: string
    description?: string | null
  }

  export type CategoriaGastoUpdateManyMutationInput = {
    id_categoria_gasto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaGastoUncheckedUpdateManyInput = {
    id_categoria_gasto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TipoDocumentoCreateInput = {
    id_tipo_documento?: string
    nombre: string
    facturas?: FacturaCreateNestedManyWithoutTipoDocumentoInput
  }

  export type TipoDocumentoUncheckedCreateInput = {
    id_tipo_documento?: string
    nombre: string
    facturas?: FacturaUncheckedCreateNestedManyWithoutTipoDocumentoInput
  }

  export type TipoDocumentoUpdateInput = {
    id_tipo_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    facturas?: FacturaUpdateManyWithoutTipoDocumentoNestedInput
  }

  export type TipoDocumentoUncheckedUpdateInput = {
    id_tipo_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    facturas?: FacturaUncheckedUpdateManyWithoutTipoDocumentoNestedInput
  }

  export type TipoDocumentoCreateManyInput = {
    id_tipo_documento?: string
    nombre: string
  }

  export type TipoDocumentoUpdateManyMutationInput = {
    id_tipo_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TipoDocumentoUncheckedUpdateManyInput = {
    id_tipo_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type FacturaCreateInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaGasto: CategoriaGastoCreateNestedOneWithoutFacturasInput
    usuario: UsuarioCreateNestedOneWithoutFacturasInput
    tipoDocumento?: TipoDocumentoCreateNestedOneWithoutFacturasInput
    facturasEnviadas?: FacturaEnviadaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id_tipo_gasto: string
    identificadorUsuario: string
    id_tipo_documento?: string | null
    facturasEnviadas?: FacturaEnviadaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUpdateInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaGasto?: CategoriaGastoUpdateOneRequiredWithoutFacturasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFacturasNestedInput
    tipoDocumento?: TipoDocumentoUpdateOneWithoutFacturasNestedInput
    facturasEnviadas?: FacturaEnviadaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tipo_gasto?: StringFieldUpdateOperationsInput | string
    identificadorUsuario?: StringFieldUpdateOperationsInput | string
    id_tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
    facturasEnviadas?: FacturaEnviadaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaCreateManyInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id_tipo_gasto: string
    identificadorUsuario: string
    id_tipo_documento?: string | null
  }

  export type FacturaUpdateManyMutationInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaUncheckedUpdateManyInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tipo_gasto?: StringFieldUpdateOperationsInput | string
    identificadorUsuario?: StringFieldUpdateOperationsInput | string
    id_tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetalleEnvioCreateInput = {
    id_detalle_envio?: string
    timestamp?: Date | string
    contador?: number
    medio_envio: string
    estado?: string
    usuario: UsuarioCreateNestedOneWithoutDetalleEnviosInput
    facturasEnviadas?: FacturaEnviadaCreateNestedManyWithoutDetalleEnvioInput
  }

  export type DetalleEnvioUncheckedCreateInput = {
    id_detalle_envio?: string
    timestamp?: Date | string
    contador?: number
    medio_envio: string
    estado?: string
    id_usuario: string
    facturasEnviadas?: FacturaEnviadaUncheckedCreateNestedManyWithoutDetalleEnvioInput
  }

  export type DetalleEnvioUpdateInput = {
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: IntFieldUpdateOperationsInput | number
    medio_envio?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutDetalleEnviosNestedInput
    facturasEnviadas?: FacturaEnviadaUpdateManyWithoutDetalleEnvioNestedInput
  }

  export type DetalleEnvioUncheckedUpdateInput = {
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: IntFieldUpdateOperationsInput | number
    medio_envio?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    facturasEnviadas?: FacturaEnviadaUncheckedUpdateManyWithoutDetalleEnvioNestedInput
  }

  export type DetalleEnvioCreateManyInput = {
    id_detalle_envio?: string
    timestamp?: Date | string
    contador?: number
    medio_envio: string
    estado?: string
    id_usuario: string
  }

  export type DetalleEnvioUpdateManyMutationInput = {
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: IntFieldUpdateOperationsInput | number
    medio_envio?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type DetalleEnvioUncheckedUpdateManyInput = {
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: IntFieldUpdateOperationsInput | number
    medio_envio?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type FacturaEnviadaCreateInput = {
    id?: string
    factura: FacturaCreateNestedOneWithoutFacturasEnviadasInput
    detalleEnvio: DetalleEnvioCreateNestedOneWithoutFacturasEnviadasInput
  }

  export type FacturaEnviadaUncheckedCreateInput = {
    id?: string
    id_factura: string
    id_detalle_envio: string
  }

  export type FacturaEnviadaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    factura?: FacturaUpdateOneRequiredWithoutFacturasEnviadasNestedInput
    detalleEnvio?: DetalleEnvioUpdateOneRequiredWithoutFacturasEnviadasNestedInput
  }

  export type FacturaEnviadaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_factura?: StringFieldUpdateOperationsInput | string
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
  }

  export type FacturaEnviadaCreateManyInput = {
    id?: string
    id_factura: string
    id_detalle_envio: string
  }

  export type FacturaEnviadaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FacturaEnviadaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_factura?: StringFieldUpdateOperationsInput | string
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UsuarioCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsuarioUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UsuarioCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FacturaListRelationFilter = {
    every?: FacturaWhereInput
    some?: FacturaWhereInput
    none?: FacturaWhereInput
  }

  export type DetalleEnvioListRelationFilter = {
    every?: DetalleEnvioWhereInput
    some?: DetalleEnvioWhereInput
    none?: DetalleEnvioWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type FacturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetalleEnvioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estado?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estado?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estado?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoriaGastoCountOrderByAggregateInput = {
    id_categoria_gasto?: SortOrder
    nombre?: SortOrder
    description?: SortOrder
  }

  export type CategoriaGastoMaxOrderByAggregateInput = {
    id_categoria_gasto?: SortOrder
    nombre?: SortOrder
    description?: SortOrder
  }

  export type CategoriaGastoMinOrderByAggregateInput = {
    id_categoria_gasto?: SortOrder
    nombre?: SortOrder
    description?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TipoDocumentoCountOrderByAggregateInput = {
    id_tipo_documento?: SortOrder
    nombre?: SortOrder
  }

  export type TipoDocumentoMaxOrderByAggregateInput = {
    id_tipo_documento?: SortOrder
    nombre?: SortOrder
  }

  export type TipoDocumentoMinOrderByAggregateInput = {
    id_tipo_documento?: SortOrder
    nombre?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoriaGastoScalarRelationFilter = {
    is?: CategoriaGastoWhereInput
    isNot?: CategoriaGastoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type TipoDocumentoNullableScalarRelationFilter = {
    is?: TipoDocumentoWhereInput | null
    isNot?: TipoDocumentoWhereInput | null
  }

  export type FacturaEnviadaListRelationFilter = {
    every?: FacturaEnviadaWhereInput
    some?: FacturaEnviadaWhereInput
    none?: FacturaEnviadaWhereInput
  }

  export type FacturaEnviadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacturaCountOrderByAggregateInput = {
    id_factura?: SortOrder
    fecha?: SortOrder
    proveedor?: SortOrder
    monto?: SortOrder
    imagen?: SortOrder
    id_empresa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id_tipo_gasto?: SortOrder
    identificadorUsuario?: SortOrder
    id_tipo_documento?: SortOrder
  }

  export type FacturaAvgOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type FacturaMaxOrderByAggregateInput = {
    id_factura?: SortOrder
    fecha?: SortOrder
    proveedor?: SortOrder
    monto?: SortOrder
    imagen?: SortOrder
    id_empresa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id_tipo_gasto?: SortOrder
    identificadorUsuario?: SortOrder
    id_tipo_documento?: SortOrder
  }

  export type FacturaMinOrderByAggregateInput = {
    id_factura?: SortOrder
    fecha?: SortOrder
    proveedor?: SortOrder
    monto?: SortOrder
    imagen?: SortOrder
    id_empresa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id_tipo_gasto?: SortOrder
    identificadorUsuario?: SortOrder
    id_tipo_documento?: SortOrder
  }

  export type FacturaSumOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DetalleEnvioCountOrderByAggregateInput = {
    id_detalle_envio?: SortOrder
    timestamp?: SortOrder
    contador?: SortOrder
    medio_envio?: SortOrder
    estado?: SortOrder
    id_usuario?: SortOrder
  }

  export type DetalleEnvioAvgOrderByAggregateInput = {
    contador?: SortOrder
  }

  export type DetalleEnvioMaxOrderByAggregateInput = {
    id_detalle_envio?: SortOrder
    timestamp?: SortOrder
    contador?: SortOrder
    medio_envio?: SortOrder
    estado?: SortOrder
    id_usuario?: SortOrder
  }

  export type DetalleEnvioMinOrderByAggregateInput = {
    id_detalle_envio?: SortOrder
    timestamp?: SortOrder
    contador?: SortOrder
    medio_envio?: SortOrder
    estado?: SortOrder
    id_usuario?: SortOrder
  }

  export type DetalleEnvioSumOrderByAggregateInput = {
    contador?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FacturaScalarRelationFilter = {
    is?: FacturaWhereInput
    isNot?: FacturaWhereInput
  }

  export type DetalleEnvioScalarRelationFilter = {
    is?: DetalleEnvioWhereInput
    isNot?: DetalleEnvioWhereInput
  }

  export type FacturaEnviadaId_facturaId_detalle_envioCompoundUniqueInput = {
    id_factura: string
    id_detalle_envio: string
  }

  export type FacturaEnviadaCountOrderByAggregateInput = {
    id?: SortOrder
    id_factura?: SortOrder
    id_detalle_envio?: SortOrder
  }

  export type FacturaEnviadaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_factura?: SortOrder
    id_detalle_envio?: SortOrder
  }

  export type FacturaEnviadaMinOrderByAggregateInput = {
    id?: SortOrder
    id_factura?: SortOrder
    id_detalle_envio?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type FacturaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput> | FacturaCreateWithoutUsuarioInput[] | FacturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutUsuarioInput | FacturaCreateOrConnectWithoutUsuarioInput[]
    createMany?: FacturaCreateManyUsuarioInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type DetalleEnvioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DetalleEnvioCreateWithoutUsuarioInput, DetalleEnvioUncheckedCreateWithoutUsuarioInput> | DetalleEnvioCreateWithoutUsuarioInput[] | DetalleEnvioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DetalleEnvioCreateOrConnectWithoutUsuarioInput | DetalleEnvioCreateOrConnectWithoutUsuarioInput[]
    createMany?: DetalleEnvioCreateManyUsuarioInputEnvelope
    connect?: DetalleEnvioWhereUniqueInput | DetalleEnvioWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput> | FacturaCreateWithoutUsuarioInput[] | FacturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutUsuarioInput | FacturaCreateOrConnectWithoutUsuarioInput[]
    createMany?: FacturaCreateManyUsuarioInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type DetalleEnvioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DetalleEnvioCreateWithoutUsuarioInput, DetalleEnvioUncheckedCreateWithoutUsuarioInput> | DetalleEnvioCreateWithoutUsuarioInput[] | DetalleEnvioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DetalleEnvioCreateOrConnectWithoutUsuarioInput | DetalleEnvioCreateOrConnectWithoutUsuarioInput[]
    createMany?: DetalleEnvioCreateManyUsuarioInputEnvelope
    connect?: DetalleEnvioWhereUniqueInput | DetalleEnvioWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FacturaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput> | FacturaCreateWithoutUsuarioInput[] | FacturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutUsuarioInput | FacturaCreateOrConnectWithoutUsuarioInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutUsuarioInput | FacturaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FacturaCreateManyUsuarioInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutUsuarioInput | FacturaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutUsuarioInput | FacturaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type DetalleEnvioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DetalleEnvioCreateWithoutUsuarioInput, DetalleEnvioUncheckedCreateWithoutUsuarioInput> | DetalleEnvioCreateWithoutUsuarioInput[] | DetalleEnvioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DetalleEnvioCreateOrConnectWithoutUsuarioInput | DetalleEnvioCreateOrConnectWithoutUsuarioInput[]
    upsert?: DetalleEnvioUpsertWithWhereUniqueWithoutUsuarioInput | DetalleEnvioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DetalleEnvioCreateManyUsuarioInputEnvelope
    set?: DetalleEnvioWhereUniqueInput | DetalleEnvioWhereUniqueInput[]
    disconnect?: DetalleEnvioWhereUniqueInput | DetalleEnvioWhereUniqueInput[]
    delete?: DetalleEnvioWhereUniqueInput | DetalleEnvioWhereUniqueInput[]
    connect?: DetalleEnvioWhereUniqueInput | DetalleEnvioWhereUniqueInput[]
    update?: DetalleEnvioUpdateWithWhereUniqueWithoutUsuarioInput | DetalleEnvioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DetalleEnvioUpdateManyWithWhereWithoutUsuarioInput | DetalleEnvioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DetalleEnvioScalarWhereInput | DetalleEnvioScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type FacturaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput> | FacturaCreateWithoutUsuarioInput[] | FacturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutUsuarioInput | FacturaCreateOrConnectWithoutUsuarioInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutUsuarioInput | FacturaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FacturaCreateManyUsuarioInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutUsuarioInput | FacturaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutUsuarioInput | FacturaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type DetalleEnvioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DetalleEnvioCreateWithoutUsuarioInput, DetalleEnvioUncheckedCreateWithoutUsuarioInput> | DetalleEnvioCreateWithoutUsuarioInput[] | DetalleEnvioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DetalleEnvioCreateOrConnectWithoutUsuarioInput | DetalleEnvioCreateOrConnectWithoutUsuarioInput[]
    upsert?: DetalleEnvioUpsertWithWhereUniqueWithoutUsuarioInput | DetalleEnvioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DetalleEnvioCreateManyUsuarioInputEnvelope
    set?: DetalleEnvioWhereUniqueInput | DetalleEnvioWhereUniqueInput[]
    disconnect?: DetalleEnvioWhereUniqueInput | DetalleEnvioWhereUniqueInput[]
    delete?: DetalleEnvioWhereUniqueInput | DetalleEnvioWhereUniqueInput[]
    connect?: DetalleEnvioWhereUniqueInput | DetalleEnvioWhereUniqueInput[]
    update?: DetalleEnvioUpdateWithWhereUniqueWithoutUsuarioInput | DetalleEnvioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DetalleEnvioUpdateManyWithWhereWithoutUsuarioInput | DetalleEnvioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DetalleEnvioScalarWhereInput | DetalleEnvioScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type FacturaCreateNestedManyWithoutCategoriaGastoInput = {
    create?: XOR<FacturaCreateWithoutCategoriaGastoInput, FacturaUncheckedCreateWithoutCategoriaGastoInput> | FacturaCreateWithoutCategoriaGastoInput[] | FacturaUncheckedCreateWithoutCategoriaGastoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCategoriaGastoInput | FacturaCreateOrConnectWithoutCategoriaGastoInput[]
    createMany?: FacturaCreateManyCategoriaGastoInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedManyWithoutCategoriaGastoInput = {
    create?: XOR<FacturaCreateWithoutCategoriaGastoInput, FacturaUncheckedCreateWithoutCategoriaGastoInput> | FacturaCreateWithoutCategoriaGastoInput[] | FacturaUncheckedCreateWithoutCategoriaGastoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCategoriaGastoInput | FacturaCreateOrConnectWithoutCategoriaGastoInput[]
    createMany?: FacturaCreateManyCategoriaGastoInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FacturaUpdateManyWithoutCategoriaGastoNestedInput = {
    create?: XOR<FacturaCreateWithoutCategoriaGastoInput, FacturaUncheckedCreateWithoutCategoriaGastoInput> | FacturaCreateWithoutCategoriaGastoInput[] | FacturaUncheckedCreateWithoutCategoriaGastoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCategoriaGastoInput | FacturaCreateOrConnectWithoutCategoriaGastoInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutCategoriaGastoInput | FacturaUpsertWithWhereUniqueWithoutCategoriaGastoInput[]
    createMany?: FacturaCreateManyCategoriaGastoInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutCategoriaGastoInput | FacturaUpdateWithWhereUniqueWithoutCategoriaGastoInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutCategoriaGastoInput | FacturaUpdateManyWithWhereWithoutCategoriaGastoInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type FacturaUncheckedUpdateManyWithoutCategoriaGastoNestedInput = {
    create?: XOR<FacturaCreateWithoutCategoriaGastoInput, FacturaUncheckedCreateWithoutCategoriaGastoInput> | FacturaCreateWithoutCategoriaGastoInput[] | FacturaUncheckedCreateWithoutCategoriaGastoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCategoriaGastoInput | FacturaCreateOrConnectWithoutCategoriaGastoInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutCategoriaGastoInput | FacturaUpsertWithWhereUniqueWithoutCategoriaGastoInput[]
    createMany?: FacturaCreateManyCategoriaGastoInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutCategoriaGastoInput | FacturaUpdateWithWhereUniqueWithoutCategoriaGastoInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutCategoriaGastoInput | FacturaUpdateManyWithWhereWithoutCategoriaGastoInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type FacturaCreateNestedManyWithoutTipoDocumentoInput = {
    create?: XOR<FacturaCreateWithoutTipoDocumentoInput, FacturaUncheckedCreateWithoutTipoDocumentoInput> | FacturaCreateWithoutTipoDocumentoInput[] | FacturaUncheckedCreateWithoutTipoDocumentoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutTipoDocumentoInput | FacturaCreateOrConnectWithoutTipoDocumentoInput[]
    createMany?: FacturaCreateManyTipoDocumentoInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedManyWithoutTipoDocumentoInput = {
    create?: XOR<FacturaCreateWithoutTipoDocumentoInput, FacturaUncheckedCreateWithoutTipoDocumentoInput> | FacturaCreateWithoutTipoDocumentoInput[] | FacturaUncheckedCreateWithoutTipoDocumentoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutTipoDocumentoInput | FacturaCreateOrConnectWithoutTipoDocumentoInput[]
    createMany?: FacturaCreateManyTipoDocumentoInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUpdateManyWithoutTipoDocumentoNestedInput = {
    create?: XOR<FacturaCreateWithoutTipoDocumentoInput, FacturaUncheckedCreateWithoutTipoDocumentoInput> | FacturaCreateWithoutTipoDocumentoInput[] | FacturaUncheckedCreateWithoutTipoDocumentoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutTipoDocumentoInput | FacturaCreateOrConnectWithoutTipoDocumentoInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutTipoDocumentoInput | FacturaUpsertWithWhereUniqueWithoutTipoDocumentoInput[]
    createMany?: FacturaCreateManyTipoDocumentoInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutTipoDocumentoInput | FacturaUpdateWithWhereUniqueWithoutTipoDocumentoInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutTipoDocumentoInput | FacturaUpdateManyWithWhereWithoutTipoDocumentoInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type FacturaUncheckedUpdateManyWithoutTipoDocumentoNestedInput = {
    create?: XOR<FacturaCreateWithoutTipoDocumentoInput, FacturaUncheckedCreateWithoutTipoDocumentoInput> | FacturaCreateWithoutTipoDocumentoInput[] | FacturaUncheckedCreateWithoutTipoDocumentoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutTipoDocumentoInput | FacturaCreateOrConnectWithoutTipoDocumentoInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutTipoDocumentoInput | FacturaUpsertWithWhereUniqueWithoutTipoDocumentoInput[]
    createMany?: FacturaCreateManyTipoDocumentoInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutTipoDocumentoInput | FacturaUpdateWithWhereUniqueWithoutTipoDocumentoInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutTipoDocumentoInput | FacturaUpdateManyWithWhereWithoutTipoDocumentoInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type CategoriaGastoCreateNestedOneWithoutFacturasInput = {
    create?: XOR<CategoriaGastoCreateWithoutFacturasInput, CategoriaGastoUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: CategoriaGastoCreateOrConnectWithoutFacturasInput
    connect?: CategoriaGastoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutFacturasInput = {
    create?: XOR<UsuarioCreateWithoutFacturasInput, UsuarioUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFacturasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TipoDocumentoCreateNestedOneWithoutFacturasInput = {
    create?: XOR<TipoDocumentoCreateWithoutFacturasInput, TipoDocumentoUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: TipoDocumentoCreateOrConnectWithoutFacturasInput
    connect?: TipoDocumentoWhereUniqueInput
  }

  export type FacturaEnviadaCreateNestedManyWithoutFacturaInput = {
    create?: XOR<FacturaEnviadaCreateWithoutFacturaInput, FacturaEnviadaUncheckedCreateWithoutFacturaInput> | FacturaEnviadaCreateWithoutFacturaInput[] | FacturaEnviadaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: FacturaEnviadaCreateOrConnectWithoutFacturaInput | FacturaEnviadaCreateOrConnectWithoutFacturaInput[]
    createMany?: FacturaEnviadaCreateManyFacturaInputEnvelope
    connect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
  }

  export type FacturaEnviadaUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: XOR<FacturaEnviadaCreateWithoutFacturaInput, FacturaEnviadaUncheckedCreateWithoutFacturaInput> | FacturaEnviadaCreateWithoutFacturaInput[] | FacturaEnviadaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: FacturaEnviadaCreateOrConnectWithoutFacturaInput | FacturaEnviadaCreateOrConnectWithoutFacturaInput[]
    createMany?: FacturaEnviadaCreateManyFacturaInputEnvelope
    connect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoriaGastoUpdateOneRequiredWithoutFacturasNestedInput = {
    create?: XOR<CategoriaGastoCreateWithoutFacturasInput, CategoriaGastoUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: CategoriaGastoCreateOrConnectWithoutFacturasInput
    upsert?: CategoriaGastoUpsertWithoutFacturasInput
    connect?: CategoriaGastoWhereUniqueInput
    update?: XOR<XOR<CategoriaGastoUpdateToOneWithWhereWithoutFacturasInput, CategoriaGastoUpdateWithoutFacturasInput>, CategoriaGastoUncheckedUpdateWithoutFacturasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutFacturasNestedInput = {
    create?: XOR<UsuarioCreateWithoutFacturasInput, UsuarioUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFacturasInput
    upsert?: UsuarioUpsertWithoutFacturasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFacturasInput, UsuarioUpdateWithoutFacturasInput>, UsuarioUncheckedUpdateWithoutFacturasInput>
  }

  export type TipoDocumentoUpdateOneWithoutFacturasNestedInput = {
    create?: XOR<TipoDocumentoCreateWithoutFacturasInput, TipoDocumentoUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: TipoDocumentoCreateOrConnectWithoutFacturasInput
    upsert?: TipoDocumentoUpsertWithoutFacturasInput
    disconnect?: TipoDocumentoWhereInput | boolean
    delete?: TipoDocumentoWhereInput | boolean
    connect?: TipoDocumentoWhereUniqueInput
    update?: XOR<XOR<TipoDocumentoUpdateToOneWithWhereWithoutFacturasInput, TipoDocumentoUpdateWithoutFacturasInput>, TipoDocumentoUncheckedUpdateWithoutFacturasInput>
  }

  export type FacturaEnviadaUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<FacturaEnviadaCreateWithoutFacturaInput, FacturaEnviadaUncheckedCreateWithoutFacturaInput> | FacturaEnviadaCreateWithoutFacturaInput[] | FacturaEnviadaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: FacturaEnviadaCreateOrConnectWithoutFacturaInput | FacturaEnviadaCreateOrConnectWithoutFacturaInput[]
    upsert?: FacturaEnviadaUpsertWithWhereUniqueWithoutFacturaInput | FacturaEnviadaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: FacturaEnviadaCreateManyFacturaInputEnvelope
    set?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    disconnect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    delete?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    connect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    update?: FacturaEnviadaUpdateWithWhereUniqueWithoutFacturaInput | FacturaEnviadaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: FacturaEnviadaUpdateManyWithWhereWithoutFacturaInput | FacturaEnviadaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: FacturaEnviadaScalarWhereInput | FacturaEnviadaScalarWhereInput[]
  }

  export type FacturaEnviadaUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<FacturaEnviadaCreateWithoutFacturaInput, FacturaEnviadaUncheckedCreateWithoutFacturaInput> | FacturaEnviadaCreateWithoutFacturaInput[] | FacturaEnviadaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: FacturaEnviadaCreateOrConnectWithoutFacturaInput | FacturaEnviadaCreateOrConnectWithoutFacturaInput[]
    upsert?: FacturaEnviadaUpsertWithWhereUniqueWithoutFacturaInput | FacturaEnviadaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: FacturaEnviadaCreateManyFacturaInputEnvelope
    set?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    disconnect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    delete?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    connect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    update?: FacturaEnviadaUpdateWithWhereUniqueWithoutFacturaInput | FacturaEnviadaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: FacturaEnviadaUpdateManyWithWhereWithoutFacturaInput | FacturaEnviadaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: FacturaEnviadaScalarWhereInput | FacturaEnviadaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutDetalleEnviosInput = {
    create?: XOR<UsuarioCreateWithoutDetalleEnviosInput, UsuarioUncheckedCreateWithoutDetalleEnviosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDetalleEnviosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type FacturaEnviadaCreateNestedManyWithoutDetalleEnvioInput = {
    create?: XOR<FacturaEnviadaCreateWithoutDetalleEnvioInput, FacturaEnviadaUncheckedCreateWithoutDetalleEnvioInput> | FacturaEnviadaCreateWithoutDetalleEnvioInput[] | FacturaEnviadaUncheckedCreateWithoutDetalleEnvioInput[]
    connectOrCreate?: FacturaEnviadaCreateOrConnectWithoutDetalleEnvioInput | FacturaEnviadaCreateOrConnectWithoutDetalleEnvioInput[]
    createMany?: FacturaEnviadaCreateManyDetalleEnvioInputEnvelope
    connect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
  }

  export type FacturaEnviadaUncheckedCreateNestedManyWithoutDetalleEnvioInput = {
    create?: XOR<FacturaEnviadaCreateWithoutDetalleEnvioInput, FacturaEnviadaUncheckedCreateWithoutDetalleEnvioInput> | FacturaEnviadaCreateWithoutDetalleEnvioInput[] | FacturaEnviadaUncheckedCreateWithoutDetalleEnvioInput[]
    connectOrCreate?: FacturaEnviadaCreateOrConnectWithoutDetalleEnvioInput | FacturaEnviadaCreateOrConnectWithoutDetalleEnvioInput[]
    createMany?: FacturaEnviadaCreateManyDetalleEnvioInputEnvelope
    connect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutDetalleEnviosNestedInput = {
    create?: XOR<UsuarioCreateWithoutDetalleEnviosInput, UsuarioUncheckedCreateWithoutDetalleEnviosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDetalleEnviosInput
    upsert?: UsuarioUpsertWithoutDetalleEnviosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDetalleEnviosInput, UsuarioUpdateWithoutDetalleEnviosInput>, UsuarioUncheckedUpdateWithoutDetalleEnviosInput>
  }

  export type FacturaEnviadaUpdateManyWithoutDetalleEnvioNestedInput = {
    create?: XOR<FacturaEnviadaCreateWithoutDetalleEnvioInput, FacturaEnviadaUncheckedCreateWithoutDetalleEnvioInput> | FacturaEnviadaCreateWithoutDetalleEnvioInput[] | FacturaEnviadaUncheckedCreateWithoutDetalleEnvioInput[]
    connectOrCreate?: FacturaEnviadaCreateOrConnectWithoutDetalleEnvioInput | FacturaEnviadaCreateOrConnectWithoutDetalleEnvioInput[]
    upsert?: FacturaEnviadaUpsertWithWhereUniqueWithoutDetalleEnvioInput | FacturaEnviadaUpsertWithWhereUniqueWithoutDetalleEnvioInput[]
    createMany?: FacturaEnviadaCreateManyDetalleEnvioInputEnvelope
    set?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    disconnect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    delete?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    connect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    update?: FacturaEnviadaUpdateWithWhereUniqueWithoutDetalleEnvioInput | FacturaEnviadaUpdateWithWhereUniqueWithoutDetalleEnvioInput[]
    updateMany?: FacturaEnviadaUpdateManyWithWhereWithoutDetalleEnvioInput | FacturaEnviadaUpdateManyWithWhereWithoutDetalleEnvioInput[]
    deleteMany?: FacturaEnviadaScalarWhereInput | FacturaEnviadaScalarWhereInput[]
  }

  export type FacturaEnviadaUncheckedUpdateManyWithoutDetalleEnvioNestedInput = {
    create?: XOR<FacturaEnviadaCreateWithoutDetalleEnvioInput, FacturaEnviadaUncheckedCreateWithoutDetalleEnvioInput> | FacturaEnviadaCreateWithoutDetalleEnvioInput[] | FacturaEnviadaUncheckedCreateWithoutDetalleEnvioInput[]
    connectOrCreate?: FacturaEnviadaCreateOrConnectWithoutDetalleEnvioInput | FacturaEnviadaCreateOrConnectWithoutDetalleEnvioInput[]
    upsert?: FacturaEnviadaUpsertWithWhereUniqueWithoutDetalleEnvioInput | FacturaEnviadaUpsertWithWhereUniqueWithoutDetalleEnvioInput[]
    createMany?: FacturaEnviadaCreateManyDetalleEnvioInputEnvelope
    set?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    disconnect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    delete?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    connect?: FacturaEnviadaWhereUniqueInput | FacturaEnviadaWhereUniqueInput[]
    update?: FacturaEnviadaUpdateWithWhereUniqueWithoutDetalleEnvioInput | FacturaEnviadaUpdateWithWhereUniqueWithoutDetalleEnvioInput[]
    updateMany?: FacturaEnviadaUpdateManyWithWhereWithoutDetalleEnvioInput | FacturaEnviadaUpdateManyWithWhereWithoutDetalleEnvioInput[]
    deleteMany?: FacturaEnviadaScalarWhereInput | FacturaEnviadaScalarWhereInput[]
  }

  export type FacturaCreateNestedOneWithoutFacturasEnviadasInput = {
    create?: XOR<FacturaCreateWithoutFacturasEnviadasInput, FacturaUncheckedCreateWithoutFacturasEnviadasInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutFacturasEnviadasInput
    connect?: FacturaWhereUniqueInput
  }

  export type DetalleEnvioCreateNestedOneWithoutFacturasEnviadasInput = {
    create?: XOR<DetalleEnvioCreateWithoutFacturasEnviadasInput, DetalleEnvioUncheckedCreateWithoutFacturasEnviadasInput>
    connectOrCreate?: DetalleEnvioCreateOrConnectWithoutFacturasEnviadasInput
    connect?: DetalleEnvioWhereUniqueInput
  }

  export type FacturaUpdateOneRequiredWithoutFacturasEnviadasNestedInput = {
    create?: XOR<FacturaCreateWithoutFacturasEnviadasInput, FacturaUncheckedCreateWithoutFacturasEnviadasInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutFacturasEnviadasInput
    upsert?: FacturaUpsertWithoutFacturasEnviadasInput
    connect?: FacturaWhereUniqueInput
    update?: XOR<XOR<FacturaUpdateToOneWithWhereWithoutFacturasEnviadasInput, FacturaUpdateWithoutFacturasEnviadasInput>, FacturaUncheckedUpdateWithoutFacturasEnviadasInput>
  }

  export type DetalleEnvioUpdateOneRequiredWithoutFacturasEnviadasNestedInput = {
    create?: XOR<DetalleEnvioCreateWithoutFacturasEnviadasInput, DetalleEnvioUncheckedCreateWithoutFacturasEnviadasInput>
    connectOrCreate?: DetalleEnvioCreateOrConnectWithoutFacturasEnviadasInput
    upsert?: DetalleEnvioUpsertWithoutFacturasEnviadasInput
    connect?: DetalleEnvioWhereUniqueInput
    update?: XOR<XOR<DetalleEnvioUpdateToOneWithWhereWithoutFacturasEnviadasInput, DetalleEnvioUpdateWithoutFacturasEnviadasInput>, DetalleEnvioUncheckedUpdateWithoutFacturasEnviadasInput>
  }

  export type UsuarioCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UsuarioCreateWithoutAccountsInput, UsuarioUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAccountsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UsuarioCreateWithoutAccountsInput, UsuarioUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAccountsInput
    upsert?: UsuarioUpsertWithoutAccountsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAccountsInput, UsuarioUpdateWithoutAccountsInput>, UsuarioUncheckedUpdateWithoutAccountsInput>
  }

  export type UsuarioCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UsuarioCreateWithoutSessionsInput, UsuarioUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSessionsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UsuarioCreateWithoutSessionsInput, UsuarioUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSessionsInput
    upsert?: UsuarioUpsertWithoutSessionsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSessionsInput, UsuarioUpdateWithoutSessionsInput>, UsuarioUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FacturaCreateWithoutUsuarioInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaGasto: CategoriaGastoCreateNestedOneWithoutFacturasInput
    tipoDocumento?: TipoDocumentoCreateNestedOneWithoutFacturasInput
    facturasEnviadas?: FacturaEnviadaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutUsuarioInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id_tipo_gasto: string
    id_tipo_documento?: string | null
    facturasEnviadas?: FacturaEnviadaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutUsuarioInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput>
  }

  export type FacturaCreateManyUsuarioInputEnvelope = {
    data: FacturaCreateManyUsuarioInput | FacturaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type DetalleEnvioCreateWithoutUsuarioInput = {
    id_detalle_envio?: string
    timestamp?: Date | string
    contador?: number
    medio_envio: string
    estado?: string
    facturasEnviadas?: FacturaEnviadaCreateNestedManyWithoutDetalleEnvioInput
  }

  export type DetalleEnvioUncheckedCreateWithoutUsuarioInput = {
    id_detalle_envio?: string
    timestamp?: Date | string
    contador?: number
    medio_envio: string
    estado?: string
    facturasEnviadas?: FacturaEnviadaUncheckedCreateNestedManyWithoutDetalleEnvioInput
  }

  export type DetalleEnvioCreateOrConnectWithoutUsuarioInput = {
    where: DetalleEnvioWhereUniqueInput
    create: XOR<DetalleEnvioCreateWithoutUsuarioInput, DetalleEnvioUncheckedCreateWithoutUsuarioInput>
  }

  export type DetalleEnvioCreateManyUsuarioInputEnvelope = {
    data: DetalleEnvioCreateManyUsuarioInput | DetalleEnvioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FacturaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutUsuarioInput, FacturaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutUsuarioInput, FacturaUncheckedUpdateWithoutUsuarioInput>
  }

  export type FacturaUpdateManyWithWhereWithoutUsuarioInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FacturaScalarWhereInput = {
    AND?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
    OR?: FacturaScalarWhereInput[]
    NOT?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
    id_factura?: StringFilter<"Factura"> | string
    fecha?: DateTimeFilter<"Factura"> | Date | string
    proveedor?: StringFilter<"Factura"> | string
    monto?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    imagen?: StringNullableFilter<"Factura"> | string | null
    id_empresa?: StringNullableFilter<"Factura"> | string | null
    createdAt?: DateTimeFilter<"Factura"> | Date | string
    updatedAt?: DateTimeFilter<"Factura"> | Date | string
    id_tipo_gasto?: StringFilter<"Factura"> | string
    identificadorUsuario?: StringFilter<"Factura"> | string
    id_tipo_documento?: StringNullableFilter<"Factura"> | string | null
  }

  export type DetalleEnvioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DetalleEnvioWhereUniqueInput
    update: XOR<DetalleEnvioUpdateWithoutUsuarioInput, DetalleEnvioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DetalleEnvioCreateWithoutUsuarioInput, DetalleEnvioUncheckedCreateWithoutUsuarioInput>
  }

  export type DetalleEnvioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DetalleEnvioWhereUniqueInput
    data: XOR<DetalleEnvioUpdateWithoutUsuarioInput, DetalleEnvioUncheckedUpdateWithoutUsuarioInput>
  }

  export type DetalleEnvioUpdateManyWithWhereWithoutUsuarioInput = {
    where: DetalleEnvioScalarWhereInput
    data: XOR<DetalleEnvioUpdateManyMutationInput, DetalleEnvioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DetalleEnvioScalarWhereInput = {
    AND?: DetalleEnvioScalarWhereInput | DetalleEnvioScalarWhereInput[]
    OR?: DetalleEnvioScalarWhereInput[]
    NOT?: DetalleEnvioScalarWhereInput | DetalleEnvioScalarWhereInput[]
    id_detalle_envio?: StringFilter<"DetalleEnvio"> | string
    timestamp?: DateTimeFilter<"DetalleEnvio"> | Date | string
    contador?: IntFilter<"DetalleEnvio"> | number
    medio_envio?: StringFilter<"DetalleEnvio"> | string
    estado?: StringFilter<"DetalleEnvio"> | string
    id_usuario?: StringFilter<"DetalleEnvio"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type FacturaCreateWithoutCategoriaGastoInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFacturasInput
    tipoDocumento?: TipoDocumentoCreateNestedOneWithoutFacturasInput
    facturasEnviadas?: FacturaEnviadaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutCategoriaGastoInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    identificadorUsuario: string
    id_tipo_documento?: string | null
    facturasEnviadas?: FacturaEnviadaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutCategoriaGastoInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutCategoriaGastoInput, FacturaUncheckedCreateWithoutCategoriaGastoInput>
  }

  export type FacturaCreateManyCategoriaGastoInputEnvelope = {
    data: FacturaCreateManyCategoriaGastoInput | FacturaCreateManyCategoriaGastoInput[]
    skipDuplicates?: boolean
  }

  export type FacturaUpsertWithWhereUniqueWithoutCategoriaGastoInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutCategoriaGastoInput, FacturaUncheckedUpdateWithoutCategoriaGastoInput>
    create: XOR<FacturaCreateWithoutCategoriaGastoInput, FacturaUncheckedCreateWithoutCategoriaGastoInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutCategoriaGastoInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutCategoriaGastoInput, FacturaUncheckedUpdateWithoutCategoriaGastoInput>
  }

  export type FacturaUpdateManyWithWhereWithoutCategoriaGastoInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutCategoriaGastoInput>
  }

  export type FacturaCreateWithoutTipoDocumentoInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaGasto: CategoriaGastoCreateNestedOneWithoutFacturasInput
    usuario: UsuarioCreateNestedOneWithoutFacturasInput
    facturasEnviadas?: FacturaEnviadaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutTipoDocumentoInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id_tipo_gasto: string
    identificadorUsuario: string
    facturasEnviadas?: FacturaEnviadaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutTipoDocumentoInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutTipoDocumentoInput, FacturaUncheckedCreateWithoutTipoDocumentoInput>
  }

  export type FacturaCreateManyTipoDocumentoInputEnvelope = {
    data: FacturaCreateManyTipoDocumentoInput | FacturaCreateManyTipoDocumentoInput[]
    skipDuplicates?: boolean
  }

  export type FacturaUpsertWithWhereUniqueWithoutTipoDocumentoInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutTipoDocumentoInput, FacturaUncheckedUpdateWithoutTipoDocumentoInput>
    create: XOR<FacturaCreateWithoutTipoDocumentoInput, FacturaUncheckedCreateWithoutTipoDocumentoInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutTipoDocumentoInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutTipoDocumentoInput, FacturaUncheckedUpdateWithoutTipoDocumentoInput>
  }

  export type FacturaUpdateManyWithWhereWithoutTipoDocumentoInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutTipoDocumentoInput>
  }

  export type CategoriaGastoCreateWithoutFacturasInput = {
    id_categoria_gasto?: string
    nombre: string
    description?: string | null
  }

  export type CategoriaGastoUncheckedCreateWithoutFacturasInput = {
    id_categoria_gasto?: string
    nombre: string
    description?: string | null
  }

  export type CategoriaGastoCreateOrConnectWithoutFacturasInput = {
    where: CategoriaGastoWhereUniqueInput
    create: XOR<CategoriaGastoCreateWithoutFacturasInput, CategoriaGastoUncheckedCreateWithoutFacturasInput>
  }

  export type UsuarioCreateWithoutFacturasInput = {
    id_usuario?: string
    correo: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estado?: boolean
    detalleEnvios?: DetalleEnvioCreateNestedManyWithoutUsuarioInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutFacturasInput = {
    id_usuario?: string
    correo: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estado?: boolean
    detalleEnvios?: DetalleEnvioUncheckedCreateNestedManyWithoutUsuarioInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutFacturasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFacturasInput, UsuarioUncheckedCreateWithoutFacturasInput>
  }

  export type TipoDocumentoCreateWithoutFacturasInput = {
    id_tipo_documento?: string
    nombre: string
  }

  export type TipoDocumentoUncheckedCreateWithoutFacturasInput = {
    id_tipo_documento?: string
    nombre: string
  }

  export type TipoDocumentoCreateOrConnectWithoutFacturasInput = {
    where: TipoDocumentoWhereUniqueInput
    create: XOR<TipoDocumentoCreateWithoutFacturasInput, TipoDocumentoUncheckedCreateWithoutFacturasInput>
  }

  export type FacturaEnviadaCreateWithoutFacturaInput = {
    id?: string
    detalleEnvio: DetalleEnvioCreateNestedOneWithoutFacturasEnviadasInput
  }

  export type FacturaEnviadaUncheckedCreateWithoutFacturaInput = {
    id?: string
    id_detalle_envio: string
  }

  export type FacturaEnviadaCreateOrConnectWithoutFacturaInput = {
    where: FacturaEnviadaWhereUniqueInput
    create: XOR<FacturaEnviadaCreateWithoutFacturaInput, FacturaEnviadaUncheckedCreateWithoutFacturaInput>
  }

  export type FacturaEnviadaCreateManyFacturaInputEnvelope = {
    data: FacturaEnviadaCreateManyFacturaInput | FacturaEnviadaCreateManyFacturaInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaGastoUpsertWithoutFacturasInput = {
    update: XOR<CategoriaGastoUpdateWithoutFacturasInput, CategoriaGastoUncheckedUpdateWithoutFacturasInput>
    create: XOR<CategoriaGastoCreateWithoutFacturasInput, CategoriaGastoUncheckedCreateWithoutFacturasInput>
    where?: CategoriaGastoWhereInput
  }

  export type CategoriaGastoUpdateToOneWithWhereWithoutFacturasInput = {
    where?: CategoriaGastoWhereInput
    data: XOR<CategoriaGastoUpdateWithoutFacturasInput, CategoriaGastoUncheckedUpdateWithoutFacturasInput>
  }

  export type CategoriaGastoUpdateWithoutFacturasInput = {
    id_categoria_gasto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaGastoUncheckedUpdateWithoutFacturasInput = {
    id_categoria_gasto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUpsertWithoutFacturasInput = {
    update: XOR<UsuarioUpdateWithoutFacturasInput, UsuarioUncheckedUpdateWithoutFacturasInput>
    create: XOR<UsuarioCreateWithoutFacturasInput, UsuarioUncheckedCreateWithoutFacturasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFacturasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFacturasInput, UsuarioUncheckedUpdateWithoutFacturasInput>
  }

  export type UsuarioUpdateWithoutFacturasInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    detalleEnvios?: DetalleEnvioUpdateManyWithoutUsuarioNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFacturasInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    detalleEnvios?: DetalleEnvioUncheckedUpdateManyWithoutUsuarioNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TipoDocumentoUpsertWithoutFacturasInput = {
    update: XOR<TipoDocumentoUpdateWithoutFacturasInput, TipoDocumentoUncheckedUpdateWithoutFacturasInput>
    create: XOR<TipoDocumentoCreateWithoutFacturasInput, TipoDocumentoUncheckedCreateWithoutFacturasInput>
    where?: TipoDocumentoWhereInput
  }

  export type TipoDocumentoUpdateToOneWithWhereWithoutFacturasInput = {
    where?: TipoDocumentoWhereInput
    data: XOR<TipoDocumentoUpdateWithoutFacturasInput, TipoDocumentoUncheckedUpdateWithoutFacturasInput>
  }

  export type TipoDocumentoUpdateWithoutFacturasInput = {
    id_tipo_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TipoDocumentoUncheckedUpdateWithoutFacturasInput = {
    id_tipo_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type FacturaEnviadaUpsertWithWhereUniqueWithoutFacturaInput = {
    where: FacturaEnviadaWhereUniqueInput
    update: XOR<FacturaEnviadaUpdateWithoutFacturaInput, FacturaEnviadaUncheckedUpdateWithoutFacturaInput>
    create: XOR<FacturaEnviadaCreateWithoutFacturaInput, FacturaEnviadaUncheckedCreateWithoutFacturaInput>
  }

  export type FacturaEnviadaUpdateWithWhereUniqueWithoutFacturaInput = {
    where: FacturaEnviadaWhereUniqueInput
    data: XOR<FacturaEnviadaUpdateWithoutFacturaInput, FacturaEnviadaUncheckedUpdateWithoutFacturaInput>
  }

  export type FacturaEnviadaUpdateManyWithWhereWithoutFacturaInput = {
    where: FacturaEnviadaScalarWhereInput
    data: XOR<FacturaEnviadaUpdateManyMutationInput, FacturaEnviadaUncheckedUpdateManyWithoutFacturaInput>
  }

  export type FacturaEnviadaScalarWhereInput = {
    AND?: FacturaEnviadaScalarWhereInput | FacturaEnviadaScalarWhereInput[]
    OR?: FacturaEnviadaScalarWhereInput[]
    NOT?: FacturaEnviadaScalarWhereInput | FacturaEnviadaScalarWhereInput[]
    id?: StringFilter<"FacturaEnviada"> | string
    id_factura?: StringFilter<"FacturaEnviada"> | string
    id_detalle_envio?: StringFilter<"FacturaEnviada"> | string
  }

  export type UsuarioCreateWithoutDetalleEnviosInput = {
    id_usuario?: string
    correo: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estado?: boolean
    facturas?: FacturaCreateNestedManyWithoutUsuarioInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutDetalleEnviosInput = {
    id_usuario?: string
    correo: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estado?: boolean
    facturas?: FacturaUncheckedCreateNestedManyWithoutUsuarioInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutDetalleEnviosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDetalleEnviosInput, UsuarioUncheckedCreateWithoutDetalleEnviosInput>
  }

  export type FacturaEnviadaCreateWithoutDetalleEnvioInput = {
    id?: string
    factura: FacturaCreateNestedOneWithoutFacturasEnviadasInput
  }

  export type FacturaEnviadaUncheckedCreateWithoutDetalleEnvioInput = {
    id?: string
    id_factura: string
  }

  export type FacturaEnviadaCreateOrConnectWithoutDetalleEnvioInput = {
    where: FacturaEnviadaWhereUniqueInput
    create: XOR<FacturaEnviadaCreateWithoutDetalleEnvioInput, FacturaEnviadaUncheckedCreateWithoutDetalleEnvioInput>
  }

  export type FacturaEnviadaCreateManyDetalleEnvioInputEnvelope = {
    data: FacturaEnviadaCreateManyDetalleEnvioInput | FacturaEnviadaCreateManyDetalleEnvioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutDetalleEnviosInput = {
    update: XOR<UsuarioUpdateWithoutDetalleEnviosInput, UsuarioUncheckedUpdateWithoutDetalleEnviosInput>
    create: XOR<UsuarioCreateWithoutDetalleEnviosInput, UsuarioUncheckedCreateWithoutDetalleEnviosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDetalleEnviosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDetalleEnviosInput, UsuarioUncheckedUpdateWithoutDetalleEnviosInput>
  }

  export type UsuarioUpdateWithoutDetalleEnviosInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    facturas?: FacturaUpdateManyWithoutUsuarioNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDetalleEnviosInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    facturas?: FacturaUncheckedUpdateManyWithoutUsuarioNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FacturaEnviadaUpsertWithWhereUniqueWithoutDetalleEnvioInput = {
    where: FacturaEnviadaWhereUniqueInput
    update: XOR<FacturaEnviadaUpdateWithoutDetalleEnvioInput, FacturaEnviadaUncheckedUpdateWithoutDetalleEnvioInput>
    create: XOR<FacturaEnviadaCreateWithoutDetalleEnvioInput, FacturaEnviadaUncheckedCreateWithoutDetalleEnvioInput>
  }

  export type FacturaEnviadaUpdateWithWhereUniqueWithoutDetalleEnvioInput = {
    where: FacturaEnviadaWhereUniqueInput
    data: XOR<FacturaEnviadaUpdateWithoutDetalleEnvioInput, FacturaEnviadaUncheckedUpdateWithoutDetalleEnvioInput>
  }

  export type FacturaEnviadaUpdateManyWithWhereWithoutDetalleEnvioInput = {
    where: FacturaEnviadaScalarWhereInput
    data: XOR<FacturaEnviadaUpdateManyMutationInput, FacturaEnviadaUncheckedUpdateManyWithoutDetalleEnvioInput>
  }

  export type FacturaCreateWithoutFacturasEnviadasInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaGasto: CategoriaGastoCreateNestedOneWithoutFacturasInput
    usuario: UsuarioCreateNestedOneWithoutFacturasInput
    tipoDocumento?: TipoDocumentoCreateNestedOneWithoutFacturasInput
  }

  export type FacturaUncheckedCreateWithoutFacturasEnviadasInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id_tipo_gasto: string
    identificadorUsuario: string
    id_tipo_documento?: string | null
  }

  export type FacturaCreateOrConnectWithoutFacturasEnviadasInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutFacturasEnviadasInput, FacturaUncheckedCreateWithoutFacturasEnviadasInput>
  }

  export type DetalleEnvioCreateWithoutFacturasEnviadasInput = {
    id_detalle_envio?: string
    timestamp?: Date | string
    contador?: number
    medio_envio: string
    estado?: string
    usuario: UsuarioCreateNestedOneWithoutDetalleEnviosInput
  }

  export type DetalleEnvioUncheckedCreateWithoutFacturasEnviadasInput = {
    id_detalle_envio?: string
    timestamp?: Date | string
    contador?: number
    medio_envio: string
    estado?: string
    id_usuario: string
  }

  export type DetalleEnvioCreateOrConnectWithoutFacturasEnviadasInput = {
    where: DetalleEnvioWhereUniqueInput
    create: XOR<DetalleEnvioCreateWithoutFacturasEnviadasInput, DetalleEnvioUncheckedCreateWithoutFacturasEnviadasInput>
  }

  export type FacturaUpsertWithoutFacturasEnviadasInput = {
    update: XOR<FacturaUpdateWithoutFacturasEnviadasInput, FacturaUncheckedUpdateWithoutFacturasEnviadasInput>
    create: XOR<FacturaCreateWithoutFacturasEnviadasInput, FacturaUncheckedCreateWithoutFacturasEnviadasInput>
    where?: FacturaWhereInput
  }

  export type FacturaUpdateToOneWithWhereWithoutFacturasEnviadasInput = {
    where?: FacturaWhereInput
    data: XOR<FacturaUpdateWithoutFacturasEnviadasInput, FacturaUncheckedUpdateWithoutFacturasEnviadasInput>
  }

  export type FacturaUpdateWithoutFacturasEnviadasInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaGasto?: CategoriaGastoUpdateOneRequiredWithoutFacturasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFacturasNestedInput
    tipoDocumento?: TipoDocumentoUpdateOneWithoutFacturasNestedInput
  }

  export type FacturaUncheckedUpdateWithoutFacturasEnviadasInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tipo_gasto?: StringFieldUpdateOperationsInput | string
    identificadorUsuario?: StringFieldUpdateOperationsInput | string
    id_tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetalleEnvioUpsertWithoutFacturasEnviadasInput = {
    update: XOR<DetalleEnvioUpdateWithoutFacturasEnviadasInput, DetalleEnvioUncheckedUpdateWithoutFacturasEnviadasInput>
    create: XOR<DetalleEnvioCreateWithoutFacturasEnviadasInput, DetalleEnvioUncheckedCreateWithoutFacturasEnviadasInput>
    where?: DetalleEnvioWhereInput
  }

  export type DetalleEnvioUpdateToOneWithWhereWithoutFacturasEnviadasInput = {
    where?: DetalleEnvioWhereInput
    data: XOR<DetalleEnvioUpdateWithoutFacturasEnviadasInput, DetalleEnvioUncheckedUpdateWithoutFacturasEnviadasInput>
  }

  export type DetalleEnvioUpdateWithoutFacturasEnviadasInput = {
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: IntFieldUpdateOperationsInput | number
    medio_envio?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutDetalleEnviosNestedInput
  }

  export type DetalleEnvioUncheckedUpdateWithoutFacturasEnviadasInput = {
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: IntFieldUpdateOperationsInput | number
    medio_envio?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateWithoutAccountsInput = {
    id_usuario?: string
    correo: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estado?: boolean
    facturas?: FacturaCreateNestedManyWithoutUsuarioInput
    detalleEnvios?: DetalleEnvioCreateNestedManyWithoutUsuarioInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutAccountsInput = {
    id_usuario?: string
    correo: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estado?: boolean
    facturas?: FacturaUncheckedCreateNestedManyWithoutUsuarioInput
    detalleEnvios?: DetalleEnvioUncheckedCreateNestedManyWithoutUsuarioInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutAccountsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAccountsInput, UsuarioUncheckedCreateWithoutAccountsInput>
  }

  export type UsuarioUpsertWithoutAccountsInput = {
    update: XOR<UsuarioUpdateWithoutAccountsInput, UsuarioUncheckedUpdateWithoutAccountsInput>
    create: XOR<UsuarioCreateWithoutAccountsInput, UsuarioUncheckedCreateWithoutAccountsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAccountsInput, UsuarioUncheckedUpdateWithoutAccountsInput>
  }

  export type UsuarioUpdateWithoutAccountsInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    facturas?: FacturaUpdateManyWithoutUsuarioNestedInput
    detalleEnvios?: DetalleEnvioUpdateManyWithoutUsuarioNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAccountsInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    facturas?: FacturaUncheckedUpdateManyWithoutUsuarioNestedInput
    detalleEnvios?: DetalleEnvioUncheckedUpdateManyWithoutUsuarioNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuarioCreateWithoutSessionsInput = {
    id_usuario?: string
    correo: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estado?: boolean
    facturas?: FacturaCreateNestedManyWithoutUsuarioInput
    detalleEnvios?: DetalleEnvioCreateNestedManyWithoutUsuarioInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutSessionsInput = {
    id_usuario?: string
    correo: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estado?: boolean
    facturas?: FacturaUncheckedCreateNestedManyWithoutUsuarioInput
    detalleEnvios?: DetalleEnvioUncheckedCreateNestedManyWithoutUsuarioInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutSessionsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSessionsInput, UsuarioUncheckedCreateWithoutSessionsInput>
  }

  export type UsuarioUpsertWithoutSessionsInput = {
    update: XOR<UsuarioUpdateWithoutSessionsInput, UsuarioUncheckedUpdateWithoutSessionsInput>
    create: XOR<UsuarioCreateWithoutSessionsInput, UsuarioUncheckedCreateWithoutSessionsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSessionsInput, UsuarioUncheckedUpdateWithoutSessionsInput>
  }

  export type UsuarioUpdateWithoutSessionsInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    facturas?: FacturaUpdateManyWithoutUsuarioNestedInput
    detalleEnvios?: DetalleEnvioUpdateManyWithoutUsuarioNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSessionsInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    facturas?: FacturaUncheckedUpdateManyWithoutUsuarioNestedInput
    detalleEnvios?: DetalleEnvioUncheckedUpdateManyWithoutUsuarioNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FacturaCreateManyUsuarioInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id_tipo_gasto: string
    id_tipo_documento?: string | null
  }

  export type DetalleEnvioCreateManyUsuarioInput = {
    id_detalle_envio?: string
    timestamp?: Date | string
    contador?: number
    medio_envio: string
    estado?: string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type FacturaUpdateWithoutUsuarioInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaGasto?: CategoriaGastoUpdateOneRequiredWithoutFacturasNestedInput
    tipoDocumento?: TipoDocumentoUpdateOneWithoutFacturasNestedInput
    facturasEnviadas?: FacturaEnviadaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutUsuarioInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tipo_gasto?: StringFieldUpdateOperationsInput | string
    id_tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
    facturasEnviadas?: FacturaEnviadaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateManyWithoutUsuarioInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tipo_gasto?: StringFieldUpdateOperationsInput | string
    id_tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetalleEnvioUpdateWithoutUsuarioInput = {
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: IntFieldUpdateOperationsInput | number
    medio_envio?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    facturasEnviadas?: FacturaEnviadaUpdateManyWithoutDetalleEnvioNestedInput
  }

  export type DetalleEnvioUncheckedUpdateWithoutUsuarioInput = {
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: IntFieldUpdateOperationsInput | number
    medio_envio?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    facturasEnviadas?: FacturaEnviadaUncheckedUpdateManyWithoutDetalleEnvioNestedInput
  }

  export type DetalleEnvioUncheckedUpdateManyWithoutUsuarioInput = {
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: IntFieldUpdateOperationsInput | number
    medio_envio?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaCreateManyCategoriaGastoInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    identificadorUsuario: string
    id_tipo_documento?: string | null
  }

  export type FacturaUpdateWithoutCategoriaGastoInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFacturasNestedInput
    tipoDocumento?: TipoDocumentoUpdateOneWithoutFacturasNestedInput
    facturasEnviadas?: FacturaEnviadaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutCategoriaGastoInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identificadorUsuario?: StringFieldUpdateOperationsInput | string
    id_tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
    facturasEnviadas?: FacturaEnviadaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateManyWithoutCategoriaGastoInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identificadorUsuario?: StringFieldUpdateOperationsInput | string
    id_tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacturaCreateManyTipoDocumentoInput = {
    id_factura?: string
    fecha: Date | string
    proveedor: string
    monto: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    id_empresa?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id_tipo_gasto: string
    identificadorUsuario: string
  }

  export type FacturaUpdateWithoutTipoDocumentoInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaGasto?: CategoriaGastoUpdateOneRequiredWithoutFacturasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFacturasNestedInput
    facturasEnviadas?: FacturaEnviadaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutTipoDocumentoInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tipo_gasto?: StringFieldUpdateOperationsInput | string
    identificadorUsuario?: StringFieldUpdateOperationsInput | string
    facturasEnviadas?: FacturaEnviadaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateManyWithoutTipoDocumentoInput = {
    id_factura?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    id_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tipo_gasto?: StringFieldUpdateOperationsInput | string
    identificadorUsuario?: StringFieldUpdateOperationsInput | string
  }

  export type FacturaEnviadaCreateManyFacturaInput = {
    id?: string
    id_detalle_envio: string
  }

  export type FacturaEnviadaUpdateWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    detalleEnvio?: DetalleEnvioUpdateOneRequiredWithoutFacturasEnviadasNestedInput
  }

  export type FacturaEnviadaUncheckedUpdateWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
  }

  export type FacturaEnviadaUncheckedUpdateManyWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_detalle_envio?: StringFieldUpdateOperationsInput | string
  }

  export type FacturaEnviadaCreateManyDetalleEnvioInput = {
    id?: string
    id_factura: string
  }

  export type FacturaEnviadaUpdateWithoutDetalleEnvioInput = {
    id?: StringFieldUpdateOperationsInput | string
    factura?: FacturaUpdateOneRequiredWithoutFacturasEnviadasNestedInput
  }

  export type FacturaEnviadaUncheckedUpdateWithoutDetalleEnvioInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_factura?: StringFieldUpdateOperationsInput | string
  }

  export type FacturaEnviadaUncheckedUpdateManyWithoutDetalleEnvioInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_factura?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}