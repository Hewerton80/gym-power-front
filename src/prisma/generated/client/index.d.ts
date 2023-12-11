
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Muscle
 * 
 */
export type Muscle = $Result.DefaultSelection<Prisma.$MusclePayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model TrainingPlan
 * 
 */
export type TrainingPlan = $Result.DefaultSelection<Prisma.$TrainingPlanPayload>
/**
 * Model Training
 * 
 */
export type Training = $Result.DefaultSelection<Prisma.$TrainingPayload>
/**
 * Model TrainingExercise
 * 
 */
export type TrainingExercise = $Result.DefaultSelection<Prisma.$TrainingExercisePayload>
/**
 * Model StudentExercise
 * 
 */
export type StudentExercise = $Result.DefaultSelection<Prisma.$StudentExercisePayload>
/**
 * Model TrainingHistory
 * 
 */
export type TrainingHistory = $Result.DefaultSelection<Prisma.$TrainingHistoryPayload>
/**
 * Model TrainingExerciseHistory
 * 
 */
export type TrainingExerciseHistory = $Result.DefaultSelection<Prisma.$TrainingExerciseHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  M: 'M',
  F: 'F',
  O: 'O'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const ExerciseStatus: {
  READY_TO_START: 'READY_TO_START',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
};

export type ExerciseStatus = (typeof ExerciseStatus)[keyof typeof ExerciseStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type ExerciseStatus = $Enums.ExerciseStatus

export const ExerciseStatus: typeof $Enums.ExerciseStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.muscle`: Exposes CRUD operations for the **Muscle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Muscles
    * const muscles = await prisma.muscle.findMany()
    * ```
    */
  get muscle(): Prisma.MuscleDelegate<ExtArgs>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs>;

  /**
   * `prisma.trainingPlan`: Exposes CRUD operations for the **TrainingPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingPlans
    * const trainingPlans = await prisma.trainingPlan.findMany()
    * ```
    */
  get trainingPlan(): Prisma.TrainingPlanDelegate<ExtArgs>;

  /**
   * `prisma.training`: Exposes CRUD operations for the **Training** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trainings
    * const trainings = await prisma.training.findMany()
    * ```
    */
  get training(): Prisma.TrainingDelegate<ExtArgs>;

  /**
   * `prisma.trainingExercise`: Exposes CRUD operations for the **TrainingExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingExercises
    * const trainingExercises = await prisma.trainingExercise.findMany()
    * ```
    */
  get trainingExercise(): Prisma.TrainingExerciseDelegate<ExtArgs>;

  /**
   * `prisma.studentExercise`: Exposes CRUD operations for the **StudentExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentExercises
    * const studentExercises = await prisma.studentExercise.findMany()
    * ```
    */
  get studentExercise(): Prisma.StudentExerciseDelegate<ExtArgs>;

  /**
   * `prisma.trainingHistory`: Exposes CRUD operations for the **TrainingHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingHistories
    * const trainingHistories = await prisma.trainingHistory.findMany()
    * ```
    */
  get trainingHistory(): Prisma.TrainingHistoryDelegate<ExtArgs>;

  /**
   * `prisma.trainingExerciseHistory`: Exposes CRUD operations for the **TrainingExerciseHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingExerciseHistories
    * const trainingExerciseHistories = await prisma.trainingExerciseHistory.findMany()
    * ```
    */
  get trainingExerciseHistory(): Prisma.TrainingExerciseHistoryDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Muscle: 'Muscle',
    Exercise: 'Exercise',
    TrainingPlan: 'TrainingPlan',
    Training: 'Training',
    TrainingExercise: 'TrainingExercise',
    StudentExercise: 'StudentExercise',
    TrainingHistory: 'TrainingHistory',
    TrainingExerciseHistory: 'TrainingExerciseHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'muscle' | 'exercise' | 'trainingPlan' | 'training' | 'trainingExercise' | 'studentExercise' | 'trainingHistory' | 'trainingExerciseHistory'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Muscle: {
        payload: Prisma.$MusclePayload<ExtArgs>
        fields: Prisma.MuscleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MuscleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MuscleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusclePayload>
          }
          findFirst: {
            args: Prisma.MuscleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MuscleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusclePayload>
          }
          findMany: {
            args: Prisma.MuscleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusclePayload>[]
          }
          create: {
            args: Prisma.MuscleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusclePayload>
          }
          createMany: {
            args: Prisma.MuscleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MuscleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusclePayload>
          }
          update: {
            args: Prisma.MuscleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusclePayload>
          }
          deleteMany: {
            args: Prisma.MuscleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MuscleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MuscleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MusclePayload>
          }
          aggregate: {
            args: Prisma.MuscleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMuscle>
          }
          groupBy: {
            args: Prisma.MuscleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MuscleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MuscleCountArgs<ExtArgs>,
            result: $Utils.Optional<MuscleCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>,
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      TrainingPlan: {
        payload: Prisma.$TrainingPlanPayload<ExtArgs>
        fields: Prisma.TrainingPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingPlanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingPlanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          findFirst: {
            args: Prisma.TrainingPlanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingPlanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          findMany: {
            args: Prisma.TrainingPlanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>[]
          }
          create: {
            args: Prisma.TrainingPlanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          createMany: {
            args: Prisma.TrainingPlanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrainingPlanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          update: {
            args: Prisma.TrainingPlanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          deleteMany: {
            args: Prisma.TrainingPlanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingPlanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrainingPlanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          aggregate: {
            args: Prisma.TrainingPlanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrainingPlan>
          }
          groupBy: {
            args: Prisma.TrainingPlanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrainingPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingPlanCountArgs<ExtArgs>,
            result: $Utils.Optional<TrainingPlanCountAggregateOutputType> | number
          }
        }
      }
      Training: {
        payload: Prisma.$TrainingPayload<ExtArgs>
        fields: Prisma.TrainingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          findFirst: {
            args: Prisma.TrainingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          findMany: {
            args: Prisma.TrainingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>[]
          }
          create: {
            args: Prisma.TrainingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          createMany: {
            args: Prisma.TrainingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrainingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          update: {
            args: Prisma.TrainingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          deleteMany: {
            args: Prisma.TrainingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrainingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          aggregate: {
            args: Prisma.TrainingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTraining>
          }
          groupBy: {
            args: Prisma.TrainingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrainingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingCountArgs<ExtArgs>,
            result: $Utils.Optional<TrainingCountAggregateOutputType> | number
          }
        }
      }
      TrainingExercise: {
        payload: Prisma.$TrainingExercisePayload<ExtArgs>
        fields: Prisma.TrainingExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingExerciseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingExerciseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExercisePayload>
          }
          findFirst: {
            args: Prisma.TrainingExerciseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingExerciseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExercisePayload>
          }
          findMany: {
            args: Prisma.TrainingExerciseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExercisePayload>[]
          }
          create: {
            args: Prisma.TrainingExerciseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExercisePayload>
          }
          createMany: {
            args: Prisma.TrainingExerciseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrainingExerciseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExercisePayload>
          }
          update: {
            args: Prisma.TrainingExerciseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExercisePayload>
          }
          deleteMany: {
            args: Prisma.TrainingExerciseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingExerciseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrainingExerciseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExercisePayload>
          }
          aggregate: {
            args: Prisma.TrainingExerciseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrainingExercise>
          }
          groupBy: {
            args: Prisma.TrainingExerciseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrainingExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingExerciseCountArgs<ExtArgs>,
            result: $Utils.Optional<TrainingExerciseCountAggregateOutputType> | number
          }
        }
      }
      StudentExercise: {
        payload: Prisma.$StudentExercisePayload<ExtArgs>
        fields: Prisma.StudentExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentExerciseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentExerciseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentExercisePayload>
          }
          findFirst: {
            args: Prisma.StudentExerciseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentExerciseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentExercisePayload>
          }
          findMany: {
            args: Prisma.StudentExerciseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentExercisePayload>[]
          }
          create: {
            args: Prisma.StudentExerciseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentExercisePayload>
          }
          createMany: {
            args: Prisma.StudentExerciseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StudentExerciseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentExercisePayload>
          }
          update: {
            args: Prisma.StudentExerciseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentExercisePayload>
          }
          deleteMany: {
            args: Prisma.StudentExerciseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StudentExerciseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StudentExerciseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentExercisePayload>
          }
          aggregate: {
            args: Prisma.StudentExerciseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudentExercise>
          }
          groupBy: {
            args: Prisma.StudentExerciseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentExerciseCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentExerciseCountAggregateOutputType> | number
          }
        }
      }
      TrainingHistory: {
        payload: Prisma.$TrainingHistoryPayload<ExtArgs>
        fields: Prisma.TrainingHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingHistoryPayload>
          }
          findFirst: {
            args: Prisma.TrainingHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingHistoryPayload>
          }
          findMany: {
            args: Prisma.TrainingHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingHistoryPayload>[]
          }
          create: {
            args: Prisma.TrainingHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingHistoryPayload>
          }
          createMany: {
            args: Prisma.TrainingHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrainingHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingHistoryPayload>
          }
          update: {
            args: Prisma.TrainingHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TrainingHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrainingHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingHistoryPayload>
          }
          aggregate: {
            args: Prisma.TrainingHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrainingHistory>
          }
          groupBy: {
            args: Prisma.TrainingHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrainingHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<TrainingHistoryCountAggregateOutputType> | number
          }
        }
      }
      TrainingExerciseHistory: {
        payload: Prisma.$TrainingExerciseHistoryPayload<ExtArgs>
        fields: Prisma.TrainingExerciseHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingExerciseHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExerciseHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingExerciseHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExerciseHistoryPayload>
          }
          findFirst: {
            args: Prisma.TrainingExerciseHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExerciseHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingExerciseHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExerciseHistoryPayload>
          }
          findMany: {
            args: Prisma.TrainingExerciseHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExerciseHistoryPayload>[]
          }
          create: {
            args: Prisma.TrainingExerciseHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExerciseHistoryPayload>
          }
          createMany: {
            args: Prisma.TrainingExerciseHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrainingExerciseHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExerciseHistoryPayload>
          }
          update: {
            args: Prisma.TrainingExerciseHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExerciseHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TrainingExerciseHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingExerciseHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrainingExerciseHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainingExerciseHistoryPayload>
          }
          aggregate: {
            args: Prisma.TrainingExerciseHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrainingExerciseHistory>
          }
          groupBy: {
            args: Prisma.TrainingExerciseHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrainingExerciseHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingExerciseHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<TrainingExerciseHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    trainingPlans: number
    studentExercises: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingPlans?: boolean | UserCountOutputTypeCountTrainingPlansArgs
    studentExercises?: boolean | UserCountOutputTypeCountStudentExercisesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrainingPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingPlanWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentExerciseWhereInput
  }



  /**
   * Count Type MuscleCountOutputType
   */

  export type MuscleCountOutputType = {
    exercises: number
  }

  export type MuscleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | MuscleCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes

  /**
   * MuscleCountOutputType without action
   */
  export type MuscleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleCountOutputType
     */
    select?: MuscleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MuscleCountOutputType without action
   */
  export type MuscleCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }



  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    studentExercises: number
    trainingExerciseHistory: number
    trainingExercises: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentExercises?: boolean | ExerciseCountOutputTypeCountStudentExercisesArgs
    trainingExerciseHistory?: boolean | ExerciseCountOutputTypeCountTrainingExerciseHistoryArgs
    trainingExercises?: boolean | ExerciseCountOutputTypeCountTrainingExercisesArgs
  }

  // Custom InputTypes

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountStudentExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentExerciseWhereInput
  }


  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountTrainingExerciseHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingExerciseHistoryWhereInput
  }


  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountTrainingExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingExerciseWhereInput
  }



  /**
   * Count Type TrainingPlanCountOutputType
   */

  export type TrainingPlanCountOutputType = {
    trainings: number
  }

  export type TrainingPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainings?: boolean | TrainingPlanCountOutputTypeCountTrainingsArgs
  }

  // Custom InputTypes

  /**
   * TrainingPlanCountOutputType without action
   */
  export type TrainingPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanCountOutputType
     */
    select?: TrainingPlanCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TrainingPlanCountOutputType without action
   */
  export type TrainingPlanCountOutputTypeCountTrainingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingWhereInput
  }



  /**
   * Count Type TrainingCountOutputType
   */

  export type TrainingCountOutputType = {
    trainingHistory: number
    trainingExercises: number
  }

  export type TrainingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingHistory?: boolean | TrainingCountOutputTypeCountTrainingHistoryArgs
    trainingExercises?: boolean | TrainingCountOutputTypeCountTrainingExercisesArgs
  }

  // Custom InputTypes

  /**
   * TrainingCountOutputType without action
   */
  export type TrainingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingCountOutputType
     */
    select?: TrainingCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TrainingCountOutputType without action
   */
  export type TrainingCountOutputTypeCountTrainingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingHistoryWhereInput
  }


  /**
   * TrainingCountOutputType without action
   */
  export type TrainingCountOutputTypeCountTrainingExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingExerciseWhereInput
  }



  /**
   * Count Type TrainingExerciseCountOutputType
   */

  export type TrainingExerciseCountOutputType = {
    trainingExerciseHistory: number
  }

  export type TrainingExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingExerciseHistory?: boolean | TrainingExerciseCountOutputTypeCountTrainingExerciseHistoryArgs
  }

  // Custom InputTypes

  /**
   * TrainingExerciseCountOutputType without action
   */
  export type TrainingExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseCountOutputType
     */
    select?: TrainingExerciseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TrainingExerciseCountOutputType without action
   */
  export type TrainingExerciseCountOutputTypeCountTrainingExerciseHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingExerciseHistoryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    heightInMt: number | null
    weightInKg: number | null
  }

  export type UserSumAggregateOutputType = {
    heightInMt: number | null
    weightInKg: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    isActive: boolean | null
    isAdmin: boolean | null
    isTeacher: boolean | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    heightInMt: number | null
    weightInKg: number | null
    avatarBgColor: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    isActive: boolean | null
    isAdmin: boolean | null
    isTeacher: boolean | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    heightInMt: number | null
    weightInKg: number | null
    avatarBgColor: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    isActive: number
    isAdmin: number
    isTeacher: number
    dateOfBirth: number
    gender: number
    heightInMt: number
    weightInKg: number
    avatarBgColor: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    heightInMt?: true
    weightInKg?: true
  }

  export type UserSumAggregateInputType = {
    heightInMt?: true
    weightInKg?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    isActive?: true
    isAdmin?: true
    isTeacher?: true
    dateOfBirth?: true
    gender?: true
    heightInMt?: true
    weightInKg?: true
    avatarBgColor?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    isActive?: true
    isAdmin?: true
    isTeacher?: true
    dateOfBirth?: true
    gender?: true
    heightInMt?: true
    weightInKg?: true
    avatarBgColor?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    isActive?: true
    isAdmin?: true
    isTeacher?: true
    dateOfBirth?: true
    gender?: true
    heightInMt?: true
    weightInKg?: true
    avatarBgColor?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string | null
    isActive: boolean
    isAdmin: boolean
    isTeacher: boolean
    dateOfBirth: Date
    gender: $Enums.Gender
    heightInMt: number | null
    weightInKg: number | null
    avatarBgColor: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    isActive?: boolean
    isAdmin?: boolean
    isTeacher?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    heightInMt?: boolean
    weightInKg?: boolean
    avatarBgColor?: boolean
    createdAt?: boolean
    trainingPlans?: boolean | User$trainingPlansArgs<ExtArgs>
    studentExercises?: boolean | User$studentExercisesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    isActive?: boolean
    isAdmin?: boolean
    isTeacher?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    heightInMt?: boolean
    weightInKg?: boolean
    avatarBgColor?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingPlans?: boolean | User$trainingPlansArgs<ExtArgs>
    studentExercises?: boolean | User$studentExercisesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trainingPlans: Prisma.$TrainingPlanPayload<ExtArgs>[]
      studentExercises: Prisma.$StudentExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string | null
      isActive: boolean
      isAdmin: boolean
      isTeacher: boolean
      dateOfBirth: Date
      gender: $Enums.Gender
      heightInMt: number | null
      weightInKg: number | null
      avatarBgColor: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    trainingPlans<T extends User$trainingPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$trainingPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, 'findMany'> | Null>;

    studentExercises<T extends User$studentExercisesArgs<ExtArgs> = {}>(args?: Subset<T, User$studentExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentExercisePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly isTeacher: FieldRef<"User", 'Boolean'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly heightInMt: FieldRef<"User", 'Float'>
    readonly weightInKg: FieldRef<"User", 'Float'>
    readonly avatarBgColor: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.trainingPlans
   */
  export type User$trainingPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    where?: TrainingPlanWhereInput
    orderBy?: TrainingPlanOrderByWithRelationInput | TrainingPlanOrderByWithRelationInput[]
    cursor?: TrainingPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingPlanScalarFieldEnum | TrainingPlanScalarFieldEnum[]
  }


  /**
   * User.studentExercises
   */
  export type User$studentExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
    where?: StudentExerciseWhereInput
    orderBy?: StudentExerciseOrderByWithRelationInput | StudentExerciseOrderByWithRelationInput[]
    cursor?: StudentExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentExerciseScalarFieldEnum | StudentExerciseScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Muscle
   */

  export type AggregateMuscle = {
    _count: MuscleCountAggregateOutputType | null
    _min: MuscleMinAggregateOutputType | null
    _max: MuscleMaxAggregateOutputType | null
  }

  export type MuscleMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type MuscleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type MuscleCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type MuscleMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
  }

  export type MuscleMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
  }

  export type MuscleCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type MuscleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Muscle to aggregate.
     */
    where?: MuscleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Muscles to fetch.
     */
    orderBy?: MuscleOrderByWithRelationInput | MuscleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MuscleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Muscles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Muscles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Muscles
    **/
    _count?: true | MuscleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MuscleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MuscleMaxAggregateInputType
  }

  export type GetMuscleAggregateType<T extends MuscleAggregateArgs> = {
        [P in keyof T & keyof AggregateMuscle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMuscle[P]>
      : GetScalarType<T[P], AggregateMuscle[P]>
  }




  export type MuscleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuscleWhereInput
    orderBy?: MuscleOrderByWithAggregationInput | MuscleOrderByWithAggregationInput[]
    by: MuscleScalarFieldEnum[] | MuscleScalarFieldEnum
    having?: MuscleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MuscleCountAggregateInputType | true
    _min?: MuscleMinAggregateInputType
    _max?: MuscleMaxAggregateInputType
  }

  export type MuscleGroupByOutputType = {
    id: string
    name: string
    isActive: boolean | null
    createdAt: Date
    _count: MuscleCountAggregateOutputType | null
    _min: MuscleMinAggregateOutputType | null
    _max: MuscleMaxAggregateOutputType | null
  }

  type GetMuscleGroupByPayload<T extends MuscleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MuscleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MuscleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MuscleGroupByOutputType[P]>
            : GetScalarType<T[P], MuscleGroupByOutputType[P]>
        }
      >
    >


  export type MuscleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    exercises?: boolean | Muscle$exercisesArgs<ExtArgs>
    _count?: boolean | MuscleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muscle"]>

  export type MuscleSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type MuscleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | Muscle$exercisesArgs<ExtArgs>
    _count?: boolean | MuscleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MusclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Muscle"
    objects: {
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean | null
      createdAt: Date
    }, ExtArgs["result"]["muscle"]>
    composites: {}
  }


  type MuscleGetPayload<S extends boolean | null | undefined | MuscleDefaultArgs> = $Result.GetResult<Prisma.$MusclePayload, S>

  type MuscleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MuscleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MuscleCountAggregateInputType | true
    }

  export interface MuscleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Muscle'], meta: { name: 'Muscle' } }
    /**
     * Find zero or one Muscle that matches the filter.
     * @param {MuscleFindUniqueArgs} args - Arguments to find a Muscle
     * @example
     * // Get one Muscle
     * const muscle = await prisma.muscle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MuscleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MuscleFindUniqueArgs<ExtArgs>>
    ): Prisma__MuscleClient<$Result.GetResult<Prisma.$MusclePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Muscle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MuscleFindUniqueOrThrowArgs} args - Arguments to find a Muscle
     * @example
     * // Get one Muscle
     * const muscle = await prisma.muscle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MuscleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MuscleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MuscleClient<$Result.GetResult<Prisma.$MusclePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Muscle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleFindFirstArgs} args - Arguments to find a Muscle
     * @example
     * // Get one Muscle
     * const muscle = await prisma.muscle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MuscleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MuscleFindFirstArgs<ExtArgs>>
    ): Prisma__MuscleClient<$Result.GetResult<Prisma.$MusclePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Muscle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleFindFirstOrThrowArgs} args - Arguments to find a Muscle
     * @example
     * // Get one Muscle
     * const muscle = await prisma.muscle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MuscleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MuscleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MuscleClient<$Result.GetResult<Prisma.$MusclePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Muscles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Muscles
     * const muscles = await prisma.muscle.findMany()
     * 
     * // Get first 10 Muscles
     * const muscles = await prisma.muscle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const muscleWithIdOnly = await prisma.muscle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MuscleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MuscleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusclePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Muscle.
     * @param {MuscleCreateArgs} args - Arguments to create a Muscle.
     * @example
     * // Create one Muscle
     * const Muscle = await prisma.muscle.create({
     *   data: {
     *     // ... data to create a Muscle
     *   }
     * })
     * 
    **/
    create<T extends MuscleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MuscleCreateArgs<ExtArgs>>
    ): Prisma__MuscleClient<$Result.GetResult<Prisma.$MusclePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Muscles.
     *     @param {MuscleCreateManyArgs} args - Arguments to create many Muscles.
     *     @example
     *     // Create many Muscles
     *     const muscle = await prisma.muscle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MuscleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MuscleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Muscle.
     * @param {MuscleDeleteArgs} args - Arguments to delete one Muscle.
     * @example
     * // Delete one Muscle
     * const Muscle = await prisma.muscle.delete({
     *   where: {
     *     // ... filter to delete one Muscle
     *   }
     * })
     * 
    **/
    delete<T extends MuscleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MuscleDeleteArgs<ExtArgs>>
    ): Prisma__MuscleClient<$Result.GetResult<Prisma.$MusclePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Muscle.
     * @param {MuscleUpdateArgs} args - Arguments to update one Muscle.
     * @example
     * // Update one Muscle
     * const muscle = await prisma.muscle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MuscleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MuscleUpdateArgs<ExtArgs>>
    ): Prisma__MuscleClient<$Result.GetResult<Prisma.$MusclePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Muscles.
     * @param {MuscleDeleteManyArgs} args - Arguments to filter Muscles to delete.
     * @example
     * // Delete a few Muscles
     * const { count } = await prisma.muscle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MuscleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MuscleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Muscles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Muscles
     * const muscle = await prisma.muscle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MuscleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MuscleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Muscle.
     * @param {MuscleUpsertArgs} args - Arguments to update or create a Muscle.
     * @example
     * // Update or create a Muscle
     * const muscle = await prisma.muscle.upsert({
     *   create: {
     *     // ... data to create a Muscle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Muscle we want to update
     *   }
     * })
    **/
    upsert<T extends MuscleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MuscleUpsertArgs<ExtArgs>>
    ): Prisma__MuscleClient<$Result.GetResult<Prisma.$MusclePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Muscles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleCountArgs} args - Arguments to filter Muscles to count.
     * @example
     * // Count the number of Muscles
     * const count = await prisma.muscle.count({
     *   where: {
     *     // ... the filter for the Muscles we want to count
     *   }
     * })
    **/
    count<T extends MuscleCountArgs>(
      args?: Subset<T, MuscleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MuscleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Muscle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MuscleAggregateArgs>(args: Subset<T, MuscleAggregateArgs>): Prisma.PrismaPromise<GetMuscleAggregateType<T>>

    /**
     * Group by Muscle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupByArgs} args - Group by arguments.
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
      T extends MuscleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MuscleGroupByArgs['orderBy'] }
        : { orderBy?: MuscleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MuscleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMuscleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Muscle model
   */
  readonly fields: MuscleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Muscle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MuscleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    exercises<T extends Muscle$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, Muscle$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Muscle model
   */ 
  interface MuscleFieldRefs {
    readonly id: FieldRef<"Muscle", 'String'>
    readonly name: FieldRef<"Muscle", 'String'>
    readonly isActive: FieldRef<"Muscle", 'Boolean'>
    readonly createdAt: FieldRef<"Muscle", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Muscle findUnique
   */
  export type MuscleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muscle
     */
    select?: MuscleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MuscleInclude<ExtArgs> | null
    /**
     * Filter, which Muscle to fetch.
     */
    where: MuscleWhereUniqueInput
  }


  /**
   * Muscle findUniqueOrThrow
   */
  export type MuscleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muscle
     */
    select?: MuscleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MuscleInclude<ExtArgs> | null
    /**
     * Filter, which Muscle to fetch.
     */
    where: MuscleWhereUniqueInput
  }


  /**
   * Muscle findFirst
   */
  export type MuscleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muscle
     */
    select?: MuscleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MuscleInclude<ExtArgs> | null
    /**
     * Filter, which Muscle to fetch.
     */
    where?: MuscleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Muscles to fetch.
     */
    orderBy?: MuscleOrderByWithRelationInput | MuscleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Muscles.
     */
    cursor?: MuscleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Muscles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Muscles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Muscles.
     */
    distinct?: MuscleScalarFieldEnum | MuscleScalarFieldEnum[]
  }


  /**
   * Muscle findFirstOrThrow
   */
  export type MuscleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muscle
     */
    select?: MuscleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MuscleInclude<ExtArgs> | null
    /**
     * Filter, which Muscle to fetch.
     */
    where?: MuscleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Muscles to fetch.
     */
    orderBy?: MuscleOrderByWithRelationInput | MuscleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Muscles.
     */
    cursor?: MuscleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Muscles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Muscles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Muscles.
     */
    distinct?: MuscleScalarFieldEnum | MuscleScalarFieldEnum[]
  }


  /**
   * Muscle findMany
   */
  export type MuscleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muscle
     */
    select?: MuscleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MuscleInclude<ExtArgs> | null
    /**
     * Filter, which Muscles to fetch.
     */
    where?: MuscleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Muscles to fetch.
     */
    orderBy?: MuscleOrderByWithRelationInput | MuscleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Muscles.
     */
    cursor?: MuscleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Muscles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Muscles.
     */
    skip?: number
    distinct?: MuscleScalarFieldEnum | MuscleScalarFieldEnum[]
  }


  /**
   * Muscle create
   */
  export type MuscleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muscle
     */
    select?: MuscleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MuscleInclude<ExtArgs> | null
    /**
     * The data needed to create a Muscle.
     */
    data: XOR<MuscleCreateInput, MuscleUncheckedCreateInput>
  }


  /**
   * Muscle createMany
   */
  export type MuscleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Muscles.
     */
    data: MuscleCreateManyInput | MuscleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Muscle update
   */
  export type MuscleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muscle
     */
    select?: MuscleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MuscleInclude<ExtArgs> | null
    /**
     * The data needed to update a Muscle.
     */
    data: XOR<MuscleUpdateInput, MuscleUncheckedUpdateInput>
    /**
     * Choose, which Muscle to update.
     */
    where: MuscleWhereUniqueInput
  }


  /**
   * Muscle updateMany
   */
  export type MuscleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Muscles.
     */
    data: XOR<MuscleUpdateManyMutationInput, MuscleUncheckedUpdateManyInput>
    /**
     * Filter which Muscles to update
     */
    where?: MuscleWhereInput
  }


  /**
   * Muscle upsert
   */
  export type MuscleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muscle
     */
    select?: MuscleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MuscleInclude<ExtArgs> | null
    /**
     * The filter to search for the Muscle to update in case it exists.
     */
    where: MuscleWhereUniqueInput
    /**
     * In case the Muscle found by the `where` argument doesn't exist, create a new Muscle with this data.
     */
    create: XOR<MuscleCreateInput, MuscleUncheckedCreateInput>
    /**
     * In case the Muscle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MuscleUpdateInput, MuscleUncheckedUpdateInput>
  }


  /**
   * Muscle delete
   */
  export type MuscleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muscle
     */
    select?: MuscleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MuscleInclude<ExtArgs> | null
    /**
     * Filter which Muscle to delete.
     */
    where: MuscleWhereUniqueInput
  }


  /**
   * Muscle deleteMany
   */
  export type MuscleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Muscles to delete
     */
    where?: MuscleWhereInput
  }


  /**
   * Muscle.exercises
   */
  export type Muscle$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }


  /**
   * Muscle without action
   */
  export type MuscleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muscle
     */
    select?: MuscleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MuscleInclude<ExtArgs> | null
  }



  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    muscleId: string | null
    description: string | null
    image: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    muscleId: string | null
    description: string | null
    image: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    muscleId: number
    description: number
    image: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    muscleId?: true
    description?: true
    image?: true
    isActive?: true
    createdAt?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    muscleId?: true
    description?: true
    image?: true
    isActive?: true
    createdAt?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    muscleId?: true
    description?: true
    image?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    name: string
    muscleId: string
    description: string | null
    image: string | null
    isActive: boolean
    createdAt: Date
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleId?: boolean
    description?: boolean
    image?: boolean
    isActive?: boolean
    createdAt?: boolean
    muscle?: boolean | MuscleDefaultArgs<ExtArgs>
    studentExercises?: boolean | Exercise$studentExercisesArgs<ExtArgs>
    trainingExerciseHistory?: boolean | Exercise$trainingExerciseHistoryArgs<ExtArgs>
    trainingExercises?: boolean | Exercise$trainingExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    muscleId?: boolean
    description?: boolean
    image?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muscle?: boolean | MuscleDefaultArgs<ExtArgs>
    studentExercises?: boolean | Exercise$studentExercisesArgs<ExtArgs>
    trainingExerciseHistory?: boolean | Exercise$trainingExerciseHistoryArgs<ExtArgs>
    trainingExercises?: boolean | Exercise$trainingExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      muscle: Prisma.$MusclePayload<ExtArgs>
      studentExercises: Prisma.$StudentExercisePayload<ExtArgs>[]
      trainingExerciseHistory: Prisma.$TrainingExerciseHistoryPayload<ExtArgs>[]
      trainingExercises: Prisma.$TrainingExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      muscleId: string
      description: string | null
      image: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }


  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExerciseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>
    ): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Exercise that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExerciseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>
    ): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExerciseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
    **/
    create<T extends ExerciseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>
    ): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Exercises.
     *     @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     *     @example
     *     // Create many Exercises
     *     const exercise = await prisma.exercise.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExerciseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
    **/
    delete<T extends ExerciseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>
    ): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExerciseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>
    ): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExerciseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExerciseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
    **/
    upsert<T extends ExerciseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>
    ): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    muscle<T extends MuscleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MuscleDefaultArgs<ExtArgs>>): Prisma__MuscleClient<$Result.GetResult<Prisma.$MusclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    studentExercises<T extends Exercise$studentExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$studentExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentExercisePayload<ExtArgs>, T, 'findMany'> | Null>;

    trainingExerciseHistory<T extends Exercise$trainingExerciseHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$trainingExerciseHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingExerciseHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    trainingExercises<T extends Exercise$trainingExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$trainingExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Exercise model
   */ 
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly muscleId: FieldRef<"Exercise", 'String'>
    readonly description: FieldRef<"Exercise", 'String'>
    readonly image: FieldRef<"Exercise", 'String'>
    readonly isActive: FieldRef<"Exercise", 'Boolean'>
    readonly createdAt: FieldRef<"Exercise", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }


  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }


  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }


  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }


  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }


  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }


  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }


  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
  }


  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }


  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }


  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
  }


  /**
   * Exercise.studentExercises
   */
  export type Exercise$studentExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
    where?: StudentExerciseWhereInput
    orderBy?: StudentExerciseOrderByWithRelationInput | StudentExerciseOrderByWithRelationInput[]
    cursor?: StudentExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentExerciseScalarFieldEnum | StudentExerciseScalarFieldEnum[]
  }


  /**
   * Exercise.trainingExerciseHistory
   */
  export type Exercise$trainingExerciseHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
    where?: TrainingExerciseHistoryWhereInput
    orderBy?: TrainingExerciseHistoryOrderByWithRelationInput | TrainingExerciseHistoryOrderByWithRelationInput[]
    cursor?: TrainingExerciseHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingExerciseHistoryScalarFieldEnum | TrainingExerciseHistoryScalarFieldEnum[]
  }


  /**
   * Exercise.trainingExercises
   */
  export type Exercise$trainingExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
    where?: TrainingExerciseWhereInput
    orderBy?: TrainingExerciseOrderByWithRelationInput | TrainingExerciseOrderByWithRelationInput[]
    cursor?: TrainingExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingExerciseScalarFieldEnum | TrainingExerciseScalarFieldEnum[]
  }


  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
  }



  /**
   * Model TrainingPlan
   */

  export type AggregateTrainingPlan = {
    _count: TrainingPlanCountAggregateOutputType | null
    _min: TrainingPlanMinAggregateOutputType | null
    _max: TrainingPlanMaxAggregateOutputType | null
  }

  export type TrainingPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    objective: string | null
    teacherId: string | null
    teacherName: string | null
    teacherEmail: string | null
    studentId: string | null
    createdAt: Date | null
  }

  export type TrainingPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    objective: string | null
    teacherId: string | null
    teacherName: string | null
    teacherEmail: string | null
    studentId: string | null
    createdAt: Date | null
  }

  export type TrainingPlanCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    objective: number
    teacherId: number
    teacherName: number
    teacherEmail: number
    studentId: number
    createdAt: number
    _all: number
  }


  export type TrainingPlanMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    objective?: true
    teacherId?: true
    teacherName?: true
    teacherEmail?: true
    studentId?: true
    createdAt?: true
  }

  export type TrainingPlanMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    objective?: true
    teacherId?: true
    teacherName?: true
    teacherEmail?: true
    studentId?: true
    createdAt?: true
  }

  export type TrainingPlanCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    objective?: true
    teacherId?: true
    teacherName?: true
    teacherEmail?: true
    studentId?: true
    createdAt?: true
    _all?: true
  }

  export type TrainingPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingPlan to aggregate.
     */
    where?: TrainingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlans to fetch.
     */
    orderBy?: TrainingPlanOrderByWithRelationInput | TrainingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingPlans
    **/
    _count?: true | TrainingPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingPlanMaxAggregateInputType
  }

  export type GetTrainingPlanAggregateType<T extends TrainingPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingPlan[P]>
      : GetScalarType<T[P], AggregateTrainingPlan[P]>
  }




  export type TrainingPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingPlanWhereInput
    orderBy?: TrainingPlanOrderByWithAggregationInput | TrainingPlanOrderByWithAggregationInput[]
    by: TrainingPlanScalarFieldEnum[] | TrainingPlanScalarFieldEnum
    having?: TrainingPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingPlanCountAggregateInputType | true
    _min?: TrainingPlanMinAggregateInputType
    _max?: TrainingPlanMaxAggregateInputType
  }

  export type TrainingPlanGroupByOutputType = {
    id: string
    name: string
    isActive: boolean | null
    objective: string | null
    teacherId: string
    teacherName: string
    teacherEmail: string
    studentId: string
    createdAt: Date
    _count: TrainingPlanCountAggregateOutputType | null
    _min: TrainingPlanMinAggregateOutputType | null
    _max: TrainingPlanMaxAggregateOutputType | null
  }

  type GetTrainingPlanGroupByPayload<T extends TrainingPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingPlanGroupByOutputType[P]>
        }
      >
    >


  export type TrainingPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    objective?: boolean
    teacherId?: boolean
    teacherName?: boolean
    teacherEmail?: boolean
    studentId?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    trainings?: boolean | TrainingPlan$trainingsArgs<ExtArgs>
    _count?: boolean | TrainingPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingPlan"]>

  export type TrainingPlanSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    objective?: boolean
    teacherId?: boolean
    teacherName?: boolean
    teacherEmail?: boolean
    studentId?: boolean
    createdAt?: boolean
  }

  export type TrainingPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    trainings?: boolean | TrainingPlan$trainingsArgs<ExtArgs>
    _count?: boolean | TrainingPlanCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TrainingPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingPlan"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      trainings: Prisma.$TrainingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean | null
      objective: string | null
      teacherId: string
      teacherName: string
      teacherEmail: string
      studentId: string
      createdAt: Date
    }, ExtArgs["result"]["trainingPlan"]>
    composites: {}
  }


  type TrainingPlanGetPayload<S extends boolean | null | undefined | TrainingPlanDefaultArgs> = $Result.GetResult<Prisma.$TrainingPlanPayload, S>

  type TrainingPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrainingPlanFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TrainingPlanCountAggregateInputType | true
    }

  export interface TrainingPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingPlan'], meta: { name: 'TrainingPlan' } }
    /**
     * Find zero or one TrainingPlan that matches the filter.
     * @param {TrainingPlanFindUniqueArgs} args - Arguments to find a TrainingPlan
     * @example
     * // Get one TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrainingPlanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingPlanFindUniqueArgs<ExtArgs>>
    ): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TrainingPlan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrainingPlanFindUniqueOrThrowArgs} args - Arguments to find a TrainingPlan
     * @example
     * // Get one TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrainingPlanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingPlanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TrainingPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanFindFirstArgs} args - Arguments to find a TrainingPlan
     * @example
     * // Get one TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrainingPlanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingPlanFindFirstArgs<ExtArgs>>
    ): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TrainingPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanFindFirstOrThrowArgs} args - Arguments to find a TrainingPlan
     * @example
     * // Get one TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrainingPlanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingPlanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TrainingPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingPlans
     * const trainingPlans = await prisma.trainingPlan.findMany()
     * 
     * // Get first 10 TrainingPlans
     * const trainingPlans = await prisma.trainingPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingPlanWithIdOnly = await prisma.trainingPlan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrainingPlanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingPlanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TrainingPlan.
     * @param {TrainingPlanCreateArgs} args - Arguments to create a TrainingPlan.
     * @example
     * // Create one TrainingPlan
     * const TrainingPlan = await prisma.trainingPlan.create({
     *   data: {
     *     // ... data to create a TrainingPlan
     *   }
     * })
     * 
    **/
    create<T extends TrainingPlanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingPlanCreateArgs<ExtArgs>>
    ): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TrainingPlans.
     *     @param {TrainingPlanCreateManyArgs} args - Arguments to create many TrainingPlans.
     *     @example
     *     // Create many TrainingPlans
     *     const trainingPlan = await prisma.trainingPlan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrainingPlanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingPlanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrainingPlan.
     * @param {TrainingPlanDeleteArgs} args - Arguments to delete one TrainingPlan.
     * @example
     * // Delete one TrainingPlan
     * const TrainingPlan = await prisma.trainingPlan.delete({
     *   where: {
     *     // ... filter to delete one TrainingPlan
     *   }
     * })
     * 
    **/
    delete<T extends TrainingPlanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingPlanDeleteArgs<ExtArgs>>
    ): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TrainingPlan.
     * @param {TrainingPlanUpdateArgs} args - Arguments to update one TrainingPlan.
     * @example
     * // Update one TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrainingPlanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingPlanUpdateArgs<ExtArgs>>
    ): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TrainingPlans.
     * @param {TrainingPlanDeleteManyArgs} args - Arguments to filter TrainingPlans to delete.
     * @example
     * // Delete a few TrainingPlans
     * const { count } = await prisma.trainingPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrainingPlanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingPlanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingPlans
     * const trainingPlan = await prisma.trainingPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrainingPlanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingPlanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrainingPlan.
     * @param {TrainingPlanUpsertArgs} args - Arguments to update or create a TrainingPlan.
     * @example
     * // Update or create a TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.upsert({
     *   create: {
     *     // ... data to create a TrainingPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingPlan we want to update
     *   }
     * })
    **/
    upsert<T extends TrainingPlanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingPlanUpsertArgs<ExtArgs>>
    ): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TrainingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanCountArgs} args - Arguments to filter TrainingPlans to count.
     * @example
     * // Count the number of TrainingPlans
     * const count = await prisma.trainingPlan.count({
     *   where: {
     *     // ... the filter for the TrainingPlans we want to count
     *   }
     * })
    **/
    count<T extends TrainingPlanCountArgs>(
      args?: Subset<T, TrainingPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingPlanAggregateArgs>(args: Subset<T, TrainingPlanAggregateArgs>): Prisma.PrismaPromise<GetTrainingPlanAggregateType<T>>

    /**
     * Group by TrainingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanGroupByArgs} args - Group by arguments.
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
      T extends TrainingPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingPlanGroupByArgs['orderBy'] }
        : { orderBy?: TrainingPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainingPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingPlan model
   */
  readonly fields: TrainingPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    trainings<T extends TrainingPlan$trainingsArgs<ExtArgs> = {}>(args?: Subset<T, TrainingPlan$trainingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TrainingPlan model
   */ 
  interface TrainingPlanFieldRefs {
    readonly id: FieldRef<"TrainingPlan", 'String'>
    readonly name: FieldRef<"TrainingPlan", 'String'>
    readonly isActive: FieldRef<"TrainingPlan", 'Boolean'>
    readonly objective: FieldRef<"TrainingPlan", 'String'>
    readonly teacherId: FieldRef<"TrainingPlan", 'String'>
    readonly teacherName: FieldRef<"TrainingPlan", 'String'>
    readonly teacherEmail: FieldRef<"TrainingPlan", 'String'>
    readonly studentId: FieldRef<"TrainingPlan", 'String'>
    readonly createdAt: FieldRef<"TrainingPlan", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TrainingPlan findUnique
   */
  export type TrainingPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlan to fetch.
     */
    where: TrainingPlanWhereUniqueInput
  }


  /**
   * TrainingPlan findUniqueOrThrow
   */
  export type TrainingPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlan to fetch.
     */
    where: TrainingPlanWhereUniqueInput
  }


  /**
   * TrainingPlan findFirst
   */
  export type TrainingPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlan to fetch.
     */
    where?: TrainingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlans to fetch.
     */
    orderBy?: TrainingPlanOrderByWithRelationInput | TrainingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingPlans.
     */
    cursor?: TrainingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingPlans.
     */
    distinct?: TrainingPlanScalarFieldEnum | TrainingPlanScalarFieldEnum[]
  }


  /**
   * TrainingPlan findFirstOrThrow
   */
  export type TrainingPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlan to fetch.
     */
    where?: TrainingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlans to fetch.
     */
    orderBy?: TrainingPlanOrderByWithRelationInput | TrainingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingPlans.
     */
    cursor?: TrainingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingPlans.
     */
    distinct?: TrainingPlanScalarFieldEnum | TrainingPlanScalarFieldEnum[]
  }


  /**
   * TrainingPlan findMany
   */
  export type TrainingPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlans to fetch.
     */
    where?: TrainingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlans to fetch.
     */
    orderBy?: TrainingPlanOrderByWithRelationInput | TrainingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingPlans.
     */
    cursor?: TrainingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlans.
     */
    skip?: number
    distinct?: TrainingPlanScalarFieldEnum | TrainingPlanScalarFieldEnum[]
  }


  /**
   * TrainingPlan create
   */
  export type TrainingPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingPlan.
     */
    data: XOR<TrainingPlanCreateInput, TrainingPlanUncheckedCreateInput>
  }


  /**
   * TrainingPlan createMany
   */
  export type TrainingPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingPlans.
     */
    data: TrainingPlanCreateManyInput | TrainingPlanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TrainingPlan update
   */
  export type TrainingPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingPlan.
     */
    data: XOR<TrainingPlanUpdateInput, TrainingPlanUncheckedUpdateInput>
    /**
     * Choose, which TrainingPlan to update.
     */
    where: TrainingPlanWhereUniqueInput
  }


  /**
   * TrainingPlan updateMany
   */
  export type TrainingPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingPlans.
     */
    data: XOR<TrainingPlanUpdateManyMutationInput, TrainingPlanUncheckedUpdateManyInput>
    /**
     * Filter which TrainingPlans to update
     */
    where?: TrainingPlanWhereInput
  }


  /**
   * TrainingPlan upsert
   */
  export type TrainingPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingPlan to update in case it exists.
     */
    where: TrainingPlanWhereUniqueInput
    /**
     * In case the TrainingPlan found by the `where` argument doesn't exist, create a new TrainingPlan with this data.
     */
    create: XOR<TrainingPlanCreateInput, TrainingPlanUncheckedCreateInput>
    /**
     * In case the TrainingPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingPlanUpdateInput, TrainingPlanUncheckedUpdateInput>
  }


  /**
   * TrainingPlan delete
   */
  export type TrainingPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter which TrainingPlan to delete.
     */
    where: TrainingPlanWhereUniqueInput
  }


  /**
   * TrainingPlan deleteMany
   */
  export type TrainingPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingPlans to delete
     */
    where?: TrainingPlanWhereInput
  }


  /**
   * TrainingPlan.trainings
   */
  export type TrainingPlan$trainingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
    where?: TrainingWhereInput
    orderBy?: TrainingOrderByWithRelationInput | TrainingOrderByWithRelationInput[]
    cursor?: TrainingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[]
  }


  /**
   * TrainingPlan without action
   */
  export type TrainingPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingPlanInclude<ExtArgs> | null
  }



  /**
   * Model Training
   */

  export type AggregateTraining = {
    _count: TrainingCountAggregateOutputType | null
    _avg: TrainingAvgAggregateOutputType | null
    _sum: TrainingSumAggregateOutputType | null
    _min: TrainingMinAggregateOutputType | null
    _max: TrainingMaxAggregateOutputType | null
  }

  export type TrainingAvgAggregateOutputType = {
    order: number | null
  }

  export type TrainingSumAggregateOutputType = {
    order: number | null
  }

  export type TrainingMinAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    trainingPlanId: string | null
    isInProgress: boolean | null
    isRecommendedToDay: boolean | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TrainingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    trainingPlanId: string | null
    isInProgress: boolean | null
    isRecommendedToDay: boolean | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TrainingCountAggregateOutputType = {
    id: number
    name: number
    order: number
    trainingPlanId: number
    isInProgress: number
    isRecommendedToDay: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type TrainingAvgAggregateInputType = {
    order?: true
  }

  export type TrainingSumAggregateInputType = {
    order?: true
  }

  export type TrainingMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
    trainingPlanId?: true
    isInProgress?: true
    isRecommendedToDay?: true
    isActive?: true
    createdAt?: true
  }

  export type TrainingMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
    trainingPlanId?: true
    isInProgress?: true
    isRecommendedToDay?: true
    isActive?: true
    createdAt?: true
  }

  export type TrainingCountAggregateInputType = {
    id?: true
    name?: true
    order?: true
    trainingPlanId?: true
    isInProgress?: true
    isRecommendedToDay?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type TrainingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Training to aggregate.
     */
    where?: TrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainings to fetch.
     */
    orderBy?: TrainingOrderByWithRelationInput | TrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trainings
    **/
    _count?: true | TrainingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingMaxAggregateInputType
  }

  export type GetTrainingAggregateType<T extends TrainingAggregateArgs> = {
        [P in keyof T & keyof AggregateTraining]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTraining[P]>
      : GetScalarType<T[P], AggregateTraining[P]>
  }




  export type TrainingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingWhereInput
    orderBy?: TrainingOrderByWithAggregationInput | TrainingOrderByWithAggregationInput[]
    by: TrainingScalarFieldEnum[] | TrainingScalarFieldEnum
    having?: TrainingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingCountAggregateInputType | true
    _avg?: TrainingAvgAggregateInputType
    _sum?: TrainingSumAggregateInputType
    _min?: TrainingMinAggregateInputType
    _max?: TrainingMaxAggregateInputType
  }

  export type TrainingGroupByOutputType = {
    id: string
    name: string
    order: number
    trainingPlanId: string
    isInProgress: boolean | null
    isRecommendedToDay: boolean | null
    isActive: boolean | null
    createdAt: Date
    _count: TrainingCountAggregateOutputType | null
    _avg: TrainingAvgAggregateOutputType | null
    _sum: TrainingSumAggregateOutputType | null
    _min: TrainingMinAggregateOutputType | null
    _max: TrainingMaxAggregateOutputType | null
  }

  type GetTrainingGroupByPayload<T extends TrainingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingGroupByOutputType[P]>
        }
      >
    >


  export type TrainingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    trainingPlanId?: boolean
    isInProgress?: boolean
    isRecommendedToDay?: boolean
    isActive?: boolean
    createdAt?: boolean
    trainingPlan?: boolean | TrainingPlanDefaultArgs<ExtArgs>
    trainingHistory?: boolean | Training$trainingHistoryArgs<ExtArgs>
    trainingExercises?: boolean | Training$trainingExercisesArgs<ExtArgs>
    _count?: boolean | TrainingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["training"]>

  export type TrainingSelectScalar = {
    id?: boolean
    name?: boolean
    order?: boolean
    trainingPlanId?: boolean
    isInProgress?: boolean
    isRecommendedToDay?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type TrainingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingPlan?: boolean | TrainingPlanDefaultArgs<ExtArgs>
    trainingHistory?: boolean | Training$trainingHistoryArgs<ExtArgs>
    trainingExercises?: boolean | Training$trainingExercisesArgs<ExtArgs>
    _count?: boolean | TrainingCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TrainingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Training"
    objects: {
      trainingPlan: Prisma.$TrainingPlanPayload<ExtArgs>
      trainingHistory: Prisma.$TrainingHistoryPayload<ExtArgs>[]
      trainingExercises: Prisma.$TrainingExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      order: number
      trainingPlanId: string
      isInProgress: boolean | null
      isRecommendedToDay: boolean | null
      isActive: boolean | null
      createdAt: Date
    }, ExtArgs["result"]["training"]>
    composites: {}
  }


  type TrainingGetPayload<S extends boolean | null | undefined | TrainingDefaultArgs> = $Result.GetResult<Prisma.$TrainingPayload, S>

  type TrainingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrainingFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TrainingCountAggregateInputType | true
    }

  export interface TrainingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Training'], meta: { name: 'Training' } }
    /**
     * Find zero or one Training that matches the filter.
     * @param {TrainingFindUniqueArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrainingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingFindUniqueArgs<ExtArgs>>
    ): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Training that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrainingFindUniqueOrThrowArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrainingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Training that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingFindFirstArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrainingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingFindFirstArgs<ExtArgs>>
    ): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Training that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingFindFirstOrThrowArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrainingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Trainings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trainings
     * const trainings = await prisma.training.findMany()
     * 
     * // Get first 10 Trainings
     * const trainings = await prisma.training.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingWithIdOnly = await prisma.training.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrainingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Training.
     * @param {TrainingCreateArgs} args - Arguments to create a Training.
     * @example
     * // Create one Training
     * const Training = await prisma.training.create({
     *   data: {
     *     // ... data to create a Training
     *   }
     * })
     * 
    **/
    create<T extends TrainingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingCreateArgs<ExtArgs>>
    ): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Trainings.
     *     @param {TrainingCreateManyArgs} args - Arguments to create many Trainings.
     *     @example
     *     // Create many Trainings
     *     const training = await prisma.training.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrainingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Training.
     * @param {TrainingDeleteArgs} args - Arguments to delete one Training.
     * @example
     * // Delete one Training
     * const Training = await prisma.training.delete({
     *   where: {
     *     // ... filter to delete one Training
     *   }
     * })
     * 
    **/
    delete<T extends TrainingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingDeleteArgs<ExtArgs>>
    ): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Training.
     * @param {TrainingUpdateArgs} args - Arguments to update one Training.
     * @example
     * // Update one Training
     * const training = await prisma.training.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrainingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingUpdateArgs<ExtArgs>>
    ): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Trainings.
     * @param {TrainingDeleteManyArgs} args - Arguments to filter Trainings to delete.
     * @example
     * // Delete a few Trainings
     * const { count } = await prisma.training.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrainingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trainings
     * const training = await prisma.training.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrainingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Training.
     * @param {TrainingUpsertArgs} args - Arguments to update or create a Training.
     * @example
     * // Update or create a Training
     * const training = await prisma.training.upsert({
     *   create: {
     *     // ... data to create a Training
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Training we want to update
     *   }
     * })
    **/
    upsert<T extends TrainingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingUpsertArgs<ExtArgs>>
    ): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Trainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingCountArgs} args - Arguments to filter Trainings to count.
     * @example
     * // Count the number of Trainings
     * const count = await prisma.training.count({
     *   where: {
     *     // ... the filter for the Trainings we want to count
     *   }
     * })
    **/
    count<T extends TrainingCountArgs>(
      args?: Subset<T, TrainingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Training.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingAggregateArgs>(args: Subset<T, TrainingAggregateArgs>): Prisma.PrismaPromise<GetTrainingAggregateType<T>>

    /**
     * Group by Training.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingGroupByArgs} args - Group by arguments.
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
      T extends TrainingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingGroupByArgs['orderBy'] }
        : { orderBy?: TrainingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Training model
   */
  readonly fields: TrainingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Training.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    trainingPlan<T extends TrainingPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainingPlanDefaultArgs<ExtArgs>>): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    trainingHistory<T extends Training$trainingHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Training$trainingHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    trainingExercises<T extends Training$trainingExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Training$trainingExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Training model
   */ 
  interface TrainingFieldRefs {
    readonly id: FieldRef<"Training", 'String'>
    readonly name: FieldRef<"Training", 'String'>
    readonly order: FieldRef<"Training", 'Int'>
    readonly trainingPlanId: FieldRef<"Training", 'String'>
    readonly isInProgress: FieldRef<"Training", 'Boolean'>
    readonly isRecommendedToDay: FieldRef<"Training", 'Boolean'>
    readonly isActive: FieldRef<"Training", 'Boolean'>
    readonly createdAt: FieldRef<"Training", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Training findUnique
   */
  export type TrainingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter, which Training to fetch.
     */
    where: TrainingWhereUniqueInput
  }


  /**
   * Training findUniqueOrThrow
   */
  export type TrainingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter, which Training to fetch.
     */
    where: TrainingWhereUniqueInput
  }


  /**
   * Training findFirst
   */
  export type TrainingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter, which Training to fetch.
     */
    where?: TrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainings to fetch.
     */
    orderBy?: TrainingOrderByWithRelationInput | TrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trainings.
     */
    cursor?: TrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trainings.
     */
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[]
  }


  /**
   * Training findFirstOrThrow
   */
  export type TrainingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter, which Training to fetch.
     */
    where?: TrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainings to fetch.
     */
    orderBy?: TrainingOrderByWithRelationInput | TrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trainings.
     */
    cursor?: TrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trainings.
     */
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[]
  }


  /**
   * Training findMany
   */
  export type TrainingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter, which Trainings to fetch.
     */
    where?: TrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainings to fetch.
     */
    orderBy?: TrainingOrderByWithRelationInput | TrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trainings.
     */
    cursor?: TrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainings.
     */
    skip?: number
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[]
  }


  /**
   * Training create
   */
  export type TrainingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * The data needed to create a Training.
     */
    data: XOR<TrainingCreateInput, TrainingUncheckedCreateInput>
  }


  /**
   * Training createMany
   */
  export type TrainingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trainings.
     */
    data: TrainingCreateManyInput | TrainingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Training update
   */
  export type TrainingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * The data needed to update a Training.
     */
    data: XOR<TrainingUpdateInput, TrainingUncheckedUpdateInput>
    /**
     * Choose, which Training to update.
     */
    where: TrainingWhereUniqueInput
  }


  /**
   * Training updateMany
   */
  export type TrainingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trainings.
     */
    data: XOR<TrainingUpdateManyMutationInput, TrainingUncheckedUpdateManyInput>
    /**
     * Filter which Trainings to update
     */
    where?: TrainingWhereInput
  }


  /**
   * Training upsert
   */
  export type TrainingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * The filter to search for the Training to update in case it exists.
     */
    where: TrainingWhereUniqueInput
    /**
     * In case the Training found by the `where` argument doesn't exist, create a new Training with this data.
     */
    create: XOR<TrainingCreateInput, TrainingUncheckedCreateInput>
    /**
     * In case the Training was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingUpdateInput, TrainingUncheckedUpdateInput>
  }


  /**
   * Training delete
   */
  export type TrainingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter which Training to delete.
     */
    where: TrainingWhereUniqueInput
  }


  /**
   * Training deleteMany
   */
  export type TrainingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trainings to delete
     */
    where?: TrainingWhereInput
  }


  /**
   * Training.trainingHistory
   */
  export type Training$trainingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingHistory
     */
    select?: TrainingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingHistoryInclude<ExtArgs> | null
    where?: TrainingHistoryWhereInput
    orderBy?: TrainingHistoryOrderByWithRelationInput | TrainingHistoryOrderByWithRelationInput[]
    cursor?: TrainingHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingHistoryScalarFieldEnum | TrainingHistoryScalarFieldEnum[]
  }


  /**
   * Training.trainingExercises
   */
  export type Training$trainingExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
    where?: TrainingExerciseWhereInput
    orderBy?: TrainingExerciseOrderByWithRelationInput | TrainingExerciseOrderByWithRelationInput[]
    cursor?: TrainingExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingExerciseScalarFieldEnum | TrainingExerciseScalarFieldEnum[]
  }


  /**
   * Training without action
   */
  export type TrainingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
  }



  /**
   * Model TrainingExercise
   */

  export type AggregateTrainingExercise = {
    _count: TrainingExerciseCountAggregateOutputType | null
    _avg: TrainingExerciseAvgAggregateOutputType | null
    _sum: TrainingExerciseSumAggregateOutputType | null
    _min: TrainingExerciseMinAggregateOutputType | null
    _max: TrainingExerciseMaxAggregateOutputType | null
  }

  export type TrainingExerciseAvgAggregateOutputType = {
    intervalInSeconds: number | null
    order: number | null
  }

  export type TrainingExerciseSumAggregateOutputType = {
    intervalInSeconds: number | null
    order: number | null
  }

  export type TrainingExerciseMinAggregateOutputType = {
    id: string | null
    treiningId: string | null
    exerciseId: string | null
    intervalInSeconds: number | null
    status: $Enums.ExerciseStatus | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TrainingExerciseMaxAggregateOutputType = {
    id: string | null
    treiningId: string | null
    exerciseId: string | null
    intervalInSeconds: number | null
    status: $Enums.ExerciseStatus | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TrainingExerciseCountAggregateOutputType = {
    id: number
    treiningId: number
    exerciseId: number
    intervalInSeconds: number
    status: number
    order: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type TrainingExerciseAvgAggregateInputType = {
    intervalInSeconds?: true
    order?: true
  }

  export type TrainingExerciseSumAggregateInputType = {
    intervalInSeconds?: true
    order?: true
  }

  export type TrainingExerciseMinAggregateInputType = {
    id?: true
    treiningId?: true
    exerciseId?: true
    intervalInSeconds?: true
    status?: true
    order?: true
    isActive?: true
    createdAt?: true
  }

  export type TrainingExerciseMaxAggregateInputType = {
    id?: true
    treiningId?: true
    exerciseId?: true
    intervalInSeconds?: true
    status?: true
    order?: true
    isActive?: true
    createdAt?: true
  }

  export type TrainingExerciseCountAggregateInputType = {
    id?: true
    treiningId?: true
    exerciseId?: true
    intervalInSeconds?: true
    status?: true
    order?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type TrainingExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingExercise to aggregate.
     */
    where?: TrainingExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingExercises to fetch.
     */
    orderBy?: TrainingExerciseOrderByWithRelationInput | TrainingExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingExercises
    **/
    _count?: true | TrainingExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainingExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainingExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingExerciseMaxAggregateInputType
  }

  export type GetTrainingExerciseAggregateType<T extends TrainingExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingExercise[P]>
      : GetScalarType<T[P], AggregateTrainingExercise[P]>
  }




  export type TrainingExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingExerciseWhereInput
    orderBy?: TrainingExerciseOrderByWithAggregationInput | TrainingExerciseOrderByWithAggregationInput[]
    by: TrainingExerciseScalarFieldEnum[] | TrainingExerciseScalarFieldEnum
    having?: TrainingExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingExerciseCountAggregateInputType | true
    _avg?: TrainingExerciseAvgAggregateInputType
    _sum?: TrainingExerciseSumAggregateInputType
    _min?: TrainingExerciseMinAggregateInputType
    _max?: TrainingExerciseMaxAggregateInputType
  }

  export type TrainingExerciseGroupByOutputType = {
    id: string
    treiningId: string
    exerciseId: string
    intervalInSeconds: number | null
    status: $Enums.ExerciseStatus
    order: number
    isActive: boolean | null
    createdAt: Date
    _count: TrainingExerciseCountAggregateOutputType | null
    _avg: TrainingExerciseAvgAggregateOutputType | null
    _sum: TrainingExerciseSumAggregateOutputType | null
    _min: TrainingExerciseMinAggregateOutputType | null
    _max: TrainingExerciseMaxAggregateOutputType | null
  }

  type GetTrainingExerciseGroupByPayload<T extends TrainingExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingExerciseGroupByOutputType[P]>
        }
      >
    >


  export type TrainingExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treiningId?: boolean
    exerciseId?: boolean
    intervalInSeconds?: boolean
    status?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    training?: boolean | TrainingDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    trainingExerciseHistory?: boolean | TrainingExercise$trainingExerciseHistoryArgs<ExtArgs>
    _count?: boolean | TrainingExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingExercise"]>

  export type TrainingExerciseSelectScalar = {
    id?: boolean
    treiningId?: boolean
    exerciseId?: boolean
    intervalInSeconds?: boolean
    status?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type TrainingExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    training?: boolean | TrainingDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    trainingExerciseHistory?: boolean | TrainingExercise$trainingExerciseHistoryArgs<ExtArgs>
    _count?: boolean | TrainingExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TrainingExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingExercise"
    objects: {
      training: Prisma.$TrainingPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
      trainingExerciseHistory: Prisma.$TrainingExerciseHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      treiningId: string
      exerciseId: string
      intervalInSeconds: number | null
      status: $Enums.ExerciseStatus
      order: number
      isActive: boolean | null
      createdAt: Date
    }, ExtArgs["result"]["trainingExercise"]>
    composites: {}
  }


  type TrainingExerciseGetPayload<S extends boolean | null | undefined | TrainingExerciseDefaultArgs> = $Result.GetResult<Prisma.$TrainingExercisePayload, S>

  type TrainingExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrainingExerciseFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TrainingExerciseCountAggregateInputType | true
    }

  export interface TrainingExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingExercise'], meta: { name: 'TrainingExercise' } }
    /**
     * Find zero or one TrainingExercise that matches the filter.
     * @param {TrainingExerciseFindUniqueArgs} args - Arguments to find a TrainingExercise
     * @example
     * // Get one TrainingExercise
     * const trainingExercise = await prisma.trainingExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrainingExerciseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseFindUniqueArgs<ExtArgs>>
    ): Prisma__TrainingExerciseClient<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TrainingExercise that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrainingExerciseFindUniqueOrThrowArgs} args - Arguments to find a TrainingExercise
     * @example
     * // Get one TrainingExercise
     * const trainingExercise = await prisma.trainingExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrainingExerciseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrainingExerciseClient<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TrainingExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseFindFirstArgs} args - Arguments to find a TrainingExercise
     * @example
     * // Get one TrainingExercise
     * const trainingExercise = await prisma.trainingExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrainingExerciseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseFindFirstArgs<ExtArgs>>
    ): Prisma__TrainingExerciseClient<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TrainingExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseFindFirstOrThrowArgs} args - Arguments to find a TrainingExercise
     * @example
     * // Get one TrainingExercise
     * const trainingExercise = await prisma.trainingExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrainingExerciseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrainingExerciseClient<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TrainingExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingExercises
     * const trainingExercises = await prisma.trainingExercise.findMany()
     * 
     * // Get first 10 TrainingExercises
     * const trainingExercises = await prisma.trainingExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingExerciseWithIdOnly = await prisma.trainingExercise.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrainingExerciseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TrainingExercise.
     * @param {TrainingExerciseCreateArgs} args - Arguments to create a TrainingExercise.
     * @example
     * // Create one TrainingExercise
     * const TrainingExercise = await prisma.trainingExercise.create({
     *   data: {
     *     // ... data to create a TrainingExercise
     *   }
     * })
     * 
    **/
    create<T extends TrainingExerciseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseCreateArgs<ExtArgs>>
    ): Prisma__TrainingExerciseClient<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TrainingExercises.
     *     @param {TrainingExerciseCreateManyArgs} args - Arguments to create many TrainingExercises.
     *     @example
     *     // Create many TrainingExercises
     *     const trainingExercise = await prisma.trainingExercise.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrainingExerciseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrainingExercise.
     * @param {TrainingExerciseDeleteArgs} args - Arguments to delete one TrainingExercise.
     * @example
     * // Delete one TrainingExercise
     * const TrainingExercise = await prisma.trainingExercise.delete({
     *   where: {
     *     // ... filter to delete one TrainingExercise
     *   }
     * })
     * 
    **/
    delete<T extends TrainingExerciseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseDeleteArgs<ExtArgs>>
    ): Prisma__TrainingExerciseClient<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TrainingExercise.
     * @param {TrainingExerciseUpdateArgs} args - Arguments to update one TrainingExercise.
     * @example
     * // Update one TrainingExercise
     * const trainingExercise = await prisma.trainingExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrainingExerciseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseUpdateArgs<ExtArgs>>
    ): Prisma__TrainingExerciseClient<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TrainingExercises.
     * @param {TrainingExerciseDeleteManyArgs} args - Arguments to filter TrainingExercises to delete.
     * @example
     * // Delete a few TrainingExercises
     * const { count } = await prisma.trainingExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrainingExerciseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingExercises
     * const trainingExercise = await prisma.trainingExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrainingExerciseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrainingExercise.
     * @param {TrainingExerciseUpsertArgs} args - Arguments to update or create a TrainingExercise.
     * @example
     * // Update or create a TrainingExercise
     * const trainingExercise = await prisma.trainingExercise.upsert({
     *   create: {
     *     // ... data to create a TrainingExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingExercise we want to update
     *   }
     * })
    **/
    upsert<T extends TrainingExerciseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseUpsertArgs<ExtArgs>>
    ): Prisma__TrainingExerciseClient<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TrainingExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseCountArgs} args - Arguments to filter TrainingExercises to count.
     * @example
     * // Count the number of TrainingExercises
     * const count = await prisma.trainingExercise.count({
     *   where: {
     *     // ... the filter for the TrainingExercises we want to count
     *   }
     * })
    **/
    count<T extends TrainingExerciseCountArgs>(
      args?: Subset<T, TrainingExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingExerciseAggregateArgs>(args: Subset<T, TrainingExerciseAggregateArgs>): Prisma.PrismaPromise<GetTrainingExerciseAggregateType<T>>

    /**
     * Group by TrainingExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseGroupByArgs} args - Group by arguments.
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
      T extends TrainingExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingExerciseGroupByArgs['orderBy'] }
        : { orderBy?: TrainingExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainingExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingExercise model
   */
  readonly fields: TrainingExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    training<T extends TrainingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainingDefaultArgs<ExtArgs>>): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    trainingExerciseHistory<T extends TrainingExercise$trainingExerciseHistoryArgs<ExtArgs> = {}>(args?: Subset<T, TrainingExercise$trainingExerciseHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingExerciseHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TrainingExercise model
   */ 
  interface TrainingExerciseFieldRefs {
    readonly id: FieldRef<"TrainingExercise", 'String'>
    readonly treiningId: FieldRef<"TrainingExercise", 'String'>
    readonly exerciseId: FieldRef<"TrainingExercise", 'String'>
    readonly intervalInSeconds: FieldRef<"TrainingExercise", 'Int'>
    readonly status: FieldRef<"TrainingExercise", 'ExerciseStatus'>
    readonly order: FieldRef<"TrainingExercise", 'Int'>
    readonly isActive: FieldRef<"TrainingExercise", 'Boolean'>
    readonly createdAt: FieldRef<"TrainingExercise", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TrainingExercise findUnique
   */
  export type TrainingExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
    /**
     * Filter, which TrainingExercise to fetch.
     */
    where: TrainingExerciseWhereUniqueInput
  }


  /**
   * TrainingExercise findUniqueOrThrow
   */
  export type TrainingExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
    /**
     * Filter, which TrainingExercise to fetch.
     */
    where: TrainingExerciseWhereUniqueInput
  }


  /**
   * TrainingExercise findFirst
   */
  export type TrainingExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
    /**
     * Filter, which TrainingExercise to fetch.
     */
    where?: TrainingExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingExercises to fetch.
     */
    orderBy?: TrainingExerciseOrderByWithRelationInput | TrainingExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingExercises.
     */
    cursor?: TrainingExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingExercises.
     */
    distinct?: TrainingExerciseScalarFieldEnum | TrainingExerciseScalarFieldEnum[]
  }


  /**
   * TrainingExercise findFirstOrThrow
   */
  export type TrainingExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
    /**
     * Filter, which TrainingExercise to fetch.
     */
    where?: TrainingExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingExercises to fetch.
     */
    orderBy?: TrainingExerciseOrderByWithRelationInput | TrainingExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingExercises.
     */
    cursor?: TrainingExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingExercises.
     */
    distinct?: TrainingExerciseScalarFieldEnum | TrainingExerciseScalarFieldEnum[]
  }


  /**
   * TrainingExercise findMany
   */
  export type TrainingExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
    /**
     * Filter, which TrainingExercises to fetch.
     */
    where?: TrainingExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingExercises to fetch.
     */
    orderBy?: TrainingExerciseOrderByWithRelationInput | TrainingExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingExercises.
     */
    cursor?: TrainingExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingExercises.
     */
    skip?: number
    distinct?: TrainingExerciseScalarFieldEnum | TrainingExerciseScalarFieldEnum[]
  }


  /**
   * TrainingExercise create
   */
  export type TrainingExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingExercise.
     */
    data: XOR<TrainingExerciseCreateInput, TrainingExerciseUncheckedCreateInput>
  }


  /**
   * TrainingExercise createMany
   */
  export type TrainingExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingExercises.
     */
    data: TrainingExerciseCreateManyInput | TrainingExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TrainingExercise update
   */
  export type TrainingExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingExercise.
     */
    data: XOR<TrainingExerciseUpdateInput, TrainingExerciseUncheckedUpdateInput>
    /**
     * Choose, which TrainingExercise to update.
     */
    where: TrainingExerciseWhereUniqueInput
  }


  /**
   * TrainingExercise updateMany
   */
  export type TrainingExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingExercises.
     */
    data: XOR<TrainingExerciseUpdateManyMutationInput, TrainingExerciseUncheckedUpdateManyInput>
    /**
     * Filter which TrainingExercises to update
     */
    where?: TrainingExerciseWhereInput
  }


  /**
   * TrainingExercise upsert
   */
  export type TrainingExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingExercise to update in case it exists.
     */
    where: TrainingExerciseWhereUniqueInput
    /**
     * In case the TrainingExercise found by the `where` argument doesn't exist, create a new TrainingExercise with this data.
     */
    create: XOR<TrainingExerciseCreateInput, TrainingExerciseUncheckedCreateInput>
    /**
     * In case the TrainingExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingExerciseUpdateInput, TrainingExerciseUncheckedUpdateInput>
  }


  /**
   * TrainingExercise delete
   */
  export type TrainingExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
    /**
     * Filter which TrainingExercise to delete.
     */
    where: TrainingExerciseWhereUniqueInput
  }


  /**
   * TrainingExercise deleteMany
   */
  export type TrainingExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingExercises to delete
     */
    where?: TrainingExerciseWhereInput
  }


  /**
   * TrainingExercise.trainingExerciseHistory
   */
  export type TrainingExercise$trainingExerciseHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
    where?: TrainingExerciseHistoryWhereInput
    orderBy?: TrainingExerciseHistoryOrderByWithRelationInput | TrainingExerciseHistoryOrderByWithRelationInput[]
    cursor?: TrainingExerciseHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingExerciseHistoryScalarFieldEnum | TrainingExerciseHistoryScalarFieldEnum[]
  }


  /**
   * TrainingExercise without action
   */
  export type TrainingExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExercise
     */
    select?: TrainingExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseInclude<ExtArgs> | null
  }



  /**
   * Model StudentExercise
   */

  export type AggregateStudentExercise = {
    _count: StudentExerciseCountAggregateOutputType | null
    _avg: StudentExerciseAvgAggregateOutputType | null
    _sum: StudentExerciseSumAggregateOutputType | null
    _min: StudentExerciseMinAggregateOutputType | null
    _max: StudentExerciseMaxAggregateOutputType | null
  }

  export type StudentExerciseAvgAggregateOutputType = {
    weightInKg: number | null
  }

  export type StudentExerciseSumAggregateOutputType = {
    weightInKg: number | null
  }

  export type StudentExerciseMinAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    weightInKg: number | null
    createdAt: Date | null
  }

  export type StudentExerciseMaxAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    weightInKg: number | null
    createdAt: Date | null
  }

  export type StudentExerciseCountAggregateOutputType = {
    id: number
    exerciseId: number
    weightInKg: number
    createdAt: number
    _all: number
  }


  export type StudentExerciseAvgAggregateInputType = {
    weightInKg?: true
  }

  export type StudentExerciseSumAggregateInputType = {
    weightInKg?: true
  }

  export type StudentExerciseMinAggregateInputType = {
    id?: true
    exerciseId?: true
    weightInKg?: true
    createdAt?: true
  }

  export type StudentExerciseMaxAggregateInputType = {
    id?: true
    exerciseId?: true
    weightInKg?: true
    createdAt?: true
  }

  export type StudentExerciseCountAggregateInputType = {
    id?: true
    exerciseId?: true
    weightInKg?: true
    createdAt?: true
    _all?: true
  }

  export type StudentExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentExercise to aggregate.
     */
    where?: StudentExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExercises to fetch.
     */
    orderBy?: StudentExerciseOrderByWithRelationInput | StudentExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentExercises
    **/
    _count?: true | StudentExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentExerciseMaxAggregateInputType
  }

  export type GetStudentExerciseAggregateType<T extends StudentExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentExercise[P]>
      : GetScalarType<T[P], AggregateStudentExercise[P]>
  }




  export type StudentExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentExerciseWhereInput
    orderBy?: StudentExerciseOrderByWithAggregationInput | StudentExerciseOrderByWithAggregationInput[]
    by: StudentExerciseScalarFieldEnum[] | StudentExerciseScalarFieldEnum
    having?: StudentExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentExerciseCountAggregateInputType | true
    _avg?: StudentExerciseAvgAggregateInputType
    _sum?: StudentExerciseSumAggregateInputType
    _min?: StudentExerciseMinAggregateInputType
    _max?: StudentExerciseMaxAggregateInputType
  }

  export type StudentExerciseGroupByOutputType = {
    id: string
    exerciseId: string
    weightInKg: number
    createdAt: Date
    _count: StudentExerciseCountAggregateOutputType | null
    _avg: StudentExerciseAvgAggregateOutputType | null
    _sum: StudentExerciseSumAggregateOutputType | null
    _min: StudentExerciseMinAggregateOutputType | null
    _max: StudentExerciseMaxAggregateOutputType | null
  }

  type GetStudentExerciseGroupByPayload<T extends StudentExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], StudentExerciseGroupByOutputType[P]>
        }
      >
    >


  export type StudentExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    weightInKg?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentExercise"]>

  export type StudentExerciseSelectScalar = {
    id?: boolean
    exerciseId?: boolean
    weightInKg?: boolean
    createdAt?: boolean
  }

  export type StudentExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }


  export type $StudentExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentExercise"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exerciseId: string
      weightInKg: number
      createdAt: Date
    }, ExtArgs["result"]["studentExercise"]>
    composites: {}
  }


  type StudentExerciseGetPayload<S extends boolean | null | undefined | StudentExerciseDefaultArgs> = $Result.GetResult<Prisma.$StudentExercisePayload, S>

  type StudentExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentExerciseFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StudentExerciseCountAggregateInputType | true
    }

  export interface StudentExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentExercise'], meta: { name: 'StudentExercise' } }
    /**
     * Find zero or one StudentExercise that matches the filter.
     * @param {StudentExerciseFindUniqueArgs} args - Arguments to find a StudentExercise
     * @example
     * // Get one StudentExercise
     * const studentExercise = await prisma.studentExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentExerciseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StudentExerciseFindUniqueArgs<ExtArgs>>
    ): Prisma__StudentExerciseClient<$Result.GetResult<Prisma.$StudentExercisePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StudentExercise that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentExerciseFindUniqueOrThrowArgs} args - Arguments to find a StudentExercise
     * @example
     * // Get one StudentExercise
     * const studentExercise = await prisma.studentExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentExerciseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentExerciseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StudentExerciseClient<$Result.GetResult<Prisma.$StudentExercisePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StudentExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExerciseFindFirstArgs} args - Arguments to find a StudentExercise
     * @example
     * // Get one StudentExercise
     * const studentExercise = await prisma.studentExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentExerciseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentExerciseFindFirstArgs<ExtArgs>>
    ): Prisma__StudentExerciseClient<$Result.GetResult<Prisma.$StudentExercisePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StudentExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExerciseFindFirstOrThrowArgs} args - Arguments to find a StudentExercise
     * @example
     * // Get one StudentExercise
     * const studentExercise = await prisma.studentExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentExerciseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentExerciseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StudentExerciseClient<$Result.GetResult<Prisma.$StudentExercisePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StudentExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExerciseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentExercises
     * const studentExercises = await prisma.studentExercise.findMany()
     * 
     * // Get first 10 StudentExercises
     * const studentExercises = await prisma.studentExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentExerciseWithIdOnly = await prisma.studentExercise.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentExerciseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentExerciseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentExercisePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StudentExercise.
     * @param {StudentExerciseCreateArgs} args - Arguments to create a StudentExercise.
     * @example
     * // Create one StudentExercise
     * const StudentExercise = await prisma.studentExercise.create({
     *   data: {
     *     // ... data to create a StudentExercise
     *   }
     * })
     * 
    **/
    create<T extends StudentExerciseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentExerciseCreateArgs<ExtArgs>>
    ): Prisma__StudentExerciseClient<$Result.GetResult<Prisma.$StudentExercisePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StudentExercises.
     *     @param {StudentExerciseCreateManyArgs} args - Arguments to create many StudentExercises.
     *     @example
     *     // Create many StudentExercises
     *     const studentExercise = await prisma.studentExercise.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentExerciseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentExerciseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentExercise.
     * @param {StudentExerciseDeleteArgs} args - Arguments to delete one StudentExercise.
     * @example
     * // Delete one StudentExercise
     * const StudentExercise = await prisma.studentExercise.delete({
     *   where: {
     *     // ... filter to delete one StudentExercise
     *   }
     * })
     * 
    **/
    delete<T extends StudentExerciseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StudentExerciseDeleteArgs<ExtArgs>>
    ): Prisma__StudentExerciseClient<$Result.GetResult<Prisma.$StudentExercisePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StudentExercise.
     * @param {StudentExerciseUpdateArgs} args - Arguments to update one StudentExercise.
     * @example
     * // Update one StudentExercise
     * const studentExercise = await prisma.studentExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentExerciseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentExerciseUpdateArgs<ExtArgs>>
    ): Prisma__StudentExerciseClient<$Result.GetResult<Prisma.$StudentExercisePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StudentExercises.
     * @param {StudentExerciseDeleteManyArgs} args - Arguments to filter StudentExercises to delete.
     * @example
     * // Delete a few StudentExercises
     * const { count } = await prisma.studentExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentExerciseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentExerciseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentExercises
     * const studentExercise = await prisma.studentExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentExerciseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StudentExerciseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentExercise.
     * @param {StudentExerciseUpsertArgs} args - Arguments to update or create a StudentExercise.
     * @example
     * // Update or create a StudentExercise
     * const studentExercise = await prisma.studentExercise.upsert({
     *   create: {
     *     // ... data to create a StudentExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentExercise we want to update
     *   }
     * })
    **/
    upsert<T extends StudentExerciseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StudentExerciseUpsertArgs<ExtArgs>>
    ): Prisma__StudentExerciseClient<$Result.GetResult<Prisma.$StudentExercisePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of StudentExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExerciseCountArgs} args - Arguments to filter StudentExercises to count.
     * @example
     * // Count the number of StudentExercises
     * const count = await prisma.studentExercise.count({
     *   where: {
     *     // ... the filter for the StudentExercises we want to count
     *   }
     * })
    **/
    count<T extends StudentExerciseCountArgs>(
      args?: Subset<T, StudentExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentExerciseAggregateArgs>(args: Subset<T, StudentExerciseAggregateArgs>): Prisma.PrismaPromise<GetStudentExerciseAggregateType<T>>

    /**
     * Group by StudentExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExerciseGroupByArgs} args - Group by arguments.
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
      T extends StudentExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentExerciseGroupByArgs['orderBy'] }
        : { orderBy?: StudentExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentExercise model
   */
  readonly fields: StudentExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the StudentExercise model
   */ 
  interface StudentExerciseFieldRefs {
    readonly id: FieldRef<"StudentExercise", 'String'>
    readonly exerciseId: FieldRef<"StudentExercise", 'String'>
    readonly weightInKg: FieldRef<"StudentExercise", 'Float'>
    readonly createdAt: FieldRef<"StudentExercise", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * StudentExercise findUnique
   */
  export type StudentExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
    /**
     * Filter, which StudentExercise to fetch.
     */
    where: StudentExerciseWhereUniqueInput
  }


  /**
   * StudentExercise findUniqueOrThrow
   */
  export type StudentExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
    /**
     * Filter, which StudentExercise to fetch.
     */
    where: StudentExerciseWhereUniqueInput
  }


  /**
   * StudentExercise findFirst
   */
  export type StudentExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
    /**
     * Filter, which StudentExercise to fetch.
     */
    where?: StudentExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExercises to fetch.
     */
    orderBy?: StudentExerciseOrderByWithRelationInput | StudentExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentExercises.
     */
    cursor?: StudentExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentExercises.
     */
    distinct?: StudentExerciseScalarFieldEnum | StudentExerciseScalarFieldEnum[]
  }


  /**
   * StudentExercise findFirstOrThrow
   */
  export type StudentExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
    /**
     * Filter, which StudentExercise to fetch.
     */
    where?: StudentExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExercises to fetch.
     */
    orderBy?: StudentExerciseOrderByWithRelationInput | StudentExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentExercises.
     */
    cursor?: StudentExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentExercises.
     */
    distinct?: StudentExerciseScalarFieldEnum | StudentExerciseScalarFieldEnum[]
  }


  /**
   * StudentExercise findMany
   */
  export type StudentExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
    /**
     * Filter, which StudentExercises to fetch.
     */
    where?: StudentExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExercises to fetch.
     */
    orderBy?: StudentExerciseOrderByWithRelationInput | StudentExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentExercises.
     */
    cursor?: StudentExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExercises.
     */
    skip?: number
    distinct?: StudentExerciseScalarFieldEnum | StudentExerciseScalarFieldEnum[]
  }


  /**
   * StudentExercise create
   */
  export type StudentExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentExercise.
     */
    data: XOR<StudentExerciseCreateInput, StudentExerciseUncheckedCreateInput>
  }


  /**
   * StudentExercise createMany
   */
  export type StudentExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentExercises.
     */
    data: StudentExerciseCreateManyInput | StudentExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * StudentExercise update
   */
  export type StudentExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentExercise.
     */
    data: XOR<StudentExerciseUpdateInput, StudentExerciseUncheckedUpdateInput>
    /**
     * Choose, which StudentExercise to update.
     */
    where: StudentExerciseWhereUniqueInput
  }


  /**
   * StudentExercise updateMany
   */
  export type StudentExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentExercises.
     */
    data: XOR<StudentExerciseUpdateManyMutationInput, StudentExerciseUncheckedUpdateManyInput>
    /**
     * Filter which StudentExercises to update
     */
    where?: StudentExerciseWhereInput
  }


  /**
   * StudentExercise upsert
   */
  export type StudentExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentExercise to update in case it exists.
     */
    where: StudentExerciseWhereUniqueInput
    /**
     * In case the StudentExercise found by the `where` argument doesn't exist, create a new StudentExercise with this data.
     */
    create: XOR<StudentExerciseCreateInput, StudentExerciseUncheckedCreateInput>
    /**
     * In case the StudentExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentExerciseUpdateInput, StudentExerciseUncheckedUpdateInput>
  }


  /**
   * StudentExercise delete
   */
  export type StudentExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
    /**
     * Filter which StudentExercise to delete.
     */
    where: StudentExerciseWhereUniqueInput
  }


  /**
   * StudentExercise deleteMany
   */
  export type StudentExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentExercises to delete
     */
    where?: StudentExerciseWhereInput
  }


  /**
   * StudentExercise without action
   */
  export type StudentExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExercise
     */
    select?: StudentExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentExerciseInclude<ExtArgs> | null
  }



  /**
   * Model TrainingHistory
   */

  export type AggregateTrainingHistory = {
    _count: TrainingHistoryCountAggregateOutputType | null
    _min: TrainingHistoryMinAggregateOutputType | null
    _max: TrainingHistoryMaxAggregateOutputType | null
  }

  export type TrainingHistoryMinAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    trainingId: string | null
  }

  export type TrainingHistoryMaxAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    trainingId: string | null
  }

  export type TrainingHistoryCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    trainingId: number
    _all: number
  }


  export type TrainingHistoryMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    trainingId?: true
  }

  export type TrainingHistoryMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    trainingId?: true
  }

  export type TrainingHistoryCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    trainingId?: true
    _all?: true
  }

  export type TrainingHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingHistory to aggregate.
     */
    where?: TrainingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingHistories to fetch.
     */
    orderBy?: TrainingHistoryOrderByWithRelationInput | TrainingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingHistories
    **/
    _count?: true | TrainingHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingHistoryMaxAggregateInputType
  }

  export type GetTrainingHistoryAggregateType<T extends TrainingHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingHistory[P]>
      : GetScalarType<T[P], AggregateTrainingHistory[P]>
  }




  export type TrainingHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingHistoryWhereInput
    orderBy?: TrainingHistoryOrderByWithAggregationInput | TrainingHistoryOrderByWithAggregationInput[]
    by: TrainingHistoryScalarFieldEnum[] | TrainingHistoryScalarFieldEnum
    having?: TrainingHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingHistoryCountAggregateInputType | true
    _min?: TrainingHistoryMinAggregateInputType
    _max?: TrainingHistoryMaxAggregateInputType
  }

  export type TrainingHistoryGroupByOutputType = {
    id: string
    startDate: Date | null
    endDate: Date | null
    trainingId: string | null
    _count: TrainingHistoryCountAggregateOutputType | null
    _min: TrainingHistoryMinAggregateOutputType | null
    _max: TrainingHistoryMaxAggregateOutputType | null
  }

  type GetTrainingHistoryGroupByPayload<T extends TrainingHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TrainingHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    trainingId?: boolean
    training?: boolean | TrainingHistory$trainingArgs<ExtArgs>
  }, ExtArgs["result"]["trainingHistory"]>

  export type TrainingHistorySelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    trainingId?: boolean
  }

  export type TrainingHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    training?: boolean | TrainingHistory$trainingArgs<ExtArgs>
  }


  export type $TrainingHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingHistory"
    objects: {
      training: Prisma.$TrainingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startDate: Date | null
      endDate: Date | null
      trainingId: string | null
    }, ExtArgs["result"]["trainingHistory"]>
    composites: {}
  }


  type TrainingHistoryGetPayload<S extends boolean | null | undefined | TrainingHistoryDefaultArgs> = $Result.GetResult<Prisma.$TrainingHistoryPayload, S>

  type TrainingHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrainingHistoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TrainingHistoryCountAggregateInputType | true
    }

  export interface TrainingHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingHistory'], meta: { name: 'TrainingHistory' } }
    /**
     * Find zero or one TrainingHistory that matches the filter.
     * @param {TrainingHistoryFindUniqueArgs} args - Arguments to find a TrainingHistory
     * @example
     * // Get one TrainingHistory
     * const trainingHistory = await prisma.trainingHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrainingHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__TrainingHistoryClient<$Result.GetResult<Prisma.$TrainingHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TrainingHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrainingHistoryFindUniqueOrThrowArgs} args - Arguments to find a TrainingHistory
     * @example
     * // Get one TrainingHistory
     * const trainingHistory = await prisma.trainingHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrainingHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrainingHistoryClient<$Result.GetResult<Prisma.$TrainingHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TrainingHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingHistoryFindFirstArgs} args - Arguments to find a TrainingHistory
     * @example
     * // Get one TrainingHistory
     * const trainingHistory = await prisma.trainingHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrainingHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__TrainingHistoryClient<$Result.GetResult<Prisma.$TrainingHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TrainingHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingHistoryFindFirstOrThrowArgs} args - Arguments to find a TrainingHistory
     * @example
     * // Get one TrainingHistory
     * const trainingHistory = await prisma.trainingHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrainingHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrainingHistoryClient<$Result.GetResult<Prisma.$TrainingHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TrainingHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingHistories
     * const trainingHistories = await prisma.trainingHistory.findMany()
     * 
     * // Get first 10 TrainingHistories
     * const trainingHistories = await prisma.trainingHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingHistoryWithIdOnly = await prisma.trainingHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrainingHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TrainingHistory.
     * @param {TrainingHistoryCreateArgs} args - Arguments to create a TrainingHistory.
     * @example
     * // Create one TrainingHistory
     * const TrainingHistory = await prisma.trainingHistory.create({
     *   data: {
     *     // ... data to create a TrainingHistory
     *   }
     * })
     * 
    **/
    create<T extends TrainingHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingHistoryCreateArgs<ExtArgs>>
    ): Prisma__TrainingHistoryClient<$Result.GetResult<Prisma.$TrainingHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TrainingHistories.
     *     @param {TrainingHistoryCreateManyArgs} args - Arguments to create many TrainingHistories.
     *     @example
     *     // Create many TrainingHistories
     *     const trainingHistory = await prisma.trainingHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrainingHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrainingHistory.
     * @param {TrainingHistoryDeleteArgs} args - Arguments to delete one TrainingHistory.
     * @example
     * // Delete one TrainingHistory
     * const TrainingHistory = await prisma.trainingHistory.delete({
     *   where: {
     *     // ... filter to delete one TrainingHistory
     *   }
     * })
     * 
    **/
    delete<T extends TrainingHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingHistoryDeleteArgs<ExtArgs>>
    ): Prisma__TrainingHistoryClient<$Result.GetResult<Prisma.$TrainingHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TrainingHistory.
     * @param {TrainingHistoryUpdateArgs} args - Arguments to update one TrainingHistory.
     * @example
     * // Update one TrainingHistory
     * const trainingHistory = await prisma.trainingHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrainingHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingHistoryUpdateArgs<ExtArgs>>
    ): Prisma__TrainingHistoryClient<$Result.GetResult<Prisma.$TrainingHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TrainingHistories.
     * @param {TrainingHistoryDeleteManyArgs} args - Arguments to filter TrainingHistories to delete.
     * @example
     * // Delete a few TrainingHistories
     * const { count } = await prisma.trainingHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrainingHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingHistories
     * const trainingHistory = await prisma.trainingHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrainingHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrainingHistory.
     * @param {TrainingHistoryUpsertArgs} args - Arguments to update or create a TrainingHistory.
     * @example
     * // Update or create a TrainingHistory
     * const trainingHistory = await prisma.trainingHistory.upsert({
     *   create: {
     *     // ... data to create a TrainingHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingHistory we want to update
     *   }
     * })
    **/
    upsert<T extends TrainingHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingHistoryUpsertArgs<ExtArgs>>
    ): Prisma__TrainingHistoryClient<$Result.GetResult<Prisma.$TrainingHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TrainingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingHistoryCountArgs} args - Arguments to filter TrainingHistories to count.
     * @example
     * // Count the number of TrainingHistories
     * const count = await prisma.trainingHistory.count({
     *   where: {
     *     // ... the filter for the TrainingHistories we want to count
     *   }
     * })
    **/
    count<T extends TrainingHistoryCountArgs>(
      args?: Subset<T, TrainingHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingHistoryAggregateArgs>(args: Subset<T, TrainingHistoryAggregateArgs>): Prisma.PrismaPromise<GetTrainingHistoryAggregateType<T>>

    /**
     * Group by TrainingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingHistoryGroupByArgs} args - Group by arguments.
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
      T extends TrainingHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TrainingHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainingHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingHistory model
   */
  readonly fields: TrainingHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    training<T extends TrainingHistory$trainingArgs<ExtArgs> = {}>(args?: Subset<T, TrainingHistory$trainingArgs<ExtArgs>>): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TrainingHistory model
   */ 
  interface TrainingHistoryFieldRefs {
    readonly id: FieldRef<"TrainingHistory", 'String'>
    readonly startDate: FieldRef<"TrainingHistory", 'DateTime'>
    readonly endDate: FieldRef<"TrainingHistory", 'DateTime'>
    readonly trainingId: FieldRef<"TrainingHistory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TrainingHistory findUnique
   */
  export type TrainingHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingHistory
     */
    select?: TrainingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrainingHistory to fetch.
     */
    where: TrainingHistoryWhereUniqueInput
  }


  /**
   * TrainingHistory findUniqueOrThrow
   */
  export type TrainingHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingHistory
     */
    select?: TrainingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrainingHistory to fetch.
     */
    where: TrainingHistoryWhereUniqueInput
  }


  /**
   * TrainingHistory findFirst
   */
  export type TrainingHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingHistory
     */
    select?: TrainingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrainingHistory to fetch.
     */
    where?: TrainingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingHistories to fetch.
     */
    orderBy?: TrainingHistoryOrderByWithRelationInput | TrainingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingHistories.
     */
    cursor?: TrainingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingHistories.
     */
    distinct?: TrainingHistoryScalarFieldEnum | TrainingHistoryScalarFieldEnum[]
  }


  /**
   * TrainingHistory findFirstOrThrow
   */
  export type TrainingHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingHistory
     */
    select?: TrainingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrainingHistory to fetch.
     */
    where?: TrainingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingHistories to fetch.
     */
    orderBy?: TrainingHistoryOrderByWithRelationInput | TrainingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingHistories.
     */
    cursor?: TrainingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingHistories.
     */
    distinct?: TrainingHistoryScalarFieldEnum | TrainingHistoryScalarFieldEnum[]
  }


  /**
   * TrainingHistory findMany
   */
  export type TrainingHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingHistory
     */
    select?: TrainingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrainingHistories to fetch.
     */
    where?: TrainingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingHistories to fetch.
     */
    orderBy?: TrainingHistoryOrderByWithRelationInput | TrainingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingHistories.
     */
    cursor?: TrainingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingHistories.
     */
    skip?: number
    distinct?: TrainingHistoryScalarFieldEnum | TrainingHistoryScalarFieldEnum[]
  }


  /**
   * TrainingHistory create
   */
  export type TrainingHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingHistory
     */
    select?: TrainingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingHistory.
     */
    data?: XOR<TrainingHistoryCreateInput, TrainingHistoryUncheckedCreateInput>
  }


  /**
   * TrainingHistory createMany
   */
  export type TrainingHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingHistories.
     */
    data: TrainingHistoryCreateManyInput | TrainingHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TrainingHistory update
   */
  export type TrainingHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingHistory
     */
    select?: TrainingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingHistory.
     */
    data: XOR<TrainingHistoryUpdateInput, TrainingHistoryUncheckedUpdateInput>
    /**
     * Choose, which TrainingHistory to update.
     */
    where: TrainingHistoryWhereUniqueInput
  }


  /**
   * TrainingHistory updateMany
   */
  export type TrainingHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingHistories.
     */
    data: XOR<TrainingHistoryUpdateManyMutationInput, TrainingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TrainingHistories to update
     */
    where?: TrainingHistoryWhereInput
  }


  /**
   * TrainingHistory upsert
   */
  export type TrainingHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingHistory
     */
    select?: TrainingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingHistory to update in case it exists.
     */
    where: TrainingHistoryWhereUniqueInput
    /**
     * In case the TrainingHistory found by the `where` argument doesn't exist, create a new TrainingHistory with this data.
     */
    create: XOR<TrainingHistoryCreateInput, TrainingHistoryUncheckedCreateInput>
    /**
     * In case the TrainingHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingHistoryUpdateInput, TrainingHistoryUncheckedUpdateInput>
  }


  /**
   * TrainingHistory delete
   */
  export type TrainingHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingHistory
     */
    select?: TrainingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingHistoryInclude<ExtArgs> | null
    /**
     * Filter which TrainingHistory to delete.
     */
    where: TrainingHistoryWhereUniqueInput
  }


  /**
   * TrainingHistory deleteMany
   */
  export type TrainingHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingHistories to delete
     */
    where?: TrainingHistoryWhereInput
  }


  /**
   * TrainingHistory.training
   */
  export type TrainingHistory$trainingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingInclude<ExtArgs> | null
    where?: TrainingWhereInput
  }


  /**
   * TrainingHistory without action
   */
  export type TrainingHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingHistory
     */
    select?: TrainingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingHistoryInclude<ExtArgs> | null
  }



  /**
   * Model TrainingExerciseHistory
   */

  export type AggregateTrainingExerciseHistory = {
    _count: TrainingExerciseHistoryCountAggregateOutputType | null
    _min: TrainingExerciseHistoryMinAggregateOutputType | null
    _max: TrainingExerciseHistoryMaxAggregateOutputType | null
  }

  export type TrainingExerciseHistoryMinAggregateOutputType = {
    id: string | null
    trainingExerciseId: string | null
    startDate: Date | null
    endDate: Date | null
    exerciseId: string | null
  }

  export type TrainingExerciseHistoryMaxAggregateOutputType = {
    id: string | null
    trainingExerciseId: string | null
    startDate: Date | null
    endDate: Date | null
    exerciseId: string | null
  }

  export type TrainingExerciseHistoryCountAggregateOutputType = {
    id: number
    trainingExerciseId: number
    startDate: number
    endDate: number
    exerciseId: number
    _all: number
  }


  export type TrainingExerciseHistoryMinAggregateInputType = {
    id?: true
    trainingExerciseId?: true
    startDate?: true
    endDate?: true
    exerciseId?: true
  }

  export type TrainingExerciseHistoryMaxAggregateInputType = {
    id?: true
    trainingExerciseId?: true
    startDate?: true
    endDate?: true
    exerciseId?: true
  }

  export type TrainingExerciseHistoryCountAggregateInputType = {
    id?: true
    trainingExerciseId?: true
    startDate?: true
    endDate?: true
    exerciseId?: true
    _all?: true
  }

  export type TrainingExerciseHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingExerciseHistory to aggregate.
     */
    where?: TrainingExerciseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingExerciseHistories to fetch.
     */
    orderBy?: TrainingExerciseHistoryOrderByWithRelationInput | TrainingExerciseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingExerciseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingExerciseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingExerciseHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingExerciseHistories
    **/
    _count?: true | TrainingExerciseHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingExerciseHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingExerciseHistoryMaxAggregateInputType
  }

  export type GetTrainingExerciseHistoryAggregateType<T extends TrainingExerciseHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingExerciseHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingExerciseHistory[P]>
      : GetScalarType<T[P], AggregateTrainingExerciseHistory[P]>
  }




  export type TrainingExerciseHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingExerciseHistoryWhereInput
    orderBy?: TrainingExerciseHistoryOrderByWithAggregationInput | TrainingExerciseHistoryOrderByWithAggregationInput[]
    by: TrainingExerciseHistoryScalarFieldEnum[] | TrainingExerciseHistoryScalarFieldEnum
    having?: TrainingExerciseHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingExerciseHistoryCountAggregateInputType | true
    _min?: TrainingExerciseHistoryMinAggregateInputType
    _max?: TrainingExerciseHistoryMaxAggregateInputType
  }

  export type TrainingExerciseHistoryGroupByOutputType = {
    id: string
    trainingExerciseId: string
    startDate: Date | null
    endDate: Date | null
    exerciseId: string | null
    _count: TrainingExerciseHistoryCountAggregateOutputType | null
    _min: TrainingExerciseHistoryMinAggregateOutputType | null
    _max: TrainingExerciseHistoryMaxAggregateOutputType | null
  }

  type GetTrainingExerciseHistoryGroupByPayload<T extends TrainingExerciseHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingExerciseHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingExerciseHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingExerciseHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingExerciseHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TrainingExerciseHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trainingExerciseId?: boolean
    startDate?: boolean
    endDate?: boolean
    exerciseId?: boolean
    trainingExercise?: boolean | TrainingExerciseDefaultArgs<ExtArgs>
    Exercise?: boolean | TrainingExerciseHistory$ExerciseArgs<ExtArgs>
  }, ExtArgs["result"]["trainingExerciseHistory"]>

  export type TrainingExerciseHistorySelectScalar = {
    id?: boolean
    trainingExerciseId?: boolean
    startDate?: boolean
    endDate?: boolean
    exerciseId?: boolean
  }

  export type TrainingExerciseHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingExercise?: boolean | TrainingExerciseDefaultArgs<ExtArgs>
    Exercise?: boolean | TrainingExerciseHistory$ExerciseArgs<ExtArgs>
  }


  export type $TrainingExerciseHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingExerciseHistory"
    objects: {
      trainingExercise: Prisma.$TrainingExercisePayload<ExtArgs>
      Exercise: Prisma.$ExercisePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trainingExerciseId: string
      startDate: Date | null
      endDate: Date | null
      exerciseId: string | null
    }, ExtArgs["result"]["trainingExerciseHistory"]>
    composites: {}
  }


  type TrainingExerciseHistoryGetPayload<S extends boolean | null | undefined | TrainingExerciseHistoryDefaultArgs> = $Result.GetResult<Prisma.$TrainingExerciseHistoryPayload, S>

  type TrainingExerciseHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrainingExerciseHistoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TrainingExerciseHistoryCountAggregateInputType | true
    }

  export interface TrainingExerciseHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingExerciseHistory'], meta: { name: 'TrainingExerciseHistory' } }
    /**
     * Find zero or one TrainingExerciseHistory that matches the filter.
     * @param {TrainingExerciseHistoryFindUniqueArgs} args - Arguments to find a TrainingExerciseHistory
     * @example
     * // Get one TrainingExerciseHistory
     * const trainingExerciseHistory = await prisma.trainingExerciseHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrainingExerciseHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__TrainingExerciseHistoryClient<$Result.GetResult<Prisma.$TrainingExerciseHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TrainingExerciseHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrainingExerciseHistoryFindUniqueOrThrowArgs} args - Arguments to find a TrainingExerciseHistory
     * @example
     * // Get one TrainingExerciseHistory
     * const trainingExerciseHistory = await prisma.trainingExerciseHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrainingExerciseHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrainingExerciseHistoryClient<$Result.GetResult<Prisma.$TrainingExerciseHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TrainingExerciseHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseHistoryFindFirstArgs} args - Arguments to find a TrainingExerciseHistory
     * @example
     * // Get one TrainingExerciseHistory
     * const trainingExerciseHistory = await prisma.trainingExerciseHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrainingExerciseHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__TrainingExerciseHistoryClient<$Result.GetResult<Prisma.$TrainingExerciseHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TrainingExerciseHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseHistoryFindFirstOrThrowArgs} args - Arguments to find a TrainingExerciseHistory
     * @example
     * // Get one TrainingExerciseHistory
     * const trainingExerciseHistory = await prisma.trainingExerciseHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrainingExerciseHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrainingExerciseHistoryClient<$Result.GetResult<Prisma.$TrainingExerciseHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TrainingExerciseHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingExerciseHistories
     * const trainingExerciseHistories = await prisma.trainingExerciseHistory.findMany()
     * 
     * // Get first 10 TrainingExerciseHistories
     * const trainingExerciseHistories = await prisma.trainingExerciseHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingExerciseHistoryWithIdOnly = await prisma.trainingExerciseHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrainingExerciseHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingExerciseHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TrainingExerciseHistory.
     * @param {TrainingExerciseHistoryCreateArgs} args - Arguments to create a TrainingExerciseHistory.
     * @example
     * // Create one TrainingExerciseHistory
     * const TrainingExerciseHistory = await prisma.trainingExerciseHistory.create({
     *   data: {
     *     // ... data to create a TrainingExerciseHistory
     *   }
     * })
     * 
    **/
    create<T extends TrainingExerciseHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseHistoryCreateArgs<ExtArgs>>
    ): Prisma__TrainingExerciseHistoryClient<$Result.GetResult<Prisma.$TrainingExerciseHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TrainingExerciseHistories.
     *     @param {TrainingExerciseHistoryCreateManyArgs} args - Arguments to create many TrainingExerciseHistories.
     *     @example
     *     // Create many TrainingExerciseHistories
     *     const trainingExerciseHistory = await prisma.trainingExerciseHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrainingExerciseHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrainingExerciseHistory.
     * @param {TrainingExerciseHistoryDeleteArgs} args - Arguments to delete one TrainingExerciseHistory.
     * @example
     * // Delete one TrainingExerciseHistory
     * const TrainingExerciseHistory = await prisma.trainingExerciseHistory.delete({
     *   where: {
     *     // ... filter to delete one TrainingExerciseHistory
     *   }
     * })
     * 
    **/
    delete<T extends TrainingExerciseHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseHistoryDeleteArgs<ExtArgs>>
    ): Prisma__TrainingExerciseHistoryClient<$Result.GetResult<Prisma.$TrainingExerciseHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TrainingExerciseHistory.
     * @param {TrainingExerciseHistoryUpdateArgs} args - Arguments to update one TrainingExerciseHistory.
     * @example
     * // Update one TrainingExerciseHistory
     * const trainingExerciseHistory = await prisma.trainingExerciseHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrainingExerciseHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseHistoryUpdateArgs<ExtArgs>>
    ): Prisma__TrainingExerciseHistoryClient<$Result.GetResult<Prisma.$TrainingExerciseHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TrainingExerciseHistories.
     * @param {TrainingExerciseHistoryDeleteManyArgs} args - Arguments to filter TrainingExerciseHistories to delete.
     * @example
     * // Delete a few TrainingExerciseHistories
     * const { count } = await prisma.trainingExerciseHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrainingExerciseHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainingExerciseHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingExerciseHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingExerciseHistories
     * const trainingExerciseHistory = await prisma.trainingExerciseHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrainingExerciseHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrainingExerciseHistory.
     * @param {TrainingExerciseHistoryUpsertArgs} args - Arguments to update or create a TrainingExerciseHistory.
     * @example
     * // Update or create a TrainingExerciseHistory
     * const trainingExerciseHistory = await prisma.trainingExerciseHistory.upsert({
     *   create: {
     *     // ... data to create a TrainingExerciseHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingExerciseHistory we want to update
     *   }
     * })
    **/
    upsert<T extends TrainingExerciseHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrainingExerciseHistoryUpsertArgs<ExtArgs>>
    ): Prisma__TrainingExerciseHistoryClient<$Result.GetResult<Prisma.$TrainingExerciseHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TrainingExerciseHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseHistoryCountArgs} args - Arguments to filter TrainingExerciseHistories to count.
     * @example
     * // Count the number of TrainingExerciseHistories
     * const count = await prisma.trainingExerciseHistory.count({
     *   where: {
     *     // ... the filter for the TrainingExerciseHistories we want to count
     *   }
     * })
    **/
    count<T extends TrainingExerciseHistoryCountArgs>(
      args?: Subset<T, TrainingExerciseHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingExerciseHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingExerciseHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingExerciseHistoryAggregateArgs>(args: Subset<T, TrainingExerciseHistoryAggregateArgs>): Prisma.PrismaPromise<GetTrainingExerciseHistoryAggregateType<T>>

    /**
     * Group by TrainingExerciseHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingExerciseHistoryGroupByArgs} args - Group by arguments.
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
      T extends TrainingExerciseHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingExerciseHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TrainingExerciseHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainingExerciseHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingExerciseHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingExerciseHistory model
   */
  readonly fields: TrainingExerciseHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingExerciseHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingExerciseHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    trainingExercise<T extends TrainingExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainingExerciseDefaultArgs<ExtArgs>>): Prisma__TrainingExerciseClient<$Result.GetResult<Prisma.$TrainingExercisePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Exercise<T extends TrainingExerciseHistory$ExerciseArgs<ExtArgs> = {}>(args?: Subset<T, TrainingExerciseHistory$ExerciseArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TrainingExerciseHistory model
   */ 
  interface TrainingExerciseHistoryFieldRefs {
    readonly id: FieldRef<"TrainingExerciseHistory", 'String'>
    readonly trainingExerciseId: FieldRef<"TrainingExerciseHistory", 'String'>
    readonly startDate: FieldRef<"TrainingExerciseHistory", 'DateTime'>
    readonly endDate: FieldRef<"TrainingExerciseHistory", 'DateTime'>
    readonly exerciseId: FieldRef<"TrainingExerciseHistory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TrainingExerciseHistory findUnique
   */
  export type TrainingExerciseHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrainingExerciseHistory to fetch.
     */
    where: TrainingExerciseHistoryWhereUniqueInput
  }


  /**
   * TrainingExerciseHistory findUniqueOrThrow
   */
  export type TrainingExerciseHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrainingExerciseHistory to fetch.
     */
    where: TrainingExerciseHistoryWhereUniqueInput
  }


  /**
   * TrainingExerciseHistory findFirst
   */
  export type TrainingExerciseHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrainingExerciseHistory to fetch.
     */
    where?: TrainingExerciseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingExerciseHistories to fetch.
     */
    orderBy?: TrainingExerciseHistoryOrderByWithRelationInput | TrainingExerciseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingExerciseHistories.
     */
    cursor?: TrainingExerciseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingExerciseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingExerciseHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingExerciseHistories.
     */
    distinct?: TrainingExerciseHistoryScalarFieldEnum | TrainingExerciseHistoryScalarFieldEnum[]
  }


  /**
   * TrainingExerciseHistory findFirstOrThrow
   */
  export type TrainingExerciseHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrainingExerciseHistory to fetch.
     */
    where?: TrainingExerciseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingExerciseHistories to fetch.
     */
    orderBy?: TrainingExerciseHistoryOrderByWithRelationInput | TrainingExerciseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingExerciseHistories.
     */
    cursor?: TrainingExerciseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingExerciseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingExerciseHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingExerciseHistories.
     */
    distinct?: TrainingExerciseHistoryScalarFieldEnum | TrainingExerciseHistoryScalarFieldEnum[]
  }


  /**
   * TrainingExerciseHistory findMany
   */
  export type TrainingExerciseHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrainingExerciseHistories to fetch.
     */
    where?: TrainingExerciseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingExerciseHistories to fetch.
     */
    orderBy?: TrainingExerciseHistoryOrderByWithRelationInput | TrainingExerciseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingExerciseHistories.
     */
    cursor?: TrainingExerciseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingExerciseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingExerciseHistories.
     */
    skip?: number
    distinct?: TrainingExerciseHistoryScalarFieldEnum | TrainingExerciseHistoryScalarFieldEnum[]
  }


  /**
   * TrainingExerciseHistory create
   */
  export type TrainingExerciseHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingExerciseHistory.
     */
    data: XOR<TrainingExerciseHistoryCreateInput, TrainingExerciseHistoryUncheckedCreateInput>
  }


  /**
   * TrainingExerciseHistory createMany
   */
  export type TrainingExerciseHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingExerciseHistories.
     */
    data: TrainingExerciseHistoryCreateManyInput | TrainingExerciseHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TrainingExerciseHistory update
   */
  export type TrainingExerciseHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingExerciseHistory.
     */
    data: XOR<TrainingExerciseHistoryUpdateInput, TrainingExerciseHistoryUncheckedUpdateInput>
    /**
     * Choose, which TrainingExerciseHistory to update.
     */
    where: TrainingExerciseHistoryWhereUniqueInput
  }


  /**
   * TrainingExerciseHistory updateMany
   */
  export type TrainingExerciseHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingExerciseHistories.
     */
    data: XOR<TrainingExerciseHistoryUpdateManyMutationInput, TrainingExerciseHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TrainingExerciseHistories to update
     */
    where?: TrainingExerciseHistoryWhereInput
  }


  /**
   * TrainingExerciseHistory upsert
   */
  export type TrainingExerciseHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingExerciseHistory to update in case it exists.
     */
    where: TrainingExerciseHistoryWhereUniqueInput
    /**
     * In case the TrainingExerciseHistory found by the `where` argument doesn't exist, create a new TrainingExerciseHistory with this data.
     */
    create: XOR<TrainingExerciseHistoryCreateInput, TrainingExerciseHistoryUncheckedCreateInput>
    /**
     * In case the TrainingExerciseHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingExerciseHistoryUpdateInput, TrainingExerciseHistoryUncheckedUpdateInput>
  }


  /**
   * TrainingExerciseHistory delete
   */
  export type TrainingExerciseHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
    /**
     * Filter which TrainingExerciseHistory to delete.
     */
    where: TrainingExerciseHistoryWhereUniqueInput
  }


  /**
   * TrainingExerciseHistory deleteMany
   */
  export type TrainingExerciseHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingExerciseHistories to delete
     */
    where?: TrainingExerciseHistoryWhereInput
  }


  /**
   * TrainingExerciseHistory.Exercise
   */
  export type TrainingExerciseHistory$ExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
  }


  /**
   * TrainingExerciseHistory without action
   */
  export type TrainingExerciseHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingExerciseHistory
     */
    select?: TrainingExerciseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainingExerciseHistoryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    isActive: 'isActive',
    isAdmin: 'isAdmin',
    isTeacher: 'isTeacher',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    heightInMt: 'heightInMt',
    weightInKg: 'weightInKg',
    avatarBgColor: 'avatarBgColor',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MuscleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type MuscleScalarFieldEnum = (typeof MuscleScalarFieldEnum)[keyof typeof MuscleScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    muscleId: 'muscleId',
    description: 'description',
    image: 'image',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const TrainingPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    objective: 'objective',
    teacherId: 'teacherId',
    teacherName: 'teacherName',
    teacherEmail: 'teacherEmail',
    studentId: 'studentId',
    createdAt: 'createdAt'
  };

  export type TrainingPlanScalarFieldEnum = (typeof TrainingPlanScalarFieldEnum)[keyof typeof TrainingPlanScalarFieldEnum]


  export const TrainingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    order: 'order',
    trainingPlanId: 'trainingPlanId',
    isInProgress: 'isInProgress',
    isRecommendedToDay: 'isRecommendedToDay',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type TrainingScalarFieldEnum = (typeof TrainingScalarFieldEnum)[keyof typeof TrainingScalarFieldEnum]


  export const TrainingExerciseScalarFieldEnum: {
    id: 'id',
    treiningId: 'treiningId',
    exerciseId: 'exerciseId',
    intervalInSeconds: 'intervalInSeconds',
    status: 'status',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type TrainingExerciseScalarFieldEnum = (typeof TrainingExerciseScalarFieldEnum)[keyof typeof TrainingExerciseScalarFieldEnum]


  export const StudentExerciseScalarFieldEnum: {
    id: 'id',
    exerciseId: 'exerciseId',
    weightInKg: 'weightInKg',
    createdAt: 'createdAt'
  };

  export type StudentExerciseScalarFieldEnum = (typeof StudentExerciseScalarFieldEnum)[keyof typeof StudentExerciseScalarFieldEnum]


  export const TrainingHistoryScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    trainingId: 'trainingId'
  };

  export type TrainingHistoryScalarFieldEnum = (typeof TrainingHistoryScalarFieldEnum)[keyof typeof TrainingHistoryScalarFieldEnum]


  export const TrainingExerciseHistoryScalarFieldEnum: {
    id: 'id',
    trainingExerciseId: 'trainingExerciseId',
    startDate: 'startDate',
    endDate: 'endDate',
    exerciseId: 'exerciseId'
  };

  export type TrainingExerciseHistoryScalarFieldEnum = (typeof TrainingExerciseHistoryScalarFieldEnum)[keyof typeof TrainingExerciseHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'ExerciseStatus'
   */
  export type EnumExerciseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExerciseStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    isTeacher?: BoolFilter<"User"> | boolean
    dateOfBirth?: DateTimeFilter<"User"> | Date | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    heightInMt?: FloatNullableFilter<"User"> | number | null
    weightInKg?: FloatNullableFilter<"User"> | number | null
    avatarBgColor?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    trainingPlans?: TrainingPlanListRelationFilter
    studentExercises?: StudentExerciseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isTeacher?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    heightInMt?: SortOrderInput | SortOrder
    weightInKg?: SortOrderInput | SortOrder
    avatarBgColor?: SortOrder
    createdAt?: SortOrder
    trainingPlans?: TrainingPlanOrderByRelationAggregateInput
    studentExercises?: StudentExerciseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    isTeacher?: BoolFilter<"User"> | boolean
    dateOfBirth?: DateTimeFilter<"User"> | Date | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    heightInMt?: FloatNullableFilter<"User"> | number | null
    weightInKg?: FloatNullableFilter<"User"> | number | null
    avatarBgColor?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    trainingPlans?: TrainingPlanListRelationFilter
    studentExercises?: StudentExerciseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isTeacher?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    heightInMt?: SortOrderInput | SortOrder
    weightInKg?: SortOrderInput | SortOrder
    avatarBgColor?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    isTeacher?: BoolWithAggregatesFilter<"User"> | boolean
    dateOfBirth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    heightInMt?: FloatNullableWithAggregatesFilter<"User"> | number | null
    weightInKg?: FloatNullableWithAggregatesFilter<"User"> | number | null
    avatarBgColor?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MuscleWhereInput = {
    AND?: MuscleWhereInput | MuscleWhereInput[]
    OR?: MuscleWhereInput[]
    NOT?: MuscleWhereInput | MuscleWhereInput[]
    id?: StringFilter<"Muscle"> | string
    name?: StringFilter<"Muscle"> | string
    isActive?: BoolNullableFilter<"Muscle"> | boolean | null
    createdAt?: DateTimeFilter<"Muscle"> | Date | string
    exercises?: ExerciseListRelationFilter
  }

  export type MuscleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    exercises?: ExerciseOrderByRelationAggregateInput
  }

  export type MuscleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MuscleWhereInput | MuscleWhereInput[]
    OR?: MuscleWhereInput[]
    NOT?: MuscleWhereInput | MuscleWhereInput[]
    name?: StringFilter<"Muscle"> | string
    isActive?: BoolNullableFilter<"Muscle"> | boolean | null
    createdAt?: DateTimeFilter<"Muscle"> | Date | string
    exercises?: ExerciseListRelationFilter
  }, "id">

  export type MuscleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MuscleCountOrderByAggregateInput
    _max?: MuscleMaxOrderByAggregateInput
    _min?: MuscleMinOrderByAggregateInput
  }

  export type MuscleScalarWhereWithAggregatesInput = {
    AND?: MuscleScalarWhereWithAggregatesInput | MuscleScalarWhereWithAggregatesInput[]
    OR?: MuscleScalarWhereWithAggregatesInput[]
    NOT?: MuscleScalarWhereWithAggregatesInput | MuscleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Muscle"> | string
    name?: StringWithAggregatesFilter<"Muscle"> | string
    isActive?: BoolNullableWithAggregatesFilter<"Muscle"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Muscle"> | Date | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    muscleId?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    image?: StringNullableFilter<"Exercise"> | string | null
    isActive?: BoolFilter<"Exercise"> | boolean
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    muscle?: XOR<MuscleRelationFilter, MuscleWhereInput>
    studentExercises?: StudentExerciseListRelationFilter
    trainingExerciseHistory?: TrainingExerciseHistoryListRelationFilter
    trainingExercises?: TrainingExerciseListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleId?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    muscle?: MuscleOrderByWithRelationInput
    studentExercises?: StudentExerciseOrderByRelationAggregateInput
    trainingExerciseHistory?: TrainingExerciseHistoryOrderByRelationAggregateInput
    trainingExercises?: TrainingExerciseOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    muscleId?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    image?: StringNullableFilter<"Exercise"> | string | null
    isActive?: BoolFilter<"Exercise"> | boolean
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    muscle?: XOR<MuscleRelationFilter, MuscleWhereInput>
    studentExercises?: StudentExerciseListRelationFilter
    trainingExerciseHistory?: TrainingExerciseHistoryListRelationFilter
    trainingExercises?: TrainingExerciseListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleId?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    muscleId?: StringWithAggregatesFilter<"Exercise"> | string
    description?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    image?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    isActive?: BoolWithAggregatesFilter<"Exercise"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
  }

  export type TrainingPlanWhereInput = {
    AND?: TrainingPlanWhereInput | TrainingPlanWhereInput[]
    OR?: TrainingPlanWhereInput[]
    NOT?: TrainingPlanWhereInput | TrainingPlanWhereInput[]
    id?: StringFilter<"TrainingPlan"> | string
    name?: StringFilter<"TrainingPlan"> | string
    isActive?: BoolNullableFilter<"TrainingPlan"> | boolean | null
    objective?: StringNullableFilter<"TrainingPlan"> | string | null
    teacherId?: StringFilter<"TrainingPlan"> | string
    teacherName?: StringFilter<"TrainingPlan"> | string
    teacherEmail?: StringFilter<"TrainingPlan"> | string
    studentId?: StringFilter<"TrainingPlan"> | string
    createdAt?: DateTimeFilter<"TrainingPlan"> | Date | string
    student?: XOR<UserRelationFilter, UserWhereInput>
    trainings?: TrainingListRelationFilter
  }

  export type TrainingPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrderInput | SortOrder
    objective?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    teacherName?: SortOrder
    teacherEmail?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    student?: UserOrderByWithRelationInput
    trainings?: TrainingOrderByRelationAggregateInput
  }

  export type TrainingPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainingPlanWhereInput | TrainingPlanWhereInput[]
    OR?: TrainingPlanWhereInput[]
    NOT?: TrainingPlanWhereInput | TrainingPlanWhereInput[]
    name?: StringFilter<"TrainingPlan"> | string
    isActive?: BoolNullableFilter<"TrainingPlan"> | boolean | null
    objective?: StringNullableFilter<"TrainingPlan"> | string | null
    teacherId?: StringFilter<"TrainingPlan"> | string
    teacherName?: StringFilter<"TrainingPlan"> | string
    teacherEmail?: StringFilter<"TrainingPlan"> | string
    studentId?: StringFilter<"TrainingPlan"> | string
    createdAt?: DateTimeFilter<"TrainingPlan"> | Date | string
    student?: XOR<UserRelationFilter, UserWhereInput>
    trainings?: TrainingListRelationFilter
  }, "id">

  export type TrainingPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrderInput | SortOrder
    objective?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    teacherName?: SortOrder
    teacherEmail?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    _count?: TrainingPlanCountOrderByAggregateInput
    _max?: TrainingPlanMaxOrderByAggregateInput
    _min?: TrainingPlanMinOrderByAggregateInput
  }

  export type TrainingPlanScalarWhereWithAggregatesInput = {
    AND?: TrainingPlanScalarWhereWithAggregatesInput | TrainingPlanScalarWhereWithAggregatesInput[]
    OR?: TrainingPlanScalarWhereWithAggregatesInput[]
    NOT?: TrainingPlanScalarWhereWithAggregatesInput | TrainingPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrainingPlan"> | string
    name?: StringWithAggregatesFilter<"TrainingPlan"> | string
    isActive?: BoolNullableWithAggregatesFilter<"TrainingPlan"> | boolean | null
    objective?: StringNullableWithAggregatesFilter<"TrainingPlan"> | string | null
    teacherId?: StringWithAggregatesFilter<"TrainingPlan"> | string
    teacherName?: StringWithAggregatesFilter<"TrainingPlan"> | string
    teacherEmail?: StringWithAggregatesFilter<"TrainingPlan"> | string
    studentId?: StringWithAggregatesFilter<"TrainingPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TrainingPlan"> | Date | string
  }

  export type TrainingWhereInput = {
    AND?: TrainingWhereInput | TrainingWhereInput[]
    OR?: TrainingWhereInput[]
    NOT?: TrainingWhereInput | TrainingWhereInput[]
    id?: StringFilter<"Training"> | string
    name?: StringFilter<"Training"> | string
    order?: IntFilter<"Training"> | number
    trainingPlanId?: StringFilter<"Training"> | string
    isInProgress?: BoolNullableFilter<"Training"> | boolean | null
    isRecommendedToDay?: BoolNullableFilter<"Training"> | boolean | null
    isActive?: BoolNullableFilter<"Training"> | boolean | null
    createdAt?: DateTimeFilter<"Training"> | Date | string
    trainingPlan?: XOR<TrainingPlanRelationFilter, TrainingPlanWhereInput>
    trainingHistory?: TrainingHistoryListRelationFilter
    trainingExercises?: TrainingExerciseListRelationFilter
  }

  export type TrainingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    trainingPlanId?: SortOrder
    isInProgress?: SortOrderInput | SortOrder
    isRecommendedToDay?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    trainingPlan?: TrainingPlanOrderByWithRelationInput
    trainingHistory?: TrainingHistoryOrderByRelationAggregateInput
    trainingExercises?: TrainingExerciseOrderByRelationAggregateInput
  }

  export type TrainingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainingWhereInput | TrainingWhereInput[]
    OR?: TrainingWhereInput[]
    NOT?: TrainingWhereInput | TrainingWhereInput[]
    name?: StringFilter<"Training"> | string
    order?: IntFilter<"Training"> | number
    trainingPlanId?: StringFilter<"Training"> | string
    isInProgress?: BoolNullableFilter<"Training"> | boolean | null
    isRecommendedToDay?: BoolNullableFilter<"Training"> | boolean | null
    isActive?: BoolNullableFilter<"Training"> | boolean | null
    createdAt?: DateTimeFilter<"Training"> | Date | string
    trainingPlan?: XOR<TrainingPlanRelationFilter, TrainingPlanWhereInput>
    trainingHistory?: TrainingHistoryListRelationFilter
    trainingExercises?: TrainingExerciseListRelationFilter
  }, "id">

  export type TrainingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    trainingPlanId?: SortOrder
    isInProgress?: SortOrderInput | SortOrder
    isRecommendedToDay?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TrainingCountOrderByAggregateInput
    _avg?: TrainingAvgOrderByAggregateInput
    _max?: TrainingMaxOrderByAggregateInput
    _min?: TrainingMinOrderByAggregateInput
    _sum?: TrainingSumOrderByAggregateInput
  }

  export type TrainingScalarWhereWithAggregatesInput = {
    AND?: TrainingScalarWhereWithAggregatesInput | TrainingScalarWhereWithAggregatesInput[]
    OR?: TrainingScalarWhereWithAggregatesInput[]
    NOT?: TrainingScalarWhereWithAggregatesInput | TrainingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Training"> | string
    name?: StringWithAggregatesFilter<"Training"> | string
    order?: IntWithAggregatesFilter<"Training"> | number
    trainingPlanId?: StringWithAggregatesFilter<"Training"> | string
    isInProgress?: BoolNullableWithAggregatesFilter<"Training"> | boolean | null
    isRecommendedToDay?: BoolNullableWithAggregatesFilter<"Training"> | boolean | null
    isActive?: BoolNullableWithAggregatesFilter<"Training"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Training"> | Date | string
  }

  export type TrainingExerciseWhereInput = {
    AND?: TrainingExerciseWhereInput | TrainingExerciseWhereInput[]
    OR?: TrainingExerciseWhereInput[]
    NOT?: TrainingExerciseWhereInput | TrainingExerciseWhereInput[]
    id?: StringFilter<"TrainingExercise"> | string
    treiningId?: StringFilter<"TrainingExercise"> | string
    exerciseId?: StringFilter<"TrainingExercise"> | string
    intervalInSeconds?: IntNullableFilter<"TrainingExercise"> | number | null
    status?: EnumExerciseStatusFilter<"TrainingExercise"> | $Enums.ExerciseStatus
    order?: IntFilter<"TrainingExercise"> | number
    isActive?: BoolNullableFilter<"TrainingExercise"> | boolean | null
    createdAt?: DateTimeFilter<"TrainingExercise"> | Date | string
    training?: XOR<TrainingRelationFilter, TrainingWhereInput>
    exercise?: XOR<ExerciseRelationFilter, ExerciseWhereInput>
    trainingExerciseHistory?: TrainingExerciseHistoryListRelationFilter
  }

  export type TrainingExerciseOrderByWithRelationInput = {
    id?: SortOrder
    treiningId?: SortOrder
    exerciseId?: SortOrder
    intervalInSeconds?: SortOrderInput | SortOrder
    status?: SortOrder
    order?: SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    training?: TrainingOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
    trainingExerciseHistory?: TrainingExerciseHistoryOrderByRelationAggregateInput
  }

  export type TrainingExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainingExerciseWhereInput | TrainingExerciseWhereInput[]
    OR?: TrainingExerciseWhereInput[]
    NOT?: TrainingExerciseWhereInput | TrainingExerciseWhereInput[]
    treiningId?: StringFilter<"TrainingExercise"> | string
    exerciseId?: StringFilter<"TrainingExercise"> | string
    intervalInSeconds?: IntNullableFilter<"TrainingExercise"> | number | null
    status?: EnumExerciseStatusFilter<"TrainingExercise"> | $Enums.ExerciseStatus
    order?: IntFilter<"TrainingExercise"> | number
    isActive?: BoolNullableFilter<"TrainingExercise"> | boolean | null
    createdAt?: DateTimeFilter<"TrainingExercise"> | Date | string
    training?: XOR<TrainingRelationFilter, TrainingWhereInput>
    exercise?: XOR<ExerciseRelationFilter, ExerciseWhereInput>
    trainingExerciseHistory?: TrainingExerciseHistoryListRelationFilter
  }, "id">

  export type TrainingExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    treiningId?: SortOrder
    exerciseId?: SortOrder
    intervalInSeconds?: SortOrderInput | SortOrder
    status?: SortOrder
    order?: SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TrainingExerciseCountOrderByAggregateInput
    _avg?: TrainingExerciseAvgOrderByAggregateInput
    _max?: TrainingExerciseMaxOrderByAggregateInput
    _min?: TrainingExerciseMinOrderByAggregateInput
    _sum?: TrainingExerciseSumOrderByAggregateInput
  }

  export type TrainingExerciseScalarWhereWithAggregatesInput = {
    AND?: TrainingExerciseScalarWhereWithAggregatesInput | TrainingExerciseScalarWhereWithAggregatesInput[]
    OR?: TrainingExerciseScalarWhereWithAggregatesInput[]
    NOT?: TrainingExerciseScalarWhereWithAggregatesInput | TrainingExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrainingExercise"> | string
    treiningId?: StringWithAggregatesFilter<"TrainingExercise"> | string
    exerciseId?: StringWithAggregatesFilter<"TrainingExercise"> | string
    intervalInSeconds?: IntNullableWithAggregatesFilter<"TrainingExercise"> | number | null
    status?: EnumExerciseStatusWithAggregatesFilter<"TrainingExercise"> | $Enums.ExerciseStatus
    order?: IntWithAggregatesFilter<"TrainingExercise"> | number
    isActive?: BoolNullableWithAggregatesFilter<"TrainingExercise"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"TrainingExercise"> | Date | string
  }

  export type StudentExerciseWhereInput = {
    AND?: StudentExerciseWhereInput | StudentExerciseWhereInput[]
    OR?: StudentExerciseWhereInput[]
    NOT?: StudentExerciseWhereInput | StudentExerciseWhereInput[]
    id?: StringFilter<"StudentExercise"> | string
    exerciseId?: StringFilter<"StudentExercise"> | string
    weightInKg?: FloatFilter<"StudentExercise"> | number
    createdAt?: DateTimeFilter<"StudentExercise"> | Date | string
    student?: XOR<UserRelationFilter, UserWhereInput>
    exercise?: XOR<ExerciseRelationFilter, ExerciseWhereInput>
  }

  export type StudentExerciseOrderByWithRelationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    weightInKg?: SortOrder
    createdAt?: SortOrder
    student?: UserOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type StudentExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentExerciseWhereInput | StudentExerciseWhereInput[]
    OR?: StudentExerciseWhereInput[]
    NOT?: StudentExerciseWhereInput | StudentExerciseWhereInput[]
    exerciseId?: StringFilter<"StudentExercise"> | string
    weightInKg?: FloatFilter<"StudentExercise"> | number
    createdAt?: DateTimeFilter<"StudentExercise"> | Date | string
    student?: XOR<UserRelationFilter, UserWhereInput>
    exercise?: XOR<ExerciseRelationFilter, ExerciseWhereInput>
  }, "id">

  export type StudentExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    weightInKg?: SortOrder
    createdAt?: SortOrder
    _count?: StudentExerciseCountOrderByAggregateInput
    _avg?: StudentExerciseAvgOrderByAggregateInput
    _max?: StudentExerciseMaxOrderByAggregateInput
    _min?: StudentExerciseMinOrderByAggregateInput
    _sum?: StudentExerciseSumOrderByAggregateInput
  }

  export type StudentExerciseScalarWhereWithAggregatesInput = {
    AND?: StudentExerciseScalarWhereWithAggregatesInput | StudentExerciseScalarWhereWithAggregatesInput[]
    OR?: StudentExerciseScalarWhereWithAggregatesInput[]
    NOT?: StudentExerciseScalarWhereWithAggregatesInput | StudentExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentExercise"> | string
    exerciseId?: StringWithAggregatesFilter<"StudentExercise"> | string
    weightInKg?: FloatWithAggregatesFilter<"StudentExercise"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudentExercise"> | Date | string
  }

  export type TrainingHistoryWhereInput = {
    AND?: TrainingHistoryWhereInput | TrainingHistoryWhereInput[]
    OR?: TrainingHistoryWhereInput[]
    NOT?: TrainingHistoryWhereInput | TrainingHistoryWhereInput[]
    id?: StringFilter<"TrainingHistory"> | string
    startDate?: DateTimeNullableFilter<"TrainingHistory"> | Date | string | null
    endDate?: DateTimeNullableFilter<"TrainingHistory"> | Date | string | null
    trainingId?: StringNullableFilter<"TrainingHistory"> | string | null
    training?: XOR<TrainingNullableRelationFilter, TrainingWhereInput> | null
  }

  export type TrainingHistoryOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    trainingId?: SortOrderInput | SortOrder
    training?: TrainingOrderByWithRelationInput
  }

  export type TrainingHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainingHistoryWhereInput | TrainingHistoryWhereInput[]
    OR?: TrainingHistoryWhereInput[]
    NOT?: TrainingHistoryWhereInput | TrainingHistoryWhereInput[]
    startDate?: DateTimeNullableFilter<"TrainingHistory"> | Date | string | null
    endDate?: DateTimeNullableFilter<"TrainingHistory"> | Date | string | null
    trainingId?: StringNullableFilter<"TrainingHistory"> | string | null
    training?: XOR<TrainingNullableRelationFilter, TrainingWhereInput> | null
  }, "id">

  export type TrainingHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    trainingId?: SortOrderInput | SortOrder
    _count?: TrainingHistoryCountOrderByAggregateInput
    _max?: TrainingHistoryMaxOrderByAggregateInput
    _min?: TrainingHistoryMinOrderByAggregateInput
  }

  export type TrainingHistoryScalarWhereWithAggregatesInput = {
    AND?: TrainingHistoryScalarWhereWithAggregatesInput | TrainingHistoryScalarWhereWithAggregatesInput[]
    OR?: TrainingHistoryScalarWhereWithAggregatesInput[]
    NOT?: TrainingHistoryScalarWhereWithAggregatesInput | TrainingHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrainingHistory"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"TrainingHistory"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"TrainingHistory"> | Date | string | null
    trainingId?: StringNullableWithAggregatesFilter<"TrainingHistory"> | string | null
  }

  export type TrainingExerciseHistoryWhereInput = {
    AND?: TrainingExerciseHistoryWhereInput | TrainingExerciseHistoryWhereInput[]
    OR?: TrainingExerciseHistoryWhereInput[]
    NOT?: TrainingExerciseHistoryWhereInput | TrainingExerciseHistoryWhereInput[]
    id?: StringFilter<"TrainingExerciseHistory"> | string
    trainingExerciseId?: StringFilter<"TrainingExerciseHistory"> | string
    startDate?: DateTimeNullableFilter<"TrainingExerciseHistory"> | Date | string | null
    endDate?: DateTimeNullableFilter<"TrainingExerciseHistory"> | Date | string | null
    exerciseId?: StringNullableFilter<"TrainingExerciseHistory"> | string | null
    trainingExercise?: XOR<TrainingExerciseRelationFilter, TrainingExerciseWhereInput>
    Exercise?: XOR<ExerciseNullableRelationFilter, ExerciseWhereInput> | null
  }

  export type TrainingExerciseHistoryOrderByWithRelationInput = {
    id?: SortOrder
    trainingExerciseId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    exerciseId?: SortOrderInput | SortOrder
    trainingExercise?: TrainingExerciseOrderByWithRelationInput
    Exercise?: ExerciseOrderByWithRelationInput
  }

  export type TrainingExerciseHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainingExerciseHistoryWhereInput | TrainingExerciseHistoryWhereInput[]
    OR?: TrainingExerciseHistoryWhereInput[]
    NOT?: TrainingExerciseHistoryWhereInput | TrainingExerciseHistoryWhereInput[]
    trainingExerciseId?: StringFilter<"TrainingExerciseHistory"> | string
    startDate?: DateTimeNullableFilter<"TrainingExerciseHistory"> | Date | string | null
    endDate?: DateTimeNullableFilter<"TrainingExerciseHistory"> | Date | string | null
    exerciseId?: StringNullableFilter<"TrainingExerciseHistory"> | string | null
    trainingExercise?: XOR<TrainingExerciseRelationFilter, TrainingExerciseWhereInput>
    Exercise?: XOR<ExerciseNullableRelationFilter, ExerciseWhereInput> | null
  }, "id">

  export type TrainingExerciseHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    trainingExerciseId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    exerciseId?: SortOrderInput | SortOrder
    _count?: TrainingExerciseHistoryCountOrderByAggregateInput
    _max?: TrainingExerciseHistoryMaxOrderByAggregateInput
    _min?: TrainingExerciseHistoryMinOrderByAggregateInput
  }

  export type TrainingExerciseHistoryScalarWhereWithAggregatesInput = {
    AND?: TrainingExerciseHistoryScalarWhereWithAggregatesInput | TrainingExerciseHistoryScalarWhereWithAggregatesInput[]
    OR?: TrainingExerciseHistoryScalarWhereWithAggregatesInput[]
    NOT?: TrainingExerciseHistoryScalarWhereWithAggregatesInput | TrainingExerciseHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrainingExerciseHistory"> | string
    trainingExerciseId?: StringWithAggregatesFilter<"TrainingExerciseHistory"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"TrainingExerciseHistory"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"TrainingExerciseHistory"> | Date | string | null
    exerciseId?: StringNullableWithAggregatesFilter<"TrainingExerciseHistory"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    isActive?: boolean
    isAdmin: boolean
    isTeacher: boolean
    dateOfBirth: Date | string
    gender: $Enums.Gender
    heightInMt?: number | null
    weightInKg?: number | null
    avatarBgColor: string
    createdAt?: Date | string
    trainingPlans?: TrainingPlanCreateNestedManyWithoutStudentInput
    studentExercises?: StudentExerciseCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    isActive?: boolean
    isAdmin: boolean
    isTeacher: boolean
    dateOfBirth: Date | string
    gender: $Enums.Gender
    heightInMt?: number | null
    weightInKg?: number | null
    avatarBgColor: string
    createdAt?: Date | string
    trainingPlans?: TrainingPlanUncheckedCreateNestedManyWithoutStudentInput
    studentExercises?: StudentExerciseUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isTeacher?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    heightInMt?: NullableFloatFieldUpdateOperationsInput | number | null
    weightInKg?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarBgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlans?: TrainingPlanUpdateManyWithoutStudentNestedInput
    studentExercises?: StudentExerciseUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isTeacher?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    heightInMt?: NullableFloatFieldUpdateOperationsInput | number | null
    weightInKg?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarBgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlans?: TrainingPlanUncheckedUpdateManyWithoutStudentNestedInput
    studentExercises?: StudentExerciseUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    isActive?: boolean
    isAdmin: boolean
    isTeacher: boolean
    dateOfBirth: Date | string
    gender: $Enums.Gender
    heightInMt?: number | null
    weightInKg?: number | null
    avatarBgColor: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isTeacher?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    heightInMt?: NullableFloatFieldUpdateOperationsInput | number | null
    weightInKg?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarBgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isTeacher?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    heightInMt?: NullableFloatFieldUpdateOperationsInput | number | null
    weightInKg?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarBgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MuscleCreateInput = {
    id?: string
    name: string
    isActive?: boolean | null
    createdAt?: Date | string
    exercises?: ExerciseCreateNestedManyWithoutMuscleInput
  }

  export type MuscleUncheckedCreateInput = {
    id?: string
    name: string
    isActive?: boolean | null
    createdAt?: Date | string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutMuscleInput
  }

  export type MuscleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUpdateManyWithoutMuscleNestedInput
  }

  export type MuscleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUncheckedUpdateManyWithoutMuscleNestedInput
  }

  export type MuscleCreateManyInput = {
    id?: string
    name: string
    isActive?: boolean | null
    createdAt?: Date | string
  }

  export type MuscleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MuscleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    muscle: MuscleCreateNestedOneWithoutExercisesInput
    studentExercises?: StudentExerciseCreateNestedManyWithoutExerciseInput
    trainingExerciseHistory?: TrainingExerciseHistoryCreateNestedManyWithoutExerciseInput
    trainingExercises?: TrainingExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    name: string
    muscleId: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    studentExercises?: StudentExerciseUncheckedCreateNestedManyWithoutExerciseInput
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedCreateNestedManyWithoutExerciseInput
    trainingExercises?: TrainingExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    muscle?: MuscleUpdateOneRequiredWithoutExercisesNestedInput
    studentExercises?: StudentExerciseUpdateManyWithoutExerciseNestedInput
    trainingExerciseHistory?: TrainingExerciseHistoryUpdateManyWithoutExerciseNestedInput
    trainingExercises?: TrainingExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentExercises?: StudentExerciseUncheckedUpdateManyWithoutExerciseNestedInput
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedUpdateManyWithoutExerciseNestedInput
    trainingExercises?: TrainingExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    name: string
    muscleId: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingPlanCreateInput = {
    id?: string
    name: string
    isActive?: boolean | null
    objective?: string | null
    teacherId: string
    teacherName: string
    teacherEmail: string
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutTrainingPlansInput
    trainings?: TrainingCreateNestedManyWithoutTrainingPlanInput
  }

  export type TrainingPlanUncheckedCreateInput = {
    id?: string
    name: string
    isActive?: boolean | null
    objective?: string | null
    teacherId: string
    teacherName: string
    teacherEmail: string
    studentId: string
    createdAt?: Date | string
    trainings?: TrainingUncheckedCreateNestedManyWithoutTrainingPlanInput
  }

  export type TrainingPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutTrainingPlansNestedInput
    trainings?: TrainingUpdateManyWithoutTrainingPlanNestedInput
  }

  export type TrainingPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUncheckedUpdateManyWithoutTrainingPlanNestedInput
  }

  export type TrainingPlanCreateManyInput = {
    id?: string
    name: string
    isActive?: boolean | null
    objective?: string | null
    teacherId: string
    teacherName: string
    teacherEmail: string
    studentId: string
    createdAt?: Date | string
  }

  export type TrainingPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingCreateInput = {
    id?: string
    name: string
    order?: number
    isInProgress?: boolean | null
    isRecommendedToDay?: boolean | null
    isActive?: boolean | null
    createdAt?: Date | string
    trainingPlan: TrainingPlanCreateNestedOneWithoutTrainingsInput
    trainingHistory?: TrainingHistoryCreateNestedManyWithoutTrainingInput
    trainingExercises?: TrainingExerciseCreateNestedManyWithoutTrainingInput
  }

  export type TrainingUncheckedCreateInput = {
    id?: string
    name: string
    order?: number
    trainingPlanId: string
    isInProgress?: boolean | null
    isRecommendedToDay?: boolean | null
    isActive?: boolean | null
    createdAt?: Date | string
    trainingHistory?: TrainingHistoryUncheckedCreateNestedManyWithoutTrainingInput
    trainingExercises?: TrainingExerciseUncheckedCreateNestedManyWithoutTrainingInput
  }

  export type TrainingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isInProgress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRecommendedToDay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlan?: TrainingPlanUpdateOneRequiredWithoutTrainingsNestedInput
    trainingHistory?: TrainingHistoryUpdateManyWithoutTrainingNestedInput
    trainingExercises?: TrainingExerciseUpdateManyWithoutTrainingNestedInput
  }

  export type TrainingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    isInProgress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRecommendedToDay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingHistory?: TrainingHistoryUncheckedUpdateManyWithoutTrainingNestedInput
    trainingExercises?: TrainingExerciseUncheckedUpdateManyWithoutTrainingNestedInput
  }

  export type TrainingCreateManyInput = {
    id?: string
    name: string
    order?: number
    trainingPlanId: string
    isInProgress?: boolean | null
    isRecommendedToDay?: boolean | null
    isActive?: boolean | null
    createdAt?: Date | string
  }

  export type TrainingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isInProgress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRecommendedToDay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    isInProgress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRecommendedToDay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingExerciseCreateInput = {
    id?: string
    intervalInSeconds?: number | null
    status?: $Enums.ExerciseStatus
    order?: number
    isActive?: boolean | null
    createdAt?: Date | string
    training: TrainingCreateNestedOneWithoutTrainingExercisesInput
    exercise: ExerciseCreateNestedOneWithoutTrainingExercisesInput
    trainingExerciseHistory?: TrainingExerciseHistoryCreateNestedManyWithoutTrainingExerciseInput
  }

  export type TrainingExerciseUncheckedCreateInput = {
    id?: string
    treiningId: string
    exerciseId: string
    intervalInSeconds?: number | null
    status?: $Enums.ExerciseStatus
    order?: number
    isActive?: boolean | null
    createdAt?: Date | string
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedCreateNestedManyWithoutTrainingExerciseInput
  }

  export type TrainingExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    training?: TrainingUpdateOneRequiredWithoutTrainingExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutTrainingExercisesNestedInput
    trainingExerciseHistory?: TrainingExerciseHistoryUpdateManyWithoutTrainingExerciseNestedInput
  }

  export type TrainingExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    treiningId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedUpdateManyWithoutTrainingExerciseNestedInput
  }

  export type TrainingExerciseCreateManyInput = {
    id?: string
    treiningId: string
    exerciseId: string
    intervalInSeconds?: number | null
    status?: $Enums.ExerciseStatus
    order?: number
    isActive?: boolean | null
    createdAt?: Date | string
  }

  export type TrainingExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    treiningId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentExerciseCreateInput = {
    weightInKg: number
    createdAt?: Date | string
    student?: UserCreateNestedOneWithoutStudentExercisesInput
    exercise: ExerciseCreateNestedOneWithoutStudentExercisesInput
  }

  export type StudentExerciseUncheckedCreateInput = {
    id?: string
    exerciseId: string
    weightInKg: number
    createdAt?: Date | string
  }

  export type StudentExerciseUpdateInput = {
    weightInKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutStudentExercisesNestedInput
  }

  export type StudentExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    weightInKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentExerciseCreateManyInput = {
    id?: string
    exerciseId: string
    weightInKg: number
    createdAt?: Date | string
  }

  export type StudentExerciseUpdateManyMutationInput = {
    weightInKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    weightInKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingHistoryCreateInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    training?: TrainingCreateNestedOneWithoutTrainingHistoryInput
  }

  export type TrainingHistoryUncheckedCreateInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    trainingId?: string | null
  }

  export type TrainingHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    training?: TrainingUpdateOneWithoutTrainingHistoryNestedInput
  }

  export type TrainingHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainingId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrainingHistoryCreateManyInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    trainingId?: string | null
  }

  export type TrainingHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrainingHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainingId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrainingExerciseHistoryCreateInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    trainingExercise: TrainingExerciseCreateNestedOneWithoutTrainingExerciseHistoryInput
    Exercise?: ExerciseCreateNestedOneWithoutTrainingExerciseHistoryInput
  }

  export type TrainingExerciseHistoryUncheckedCreateInput = {
    id?: string
    trainingExerciseId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    exerciseId?: string | null
  }

  export type TrainingExerciseHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainingExercise?: TrainingExerciseUpdateOneRequiredWithoutTrainingExerciseHistoryNestedInput
    Exercise?: ExerciseUpdateOneWithoutTrainingExerciseHistoryNestedInput
  }

  export type TrainingExerciseHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingExerciseId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrainingExerciseHistoryCreateManyInput = {
    id?: string
    trainingExerciseId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    exerciseId?: string | null
  }

  export type TrainingExerciseHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrainingExerciseHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingExerciseId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TrainingPlanListRelationFilter = {
    every?: TrainingPlanWhereInput
    some?: TrainingPlanWhereInput
    none?: TrainingPlanWhereInput
  }

  export type StudentExerciseListRelationFilter = {
    every?: StudentExerciseWhereInput
    some?: StudentExerciseWhereInput
    none?: StudentExerciseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrainingPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isTeacher?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    heightInMt?: SortOrder
    weightInKg?: SortOrder
    avatarBgColor?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    heightInMt?: SortOrder
    weightInKg?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isTeacher?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    heightInMt?: SortOrder
    weightInKg?: SortOrder
    avatarBgColor?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isTeacher?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    heightInMt?: SortOrder
    weightInKg?: SortOrder
    avatarBgColor?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    heightInMt?: SortOrder
    weightInKg?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ExerciseListRelationFilter = {
    every?: ExerciseWhereInput
    some?: ExerciseWhereInput
    none?: ExerciseWhereInput
  }

  export type ExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MuscleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MuscleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MuscleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type MuscleRelationFilter = {
    is?: MuscleWhereInput
    isNot?: MuscleWhereInput
  }

  export type TrainingExerciseHistoryListRelationFilter = {
    every?: TrainingExerciseHistoryWhereInput
    some?: TrainingExerciseHistoryWhereInput
    none?: TrainingExerciseHistoryWhereInput
  }

  export type TrainingExerciseListRelationFilter = {
    every?: TrainingExerciseWhereInput
    some?: TrainingExerciseWhereInput
    none?: TrainingExerciseWhereInput
  }

  export type TrainingExerciseHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainingExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleId?: SortOrder
    description?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleId?: SortOrder
    description?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleId?: SortOrder
    description?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TrainingListRelationFilter = {
    every?: TrainingWhereInput
    some?: TrainingWhereInput
    none?: TrainingWhereInput
  }

  export type TrainingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainingPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    objective?: SortOrder
    teacherId?: SortOrder
    teacherName?: SortOrder
    teacherEmail?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    objective?: SortOrder
    teacherId?: SortOrder
    teacherName?: SortOrder
    teacherEmail?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    objective?: SortOrder
    teacherId?: SortOrder
    teacherName?: SortOrder
    teacherEmail?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TrainingPlanRelationFilter = {
    is?: TrainingPlanWhereInput
    isNot?: TrainingPlanWhereInput
  }

  export type TrainingHistoryListRelationFilter = {
    every?: TrainingHistoryWhereInput
    some?: TrainingHistoryWhereInput
    none?: TrainingHistoryWhereInput
  }

  export type TrainingHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    trainingPlanId?: SortOrder
    isInProgress?: SortOrder
    isRecommendedToDay?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TrainingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    trainingPlanId?: SortOrder
    isInProgress?: SortOrder
    isRecommendedToDay?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    trainingPlanId?: SortOrder
    isInProgress?: SortOrder
    isRecommendedToDay?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumExerciseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseStatus | EnumExerciseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseStatus[]
    notIn?: $Enums.ExerciseStatus[]
    not?: NestedEnumExerciseStatusFilter<$PrismaModel> | $Enums.ExerciseStatus
  }

  export type TrainingRelationFilter = {
    is?: TrainingWhereInput
    isNot?: TrainingWhereInput
  }

  export type ExerciseRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type TrainingExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    treiningId?: SortOrder
    exerciseId?: SortOrder
    intervalInSeconds?: SortOrder
    status?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingExerciseAvgOrderByAggregateInput = {
    intervalInSeconds?: SortOrder
    order?: SortOrder
  }

  export type TrainingExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    treiningId?: SortOrder
    exerciseId?: SortOrder
    intervalInSeconds?: SortOrder
    status?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    treiningId?: SortOrder
    exerciseId?: SortOrder
    intervalInSeconds?: SortOrder
    status?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingExerciseSumOrderByAggregateInput = {
    intervalInSeconds?: SortOrder
    order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EnumExerciseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseStatus | EnumExerciseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseStatus[]
    notIn?: $Enums.ExerciseStatus[]
    not?: NestedEnumExerciseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseStatusFilter<$PrismaModel>
    _max?: NestedEnumExerciseStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StudentExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    weightInKg?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentExerciseAvgOrderByAggregateInput = {
    weightInKg?: SortOrder
  }

  export type StudentExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    weightInKg?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    weightInKg?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentExerciseSumOrderByAggregateInput = {
    weightInKg?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TrainingNullableRelationFilter = {
    is?: TrainingWhereInput | null
    isNot?: TrainingWhereInput | null
  }

  export type TrainingHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    trainingId?: SortOrder
  }

  export type TrainingHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    trainingId?: SortOrder
  }

  export type TrainingHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    trainingId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TrainingExerciseRelationFilter = {
    is?: TrainingExerciseWhereInput
    isNot?: TrainingExerciseWhereInput
  }

  export type ExerciseNullableRelationFilter = {
    is?: ExerciseWhereInput | null
    isNot?: ExerciseWhereInput | null
  }

  export type TrainingExerciseHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    trainingExerciseId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    exerciseId?: SortOrder
  }

  export type TrainingExerciseHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    trainingExerciseId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    exerciseId?: SortOrder
  }

  export type TrainingExerciseHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    trainingExerciseId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    exerciseId?: SortOrder
  }

  export type TrainingPlanCreateNestedManyWithoutStudentInput = {
    create?: XOR<TrainingPlanCreateWithoutStudentInput, TrainingPlanUncheckedCreateWithoutStudentInput> | TrainingPlanCreateWithoutStudentInput[] | TrainingPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TrainingPlanCreateOrConnectWithoutStudentInput | TrainingPlanCreateOrConnectWithoutStudentInput[]
    createMany?: TrainingPlanCreateManyStudentInputEnvelope
    connect?: TrainingPlanWhereUniqueInput | TrainingPlanWhereUniqueInput[]
  }

  export type StudentExerciseCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentExerciseCreateWithoutStudentInput, StudentExerciseUncheckedCreateWithoutStudentInput> | StudentExerciseCreateWithoutStudentInput[] | StudentExerciseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExerciseCreateOrConnectWithoutStudentInput | StudentExerciseCreateOrConnectWithoutStudentInput[]
    createMany?: StudentExerciseCreateManyStudentInputEnvelope
    connect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
  }

  export type TrainingPlanUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<TrainingPlanCreateWithoutStudentInput, TrainingPlanUncheckedCreateWithoutStudentInput> | TrainingPlanCreateWithoutStudentInput[] | TrainingPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TrainingPlanCreateOrConnectWithoutStudentInput | TrainingPlanCreateOrConnectWithoutStudentInput[]
    createMany?: TrainingPlanCreateManyStudentInputEnvelope
    connect?: TrainingPlanWhereUniqueInput | TrainingPlanWhereUniqueInput[]
  }

  export type StudentExerciseUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentExerciseCreateWithoutStudentInput, StudentExerciseUncheckedCreateWithoutStudentInput> | StudentExerciseCreateWithoutStudentInput[] | StudentExerciseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExerciseCreateOrConnectWithoutStudentInput | StudentExerciseCreateOrConnectWithoutStudentInput[]
    createMany?: StudentExerciseCreateManyStudentInputEnvelope
    connect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrainingPlanUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TrainingPlanCreateWithoutStudentInput, TrainingPlanUncheckedCreateWithoutStudentInput> | TrainingPlanCreateWithoutStudentInput[] | TrainingPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TrainingPlanCreateOrConnectWithoutStudentInput | TrainingPlanCreateOrConnectWithoutStudentInput[]
    upsert?: TrainingPlanUpsertWithWhereUniqueWithoutStudentInput | TrainingPlanUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TrainingPlanCreateManyStudentInputEnvelope
    set?: TrainingPlanWhereUniqueInput | TrainingPlanWhereUniqueInput[]
    disconnect?: TrainingPlanWhereUniqueInput | TrainingPlanWhereUniqueInput[]
    delete?: TrainingPlanWhereUniqueInput | TrainingPlanWhereUniqueInput[]
    connect?: TrainingPlanWhereUniqueInput | TrainingPlanWhereUniqueInput[]
    update?: TrainingPlanUpdateWithWhereUniqueWithoutStudentInput | TrainingPlanUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TrainingPlanUpdateManyWithWhereWithoutStudentInput | TrainingPlanUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TrainingPlanScalarWhereInput | TrainingPlanScalarWhereInput[]
  }

  export type StudentExerciseUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentExerciseCreateWithoutStudentInput, StudentExerciseUncheckedCreateWithoutStudentInput> | StudentExerciseCreateWithoutStudentInput[] | StudentExerciseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExerciseCreateOrConnectWithoutStudentInput | StudentExerciseCreateOrConnectWithoutStudentInput[]
    upsert?: StudentExerciseUpsertWithWhereUniqueWithoutStudentInput | StudentExerciseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentExerciseCreateManyStudentInputEnvelope
    set?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    disconnect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    delete?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    connect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    update?: StudentExerciseUpdateWithWhereUniqueWithoutStudentInput | StudentExerciseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentExerciseUpdateManyWithWhereWithoutStudentInput | StudentExerciseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentExerciseScalarWhereInput | StudentExerciseScalarWhereInput[]
  }

  export type TrainingPlanUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TrainingPlanCreateWithoutStudentInput, TrainingPlanUncheckedCreateWithoutStudentInput> | TrainingPlanCreateWithoutStudentInput[] | TrainingPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TrainingPlanCreateOrConnectWithoutStudentInput | TrainingPlanCreateOrConnectWithoutStudentInput[]
    upsert?: TrainingPlanUpsertWithWhereUniqueWithoutStudentInput | TrainingPlanUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TrainingPlanCreateManyStudentInputEnvelope
    set?: TrainingPlanWhereUniqueInput | TrainingPlanWhereUniqueInput[]
    disconnect?: TrainingPlanWhereUniqueInput | TrainingPlanWhereUniqueInput[]
    delete?: TrainingPlanWhereUniqueInput | TrainingPlanWhereUniqueInput[]
    connect?: TrainingPlanWhereUniqueInput | TrainingPlanWhereUniqueInput[]
    update?: TrainingPlanUpdateWithWhereUniqueWithoutStudentInput | TrainingPlanUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TrainingPlanUpdateManyWithWhereWithoutStudentInput | TrainingPlanUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TrainingPlanScalarWhereInput | TrainingPlanScalarWhereInput[]
  }

  export type StudentExerciseUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentExerciseCreateWithoutStudentInput, StudentExerciseUncheckedCreateWithoutStudentInput> | StudentExerciseCreateWithoutStudentInput[] | StudentExerciseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExerciseCreateOrConnectWithoutStudentInput | StudentExerciseCreateOrConnectWithoutStudentInput[]
    upsert?: StudentExerciseUpsertWithWhereUniqueWithoutStudentInput | StudentExerciseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentExerciseCreateManyStudentInputEnvelope
    set?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    disconnect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    delete?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    connect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    update?: StudentExerciseUpdateWithWhereUniqueWithoutStudentInput | StudentExerciseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentExerciseUpdateManyWithWhereWithoutStudentInput | StudentExerciseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentExerciseScalarWhereInput | StudentExerciseScalarWhereInput[]
  }

  export type ExerciseCreateNestedManyWithoutMuscleInput = {
    create?: XOR<ExerciseCreateWithoutMuscleInput, ExerciseUncheckedCreateWithoutMuscleInput> | ExerciseCreateWithoutMuscleInput[] | ExerciseUncheckedCreateWithoutMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleInput | ExerciseCreateOrConnectWithoutMuscleInput[]
    createMany?: ExerciseCreateManyMuscleInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutMuscleInput = {
    create?: XOR<ExerciseCreateWithoutMuscleInput, ExerciseUncheckedCreateWithoutMuscleInput> | ExerciseCreateWithoutMuscleInput[] | ExerciseUncheckedCreateWithoutMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleInput | ExerciseCreateOrConnectWithoutMuscleInput[]
    createMany?: ExerciseCreateManyMuscleInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ExerciseUpdateManyWithoutMuscleNestedInput = {
    create?: XOR<ExerciseCreateWithoutMuscleInput, ExerciseUncheckedCreateWithoutMuscleInput> | ExerciseCreateWithoutMuscleInput[] | ExerciseUncheckedCreateWithoutMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleInput | ExerciseCreateOrConnectWithoutMuscleInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutMuscleInput | ExerciseUpsertWithWhereUniqueWithoutMuscleInput[]
    createMany?: ExerciseCreateManyMuscleInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutMuscleInput | ExerciseUpdateWithWhereUniqueWithoutMuscleInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutMuscleInput | ExerciseUpdateManyWithWhereWithoutMuscleInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutMuscleNestedInput = {
    create?: XOR<ExerciseCreateWithoutMuscleInput, ExerciseUncheckedCreateWithoutMuscleInput> | ExerciseCreateWithoutMuscleInput[] | ExerciseUncheckedCreateWithoutMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleInput | ExerciseCreateOrConnectWithoutMuscleInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutMuscleInput | ExerciseUpsertWithWhereUniqueWithoutMuscleInput[]
    createMany?: ExerciseCreateManyMuscleInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutMuscleInput | ExerciseUpdateWithWhereUniqueWithoutMuscleInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutMuscleInput | ExerciseUpdateManyWithWhereWithoutMuscleInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type MuscleCreateNestedOneWithoutExercisesInput = {
    create?: XOR<MuscleCreateWithoutExercisesInput, MuscleUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: MuscleCreateOrConnectWithoutExercisesInput
    connect?: MuscleWhereUniqueInput
  }

  export type StudentExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<StudentExerciseCreateWithoutExerciseInput, StudentExerciseUncheckedCreateWithoutExerciseInput> | StudentExerciseCreateWithoutExerciseInput[] | StudentExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: StudentExerciseCreateOrConnectWithoutExerciseInput | StudentExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: StudentExerciseCreateManyExerciseInputEnvelope
    connect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
  }

  export type TrainingExerciseHistoryCreateNestedManyWithoutExerciseInput = {
    create?: XOR<TrainingExerciseHistoryCreateWithoutExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutExerciseInput> | TrainingExerciseHistoryCreateWithoutExerciseInput[] | TrainingExerciseHistoryUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: TrainingExerciseHistoryCreateOrConnectWithoutExerciseInput | TrainingExerciseHistoryCreateOrConnectWithoutExerciseInput[]
    createMany?: TrainingExerciseHistoryCreateManyExerciseInputEnvelope
    connect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
  }

  export type TrainingExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<TrainingExerciseCreateWithoutExerciseInput, TrainingExerciseUncheckedCreateWithoutExerciseInput> | TrainingExerciseCreateWithoutExerciseInput[] | TrainingExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: TrainingExerciseCreateOrConnectWithoutExerciseInput | TrainingExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: TrainingExerciseCreateManyExerciseInputEnvelope
    connect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
  }

  export type StudentExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<StudentExerciseCreateWithoutExerciseInput, StudentExerciseUncheckedCreateWithoutExerciseInput> | StudentExerciseCreateWithoutExerciseInput[] | StudentExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: StudentExerciseCreateOrConnectWithoutExerciseInput | StudentExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: StudentExerciseCreateManyExerciseInputEnvelope
    connect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
  }

  export type TrainingExerciseHistoryUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<TrainingExerciseHistoryCreateWithoutExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutExerciseInput> | TrainingExerciseHistoryCreateWithoutExerciseInput[] | TrainingExerciseHistoryUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: TrainingExerciseHistoryCreateOrConnectWithoutExerciseInput | TrainingExerciseHistoryCreateOrConnectWithoutExerciseInput[]
    createMany?: TrainingExerciseHistoryCreateManyExerciseInputEnvelope
    connect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
  }

  export type TrainingExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<TrainingExerciseCreateWithoutExerciseInput, TrainingExerciseUncheckedCreateWithoutExerciseInput> | TrainingExerciseCreateWithoutExerciseInput[] | TrainingExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: TrainingExerciseCreateOrConnectWithoutExerciseInput | TrainingExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: TrainingExerciseCreateManyExerciseInputEnvelope
    connect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
  }

  export type MuscleUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<MuscleCreateWithoutExercisesInput, MuscleUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: MuscleCreateOrConnectWithoutExercisesInput
    upsert?: MuscleUpsertWithoutExercisesInput
    connect?: MuscleWhereUniqueInput
    update?: XOR<XOR<MuscleUpdateToOneWithWhereWithoutExercisesInput, MuscleUpdateWithoutExercisesInput>, MuscleUncheckedUpdateWithoutExercisesInput>
  }

  export type StudentExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<StudentExerciseCreateWithoutExerciseInput, StudentExerciseUncheckedCreateWithoutExerciseInput> | StudentExerciseCreateWithoutExerciseInput[] | StudentExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: StudentExerciseCreateOrConnectWithoutExerciseInput | StudentExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: StudentExerciseUpsertWithWhereUniqueWithoutExerciseInput | StudentExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: StudentExerciseCreateManyExerciseInputEnvelope
    set?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    disconnect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    delete?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    connect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    update?: StudentExerciseUpdateWithWhereUniqueWithoutExerciseInput | StudentExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: StudentExerciseUpdateManyWithWhereWithoutExerciseInput | StudentExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: StudentExerciseScalarWhereInput | StudentExerciseScalarWhereInput[]
  }

  export type TrainingExerciseHistoryUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<TrainingExerciseHistoryCreateWithoutExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutExerciseInput> | TrainingExerciseHistoryCreateWithoutExerciseInput[] | TrainingExerciseHistoryUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: TrainingExerciseHistoryCreateOrConnectWithoutExerciseInput | TrainingExerciseHistoryCreateOrConnectWithoutExerciseInput[]
    upsert?: TrainingExerciseHistoryUpsertWithWhereUniqueWithoutExerciseInput | TrainingExerciseHistoryUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: TrainingExerciseHistoryCreateManyExerciseInputEnvelope
    set?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    disconnect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    delete?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    connect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    update?: TrainingExerciseHistoryUpdateWithWhereUniqueWithoutExerciseInput | TrainingExerciseHistoryUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: TrainingExerciseHistoryUpdateManyWithWhereWithoutExerciseInput | TrainingExerciseHistoryUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: TrainingExerciseHistoryScalarWhereInput | TrainingExerciseHistoryScalarWhereInput[]
  }

  export type TrainingExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<TrainingExerciseCreateWithoutExerciseInput, TrainingExerciseUncheckedCreateWithoutExerciseInput> | TrainingExerciseCreateWithoutExerciseInput[] | TrainingExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: TrainingExerciseCreateOrConnectWithoutExerciseInput | TrainingExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: TrainingExerciseUpsertWithWhereUniqueWithoutExerciseInput | TrainingExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: TrainingExerciseCreateManyExerciseInputEnvelope
    set?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    disconnect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    delete?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    connect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    update?: TrainingExerciseUpdateWithWhereUniqueWithoutExerciseInput | TrainingExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: TrainingExerciseUpdateManyWithWhereWithoutExerciseInput | TrainingExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: TrainingExerciseScalarWhereInput | TrainingExerciseScalarWhereInput[]
  }

  export type StudentExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<StudentExerciseCreateWithoutExerciseInput, StudentExerciseUncheckedCreateWithoutExerciseInput> | StudentExerciseCreateWithoutExerciseInput[] | StudentExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: StudentExerciseCreateOrConnectWithoutExerciseInput | StudentExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: StudentExerciseUpsertWithWhereUniqueWithoutExerciseInput | StudentExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: StudentExerciseCreateManyExerciseInputEnvelope
    set?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    disconnect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    delete?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    connect?: StudentExerciseWhereUniqueInput | StudentExerciseWhereUniqueInput[]
    update?: StudentExerciseUpdateWithWhereUniqueWithoutExerciseInput | StudentExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: StudentExerciseUpdateManyWithWhereWithoutExerciseInput | StudentExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: StudentExerciseScalarWhereInput | StudentExerciseScalarWhereInput[]
  }

  export type TrainingExerciseHistoryUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<TrainingExerciseHistoryCreateWithoutExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutExerciseInput> | TrainingExerciseHistoryCreateWithoutExerciseInput[] | TrainingExerciseHistoryUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: TrainingExerciseHistoryCreateOrConnectWithoutExerciseInput | TrainingExerciseHistoryCreateOrConnectWithoutExerciseInput[]
    upsert?: TrainingExerciseHistoryUpsertWithWhereUniqueWithoutExerciseInput | TrainingExerciseHistoryUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: TrainingExerciseHistoryCreateManyExerciseInputEnvelope
    set?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    disconnect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    delete?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    connect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    update?: TrainingExerciseHistoryUpdateWithWhereUniqueWithoutExerciseInput | TrainingExerciseHistoryUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: TrainingExerciseHistoryUpdateManyWithWhereWithoutExerciseInput | TrainingExerciseHistoryUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: TrainingExerciseHistoryScalarWhereInput | TrainingExerciseHistoryScalarWhereInput[]
  }

  export type TrainingExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<TrainingExerciseCreateWithoutExerciseInput, TrainingExerciseUncheckedCreateWithoutExerciseInput> | TrainingExerciseCreateWithoutExerciseInput[] | TrainingExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: TrainingExerciseCreateOrConnectWithoutExerciseInput | TrainingExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: TrainingExerciseUpsertWithWhereUniqueWithoutExerciseInput | TrainingExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: TrainingExerciseCreateManyExerciseInputEnvelope
    set?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    disconnect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    delete?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    connect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    update?: TrainingExerciseUpdateWithWhereUniqueWithoutExerciseInput | TrainingExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: TrainingExerciseUpdateManyWithWhereWithoutExerciseInput | TrainingExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: TrainingExerciseScalarWhereInput | TrainingExerciseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTrainingPlansInput = {
    create?: XOR<UserCreateWithoutTrainingPlansInput, UserUncheckedCreateWithoutTrainingPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrainingPlansInput
    connect?: UserWhereUniqueInput
  }

  export type TrainingCreateNestedManyWithoutTrainingPlanInput = {
    create?: XOR<TrainingCreateWithoutTrainingPlanInput, TrainingUncheckedCreateWithoutTrainingPlanInput> | TrainingCreateWithoutTrainingPlanInput[] | TrainingUncheckedCreateWithoutTrainingPlanInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutTrainingPlanInput | TrainingCreateOrConnectWithoutTrainingPlanInput[]
    createMany?: TrainingCreateManyTrainingPlanInputEnvelope
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
  }

  export type TrainingUncheckedCreateNestedManyWithoutTrainingPlanInput = {
    create?: XOR<TrainingCreateWithoutTrainingPlanInput, TrainingUncheckedCreateWithoutTrainingPlanInput> | TrainingCreateWithoutTrainingPlanInput[] | TrainingUncheckedCreateWithoutTrainingPlanInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutTrainingPlanInput | TrainingCreateOrConnectWithoutTrainingPlanInput[]
    createMany?: TrainingCreateManyTrainingPlanInputEnvelope
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTrainingPlansNestedInput = {
    create?: XOR<UserCreateWithoutTrainingPlansInput, UserUncheckedCreateWithoutTrainingPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrainingPlansInput
    upsert?: UserUpsertWithoutTrainingPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTrainingPlansInput, UserUpdateWithoutTrainingPlansInput>, UserUncheckedUpdateWithoutTrainingPlansInput>
  }

  export type TrainingUpdateManyWithoutTrainingPlanNestedInput = {
    create?: XOR<TrainingCreateWithoutTrainingPlanInput, TrainingUncheckedCreateWithoutTrainingPlanInput> | TrainingCreateWithoutTrainingPlanInput[] | TrainingUncheckedCreateWithoutTrainingPlanInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutTrainingPlanInput | TrainingCreateOrConnectWithoutTrainingPlanInput[]
    upsert?: TrainingUpsertWithWhereUniqueWithoutTrainingPlanInput | TrainingUpsertWithWhereUniqueWithoutTrainingPlanInput[]
    createMany?: TrainingCreateManyTrainingPlanInputEnvelope
    set?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    disconnect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    delete?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    update?: TrainingUpdateWithWhereUniqueWithoutTrainingPlanInput | TrainingUpdateWithWhereUniqueWithoutTrainingPlanInput[]
    updateMany?: TrainingUpdateManyWithWhereWithoutTrainingPlanInput | TrainingUpdateManyWithWhereWithoutTrainingPlanInput[]
    deleteMany?: TrainingScalarWhereInput | TrainingScalarWhereInput[]
  }

  export type TrainingUncheckedUpdateManyWithoutTrainingPlanNestedInput = {
    create?: XOR<TrainingCreateWithoutTrainingPlanInput, TrainingUncheckedCreateWithoutTrainingPlanInput> | TrainingCreateWithoutTrainingPlanInput[] | TrainingUncheckedCreateWithoutTrainingPlanInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutTrainingPlanInput | TrainingCreateOrConnectWithoutTrainingPlanInput[]
    upsert?: TrainingUpsertWithWhereUniqueWithoutTrainingPlanInput | TrainingUpsertWithWhereUniqueWithoutTrainingPlanInput[]
    createMany?: TrainingCreateManyTrainingPlanInputEnvelope
    set?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    disconnect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    delete?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    update?: TrainingUpdateWithWhereUniqueWithoutTrainingPlanInput | TrainingUpdateWithWhereUniqueWithoutTrainingPlanInput[]
    updateMany?: TrainingUpdateManyWithWhereWithoutTrainingPlanInput | TrainingUpdateManyWithWhereWithoutTrainingPlanInput[]
    deleteMany?: TrainingScalarWhereInput | TrainingScalarWhereInput[]
  }

  export type TrainingPlanCreateNestedOneWithoutTrainingsInput = {
    create?: XOR<TrainingPlanCreateWithoutTrainingsInput, TrainingPlanUncheckedCreateWithoutTrainingsInput>
    connectOrCreate?: TrainingPlanCreateOrConnectWithoutTrainingsInput
    connect?: TrainingPlanWhereUniqueInput
  }

  export type TrainingHistoryCreateNestedManyWithoutTrainingInput = {
    create?: XOR<TrainingHistoryCreateWithoutTrainingInput, TrainingHistoryUncheckedCreateWithoutTrainingInput> | TrainingHistoryCreateWithoutTrainingInput[] | TrainingHistoryUncheckedCreateWithoutTrainingInput[]
    connectOrCreate?: TrainingHistoryCreateOrConnectWithoutTrainingInput | TrainingHistoryCreateOrConnectWithoutTrainingInput[]
    createMany?: TrainingHistoryCreateManyTrainingInputEnvelope
    connect?: TrainingHistoryWhereUniqueInput | TrainingHistoryWhereUniqueInput[]
  }

  export type TrainingExerciseCreateNestedManyWithoutTrainingInput = {
    create?: XOR<TrainingExerciseCreateWithoutTrainingInput, TrainingExerciseUncheckedCreateWithoutTrainingInput> | TrainingExerciseCreateWithoutTrainingInput[] | TrainingExerciseUncheckedCreateWithoutTrainingInput[]
    connectOrCreate?: TrainingExerciseCreateOrConnectWithoutTrainingInput | TrainingExerciseCreateOrConnectWithoutTrainingInput[]
    createMany?: TrainingExerciseCreateManyTrainingInputEnvelope
    connect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
  }

  export type TrainingHistoryUncheckedCreateNestedManyWithoutTrainingInput = {
    create?: XOR<TrainingHistoryCreateWithoutTrainingInput, TrainingHistoryUncheckedCreateWithoutTrainingInput> | TrainingHistoryCreateWithoutTrainingInput[] | TrainingHistoryUncheckedCreateWithoutTrainingInput[]
    connectOrCreate?: TrainingHistoryCreateOrConnectWithoutTrainingInput | TrainingHistoryCreateOrConnectWithoutTrainingInput[]
    createMany?: TrainingHistoryCreateManyTrainingInputEnvelope
    connect?: TrainingHistoryWhereUniqueInput | TrainingHistoryWhereUniqueInput[]
  }

  export type TrainingExerciseUncheckedCreateNestedManyWithoutTrainingInput = {
    create?: XOR<TrainingExerciseCreateWithoutTrainingInput, TrainingExerciseUncheckedCreateWithoutTrainingInput> | TrainingExerciseCreateWithoutTrainingInput[] | TrainingExerciseUncheckedCreateWithoutTrainingInput[]
    connectOrCreate?: TrainingExerciseCreateOrConnectWithoutTrainingInput | TrainingExerciseCreateOrConnectWithoutTrainingInput[]
    createMany?: TrainingExerciseCreateManyTrainingInputEnvelope
    connect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrainingPlanUpdateOneRequiredWithoutTrainingsNestedInput = {
    create?: XOR<TrainingPlanCreateWithoutTrainingsInput, TrainingPlanUncheckedCreateWithoutTrainingsInput>
    connectOrCreate?: TrainingPlanCreateOrConnectWithoutTrainingsInput
    upsert?: TrainingPlanUpsertWithoutTrainingsInput
    connect?: TrainingPlanWhereUniqueInput
    update?: XOR<XOR<TrainingPlanUpdateToOneWithWhereWithoutTrainingsInput, TrainingPlanUpdateWithoutTrainingsInput>, TrainingPlanUncheckedUpdateWithoutTrainingsInput>
  }

  export type TrainingHistoryUpdateManyWithoutTrainingNestedInput = {
    create?: XOR<TrainingHistoryCreateWithoutTrainingInput, TrainingHistoryUncheckedCreateWithoutTrainingInput> | TrainingHistoryCreateWithoutTrainingInput[] | TrainingHistoryUncheckedCreateWithoutTrainingInput[]
    connectOrCreate?: TrainingHistoryCreateOrConnectWithoutTrainingInput | TrainingHistoryCreateOrConnectWithoutTrainingInput[]
    upsert?: TrainingHistoryUpsertWithWhereUniqueWithoutTrainingInput | TrainingHistoryUpsertWithWhereUniqueWithoutTrainingInput[]
    createMany?: TrainingHistoryCreateManyTrainingInputEnvelope
    set?: TrainingHistoryWhereUniqueInput | TrainingHistoryWhereUniqueInput[]
    disconnect?: TrainingHistoryWhereUniqueInput | TrainingHistoryWhereUniqueInput[]
    delete?: TrainingHistoryWhereUniqueInput | TrainingHistoryWhereUniqueInput[]
    connect?: TrainingHistoryWhereUniqueInput | TrainingHistoryWhereUniqueInput[]
    update?: TrainingHistoryUpdateWithWhereUniqueWithoutTrainingInput | TrainingHistoryUpdateWithWhereUniqueWithoutTrainingInput[]
    updateMany?: TrainingHistoryUpdateManyWithWhereWithoutTrainingInput | TrainingHistoryUpdateManyWithWhereWithoutTrainingInput[]
    deleteMany?: TrainingHistoryScalarWhereInput | TrainingHistoryScalarWhereInput[]
  }

  export type TrainingExerciseUpdateManyWithoutTrainingNestedInput = {
    create?: XOR<TrainingExerciseCreateWithoutTrainingInput, TrainingExerciseUncheckedCreateWithoutTrainingInput> | TrainingExerciseCreateWithoutTrainingInput[] | TrainingExerciseUncheckedCreateWithoutTrainingInput[]
    connectOrCreate?: TrainingExerciseCreateOrConnectWithoutTrainingInput | TrainingExerciseCreateOrConnectWithoutTrainingInput[]
    upsert?: TrainingExerciseUpsertWithWhereUniqueWithoutTrainingInput | TrainingExerciseUpsertWithWhereUniqueWithoutTrainingInput[]
    createMany?: TrainingExerciseCreateManyTrainingInputEnvelope
    set?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    disconnect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    delete?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    connect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    update?: TrainingExerciseUpdateWithWhereUniqueWithoutTrainingInput | TrainingExerciseUpdateWithWhereUniqueWithoutTrainingInput[]
    updateMany?: TrainingExerciseUpdateManyWithWhereWithoutTrainingInput | TrainingExerciseUpdateManyWithWhereWithoutTrainingInput[]
    deleteMany?: TrainingExerciseScalarWhereInput | TrainingExerciseScalarWhereInput[]
  }

  export type TrainingHistoryUncheckedUpdateManyWithoutTrainingNestedInput = {
    create?: XOR<TrainingHistoryCreateWithoutTrainingInput, TrainingHistoryUncheckedCreateWithoutTrainingInput> | TrainingHistoryCreateWithoutTrainingInput[] | TrainingHistoryUncheckedCreateWithoutTrainingInput[]
    connectOrCreate?: TrainingHistoryCreateOrConnectWithoutTrainingInput | TrainingHistoryCreateOrConnectWithoutTrainingInput[]
    upsert?: TrainingHistoryUpsertWithWhereUniqueWithoutTrainingInput | TrainingHistoryUpsertWithWhereUniqueWithoutTrainingInput[]
    createMany?: TrainingHistoryCreateManyTrainingInputEnvelope
    set?: TrainingHistoryWhereUniqueInput | TrainingHistoryWhereUniqueInput[]
    disconnect?: TrainingHistoryWhereUniqueInput | TrainingHistoryWhereUniqueInput[]
    delete?: TrainingHistoryWhereUniqueInput | TrainingHistoryWhereUniqueInput[]
    connect?: TrainingHistoryWhereUniqueInput | TrainingHistoryWhereUniqueInput[]
    update?: TrainingHistoryUpdateWithWhereUniqueWithoutTrainingInput | TrainingHistoryUpdateWithWhereUniqueWithoutTrainingInput[]
    updateMany?: TrainingHistoryUpdateManyWithWhereWithoutTrainingInput | TrainingHistoryUpdateManyWithWhereWithoutTrainingInput[]
    deleteMany?: TrainingHistoryScalarWhereInput | TrainingHistoryScalarWhereInput[]
  }

  export type TrainingExerciseUncheckedUpdateManyWithoutTrainingNestedInput = {
    create?: XOR<TrainingExerciseCreateWithoutTrainingInput, TrainingExerciseUncheckedCreateWithoutTrainingInput> | TrainingExerciseCreateWithoutTrainingInput[] | TrainingExerciseUncheckedCreateWithoutTrainingInput[]
    connectOrCreate?: TrainingExerciseCreateOrConnectWithoutTrainingInput | TrainingExerciseCreateOrConnectWithoutTrainingInput[]
    upsert?: TrainingExerciseUpsertWithWhereUniqueWithoutTrainingInput | TrainingExerciseUpsertWithWhereUniqueWithoutTrainingInput[]
    createMany?: TrainingExerciseCreateManyTrainingInputEnvelope
    set?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    disconnect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    delete?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    connect?: TrainingExerciseWhereUniqueInput | TrainingExerciseWhereUniqueInput[]
    update?: TrainingExerciseUpdateWithWhereUniqueWithoutTrainingInput | TrainingExerciseUpdateWithWhereUniqueWithoutTrainingInput[]
    updateMany?: TrainingExerciseUpdateManyWithWhereWithoutTrainingInput | TrainingExerciseUpdateManyWithWhereWithoutTrainingInput[]
    deleteMany?: TrainingExerciseScalarWhereInput | TrainingExerciseScalarWhereInput[]
  }

  export type TrainingCreateNestedOneWithoutTrainingExercisesInput = {
    create?: XOR<TrainingCreateWithoutTrainingExercisesInput, TrainingUncheckedCreateWithoutTrainingExercisesInput>
    connectOrCreate?: TrainingCreateOrConnectWithoutTrainingExercisesInput
    connect?: TrainingWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutTrainingExercisesInput = {
    create?: XOR<ExerciseCreateWithoutTrainingExercisesInput, ExerciseUncheckedCreateWithoutTrainingExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutTrainingExercisesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type TrainingExerciseHistoryCreateNestedManyWithoutTrainingExerciseInput = {
    create?: XOR<TrainingExerciseHistoryCreateWithoutTrainingExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutTrainingExerciseInput> | TrainingExerciseHistoryCreateWithoutTrainingExerciseInput[] | TrainingExerciseHistoryUncheckedCreateWithoutTrainingExerciseInput[]
    connectOrCreate?: TrainingExerciseHistoryCreateOrConnectWithoutTrainingExerciseInput | TrainingExerciseHistoryCreateOrConnectWithoutTrainingExerciseInput[]
    createMany?: TrainingExerciseHistoryCreateManyTrainingExerciseInputEnvelope
    connect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
  }

  export type TrainingExerciseHistoryUncheckedCreateNestedManyWithoutTrainingExerciseInput = {
    create?: XOR<TrainingExerciseHistoryCreateWithoutTrainingExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutTrainingExerciseInput> | TrainingExerciseHistoryCreateWithoutTrainingExerciseInput[] | TrainingExerciseHistoryUncheckedCreateWithoutTrainingExerciseInput[]
    connectOrCreate?: TrainingExerciseHistoryCreateOrConnectWithoutTrainingExerciseInput | TrainingExerciseHistoryCreateOrConnectWithoutTrainingExerciseInput[]
    createMany?: TrainingExerciseHistoryCreateManyTrainingExerciseInputEnvelope
    connect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumExerciseStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExerciseStatus
  }

  export type TrainingUpdateOneRequiredWithoutTrainingExercisesNestedInput = {
    create?: XOR<TrainingCreateWithoutTrainingExercisesInput, TrainingUncheckedCreateWithoutTrainingExercisesInput>
    connectOrCreate?: TrainingCreateOrConnectWithoutTrainingExercisesInput
    upsert?: TrainingUpsertWithoutTrainingExercisesInput
    connect?: TrainingWhereUniqueInput
    update?: XOR<XOR<TrainingUpdateToOneWithWhereWithoutTrainingExercisesInput, TrainingUpdateWithoutTrainingExercisesInput>, TrainingUncheckedUpdateWithoutTrainingExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutTrainingExercisesNestedInput = {
    create?: XOR<ExerciseCreateWithoutTrainingExercisesInput, ExerciseUncheckedCreateWithoutTrainingExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutTrainingExercisesInput
    upsert?: ExerciseUpsertWithoutTrainingExercisesInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutTrainingExercisesInput, ExerciseUpdateWithoutTrainingExercisesInput>, ExerciseUncheckedUpdateWithoutTrainingExercisesInput>
  }

  export type TrainingExerciseHistoryUpdateManyWithoutTrainingExerciseNestedInput = {
    create?: XOR<TrainingExerciseHistoryCreateWithoutTrainingExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutTrainingExerciseInput> | TrainingExerciseHistoryCreateWithoutTrainingExerciseInput[] | TrainingExerciseHistoryUncheckedCreateWithoutTrainingExerciseInput[]
    connectOrCreate?: TrainingExerciseHistoryCreateOrConnectWithoutTrainingExerciseInput | TrainingExerciseHistoryCreateOrConnectWithoutTrainingExerciseInput[]
    upsert?: TrainingExerciseHistoryUpsertWithWhereUniqueWithoutTrainingExerciseInput | TrainingExerciseHistoryUpsertWithWhereUniqueWithoutTrainingExerciseInput[]
    createMany?: TrainingExerciseHistoryCreateManyTrainingExerciseInputEnvelope
    set?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    disconnect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    delete?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    connect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    update?: TrainingExerciseHistoryUpdateWithWhereUniqueWithoutTrainingExerciseInput | TrainingExerciseHistoryUpdateWithWhereUniqueWithoutTrainingExerciseInput[]
    updateMany?: TrainingExerciseHistoryUpdateManyWithWhereWithoutTrainingExerciseInput | TrainingExerciseHistoryUpdateManyWithWhereWithoutTrainingExerciseInput[]
    deleteMany?: TrainingExerciseHistoryScalarWhereInput | TrainingExerciseHistoryScalarWhereInput[]
  }

  export type TrainingExerciseHistoryUncheckedUpdateManyWithoutTrainingExerciseNestedInput = {
    create?: XOR<TrainingExerciseHistoryCreateWithoutTrainingExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutTrainingExerciseInput> | TrainingExerciseHistoryCreateWithoutTrainingExerciseInput[] | TrainingExerciseHistoryUncheckedCreateWithoutTrainingExerciseInput[]
    connectOrCreate?: TrainingExerciseHistoryCreateOrConnectWithoutTrainingExerciseInput | TrainingExerciseHistoryCreateOrConnectWithoutTrainingExerciseInput[]
    upsert?: TrainingExerciseHistoryUpsertWithWhereUniqueWithoutTrainingExerciseInput | TrainingExerciseHistoryUpsertWithWhereUniqueWithoutTrainingExerciseInput[]
    createMany?: TrainingExerciseHistoryCreateManyTrainingExerciseInputEnvelope
    set?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    disconnect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    delete?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    connect?: TrainingExerciseHistoryWhereUniqueInput | TrainingExerciseHistoryWhereUniqueInput[]
    update?: TrainingExerciseHistoryUpdateWithWhereUniqueWithoutTrainingExerciseInput | TrainingExerciseHistoryUpdateWithWhereUniqueWithoutTrainingExerciseInput[]
    updateMany?: TrainingExerciseHistoryUpdateManyWithWhereWithoutTrainingExerciseInput | TrainingExerciseHistoryUpdateManyWithWhereWithoutTrainingExerciseInput[]
    deleteMany?: TrainingExerciseHistoryScalarWhereInput | TrainingExerciseHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentExercisesInput = {
    create?: XOR<UserCreateWithoutStudentExercisesInput, UserUncheckedCreateWithoutStudentExercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentExercisesInput
    connect?: UserWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutStudentExercisesInput = {
    create?: XOR<ExerciseCreateWithoutStudentExercisesInput, ExerciseUncheckedCreateWithoutStudentExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutStudentExercisesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutStudentExercisesNestedInput = {
    create?: XOR<UserCreateWithoutStudentExercisesInput, UserUncheckedCreateWithoutStudentExercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentExercisesInput
    upsert?: UserUpsertWithoutStudentExercisesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentExercisesInput, UserUpdateWithoutStudentExercisesInput>, UserUncheckedUpdateWithoutStudentExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutStudentExercisesNestedInput = {
    create?: XOR<ExerciseCreateWithoutStudentExercisesInput, ExerciseUncheckedCreateWithoutStudentExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutStudentExercisesInput
    upsert?: ExerciseUpsertWithoutStudentExercisesInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutStudentExercisesInput, ExerciseUpdateWithoutStudentExercisesInput>, ExerciseUncheckedUpdateWithoutStudentExercisesInput>
  }

  export type TrainingCreateNestedOneWithoutTrainingHistoryInput = {
    create?: XOR<TrainingCreateWithoutTrainingHistoryInput, TrainingUncheckedCreateWithoutTrainingHistoryInput>
    connectOrCreate?: TrainingCreateOrConnectWithoutTrainingHistoryInput
    connect?: TrainingWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TrainingUpdateOneWithoutTrainingHistoryNestedInput = {
    create?: XOR<TrainingCreateWithoutTrainingHistoryInput, TrainingUncheckedCreateWithoutTrainingHistoryInput>
    connectOrCreate?: TrainingCreateOrConnectWithoutTrainingHistoryInput
    upsert?: TrainingUpsertWithoutTrainingHistoryInput
    disconnect?: TrainingWhereInput | boolean
    delete?: TrainingWhereInput | boolean
    connect?: TrainingWhereUniqueInput
    update?: XOR<XOR<TrainingUpdateToOneWithWhereWithoutTrainingHistoryInput, TrainingUpdateWithoutTrainingHistoryInput>, TrainingUncheckedUpdateWithoutTrainingHistoryInput>
  }

  export type TrainingExerciseCreateNestedOneWithoutTrainingExerciseHistoryInput = {
    create?: XOR<TrainingExerciseCreateWithoutTrainingExerciseHistoryInput, TrainingExerciseUncheckedCreateWithoutTrainingExerciseHistoryInput>
    connectOrCreate?: TrainingExerciseCreateOrConnectWithoutTrainingExerciseHistoryInput
    connect?: TrainingExerciseWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutTrainingExerciseHistoryInput = {
    create?: XOR<ExerciseCreateWithoutTrainingExerciseHistoryInput, ExerciseUncheckedCreateWithoutTrainingExerciseHistoryInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutTrainingExerciseHistoryInput
    connect?: ExerciseWhereUniqueInput
  }

  export type TrainingExerciseUpdateOneRequiredWithoutTrainingExerciseHistoryNestedInput = {
    create?: XOR<TrainingExerciseCreateWithoutTrainingExerciseHistoryInput, TrainingExerciseUncheckedCreateWithoutTrainingExerciseHistoryInput>
    connectOrCreate?: TrainingExerciseCreateOrConnectWithoutTrainingExerciseHistoryInput
    upsert?: TrainingExerciseUpsertWithoutTrainingExerciseHistoryInput
    connect?: TrainingExerciseWhereUniqueInput
    update?: XOR<XOR<TrainingExerciseUpdateToOneWithWhereWithoutTrainingExerciseHistoryInput, TrainingExerciseUpdateWithoutTrainingExerciseHistoryInput>, TrainingExerciseUncheckedUpdateWithoutTrainingExerciseHistoryInput>
  }

  export type ExerciseUpdateOneWithoutTrainingExerciseHistoryNestedInput = {
    create?: XOR<ExerciseCreateWithoutTrainingExerciseHistoryInput, ExerciseUncheckedCreateWithoutTrainingExerciseHistoryInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutTrainingExerciseHistoryInput
    upsert?: ExerciseUpsertWithoutTrainingExerciseHistoryInput
    disconnect?: ExerciseWhereInput | boolean
    delete?: ExerciseWhereInput | boolean
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutTrainingExerciseHistoryInput, ExerciseUpdateWithoutTrainingExerciseHistoryInput>, ExerciseUncheckedUpdateWithoutTrainingExerciseHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumExerciseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseStatus | EnumExerciseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseStatus[]
    notIn?: $Enums.ExerciseStatus[]
    not?: NestedEnumExerciseStatusFilter<$PrismaModel> | $Enums.ExerciseStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedEnumExerciseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseStatus | EnumExerciseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseStatus[]
    notIn?: $Enums.ExerciseStatus[]
    not?: NestedEnumExerciseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseStatusFilter<$PrismaModel>
    _max?: NestedEnumExerciseStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TrainingPlanCreateWithoutStudentInput = {
    id?: string
    name: string
    isActive?: boolean | null
    objective?: string | null
    teacherId: string
    teacherName: string
    teacherEmail: string
    createdAt?: Date | string
    trainings?: TrainingCreateNestedManyWithoutTrainingPlanInput
  }

  export type TrainingPlanUncheckedCreateWithoutStudentInput = {
    id?: string
    name: string
    isActive?: boolean | null
    objective?: string | null
    teacherId: string
    teacherName: string
    teacherEmail: string
    createdAt?: Date | string
    trainings?: TrainingUncheckedCreateNestedManyWithoutTrainingPlanInput
  }

  export type TrainingPlanCreateOrConnectWithoutStudentInput = {
    where: TrainingPlanWhereUniqueInput
    create: XOR<TrainingPlanCreateWithoutStudentInput, TrainingPlanUncheckedCreateWithoutStudentInput>
  }

  export type TrainingPlanCreateManyStudentInputEnvelope = {
    data: TrainingPlanCreateManyStudentInput | TrainingPlanCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentExerciseCreateWithoutStudentInput = {
    weightInKg: number
    createdAt?: Date | string
    exercise: ExerciseCreateNestedOneWithoutStudentExercisesInput
  }

  export type StudentExerciseUncheckedCreateWithoutStudentInput = {
    exerciseId: string
    weightInKg: number
    createdAt?: Date | string
  }

  export type StudentExerciseCreateOrConnectWithoutStudentInput = {
    where: StudentExerciseWhereUniqueInput
    create: XOR<StudentExerciseCreateWithoutStudentInput, StudentExerciseUncheckedCreateWithoutStudentInput>
  }

  export type StudentExerciseCreateManyStudentInputEnvelope = {
    data: StudentExerciseCreateManyStudentInput | StudentExerciseCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type TrainingPlanUpsertWithWhereUniqueWithoutStudentInput = {
    where: TrainingPlanWhereUniqueInput
    update: XOR<TrainingPlanUpdateWithoutStudentInput, TrainingPlanUncheckedUpdateWithoutStudentInput>
    create: XOR<TrainingPlanCreateWithoutStudentInput, TrainingPlanUncheckedCreateWithoutStudentInput>
  }

  export type TrainingPlanUpdateWithWhereUniqueWithoutStudentInput = {
    where: TrainingPlanWhereUniqueInput
    data: XOR<TrainingPlanUpdateWithoutStudentInput, TrainingPlanUncheckedUpdateWithoutStudentInput>
  }

  export type TrainingPlanUpdateManyWithWhereWithoutStudentInput = {
    where: TrainingPlanScalarWhereInput
    data: XOR<TrainingPlanUpdateManyMutationInput, TrainingPlanUncheckedUpdateManyWithoutStudentInput>
  }

  export type TrainingPlanScalarWhereInput = {
    AND?: TrainingPlanScalarWhereInput | TrainingPlanScalarWhereInput[]
    OR?: TrainingPlanScalarWhereInput[]
    NOT?: TrainingPlanScalarWhereInput | TrainingPlanScalarWhereInput[]
    id?: StringFilter<"TrainingPlan"> | string
    name?: StringFilter<"TrainingPlan"> | string
    isActive?: BoolNullableFilter<"TrainingPlan"> | boolean | null
    objective?: StringNullableFilter<"TrainingPlan"> | string | null
    teacherId?: StringFilter<"TrainingPlan"> | string
    teacherName?: StringFilter<"TrainingPlan"> | string
    teacherEmail?: StringFilter<"TrainingPlan"> | string
    studentId?: StringFilter<"TrainingPlan"> | string
    createdAt?: DateTimeFilter<"TrainingPlan"> | Date | string
  }

  export type StudentExerciseUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentExerciseWhereUniqueInput
    update: XOR<StudentExerciseUpdateWithoutStudentInput, StudentExerciseUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentExerciseCreateWithoutStudentInput, StudentExerciseUncheckedCreateWithoutStudentInput>
  }

  export type StudentExerciseUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentExerciseWhereUniqueInput
    data: XOR<StudentExerciseUpdateWithoutStudentInput, StudentExerciseUncheckedUpdateWithoutStudentInput>
  }

  export type StudentExerciseUpdateManyWithWhereWithoutStudentInput = {
    where: StudentExerciseScalarWhereInput
    data: XOR<StudentExerciseUpdateManyMutationInput, StudentExerciseUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentExerciseScalarWhereInput = {
    AND?: StudentExerciseScalarWhereInput | StudentExerciseScalarWhereInput[]
    OR?: StudentExerciseScalarWhereInput[]
    NOT?: StudentExerciseScalarWhereInput | StudentExerciseScalarWhereInput[]
    id?: StringFilter<"StudentExercise"> | string
    exerciseId?: StringFilter<"StudentExercise"> | string
    weightInKg?: FloatFilter<"StudentExercise"> | number
    createdAt?: DateTimeFilter<"StudentExercise"> | Date | string
  }

  export type ExerciseCreateWithoutMuscleInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    studentExercises?: StudentExerciseCreateNestedManyWithoutExerciseInput
    trainingExerciseHistory?: TrainingExerciseHistoryCreateNestedManyWithoutExerciseInput
    trainingExercises?: TrainingExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutMuscleInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    studentExercises?: StudentExerciseUncheckedCreateNestedManyWithoutExerciseInput
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedCreateNestedManyWithoutExerciseInput
    trainingExercises?: TrainingExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutMuscleInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutMuscleInput, ExerciseUncheckedCreateWithoutMuscleInput>
  }

  export type ExerciseCreateManyMuscleInputEnvelope = {
    data: ExerciseCreateManyMuscleInput | ExerciseCreateManyMuscleInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseUpsertWithWhereUniqueWithoutMuscleInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutMuscleInput, ExerciseUncheckedUpdateWithoutMuscleInput>
    create: XOR<ExerciseCreateWithoutMuscleInput, ExerciseUncheckedCreateWithoutMuscleInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutMuscleInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutMuscleInput, ExerciseUncheckedUpdateWithoutMuscleInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutMuscleInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutMuscleInput>
  }

  export type ExerciseScalarWhereInput = {
    AND?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    OR?: ExerciseScalarWhereInput[]
    NOT?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    id?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    muscleId?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    image?: StringNullableFilter<"Exercise"> | string | null
    isActive?: BoolFilter<"Exercise"> | boolean
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
  }

  export type MuscleCreateWithoutExercisesInput = {
    id?: string
    name: string
    isActive?: boolean | null
    createdAt?: Date | string
  }

  export type MuscleUncheckedCreateWithoutExercisesInput = {
    id?: string
    name: string
    isActive?: boolean | null
    createdAt?: Date | string
  }

  export type MuscleCreateOrConnectWithoutExercisesInput = {
    where: MuscleWhereUniqueInput
    create: XOR<MuscleCreateWithoutExercisesInput, MuscleUncheckedCreateWithoutExercisesInput>
  }

  export type StudentExerciseCreateWithoutExerciseInput = {
    weightInKg: number
    createdAt?: Date | string
    student?: UserCreateNestedOneWithoutStudentExercisesInput
  }

  export type StudentExerciseUncheckedCreateWithoutExerciseInput = {
    id?: string
    weightInKg: number
    createdAt?: Date | string
  }

  export type StudentExerciseCreateOrConnectWithoutExerciseInput = {
    where: StudentExerciseWhereUniqueInput
    create: XOR<StudentExerciseCreateWithoutExerciseInput, StudentExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type StudentExerciseCreateManyExerciseInputEnvelope = {
    data: StudentExerciseCreateManyExerciseInput | StudentExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type TrainingExerciseHistoryCreateWithoutExerciseInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    trainingExercise: TrainingExerciseCreateNestedOneWithoutTrainingExerciseHistoryInput
  }

  export type TrainingExerciseHistoryUncheckedCreateWithoutExerciseInput = {
    id?: string
    trainingExerciseId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type TrainingExerciseHistoryCreateOrConnectWithoutExerciseInput = {
    where: TrainingExerciseHistoryWhereUniqueInput
    create: XOR<TrainingExerciseHistoryCreateWithoutExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutExerciseInput>
  }

  export type TrainingExerciseHistoryCreateManyExerciseInputEnvelope = {
    data: TrainingExerciseHistoryCreateManyExerciseInput | TrainingExerciseHistoryCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type TrainingExerciseCreateWithoutExerciseInput = {
    id?: string
    intervalInSeconds?: number | null
    status?: $Enums.ExerciseStatus
    order?: number
    isActive?: boolean | null
    createdAt?: Date | string
    training: TrainingCreateNestedOneWithoutTrainingExercisesInput
    trainingExerciseHistory?: TrainingExerciseHistoryCreateNestedManyWithoutTrainingExerciseInput
  }

  export type TrainingExerciseUncheckedCreateWithoutExerciseInput = {
    id?: string
    treiningId: string
    intervalInSeconds?: number | null
    status?: $Enums.ExerciseStatus
    order?: number
    isActive?: boolean | null
    createdAt?: Date | string
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedCreateNestedManyWithoutTrainingExerciseInput
  }

  export type TrainingExerciseCreateOrConnectWithoutExerciseInput = {
    where: TrainingExerciseWhereUniqueInput
    create: XOR<TrainingExerciseCreateWithoutExerciseInput, TrainingExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type TrainingExerciseCreateManyExerciseInputEnvelope = {
    data: TrainingExerciseCreateManyExerciseInput | TrainingExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type MuscleUpsertWithoutExercisesInput = {
    update: XOR<MuscleUpdateWithoutExercisesInput, MuscleUncheckedUpdateWithoutExercisesInput>
    create: XOR<MuscleCreateWithoutExercisesInput, MuscleUncheckedCreateWithoutExercisesInput>
    where?: MuscleWhereInput
  }

  export type MuscleUpdateToOneWithWhereWithoutExercisesInput = {
    where?: MuscleWhereInput
    data: XOR<MuscleUpdateWithoutExercisesInput, MuscleUncheckedUpdateWithoutExercisesInput>
  }

  export type MuscleUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MuscleUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: StudentExerciseWhereUniqueInput
    update: XOR<StudentExerciseUpdateWithoutExerciseInput, StudentExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<StudentExerciseCreateWithoutExerciseInput, StudentExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type StudentExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: StudentExerciseWhereUniqueInput
    data: XOR<StudentExerciseUpdateWithoutExerciseInput, StudentExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type StudentExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: StudentExerciseScalarWhereInput
    data: XOR<StudentExerciseUpdateManyMutationInput, StudentExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type TrainingExerciseHistoryUpsertWithWhereUniqueWithoutExerciseInput = {
    where: TrainingExerciseHistoryWhereUniqueInput
    update: XOR<TrainingExerciseHistoryUpdateWithoutExerciseInput, TrainingExerciseHistoryUncheckedUpdateWithoutExerciseInput>
    create: XOR<TrainingExerciseHistoryCreateWithoutExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutExerciseInput>
  }

  export type TrainingExerciseHistoryUpdateWithWhereUniqueWithoutExerciseInput = {
    where: TrainingExerciseHistoryWhereUniqueInput
    data: XOR<TrainingExerciseHistoryUpdateWithoutExerciseInput, TrainingExerciseHistoryUncheckedUpdateWithoutExerciseInput>
  }

  export type TrainingExerciseHistoryUpdateManyWithWhereWithoutExerciseInput = {
    where: TrainingExerciseHistoryScalarWhereInput
    data: XOR<TrainingExerciseHistoryUpdateManyMutationInput, TrainingExerciseHistoryUncheckedUpdateManyWithoutExerciseInput>
  }

  export type TrainingExerciseHistoryScalarWhereInput = {
    AND?: TrainingExerciseHistoryScalarWhereInput | TrainingExerciseHistoryScalarWhereInput[]
    OR?: TrainingExerciseHistoryScalarWhereInput[]
    NOT?: TrainingExerciseHistoryScalarWhereInput | TrainingExerciseHistoryScalarWhereInput[]
    id?: StringFilter<"TrainingExerciseHistory"> | string
    trainingExerciseId?: StringFilter<"TrainingExerciseHistory"> | string
    startDate?: DateTimeNullableFilter<"TrainingExerciseHistory"> | Date | string | null
    endDate?: DateTimeNullableFilter<"TrainingExerciseHistory"> | Date | string | null
    exerciseId?: StringNullableFilter<"TrainingExerciseHistory"> | string | null
  }

  export type TrainingExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: TrainingExerciseWhereUniqueInput
    update: XOR<TrainingExerciseUpdateWithoutExerciseInput, TrainingExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<TrainingExerciseCreateWithoutExerciseInput, TrainingExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type TrainingExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: TrainingExerciseWhereUniqueInput
    data: XOR<TrainingExerciseUpdateWithoutExerciseInput, TrainingExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type TrainingExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: TrainingExerciseScalarWhereInput
    data: XOR<TrainingExerciseUpdateManyMutationInput, TrainingExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type TrainingExerciseScalarWhereInput = {
    AND?: TrainingExerciseScalarWhereInput | TrainingExerciseScalarWhereInput[]
    OR?: TrainingExerciseScalarWhereInput[]
    NOT?: TrainingExerciseScalarWhereInput | TrainingExerciseScalarWhereInput[]
    id?: StringFilter<"TrainingExercise"> | string
    treiningId?: StringFilter<"TrainingExercise"> | string
    exerciseId?: StringFilter<"TrainingExercise"> | string
    intervalInSeconds?: IntNullableFilter<"TrainingExercise"> | number | null
    status?: EnumExerciseStatusFilter<"TrainingExercise"> | $Enums.ExerciseStatus
    order?: IntFilter<"TrainingExercise"> | number
    isActive?: BoolNullableFilter<"TrainingExercise"> | boolean | null
    createdAt?: DateTimeFilter<"TrainingExercise"> | Date | string
  }

  export type UserCreateWithoutTrainingPlansInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    isActive?: boolean
    isAdmin: boolean
    isTeacher: boolean
    dateOfBirth: Date | string
    gender: $Enums.Gender
    heightInMt?: number | null
    weightInKg?: number | null
    avatarBgColor: string
    createdAt?: Date | string
    studentExercises?: StudentExerciseCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutTrainingPlansInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    isActive?: boolean
    isAdmin: boolean
    isTeacher: boolean
    dateOfBirth: Date | string
    gender: $Enums.Gender
    heightInMt?: number | null
    weightInKg?: number | null
    avatarBgColor: string
    createdAt?: Date | string
    studentExercises?: StudentExerciseUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutTrainingPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrainingPlansInput, UserUncheckedCreateWithoutTrainingPlansInput>
  }

  export type TrainingCreateWithoutTrainingPlanInput = {
    id?: string
    name: string
    order?: number
    isInProgress?: boolean | null
    isRecommendedToDay?: boolean | null
    isActive?: boolean | null
    createdAt?: Date | string
    trainingHistory?: TrainingHistoryCreateNestedManyWithoutTrainingInput
    trainingExercises?: TrainingExerciseCreateNestedManyWithoutTrainingInput
  }

  export type TrainingUncheckedCreateWithoutTrainingPlanInput = {
    id?: string
    name: string
    order?: number
    isInProgress?: boolean | null
    isRecommendedToDay?: boolean | null
    isActive?: boolean | null
    createdAt?: Date | string
    trainingHistory?: TrainingHistoryUncheckedCreateNestedManyWithoutTrainingInput
    trainingExercises?: TrainingExerciseUncheckedCreateNestedManyWithoutTrainingInput
  }

  export type TrainingCreateOrConnectWithoutTrainingPlanInput = {
    where: TrainingWhereUniqueInput
    create: XOR<TrainingCreateWithoutTrainingPlanInput, TrainingUncheckedCreateWithoutTrainingPlanInput>
  }

  export type TrainingCreateManyTrainingPlanInputEnvelope = {
    data: TrainingCreateManyTrainingPlanInput | TrainingCreateManyTrainingPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTrainingPlansInput = {
    update: XOR<UserUpdateWithoutTrainingPlansInput, UserUncheckedUpdateWithoutTrainingPlansInput>
    create: XOR<UserCreateWithoutTrainingPlansInput, UserUncheckedCreateWithoutTrainingPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTrainingPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTrainingPlansInput, UserUncheckedUpdateWithoutTrainingPlansInput>
  }

  export type UserUpdateWithoutTrainingPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isTeacher?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    heightInMt?: NullableFloatFieldUpdateOperationsInput | number | null
    weightInKg?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarBgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentExercises?: StudentExerciseUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutTrainingPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isTeacher?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    heightInMt?: NullableFloatFieldUpdateOperationsInput | number | null
    weightInKg?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarBgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentExercises?: StudentExerciseUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TrainingUpsertWithWhereUniqueWithoutTrainingPlanInput = {
    where: TrainingWhereUniqueInput
    update: XOR<TrainingUpdateWithoutTrainingPlanInput, TrainingUncheckedUpdateWithoutTrainingPlanInput>
    create: XOR<TrainingCreateWithoutTrainingPlanInput, TrainingUncheckedCreateWithoutTrainingPlanInput>
  }

  export type TrainingUpdateWithWhereUniqueWithoutTrainingPlanInput = {
    where: TrainingWhereUniqueInput
    data: XOR<TrainingUpdateWithoutTrainingPlanInput, TrainingUncheckedUpdateWithoutTrainingPlanInput>
  }

  export type TrainingUpdateManyWithWhereWithoutTrainingPlanInput = {
    where: TrainingScalarWhereInput
    data: XOR<TrainingUpdateManyMutationInput, TrainingUncheckedUpdateManyWithoutTrainingPlanInput>
  }

  export type TrainingScalarWhereInput = {
    AND?: TrainingScalarWhereInput | TrainingScalarWhereInput[]
    OR?: TrainingScalarWhereInput[]
    NOT?: TrainingScalarWhereInput | TrainingScalarWhereInput[]
    id?: StringFilter<"Training"> | string
    name?: StringFilter<"Training"> | string
    order?: IntFilter<"Training"> | number
    trainingPlanId?: StringFilter<"Training"> | string
    isInProgress?: BoolNullableFilter<"Training"> | boolean | null
    isRecommendedToDay?: BoolNullableFilter<"Training"> | boolean | null
    isActive?: BoolNullableFilter<"Training"> | boolean | null
    createdAt?: DateTimeFilter<"Training"> | Date | string
  }

  export type TrainingPlanCreateWithoutTrainingsInput = {
    id?: string
    name: string
    isActive?: boolean | null
    objective?: string | null
    teacherId: string
    teacherName: string
    teacherEmail: string
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutTrainingPlansInput
  }

  export type TrainingPlanUncheckedCreateWithoutTrainingsInput = {
    id?: string
    name: string
    isActive?: boolean | null
    objective?: string | null
    teacherId: string
    teacherName: string
    teacherEmail: string
    studentId: string
    createdAt?: Date | string
  }

  export type TrainingPlanCreateOrConnectWithoutTrainingsInput = {
    where: TrainingPlanWhereUniqueInput
    create: XOR<TrainingPlanCreateWithoutTrainingsInput, TrainingPlanUncheckedCreateWithoutTrainingsInput>
  }

  export type TrainingHistoryCreateWithoutTrainingInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type TrainingHistoryUncheckedCreateWithoutTrainingInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type TrainingHistoryCreateOrConnectWithoutTrainingInput = {
    where: TrainingHistoryWhereUniqueInput
    create: XOR<TrainingHistoryCreateWithoutTrainingInput, TrainingHistoryUncheckedCreateWithoutTrainingInput>
  }

  export type TrainingHistoryCreateManyTrainingInputEnvelope = {
    data: TrainingHistoryCreateManyTrainingInput | TrainingHistoryCreateManyTrainingInput[]
    skipDuplicates?: boolean
  }

  export type TrainingExerciseCreateWithoutTrainingInput = {
    id?: string
    intervalInSeconds?: number | null
    status?: $Enums.ExerciseStatus
    order?: number
    isActive?: boolean | null
    createdAt?: Date | string
    exercise: ExerciseCreateNestedOneWithoutTrainingExercisesInput
    trainingExerciseHistory?: TrainingExerciseHistoryCreateNestedManyWithoutTrainingExerciseInput
  }

  export type TrainingExerciseUncheckedCreateWithoutTrainingInput = {
    id?: string
    exerciseId: string
    intervalInSeconds?: number | null
    status?: $Enums.ExerciseStatus
    order?: number
    isActive?: boolean | null
    createdAt?: Date | string
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedCreateNestedManyWithoutTrainingExerciseInput
  }

  export type TrainingExerciseCreateOrConnectWithoutTrainingInput = {
    where: TrainingExerciseWhereUniqueInput
    create: XOR<TrainingExerciseCreateWithoutTrainingInput, TrainingExerciseUncheckedCreateWithoutTrainingInput>
  }

  export type TrainingExerciseCreateManyTrainingInputEnvelope = {
    data: TrainingExerciseCreateManyTrainingInput | TrainingExerciseCreateManyTrainingInput[]
    skipDuplicates?: boolean
  }

  export type TrainingPlanUpsertWithoutTrainingsInput = {
    update: XOR<TrainingPlanUpdateWithoutTrainingsInput, TrainingPlanUncheckedUpdateWithoutTrainingsInput>
    create: XOR<TrainingPlanCreateWithoutTrainingsInput, TrainingPlanUncheckedCreateWithoutTrainingsInput>
    where?: TrainingPlanWhereInput
  }

  export type TrainingPlanUpdateToOneWithWhereWithoutTrainingsInput = {
    where?: TrainingPlanWhereInput
    data: XOR<TrainingPlanUpdateWithoutTrainingsInput, TrainingPlanUncheckedUpdateWithoutTrainingsInput>
  }

  export type TrainingPlanUpdateWithoutTrainingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutTrainingPlansNestedInput
  }

  export type TrainingPlanUncheckedUpdateWithoutTrainingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingHistoryUpsertWithWhereUniqueWithoutTrainingInput = {
    where: TrainingHistoryWhereUniqueInput
    update: XOR<TrainingHistoryUpdateWithoutTrainingInput, TrainingHistoryUncheckedUpdateWithoutTrainingInput>
    create: XOR<TrainingHistoryCreateWithoutTrainingInput, TrainingHistoryUncheckedCreateWithoutTrainingInput>
  }

  export type TrainingHistoryUpdateWithWhereUniqueWithoutTrainingInput = {
    where: TrainingHistoryWhereUniqueInput
    data: XOR<TrainingHistoryUpdateWithoutTrainingInput, TrainingHistoryUncheckedUpdateWithoutTrainingInput>
  }

  export type TrainingHistoryUpdateManyWithWhereWithoutTrainingInput = {
    where: TrainingHistoryScalarWhereInput
    data: XOR<TrainingHistoryUpdateManyMutationInput, TrainingHistoryUncheckedUpdateManyWithoutTrainingInput>
  }

  export type TrainingHistoryScalarWhereInput = {
    AND?: TrainingHistoryScalarWhereInput | TrainingHistoryScalarWhereInput[]
    OR?: TrainingHistoryScalarWhereInput[]
    NOT?: TrainingHistoryScalarWhereInput | TrainingHistoryScalarWhereInput[]
    id?: StringFilter<"TrainingHistory"> | string
    startDate?: DateTimeNullableFilter<"TrainingHistory"> | Date | string | null
    endDate?: DateTimeNullableFilter<"TrainingHistory"> | Date | string | null
    trainingId?: StringNullableFilter<"TrainingHistory"> | string | null
  }

  export type TrainingExerciseUpsertWithWhereUniqueWithoutTrainingInput = {
    where: TrainingExerciseWhereUniqueInput
    update: XOR<TrainingExerciseUpdateWithoutTrainingInput, TrainingExerciseUncheckedUpdateWithoutTrainingInput>
    create: XOR<TrainingExerciseCreateWithoutTrainingInput, TrainingExerciseUncheckedCreateWithoutTrainingInput>
  }

  export type TrainingExerciseUpdateWithWhereUniqueWithoutTrainingInput = {
    where: TrainingExerciseWhereUniqueInput
    data: XOR<TrainingExerciseUpdateWithoutTrainingInput, TrainingExerciseUncheckedUpdateWithoutTrainingInput>
  }

  export type TrainingExerciseUpdateManyWithWhereWithoutTrainingInput = {
    where: TrainingExerciseScalarWhereInput
    data: XOR<TrainingExerciseUpdateManyMutationInput, TrainingExerciseUncheckedUpdateManyWithoutTrainingInput>
  }

  export type TrainingCreateWithoutTrainingExercisesInput = {
    id?: string
    name: string
    order?: number
    isInProgress?: boolean | null
    isRecommendedToDay?: boolean | null
    isActive?: boolean | null
    createdAt?: Date | string
    trainingPlan: TrainingPlanCreateNestedOneWithoutTrainingsInput
    trainingHistory?: TrainingHistoryCreateNestedManyWithoutTrainingInput
  }

  export type TrainingUncheckedCreateWithoutTrainingExercisesInput = {
    id?: string
    name: string
    order?: number
    trainingPlanId: string
    isInProgress?: boolean | null
    isRecommendedToDay?: boolean | null
    isActive?: boolean | null
    createdAt?: Date | string
    trainingHistory?: TrainingHistoryUncheckedCreateNestedManyWithoutTrainingInput
  }

  export type TrainingCreateOrConnectWithoutTrainingExercisesInput = {
    where: TrainingWhereUniqueInput
    create: XOR<TrainingCreateWithoutTrainingExercisesInput, TrainingUncheckedCreateWithoutTrainingExercisesInput>
  }

  export type ExerciseCreateWithoutTrainingExercisesInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    muscle: MuscleCreateNestedOneWithoutExercisesInput
    studentExercises?: StudentExerciseCreateNestedManyWithoutExerciseInput
    trainingExerciseHistory?: TrainingExerciseHistoryCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutTrainingExercisesInput = {
    id?: string
    name: string
    muscleId: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    studentExercises?: StudentExerciseUncheckedCreateNestedManyWithoutExerciseInput
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutTrainingExercisesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutTrainingExercisesInput, ExerciseUncheckedCreateWithoutTrainingExercisesInput>
  }

  export type TrainingExerciseHistoryCreateWithoutTrainingExerciseInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    Exercise?: ExerciseCreateNestedOneWithoutTrainingExerciseHistoryInput
  }

  export type TrainingExerciseHistoryUncheckedCreateWithoutTrainingExerciseInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    exerciseId?: string | null
  }

  export type TrainingExerciseHistoryCreateOrConnectWithoutTrainingExerciseInput = {
    where: TrainingExerciseHistoryWhereUniqueInput
    create: XOR<TrainingExerciseHistoryCreateWithoutTrainingExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutTrainingExerciseInput>
  }

  export type TrainingExerciseHistoryCreateManyTrainingExerciseInputEnvelope = {
    data: TrainingExerciseHistoryCreateManyTrainingExerciseInput | TrainingExerciseHistoryCreateManyTrainingExerciseInput[]
    skipDuplicates?: boolean
  }

  export type TrainingUpsertWithoutTrainingExercisesInput = {
    update: XOR<TrainingUpdateWithoutTrainingExercisesInput, TrainingUncheckedUpdateWithoutTrainingExercisesInput>
    create: XOR<TrainingCreateWithoutTrainingExercisesInput, TrainingUncheckedCreateWithoutTrainingExercisesInput>
    where?: TrainingWhereInput
  }

  export type TrainingUpdateToOneWithWhereWithoutTrainingExercisesInput = {
    where?: TrainingWhereInput
    data: XOR<TrainingUpdateWithoutTrainingExercisesInput, TrainingUncheckedUpdateWithoutTrainingExercisesInput>
  }

  export type TrainingUpdateWithoutTrainingExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isInProgress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRecommendedToDay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlan?: TrainingPlanUpdateOneRequiredWithoutTrainingsNestedInput
    trainingHistory?: TrainingHistoryUpdateManyWithoutTrainingNestedInput
  }

  export type TrainingUncheckedUpdateWithoutTrainingExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    isInProgress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRecommendedToDay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingHistory?: TrainingHistoryUncheckedUpdateManyWithoutTrainingNestedInput
  }

  export type ExerciseUpsertWithoutTrainingExercisesInput = {
    update: XOR<ExerciseUpdateWithoutTrainingExercisesInput, ExerciseUncheckedUpdateWithoutTrainingExercisesInput>
    create: XOR<ExerciseCreateWithoutTrainingExercisesInput, ExerciseUncheckedCreateWithoutTrainingExercisesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutTrainingExercisesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutTrainingExercisesInput, ExerciseUncheckedUpdateWithoutTrainingExercisesInput>
  }

  export type ExerciseUpdateWithoutTrainingExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    muscle?: MuscleUpdateOneRequiredWithoutExercisesNestedInput
    studentExercises?: StudentExerciseUpdateManyWithoutExerciseNestedInput
    trainingExerciseHistory?: TrainingExerciseHistoryUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutTrainingExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentExercises?: StudentExerciseUncheckedUpdateManyWithoutExerciseNestedInput
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type TrainingExerciseHistoryUpsertWithWhereUniqueWithoutTrainingExerciseInput = {
    where: TrainingExerciseHistoryWhereUniqueInput
    update: XOR<TrainingExerciseHistoryUpdateWithoutTrainingExerciseInput, TrainingExerciseHistoryUncheckedUpdateWithoutTrainingExerciseInput>
    create: XOR<TrainingExerciseHistoryCreateWithoutTrainingExerciseInput, TrainingExerciseHistoryUncheckedCreateWithoutTrainingExerciseInput>
  }

  export type TrainingExerciseHistoryUpdateWithWhereUniqueWithoutTrainingExerciseInput = {
    where: TrainingExerciseHistoryWhereUniqueInput
    data: XOR<TrainingExerciseHistoryUpdateWithoutTrainingExerciseInput, TrainingExerciseHistoryUncheckedUpdateWithoutTrainingExerciseInput>
  }

  export type TrainingExerciseHistoryUpdateManyWithWhereWithoutTrainingExerciseInput = {
    where: TrainingExerciseHistoryScalarWhereInput
    data: XOR<TrainingExerciseHistoryUpdateManyMutationInput, TrainingExerciseHistoryUncheckedUpdateManyWithoutTrainingExerciseInput>
  }

  export type UserCreateWithoutStudentExercisesInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    isActive?: boolean
    isAdmin: boolean
    isTeacher: boolean
    dateOfBirth: Date | string
    gender: $Enums.Gender
    heightInMt?: number | null
    weightInKg?: number | null
    avatarBgColor: string
    createdAt?: Date | string
    trainingPlans?: TrainingPlanCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutStudentExercisesInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    isActive?: boolean
    isAdmin: boolean
    isTeacher: boolean
    dateOfBirth: Date | string
    gender: $Enums.Gender
    heightInMt?: number | null
    weightInKg?: number | null
    avatarBgColor: string
    createdAt?: Date | string
    trainingPlans?: TrainingPlanUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutStudentExercisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentExercisesInput, UserUncheckedCreateWithoutStudentExercisesInput>
  }

  export type ExerciseCreateWithoutStudentExercisesInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    muscle: MuscleCreateNestedOneWithoutExercisesInput
    trainingExerciseHistory?: TrainingExerciseHistoryCreateNestedManyWithoutExerciseInput
    trainingExercises?: TrainingExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutStudentExercisesInput = {
    id?: string
    name: string
    muscleId: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedCreateNestedManyWithoutExerciseInput
    trainingExercises?: TrainingExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutStudentExercisesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutStudentExercisesInput, ExerciseUncheckedCreateWithoutStudentExercisesInput>
  }

  export type UserUpsertWithoutStudentExercisesInput = {
    update: XOR<UserUpdateWithoutStudentExercisesInput, UserUncheckedUpdateWithoutStudentExercisesInput>
    create: XOR<UserCreateWithoutStudentExercisesInput, UserUncheckedCreateWithoutStudentExercisesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentExercisesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentExercisesInput, UserUncheckedUpdateWithoutStudentExercisesInput>
  }

  export type UserUpdateWithoutStudentExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isTeacher?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    heightInMt?: NullableFloatFieldUpdateOperationsInput | number | null
    weightInKg?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarBgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlans?: TrainingPlanUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isTeacher?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    heightInMt?: NullableFloatFieldUpdateOperationsInput | number | null
    weightInKg?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarBgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlans?: TrainingPlanUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ExerciseUpsertWithoutStudentExercisesInput = {
    update: XOR<ExerciseUpdateWithoutStudentExercisesInput, ExerciseUncheckedUpdateWithoutStudentExercisesInput>
    create: XOR<ExerciseCreateWithoutStudentExercisesInput, ExerciseUncheckedCreateWithoutStudentExercisesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutStudentExercisesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutStudentExercisesInput, ExerciseUncheckedUpdateWithoutStudentExercisesInput>
  }

  export type ExerciseUpdateWithoutStudentExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    muscle?: MuscleUpdateOneRequiredWithoutExercisesNestedInput
    trainingExerciseHistory?: TrainingExerciseHistoryUpdateManyWithoutExerciseNestedInput
    trainingExercises?: TrainingExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutStudentExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedUpdateManyWithoutExerciseNestedInput
    trainingExercises?: TrainingExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type TrainingCreateWithoutTrainingHistoryInput = {
    id?: string
    name: string
    order?: number
    isInProgress?: boolean | null
    isRecommendedToDay?: boolean | null
    isActive?: boolean | null
    createdAt?: Date | string
    trainingPlan: TrainingPlanCreateNestedOneWithoutTrainingsInput
    trainingExercises?: TrainingExerciseCreateNestedManyWithoutTrainingInput
  }

  export type TrainingUncheckedCreateWithoutTrainingHistoryInput = {
    id?: string
    name: string
    order?: number
    trainingPlanId: string
    isInProgress?: boolean | null
    isRecommendedToDay?: boolean | null
    isActive?: boolean | null
    createdAt?: Date | string
    trainingExercises?: TrainingExerciseUncheckedCreateNestedManyWithoutTrainingInput
  }

  export type TrainingCreateOrConnectWithoutTrainingHistoryInput = {
    where: TrainingWhereUniqueInput
    create: XOR<TrainingCreateWithoutTrainingHistoryInput, TrainingUncheckedCreateWithoutTrainingHistoryInput>
  }

  export type TrainingUpsertWithoutTrainingHistoryInput = {
    update: XOR<TrainingUpdateWithoutTrainingHistoryInput, TrainingUncheckedUpdateWithoutTrainingHistoryInput>
    create: XOR<TrainingCreateWithoutTrainingHistoryInput, TrainingUncheckedCreateWithoutTrainingHistoryInput>
    where?: TrainingWhereInput
  }

  export type TrainingUpdateToOneWithWhereWithoutTrainingHistoryInput = {
    where?: TrainingWhereInput
    data: XOR<TrainingUpdateWithoutTrainingHistoryInput, TrainingUncheckedUpdateWithoutTrainingHistoryInput>
  }

  export type TrainingUpdateWithoutTrainingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isInProgress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRecommendedToDay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlan?: TrainingPlanUpdateOneRequiredWithoutTrainingsNestedInput
    trainingExercises?: TrainingExerciseUpdateManyWithoutTrainingNestedInput
  }

  export type TrainingUncheckedUpdateWithoutTrainingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    isInProgress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRecommendedToDay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingExercises?: TrainingExerciseUncheckedUpdateManyWithoutTrainingNestedInput
  }

  export type TrainingExerciseCreateWithoutTrainingExerciseHistoryInput = {
    id?: string
    intervalInSeconds?: number | null
    status?: $Enums.ExerciseStatus
    order?: number
    isActive?: boolean | null
    createdAt?: Date | string
    training: TrainingCreateNestedOneWithoutTrainingExercisesInput
    exercise: ExerciseCreateNestedOneWithoutTrainingExercisesInput
  }

  export type TrainingExerciseUncheckedCreateWithoutTrainingExerciseHistoryInput = {
    id?: string
    treiningId: string
    exerciseId: string
    intervalInSeconds?: number | null
    status?: $Enums.ExerciseStatus
    order?: number
    isActive?: boolean | null
    createdAt?: Date | string
  }

  export type TrainingExerciseCreateOrConnectWithoutTrainingExerciseHistoryInput = {
    where: TrainingExerciseWhereUniqueInput
    create: XOR<TrainingExerciseCreateWithoutTrainingExerciseHistoryInput, TrainingExerciseUncheckedCreateWithoutTrainingExerciseHistoryInput>
  }

  export type ExerciseCreateWithoutTrainingExerciseHistoryInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    muscle: MuscleCreateNestedOneWithoutExercisesInput
    studentExercises?: StudentExerciseCreateNestedManyWithoutExerciseInput
    trainingExercises?: TrainingExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutTrainingExerciseHistoryInput = {
    id?: string
    name: string
    muscleId: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    studentExercises?: StudentExerciseUncheckedCreateNestedManyWithoutExerciseInput
    trainingExercises?: TrainingExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutTrainingExerciseHistoryInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutTrainingExerciseHistoryInput, ExerciseUncheckedCreateWithoutTrainingExerciseHistoryInput>
  }

  export type TrainingExerciseUpsertWithoutTrainingExerciseHistoryInput = {
    update: XOR<TrainingExerciseUpdateWithoutTrainingExerciseHistoryInput, TrainingExerciseUncheckedUpdateWithoutTrainingExerciseHistoryInput>
    create: XOR<TrainingExerciseCreateWithoutTrainingExerciseHistoryInput, TrainingExerciseUncheckedCreateWithoutTrainingExerciseHistoryInput>
    where?: TrainingExerciseWhereInput
  }

  export type TrainingExerciseUpdateToOneWithWhereWithoutTrainingExerciseHistoryInput = {
    where?: TrainingExerciseWhereInput
    data: XOR<TrainingExerciseUpdateWithoutTrainingExerciseHistoryInput, TrainingExerciseUncheckedUpdateWithoutTrainingExerciseHistoryInput>
  }

  export type TrainingExerciseUpdateWithoutTrainingExerciseHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    training?: TrainingUpdateOneRequiredWithoutTrainingExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutTrainingExercisesNestedInput
  }

  export type TrainingExerciseUncheckedUpdateWithoutTrainingExerciseHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    treiningId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUpsertWithoutTrainingExerciseHistoryInput = {
    update: XOR<ExerciseUpdateWithoutTrainingExerciseHistoryInput, ExerciseUncheckedUpdateWithoutTrainingExerciseHistoryInput>
    create: XOR<ExerciseCreateWithoutTrainingExerciseHistoryInput, ExerciseUncheckedCreateWithoutTrainingExerciseHistoryInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutTrainingExerciseHistoryInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutTrainingExerciseHistoryInput, ExerciseUncheckedUpdateWithoutTrainingExerciseHistoryInput>
  }

  export type ExerciseUpdateWithoutTrainingExerciseHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    muscle?: MuscleUpdateOneRequiredWithoutExercisesNestedInput
    studentExercises?: StudentExerciseUpdateManyWithoutExerciseNestedInput
    trainingExercises?: TrainingExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutTrainingExerciseHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentExercises?: StudentExerciseUncheckedUpdateManyWithoutExerciseNestedInput
    trainingExercises?: TrainingExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type TrainingPlanCreateManyStudentInput = {
    id?: string
    name: string
    isActive?: boolean | null
    objective?: string | null
    teacherId: string
    teacherName: string
    teacherEmail: string
    createdAt?: Date | string
  }

  export type StudentExerciseCreateManyStudentInput = {
    exerciseId: string
    weightInKg: number
    createdAt?: Date | string
  }

  export type TrainingPlanUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUpdateManyWithoutTrainingPlanNestedInput
  }

  export type TrainingPlanUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUncheckedUpdateManyWithoutTrainingPlanNestedInput
  }

  export type TrainingPlanUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    teacherEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentExerciseUpdateWithoutStudentInput = {
    weightInKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutStudentExercisesNestedInput
  }

  export type StudentExerciseUncheckedUpdateWithoutStudentInput = {
    exerciseId?: StringFieldUpdateOperationsInput | string
    weightInKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentExerciseUncheckedUpdateManyWithoutStudentInput = {
    exerciseId?: StringFieldUpdateOperationsInput | string
    weightInKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateManyMuscleInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ExerciseUpdateWithoutMuscleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentExercises?: StudentExerciseUpdateManyWithoutExerciseNestedInput
    trainingExerciseHistory?: TrainingExerciseHistoryUpdateManyWithoutExerciseNestedInput
    trainingExercises?: TrainingExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutMuscleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentExercises?: StudentExerciseUncheckedUpdateManyWithoutExerciseNestedInput
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedUpdateManyWithoutExerciseNestedInput
    trainingExercises?: TrainingExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutMuscleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentExerciseCreateManyExerciseInput = {
    id?: string
    weightInKg: number
    createdAt?: Date | string
  }

  export type TrainingExerciseHistoryCreateManyExerciseInput = {
    id?: string
    trainingExerciseId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type TrainingExerciseCreateManyExerciseInput = {
    id?: string
    treiningId: string
    intervalInSeconds?: number | null
    status?: $Enums.ExerciseStatus
    order?: number
    isActive?: boolean | null
    createdAt?: Date | string
  }

  export type StudentExerciseUpdateWithoutExerciseInput = {
    weightInKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentExercisesNestedInput
  }

  export type StudentExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    weightInKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    weightInKg?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingExerciseHistoryUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainingExercise?: TrainingExerciseUpdateOneRequiredWithoutTrainingExerciseHistoryNestedInput
  }

  export type TrainingExerciseHistoryUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingExerciseId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrainingExerciseHistoryUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingExerciseId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrainingExerciseUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    training?: TrainingUpdateOneRequiredWithoutTrainingExercisesNestedInput
    trainingExerciseHistory?: TrainingExerciseHistoryUpdateManyWithoutTrainingExerciseNestedInput
  }

  export type TrainingExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    treiningId?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedUpdateManyWithoutTrainingExerciseNestedInput
  }

  export type TrainingExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    treiningId?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingCreateManyTrainingPlanInput = {
    id?: string
    name: string
    order?: number
    isInProgress?: boolean | null
    isRecommendedToDay?: boolean | null
    isActive?: boolean | null
    createdAt?: Date | string
  }

  export type TrainingUpdateWithoutTrainingPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isInProgress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRecommendedToDay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingHistory?: TrainingHistoryUpdateManyWithoutTrainingNestedInput
    trainingExercises?: TrainingExerciseUpdateManyWithoutTrainingNestedInput
  }

  export type TrainingUncheckedUpdateWithoutTrainingPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isInProgress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRecommendedToDay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingHistory?: TrainingHistoryUncheckedUpdateManyWithoutTrainingNestedInput
    trainingExercises?: TrainingExerciseUncheckedUpdateManyWithoutTrainingNestedInput
  }

  export type TrainingUncheckedUpdateManyWithoutTrainingPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isInProgress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRecommendedToDay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingHistoryCreateManyTrainingInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type TrainingExerciseCreateManyTrainingInput = {
    id?: string
    exerciseId: string
    intervalInSeconds?: number | null
    status?: $Enums.ExerciseStatus
    order?: number
    isActive?: boolean | null
    createdAt?: Date | string
  }

  export type TrainingHistoryUpdateWithoutTrainingInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrainingHistoryUncheckedUpdateWithoutTrainingInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrainingHistoryUncheckedUpdateManyWithoutTrainingInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrainingExerciseUpdateWithoutTrainingInput = {
    id?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutTrainingExercisesNestedInput
    trainingExerciseHistory?: TrainingExerciseHistoryUpdateManyWithoutTrainingExerciseNestedInput
  }

  export type TrainingExerciseUncheckedUpdateWithoutTrainingInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingExerciseHistory?: TrainingExerciseHistoryUncheckedUpdateManyWithoutTrainingExerciseNestedInput
  }

  export type TrainingExerciseUncheckedUpdateManyWithoutTrainingInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    intervalInSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumExerciseStatusFieldUpdateOperationsInput | $Enums.ExerciseStatus
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingExerciseHistoryCreateManyTrainingExerciseInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    exerciseId?: string | null
  }

  export type TrainingExerciseHistoryUpdateWithoutTrainingExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Exercise?: ExerciseUpdateOneWithoutTrainingExerciseHistoryNestedInput
  }

  export type TrainingExerciseHistoryUncheckedUpdateWithoutTrainingExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrainingExerciseHistoryUncheckedUpdateManyWithoutTrainingExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MuscleCountOutputTypeDefaultArgs instead
     */
    export type MuscleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MuscleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExerciseCountOutputTypeDefaultArgs instead
     */
    export type ExerciseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExerciseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainingPlanCountOutputTypeDefaultArgs instead
     */
    export type TrainingPlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainingPlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainingCountOutputTypeDefaultArgs instead
     */
    export type TrainingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainingExerciseCountOutputTypeDefaultArgs instead
     */
    export type TrainingExerciseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainingExerciseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MuscleDefaultArgs instead
     */
    export type MuscleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MuscleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExerciseDefaultArgs instead
     */
    export type ExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExerciseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainingPlanDefaultArgs instead
     */
    export type TrainingPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainingPlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainingDefaultArgs instead
     */
    export type TrainingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainingExerciseDefaultArgs instead
     */
    export type TrainingExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainingExerciseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentExerciseDefaultArgs instead
     */
    export type StudentExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentExerciseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainingHistoryDefaultArgs instead
     */
    export type TrainingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainingHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainingExerciseHistoryDefaultArgs instead
     */
    export type TrainingExerciseHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainingExerciseHistoryDefaultArgs<ExtArgs>

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