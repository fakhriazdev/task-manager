
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DT_USER
 * 
 */
export type DT_USER = $Result.DefaultSelection<Prisma.$DT_USERPayload>
/**
 * Model DT_PROJECT
 * 
 */
export type DT_PROJECT = $Result.DefaultSelection<Prisma.$DT_PROJECTPayload>
/**
 * Model DT_PROJECT_MEMBER
 * 
 */
export type DT_PROJECT_MEMBER = $Result.DefaultSelection<Prisma.$DT_PROJECT_MEMBERPayload>
/**
 * Model DT_INVITATION
 * 
 */
export type DT_INVITATION = $Result.DefaultSelection<Prisma.$DT_INVITATIONPayload>
/**
 * Model LOG_FORGOT_PASSWORD
 * 
 */
export type LOG_FORGOT_PASSWORD = $Result.DefaultSelection<Prisma.$LOG_FORGOT_PASSWORDPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DT_USERS
 * const dT_USERS = await prisma.dT_USER.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DT_USERS
   * const dT_USERS = await prisma.dT_USER.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dT_USER`: Exposes CRUD operations for the **DT_USER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DT_USERS
    * const dT_USERS = await prisma.dT_USER.findMany()
    * ```
    */
  get dT_USER(): Prisma.DT_USERDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dT_PROJECT`: Exposes CRUD operations for the **DT_PROJECT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DT_PROJECTS
    * const dT_PROJECTS = await prisma.dT_PROJECT.findMany()
    * ```
    */
  get dT_PROJECT(): Prisma.DT_PROJECTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dT_PROJECT_MEMBER`: Exposes CRUD operations for the **DT_PROJECT_MEMBER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DT_PROJECT_MEMBERS
    * const dT_PROJECT_MEMBERS = await prisma.dT_PROJECT_MEMBER.findMany()
    * ```
    */
  get dT_PROJECT_MEMBER(): Prisma.DT_PROJECT_MEMBERDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dT_INVITATION`: Exposes CRUD operations for the **DT_INVITATION** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DT_INVITATIONS
    * const dT_INVITATIONS = await prisma.dT_INVITATION.findMany()
    * ```
    */
  get dT_INVITATION(): Prisma.DT_INVITATIONDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lOG_FORGOT_PASSWORD`: Exposes CRUD operations for the **LOG_FORGOT_PASSWORD** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LOG_FORGOT_PASSWORDS
    * const lOG_FORGOT_PASSWORDS = await prisma.lOG_FORGOT_PASSWORD.findMany()
    * ```
    */
  get lOG_FORGOT_PASSWORD(): Prisma.LOG_FORGOT_PASSWORDDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    DT_USER: 'DT_USER',
    DT_PROJECT: 'DT_PROJECT',
    DT_PROJECT_MEMBER: 'DT_PROJECT_MEMBER',
    DT_INVITATION: 'DT_INVITATION',
    LOG_FORGOT_PASSWORD: 'LOG_FORGOT_PASSWORD'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dT_USER" | "dT_PROJECT" | "dT_PROJECT_MEMBER" | "dT_INVITATION" | "lOG_FORGOT_PASSWORD"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DT_USER: {
        payload: Prisma.$DT_USERPayload<ExtArgs>
        fields: Prisma.DT_USERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DT_USERFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_USERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DT_USERFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_USERPayload>
          }
          findFirst: {
            args: Prisma.DT_USERFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_USERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DT_USERFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_USERPayload>
          }
          findMany: {
            args: Prisma.DT_USERFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_USERPayload>[]
          }
          create: {
            args: Prisma.DT_USERCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_USERPayload>
          }
          createMany: {
            args: Prisma.DT_USERCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DT_USERCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_USERPayload>[]
          }
          delete: {
            args: Prisma.DT_USERDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_USERPayload>
          }
          update: {
            args: Prisma.DT_USERUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_USERPayload>
          }
          deleteMany: {
            args: Prisma.DT_USERDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DT_USERUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DT_USERUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_USERPayload>[]
          }
          upsert: {
            args: Prisma.DT_USERUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_USERPayload>
          }
          aggregate: {
            args: Prisma.DT_USERAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDT_USER>
          }
          groupBy: {
            args: Prisma.DT_USERGroupByArgs<ExtArgs>
            result: $Utils.Optional<DT_USERGroupByOutputType>[]
          }
          count: {
            args: Prisma.DT_USERCountArgs<ExtArgs>
            result: $Utils.Optional<DT_USERCountAggregateOutputType> | number
          }
        }
      }
      DT_PROJECT: {
        payload: Prisma.$DT_PROJECTPayload<ExtArgs>
        fields: Prisma.DT_PROJECTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DT_PROJECTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DT_PROJECTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECTPayload>
          }
          findFirst: {
            args: Prisma.DT_PROJECTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DT_PROJECTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECTPayload>
          }
          findMany: {
            args: Prisma.DT_PROJECTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECTPayload>[]
          }
          create: {
            args: Prisma.DT_PROJECTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECTPayload>
          }
          createMany: {
            args: Prisma.DT_PROJECTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DT_PROJECTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECTPayload>[]
          }
          delete: {
            args: Prisma.DT_PROJECTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECTPayload>
          }
          update: {
            args: Prisma.DT_PROJECTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECTPayload>
          }
          deleteMany: {
            args: Prisma.DT_PROJECTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DT_PROJECTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DT_PROJECTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECTPayload>[]
          }
          upsert: {
            args: Prisma.DT_PROJECTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECTPayload>
          }
          aggregate: {
            args: Prisma.DT_PROJECTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDT_PROJECT>
          }
          groupBy: {
            args: Prisma.DT_PROJECTGroupByArgs<ExtArgs>
            result: $Utils.Optional<DT_PROJECTGroupByOutputType>[]
          }
          count: {
            args: Prisma.DT_PROJECTCountArgs<ExtArgs>
            result: $Utils.Optional<DT_PROJECTCountAggregateOutputType> | number
          }
        }
      }
      DT_PROJECT_MEMBER: {
        payload: Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>
        fields: Prisma.DT_PROJECT_MEMBERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DT_PROJECT_MEMBERFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECT_MEMBERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DT_PROJECT_MEMBERFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECT_MEMBERPayload>
          }
          findFirst: {
            args: Prisma.DT_PROJECT_MEMBERFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECT_MEMBERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DT_PROJECT_MEMBERFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECT_MEMBERPayload>
          }
          findMany: {
            args: Prisma.DT_PROJECT_MEMBERFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECT_MEMBERPayload>[]
          }
          create: {
            args: Prisma.DT_PROJECT_MEMBERCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECT_MEMBERPayload>
          }
          createMany: {
            args: Prisma.DT_PROJECT_MEMBERCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DT_PROJECT_MEMBERCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECT_MEMBERPayload>[]
          }
          delete: {
            args: Prisma.DT_PROJECT_MEMBERDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECT_MEMBERPayload>
          }
          update: {
            args: Prisma.DT_PROJECT_MEMBERUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECT_MEMBERPayload>
          }
          deleteMany: {
            args: Prisma.DT_PROJECT_MEMBERDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DT_PROJECT_MEMBERUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DT_PROJECT_MEMBERUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECT_MEMBERPayload>[]
          }
          upsert: {
            args: Prisma.DT_PROJECT_MEMBERUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_PROJECT_MEMBERPayload>
          }
          aggregate: {
            args: Prisma.DT_PROJECT_MEMBERAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDT_PROJECT_MEMBER>
          }
          groupBy: {
            args: Prisma.DT_PROJECT_MEMBERGroupByArgs<ExtArgs>
            result: $Utils.Optional<DT_PROJECT_MEMBERGroupByOutputType>[]
          }
          count: {
            args: Prisma.DT_PROJECT_MEMBERCountArgs<ExtArgs>
            result: $Utils.Optional<DT_PROJECT_MEMBERCountAggregateOutputType> | number
          }
        }
      }
      DT_INVITATION: {
        payload: Prisma.$DT_INVITATIONPayload<ExtArgs>
        fields: Prisma.DT_INVITATIONFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DT_INVITATIONFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_INVITATIONPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DT_INVITATIONFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_INVITATIONPayload>
          }
          findFirst: {
            args: Prisma.DT_INVITATIONFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_INVITATIONPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DT_INVITATIONFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_INVITATIONPayload>
          }
          findMany: {
            args: Prisma.DT_INVITATIONFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_INVITATIONPayload>[]
          }
          create: {
            args: Prisma.DT_INVITATIONCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_INVITATIONPayload>
          }
          createMany: {
            args: Prisma.DT_INVITATIONCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DT_INVITATIONCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_INVITATIONPayload>[]
          }
          delete: {
            args: Prisma.DT_INVITATIONDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_INVITATIONPayload>
          }
          update: {
            args: Prisma.DT_INVITATIONUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_INVITATIONPayload>
          }
          deleteMany: {
            args: Prisma.DT_INVITATIONDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DT_INVITATIONUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DT_INVITATIONUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_INVITATIONPayload>[]
          }
          upsert: {
            args: Prisma.DT_INVITATIONUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DT_INVITATIONPayload>
          }
          aggregate: {
            args: Prisma.DT_INVITATIONAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDT_INVITATION>
          }
          groupBy: {
            args: Prisma.DT_INVITATIONGroupByArgs<ExtArgs>
            result: $Utils.Optional<DT_INVITATIONGroupByOutputType>[]
          }
          count: {
            args: Prisma.DT_INVITATIONCountArgs<ExtArgs>
            result: $Utils.Optional<DT_INVITATIONCountAggregateOutputType> | number
          }
        }
      }
      LOG_FORGOT_PASSWORD: {
        payload: Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>
        fields: Prisma.LOG_FORGOT_PASSWORDFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LOG_FORGOT_PASSWORDFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOG_FORGOT_PASSWORDPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LOG_FORGOT_PASSWORDFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOG_FORGOT_PASSWORDPayload>
          }
          findFirst: {
            args: Prisma.LOG_FORGOT_PASSWORDFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOG_FORGOT_PASSWORDPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LOG_FORGOT_PASSWORDFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOG_FORGOT_PASSWORDPayload>
          }
          findMany: {
            args: Prisma.LOG_FORGOT_PASSWORDFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOG_FORGOT_PASSWORDPayload>[]
          }
          create: {
            args: Prisma.LOG_FORGOT_PASSWORDCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOG_FORGOT_PASSWORDPayload>
          }
          createMany: {
            args: Prisma.LOG_FORGOT_PASSWORDCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LOG_FORGOT_PASSWORDCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOG_FORGOT_PASSWORDPayload>[]
          }
          delete: {
            args: Prisma.LOG_FORGOT_PASSWORDDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOG_FORGOT_PASSWORDPayload>
          }
          update: {
            args: Prisma.LOG_FORGOT_PASSWORDUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOG_FORGOT_PASSWORDPayload>
          }
          deleteMany: {
            args: Prisma.LOG_FORGOT_PASSWORDDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LOG_FORGOT_PASSWORDUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LOG_FORGOT_PASSWORDUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOG_FORGOT_PASSWORDPayload>[]
          }
          upsert: {
            args: Prisma.LOG_FORGOT_PASSWORDUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOG_FORGOT_PASSWORDPayload>
          }
          aggregate: {
            args: Prisma.LOG_FORGOT_PASSWORDAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLOG_FORGOT_PASSWORD>
          }
          groupBy: {
            args: Prisma.LOG_FORGOT_PASSWORDGroupByArgs<ExtArgs>
            result: $Utils.Optional<LOG_FORGOT_PASSWORDGroupByOutputType>[]
          }
          count: {
            args: Prisma.LOG_FORGOT_PASSWORDCountArgs<ExtArgs>
            result: $Utils.Optional<LOG_FORGOT_PASSWORDCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    dT_USER?: DT_USEROmit
    dT_PROJECT?: DT_PROJECTOmit
    dT_PROJECT_MEMBER?: DT_PROJECT_MEMBEROmit
    dT_INVITATION?: DT_INVITATIONOmit
    lOG_FORGOT_PASSWORD?: LOG_FORGOT_PASSWORDOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type DT_USERCountOutputType
   */

  export type DT_USERCountOutputType = {
    projectMembers: number
  }

  export type DT_USERCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMembers?: boolean | DT_USERCountOutputTypeCountProjectMembersArgs
  }

  // Custom InputTypes
  /**
   * DT_USERCountOutputType without action
   */
  export type DT_USERCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USERCountOutputType
     */
    select?: DT_USERCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DT_USERCountOutputType without action
   */
  export type DT_USERCountOutputTypeCountProjectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DT_PROJECT_MEMBERWhereInput
  }


  /**
   * Count Type DT_PROJECTCountOutputType
   */

  export type DT_PROJECTCountOutputType = {
    projectMembers: number
  }

  export type DT_PROJECTCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMembers?: boolean | DT_PROJECTCountOutputTypeCountProjectMembersArgs
  }

  // Custom InputTypes
  /**
   * DT_PROJECTCountOutputType without action
   */
  export type DT_PROJECTCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECTCountOutputType
     */
    select?: DT_PROJECTCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DT_PROJECTCountOutputType without action
   */
  export type DT_PROJECTCountOutputTypeCountProjectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DT_PROJECT_MEMBERWhereInput
  }


  /**
   * Count Type DT_INVITATIONCountOutputType
   */

  export type DT_INVITATIONCountOutputType = {
    members: number
  }

  export type DT_INVITATIONCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | DT_INVITATIONCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * DT_INVITATIONCountOutputType without action
   */
  export type DT_INVITATIONCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATIONCountOutputType
     */
    select?: DT_INVITATIONCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DT_INVITATIONCountOutputType without action
   */
  export type DT_INVITATIONCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DT_PROJECT_MEMBERWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DT_USER
   */

  export type AggregateDT_USER = {
    _count: DT_USERCountAggregateOutputType | null
    _min: DT_USERMinAggregateOutputType | null
    _max: DT_USERMaxAggregateOutputType | null
  }

  export type DT_USERMinAggregateOutputType = {
    nik: string | null
    nama: string | null
    password: string | null
    no_telp: string | null
    email: string | null
  }

  export type DT_USERMaxAggregateOutputType = {
    nik: string | null
    nama: string | null
    password: string | null
    no_telp: string | null
    email: string | null
  }

  export type DT_USERCountAggregateOutputType = {
    nik: number
    nama: number
    password: number
    no_telp: number
    email: number
    _all: number
  }


  export type DT_USERMinAggregateInputType = {
    nik?: true
    nama?: true
    password?: true
    no_telp?: true
    email?: true
  }

  export type DT_USERMaxAggregateInputType = {
    nik?: true
    nama?: true
    password?: true
    no_telp?: true
    email?: true
  }

  export type DT_USERCountAggregateInputType = {
    nik?: true
    nama?: true
    password?: true
    no_telp?: true
    email?: true
    _all?: true
  }

  export type DT_USERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DT_USER to aggregate.
     */
    where?: DT_USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_USERS to fetch.
     */
    orderBy?: DT_USEROrderByWithRelationInput | DT_USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DT_USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DT_USERS
    **/
    _count?: true | DT_USERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DT_USERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DT_USERMaxAggregateInputType
  }

  export type GetDT_USERAggregateType<T extends DT_USERAggregateArgs> = {
        [P in keyof T & keyof AggregateDT_USER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDT_USER[P]>
      : GetScalarType<T[P], AggregateDT_USER[P]>
  }




  export type DT_USERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DT_USERWhereInput
    orderBy?: DT_USEROrderByWithAggregationInput | DT_USEROrderByWithAggregationInput[]
    by: DT_USERScalarFieldEnum[] | DT_USERScalarFieldEnum
    having?: DT_USERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DT_USERCountAggregateInputType | true
    _min?: DT_USERMinAggregateInputType
    _max?: DT_USERMaxAggregateInputType
  }

  export type DT_USERGroupByOutputType = {
    nik: string
    nama: string
    password: string
    no_telp: string
    email: string | null
    _count: DT_USERCountAggregateOutputType | null
    _min: DT_USERMinAggregateOutputType | null
    _max: DT_USERMaxAggregateOutputType | null
  }

  type GetDT_USERGroupByPayload<T extends DT_USERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DT_USERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DT_USERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DT_USERGroupByOutputType[P]>
            : GetScalarType<T[P], DT_USERGroupByOutputType[P]>
        }
      >
    >


  export type DT_USERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nik?: boolean
    nama?: boolean
    password?: boolean
    no_telp?: boolean
    email?: boolean
    projectMembers?: boolean | DT_USER$projectMembersArgs<ExtArgs>
    _count?: boolean | DT_USERCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dT_USER"]>

  export type DT_USERSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nik?: boolean
    nama?: boolean
    password?: boolean
    no_telp?: boolean
    email?: boolean
  }, ExtArgs["result"]["dT_USER"]>

  export type DT_USERSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nik?: boolean
    nama?: boolean
    password?: boolean
    no_telp?: boolean
    email?: boolean
  }, ExtArgs["result"]["dT_USER"]>

  export type DT_USERSelectScalar = {
    nik?: boolean
    nama?: boolean
    password?: boolean
    no_telp?: boolean
    email?: boolean
  }

  export type DT_USEROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nik" | "nama" | "password" | "no_telp" | "email", ExtArgs["result"]["dT_USER"]>
  export type DT_USERInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMembers?: boolean | DT_USER$projectMembersArgs<ExtArgs>
    _count?: boolean | DT_USERCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DT_USERIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DT_USERIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DT_USERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DT_USER"
    objects: {
      projectMembers: Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nik: string
      nama: string
      password: string
      no_telp: string
      email: string | null
    }, ExtArgs["result"]["dT_USER"]>
    composites: {}
  }

  type DT_USERGetPayload<S extends boolean | null | undefined | DT_USERDefaultArgs> = $Result.GetResult<Prisma.$DT_USERPayload, S>

  type DT_USERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DT_USERFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DT_USERCountAggregateInputType | true
    }

  export interface DT_USERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DT_USER'], meta: { name: 'DT_USER' } }
    /**
     * Find zero or one DT_USER that matches the filter.
     * @param {DT_USERFindUniqueArgs} args - Arguments to find a DT_USER
     * @example
     * // Get one DT_USER
     * const dT_USER = await prisma.dT_USER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DT_USERFindUniqueArgs>(args: SelectSubset<T, DT_USERFindUniqueArgs<ExtArgs>>): Prisma__DT_USERClient<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DT_USER that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DT_USERFindUniqueOrThrowArgs} args - Arguments to find a DT_USER
     * @example
     * // Get one DT_USER
     * const dT_USER = await prisma.dT_USER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DT_USERFindUniqueOrThrowArgs>(args: SelectSubset<T, DT_USERFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DT_USERClient<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DT_USER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_USERFindFirstArgs} args - Arguments to find a DT_USER
     * @example
     * // Get one DT_USER
     * const dT_USER = await prisma.dT_USER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DT_USERFindFirstArgs>(args?: SelectSubset<T, DT_USERFindFirstArgs<ExtArgs>>): Prisma__DT_USERClient<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DT_USER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_USERFindFirstOrThrowArgs} args - Arguments to find a DT_USER
     * @example
     * // Get one DT_USER
     * const dT_USER = await prisma.dT_USER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DT_USERFindFirstOrThrowArgs>(args?: SelectSubset<T, DT_USERFindFirstOrThrowArgs<ExtArgs>>): Prisma__DT_USERClient<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DT_USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_USERFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DT_USERS
     * const dT_USERS = await prisma.dT_USER.findMany()
     * 
     * // Get first 10 DT_USERS
     * const dT_USERS = await prisma.dT_USER.findMany({ take: 10 })
     * 
     * // Only select the `nik`
     * const dT_USERWithNikOnly = await prisma.dT_USER.findMany({ select: { nik: true } })
     * 
     */
    findMany<T extends DT_USERFindManyArgs>(args?: SelectSubset<T, DT_USERFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DT_USER.
     * @param {DT_USERCreateArgs} args - Arguments to create a DT_USER.
     * @example
     * // Create one DT_USER
     * const DT_USER = await prisma.dT_USER.create({
     *   data: {
     *     // ... data to create a DT_USER
     *   }
     * })
     * 
     */
    create<T extends DT_USERCreateArgs>(args: SelectSubset<T, DT_USERCreateArgs<ExtArgs>>): Prisma__DT_USERClient<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DT_USERS.
     * @param {DT_USERCreateManyArgs} args - Arguments to create many DT_USERS.
     * @example
     * // Create many DT_USERS
     * const dT_USER = await prisma.dT_USER.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DT_USERCreateManyArgs>(args?: SelectSubset<T, DT_USERCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DT_USERS and returns the data saved in the database.
     * @param {DT_USERCreateManyAndReturnArgs} args - Arguments to create many DT_USERS.
     * @example
     * // Create many DT_USERS
     * const dT_USER = await prisma.dT_USER.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DT_USERS and only return the `nik`
     * const dT_USERWithNikOnly = await prisma.dT_USER.createManyAndReturn({
     *   select: { nik: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DT_USERCreateManyAndReturnArgs>(args?: SelectSubset<T, DT_USERCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DT_USER.
     * @param {DT_USERDeleteArgs} args - Arguments to delete one DT_USER.
     * @example
     * // Delete one DT_USER
     * const DT_USER = await prisma.dT_USER.delete({
     *   where: {
     *     // ... filter to delete one DT_USER
     *   }
     * })
     * 
     */
    delete<T extends DT_USERDeleteArgs>(args: SelectSubset<T, DT_USERDeleteArgs<ExtArgs>>): Prisma__DT_USERClient<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DT_USER.
     * @param {DT_USERUpdateArgs} args - Arguments to update one DT_USER.
     * @example
     * // Update one DT_USER
     * const dT_USER = await prisma.dT_USER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DT_USERUpdateArgs>(args: SelectSubset<T, DT_USERUpdateArgs<ExtArgs>>): Prisma__DT_USERClient<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DT_USERS.
     * @param {DT_USERDeleteManyArgs} args - Arguments to filter DT_USERS to delete.
     * @example
     * // Delete a few DT_USERS
     * const { count } = await prisma.dT_USER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DT_USERDeleteManyArgs>(args?: SelectSubset<T, DT_USERDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DT_USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_USERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DT_USERS
     * const dT_USER = await prisma.dT_USER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DT_USERUpdateManyArgs>(args: SelectSubset<T, DT_USERUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DT_USERS and returns the data updated in the database.
     * @param {DT_USERUpdateManyAndReturnArgs} args - Arguments to update many DT_USERS.
     * @example
     * // Update many DT_USERS
     * const dT_USER = await prisma.dT_USER.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DT_USERS and only return the `nik`
     * const dT_USERWithNikOnly = await prisma.dT_USER.updateManyAndReturn({
     *   select: { nik: true },
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
    updateManyAndReturn<T extends DT_USERUpdateManyAndReturnArgs>(args: SelectSubset<T, DT_USERUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DT_USER.
     * @param {DT_USERUpsertArgs} args - Arguments to update or create a DT_USER.
     * @example
     * // Update or create a DT_USER
     * const dT_USER = await prisma.dT_USER.upsert({
     *   create: {
     *     // ... data to create a DT_USER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DT_USER we want to update
     *   }
     * })
     */
    upsert<T extends DT_USERUpsertArgs>(args: SelectSubset<T, DT_USERUpsertArgs<ExtArgs>>): Prisma__DT_USERClient<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DT_USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_USERCountArgs} args - Arguments to filter DT_USERS to count.
     * @example
     * // Count the number of DT_USERS
     * const count = await prisma.dT_USER.count({
     *   where: {
     *     // ... the filter for the DT_USERS we want to count
     *   }
     * })
    **/
    count<T extends DT_USERCountArgs>(
      args?: Subset<T, DT_USERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DT_USERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DT_USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_USERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DT_USERAggregateArgs>(args: Subset<T, DT_USERAggregateArgs>): Prisma.PrismaPromise<GetDT_USERAggregateType<T>>

    /**
     * Group by DT_USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_USERGroupByArgs} args - Group by arguments.
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
      T extends DT_USERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DT_USERGroupByArgs['orderBy'] }
        : { orderBy?: DT_USERGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DT_USERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDT_USERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DT_USER model
   */
  readonly fields: DT_USERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DT_USER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DT_USERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectMembers<T extends DT_USER$projectMembersArgs<ExtArgs> = {}>(args?: Subset<T, DT_USER$projectMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DT_USER model
   */
  interface DT_USERFieldRefs {
    readonly nik: FieldRef<"DT_USER", 'String'>
    readonly nama: FieldRef<"DT_USER", 'String'>
    readonly password: FieldRef<"DT_USER", 'String'>
    readonly no_telp: FieldRef<"DT_USER", 'String'>
    readonly email: FieldRef<"DT_USER", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DT_USER findUnique
   */
  export type DT_USERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_USERInclude<ExtArgs> | null
    /**
     * Filter, which DT_USER to fetch.
     */
    where: DT_USERWhereUniqueInput
  }

  /**
   * DT_USER findUniqueOrThrow
   */
  export type DT_USERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_USERInclude<ExtArgs> | null
    /**
     * Filter, which DT_USER to fetch.
     */
    where: DT_USERWhereUniqueInput
  }

  /**
   * DT_USER findFirst
   */
  export type DT_USERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_USERInclude<ExtArgs> | null
    /**
     * Filter, which DT_USER to fetch.
     */
    where?: DT_USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_USERS to fetch.
     */
    orderBy?: DT_USEROrderByWithRelationInput | DT_USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DT_USERS.
     */
    cursor?: DT_USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DT_USERS.
     */
    distinct?: DT_USERScalarFieldEnum | DT_USERScalarFieldEnum[]
  }

  /**
   * DT_USER findFirstOrThrow
   */
  export type DT_USERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_USERInclude<ExtArgs> | null
    /**
     * Filter, which DT_USER to fetch.
     */
    where?: DT_USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_USERS to fetch.
     */
    orderBy?: DT_USEROrderByWithRelationInput | DT_USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DT_USERS.
     */
    cursor?: DT_USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DT_USERS.
     */
    distinct?: DT_USERScalarFieldEnum | DT_USERScalarFieldEnum[]
  }

  /**
   * DT_USER findMany
   */
  export type DT_USERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_USERInclude<ExtArgs> | null
    /**
     * Filter, which DT_USERS to fetch.
     */
    where?: DT_USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_USERS to fetch.
     */
    orderBy?: DT_USEROrderByWithRelationInput | DT_USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DT_USERS.
     */
    cursor?: DT_USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_USERS.
     */
    skip?: number
    distinct?: DT_USERScalarFieldEnum | DT_USERScalarFieldEnum[]
  }

  /**
   * DT_USER create
   */
  export type DT_USERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_USERInclude<ExtArgs> | null
    /**
     * The data needed to create a DT_USER.
     */
    data: XOR<DT_USERCreateInput, DT_USERUncheckedCreateInput>
  }

  /**
   * DT_USER createMany
   */
  export type DT_USERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DT_USERS.
     */
    data: DT_USERCreateManyInput | DT_USERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DT_USER createManyAndReturn
   */
  export type DT_USERCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * The data used to create many DT_USERS.
     */
    data: DT_USERCreateManyInput | DT_USERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DT_USER update
   */
  export type DT_USERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_USERInclude<ExtArgs> | null
    /**
     * The data needed to update a DT_USER.
     */
    data: XOR<DT_USERUpdateInput, DT_USERUncheckedUpdateInput>
    /**
     * Choose, which DT_USER to update.
     */
    where: DT_USERWhereUniqueInput
  }

  /**
   * DT_USER updateMany
   */
  export type DT_USERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DT_USERS.
     */
    data: XOR<DT_USERUpdateManyMutationInput, DT_USERUncheckedUpdateManyInput>
    /**
     * Filter which DT_USERS to update
     */
    where?: DT_USERWhereInput
    /**
     * Limit how many DT_USERS to update.
     */
    limit?: number
  }

  /**
   * DT_USER updateManyAndReturn
   */
  export type DT_USERUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * The data used to update DT_USERS.
     */
    data: XOR<DT_USERUpdateManyMutationInput, DT_USERUncheckedUpdateManyInput>
    /**
     * Filter which DT_USERS to update
     */
    where?: DT_USERWhereInput
    /**
     * Limit how many DT_USERS to update.
     */
    limit?: number
  }

  /**
   * DT_USER upsert
   */
  export type DT_USERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_USERInclude<ExtArgs> | null
    /**
     * The filter to search for the DT_USER to update in case it exists.
     */
    where: DT_USERWhereUniqueInput
    /**
     * In case the DT_USER found by the `where` argument doesn't exist, create a new DT_USER with this data.
     */
    create: XOR<DT_USERCreateInput, DT_USERUncheckedCreateInput>
    /**
     * In case the DT_USER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DT_USERUpdateInput, DT_USERUncheckedUpdateInput>
  }

  /**
   * DT_USER delete
   */
  export type DT_USERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_USERInclude<ExtArgs> | null
    /**
     * Filter which DT_USER to delete.
     */
    where: DT_USERWhereUniqueInput
  }

  /**
   * DT_USER deleteMany
   */
  export type DT_USERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DT_USERS to delete
     */
    where?: DT_USERWhereInput
    /**
     * Limit how many DT_USERS to delete.
     */
    limit?: number
  }

  /**
   * DT_USER.projectMembers
   */
  export type DT_USER$projectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    where?: DT_PROJECT_MEMBERWhereInput
    orderBy?: DT_PROJECT_MEMBEROrderByWithRelationInput | DT_PROJECT_MEMBEROrderByWithRelationInput[]
    cursor?: DT_PROJECT_MEMBERWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DT_PROJECT_MEMBERScalarFieldEnum | DT_PROJECT_MEMBERScalarFieldEnum[]
  }

  /**
   * DT_USER without action
   */
  export type DT_USERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_USERInclude<ExtArgs> | null
  }


  /**
   * Model DT_PROJECT
   */

  export type AggregateDT_PROJECT = {
    _count: DT_PROJECTCountAggregateOutputType | null
    _min: DT_PROJECTMinAggregateOutputType | null
    _max: DT_PROJECTMaxAggregateOutputType | null
  }

  export type DT_PROJECTMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DT_PROJECTMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DT_PROJECTCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DT_PROJECTMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DT_PROJECTMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DT_PROJECTCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DT_PROJECTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DT_PROJECT to aggregate.
     */
    where?: DT_PROJECTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_PROJECTS to fetch.
     */
    orderBy?: DT_PROJECTOrderByWithRelationInput | DT_PROJECTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DT_PROJECTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_PROJECTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_PROJECTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DT_PROJECTS
    **/
    _count?: true | DT_PROJECTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DT_PROJECTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DT_PROJECTMaxAggregateInputType
  }

  export type GetDT_PROJECTAggregateType<T extends DT_PROJECTAggregateArgs> = {
        [P in keyof T & keyof AggregateDT_PROJECT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDT_PROJECT[P]>
      : GetScalarType<T[P], AggregateDT_PROJECT[P]>
  }




  export type DT_PROJECTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DT_PROJECTWhereInput
    orderBy?: DT_PROJECTOrderByWithAggregationInput | DT_PROJECTOrderByWithAggregationInput[]
    by: DT_PROJECTScalarFieldEnum[] | DT_PROJECTScalarFieldEnum
    having?: DT_PROJECTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DT_PROJECTCountAggregateInputType | true
    _min?: DT_PROJECTMinAggregateInputType
    _max?: DT_PROJECTMaxAggregateInputType
  }

  export type DT_PROJECTGroupByOutputType = {
    id: string
    name: string
    _count: DT_PROJECTCountAggregateOutputType | null
    _min: DT_PROJECTMinAggregateOutputType | null
    _max: DT_PROJECTMaxAggregateOutputType | null
  }

  type GetDT_PROJECTGroupByPayload<T extends DT_PROJECTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DT_PROJECTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DT_PROJECTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DT_PROJECTGroupByOutputType[P]>
            : GetScalarType<T[P], DT_PROJECTGroupByOutputType[P]>
        }
      >
    >


  export type DT_PROJECTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectMembers?: boolean | DT_PROJECT$projectMembersArgs<ExtArgs>
    _count?: boolean | DT_PROJECTCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dT_PROJECT"]>

  export type DT_PROJECTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["dT_PROJECT"]>

  export type DT_PROJECTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["dT_PROJECT"]>

  export type DT_PROJECTSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DT_PROJECTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["dT_PROJECT"]>
  export type DT_PROJECTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMembers?: boolean | DT_PROJECT$projectMembersArgs<ExtArgs>
    _count?: boolean | DT_PROJECTCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DT_PROJECTIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DT_PROJECTIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DT_PROJECTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DT_PROJECT"
    objects: {
      projectMembers: Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["dT_PROJECT"]>
    composites: {}
  }

  type DT_PROJECTGetPayload<S extends boolean | null | undefined | DT_PROJECTDefaultArgs> = $Result.GetResult<Prisma.$DT_PROJECTPayload, S>

  type DT_PROJECTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DT_PROJECTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DT_PROJECTCountAggregateInputType | true
    }

  export interface DT_PROJECTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DT_PROJECT'], meta: { name: 'DT_PROJECT' } }
    /**
     * Find zero or one DT_PROJECT that matches the filter.
     * @param {DT_PROJECTFindUniqueArgs} args - Arguments to find a DT_PROJECT
     * @example
     * // Get one DT_PROJECT
     * const dT_PROJECT = await prisma.dT_PROJECT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DT_PROJECTFindUniqueArgs>(args: SelectSubset<T, DT_PROJECTFindUniqueArgs<ExtArgs>>): Prisma__DT_PROJECTClient<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DT_PROJECT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DT_PROJECTFindUniqueOrThrowArgs} args - Arguments to find a DT_PROJECT
     * @example
     * // Get one DT_PROJECT
     * const dT_PROJECT = await prisma.dT_PROJECT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DT_PROJECTFindUniqueOrThrowArgs>(args: SelectSubset<T, DT_PROJECTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DT_PROJECTClient<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DT_PROJECT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECTFindFirstArgs} args - Arguments to find a DT_PROJECT
     * @example
     * // Get one DT_PROJECT
     * const dT_PROJECT = await prisma.dT_PROJECT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DT_PROJECTFindFirstArgs>(args?: SelectSubset<T, DT_PROJECTFindFirstArgs<ExtArgs>>): Prisma__DT_PROJECTClient<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DT_PROJECT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECTFindFirstOrThrowArgs} args - Arguments to find a DT_PROJECT
     * @example
     * // Get one DT_PROJECT
     * const dT_PROJECT = await prisma.dT_PROJECT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DT_PROJECTFindFirstOrThrowArgs>(args?: SelectSubset<T, DT_PROJECTFindFirstOrThrowArgs<ExtArgs>>): Prisma__DT_PROJECTClient<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DT_PROJECTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DT_PROJECTS
     * const dT_PROJECTS = await prisma.dT_PROJECT.findMany()
     * 
     * // Get first 10 DT_PROJECTS
     * const dT_PROJECTS = await prisma.dT_PROJECT.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dT_PROJECTWithIdOnly = await prisma.dT_PROJECT.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DT_PROJECTFindManyArgs>(args?: SelectSubset<T, DT_PROJECTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DT_PROJECT.
     * @param {DT_PROJECTCreateArgs} args - Arguments to create a DT_PROJECT.
     * @example
     * // Create one DT_PROJECT
     * const DT_PROJECT = await prisma.dT_PROJECT.create({
     *   data: {
     *     // ... data to create a DT_PROJECT
     *   }
     * })
     * 
     */
    create<T extends DT_PROJECTCreateArgs>(args: SelectSubset<T, DT_PROJECTCreateArgs<ExtArgs>>): Prisma__DT_PROJECTClient<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DT_PROJECTS.
     * @param {DT_PROJECTCreateManyArgs} args - Arguments to create many DT_PROJECTS.
     * @example
     * // Create many DT_PROJECTS
     * const dT_PROJECT = await prisma.dT_PROJECT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DT_PROJECTCreateManyArgs>(args?: SelectSubset<T, DT_PROJECTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DT_PROJECTS and returns the data saved in the database.
     * @param {DT_PROJECTCreateManyAndReturnArgs} args - Arguments to create many DT_PROJECTS.
     * @example
     * // Create many DT_PROJECTS
     * const dT_PROJECT = await prisma.dT_PROJECT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DT_PROJECTS and only return the `id`
     * const dT_PROJECTWithIdOnly = await prisma.dT_PROJECT.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DT_PROJECTCreateManyAndReturnArgs>(args?: SelectSubset<T, DT_PROJECTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DT_PROJECT.
     * @param {DT_PROJECTDeleteArgs} args - Arguments to delete one DT_PROJECT.
     * @example
     * // Delete one DT_PROJECT
     * const DT_PROJECT = await prisma.dT_PROJECT.delete({
     *   where: {
     *     // ... filter to delete one DT_PROJECT
     *   }
     * })
     * 
     */
    delete<T extends DT_PROJECTDeleteArgs>(args: SelectSubset<T, DT_PROJECTDeleteArgs<ExtArgs>>): Prisma__DT_PROJECTClient<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DT_PROJECT.
     * @param {DT_PROJECTUpdateArgs} args - Arguments to update one DT_PROJECT.
     * @example
     * // Update one DT_PROJECT
     * const dT_PROJECT = await prisma.dT_PROJECT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DT_PROJECTUpdateArgs>(args: SelectSubset<T, DT_PROJECTUpdateArgs<ExtArgs>>): Prisma__DT_PROJECTClient<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DT_PROJECTS.
     * @param {DT_PROJECTDeleteManyArgs} args - Arguments to filter DT_PROJECTS to delete.
     * @example
     * // Delete a few DT_PROJECTS
     * const { count } = await prisma.dT_PROJECT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DT_PROJECTDeleteManyArgs>(args?: SelectSubset<T, DT_PROJECTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DT_PROJECTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DT_PROJECTS
     * const dT_PROJECT = await prisma.dT_PROJECT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DT_PROJECTUpdateManyArgs>(args: SelectSubset<T, DT_PROJECTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DT_PROJECTS and returns the data updated in the database.
     * @param {DT_PROJECTUpdateManyAndReturnArgs} args - Arguments to update many DT_PROJECTS.
     * @example
     * // Update many DT_PROJECTS
     * const dT_PROJECT = await prisma.dT_PROJECT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DT_PROJECTS and only return the `id`
     * const dT_PROJECTWithIdOnly = await prisma.dT_PROJECT.updateManyAndReturn({
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
    updateManyAndReturn<T extends DT_PROJECTUpdateManyAndReturnArgs>(args: SelectSubset<T, DT_PROJECTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DT_PROJECT.
     * @param {DT_PROJECTUpsertArgs} args - Arguments to update or create a DT_PROJECT.
     * @example
     * // Update or create a DT_PROJECT
     * const dT_PROJECT = await prisma.dT_PROJECT.upsert({
     *   create: {
     *     // ... data to create a DT_PROJECT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DT_PROJECT we want to update
     *   }
     * })
     */
    upsert<T extends DT_PROJECTUpsertArgs>(args: SelectSubset<T, DT_PROJECTUpsertArgs<ExtArgs>>): Prisma__DT_PROJECTClient<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DT_PROJECTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECTCountArgs} args - Arguments to filter DT_PROJECTS to count.
     * @example
     * // Count the number of DT_PROJECTS
     * const count = await prisma.dT_PROJECT.count({
     *   where: {
     *     // ... the filter for the DT_PROJECTS we want to count
     *   }
     * })
    **/
    count<T extends DT_PROJECTCountArgs>(
      args?: Subset<T, DT_PROJECTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DT_PROJECTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DT_PROJECT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DT_PROJECTAggregateArgs>(args: Subset<T, DT_PROJECTAggregateArgs>): Prisma.PrismaPromise<GetDT_PROJECTAggregateType<T>>

    /**
     * Group by DT_PROJECT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECTGroupByArgs} args - Group by arguments.
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
      T extends DT_PROJECTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DT_PROJECTGroupByArgs['orderBy'] }
        : { orderBy?: DT_PROJECTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DT_PROJECTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDT_PROJECTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DT_PROJECT model
   */
  readonly fields: DT_PROJECTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DT_PROJECT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DT_PROJECTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectMembers<T extends DT_PROJECT$projectMembersArgs<ExtArgs> = {}>(args?: Subset<T, DT_PROJECT$projectMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DT_PROJECT model
   */
  interface DT_PROJECTFieldRefs {
    readonly id: FieldRef<"DT_PROJECT", 'String'>
    readonly name: FieldRef<"DT_PROJECT", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DT_PROJECT findUnique
   */
  export type DT_PROJECTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECTInclude<ExtArgs> | null
    /**
     * Filter, which DT_PROJECT to fetch.
     */
    where: DT_PROJECTWhereUniqueInput
  }

  /**
   * DT_PROJECT findUniqueOrThrow
   */
  export type DT_PROJECTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECTInclude<ExtArgs> | null
    /**
     * Filter, which DT_PROJECT to fetch.
     */
    where: DT_PROJECTWhereUniqueInput
  }

  /**
   * DT_PROJECT findFirst
   */
  export type DT_PROJECTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECTInclude<ExtArgs> | null
    /**
     * Filter, which DT_PROJECT to fetch.
     */
    where?: DT_PROJECTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_PROJECTS to fetch.
     */
    orderBy?: DT_PROJECTOrderByWithRelationInput | DT_PROJECTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DT_PROJECTS.
     */
    cursor?: DT_PROJECTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_PROJECTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_PROJECTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DT_PROJECTS.
     */
    distinct?: DT_PROJECTScalarFieldEnum | DT_PROJECTScalarFieldEnum[]
  }

  /**
   * DT_PROJECT findFirstOrThrow
   */
  export type DT_PROJECTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECTInclude<ExtArgs> | null
    /**
     * Filter, which DT_PROJECT to fetch.
     */
    where?: DT_PROJECTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_PROJECTS to fetch.
     */
    orderBy?: DT_PROJECTOrderByWithRelationInput | DT_PROJECTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DT_PROJECTS.
     */
    cursor?: DT_PROJECTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_PROJECTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_PROJECTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DT_PROJECTS.
     */
    distinct?: DT_PROJECTScalarFieldEnum | DT_PROJECTScalarFieldEnum[]
  }

  /**
   * DT_PROJECT findMany
   */
  export type DT_PROJECTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECTInclude<ExtArgs> | null
    /**
     * Filter, which DT_PROJECTS to fetch.
     */
    where?: DT_PROJECTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_PROJECTS to fetch.
     */
    orderBy?: DT_PROJECTOrderByWithRelationInput | DT_PROJECTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DT_PROJECTS.
     */
    cursor?: DT_PROJECTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_PROJECTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_PROJECTS.
     */
    skip?: number
    distinct?: DT_PROJECTScalarFieldEnum | DT_PROJECTScalarFieldEnum[]
  }

  /**
   * DT_PROJECT create
   */
  export type DT_PROJECTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECTInclude<ExtArgs> | null
    /**
     * The data needed to create a DT_PROJECT.
     */
    data: XOR<DT_PROJECTCreateInput, DT_PROJECTUncheckedCreateInput>
  }

  /**
   * DT_PROJECT createMany
   */
  export type DT_PROJECTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DT_PROJECTS.
     */
    data: DT_PROJECTCreateManyInput | DT_PROJECTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DT_PROJECT createManyAndReturn
   */
  export type DT_PROJECTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * The data used to create many DT_PROJECTS.
     */
    data: DT_PROJECTCreateManyInput | DT_PROJECTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DT_PROJECT update
   */
  export type DT_PROJECTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECTInclude<ExtArgs> | null
    /**
     * The data needed to update a DT_PROJECT.
     */
    data: XOR<DT_PROJECTUpdateInput, DT_PROJECTUncheckedUpdateInput>
    /**
     * Choose, which DT_PROJECT to update.
     */
    where: DT_PROJECTWhereUniqueInput
  }

  /**
   * DT_PROJECT updateMany
   */
  export type DT_PROJECTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DT_PROJECTS.
     */
    data: XOR<DT_PROJECTUpdateManyMutationInput, DT_PROJECTUncheckedUpdateManyInput>
    /**
     * Filter which DT_PROJECTS to update
     */
    where?: DT_PROJECTWhereInput
    /**
     * Limit how many DT_PROJECTS to update.
     */
    limit?: number
  }

  /**
   * DT_PROJECT updateManyAndReturn
   */
  export type DT_PROJECTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * The data used to update DT_PROJECTS.
     */
    data: XOR<DT_PROJECTUpdateManyMutationInput, DT_PROJECTUncheckedUpdateManyInput>
    /**
     * Filter which DT_PROJECTS to update
     */
    where?: DT_PROJECTWhereInput
    /**
     * Limit how many DT_PROJECTS to update.
     */
    limit?: number
  }

  /**
   * DT_PROJECT upsert
   */
  export type DT_PROJECTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECTInclude<ExtArgs> | null
    /**
     * The filter to search for the DT_PROJECT to update in case it exists.
     */
    where: DT_PROJECTWhereUniqueInput
    /**
     * In case the DT_PROJECT found by the `where` argument doesn't exist, create a new DT_PROJECT with this data.
     */
    create: XOR<DT_PROJECTCreateInput, DT_PROJECTUncheckedCreateInput>
    /**
     * In case the DT_PROJECT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DT_PROJECTUpdateInput, DT_PROJECTUncheckedUpdateInput>
  }

  /**
   * DT_PROJECT delete
   */
  export type DT_PROJECTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECTInclude<ExtArgs> | null
    /**
     * Filter which DT_PROJECT to delete.
     */
    where: DT_PROJECTWhereUniqueInput
  }

  /**
   * DT_PROJECT deleteMany
   */
  export type DT_PROJECTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DT_PROJECTS to delete
     */
    where?: DT_PROJECTWhereInput
    /**
     * Limit how many DT_PROJECTS to delete.
     */
    limit?: number
  }

  /**
   * DT_PROJECT.projectMembers
   */
  export type DT_PROJECT$projectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    where?: DT_PROJECT_MEMBERWhereInput
    orderBy?: DT_PROJECT_MEMBEROrderByWithRelationInput | DT_PROJECT_MEMBEROrderByWithRelationInput[]
    cursor?: DT_PROJECT_MEMBERWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DT_PROJECT_MEMBERScalarFieldEnum | DT_PROJECT_MEMBERScalarFieldEnum[]
  }

  /**
   * DT_PROJECT without action
   */
  export type DT_PROJECTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECTInclude<ExtArgs> | null
  }


  /**
   * Model DT_PROJECT_MEMBER
   */

  export type AggregateDT_PROJECT_MEMBER = {
    _count: DT_PROJECT_MEMBERCountAggregateOutputType | null
    _min: DT_PROJECT_MEMBERMinAggregateOutputType | null
    _max: DT_PROJECT_MEMBERMaxAggregateOutputType | null
  }

  export type DT_PROJECT_MEMBERMinAggregateOutputType = {
    id: string | null
    nik_user: string | null
    role_project: string | null
    is_invitation: boolean | null
    ID_INVITATION: string | null
    projectId: string | null
  }

  export type DT_PROJECT_MEMBERMaxAggregateOutputType = {
    id: string | null
    nik_user: string | null
    role_project: string | null
    is_invitation: boolean | null
    ID_INVITATION: string | null
    projectId: string | null
  }

  export type DT_PROJECT_MEMBERCountAggregateOutputType = {
    id: number
    nik_user: number
    role_project: number
    is_invitation: number
    ID_INVITATION: number
    projectId: number
    _all: number
  }


  export type DT_PROJECT_MEMBERMinAggregateInputType = {
    id?: true
    nik_user?: true
    role_project?: true
    is_invitation?: true
    ID_INVITATION?: true
    projectId?: true
  }

  export type DT_PROJECT_MEMBERMaxAggregateInputType = {
    id?: true
    nik_user?: true
    role_project?: true
    is_invitation?: true
    ID_INVITATION?: true
    projectId?: true
  }

  export type DT_PROJECT_MEMBERCountAggregateInputType = {
    id?: true
    nik_user?: true
    role_project?: true
    is_invitation?: true
    ID_INVITATION?: true
    projectId?: true
    _all?: true
  }

  export type DT_PROJECT_MEMBERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DT_PROJECT_MEMBER to aggregate.
     */
    where?: DT_PROJECT_MEMBERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_PROJECT_MEMBERS to fetch.
     */
    orderBy?: DT_PROJECT_MEMBEROrderByWithRelationInput | DT_PROJECT_MEMBEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DT_PROJECT_MEMBERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_PROJECT_MEMBERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_PROJECT_MEMBERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DT_PROJECT_MEMBERS
    **/
    _count?: true | DT_PROJECT_MEMBERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DT_PROJECT_MEMBERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DT_PROJECT_MEMBERMaxAggregateInputType
  }

  export type GetDT_PROJECT_MEMBERAggregateType<T extends DT_PROJECT_MEMBERAggregateArgs> = {
        [P in keyof T & keyof AggregateDT_PROJECT_MEMBER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDT_PROJECT_MEMBER[P]>
      : GetScalarType<T[P], AggregateDT_PROJECT_MEMBER[P]>
  }




  export type DT_PROJECT_MEMBERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DT_PROJECT_MEMBERWhereInput
    orderBy?: DT_PROJECT_MEMBEROrderByWithAggregationInput | DT_PROJECT_MEMBEROrderByWithAggregationInput[]
    by: DT_PROJECT_MEMBERScalarFieldEnum[] | DT_PROJECT_MEMBERScalarFieldEnum
    having?: DT_PROJECT_MEMBERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DT_PROJECT_MEMBERCountAggregateInputType | true
    _min?: DT_PROJECT_MEMBERMinAggregateInputType
    _max?: DT_PROJECT_MEMBERMaxAggregateInputType
  }

  export type DT_PROJECT_MEMBERGroupByOutputType = {
    id: string
    nik_user: string | null
    role_project: string | null
    is_invitation: boolean | null
    ID_INVITATION: string | null
    projectId: string | null
    _count: DT_PROJECT_MEMBERCountAggregateOutputType | null
    _min: DT_PROJECT_MEMBERMinAggregateOutputType | null
    _max: DT_PROJECT_MEMBERMaxAggregateOutputType | null
  }

  type GetDT_PROJECT_MEMBERGroupByPayload<T extends DT_PROJECT_MEMBERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DT_PROJECT_MEMBERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DT_PROJECT_MEMBERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DT_PROJECT_MEMBERGroupByOutputType[P]>
            : GetScalarType<T[P], DT_PROJECT_MEMBERGroupByOutputType[P]>
        }
      >
    >


  export type DT_PROJECT_MEMBERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nik_user?: boolean
    role_project?: boolean
    is_invitation?: boolean
    ID_INVITATION?: boolean
    projectId?: boolean
    user?: boolean | DT_PROJECT_MEMBER$userArgs<ExtArgs>
    project?: boolean | DT_PROJECT_MEMBER$projectArgs<ExtArgs>
    invitation?: boolean | DT_PROJECT_MEMBER$invitationArgs<ExtArgs>
  }, ExtArgs["result"]["dT_PROJECT_MEMBER"]>

  export type DT_PROJECT_MEMBERSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nik_user?: boolean
    role_project?: boolean
    is_invitation?: boolean
    ID_INVITATION?: boolean
    projectId?: boolean
    user?: boolean | DT_PROJECT_MEMBER$userArgs<ExtArgs>
    project?: boolean | DT_PROJECT_MEMBER$projectArgs<ExtArgs>
    invitation?: boolean | DT_PROJECT_MEMBER$invitationArgs<ExtArgs>
  }, ExtArgs["result"]["dT_PROJECT_MEMBER"]>

  export type DT_PROJECT_MEMBERSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nik_user?: boolean
    role_project?: boolean
    is_invitation?: boolean
    ID_INVITATION?: boolean
    projectId?: boolean
    user?: boolean | DT_PROJECT_MEMBER$userArgs<ExtArgs>
    project?: boolean | DT_PROJECT_MEMBER$projectArgs<ExtArgs>
    invitation?: boolean | DT_PROJECT_MEMBER$invitationArgs<ExtArgs>
  }, ExtArgs["result"]["dT_PROJECT_MEMBER"]>

  export type DT_PROJECT_MEMBERSelectScalar = {
    id?: boolean
    nik_user?: boolean
    role_project?: boolean
    is_invitation?: boolean
    ID_INVITATION?: boolean
    projectId?: boolean
  }

  export type DT_PROJECT_MEMBEROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nik_user" | "role_project" | "is_invitation" | "ID_INVITATION" | "projectId", ExtArgs["result"]["dT_PROJECT_MEMBER"]>
  export type DT_PROJECT_MEMBERInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | DT_PROJECT_MEMBER$userArgs<ExtArgs>
    project?: boolean | DT_PROJECT_MEMBER$projectArgs<ExtArgs>
    invitation?: boolean | DT_PROJECT_MEMBER$invitationArgs<ExtArgs>
  }
  export type DT_PROJECT_MEMBERIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | DT_PROJECT_MEMBER$userArgs<ExtArgs>
    project?: boolean | DT_PROJECT_MEMBER$projectArgs<ExtArgs>
    invitation?: boolean | DT_PROJECT_MEMBER$invitationArgs<ExtArgs>
  }
  export type DT_PROJECT_MEMBERIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | DT_PROJECT_MEMBER$userArgs<ExtArgs>
    project?: boolean | DT_PROJECT_MEMBER$projectArgs<ExtArgs>
    invitation?: boolean | DT_PROJECT_MEMBER$invitationArgs<ExtArgs>
  }

  export type $DT_PROJECT_MEMBERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DT_PROJECT_MEMBER"
    objects: {
      user: Prisma.$DT_USERPayload<ExtArgs> | null
      project: Prisma.$DT_PROJECTPayload<ExtArgs> | null
      invitation: Prisma.$DT_INVITATIONPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nik_user: string | null
      role_project: string | null
      is_invitation: boolean | null
      ID_INVITATION: string | null
      projectId: string | null
    }, ExtArgs["result"]["dT_PROJECT_MEMBER"]>
    composites: {}
  }

  type DT_PROJECT_MEMBERGetPayload<S extends boolean | null | undefined | DT_PROJECT_MEMBERDefaultArgs> = $Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload, S>

  type DT_PROJECT_MEMBERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DT_PROJECT_MEMBERFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DT_PROJECT_MEMBERCountAggregateInputType | true
    }

  export interface DT_PROJECT_MEMBERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DT_PROJECT_MEMBER'], meta: { name: 'DT_PROJECT_MEMBER' } }
    /**
     * Find zero or one DT_PROJECT_MEMBER that matches the filter.
     * @param {DT_PROJECT_MEMBERFindUniqueArgs} args - Arguments to find a DT_PROJECT_MEMBER
     * @example
     * // Get one DT_PROJECT_MEMBER
     * const dT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DT_PROJECT_MEMBERFindUniqueArgs>(args: SelectSubset<T, DT_PROJECT_MEMBERFindUniqueArgs<ExtArgs>>): Prisma__DT_PROJECT_MEMBERClient<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DT_PROJECT_MEMBER that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DT_PROJECT_MEMBERFindUniqueOrThrowArgs} args - Arguments to find a DT_PROJECT_MEMBER
     * @example
     * // Get one DT_PROJECT_MEMBER
     * const dT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DT_PROJECT_MEMBERFindUniqueOrThrowArgs>(args: SelectSubset<T, DT_PROJECT_MEMBERFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DT_PROJECT_MEMBERClient<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DT_PROJECT_MEMBER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECT_MEMBERFindFirstArgs} args - Arguments to find a DT_PROJECT_MEMBER
     * @example
     * // Get one DT_PROJECT_MEMBER
     * const dT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DT_PROJECT_MEMBERFindFirstArgs>(args?: SelectSubset<T, DT_PROJECT_MEMBERFindFirstArgs<ExtArgs>>): Prisma__DT_PROJECT_MEMBERClient<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DT_PROJECT_MEMBER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECT_MEMBERFindFirstOrThrowArgs} args - Arguments to find a DT_PROJECT_MEMBER
     * @example
     * // Get one DT_PROJECT_MEMBER
     * const dT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DT_PROJECT_MEMBERFindFirstOrThrowArgs>(args?: SelectSubset<T, DT_PROJECT_MEMBERFindFirstOrThrowArgs<ExtArgs>>): Prisma__DT_PROJECT_MEMBERClient<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DT_PROJECT_MEMBERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECT_MEMBERFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DT_PROJECT_MEMBERS
     * const dT_PROJECT_MEMBERS = await prisma.dT_PROJECT_MEMBER.findMany()
     * 
     * // Get first 10 DT_PROJECT_MEMBERS
     * const dT_PROJECT_MEMBERS = await prisma.dT_PROJECT_MEMBER.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dT_PROJECT_MEMBERWithIdOnly = await prisma.dT_PROJECT_MEMBER.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DT_PROJECT_MEMBERFindManyArgs>(args?: SelectSubset<T, DT_PROJECT_MEMBERFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DT_PROJECT_MEMBER.
     * @param {DT_PROJECT_MEMBERCreateArgs} args - Arguments to create a DT_PROJECT_MEMBER.
     * @example
     * // Create one DT_PROJECT_MEMBER
     * const DT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.create({
     *   data: {
     *     // ... data to create a DT_PROJECT_MEMBER
     *   }
     * })
     * 
     */
    create<T extends DT_PROJECT_MEMBERCreateArgs>(args: SelectSubset<T, DT_PROJECT_MEMBERCreateArgs<ExtArgs>>): Prisma__DT_PROJECT_MEMBERClient<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DT_PROJECT_MEMBERS.
     * @param {DT_PROJECT_MEMBERCreateManyArgs} args - Arguments to create many DT_PROJECT_MEMBERS.
     * @example
     * // Create many DT_PROJECT_MEMBERS
     * const dT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DT_PROJECT_MEMBERCreateManyArgs>(args?: SelectSubset<T, DT_PROJECT_MEMBERCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DT_PROJECT_MEMBERS and returns the data saved in the database.
     * @param {DT_PROJECT_MEMBERCreateManyAndReturnArgs} args - Arguments to create many DT_PROJECT_MEMBERS.
     * @example
     * // Create many DT_PROJECT_MEMBERS
     * const dT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DT_PROJECT_MEMBERS and only return the `id`
     * const dT_PROJECT_MEMBERWithIdOnly = await prisma.dT_PROJECT_MEMBER.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DT_PROJECT_MEMBERCreateManyAndReturnArgs>(args?: SelectSubset<T, DT_PROJECT_MEMBERCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DT_PROJECT_MEMBER.
     * @param {DT_PROJECT_MEMBERDeleteArgs} args - Arguments to delete one DT_PROJECT_MEMBER.
     * @example
     * // Delete one DT_PROJECT_MEMBER
     * const DT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.delete({
     *   where: {
     *     // ... filter to delete one DT_PROJECT_MEMBER
     *   }
     * })
     * 
     */
    delete<T extends DT_PROJECT_MEMBERDeleteArgs>(args: SelectSubset<T, DT_PROJECT_MEMBERDeleteArgs<ExtArgs>>): Prisma__DT_PROJECT_MEMBERClient<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DT_PROJECT_MEMBER.
     * @param {DT_PROJECT_MEMBERUpdateArgs} args - Arguments to update one DT_PROJECT_MEMBER.
     * @example
     * // Update one DT_PROJECT_MEMBER
     * const dT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DT_PROJECT_MEMBERUpdateArgs>(args: SelectSubset<T, DT_PROJECT_MEMBERUpdateArgs<ExtArgs>>): Prisma__DT_PROJECT_MEMBERClient<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DT_PROJECT_MEMBERS.
     * @param {DT_PROJECT_MEMBERDeleteManyArgs} args - Arguments to filter DT_PROJECT_MEMBERS to delete.
     * @example
     * // Delete a few DT_PROJECT_MEMBERS
     * const { count } = await prisma.dT_PROJECT_MEMBER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DT_PROJECT_MEMBERDeleteManyArgs>(args?: SelectSubset<T, DT_PROJECT_MEMBERDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DT_PROJECT_MEMBERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECT_MEMBERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DT_PROJECT_MEMBERS
     * const dT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DT_PROJECT_MEMBERUpdateManyArgs>(args: SelectSubset<T, DT_PROJECT_MEMBERUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DT_PROJECT_MEMBERS and returns the data updated in the database.
     * @param {DT_PROJECT_MEMBERUpdateManyAndReturnArgs} args - Arguments to update many DT_PROJECT_MEMBERS.
     * @example
     * // Update many DT_PROJECT_MEMBERS
     * const dT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DT_PROJECT_MEMBERS and only return the `id`
     * const dT_PROJECT_MEMBERWithIdOnly = await prisma.dT_PROJECT_MEMBER.updateManyAndReturn({
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
    updateManyAndReturn<T extends DT_PROJECT_MEMBERUpdateManyAndReturnArgs>(args: SelectSubset<T, DT_PROJECT_MEMBERUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DT_PROJECT_MEMBER.
     * @param {DT_PROJECT_MEMBERUpsertArgs} args - Arguments to update or create a DT_PROJECT_MEMBER.
     * @example
     * // Update or create a DT_PROJECT_MEMBER
     * const dT_PROJECT_MEMBER = await prisma.dT_PROJECT_MEMBER.upsert({
     *   create: {
     *     // ... data to create a DT_PROJECT_MEMBER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DT_PROJECT_MEMBER we want to update
     *   }
     * })
     */
    upsert<T extends DT_PROJECT_MEMBERUpsertArgs>(args: SelectSubset<T, DT_PROJECT_MEMBERUpsertArgs<ExtArgs>>): Prisma__DT_PROJECT_MEMBERClient<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DT_PROJECT_MEMBERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECT_MEMBERCountArgs} args - Arguments to filter DT_PROJECT_MEMBERS to count.
     * @example
     * // Count the number of DT_PROJECT_MEMBERS
     * const count = await prisma.dT_PROJECT_MEMBER.count({
     *   where: {
     *     // ... the filter for the DT_PROJECT_MEMBERS we want to count
     *   }
     * })
    **/
    count<T extends DT_PROJECT_MEMBERCountArgs>(
      args?: Subset<T, DT_PROJECT_MEMBERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DT_PROJECT_MEMBERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DT_PROJECT_MEMBER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECT_MEMBERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DT_PROJECT_MEMBERAggregateArgs>(args: Subset<T, DT_PROJECT_MEMBERAggregateArgs>): Prisma.PrismaPromise<GetDT_PROJECT_MEMBERAggregateType<T>>

    /**
     * Group by DT_PROJECT_MEMBER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_PROJECT_MEMBERGroupByArgs} args - Group by arguments.
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
      T extends DT_PROJECT_MEMBERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DT_PROJECT_MEMBERGroupByArgs['orderBy'] }
        : { orderBy?: DT_PROJECT_MEMBERGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DT_PROJECT_MEMBERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDT_PROJECT_MEMBERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DT_PROJECT_MEMBER model
   */
  readonly fields: DT_PROJECT_MEMBERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DT_PROJECT_MEMBER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DT_PROJECT_MEMBERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends DT_PROJECT_MEMBER$userArgs<ExtArgs> = {}>(args?: Subset<T, DT_PROJECT_MEMBER$userArgs<ExtArgs>>): Prisma__DT_USERClient<$Result.GetResult<Prisma.$DT_USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends DT_PROJECT_MEMBER$projectArgs<ExtArgs> = {}>(args?: Subset<T, DT_PROJECT_MEMBER$projectArgs<ExtArgs>>): Prisma__DT_PROJECTClient<$Result.GetResult<Prisma.$DT_PROJECTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invitation<T extends DT_PROJECT_MEMBER$invitationArgs<ExtArgs> = {}>(args?: Subset<T, DT_PROJECT_MEMBER$invitationArgs<ExtArgs>>): Prisma__DT_INVITATIONClient<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DT_PROJECT_MEMBER model
   */
  interface DT_PROJECT_MEMBERFieldRefs {
    readonly id: FieldRef<"DT_PROJECT_MEMBER", 'String'>
    readonly nik_user: FieldRef<"DT_PROJECT_MEMBER", 'String'>
    readonly role_project: FieldRef<"DT_PROJECT_MEMBER", 'String'>
    readonly is_invitation: FieldRef<"DT_PROJECT_MEMBER", 'Boolean'>
    readonly ID_INVITATION: FieldRef<"DT_PROJECT_MEMBER", 'String'>
    readonly projectId: FieldRef<"DT_PROJECT_MEMBER", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DT_PROJECT_MEMBER findUnique
   */
  export type DT_PROJECT_MEMBERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    /**
     * Filter, which DT_PROJECT_MEMBER to fetch.
     */
    where: DT_PROJECT_MEMBERWhereUniqueInput
  }

  /**
   * DT_PROJECT_MEMBER findUniqueOrThrow
   */
  export type DT_PROJECT_MEMBERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    /**
     * Filter, which DT_PROJECT_MEMBER to fetch.
     */
    where: DT_PROJECT_MEMBERWhereUniqueInput
  }

  /**
   * DT_PROJECT_MEMBER findFirst
   */
  export type DT_PROJECT_MEMBERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    /**
     * Filter, which DT_PROJECT_MEMBER to fetch.
     */
    where?: DT_PROJECT_MEMBERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_PROJECT_MEMBERS to fetch.
     */
    orderBy?: DT_PROJECT_MEMBEROrderByWithRelationInput | DT_PROJECT_MEMBEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DT_PROJECT_MEMBERS.
     */
    cursor?: DT_PROJECT_MEMBERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_PROJECT_MEMBERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_PROJECT_MEMBERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DT_PROJECT_MEMBERS.
     */
    distinct?: DT_PROJECT_MEMBERScalarFieldEnum | DT_PROJECT_MEMBERScalarFieldEnum[]
  }

  /**
   * DT_PROJECT_MEMBER findFirstOrThrow
   */
  export type DT_PROJECT_MEMBERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    /**
     * Filter, which DT_PROJECT_MEMBER to fetch.
     */
    where?: DT_PROJECT_MEMBERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_PROJECT_MEMBERS to fetch.
     */
    orderBy?: DT_PROJECT_MEMBEROrderByWithRelationInput | DT_PROJECT_MEMBEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DT_PROJECT_MEMBERS.
     */
    cursor?: DT_PROJECT_MEMBERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_PROJECT_MEMBERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_PROJECT_MEMBERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DT_PROJECT_MEMBERS.
     */
    distinct?: DT_PROJECT_MEMBERScalarFieldEnum | DT_PROJECT_MEMBERScalarFieldEnum[]
  }

  /**
   * DT_PROJECT_MEMBER findMany
   */
  export type DT_PROJECT_MEMBERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    /**
     * Filter, which DT_PROJECT_MEMBERS to fetch.
     */
    where?: DT_PROJECT_MEMBERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_PROJECT_MEMBERS to fetch.
     */
    orderBy?: DT_PROJECT_MEMBEROrderByWithRelationInput | DT_PROJECT_MEMBEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DT_PROJECT_MEMBERS.
     */
    cursor?: DT_PROJECT_MEMBERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_PROJECT_MEMBERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_PROJECT_MEMBERS.
     */
    skip?: number
    distinct?: DT_PROJECT_MEMBERScalarFieldEnum | DT_PROJECT_MEMBERScalarFieldEnum[]
  }

  /**
   * DT_PROJECT_MEMBER create
   */
  export type DT_PROJECT_MEMBERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    /**
     * The data needed to create a DT_PROJECT_MEMBER.
     */
    data?: XOR<DT_PROJECT_MEMBERCreateInput, DT_PROJECT_MEMBERUncheckedCreateInput>
  }

  /**
   * DT_PROJECT_MEMBER createMany
   */
  export type DT_PROJECT_MEMBERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DT_PROJECT_MEMBERS.
     */
    data: DT_PROJECT_MEMBERCreateManyInput | DT_PROJECT_MEMBERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DT_PROJECT_MEMBER createManyAndReturn
   */
  export type DT_PROJECT_MEMBERCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * The data used to create many DT_PROJECT_MEMBERS.
     */
    data: DT_PROJECT_MEMBERCreateManyInput | DT_PROJECT_MEMBERCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DT_PROJECT_MEMBER update
   */
  export type DT_PROJECT_MEMBERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    /**
     * The data needed to update a DT_PROJECT_MEMBER.
     */
    data: XOR<DT_PROJECT_MEMBERUpdateInput, DT_PROJECT_MEMBERUncheckedUpdateInput>
    /**
     * Choose, which DT_PROJECT_MEMBER to update.
     */
    where: DT_PROJECT_MEMBERWhereUniqueInput
  }

  /**
   * DT_PROJECT_MEMBER updateMany
   */
  export type DT_PROJECT_MEMBERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DT_PROJECT_MEMBERS.
     */
    data: XOR<DT_PROJECT_MEMBERUpdateManyMutationInput, DT_PROJECT_MEMBERUncheckedUpdateManyInput>
    /**
     * Filter which DT_PROJECT_MEMBERS to update
     */
    where?: DT_PROJECT_MEMBERWhereInput
    /**
     * Limit how many DT_PROJECT_MEMBERS to update.
     */
    limit?: number
  }

  /**
   * DT_PROJECT_MEMBER updateManyAndReturn
   */
  export type DT_PROJECT_MEMBERUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * The data used to update DT_PROJECT_MEMBERS.
     */
    data: XOR<DT_PROJECT_MEMBERUpdateManyMutationInput, DT_PROJECT_MEMBERUncheckedUpdateManyInput>
    /**
     * Filter which DT_PROJECT_MEMBERS to update
     */
    where?: DT_PROJECT_MEMBERWhereInput
    /**
     * Limit how many DT_PROJECT_MEMBERS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DT_PROJECT_MEMBER upsert
   */
  export type DT_PROJECT_MEMBERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    /**
     * The filter to search for the DT_PROJECT_MEMBER to update in case it exists.
     */
    where: DT_PROJECT_MEMBERWhereUniqueInput
    /**
     * In case the DT_PROJECT_MEMBER found by the `where` argument doesn't exist, create a new DT_PROJECT_MEMBER with this data.
     */
    create: XOR<DT_PROJECT_MEMBERCreateInput, DT_PROJECT_MEMBERUncheckedCreateInput>
    /**
     * In case the DT_PROJECT_MEMBER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DT_PROJECT_MEMBERUpdateInput, DT_PROJECT_MEMBERUncheckedUpdateInput>
  }

  /**
   * DT_PROJECT_MEMBER delete
   */
  export type DT_PROJECT_MEMBERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    /**
     * Filter which DT_PROJECT_MEMBER to delete.
     */
    where: DT_PROJECT_MEMBERWhereUniqueInput
  }

  /**
   * DT_PROJECT_MEMBER deleteMany
   */
  export type DT_PROJECT_MEMBERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DT_PROJECT_MEMBERS to delete
     */
    where?: DT_PROJECT_MEMBERWhereInput
    /**
     * Limit how many DT_PROJECT_MEMBERS to delete.
     */
    limit?: number
  }

  /**
   * DT_PROJECT_MEMBER.user
   */
  export type DT_PROJECT_MEMBER$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_USER
     */
    select?: DT_USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_USER
     */
    omit?: DT_USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_USERInclude<ExtArgs> | null
    where?: DT_USERWhereInput
  }

  /**
   * DT_PROJECT_MEMBER.project
   */
  export type DT_PROJECT_MEMBER$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT
     */
    select?: DT_PROJECTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT
     */
    omit?: DT_PROJECTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECTInclude<ExtArgs> | null
    where?: DT_PROJECTWhereInput
  }

  /**
   * DT_PROJECT_MEMBER.invitation
   */
  export type DT_PROJECT_MEMBER$invitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_INVITATIONInclude<ExtArgs> | null
    where?: DT_INVITATIONWhereInput
  }

  /**
   * DT_PROJECT_MEMBER without action
   */
  export type DT_PROJECT_MEMBERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
  }


  /**
   * Model DT_INVITATION
   */

  export type AggregateDT_INVITATION = {
    _count: DT_INVITATIONCountAggregateOutputType | null
    _min: DT_INVITATIONMinAggregateOutputType | null
    _max: DT_INVITATIONMaxAggregateOutputType | null
  }

  export type DT_INVITATIONMinAggregateOutputType = {
    id: string | null
    ID_PROJECT: string | null
    from: string | null
    to: string | null
    status: boolean | null
  }

  export type DT_INVITATIONMaxAggregateOutputType = {
    id: string | null
    ID_PROJECT: string | null
    from: string | null
    to: string | null
    status: boolean | null
  }

  export type DT_INVITATIONCountAggregateOutputType = {
    id: number
    ID_PROJECT: number
    from: number
    to: number
    status: number
    _all: number
  }


  export type DT_INVITATIONMinAggregateInputType = {
    id?: true
    ID_PROJECT?: true
    from?: true
    to?: true
    status?: true
  }

  export type DT_INVITATIONMaxAggregateInputType = {
    id?: true
    ID_PROJECT?: true
    from?: true
    to?: true
    status?: true
  }

  export type DT_INVITATIONCountAggregateInputType = {
    id?: true
    ID_PROJECT?: true
    from?: true
    to?: true
    status?: true
    _all?: true
  }

  export type DT_INVITATIONAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DT_INVITATION to aggregate.
     */
    where?: DT_INVITATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_INVITATIONS to fetch.
     */
    orderBy?: DT_INVITATIONOrderByWithRelationInput | DT_INVITATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DT_INVITATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_INVITATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_INVITATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DT_INVITATIONS
    **/
    _count?: true | DT_INVITATIONCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DT_INVITATIONMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DT_INVITATIONMaxAggregateInputType
  }

  export type GetDT_INVITATIONAggregateType<T extends DT_INVITATIONAggregateArgs> = {
        [P in keyof T & keyof AggregateDT_INVITATION]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDT_INVITATION[P]>
      : GetScalarType<T[P], AggregateDT_INVITATION[P]>
  }




  export type DT_INVITATIONGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DT_INVITATIONWhereInput
    orderBy?: DT_INVITATIONOrderByWithAggregationInput | DT_INVITATIONOrderByWithAggregationInput[]
    by: DT_INVITATIONScalarFieldEnum[] | DT_INVITATIONScalarFieldEnum
    having?: DT_INVITATIONScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DT_INVITATIONCountAggregateInputType | true
    _min?: DT_INVITATIONMinAggregateInputType
    _max?: DT_INVITATIONMaxAggregateInputType
  }

  export type DT_INVITATIONGroupByOutputType = {
    id: string
    ID_PROJECT: string | null
    from: string | null
    to: string | null
    status: boolean | null
    _count: DT_INVITATIONCountAggregateOutputType | null
    _min: DT_INVITATIONMinAggregateOutputType | null
    _max: DT_INVITATIONMaxAggregateOutputType | null
  }

  type GetDT_INVITATIONGroupByPayload<T extends DT_INVITATIONGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DT_INVITATIONGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DT_INVITATIONGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DT_INVITATIONGroupByOutputType[P]>
            : GetScalarType<T[P], DT_INVITATIONGroupByOutputType[P]>
        }
      >
    >


  export type DT_INVITATIONSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ID_PROJECT?: boolean
    from?: boolean
    to?: boolean
    status?: boolean
    members?: boolean | DT_INVITATION$membersArgs<ExtArgs>
    _count?: boolean | DT_INVITATIONCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dT_INVITATION"]>

  export type DT_INVITATIONSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ID_PROJECT?: boolean
    from?: boolean
    to?: boolean
    status?: boolean
  }, ExtArgs["result"]["dT_INVITATION"]>

  export type DT_INVITATIONSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ID_PROJECT?: boolean
    from?: boolean
    to?: boolean
    status?: boolean
  }, ExtArgs["result"]["dT_INVITATION"]>

  export type DT_INVITATIONSelectScalar = {
    id?: boolean
    ID_PROJECT?: boolean
    from?: boolean
    to?: boolean
    status?: boolean
  }

  export type DT_INVITATIONOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ID_PROJECT" | "from" | "to" | "status", ExtArgs["result"]["dT_INVITATION"]>
  export type DT_INVITATIONInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | DT_INVITATION$membersArgs<ExtArgs>
    _count?: boolean | DT_INVITATIONCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DT_INVITATIONIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DT_INVITATIONIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DT_INVITATIONPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DT_INVITATION"
    objects: {
      members: Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ID_PROJECT: string | null
      from: string | null
      to: string | null
      status: boolean | null
    }, ExtArgs["result"]["dT_INVITATION"]>
    composites: {}
  }

  type DT_INVITATIONGetPayload<S extends boolean | null | undefined | DT_INVITATIONDefaultArgs> = $Result.GetResult<Prisma.$DT_INVITATIONPayload, S>

  type DT_INVITATIONCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DT_INVITATIONFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DT_INVITATIONCountAggregateInputType | true
    }

  export interface DT_INVITATIONDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DT_INVITATION'], meta: { name: 'DT_INVITATION' } }
    /**
     * Find zero or one DT_INVITATION that matches the filter.
     * @param {DT_INVITATIONFindUniqueArgs} args - Arguments to find a DT_INVITATION
     * @example
     * // Get one DT_INVITATION
     * const dT_INVITATION = await prisma.dT_INVITATION.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DT_INVITATIONFindUniqueArgs>(args: SelectSubset<T, DT_INVITATIONFindUniqueArgs<ExtArgs>>): Prisma__DT_INVITATIONClient<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DT_INVITATION that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DT_INVITATIONFindUniqueOrThrowArgs} args - Arguments to find a DT_INVITATION
     * @example
     * // Get one DT_INVITATION
     * const dT_INVITATION = await prisma.dT_INVITATION.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DT_INVITATIONFindUniqueOrThrowArgs>(args: SelectSubset<T, DT_INVITATIONFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DT_INVITATIONClient<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DT_INVITATION that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_INVITATIONFindFirstArgs} args - Arguments to find a DT_INVITATION
     * @example
     * // Get one DT_INVITATION
     * const dT_INVITATION = await prisma.dT_INVITATION.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DT_INVITATIONFindFirstArgs>(args?: SelectSubset<T, DT_INVITATIONFindFirstArgs<ExtArgs>>): Prisma__DT_INVITATIONClient<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DT_INVITATION that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_INVITATIONFindFirstOrThrowArgs} args - Arguments to find a DT_INVITATION
     * @example
     * // Get one DT_INVITATION
     * const dT_INVITATION = await prisma.dT_INVITATION.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DT_INVITATIONFindFirstOrThrowArgs>(args?: SelectSubset<T, DT_INVITATIONFindFirstOrThrowArgs<ExtArgs>>): Prisma__DT_INVITATIONClient<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DT_INVITATIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_INVITATIONFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DT_INVITATIONS
     * const dT_INVITATIONS = await prisma.dT_INVITATION.findMany()
     * 
     * // Get first 10 DT_INVITATIONS
     * const dT_INVITATIONS = await prisma.dT_INVITATION.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dT_INVITATIONWithIdOnly = await prisma.dT_INVITATION.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DT_INVITATIONFindManyArgs>(args?: SelectSubset<T, DT_INVITATIONFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DT_INVITATION.
     * @param {DT_INVITATIONCreateArgs} args - Arguments to create a DT_INVITATION.
     * @example
     * // Create one DT_INVITATION
     * const DT_INVITATION = await prisma.dT_INVITATION.create({
     *   data: {
     *     // ... data to create a DT_INVITATION
     *   }
     * })
     * 
     */
    create<T extends DT_INVITATIONCreateArgs>(args: SelectSubset<T, DT_INVITATIONCreateArgs<ExtArgs>>): Prisma__DT_INVITATIONClient<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DT_INVITATIONS.
     * @param {DT_INVITATIONCreateManyArgs} args - Arguments to create many DT_INVITATIONS.
     * @example
     * // Create many DT_INVITATIONS
     * const dT_INVITATION = await prisma.dT_INVITATION.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DT_INVITATIONCreateManyArgs>(args?: SelectSubset<T, DT_INVITATIONCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DT_INVITATIONS and returns the data saved in the database.
     * @param {DT_INVITATIONCreateManyAndReturnArgs} args - Arguments to create many DT_INVITATIONS.
     * @example
     * // Create many DT_INVITATIONS
     * const dT_INVITATION = await prisma.dT_INVITATION.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DT_INVITATIONS and only return the `id`
     * const dT_INVITATIONWithIdOnly = await prisma.dT_INVITATION.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DT_INVITATIONCreateManyAndReturnArgs>(args?: SelectSubset<T, DT_INVITATIONCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DT_INVITATION.
     * @param {DT_INVITATIONDeleteArgs} args - Arguments to delete one DT_INVITATION.
     * @example
     * // Delete one DT_INVITATION
     * const DT_INVITATION = await prisma.dT_INVITATION.delete({
     *   where: {
     *     // ... filter to delete one DT_INVITATION
     *   }
     * })
     * 
     */
    delete<T extends DT_INVITATIONDeleteArgs>(args: SelectSubset<T, DT_INVITATIONDeleteArgs<ExtArgs>>): Prisma__DT_INVITATIONClient<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DT_INVITATION.
     * @param {DT_INVITATIONUpdateArgs} args - Arguments to update one DT_INVITATION.
     * @example
     * // Update one DT_INVITATION
     * const dT_INVITATION = await prisma.dT_INVITATION.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DT_INVITATIONUpdateArgs>(args: SelectSubset<T, DT_INVITATIONUpdateArgs<ExtArgs>>): Prisma__DT_INVITATIONClient<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DT_INVITATIONS.
     * @param {DT_INVITATIONDeleteManyArgs} args - Arguments to filter DT_INVITATIONS to delete.
     * @example
     * // Delete a few DT_INVITATIONS
     * const { count } = await prisma.dT_INVITATION.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DT_INVITATIONDeleteManyArgs>(args?: SelectSubset<T, DT_INVITATIONDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DT_INVITATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_INVITATIONUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DT_INVITATIONS
     * const dT_INVITATION = await prisma.dT_INVITATION.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DT_INVITATIONUpdateManyArgs>(args: SelectSubset<T, DT_INVITATIONUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DT_INVITATIONS and returns the data updated in the database.
     * @param {DT_INVITATIONUpdateManyAndReturnArgs} args - Arguments to update many DT_INVITATIONS.
     * @example
     * // Update many DT_INVITATIONS
     * const dT_INVITATION = await prisma.dT_INVITATION.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DT_INVITATIONS and only return the `id`
     * const dT_INVITATIONWithIdOnly = await prisma.dT_INVITATION.updateManyAndReturn({
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
    updateManyAndReturn<T extends DT_INVITATIONUpdateManyAndReturnArgs>(args: SelectSubset<T, DT_INVITATIONUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DT_INVITATION.
     * @param {DT_INVITATIONUpsertArgs} args - Arguments to update or create a DT_INVITATION.
     * @example
     * // Update or create a DT_INVITATION
     * const dT_INVITATION = await prisma.dT_INVITATION.upsert({
     *   create: {
     *     // ... data to create a DT_INVITATION
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DT_INVITATION we want to update
     *   }
     * })
     */
    upsert<T extends DT_INVITATIONUpsertArgs>(args: SelectSubset<T, DT_INVITATIONUpsertArgs<ExtArgs>>): Prisma__DT_INVITATIONClient<$Result.GetResult<Prisma.$DT_INVITATIONPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DT_INVITATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_INVITATIONCountArgs} args - Arguments to filter DT_INVITATIONS to count.
     * @example
     * // Count the number of DT_INVITATIONS
     * const count = await prisma.dT_INVITATION.count({
     *   where: {
     *     // ... the filter for the DT_INVITATIONS we want to count
     *   }
     * })
    **/
    count<T extends DT_INVITATIONCountArgs>(
      args?: Subset<T, DT_INVITATIONCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DT_INVITATIONCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DT_INVITATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_INVITATIONAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DT_INVITATIONAggregateArgs>(args: Subset<T, DT_INVITATIONAggregateArgs>): Prisma.PrismaPromise<GetDT_INVITATIONAggregateType<T>>

    /**
     * Group by DT_INVITATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DT_INVITATIONGroupByArgs} args - Group by arguments.
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
      T extends DT_INVITATIONGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DT_INVITATIONGroupByArgs['orderBy'] }
        : { orderBy?: DT_INVITATIONGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DT_INVITATIONGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDT_INVITATIONGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DT_INVITATION model
   */
  readonly fields: DT_INVITATIONFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DT_INVITATION.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DT_INVITATIONClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends DT_INVITATION$membersArgs<ExtArgs> = {}>(args?: Subset<T, DT_INVITATION$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DT_PROJECT_MEMBERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DT_INVITATION model
   */
  interface DT_INVITATIONFieldRefs {
    readonly id: FieldRef<"DT_INVITATION", 'String'>
    readonly ID_PROJECT: FieldRef<"DT_INVITATION", 'String'>
    readonly from: FieldRef<"DT_INVITATION", 'String'>
    readonly to: FieldRef<"DT_INVITATION", 'String'>
    readonly status: FieldRef<"DT_INVITATION", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DT_INVITATION findUnique
   */
  export type DT_INVITATIONFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_INVITATIONInclude<ExtArgs> | null
    /**
     * Filter, which DT_INVITATION to fetch.
     */
    where: DT_INVITATIONWhereUniqueInput
  }

  /**
   * DT_INVITATION findUniqueOrThrow
   */
  export type DT_INVITATIONFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_INVITATIONInclude<ExtArgs> | null
    /**
     * Filter, which DT_INVITATION to fetch.
     */
    where: DT_INVITATIONWhereUniqueInput
  }

  /**
   * DT_INVITATION findFirst
   */
  export type DT_INVITATIONFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_INVITATIONInclude<ExtArgs> | null
    /**
     * Filter, which DT_INVITATION to fetch.
     */
    where?: DT_INVITATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_INVITATIONS to fetch.
     */
    orderBy?: DT_INVITATIONOrderByWithRelationInput | DT_INVITATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DT_INVITATIONS.
     */
    cursor?: DT_INVITATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_INVITATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_INVITATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DT_INVITATIONS.
     */
    distinct?: DT_INVITATIONScalarFieldEnum | DT_INVITATIONScalarFieldEnum[]
  }

  /**
   * DT_INVITATION findFirstOrThrow
   */
  export type DT_INVITATIONFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_INVITATIONInclude<ExtArgs> | null
    /**
     * Filter, which DT_INVITATION to fetch.
     */
    where?: DT_INVITATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_INVITATIONS to fetch.
     */
    orderBy?: DT_INVITATIONOrderByWithRelationInput | DT_INVITATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DT_INVITATIONS.
     */
    cursor?: DT_INVITATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_INVITATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_INVITATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DT_INVITATIONS.
     */
    distinct?: DT_INVITATIONScalarFieldEnum | DT_INVITATIONScalarFieldEnum[]
  }

  /**
   * DT_INVITATION findMany
   */
  export type DT_INVITATIONFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_INVITATIONInclude<ExtArgs> | null
    /**
     * Filter, which DT_INVITATIONS to fetch.
     */
    where?: DT_INVITATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DT_INVITATIONS to fetch.
     */
    orderBy?: DT_INVITATIONOrderByWithRelationInput | DT_INVITATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DT_INVITATIONS.
     */
    cursor?: DT_INVITATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DT_INVITATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DT_INVITATIONS.
     */
    skip?: number
    distinct?: DT_INVITATIONScalarFieldEnum | DT_INVITATIONScalarFieldEnum[]
  }

  /**
   * DT_INVITATION create
   */
  export type DT_INVITATIONCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_INVITATIONInclude<ExtArgs> | null
    /**
     * The data needed to create a DT_INVITATION.
     */
    data: XOR<DT_INVITATIONCreateInput, DT_INVITATIONUncheckedCreateInput>
  }

  /**
   * DT_INVITATION createMany
   */
  export type DT_INVITATIONCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DT_INVITATIONS.
     */
    data: DT_INVITATIONCreateManyInput | DT_INVITATIONCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DT_INVITATION createManyAndReturn
   */
  export type DT_INVITATIONCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * The data used to create many DT_INVITATIONS.
     */
    data: DT_INVITATIONCreateManyInput | DT_INVITATIONCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DT_INVITATION update
   */
  export type DT_INVITATIONUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_INVITATIONInclude<ExtArgs> | null
    /**
     * The data needed to update a DT_INVITATION.
     */
    data: XOR<DT_INVITATIONUpdateInput, DT_INVITATIONUncheckedUpdateInput>
    /**
     * Choose, which DT_INVITATION to update.
     */
    where: DT_INVITATIONWhereUniqueInput
  }

  /**
   * DT_INVITATION updateMany
   */
  export type DT_INVITATIONUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DT_INVITATIONS.
     */
    data: XOR<DT_INVITATIONUpdateManyMutationInput, DT_INVITATIONUncheckedUpdateManyInput>
    /**
     * Filter which DT_INVITATIONS to update
     */
    where?: DT_INVITATIONWhereInput
    /**
     * Limit how many DT_INVITATIONS to update.
     */
    limit?: number
  }

  /**
   * DT_INVITATION updateManyAndReturn
   */
  export type DT_INVITATIONUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * The data used to update DT_INVITATIONS.
     */
    data: XOR<DT_INVITATIONUpdateManyMutationInput, DT_INVITATIONUncheckedUpdateManyInput>
    /**
     * Filter which DT_INVITATIONS to update
     */
    where?: DT_INVITATIONWhereInput
    /**
     * Limit how many DT_INVITATIONS to update.
     */
    limit?: number
  }

  /**
   * DT_INVITATION upsert
   */
  export type DT_INVITATIONUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_INVITATIONInclude<ExtArgs> | null
    /**
     * The filter to search for the DT_INVITATION to update in case it exists.
     */
    where: DT_INVITATIONWhereUniqueInput
    /**
     * In case the DT_INVITATION found by the `where` argument doesn't exist, create a new DT_INVITATION with this data.
     */
    create: XOR<DT_INVITATIONCreateInput, DT_INVITATIONUncheckedCreateInput>
    /**
     * In case the DT_INVITATION was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DT_INVITATIONUpdateInput, DT_INVITATIONUncheckedUpdateInput>
  }

  /**
   * DT_INVITATION delete
   */
  export type DT_INVITATIONDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_INVITATIONInclude<ExtArgs> | null
    /**
     * Filter which DT_INVITATION to delete.
     */
    where: DT_INVITATIONWhereUniqueInput
  }

  /**
   * DT_INVITATION deleteMany
   */
  export type DT_INVITATIONDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DT_INVITATIONS to delete
     */
    where?: DT_INVITATIONWhereInput
    /**
     * Limit how many DT_INVITATIONS to delete.
     */
    limit?: number
  }

  /**
   * DT_INVITATION.members
   */
  export type DT_INVITATION$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_PROJECT_MEMBER
     */
    select?: DT_PROJECT_MEMBERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_PROJECT_MEMBER
     */
    omit?: DT_PROJECT_MEMBEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_PROJECT_MEMBERInclude<ExtArgs> | null
    where?: DT_PROJECT_MEMBERWhereInput
    orderBy?: DT_PROJECT_MEMBEROrderByWithRelationInput | DT_PROJECT_MEMBEROrderByWithRelationInput[]
    cursor?: DT_PROJECT_MEMBERWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DT_PROJECT_MEMBERScalarFieldEnum | DT_PROJECT_MEMBERScalarFieldEnum[]
  }

  /**
   * DT_INVITATION without action
   */
  export type DT_INVITATIONDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DT_INVITATION
     */
    select?: DT_INVITATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DT_INVITATION
     */
    omit?: DT_INVITATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DT_INVITATIONInclude<ExtArgs> | null
  }


  /**
   * Model LOG_FORGOT_PASSWORD
   */

  export type AggregateLOG_FORGOT_PASSWORD = {
    _count: LOG_FORGOT_PASSWORDCountAggregateOutputType | null
    _min: LOG_FORGOT_PASSWORDMinAggregateOutputType | null
    _max: LOG_FORGOT_PASSWORDMaxAggregateOutputType | null
  }

  export type LOG_FORGOT_PASSWORDMinAggregateOutputType = {
    otp: string | null
    nik: string | null
    used: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type LOG_FORGOT_PASSWORDMaxAggregateOutputType = {
    otp: string | null
    nik: string | null
    used: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type LOG_FORGOT_PASSWORDCountAggregateOutputType = {
    otp: number
    nik: number
    used: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type LOG_FORGOT_PASSWORDMinAggregateInputType = {
    otp?: true
    nik?: true
    used?: true
    createdAt?: true
    expiresAt?: true
  }

  export type LOG_FORGOT_PASSWORDMaxAggregateInputType = {
    otp?: true
    nik?: true
    used?: true
    createdAt?: true
    expiresAt?: true
  }

  export type LOG_FORGOT_PASSWORDCountAggregateInputType = {
    otp?: true
    nik?: true
    used?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type LOG_FORGOT_PASSWORDAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LOG_FORGOT_PASSWORD to aggregate.
     */
    where?: LOG_FORGOT_PASSWORDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOG_FORGOT_PASSWORDS to fetch.
     */
    orderBy?: LOG_FORGOT_PASSWORDOrderByWithRelationInput | LOG_FORGOT_PASSWORDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LOG_FORGOT_PASSWORDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOG_FORGOT_PASSWORDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOG_FORGOT_PASSWORDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LOG_FORGOT_PASSWORDS
    **/
    _count?: true | LOG_FORGOT_PASSWORDCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LOG_FORGOT_PASSWORDMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LOG_FORGOT_PASSWORDMaxAggregateInputType
  }

  export type GetLOG_FORGOT_PASSWORDAggregateType<T extends LOG_FORGOT_PASSWORDAggregateArgs> = {
        [P in keyof T & keyof AggregateLOG_FORGOT_PASSWORD]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLOG_FORGOT_PASSWORD[P]>
      : GetScalarType<T[P], AggregateLOG_FORGOT_PASSWORD[P]>
  }




  export type LOG_FORGOT_PASSWORDGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LOG_FORGOT_PASSWORDWhereInput
    orderBy?: LOG_FORGOT_PASSWORDOrderByWithAggregationInput | LOG_FORGOT_PASSWORDOrderByWithAggregationInput[]
    by: LOG_FORGOT_PASSWORDScalarFieldEnum[] | LOG_FORGOT_PASSWORDScalarFieldEnum
    having?: LOG_FORGOT_PASSWORDScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LOG_FORGOT_PASSWORDCountAggregateInputType | true
    _min?: LOG_FORGOT_PASSWORDMinAggregateInputType
    _max?: LOG_FORGOT_PASSWORDMaxAggregateInputType
  }

  export type LOG_FORGOT_PASSWORDGroupByOutputType = {
    otp: string
    nik: string
    used: boolean
    createdAt: Date
    expiresAt: Date
    _count: LOG_FORGOT_PASSWORDCountAggregateOutputType | null
    _min: LOG_FORGOT_PASSWORDMinAggregateOutputType | null
    _max: LOG_FORGOT_PASSWORDMaxAggregateOutputType | null
  }

  type GetLOG_FORGOT_PASSWORDGroupByPayload<T extends LOG_FORGOT_PASSWORDGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LOG_FORGOT_PASSWORDGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LOG_FORGOT_PASSWORDGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LOG_FORGOT_PASSWORDGroupByOutputType[P]>
            : GetScalarType<T[P], LOG_FORGOT_PASSWORDGroupByOutputType[P]>
        }
      >
    >


  export type LOG_FORGOT_PASSWORDSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    otp?: boolean
    nik?: boolean
    used?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["lOG_FORGOT_PASSWORD"]>

  export type LOG_FORGOT_PASSWORDSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    otp?: boolean
    nik?: boolean
    used?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["lOG_FORGOT_PASSWORD"]>

  export type LOG_FORGOT_PASSWORDSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    otp?: boolean
    nik?: boolean
    used?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["lOG_FORGOT_PASSWORD"]>

  export type LOG_FORGOT_PASSWORDSelectScalar = {
    otp?: boolean
    nik?: boolean
    used?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type LOG_FORGOT_PASSWORDOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"otp" | "nik" | "used" | "createdAt" | "expiresAt", ExtArgs["result"]["lOG_FORGOT_PASSWORD"]>

  export type $LOG_FORGOT_PASSWORDPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LOG_FORGOT_PASSWORD"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      otp: string
      nik: string
      used: boolean
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["lOG_FORGOT_PASSWORD"]>
    composites: {}
  }

  type LOG_FORGOT_PASSWORDGetPayload<S extends boolean | null | undefined | LOG_FORGOT_PASSWORDDefaultArgs> = $Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload, S>

  type LOG_FORGOT_PASSWORDCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LOG_FORGOT_PASSWORDFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LOG_FORGOT_PASSWORDCountAggregateInputType | true
    }

  export interface LOG_FORGOT_PASSWORDDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LOG_FORGOT_PASSWORD'], meta: { name: 'LOG_FORGOT_PASSWORD' } }
    /**
     * Find zero or one LOG_FORGOT_PASSWORD that matches the filter.
     * @param {LOG_FORGOT_PASSWORDFindUniqueArgs} args - Arguments to find a LOG_FORGOT_PASSWORD
     * @example
     * // Get one LOG_FORGOT_PASSWORD
     * const lOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LOG_FORGOT_PASSWORDFindUniqueArgs>(args: SelectSubset<T, LOG_FORGOT_PASSWORDFindUniqueArgs<ExtArgs>>): Prisma__LOG_FORGOT_PASSWORDClient<$Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LOG_FORGOT_PASSWORD that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LOG_FORGOT_PASSWORDFindUniqueOrThrowArgs} args - Arguments to find a LOG_FORGOT_PASSWORD
     * @example
     * // Get one LOG_FORGOT_PASSWORD
     * const lOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LOG_FORGOT_PASSWORDFindUniqueOrThrowArgs>(args: SelectSubset<T, LOG_FORGOT_PASSWORDFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LOG_FORGOT_PASSWORDClient<$Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LOG_FORGOT_PASSWORD that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOG_FORGOT_PASSWORDFindFirstArgs} args - Arguments to find a LOG_FORGOT_PASSWORD
     * @example
     * // Get one LOG_FORGOT_PASSWORD
     * const lOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LOG_FORGOT_PASSWORDFindFirstArgs>(args?: SelectSubset<T, LOG_FORGOT_PASSWORDFindFirstArgs<ExtArgs>>): Prisma__LOG_FORGOT_PASSWORDClient<$Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LOG_FORGOT_PASSWORD that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOG_FORGOT_PASSWORDFindFirstOrThrowArgs} args - Arguments to find a LOG_FORGOT_PASSWORD
     * @example
     * // Get one LOG_FORGOT_PASSWORD
     * const lOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LOG_FORGOT_PASSWORDFindFirstOrThrowArgs>(args?: SelectSubset<T, LOG_FORGOT_PASSWORDFindFirstOrThrowArgs<ExtArgs>>): Prisma__LOG_FORGOT_PASSWORDClient<$Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LOG_FORGOT_PASSWORDS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOG_FORGOT_PASSWORDFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LOG_FORGOT_PASSWORDS
     * const lOG_FORGOT_PASSWORDS = await prisma.lOG_FORGOT_PASSWORD.findMany()
     * 
     * // Get first 10 LOG_FORGOT_PASSWORDS
     * const lOG_FORGOT_PASSWORDS = await prisma.lOG_FORGOT_PASSWORD.findMany({ take: 10 })
     * 
     * // Only select the `otp`
     * const lOG_FORGOT_PASSWORDWithOtpOnly = await prisma.lOG_FORGOT_PASSWORD.findMany({ select: { otp: true } })
     * 
     */
    findMany<T extends LOG_FORGOT_PASSWORDFindManyArgs>(args?: SelectSubset<T, LOG_FORGOT_PASSWORDFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LOG_FORGOT_PASSWORD.
     * @param {LOG_FORGOT_PASSWORDCreateArgs} args - Arguments to create a LOG_FORGOT_PASSWORD.
     * @example
     * // Create one LOG_FORGOT_PASSWORD
     * const LOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.create({
     *   data: {
     *     // ... data to create a LOG_FORGOT_PASSWORD
     *   }
     * })
     * 
     */
    create<T extends LOG_FORGOT_PASSWORDCreateArgs>(args: SelectSubset<T, LOG_FORGOT_PASSWORDCreateArgs<ExtArgs>>): Prisma__LOG_FORGOT_PASSWORDClient<$Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LOG_FORGOT_PASSWORDS.
     * @param {LOG_FORGOT_PASSWORDCreateManyArgs} args - Arguments to create many LOG_FORGOT_PASSWORDS.
     * @example
     * // Create many LOG_FORGOT_PASSWORDS
     * const lOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LOG_FORGOT_PASSWORDCreateManyArgs>(args?: SelectSubset<T, LOG_FORGOT_PASSWORDCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LOG_FORGOT_PASSWORDS and returns the data saved in the database.
     * @param {LOG_FORGOT_PASSWORDCreateManyAndReturnArgs} args - Arguments to create many LOG_FORGOT_PASSWORDS.
     * @example
     * // Create many LOG_FORGOT_PASSWORDS
     * const lOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LOG_FORGOT_PASSWORDS and only return the `otp`
     * const lOG_FORGOT_PASSWORDWithOtpOnly = await prisma.lOG_FORGOT_PASSWORD.createManyAndReturn({
     *   select: { otp: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LOG_FORGOT_PASSWORDCreateManyAndReturnArgs>(args?: SelectSubset<T, LOG_FORGOT_PASSWORDCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LOG_FORGOT_PASSWORD.
     * @param {LOG_FORGOT_PASSWORDDeleteArgs} args - Arguments to delete one LOG_FORGOT_PASSWORD.
     * @example
     * // Delete one LOG_FORGOT_PASSWORD
     * const LOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.delete({
     *   where: {
     *     // ... filter to delete one LOG_FORGOT_PASSWORD
     *   }
     * })
     * 
     */
    delete<T extends LOG_FORGOT_PASSWORDDeleteArgs>(args: SelectSubset<T, LOG_FORGOT_PASSWORDDeleteArgs<ExtArgs>>): Prisma__LOG_FORGOT_PASSWORDClient<$Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LOG_FORGOT_PASSWORD.
     * @param {LOG_FORGOT_PASSWORDUpdateArgs} args - Arguments to update one LOG_FORGOT_PASSWORD.
     * @example
     * // Update one LOG_FORGOT_PASSWORD
     * const lOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LOG_FORGOT_PASSWORDUpdateArgs>(args: SelectSubset<T, LOG_FORGOT_PASSWORDUpdateArgs<ExtArgs>>): Prisma__LOG_FORGOT_PASSWORDClient<$Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LOG_FORGOT_PASSWORDS.
     * @param {LOG_FORGOT_PASSWORDDeleteManyArgs} args - Arguments to filter LOG_FORGOT_PASSWORDS to delete.
     * @example
     * // Delete a few LOG_FORGOT_PASSWORDS
     * const { count } = await prisma.lOG_FORGOT_PASSWORD.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LOG_FORGOT_PASSWORDDeleteManyArgs>(args?: SelectSubset<T, LOG_FORGOT_PASSWORDDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LOG_FORGOT_PASSWORDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOG_FORGOT_PASSWORDUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LOG_FORGOT_PASSWORDS
     * const lOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LOG_FORGOT_PASSWORDUpdateManyArgs>(args: SelectSubset<T, LOG_FORGOT_PASSWORDUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LOG_FORGOT_PASSWORDS and returns the data updated in the database.
     * @param {LOG_FORGOT_PASSWORDUpdateManyAndReturnArgs} args - Arguments to update many LOG_FORGOT_PASSWORDS.
     * @example
     * // Update many LOG_FORGOT_PASSWORDS
     * const lOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LOG_FORGOT_PASSWORDS and only return the `otp`
     * const lOG_FORGOT_PASSWORDWithOtpOnly = await prisma.lOG_FORGOT_PASSWORD.updateManyAndReturn({
     *   select: { otp: true },
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
    updateManyAndReturn<T extends LOG_FORGOT_PASSWORDUpdateManyAndReturnArgs>(args: SelectSubset<T, LOG_FORGOT_PASSWORDUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LOG_FORGOT_PASSWORD.
     * @param {LOG_FORGOT_PASSWORDUpsertArgs} args - Arguments to update or create a LOG_FORGOT_PASSWORD.
     * @example
     * // Update or create a LOG_FORGOT_PASSWORD
     * const lOG_FORGOT_PASSWORD = await prisma.lOG_FORGOT_PASSWORD.upsert({
     *   create: {
     *     // ... data to create a LOG_FORGOT_PASSWORD
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LOG_FORGOT_PASSWORD we want to update
     *   }
     * })
     */
    upsert<T extends LOG_FORGOT_PASSWORDUpsertArgs>(args: SelectSubset<T, LOG_FORGOT_PASSWORDUpsertArgs<ExtArgs>>): Prisma__LOG_FORGOT_PASSWORDClient<$Result.GetResult<Prisma.$LOG_FORGOT_PASSWORDPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LOG_FORGOT_PASSWORDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOG_FORGOT_PASSWORDCountArgs} args - Arguments to filter LOG_FORGOT_PASSWORDS to count.
     * @example
     * // Count the number of LOG_FORGOT_PASSWORDS
     * const count = await prisma.lOG_FORGOT_PASSWORD.count({
     *   where: {
     *     // ... the filter for the LOG_FORGOT_PASSWORDS we want to count
     *   }
     * })
    **/
    count<T extends LOG_FORGOT_PASSWORDCountArgs>(
      args?: Subset<T, LOG_FORGOT_PASSWORDCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LOG_FORGOT_PASSWORDCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LOG_FORGOT_PASSWORD.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOG_FORGOT_PASSWORDAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LOG_FORGOT_PASSWORDAggregateArgs>(args: Subset<T, LOG_FORGOT_PASSWORDAggregateArgs>): Prisma.PrismaPromise<GetLOG_FORGOT_PASSWORDAggregateType<T>>

    /**
     * Group by LOG_FORGOT_PASSWORD.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOG_FORGOT_PASSWORDGroupByArgs} args - Group by arguments.
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
      T extends LOG_FORGOT_PASSWORDGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LOG_FORGOT_PASSWORDGroupByArgs['orderBy'] }
        : { orderBy?: LOG_FORGOT_PASSWORDGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LOG_FORGOT_PASSWORDGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLOG_FORGOT_PASSWORDGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LOG_FORGOT_PASSWORD model
   */
  readonly fields: LOG_FORGOT_PASSWORDFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LOG_FORGOT_PASSWORD.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LOG_FORGOT_PASSWORDClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LOG_FORGOT_PASSWORD model
   */
  interface LOG_FORGOT_PASSWORDFieldRefs {
    readonly otp: FieldRef<"LOG_FORGOT_PASSWORD", 'String'>
    readonly nik: FieldRef<"LOG_FORGOT_PASSWORD", 'String'>
    readonly used: FieldRef<"LOG_FORGOT_PASSWORD", 'Boolean'>
    readonly createdAt: FieldRef<"LOG_FORGOT_PASSWORD", 'DateTime'>
    readonly expiresAt: FieldRef<"LOG_FORGOT_PASSWORD", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LOG_FORGOT_PASSWORD findUnique
   */
  export type LOG_FORGOT_PASSWORDFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
    /**
     * Filter, which LOG_FORGOT_PASSWORD to fetch.
     */
    where: LOG_FORGOT_PASSWORDWhereUniqueInput
  }

  /**
   * LOG_FORGOT_PASSWORD findUniqueOrThrow
   */
  export type LOG_FORGOT_PASSWORDFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
    /**
     * Filter, which LOG_FORGOT_PASSWORD to fetch.
     */
    where: LOG_FORGOT_PASSWORDWhereUniqueInput
  }

  /**
   * LOG_FORGOT_PASSWORD findFirst
   */
  export type LOG_FORGOT_PASSWORDFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
    /**
     * Filter, which LOG_FORGOT_PASSWORD to fetch.
     */
    where?: LOG_FORGOT_PASSWORDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOG_FORGOT_PASSWORDS to fetch.
     */
    orderBy?: LOG_FORGOT_PASSWORDOrderByWithRelationInput | LOG_FORGOT_PASSWORDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LOG_FORGOT_PASSWORDS.
     */
    cursor?: LOG_FORGOT_PASSWORDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOG_FORGOT_PASSWORDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOG_FORGOT_PASSWORDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LOG_FORGOT_PASSWORDS.
     */
    distinct?: LOG_FORGOT_PASSWORDScalarFieldEnum | LOG_FORGOT_PASSWORDScalarFieldEnum[]
  }

  /**
   * LOG_FORGOT_PASSWORD findFirstOrThrow
   */
  export type LOG_FORGOT_PASSWORDFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
    /**
     * Filter, which LOG_FORGOT_PASSWORD to fetch.
     */
    where?: LOG_FORGOT_PASSWORDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOG_FORGOT_PASSWORDS to fetch.
     */
    orderBy?: LOG_FORGOT_PASSWORDOrderByWithRelationInput | LOG_FORGOT_PASSWORDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LOG_FORGOT_PASSWORDS.
     */
    cursor?: LOG_FORGOT_PASSWORDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOG_FORGOT_PASSWORDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOG_FORGOT_PASSWORDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LOG_FORGOT_PASSWORDS.
     */
    distinct?: LOG_FORGOT_PASSWORDScalarFieldEnum | LOG_FORGOT_PASSWORDScalarFieldEnum[]
  }

  /**
   * LOG_FORGOT_PASSWORD findMany
   */
  export type LOG_FORGOT_PASSWORDFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
    /**
     * Filter, which LOG_FORGOT_PASSWORDS to fetch.
     */
    where?: LOG_FORGOT_PASSWORDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOG_FORGOT_PASSWORDS to fetch.
     */
    orderBy?: LOG_FORGOT_PASSWORDOrderByWithRelationInput | LOG_FORGOT_PASSWORDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LOG_FORGOT_PASSWORDS.
     */
    cursor?: LOG_FORGOT_PASSWORDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOG_FORGOT_PASSWORDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOG_FORGOT_PASSWORDS.
     */
    skip?: number
    distinct?: LOG_FORGOT_PASSWORDScalarFieldEnum | LOG_FORGOT_PASSWORDScalarFieldEnum[]
  }

  /**
   * LOG_FORGOT_PASSWORD create
   */
  export type LOG_FORGOT_PASSWORDCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
    /**
     * The data needed to create a LOG_FORGOT_PASSWORD.
     */
    data: XOR<LOG_FORGOT_PASSWORDCreateInput, LOG_FORGOT_PASSWORDUncheckedCreateInput>
  }

  /**
   * LOG_FORGOT_PASSWORD createMany
   */
  export type LOG_FORGOT_PASSWORDCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LOG_FORGOT_PASSWORDS.
     */
    data: LOG_FORGOT_PASSWORDCreateManyInput | LOG_FORGOT_PASSWORDCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LOG_FORGOT_PASSWORD createManyAndReturn
   */
  export type LOG_FORGOT_PASSWORDCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
    /**
     * The data used to create many LOG_FORGOT_PASSWORDS.
     */
    data: LOG_FORGOT_PASSWORDCreateManyInput | LOG_FORGOT_PASSWORDCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LOG_FORGOT_PASSWORD update
   */
  export type LOG_FORGOT_PASSWORDUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
    /**
     * The data needed to update a LOG_FORGOT_PASSWORD.
     */
    data: XOR<LOG_FORGOT_PASSWORDUpdateInput, LOG_FORGOT_PASSWORDUncheckedUpdateInput>
    /**
     * Choose, which LOG_FORGOT_PASSWORD to update.
     */
    where: LOG_FORGOT_PASSWORDWhereUniqueInput
  }

  /**
   * LOG_FORGOT_PASSWORD updateMany
   */
  export type LOG_FORGOT_PASSWORDUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LOG_FORGOT_PASSWORDS.
     */
    data: XOR<LOG_FORGOT_PASSWORDUpdateManyMutationInput, LOG_FORGOT_PASSWORDUncheckedUpdateManyInput>
    /**
     * Filter which LOG_FORGOT_PASSWORDS to update
     */
    where?: LOG_FORGOT_PASSWORDWhereInput
    /**
     * Limit how many LOG_FORGOT_PASSWORDS to update.
     */
    limit?: number
  }

  /**
   * LOG_FORGOT_PASSWORD updateManyAndReturn
   */
  export type LOG_FORGOT_PASSWORDUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
    /**
     * The data used to update LOG_FORGOT_PASSWORDS.
     */
    data: XOR<LOG_FORGOT_PASSWORDUpdateManyMutationInput, LOG_FORGOT_PASSWORDUncheckedUpdateManyInput>
    /**
     * Filter which LOG_FORGOT_PASSWORDS to update
     */
    where?: LOG_FORGOT_PASSWORDWhereInput
    /**
     * Limit how many LOG_FORGOT_PASSWORDS to update.
     */
    limit?: number
  }

  /**
   * LOG_FORGOT_PASSWORD upsert
   */
  export type LOG_FORGOT_PASSWORDUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
    /**
     * The filter to search for the LOG_FORGOT_PASSWORD to update in case it exists.
     */
    where: LOG_FORGOT_PASSWORDWhereUniqueInput
    /**
     * In case the LOG_FORGOT_PASSWORD found by the `where` argument doesn't exist, create a new LOG_FORGOT_PASSWORD with this data.
     */
    create: XOR<LOG_FORGOT_PASSWORDCreateInput, LOG_FORGOT_PASSWORDUncheckedCreateInput>
    /**
     * In case the LOG_FORGOT_PASSWORD was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LOG_FORGOT_PASSWORDUpdateInput, LOG_FORGOT_PASSWORDUncheckedUpdateInput>
  }

  /**
   * LOG_FORGOT_PASSWORD delete
   */
  export type LOG_FORGOT_PASSWORDDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
    /**
     * Filter which LOG_FORGOT_PASSWORD to delete.
     */
    where: LOG_FORGOT_PASSWORDWhereUniqueInput
  }

  /**
   * LOG_FORGOT_PASSWORD deleteMany
   */
  export type LOG_FORGOT_PASSWORDDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LOG_FORGOT_PASSWORDS to delete
     */
    where?: LOG_FORGOT_PASSWORDWhereInput
    /**
     * Limit how many LOG_FORGOT_PASSWORDS to delete.
     */
    limit?: number
  }

  /**
   * LOG_FORGOT_PASSWORD without action
   */
  export type LOG_FORGOT_PASSWORDDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOG_FORGOT_PASSWORD
     */
    select?: LOG_FORGOT_PASSWORDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOG_FORGOT_PASSWORD
     */
    omit?: LOG_FORGOT_PASSWORDOmit<ExtArgs> | null
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


  export const DT_USERScalarFieldEnum: {
    nik: 'nik',
    nama: 'nama',
    password: 'password',
    no_telp: 'no_telp',
    email: 'email'
  };

  export type DT_USERScalarFieldEnum = (typeof DT_USERScalarFieldEnum)[keyof typeof DT_USERScalarFieldEnum]


  export const DT_PROJECTScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DT_PROJECTScalarFieldEnum = (typeof DT_PROJECTScalarFieldEnum)[keyof typeof DT_PROJECTScalarFieldEnum]


  export const DT_PROJECT_MEMBERScalarFieldEnum: {
    id: 'id',
    nik_user: 'nik_user',
    role_project: 'role_project',
    is_invitation: 'is_invitation',
    ID_INVITATION: 'ID_INVITATION',
    projectId: 'projectId'
  };

  export type DT_PROJECT_MEMBERScalarFieldEnum = (typeof DT_PROJECT_MEMBERScalarFieldEnum)[keyof typeof DT_PROJECT_MEMBERScalarFieldEnum]


  export const DT_INVITATIONScalarFieldEnum: {
    id: 'id',
    ID_PROJECT: 'ID_PROJECT',
    from: 'from',
    to: 'to',
    status: 'status'
  };

  export type DT_INVITATIONScalarFieldEnum = (typeof DT_INVITATIONScalarFieldEnum)[keyof typeof DT_INVITATIONScalarFieldEnum]


  export const LOG_FORGOT_PASSWORDScalarFieldEnum: {
    otp: 'otp',
    nik: 'nik',
    used: 'used',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type LOG_FORGOT_PASSWORDScalarFieldEnum = (typeof LOG_FORGOT_PASSWORDScalarFieldEnum)[keyof typeof LOG_FORGOT_PASSWORDScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DT_USERWhereInput = {
    AND?: DT_USERWhereInput | DT_USERWhereInput[]
    OR?: DT_USERWhereInput[]
    NOT?: DT_USERWhereInput | DT_USERWhereInput[]
    nik?: StringFilter<"DT_USER"> | string
    nama?: StringFilter<"DT_USER"> | string
    password?: StringFilter<"DT_USER"> | string
    no_telp?: StringFilter<"DT_USER"> | string
    email?: StringNullableFilter<"DT_USER"> | string | null
    projectMembers?: DT_PROJECT_MEMBERListRelationFilter
  }

  export type DT_USEROrderByWithRelationInput = {
    nik?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    no_telp?: SortOrder
    email?: SortOrderInput | SortOrder
    projectMembers?: DT_PROJECT_MEMBEROrderByRelationAggregateInput
  }

  export type DT_USERWhereUniqueInput = Prisma.AtLeast<{
    nik?: string
    AND?: DT_USERWhereInput | DT_USERWhereInput[]
    OR?: DT_USERWhereInput[]
    NOT?: DT_USERWhereInput | DT_USERWhereInput[]
    nama?: StringFilter<"DT_USER"> | string
    password?: StringFilter<"DT_USER"> | string
    no_telp?: StringFilter<"DT_USER"> | string
    email?: StringNullableFilter<"DT_USER"> | string | null
    projectMembers?: DT_PROJECT_MEMBERListRelationFilter
  }, "nik">

  export type DT_USEROrderByWithAggregationInput = {
    nik?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    no_telp?: SortOrder
    email?: SortOrderInput | SortOrder
    _count?: DT_USERCountOrderByAggregateInput
    _max?: DT_USERMaxOrderByAggregateInput
    _min?: DT_USERMinOrderByAggregateInput
  }

  export type DT_USERScalarWhereWithAggregatesInput = {
    AND?: DT_USERScalarWhereWithAggregatesInput | DT_USERScalarWhereWithAggregatesInput[]
    OR?: DT_USERScalarWhereWithAggregatesInput[]
    NOT?: DT_USERScalarWhereWithAggregatesInput | DT_USERScalarWhereWithAggregatesInput[]
    nik?: StringWithAggregatesFilter<"DT_USER"> | string
    nama?: StringWithAggregatesFilter<"DT_USER"> | string
    password?: StringWithAggregatesFilter<"DT_USER"> | string
    no_telp?: StringWithAggregatesFilter<"DT_USER"> | string
    email?: StringNullableWithAggregatesFilter<"DT_USER"> | string | null
  }

  export type DT_PROJECTWhereInput = {
    AND?: DT_PROJECTWhereInput | DT_PROJECTWhereInput[]
    OR?: DT_PROJECTWhereInput[]
    NOT?: DT_PROJECTWhereInput | DT_PROJECTWhereInput[]
    id?: StringFilter<"DT_PROJECT"> | string
    name?: StringFilter<"DT_PROJECT"> | string
    projectMembers?: DT_PROJECT_MEMBERListRelationFilter
  }

  export type DT_PROJECTOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectMembers?: DT_PROJECT_MEMBEROrderByRelationAggregateInput
  }

  export type DT_PROJECTWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DT_PROJECTWhereInput | DT_PROJECTWhereInput[]
    OR?: DT_PROJECTWhereInput[]
    NOT?: DT_PROJECTWhereInput | DT_PROJECTWhereInput[]
    name?: StringFilter<"DT_PROJECT"> | string
    projectMembers?: DT_PROJECT_MEMBERListRelationFilter
  }, "id">

  export type DT_PROJECTOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DT_PROJECTCountOrderByAggregateInput
    _max?: DT_PROJECTMaxOrderByAggregateInput
    _min?: DT_PROJECTMinOrderByAggregateInput
  }

  export type DT_PROJECTScalarWhereWithAggregatesInput = {
    AND?: DT_PROJECTScalarWhereWithAggregatesInput | DT_PROJECTScalarWhereWithAggregatesInput[]
    OR?: DT_PROJECTScalarWhereWithAggregatesInput[]
    NOT?: DT_PROJECTScalarWhereWithAggregatesInput | DT_PROJECTScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DT_PROJECT"> | string
    name?: StringWithAggregatesFilter<"DT_PROJECT"> | string
  }

  export type DT_PROJECT_MEMBERWhereInput = {
    AND?: DT_PROJECT_MEMBERWhereInput | DT_PROJECT_MEMBERWhereInput[]
    OR?: DT_PROJECT_MEMBERWhereInput[]
    NOT?: DT_PROJECT_MEMBERWhereInput | DT_PROJECT_MEMBERWhereInput[]
    id?: StringFilter<"DT_PROJECT_MEMBER"> | string
    nik_user?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
    role_project?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
    is_invitation?: BoolNullableFilter<"DT_PROJECT_MEMBER"> | boolean | null
    ID_INVITATION?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
    projectId?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
    user?: XOR<DT_USERNullableScalarRelationFilter, DT_USERWhereInput> | null
    project?: XOR<DT_PROJECTNullableScalarRelationFilter, DT_PROJECTWhereInput> | null
    invitation?: XOR<DT_INVITATIONNullableScalarRelationFilter, DT_INVITATIONWhereInput> | null
  }

  export type DT_PROJECT_MEMBEROrderByWithRelationInput = {
    id?: SortOrder
    nik_user?: SortOrderInput | SortOrder
    role_project?: SortOrderInput | SortOrder
    is_invitation?: SortOrderInput | SortOrder
    ID_INVITATION?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    user?: DT_USEROrderByWithRelationInput
    project?: DT_PROJECTOrderByWithRelationInput
    invitation?: DT_INVITATIONOrderByWithRelationInput
  }

  export type DT_PROJECT_MEMBERWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DT_PROJECT_MEMBERWhereInput | DT_PROJECT_MEMBERWhereInput[]
    OR?: DT_PROJECT_MEMBERWhereInput[]
    NOT?: DT_PROJECT_MEMBERWhereInput | DT_PROJECT_MEMBERWhereInput[]
    nik_user?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
    role_project?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
    is_invitation?: BoolNullableFilter<"DT_PROJECT_MEMBER"> | boolean | null
    ID_INVITATION?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
    projectId?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
    user?: XOR<DT_USERNullableScalarRelationFilter, DT_USERWhereInput> | null
    project?: XOR<DT_PROJECTNullableScalarRelationFilter, DT_PROJECTWhereInput> | null
    invitation?: XOR<DT_INVITATIONNullableScalarRelationFilter, DT_INVITATIONWhereInput> | null
  }, "id">

  export type DT_PROJECT_MEMBEROrderByWithAggregationInput = {
    id?: SortOrder
    nik_user?: SortOrderInput | SortOrder
    role_project?: SortOrderInput | SortOrder
    is_invitation?: SortOrderInput | SortOrder
    ID_INVITATION?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    _count?: DT_PROJECT_MEMBERCountOrderByAggregateInput
    _max?: DT_PROJECT_MEMBERMaxOrderByAggregateInput
    _min?: DT_PROJECT_MEMBERMinOrderByAggregateInput
  }

  export type DT_PROJECT_MEMBERScalarWhereWithAggregatesInput = {
    AND?: DT_PROJECT_MEMBERScalarWhereWithAggregatesInput | DT_PROJECT_MEMBERScalarWhereWithAggregatesInput[]
    OR?: DT_PROJECT_MEMBERScalarWhereWithAggregatesInput[]
    NOT?: DT_PROJECT_MEMBERScalarWhereWithAggregatesInput | DT_PROJECT_MEMBERScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DT_PROJECT_MEMBER"> | string
    nik_user?: StringNullableWithAggregatesFilter<"DT_PROJECT_MEMBER"> | string | null
    role_project?: StringNullableWithAggregatesFilter<"DT_PROJECT_MEMBER"> | string | null
    is_invitation?: BoolNullableWithAggregatesFilter<"DT_PROJECT_MEMBER"> | boolean | null
    ID_INVITATION?: StringNullableWithAggregatesFilter<"DT_PROJECT_MEMBER"> | string | null
    projectId?: StringNullableWithAggregatesFilter<"DT_PROJECT_MEMBER"> | string | null
  }

  export type DT_INVITATIONWhereInput = {
    AND?: DT_INVITATIONWhereInput | DT_INVITATIONWhereInput[]
    OR?: DT_INVITATIONWhereInput[]
    NOT?: DT_INVITATIONWhereInput | DT_INVITATIONWhereInput[]
    id?: StringFilter<"DT_INVITATION"> | string
    ID_PROJECT?: StringNullableFilter<"DT_INVITATION"> | string | null
    from?: StringNullableFilter<"DT_INVITATION"> | string | null
    to?: StringNullableFilter<"DT_INVITATION"> | string | null
    status?: BoolNullableFilter<"DT_INVITATION"> | boolean | null
    members?: DT_PROJECT_MEMBERListRelationFilter
  }

  export type DT_INVITATIONOrderByWithRelationInput = {
    id?: SortOrder
    ID_PROJECT?: SortOrderInput | SortOrder
    from?: SortOrderInput | SortOrder
    to?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    members?: DT_PROJECT_MEMBEROrderByRelationAggregateInput
  }

  export type DT_INVITATIONWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DT_INVITATIONWhereInput | DT_INVITATIONWhereInput[]
    OR?: DT_INVITATIONWhereInput[]
    NOT?: DT_INVITATIONWhereInput | DT_INVITATIONWhereInput[]
    ID_PROJECT?: StringNullableFilter<"DT_INVITATION"> | string | null
    from?: StringNullableFilter<"DT_INVITATION"> | string | null
    to?: StringNullableFilter<"DT_INVITATION"> | string | null
    status?: BoolNullableFilter<"DT_INVITATION"> | boolean | null
    members?: DT_PROJECT_MEMBERListRelationFilter
  }, "id">

  export type DT_INVITATIONOrderByWithAggregationInput = {
    id?: SortOrder
    ID_PROJECT?: SortOrderInput | SortOrder
    from?: SortOrderInput | SortOrder
    to?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: DT_INVITATIONCountOrderByAggregateInput
    _max?: DT_INVITATIONMaxOrderByAggregateInput
    _min?: DT_INVITATIONMinOrderByAggregateInput
  }

  export type DT_INVITATIONScalarWhereWithAggregatesInput = {
    AND?: DT_INVITATIONScalarWhereWithAggregatesInput | DT_INVITATIONScalarWhereWithAggregatesInput[]
    OR?: DT_INVITATIONScalarWhereWithAggregatesInput[]
    NOT?: DT_INVITATIONScalarWhereWithAggregatesInput | DT_INVITATIONScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DT_INVITATION"> | string
    ID_PROJECT?: StringNullableWithAggregatesFilter<"DT_INVITATION"> | string | null
    from?: StringNullableWithAggregatesFilter<"DT_INVITATION"> | string | null
    to?: StringNullableWithAggregatesFilter<"DT_INVITATION"> | string | null
    status?: BoolNullableWithAggregatesFilter<"DT_INVITATION"> | boolean | null
  }

  export type LOG_FORGOT_PASSWORDWhereInput = {
    AND?: LOG_FORGOT_PASSWORDWhereInput | LOG_FORGOT_PASSWORDWhereInput[]
    OR?: LOG_FORGOT_PASSWORDWhereInput[]
    NOT?: LOG_FORGOT_PASSWORDWhereInput | LOG_FORGOT_PASSWORDWhereInput[]
    otp?: StringFilter<"LOG_FORGOT_PASSWORD"> | string
    nik?: StringFilter<"LOG_FORGOT_PASSWORD"> | string
    used?: BoolFilter<"LOG_FORGOT_PASSWORD"> | boolean
    createdAt?: DateTimeFilter<"LOG_FORGOT_PASSWORD"> | Date | string
    expiresAt?: DateTimeFilter<"LOG_FORGOT_PASSWORD"> | Date | string
  }

  export type LOG_FORGOT_PASSWORDOrderByWithRelationInput = {
    otp?: SortOrder
    nik?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type LOG_FORGOT_PASSWORDWhereUniqueInput = Prisma.AtLeast<{
    otp?: string
    AND?: LOG_FORGOT_PASSWORDWhereInput | LOG_FORGOT_PASSWORDWhereInput[]
    OR?: LOG_FORGOT_PASSWORDWhereInput[]
    NOT?: LOG_FORGOT_PASSWORDWhereInput | LOG_FORGOT_PASSWORDWhereInput[]
    nik?: StringFilter<"LOG_FORGOT_PASSWORD"> | string
    used?: BoolFilter<"LOG_FORGOT_PASSWORD"> | boolean
    createdAt?: DateTimeFilter<"LOG_FORGOT_PASSWORD"> | Date | string
    expiresAt?: DateTimeFilter<"LOG_FORGOT_PASSWORD"> | Date | string
  }, "otp" | "otp">

  export type LOG_FORGOT_PASSWORDOrderByWithAggregationInput = {
    otp?: SortOrder
    nik?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: LOG_FORGOT_PASSWORDCountOrderByAggregateInput
    _max?: LOG_FORGOT_PASSWORDMaxOrderByAggregateInput
    _min?: LOG_FORGOT_PASSWORDMinOrderByAggregateInput
  }

  export type LOG_FORGOT_PASSWORDScalarWhereWithAggregatesInput = {
    AND?: LOG_FORGOT_PASSWORDScalarWhereWithAggregatesInput | LOG_FORGOT_PASSWORDScalarWhereWithAggregatesInput[]
    OR?: LOG_FORGOT_PASSWORDScalarWhereWithAggregatesInput[]
    NOT?: LOG_FORGOT_PASSWORDScalarWhereWithAggregatesInput | LOG_FORGOT_PASSWORDScalarWhereWithAggregatesInput[]
    otp?: StringWithAggregatesFilter<"LOG_FORGOT_PASSWORD"> | string
    nik?: StringWithAggregatesFilter<"LOG_FORGOT_PASSWORD"> | string
    used?: BoolWithAggregatesFilter<"LOG_FORGOT_PASSWORD"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LOG_FORGOT_PASSWORD"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"LOG_FORGOT_PASSWORD"> | Date | string
  }

  export type DT_USERCreateInput = {
    nik: string
    nama: string
    password: string
    no_telp: string
    email?: string | null
    projectMembers?: DT_PROJECT_MEMBERCreateNestedManyWithoutUserInput
  }

  export type DT_USERUncheckedCreateInput = {
    nik: string
    nama: string
    password: string
    no_telp: string
    email?: string | null
    projectMembers?: DT_PROJECT_MEMBERUncheckedCreateNestedManyWithoutUserInput
  }

  export type DT_USERUpdateInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    projectMembers?: DT_PROJECT_MEMBERUpdateManyWithoutUserNestedInput
  }

  export type DT_USERUncheckedUpdateInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    projectMembers?: DT_PROJECT_MEMBERUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DT_USERCreateManyInput = {
    nik: string
    nama: string
    password: string
    no_telp: string
    email?: string | null
  }

  export type DT_USERUpdateManyMutationInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DT_USERUncheckedUpdateManyInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DT_PROJECTCreateInput = {
    id: string
    name: string
    projectMembers?: DT_PROJECT_MEMBERCreateNestedManyWithoutProjectInput
  }

  export type DT_PROJECTUncheckedCreateInput = {
    id: string
    name: string
    projectMembers?: DT_PROJECT_MEMBERUncheckedCreateNestedManyWithoutProjectInput
  }

  export type DT_PROJECTUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectMembers?: DT_PROJECT_MEMBERUpdateManyWithoutProjectNestedInput
  }

  export type DT_PROJECTUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectMembers?: DT_PROJECT_MEMBERUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type DT_PROJECTCreateManyInput = {
    id: string
    name: string
  }

  export type DT_PROJECTUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DT_PROJECTUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DT_PROJECT_MEMBERCreateInput = {
    id?: string
    role_project?: string | null
    is_invitation?: boolean | null
    user?: DT_USERCreateNestedOneWithoutProjectMembersInput
    project?: DT_PROJECTCreateNestedOneWithoutProjectMembersInput
    invitation?: DT_INVITATIONCreateNestedOneWithoutMembersInput
  }

  export type DT_PROJECT_MEMBERUncheckedCreateInput = {
    id?: string
    nik_user?: string | null
    role_project?: string | null
    is_invitation?: boolean | null
    ID_INVITATION?: string | null
    projectId?: string | null
  }

  export type DT_PROJECT_MEMBERUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: DT_USERUpdateOneWithoutProjectMembersNestedInput
    project?: DT_PROJECTUpdateOneWithoutProjectMembersNestedInput
    invitation?: DT_INVITATIONUpdateOneWithoutMembersNestedInput
  }

  export type DT_PROJECT_MEMBERUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik_user?: NullableStringFieldUpdateOperationsInput | string | null
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_INVITATION?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DT_PROJECT_MEMBERCreateManyInput = {
    id?: string
    nik_user?: string | null
    role_project?: string | null
    is_invitation?: boolean | null
    ID_INVITATION?: string | null
    projectId?: string | null
  }

  export type DT_PROJECT_MEMBERUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DT_PROJECT_MEMBERUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik_user?: NullableStringFieldUpdateOperationsInput | string | null
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_INVITATION?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DT_INVITATIONCreateInput = {
    id: string
    ID_PROJECT?: string | null
    from?: string | null
    to?: string | null
    status?: boolean | null
    members?: DT_PROJECT_MEMBERCreateNestedManyWithoutInvitationInput
  }

  export type DT_INVITATIONUncheckedCreateInput = {
    id: string
    ID_PROJECT?: string | null
    from?: string | null
    to?: string | null
    status?: boolean | null
    members?: DT_PROJECT_MEMBERUncheckedCreateNestedManyWithoutInvitationInput
  }

  export type DT_INVITATIONUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ID_PROJECT?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    members?: DT_PROJECT_MEMBERUpdateManyWithoutInvitationNestedInput
  }

  export type DT_INVITATIONUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ID_PROJECT?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    members?: DT_PROJECT_MEMBERUncheckedUpdateManyWithoutInvitationNestedInput
  }

  export type DT_INVITATIONCreateManyInput = {
    id: string
    ID_PROJECT?: string | null
    from?: string | null
    to?: string | null
    status?: boolean | null
  }

  export type DT_INVITATIONUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ID_PROJECT?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DT_INVITATIONUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ID_PROJECT?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type LOG_FORGOT_PASSWORDCreateInput = {
    otp: string
    nik: string
    used?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LOG_FORGOT_PASSWORDUncheckedCreateInput = {
    otp: string
    nik: string
    used?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LOG_FORGOT_PASSWORDUpdateInput = {
    otp?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LOG_FORGOT_PASSWORDUncheckedUpdateInput = {
    otp?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LOG_FORGOT_PASSWORDCreateManyInput = {
    otp: string
    nik: string
    used?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LOG_FORGOT_PASSWORDUpdateManyMutationInput = {
    otp?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LOG_FORGOT_PASSWORDUncheckedUpdateManyInput = {
    otp?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DT_PROJECT_MEMBERListRelationFilter = {
    every?: DT_PROJECT_MEMBERWhereInput
    some?: DT_PROJECT_MEMBERWhereInput
    none?: DT_PROJECT_MEMBERWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DT_PROJECT_MEMBEROrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DT_USERCountOrderByAggregateInput = {
    nik?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
  }

  export type DT_USERMaxOrderByAggregateInput = {
    nik?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
  }

  export type DT_USERMinOrderByAggregateInput = {
    nik?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
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

  export type DT_PROJECTCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DT_PROJECTMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DT_PROJECTMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DT_USERNullableScalarRelationFilter = {
    is?: DT_USERWhereInput | null
    isNot?: DT_USERWhereInput | null
  }

  export type DT_PROJECTNullableScalarRelationFilter = {
    is?: DT_PROJECTWhereInput | null
    isNot?: DT_PROJECTWhereInput | null
  }

  export type DT_INVITATIONNullableScalarRelationFilter = {
    is?: DT_INVITATIONWhereInput | null
    isNot?: DT_INVITATIONWhereInput | null
  }

  export type DT_PROJECT_MEMBERCountOrderByAggregateInput = {
    id?: SortOrder
    nik_user?: SortOrder
    role_project?: SortOrder
    is_invitation?: SortOrder
    ID_INVITATION?: SortOrder
    projectId?: SortOrder
  }

  export type DT_PROJECT_MEMBERMaxOrderByAggregateInput = {
    id?: SortOrder
    nik_user?: SortOrder
    role_project?: SortOrder
    is_invitation?: SortOrder
    ID_INVITATION?: SortOrder
    projectId?: SortOrder
  }

  export type DT_PROJECT_MEMBERMinOrderByAggregateInput = {
    id?: SortOrder
    nik_user?: SortOrder
    role_project?: SortOrder
    is_invitation?: SortOrder
    ID_INVITATION?: SortOrder
    projectId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DT_INVITATIONCountOrderByAggregateInput = {
    id?: SortOrder
    ID_PROJECT?: SortOrder
    from?: SortOrder
    to?: SortOrder
    status?: SortOrder
  }

  export type DT_INVITATIONMaxOrderByAggregateInput = {
    id?: SortOrder
    ID_PROJECT?: SortOrder
    from?: SortOrder
    to?: SortOrder
    status?: SortOrder
  }

  export type DT_INVITATIONMinOrderByAggregateInput = {
    id?: SortOrder
    ID_PROJECT?: SortOrder
    from?: SortOrder
    to?: SortOrder
    status?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type LOG_FORGOT_PASSWORDCountOrderByAggregateInput = {
    otp?: SortOrder
    nik?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type LOG_FORGOT_PASSWORDMaxOrderByAggregateInput = {
    otp?: SortOrder
    nik?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type LOG_FORGOT_PASSWORDMinOrderByAggregateInput = {
    otp?: SortOrder
    nik?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DT_PROJECT_MEMBERCreateNestedManyWithoutUserInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutUserInput, DT_PROJECT_MEMBERUncheckedCreateWithoutUserInput> | DT_PROJECT_MEMBERCreateWithoutUserInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutUserInput | DT_PROJECT_MEMBERCreateOrConnectWithoutUserInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyUserInputEnvelope
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
  }

  export type DT_PROJECT_MEMBERUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutUserInput, DT_PROJECT_MEMBERUncheckedCreateWithoutUserInput> | DT_PROJECT_MEMBERCreateWithoutUserInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutUserInput | DT_PROJECT_MEMBERCreateOrConnectWithoutUserInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyUserInputEnvelope
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DT_PROJECT_MEMBERUpdateManyWithoutUserNestedInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutUserInput, DT_PROJECT_MEMBERUncheckedCreateWithoutUserInput> | DT_PROJECT_MEMBERCreateWithoutUserInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutUserInput | DT_PROJECT_MEMBERCreateOrConnectWithoutUserInput[]
    upsert?: DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutUserInput | DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyUserInputEnvelope
    set?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    disconnect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    delete?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    update?: DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutUserInput | DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DT_PROJECT_MEMBERUpdateManyWithWhereWithoutUserInput | DT_PROJECT_MEMBERUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DT_PROJECT_MEMBERScalarWhereInput | DT_PROJECT_MEMBERScalarWhereInput[]
  }

  export type DT_PROJECT_MEMBERUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutUserInput, DT_PROJECT_MEMBERUncheckedCreateWithoutUserInput> | DT_PROJECT_MEMBERCreateWithoutUserInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutUserInput | DT_PROJECT_MEMBERCreateOrConnectWithoutUserInput[]
    upsert?: DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutUserInput | DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyUserInputEnvelope
    set?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    disconnect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    delete?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    update?: DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutUserInput | DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DT_PROJECT_MEMBERUpdateManyWithWhereWithoutUserInput | DT_PROJECT_MEMBERUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DT_PROJECT_MEMBERScalarWhereInput | DT_PROJECT_MEMBERScalarWhereInput[]
  }

  export type DT_PROJECT_MEMBERCreateNestedManyWithoutProjectInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutProjectInput, DT_PROJECT_MEMBERUncheckedCreateWithoutProjectInput> | DT_PROJECT_MEMBERCreateWithoutProjectInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutProjectInput | DT_PROJECT_MEMBERCreateOrConnectWithoutProjectInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyProjectInputEnvelope
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
  }

  export type DT_PROJECT_MEMBERUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutProjectInput, DT_PROJECT_MEMBERUncheckedCreateWithoutProjectInput> | DT_PROJECT_MEMBERCreateWithoutProjectInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutProjectInput | DT_PROJECT_MEMBERCreateOrConnectWithoutProjectInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyProjectInputEnvelope
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
  }

  export type DT_PROJECT_MEMBERUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutProjectInput, DT_PROJECT_MEMBERUncheckedCreateWithoutProjectInput> | DT_PROJECT_MEMBERCreateWithoutProjectInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutProjectInput | DT_PROJECT_MEMBERCreateOrConnectWithoutProjectInput[]
    upsert?: DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutProjectInput | DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyProjectInputEnvelope
    set?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    disconnect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    delete?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    update?: DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutProjectInput | DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DT_PROJECT_MEMBERUpdateManyWithWhereWithoutProjectInput | DT_PROJECT_MEMBERUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DT_PROJECT_MEMBERScalarWhereInput | DT_PROJECT_MEMBERScalarWhereInput[]
  }

  export type DT_PROJECT_MEMBERUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutProjectInput, DT_PROJECT_MEMBERUncheckedCreateWithoutProjectInput> | DT_PROJECT_MEMBERCreateWithoutProjectInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutProjectInput | DT_PROJECT_MEMBERCreateOrConnectWithoutProjectInput[]
    upsert?: DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutProjectInput | DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyProjectInputEnvelope
    set?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    disconnect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    delete?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    update?: DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutProjectInput | DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DT_PROJECT_MEMBERUpdateManyWithWhereWithoutProjectInput | DT_PROJECT_MEMBERUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DT_PROJECT_MEMBERScalarWhereInput | DT_PROJECT_MEMBERScalarWhereInput[]
  }

  export type DT_USERCreateNestedOneWithoutProjectMembersInput = {
    create?: XOR<DT_USERCreateWithoutProjectMembersInput, DT_USERUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: DT_USERCreateOrConnectWithoutProjectMembersInput
    connect?: DT_USERWhereUniqueInput
  }

  export type DT_PROJECTCreateNestedOneWithoutProjectMembersInput = {
    create?: XOR<DT_PROJECTCreateWithoutProjectMembersInput, DT_PROJECTUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: DT_PROJECTCreateOrConnectWithoutProjectMembersInput
    connect?: DT_PROJECTWhereUniqueInput
  }

  export type DT_INVITATIONCreateNestedOneWithoutMembersInput = {
    create?: XOR<DT_INVITATIONCreateWithoutMembersInput, DT_INVITATIONUncheckedCreateWithoutMembersInput>
    connectOrCreate?: DT_INVITATIONCreateOrConnectWithoutMembersInput
    connect?: DT_INVITATIONWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DT_USERUpdateOneWithoutProjectMembersNestedInput = {
    create?: XOR<DT_USERCreateWithoutProjectMembersInput, DT_USERUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: DT_USERCreateOrConnectWithoutProjectMembersInput
    upsert?: DT_USERUpsertWithoutProjectMembersInput
    disconnect?: DT_USERWhereInput | boolean
    delete?: DT_USERWhereInput | boolean
    connect?: DT_USERWhereUniqueInput
    update?: XOR<XOR<DT_USERUpdateToOneWithWhereWithoutProjectMembersInput, DT_USERUpdateWithoutProjectMembersInput>, DT_USERUncheckedUpdateWithoutProjectMembersInput>
  }

  export type DT_PROJECTUpdateOneWithoutProjectMembersNestedInput = {
    create?: XOR<DT_PROJECTCreateWithoutProjectMembersInput, DT_PROJECTUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: DT_PROJECTCreateOrConnectWithoutProjectMembersInput
    upsert?: DT_PROJECTUpsertWithoutProjectMembersInput
    disconnect?: DT_PROJECTWhereInput | boolean
    delete?: DT_PROJECTWhereInput | boolean
    connect?: DT_PROJECTWhereUniqueInput
    update?: XOR<XOR<DT_PROJECTUpdateToOneWithWhereWithoutProjectMembersInput, DT_PROJECTUpdateWithoutProjectMembersInput>, DT_PROJECTUncheckedUpdateWithoutProjectMembersInput>
  }

  export type DT_INVITATIONUpdateOneWithoutMembersNestedInput = {
    create?: XOR<DT_INVITATIONCreateWithoutMembersInput, DT_INVITATIONUncheckedCreateWithoutMembersInput>
    connectOrCreate?: DT_INVITATIONCreateOrConnectWithoutMembersInput
    upsert?: DT_INVITATIONUpsertWithoutMembersInput
    disconnect?: DT_INVITATIONWhereInput | boolean
    delete?: DT_INVITATIONWhereInput | boolean
    connect?: DT_INVITATIONWhereUniqueInput
    update?: XOR<XOR<DT_INVITATIONUpdateToOneWithWhereWithoutMembersInput, DT_INVITATIONUpdateWithoutMembersInput>, DT_INVITATIONUncheckedUpdateWithoutMembersInput>
  }

  export type DT_PROJECT_MEMBERCreateNestedManyWithoutInvitationInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutInvitationInput, DT_PROJECT_MEMBERUncheckedCreateWithoutInvitationInput> | DT_PROJECT_MEMBERCreateWithoutInvitationInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutInvitationInput | DT_PROJECT_MEMBERCreateOrConnectWithoutInvitationInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyInvitationInputEnvelope
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
  }

  export type DT_PROJECT_MEMBERUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutInvitationInput, DT_PROJECT_MEMBERUncheckedCreateWithoutInvitationInput> | DT_PROJECT_MEMBERCreateWithoutInvitationInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutInvitationInput | DT_PROJECT_MEMBERCreateOrConnectWithoutInvitationInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyInvitationInputEnvelope
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
  }

  export type DT_PROJECT_MEMBERUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutInvitationInput, DT_PROJECT_MEMBERUncheckedCreateWithoutInvitationInput> | DT_PROJECT_MEMBERCreateWithoutInvitationInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutInvitationInput | DT_PROJECT_MEMBERCreateOrConnectWithoutInvitationInput[]
    upsert?: DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutInvitationInput | DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyInvitationInputEnvelope
    set?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    disconnect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    delete?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    update?: DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutInvitationInput | DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: DT_PROJECT_MEMBERUpdateManyWithWhereWithoutInvitationInput | DT_PROJECT_MEMBERUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: DT_PROJECT_MEMBERScalarWhereInput | DT_PROJECT_MEMBERScalarWhereInput[]
  }

  export type DT_PROJECT_MEMBERUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: XOR<DT_PROJECT_MEMBERCreateWithoutInvitationInput, DT_PROJECT_MEMBERUncheckedCreateWithoutInvitationInput> | DT_PROJECT_MEMBERCreateWithoutInvitationInput[] | DT_PROJECT_MEMBERUncheckedCreateWithoutInvitationInput[]
    connectOrCreate?: DT_PROJECT_MEMBERCreateOrConnectWithoutInvitationInput | DT_PROJECT_MEMBERCreateOrConnectWithoutInvitationInput[]
    upsert?: DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutInvitationInput | DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutInvitationInput[]
    createMany?: DT_PROJECT_MEMBERCreateManyInvitationInputEnvelope
    set?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    disconnect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    delete?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    connect?: DT_PROJECT_MEMBERWhereUniqueInput | DT_PROJECT_MEMBERWhereUniqueInput[]
    update?: DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutInvitationInput | DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutInvitationInput[]
    updateMany?: DT_PROJECT_MEMBERUpdateManyWithWhereWithoutInvitationInput | DT_PROJECT_MEMBERUpdateManyWithWhereWithoutInvitationInput[]
    deleteMany?: DT_PROJECT_MEMBERScalarWhereInput | DT_PROJECT_MEMBERScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DT_PROJECT_MEMBERCreateWithoutUserInput = {
    id?: string
    role_project?: string | null
    is_invitation?: boolean | null
    project?: DT_PROJECTCreateNestedOneWithoutProjectMembersInput
    invitation?: DT_INVITATIONCreateNestedOneWithoutMembersInput
  }

  export type DT_PROJECT_MEMBERUncheckedCreateWithoutUserInput = {
    id?: string
    role_project?: string | null
    is_invitation?: boolean | null
    ID_INVITATION?: string | null
    projectId?: string | null
  }

  export type DT_PROJECT_MEMBERCreateOrConnectWithoutUserInput = {
    where: DT_PROJECT_MEMBERWhereUniqueInput
    create: XOR<DT_PROJECT_MEMBERCreateWithoutUserInput, DT_PROJECT_MEMBERUncheckedCreateWithoutUserInput>
  }

  export type DT_PROJECT_MEMBERCreateManyUserInputEnvelope = {
    data: DT_PROJECT_MEMBERCreateManyUserInput | DT_PROJECT_MEMBERCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutUserInput = {
    where: DT_PROJECT_MEMBERWhereUniqueInput
    update: XOR<DT_PROJECT_MEMBERUpdateWithoutUserInput, DT_PROJECT_MEMBERUncheckedUpdateWithoutUserInput>
    create: XOR<DT_PROJECT_MEMBERCreateWithoutUserInput, DT_PROJECT_MEMBERUncheckedCreateWithoutUserInput>
  }

  export type DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutUserInput = {
    where: DT_PROJECT_MEMBERWhereUniqueInput
    data: XOR<DT_PROJECT_MEMBERUpdateWithoutUserInput, DT_PROJECT_MEMBERUncheckedUpdateWithoutUserInput>
  }

  export type DT_PROJECT_MEMBERUpdateManyWithWhereWithoutUserInput = {
    where: DT_PROJECT_MEMBERScalarWhereInput
    data: XOR<DT_PROJECT_MEMBERUpdateManyMutationInput, DT_PROJECT_MEMBERUncheckedUpdateManyWithoutUserInput>
  }

  export type DT_PROJECT_MEMBERScalarWhereInput = {
    AND?: DT_PROJECT_MEMBERScalarWhereInput | DT_PROJECT_MEMBERScalarWhereInput[]
    OR?: DT_PROJECT_MEMBERScalarWhereInput[]
    NOT?: DT_PROJECT_MEMBERScalarWhereInput | DT_PROJECT_MEMBERScalarWhereInput[]
    id?: StringFilter<"DT_PROJECT_MEMBER"> | string
    nik_user?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
    role_project?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
    is_invitation?: BoolNullableFilter<"DT_PROJECT_MEMBER"> | boolean | null
    ID_INVITATION?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
    projectId?: StringNullableFilter<"DT_PROJECT_MEMBER"> | string | null
  }

  export type DT_PROJECT_MEMBERCreateWithoutProjectInput = {
    id?: string
    role_project?: string | null
    is_invitation?: boolean | null
    user?: DT_USERCreateNestedOneWithoutProjectMembersInput
    invitation?: DT_INVITATIONCreateNestedOneWithoutMembersInput
  }

  export type DT_PROJECT_MEMBERUncheckedCreateWithoutProjectInput = {
    id?: string
    nik_user?: string | null
    role_project?: string | null
    is_invitation?: boolean | null
    ID_INVITATION?: string | null
  }

  export type DT_PROJECT_MEMBERCreateOrConnectWithoutProjectInput = {
    where: DT_PROJECT_MEMBERWhereUniqueInput
    create: XOR<DT_PROJECT_MEMBERCreateWithoutProjectInput, DT_PROJECT_MEMBERUncheckedCreateWithoutProjectInput>
  }

  export type DT_PROJECT_MEMBERCreateManyProjectInputEnvelope = {
    data: DT_PROJECT_MEMBERCreateManyProjectInput | DT_PROJECT_MEMBERCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutProjectInput = {
    where: DT_PROJECT_MEMBERWhereUniqueInput
    update: XOR<DT_PROJECT_MEMBERUpdateWithoutProjectInput, DT_PROJECT_MEMBERUncheckedUpdateWithoutProjectInput>
    create: XOR<DT_PROJECT_MEMBERCreateWithoutProjectInput, DT_PROJECT_MEMBERUncheckedCreateWithoutProjectInput>
  }

  export type DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutProjectInput = {
    where: DT_PROJECT_MEMBERWhereUniqueInput
    data: XOR<DT_PROJECT_MEMBERUpdateWithoutProjectInput, DT_PROJECT_MEMBERUncheckedUpdateWithoutProjectInput>
  }

  export type DT_PROJECT_MEMBERUpdateManyWithWhereWithoutProjectInput = {
    where: DT_PROJECT_MEMBERScalarWhereInput
    data: XOR<DT_PROJECT_MEMBERUpdateManyMutationInput, DT_PROJECT_MEMBERUncheckedUpdateManyWithoutProjectInput>
  }

  export type DT_USERCreateWithoutProjectMembersInput = {
    nik: string
    nama: string
    password: string
    no_telp: string
    email?: string | null
  }

  export type DT_USERUncheckedCreateWithoutProjectMembersInput = {
    nik: string
    nama: string
    password: string
    no_telp: string
    email?: string | null
  }

  export type DT_USERCreateOrConnectWithoutProjectMembersInput = {
    where: DT_USERWhereUniqueInput
    create: XOR<DT_USERCreateWithoutProjectMembersInput, DT_USERUncheckedCreateWithoutProjectMembersInput>
  }

  export type DT_PROJECTCreateWithoutProjectMembersInput = {
    id: string
    name: string
  }

  export type DT_PROJECTUncheckedCreateWithoutProjectMembersInput = {
    id: string
    name: string
  }

  export type DT_PROJECTCreateOrConnectWithoutProjectMembersInput = {
    where: DT_PROJECTWhereUniqueInput
    create: XOR<DT_PROJECTCreateWithoutProjectMembersInput, DT_PROJECTUncheckedCreateWithoutProjectMembersInput>
  }

  export type DT_INVITATIONCreateWithoutMembersInput = {
    id: string
    ID_PROJECT?: string | null
    from?: string | null
    to?: string | null
    status?: boolean | null
  }

  export type DT_INVITATIONUncheckedCreateWithoutMembersInput = {
    id: string
    ID_PROJECT?: string | null
    from?: string | null
    to?: string | null
    status?: boolean | null
  }

  export type DT_INVITATIONCreateOrConnectWithoutMembersInput = {
    where: DT_INVITATIONWhereUniqueInput
    create: XOR<DT_INVITATIONCreateWithoutMembersInput, DT_INVITATIONUncheckedCreateWithoutMembersInput>
  }

  export type DT_USERUpsertWithoutProjectMembersInput = {
    update: XOR<DT_USERUpdateWithoutProjectMembersInput, DT_USERUncheckedUpdateWithoutProjectMembersInput>
    create: XOR<DT_USERCreateWithoutProjectMembersInput, DT_USERUncheckedCreateWithoutProjectMembersInput>
    where?: DT_USERWhereInput
  }

  export type DT_USERUpdateToOneWithWhereWithoutProjectMembersInput = {
    where?: DT_USERWhereInput
    data: XOR<DT_USERUpdateWithoutProjectMembersInput, DT_USERUncheckedUpdateWithoutProjectMembersInput>
  }

  export type DT_USERUpdateWithoutProjectMembersInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DT_USERUncheckedUpdateWithoutProjectMembersInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DT_PROJECTUpsertWithoutProjectMembersInput = {
    update: XOR<DT_PROJECTUpdateWithoutProjectMembersInput, DT_PROJECTUncheckedUpdateWithoutProjectMembersInput>
    create: XOR<DT_PROJECTCreateWithoutProjectMembersInput, DT_PROJECTUncheckedCreateWithoutProjectMembersInput>
    where?: DT_PROJECTWhereInput
  }

  export type DT_PROJECTUpdateToOneWithWhereWithoutProjectMembersInput = {
    where?: DT_PROJECTWhereInput
    data: XOR<DT_PROJECTUpdateWithoutProjectMembersInput, DT_PROJECTUncheckedUpdateWithoutProjectMembersInput>
  }

  export type DT_PROJECTUpdateWithoutProjectMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DT_PROJECTUncheckedUpdateWithoutProjectMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DT_INVITATIONUpsertWithoutMembersInput = {
    update: XOR<DT_INVITATIONUpdateWithoutMembersInput, DT_INVITATIONUncheckedUpdateWithoutMembersInput>
    create: XOR<DT_INVITATIONCreateWithoutMembersInput, DT_INVITATIONUncheckedCreateWithoutMembersInput>
    where?: DT_INVITATIONWhereInput
  }

  export type DT_INVITATIONUpdateToOneWithWhereWithoutMembersInput = {
    where?: DT_INVITATIONWhereInput
    data: XOR<DT_INVITATIONUpdateWithoutMembersInput, DT_INVITATIONUncheckedUpdateWithoutMembersInput>
  }

  export type DT_INVITATIONUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ID_PROJECT?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DT_INVITATIONUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ID_PROJECT?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DT_PROJECT_MEMBERCreateWithoutInvitationInput = {
    id?: string
    role_project?: string | null
    is_invitation?: boolean | null
    user?: DT_USERCreateNestedOneWithoutProjectMembersInput
    project?: DT_PROJECTCreateNestedOneWithoutProjectMembersInput
  }

  export type DT_PROJECT_MEMBERUncheckedCreateWithoutInvitationInput = {
    id?: string
    nik_user?: string | null
    role_project?: string | null
    is_invitation?: boolean | null
    projectId?: string | null
  }

  export type DT_PROJECT_MEMBERCreateOrConnectWithoutInvitationInput = {
    where: DT_PROJECT_MEMBERWhereUniqueInput
    create: XOR<DT_PROJECT_MEMBERCreateWithoutInvitationInput, DT_PROJECT_MEMBERUncheckedCreateWithoutInvitationInput>
  }

  export type DT_PROJECT_MEMBERCreateManyInvitationInputEnvelope = {
    data: DT_PROJECT_MEMBERCreateManyInvitationInput | DT_PROJECT_MEMBERCreateManyInvitationInput[]
    skipDuplicates?: boolean
  }

  export type DT_PROJECT_MEMBERUpsertWithWhereUniqueWithoutInvitationInput = {
    where: DT_PROJECT_MEMBERWhereUniqueInput
    update: XOR<DT_PROJECT_MEMBERUpdateWithoutInvitationInput, DT_PROJECT_MEMBERUncheckedUpdateWithoutInvitationInput>
    create: XOR<DT_PROJECT_MEMBERCreateWithoutInvitationInput, DT_PROJECT_MEMBERUncheckedCreateWithoutInvitationInput>
  }

  export type DT_PROJECT_MEMBERUpdateWithWhereUniqueWithoutInvitationInput = {
    where: DT_PROJECT_MEMBERWhereUniqueInput
    data: XOR<DT_PROJECT_MEMBERUpdateWithoutInvitationInput, DT_PROJECT_MEMBERUncheckedUpdateWithoutInvitationInput>
  }

  export type DT_PROJECT_MEMBERUpdateManyWithWhereWithoutInvitationInput = {
    where: DT_PROJECT_MEMBERScalarWhereInput
    data: XOR<DT_PROJECT_MEMBERUpdateManyMutationInput, DT_PROJECT_MEMBERUncheckedUpdateManyWithoutInvitationInput>
  }

  export type DT_PROJECT_MEMBERCreateManyUserInput = {
    id?: string
    role_project?: string | null
    is_invitation?: boolean | null
    ID_INVITATION?: string | null
    projectId?: string | null
  }

  export type DT_PROJECT_MEMBERUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    project?: DT_PROJECTUpdateOneWithoutProjectMembersNestedInput
    invitation?: DT_INVITATIONUpdateOneWithoutMembersNestedInput
  }

  export type DT_PROJECT_MEMBERUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_INVITATION?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DT_PROJECT_MEMBERUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_INVITATION?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DT_PROJECT_MEMBERCreateManyProjectInput = {
    id?: string
    nik_user?: string | null
    role_project?: string | null
    is_invitation?: boolean | null
    ID_INVITATION?: string | null
  }

  export type DT_PROJECT_MEMBERUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: DT_USERUpdateOneWithoutProjectMembersNestedInput
    invitation?: DT_INVITATIONUpdateOneWithoutMembersNestedInput
  }

  export type DT_PROJECT_MEMBERUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik_user?: NullableStringFieldUpdateOperationsInput | string | null
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_INVITATION?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DT_PROJECT_MEMBERUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik_user?: NullableStringFieldUpdateOperationsInput | string | null
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_INVITATION?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DT_PROJECT_MEMBERCreateManyInvitationInput = {
    id?: string
    nik_user?: string | null
    role_project?: string | null
    is_invitation?: boolean | null
    projectId?: string | null
  }

  export type DT_PROJECT_MEMBERUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: DT_USERUpdateOneWithoutProjectMembersNestedInput
    project?: DT_PROJECTUpdateOneWithoutProjectMembersNestedInput
  }

  export type DT_PROJECT_MEMBERUncheckedUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik_user?: NullableStringFieldUpdateOperationsInput | string | null
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DT_PROJECT_MEMBERUncheckedUpdateManyWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik_user?: NullableStringFieldUpdateOperationsInput | string | null
    role_project?: NullableStringFieldUpdateOperationsInput | string | null
    is_invitation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
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