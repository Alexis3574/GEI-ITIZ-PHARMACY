
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
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model configuracion
 * 
 */
export type configuracion = $Result.DefaultSelection<Prisma.$configuracionPayload>
/**
 * Model productos
 * 
 */
export type productos = $Result.DefaultSelection<Prisma.$productosPayload>
/**
 * Model proveedores
 * 
 */
export type proveedores = $Result.DefaultSelection<Prisma.$proveedoresPayload>
/**
 * Model ventas
 * 
 */
export type ventas = $Result.DefaultSelection<Prisma.$ventasPayload>
/**
 * Model detalleventas
 * 
 */
export type detalleventas = $Result.DefaultSelection<Prisma.$detalleventasPayload>
/**
 * Model facturas
 * 
 */
export type facturas = $Result.DefaultSelection<Prisma.$facturasPayload>
/**
 * Model factura_items
 * 
 */
export type factura_items = $Result.DefaultSelection<Prisma.$factura_itemsPayload>
/**
 * Model movimientosinventario
 * 
 */
export type movimientosinventario = $Result.DefaultSelection<Prisma.$movimientosinventarioPayload>
/**
 * Model reportes
 * 
 */
export type reportes = $Result.DefaultSelection<Prisma.$reportesPayload>
/**
 * Model Carrito
 * 
 */
export type Carrito = $Result.DefaultSelection<Prisma.$CarritoPayload>
/**
 * Model CarritoItem
 * 
 */
export type CarritoItem = $Result.DefaultSelection<Prisma.$CarritoItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  administrador: 'administrador',
  usuario: 'usuario'
};

export type Rol = (typeof Rol)[keyof typeof Rol]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuarios.findMany()
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
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracion`: Exposes CRUD operations for the **configuracion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracions
    * const configuracions = await prisma.configuracion.findMany()
    * ```
    */
  get configuracion(): Prisma.configuracionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.productosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proveedores`: Exposes CRUD operations for the **proveedores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proveedores
    * const proveedores = await prisma.proveedores.findMany()
    * ```
    */
  get proveedores(): Prisma.proveedoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ventas`: Exposes CRUD operations for the **ventas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.ventas.findMany()
    * ```
    */
  get ventas(): Prisma.ventasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleventas`: Exposes CRUD operations for the **detalleventas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalleventas
    * const detalleventas = await prisma.detalleventas.findMany()
    * ```
    */
  get detalleventas(): Prisma.detalleventasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facturas`: Exposes CRUD operations for the **facturas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facturas
    * const facturas = await prisma.facturas.findMany()
    * ```
    */
  get facturas(): Prisma.facturasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factura_items`: Exposes CRUD operations for the **factura_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Factura_items
    * const factura_items = await prisma.factura_items.findMany()
    * ```
    */
  get factura_items(): Prisma.factura_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimientosinventario`: Exposes CRUD operations for the **movimientosinventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimientosinventarios
    * const movimientosinventarios = await prisma.movimientosinventario.findMany()
    * ```
    */
  get movimientosinventario(): Prisma.movimientosinventarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportes`: Exposes CRUD operations for the **reportes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reportes
    * const reportes = await prisma.reportes.findMany()
    * ```
    */
  get reportes(): Prisma.reportesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrito`: Exposes CRUD operations for the **Carrito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carritos
    * const carritos = await prisma.carrito.findMany()
    * ```
    */
  get carrito(): Prisma.CarritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carritoItem`: Exposes CRUD operations for the **CarritoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarritoItems
    * const carritoItems = await prisma.carritoItem.findMany()
    * ```
    */
  get carritoItem(): Prisma.CarritoItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    usuarios: 'usuarios',
    configuracion: 'configuracion',
    productos: 'productos',
    proveedores: 'proveedores',
    ventas: 'ventas',
    detalleventas: 'detalleventas',
    facturas: 'facturas',
    factura_items: 'factura_items',
    movimientosinventario: 'movimientosinventario',
    reportes: 'reportes',
    Carrito: 'Carrito',
    CarritoItem: 'CarritoItem'
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
      modelProps: "usuarios" | "configuracion" | "productos" | "proveedores" | "ventas" | "detalleventas" | "facturas" | "factura_items" | "movimientosinventario" | "reportes" | "carrito" | "carritoItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      configuracion: {
        payload: Prisma.$configuracionPayload<ExtArgs>
        fields: Prisma.configuracionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.configuracionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.configuracionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionPayload>
          }
          findFirst: {
            args: Prisma.configuracionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.configuracionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionPayload>
          }
          findMany: {
            args: Prisma.configuracionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionPayload>[]
          }
          create: {
            args: Prisma.configuracionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionPayload>
          }
          createMany: {
            args: Prisma.configuracionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.configuracionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionPayload>[]
          }
          delete: {
            args: Prisma.configuracionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionPayload>
          }
          update: {
            args: Prisma.configuracionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionPayload>
          }
          deleteMany: {
            args: Prisma.configuracionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.configuracionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.configuracionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionPayload>[]
          }
          upsert: {
            args: Prisma.configuracionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracion>
          }
          groupBy: {
            args: Prisma.configuracionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionGroupByOutputType>[]
          }
          count: {
            args: Prisma.configuracionCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionCountAggregateOutputType> | number
          }
        }
      }
      productos: {
        payload: Prisma.$productosPayload<ExtArgs>
        fields: Prisma.productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findFirst: {
            args: Prisma.productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findMany: {
            args: Prisma.productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          create: {
            args: Prisma.productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          createMany: {
            args: Prisma.productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          delete: {
            args: Prisma.productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          update: {
            args: Prisma.productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          deleteMany: {
            args: Prisma.productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          upsert: {
            args: Prisma.productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.productosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
          }
        }
      }
      proveedores: {
        payload: Prisma.$proveedoresPayload<ExtArgs>
        fields: Prisma.proveedoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.proveedoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.proveedoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          findFirst: {
            args: Prisma.proveedoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.proveedoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          findMany: {
            args: Prisma.proveedoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>[]
          }
          create: {
            args: Prisma.proveedoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          createMany: {
            args: Prisma.proveedoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.proveedoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>[]
          }
          delete: {
            args: Prisma.proveedoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          update: {
            args: Prisma.proveedoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          deleteMany: {
            args: Prisma.proveedoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.proveedoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.proveedoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>[]
          }
          upsert: {
            args: Prisma.proveedoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          aggregate: {
            args: Prisma.ProveedoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProveedores>
          }
          groupBy: {
            args: Prisma.proveedoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProveedoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.proveedoresCountArgs<ExtArgs>
            result: $Utils.Optional<ProveedoresCountAggregateOutputType> | number
          }
        }
      }
      ventas: {
        payload: Prisma.$ventasPayload<ExtArgs>
        fields: Prisma.ventasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ventasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ventasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          findFirst: {
            args: Prisma.ventasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ventasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          findMany: {
            args: Prisma.ventasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>[]
          }
          create: {
            args: Prisma.ventasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          createMany: {
            args: Prisma.ventasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ventasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>[]
          }
          delete: {
            args: Prisma.ventasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          update: {
            args: Prisma.ventasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          deleteMany: {
            args: Prisma.ventasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ventasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ventasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>[]
          }
          upsert: {
            args: Prisma.ventasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          aggregate: {
            args: Prisma.VentasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVentas>
          }
          groupBy: {
            args: Prisma.ventasGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ventasCountArgs<ExtArgs>
            result: $Utils.Optional<VentasCountAggregateOutputType> | number
          }
        }
      }
      detalleventas: {
        payload: Prisma.$detalleventasPayload<ExtArgs>
        fields: Prisma.detalleventasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalleventasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalleventasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventasPayload>
          }
          findFirst: {
            args: Prisma.detalleventasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalleventasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventasPayload>
          }
          findMany: {
            args: Prisma.detalleventasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventasPayload>[]
          }
          create: {
            args: Prisma.detalleventasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventasPayload>
          }
          createMany: {
            args: Prisma.detalleventasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detalleventasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventasPayload>[]
          }
          delete: {
            args: Prisma.detalleventasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventasPayload>
          }
          update: {
            args: Prisma.detalleventasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventasPayload>
          }
          deleteMany: {
            args: Prisma.detalleventasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalleventasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detalleventasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventasPayload>[]
          }
          upsert: {
            args: Prisma.detalleventasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventasPayload>
          }
          aggregate: {
            args: Prisma.DetalleventasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleventas>
          }
          groupBy: {
            args: Prisma.detalleventasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleventasGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalleventasCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleventasCountAggregateOutputType> | number
          }
        }
      }
      facturas: {
        payload: Prisma.$facturasPayload<ExtArgs>
        fields: Prisma.facturasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facturasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facturasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturasPayload>
          }
          findFirst: {
            args: Prisma.facturasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facturasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturasPayload>
          }
          findMany: {
            args: Prisma.facturasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturasPayload>[]
          }
          create: {
            args: Prisma.facturasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturasPayload>
          }
          createMany: {
            args: Prisma.facturasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.facturasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturasPayload>[]
          }
          delete: {
            args: Prisma.facturasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturasPayload>
          }
          update: {
            args: Prisma.facturasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturasPayload>
          }
          deleteMany: {
            args: Prisma.facturasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.facturasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.facturasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturasPayload>[]
          }
          upsert: {
            args: Prisma.facturasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturasPayload>
          }
          aggregate: {
            args: Prisma.FacturasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacturas>
          }
          groupBy: {
            args: Prisma.facturasGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturasGroupByOutputType>[]
          }
          count: {
            args: Prisma.facturasCountArgs<ExtArgs>
            result: $Utils.Optional<FacturasCountAggregateOutputType> | number
          }
        }
      }
      factura_items: {
        payload: Prisma.$factura_itemsPayload<ExtArgs>
        fields: Prisma.factura_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.factura_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factura_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.factura_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factura_itemsPayload>
          }
          findFirst: {
            args: Prisma.factura_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factura_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.factura_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factura_itemsPayload>
          }
          findMany: {
            args: Prisma.factura_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factura_itemsPayload>[]
          }
          create: {
            args: Prisma.factura_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factura_itemsPayload>
          }
          createMany: {
            args: Prisma.factura_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.factura_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factura_itemsPayload>[]
          }
          delete: {
            args: Prisma.factura_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factura_itemsPayload>
          }
          update: {
            args: Prisma.factura_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factura_itemsPayload>
          }
          deleteMany: {
            args: Prisma.factura_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.factura_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.factura_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factura_itemsPayload>[]
          }
          upsert: {
            args: Prisma.factura_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factura_itemsPayload>
          }
          aggregate: {
            args: Prisma.Factura_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactura_items>
          }
          groupBy: {
            args: Prisma.factura_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Factura_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.factura_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Factura_itemsCountAggregateOutputType> | number
          }
        }
      }
      movimientosinventario: {
        payload: Prisma.$movimientosinventarioPayload<ExtArgs>
        fields: Prisma.movimientosinventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movimientosinventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientosinventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movimientosinventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientosinventarioPayload>
          }
          findFirst: {
            args: Prisma.movimientosinventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientosinventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movimientosinventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientosinventarioPayload>
          }
          findMany: {
            args: Prisma.movimientosinventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientosinventarioPayload>[]
          }
          create: {
            args: Prisma.movimientosinventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientosinventarioPayload>
          }
          createMany: {
            args: Prisma.movimientosinventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.movimientosinventarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientosinventarioPayload>[]
          }
          delete: {
            args: Prisma.movimientosinventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientosinventarioPayload>
          }
          update: {
            args: Prisma.movimientosinventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientosinventarioPayload>
          }
          deleteMany: {
            args: Prisma.movimientosinventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.movimientosinventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.movimientosinventarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientosinventarioPayload>[]
          }
          upsert: {
            args: Prisma.movimientosinventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientosinventarioPayload>
          }
          aggregate: {
            args: Prisma.MovimientosinventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimientosinventario>
          }
          groupBy: {
            args: Prisma.movimientosinventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimientosinventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.movimientosinventarioCountArgs<ExtArgs>
            result: $Utils.Optional<MovimientosinventarioCountAggregateOutputType> | number
          }
        }
      }
      reportes: {
        payload: Prisma.$reportesPayload<ExtArgs>
        fields: Prisma.reportesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportesPayload>
          }
          findFirst: {
            args: Prisma.reportesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportesPayload>
          }
          findMany: {
            args: Prisma.reportesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportesPayload>[]
          }
          create: {
            args: Prisma.reportesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportesPayload>
          }
          createMany: {
            args: Prisma.reportesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reportesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportesPayload>[]
          }
          delete: {
            args: Prisma.reportesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportesPayload>
          }
          update: {
            args: Prisma.reportesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportesPayload>
          }
          deleteMany: {
            args: Prisma.reportesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reportesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportesPayload>[]
          }
          upsert: {
            args: Prisma.reportesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportesPayload>
          }
          aggregate: {
            args: Prisma.ReportesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportes>
          }
          groupBy: {
            args: Prisma.reportesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportesGroupByOutputType>[]
          }
          count: {
            args: Prisma.reportesCountArgs<ExtArgs>
            result: $Utils.Optional<ReportesCountAggregateOutputType> | number
          }
        }
      }
      Carrito: {
        payload: Prisma.$CarritoPayload<ExtArgs>
        fields: Prisma.CarritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          findFirst: {
            args: Prisma.CarritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          findMany: {
            args: Prisma.CarritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>[]
          }
          create: {
            args: Prisma.CarritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          createMany: {
            args: Prisma.CarritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarritoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>[]
          }
          delete: {
            args: Prisma.CarritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          update: {
            args: Prisma.CarritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          deleteMany: {
            args: Prisma.CarritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarritoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>[]
          }
          upsert: {
            args: Prisma.CarritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          aggregate: {
            args: Prisma.CarritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrito>
          }
          groupBy: {
            args: Prisma.CarritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarritoCountArgs<ExtArgs>
            result: $Utils.Optional<CarritoCountAggregateOutputType> | number
          }
        }
      }
      CarritoItem: {
        payload: Prisma.$CarritoItemPayload<ExtArgs>
        fields: Prisma.CarritoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarritoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarritoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          findFirst: {
            args: Prisma.CarritoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarritoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          findMany: {
            args: Prisma.CarritoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>[]
          }
          create: {
            args: Prisma.CarritoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          createMany: {
            args: Prisma.CarritoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarritoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>[]
          }
          delete: {
            args: Prisma.CarritoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          update: {
            args: Prisma.CarritoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          deleteMany: {
            args: Prisma.CarritoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarritoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarritoItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>[]
          }
          upsert: {
            args: Prisma.CarritoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          aggregate: {
            args: Prisma.CarritoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarritoItem>
          }
          groupBy: {
            args: Prisma.CarritoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarritoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarritoItemCountArgs<ExtArgs>
            result: $Utils.Optional<CarritoItemCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    usuarios?: usuariosOmit
    configuracion?: configuracionOmit
    productos?: productosOmit
    proveedores?: proveedoresOmit
    ventas?: ventasOmit
    detalleventas?: detalleventasOmit
    facturas?: facturasOmit
    factura_items?: factura_itemsOmit
    movimientosinventario?: movimientosinventarioOmit
    reportes?: reportesOmit
    carrito?: CarritoOmit
    carritoItem?: CarritoItemOmit
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
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    carritos: number
    configuraciones: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carritos?: boolean | UsuariosCountOutputTypeCountCarritosArgs
    configuraciones?: boolean | UsuariosCountOutputTypeCountConfiguracionesArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountCarritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountConfiguracionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configuracionWhereInput
  }


  /**
   * Count Type ProductosCountOutputType
   */

  export type ProductosCountOutputType = {
    carritoItems: number
    detalleventas: number
    movimientosinventario: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carritoItems?: boolean | ProductosCountOutputTypeCountCarritoItemsArgs
    detalleventas?: boolean | ProductosCountOutputTypeCountDetalleventasArgs
    movimientosinventario?: boolean | ProductosCountOutputTypeCountMovimientosinventarioArgs
  }

  // Custom InputTypes
  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: ProductosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountCarritoItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoItemWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountDetalleventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalleventasWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountMovimientosinventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientosinventarioWhereInput
  }


  /**
   * Count Type VentasCountOutputType
   */

  export type VentasCountOutputType = {
    detalleventas: number
    facturas: number
  }

  export type VentasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalleventas?: boolean | VentasCountOutputTypeCountDetalleventasArgs
    facturas?: boolean | VentasCountOutputTypeCountFacturasArgs
  }

  // Custom InputTypes
  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentasCountOutputType
     */
    select?: VentasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeCountDetalleventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalleventasWhereInput
  }

  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeCountFacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facturasWhereInput
  }


  /**
   * Count Type FacturasCountOutputType
   */

  export type FacturasCountOutputType = {
    items: number
  }

  export type FacturasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | FacturasCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * FacturasCountOutputType without action
   */
  export type FacturasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturasCountOutputType
     */
    select?: FacturasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacturasCountOutputType without action
   */
  export type FacturasCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: factura_itemsWhereInput
  }


  /**
   * Count Type CarritoCountOutputType
   */

  export type CarritoCountOutputType = {
    items: number
  }

  export type CarritoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CarritoCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CarritoCountOutputType without action
   */
  export type CarritoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoCountOutputType
     */
    select?: CarritoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarritoCountOutputType without action
   */
  export type CarritoCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    usuario: string | null
    password: string | null
    rol: $Enums.Rol | null
    creadoen: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    usuario: string | null
    password: string | null
    rol: $Enums.Rol | null
    creadoen: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    usuario: number
    password: number
    rol: number
    creadoen: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    usuario?: true
    password?: true
    rol?: true
    creadoen?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    usuario?: true
    password?: true
    rol?: true
    creadoen?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    usuario?: true
    password?: true
    rol?: true
    creadoen?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nombre: string | null
    usuario: string
    password: string
    rol: $Enums.Rol
    creadoen: Date | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuario?: boolean
    password?: boolean
    rol?: boolean
    creadoen?: boolean
    carritos?: boolean | usuarios$carritosArgs<ExtArgs>
    configuraciones?: boolean | usuarios$configuracionesArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuario?: boolean
    password?: boolean
    rol?: boolean
    creadoen?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuario?: boolean
    password?: boolean
    rol?: boolean
    creadoen?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    usuario?: boolean
    password?: boolean
    rol?: boolean
    creadoen?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "usuario" | "password" | "rol" | "creadoen", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carritos?: boolean | usuarios$carritosArgs<ExtArgs>
    configuraciones?: boolean | usuarios$configuracionesArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      carritos: Prisma.$CarritoPayload<ExtArgs>[]
      configuraciones: Prisma.$configuracionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      usuario: string
      password: string
      rol: $Enums.Rol
      creadoen: Date | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
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
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carritos<T extends usuarios$carritosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$carritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    configuraciones<T extends usuarios$configuracionesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$configuracionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly usuario: FieldRef<"usuarios", 'String'>
    readonly password: FieldRef<"usuarios", 'String'>
    readonly rol: FieldRef<"usuarios", 'Rol'>
    readonly creadoen: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.carritos
   */
  export type usuarios$carritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    where?: CarritoWhereInput
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    cursor?: CarritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * usuarios.configuraciones
   */
  export type usuarios$configuracionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionInclude<ExtArgs> | null
    where?: configuracionWhereInput
    orderBy?: configuracionOrderByWithRelationInput | configuracionOrderByWithRelationInput[]
    cursor?: configuracionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfiguracionScalarFieldEnum | ConfiguracionScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model configuracion
   */

  export type AggregateConfiguracion = {
    _count: ConfiguracionCountAggregateOutputType | null
    _avg: ConfiguracionAvgAggregateOutputType | null
    _sum: ConfiguracionSumAggregateOutputType | null
    _min: ConfiguracionMinAggregateOutputType | null
    _max: ConfiguracionMaxAggregateOutputType | null
  }

  export type ConfiguracionAvgAggregateOutputType = {
    id: number | null
    usuarioid: number | null
  }

  export type ConfiguracionSumAggregateOutputType = {
    id: number | null
    usuarioid: number | null
  }

  export type ConfiguracionMinAggregateOutputType = {
    id: number | null
    clave: string | null
    valor: string | null
    usuarioid: number | null
  }

  export type ConfiguracionMaxAggregateOutputType = {
    id: number | null
    clave: string | null
    valor: string | null
    usuarioid: number | null
  }

  export type ConfiguracionCountAggregateOutputType = {
    id: number
    clave: number
    valor: number
    usuarioid: number
    _all: number
  }


  export type ConfiguracionAvgAggregateInputType = {
    id?: true
    usuarioid?: true
  }

  export type ConfiguracionSumAggregateInputType = {
    id?: true
    usuarioid?: true
  }

  export type ConfiguracionMinAggregateInputType = {
    id?: true
    clave?: true
    valor?: true
    usuarioid?: true
  }

  export type ConfiguracionMaxAggregateInputType = {
    id?: true
    clave?: true
    valor?: true
    usuarioid?: true
  }

  export type ConfiguracionCountAggregateInputType = {
    id?: true
    clave?: true
    valor?: true
    usuarioid?: true
    _all?: true
  }

  export type ConfiguracionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuracion to aggregate.
     */
    where?: configuracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracions to fetch.
     */
    orderBy?: configuracionOrderByWithRelationInput | configuracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configuracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configuracions
    **/
    _count?: true | ConfiguracionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfiguracionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfiguracionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracionMaxAggregateInputType
  }

  export type GetConfiguracionAggregateType<T extends ConfiguracionAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracion[P]>
      : GetScalarType<T[P], AggregateConfiguracion[P]>
  }




  export type configuracionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configuracionWhereInput
    orderBy?: configuracionOrderByWithAggregationInput | configuracionOrderByWithAggregationInput[]
    by: ConfiguracionScalarFieldEnum[] | ConfiguracionScalarFieldEnum
    having?: configuracionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracionCountAggregateInputType | true
    _avg?: ConfiguracionAvgAggregateInputType
    _sum?: ConfiguracionSumAggregateInputType
    _min?: ConfiguracionMinAggregateInputType
    _max?: ConfiguracionMaxAggregateInputType
  }

  export type ConfiguracionGroupByOutputType = {
    id: number
    clave: string
    valor: string | null
    usuarioid: number | null
    _count: ConfiguracionCountAggregateOutputType | null
    _avg: ConfiguracionAvgAggregateOutputType | null
    _sum: ConfiguracionSumAggregateOutputType | null
    _min: ConfiguracionMinAggregateOutputType | null
    _max: ConfiguracionMaxAggregateOutputType | null
  }

  type GetConfiguracionGroupByPayload<T extends configuracionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracionGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracionGroupByOutputType[P]>
        }
      >
    >


  export type configuracionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clave?: boolean
    valor?: boolean
    usuarioid?: boolean
    usuario?: boolean | configuracion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["configuracion"]>

  export type configuracionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clave?: boolean
    valor?: boolean
    usuarioid?: boolean
    usuario?: boolean | configuracion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["configuracion"]>

  export type configuracionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clave?: boolean
    valor?: boolean
    usuarioid?: boolean
    usuario?: boolean | configuracion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["configuracion"]>

  export type configuracionSelectScalar = {
    id?: boolean
    clave?: boolean
    valor?: boolean
    usuarioid?: boolean
  }

  export type configuracionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clave" | "valor" | "usuarioid", ExtArgs["result"]["configuracion"]>
  export type configuracionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | configuracion$usuarioArgs<ExtArgs>
  }
  export type configuracionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | configuracion$usuarioArgs<ExtArgs>
  }
  export type configuracionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | configuracion$usuarioArgs<ExtArgs>
  }

  export type $configuracionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "configuracion"
    objects: {
      usuario: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clave: string
      valor: string | null
      usuarioid: number | null
    }, ExtArgs["result"]["configuracion"]>
    composites: {}
  }

  type configuracionGetPayload<S extends boolean | null | undefined | configuracionDefaultArgs> = $Result.GetResult<Prisma.$configuracionPayload, S>

  type configuracionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<configuracionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracionCountAggregateInputType | true
    }

  export interface configuracionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['configuracion'], meta: { name: 'configuracion' } }
    /**
     * Find zero or one Configuracion that matches the filter.
     * @param {configuracionFindUniqueArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends configuracionFindUniqueArgs>(args: SelectSubset<T, configuracionFindUniqueArgs<ExtArgs>>): Prisma__configuracionClient<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuracion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {configuracionFindUniqueOrThrowArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends configuracionFindUniqueOrThrowArgs>(args: SelectSubset<T, configuracionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__configuracionClient<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionFindFirstArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends configuracionFindFirstArgs>(args?: SelectSubset<T, configuracionFindFirstArgs<ExtArgs>>): Prisma__configuracionClient<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionFindFirstOrThrowArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends configuracionFindFirstOrThrowArgs>(args?: SelectSubset<T, configuracionFindFirstOrThrowArgs<ExtArgs>>): Prisma__configuracionClient<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configuracions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracions
     * const configuracions = await prisma.configuracion.findMany()
     * 
     * // Get first 10 Configuracions
     * const configuracions = await prisma.configuracion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracionWithIdOnly = await prisma.configuracion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends configuracionFindManyArgs>(args?: SelectSubset<T, configuracionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuracion.
     * @param {configuracionCreateArgs} args - Arguments to create a Configuracion.
     * @example
     * // Create one Configuracion
     * const Configuracion = await prisma.configuracion.create({
     *   data: {
     *     // ... data to create a Configuracion
     *   }
     * })
     * 
     */
    create<T extends configuracionCreateArgs>(args: SelectSubset<T, configuracionCreateArgs<ExtArgs>>): Prisma__configuracionClient<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configuracions.
     * @param {configuracionCreateManyArgs} args - Arguments to create many Configuracions.
     * @example
     * // Create many Configuracions
     * const configuracion = await prisma.configuracion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends configuracionCreateManyArgs>(args?: SelectSubset<T, configuracionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configuracions and returns the data saved in the database.
     * @param {configuracionCreateManyAndReturnArgs} args - Arguments to create many Configuracions.
     * @example
     * // Create many Configuracions
     * const configuracion = await prisma.configuracion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configuracions and only return the `id`
     * const configuracionWithIdOnly = await prisma.configuracion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends configuracionCreateManyAndReturnArgs>(args?: SelectSubset<T, configuracionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Configuracion.
     * @param {configuracionDeleteArgs} args - Arguments to delete one Configuracion.
     * @example
     * // Delete one Configuracion
     * const Configuracion = await prisma.configuracion.delete({
     *   where: {
     *     // ... filter to delete one Configuracion
     *   }
     * })
     * 
     */
    delete<T extends configuracionDeleteArgs>(args: SelectSubset<T, configuracionDeleteArgs<ExtArgs>>): Prisma__configuracionClient<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuracion.
     * @param {configuracionUpdateArgs} args - Arguments to update one Configuracion.
     * @example
     * // Update one Configuracion
     * const configuracion = await prisma.configuracion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends configuracionUpdateArgs>(args: SelectSubset<T, configuracionUpdateArgs<ExtArgs>>): Prisma__configuracionClient<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configuracions.
     * @param {configuracionDeleteManyArgs} args - Arguments to filter Configuracions to delete.
     * @example
     * // Delete a few Configuracions
     * const { count } = await prisma.configuracion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends configuracionDeleteManyArgs>(args?: SelectSubset<T, configuracionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracions
     * const configuracion = await prisma.configuracion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends configuracionUpdateManyArgs>(args: SelectSubset<T, configuracionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracions and returns the data updated in the database.
     * @param {configuracionUpdateManyAndReturnArgs} args - Arguments to update many Configuracions.
     * @example
     * // Update many Configuracions
     * const configuracion = await prisma.configuracion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configuracions and only return the `id`
     * const configuracionWithIdOnly = await prisma.configuracion.updateManyAndReturn({
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
    updateManyAndReturn<T extends configuracionUpdateManyAndReturnArgs>(args: SelectSubset<T, configuracionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Configuracion.
     * @param {configuracionUpsertArgs} args - Arguments to update or create a Configuracion.
     * @example
     * // Update or create a Configuracion
     * const configuracion = await prisma.configuracion.upsert({
     *   create: {
     *     // ... data to create a Configuracion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracion we want to update
     *   }
     * })
     */
    upsert<T extends configuracionUpsertArgs>(args: SelectSubset<T, configuracionUpsertArgs<ExtArgs>>): Prisma__configuracionClient<$Result.GetResult<Prisma.$configuracionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configuracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionCountArgs} args - Arguments to filter Configuracions to count.
     * @example
     * // Count the number of Configuracions
     * const count = await prisma.configuracion.count({
     *   where: {
     *     // ... the filter for the Configuracions we want to count
     *   }
     * })
    **/
    count<T extends configuracionCountArgs>(
      args?: Subset<T, configuracionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfiguracionAggregateArgs>(args: Subset<T, ConfiguracionAggregateArgs>): Prisma.PrismaPromise<GetConfiguracionAggregateType<T>>

    /**
     * Group by Configuracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionGroupByArgs} args - Group by arguments.
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
      T extends configuracionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: configuracionGroupByArgs['orderBy'] }
        : { orderBy?: configuracionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, configuracionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the configuracion model
   */
  readonly fields: configuracionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for configuracion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__configuracionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends configuracion$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, configuracion$usuarioArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the configuracion model
   */
  interface configuracionFieldRefs {
    readonly id: FieldRef<"configuracion", 'Int'>
    readonly clave: FieldRef<"configuracion", 'String'>
    readonly valor: FieldRef<"configuracion", 'String'>
    readonly usuarioid: FieldRef<"configuracion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * configuracion findUnique
   */
  export type configuracionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionInclude<ExtArgs> | null
    /**
     * Filter, which configuracion to fetch.
     */
    where: configuracionWhereUniqueInput
  }

  /**
   * configuracion findUniqueOrThrow
   */
  export type configuracionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionInclude<ExtArgs> | null
    /**
     * Filter, which configuracion to fetch.
     */
    where: configuracionWhereUniqueInput
  }

  /**
   * configuracion findFirst
   */
  export type configuracionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionInclude<ExtArgs> | null
    /**
     * Filter, which configuracion to fetch.
     */
    where?: configuracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracions to fetch.
     */
    orderBy?: configuracionOrderByWithRelationInput | configuracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracions.
     */
    cursor?: configuracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracions.
     */
    distinct?: ConfiguracionScalarFieldEnum | ConfiguracionScalarFieldEnum[]
  }

  /**
   * configuracion findFirstOrThrow
   */
  export type configuracionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionInclude<ExtArgs> | null
    /**
     * Filter, which configuracion to fetch.
     */
    where?: configuracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracions to fetch.
     */
    orderBy?: configuracionOrderByWithRelationInput | configuracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracions.
     */
    cursor?: configuracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracions.
     */
    distinct?: ConfiguracionScalarFieldEnum | ConfiguracionScalarFieldEnum[]
  }

  /**
   * configuracion findMany
   */
  export type configuracionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionInclude<ExtArgs> | null
    /**
     * Filter, which configuracions to fetch.
     */
    where?: configuracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracions to fetch.
     */
    orderBy?: configuracionOrderByWithRelationInput | configuracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configuracions.
     */
    cursor?: configuracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracions.
     */
    skip?: number
    distinct?: ConfiguracionScalarFieldEnum | ConfiguracionScalarFieldEnum[]
  }

  /**
   * configuracion create
   */
  export type configuracionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionInclude<ExtArgs> | null
    /**
     * The data needed to create a configuracion.
     */
    data: XOR<configuracionCreateInput, configuracionUncheckedCreateInput>
  }

  /**
   * configuracion createMany
   */
  export type configuracionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many configuracions.
     */
    data: configuracionCreateManyInput | configuracionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configuracion createManyAndReturn
   */
  export type configuracionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * The data used to create many configuracions.
     */
    data: configuracionCreateManyInput | configuracionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * configuracion update
   */
  export type configuracionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionInclude<ExtArgs> | null
    /**
     * The data needed to update a configuracion.
     */
    data: XOR<configuracionUpdateInput, configuracionUncheckedUpdateInput>
    /**
     * Choose, which configuracion to update.
     */
    where: configuracionWhereUniqueInput
  }

  /**
   * configuracion updateMany
   */
  export type configuracionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update configuracions.
     */
    data: XOR<configuracionUpdateManyMutationInput, configuracionUncheckedUpdateManyInput>
    /**
     * Filter which configuracions to update
     */
    where?: configuracionWhereInput
    /**
     * Limit how many configuracions to update.
     */
    limit?: number
  }

  /**
   * configuracion updateManyAndReturn
   */
  export type configuracionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * The data used to update configuracions.
     */
    data: XOR<configuracionUpdateManyMutationInput, configuracionUncheckedUpdateManyInput>
    /**
     * Filter which configuracions to update
     */
    where?: configuracionWhereInput
    /**
     * Limit how many configuracions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * configuracion upsert
   */
  export type configuracionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionInclude<ExtArgs> | null
    /**
     * The filter to search for the configuracion to update in case it exists.
     */
    where: configuracionWhereUniqueInput
    /**
     * In case the configuracion found by the `where` argument doesn't exist, create a new configuracion with this data.
     */
    create: XOR<configuracionCreateInput, configuracionUncheckedCreateInput>
    /**
     * In case the configuracion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configuracionUpdateInput, configuracionUncheckedUpdateInput>
  }

  /**
   * configuracion delete
   */
  export type configuracionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionInclude<ExtArgs> | null
    /**
     * Filter which configuracion to delete.
     */
    where: configuracionWhereUniqueInput
  }

  /**
   * configuracion deleteMany
   */
  export type configuracionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuracions to delete
     */
    where?: configuracionWhereInput
    /**
     * Limit how many configuracions to delete.
     */
    limit?: number
  }

  /**
   * configuracion.usuario
   */
  export type configuracion$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * configuracion without action
   */
  export type configuracionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion
     */
    select?: configuracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion
     */
    omit?: configuracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracionInclude<ExtArgs> | null
  }


  /**
   * Model productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    id: number | null
    preciocompra: Decimal | null
    precioventa: Decimal | null
    stock: number | null
    stockminimo: number | null
  }

  export type ProductosSumAggregateOutputType = {
    id: number | null
    preciocompra: Decimal | null
    precioventa: Decimal | null
    stock: number | null
    stockminimo: number | null
  }

  export type ProductosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: string | null
    preciocompra: Decimal | null
    precioventa: Decimal | null
    stock: number | null
    stockminimo: number | null
    fechacaducidad: Date | null
    creadoen: Date | null
    unidadMedida: string | null
  }

  export type ProductosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: string | null
    preciocompra: Decimal | null
    precioventa: Decimal | null
    stock: number | null
    stockminimo: number | null
    fechacaducidad: Date | null
    creadoen: Date | null
    unidadMedida: string | null
  }

  export type ProductosCountAggregateOutputType = {
    id: number
    nombre: number
    tipo: number
    preciocompra: number
    precioventa: number
    stock: number
    stockminimo: number
    fechacaducidad: number
    creadoen: number
    unidadMedida: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    id?: true
    preciocompra?: true
    precioventa?: true
    stock?: true
    stockminimo?: true
  }

  export type ProductosSumAggregateInputType = {
    id?: true
    preciocompra?: true
    precioventa?: true
    stock?: true
    stockminimo?: true
  }

  export type ProductosMinAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    preciocompra?: true
    precioventa?: true
    stock?: true
    stockminimo?: true
    fechacaducidad?: true
    creadoen?: true
    unidadMedida?: true
  }

  export type ProductosMaxAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    preciocompra?: true
    precioventa?: true
    stock?: true
    stockminimo?: true
    fechacaducidad?: true
    creadoen?: true
    unidadMedida?: true
  }

  export type ProductosCountAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    preciocompra?: true
    precioventa?: true
    stock?: true
    stockminimo?: true
    fechacaducidad?: true
    creadoen?: true
    unidadMedida?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to aggregate.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
    orderBy?: productosOrderByWithAggregationInput | productosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    id: number
    nombre: string | null
    tipo: string | null
    preciocompra: Decimal | null
    precioventa: Decimal | null
    stock: number | null
    stockminimo: number | null
    fechacaducidad: Date | null
    creadoen: Date | null
    unidadMedida: string | null
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    preciocompra?: boolean
    precioventa?: boolean
    stock?: boolean
    stockminimo?: boolean
    fechacaducidad?: boolean
    creadoen?: boolean
    unidadMedida?: boolean
    carritoItems?: boolean | productos$carritoItemsArgs<ExtArgs>
    detalleventas?: boolean | productos$detalleventasArgs<ExtArgs>
    movimientosinventario?: boolean | productos$movimientosinventarioArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type productosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    preciocompra?: boolean
    precioventa?: boolean
    stock?: boolean
    stockminimo?: boolean
    fechacaducidad?: boolean
    creadoen?: boolean
    unidadMedida?: boolean
  }, ExtArgs["result"]["productos"]>

  export type productosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    preciocompra?: boolean
    precioventa?: boolean
    stock?: boolean
    stockminimo?: boolean
    fechacaducidad?: boolean
    creadoen?: boolean
    unidadMedida?: boolean
  }, ExtArgs["result"]["productos"]>

  export type productosSelectScalar = {
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    preciocompra?: boolean
    precioventa?: boolean
    stock?: boolean
    stockminimo?: boolean
    fechacaducidad?: boolean
    creadoen?: boolean
    unidadMedida?: boolean
  }

  export type productosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "tipo" | "preciocompra" | "precioventa" | "stock" | "stockminimo" | "fechacaducidad" | "creadoen" | "unidadMedida", ExtArgs["result"]["productos"]>
  export type productosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carritoItems?: boolean | productos$carritoItemsArgs<ExtArgs>
    detalleventas?: boolean | productos$detalleventasArgs<ExtArgs>
    movimientosinventario?: boolean | productos$movimientosinventarioArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productos"
    objects: {
      carritoItems: Prisma.$CarritoItemPayload<ExtArgs>[]
      detalleventas: Prisma.$detalleventasPayload<ExtArgs>[]
      movimientosinventario: Prisma.$movimientosinventarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      tipo: string | null
      preciocompra: Prisma.Decimal | null
      precioventa: Prisma.Decimal | null
      stock: number | null
      stockminimo: number | null
      fechacaducidad: Date | null
      creadoen: Date | null
      unidadMedida: string | null
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type productosGetPayload<S extends boolean | null | undefined | productosDefaultArgs> = $Result.GetResult<Prisma.$productosPayload, S>

  type productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productos'], meta: { name: 'productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {productosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productosFindUniqueArgs>(args: SelectSubset<T, productosFindUniqueArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productosFindUniqueOrThrowArgs>(args: SelectSubset<T, productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productosFindFirstArgs>(args?: SelectSubset<T, productosFindFirstArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productosFindFirstOrThrowArgs>(args?: SelectSubset<T, productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productosWithIdOnly = await prisma.productos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productosFindManyArgs>(args?: SelectSubset<T, productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productos.
     * @param {productosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends productosCreateArgs>(args: SelectSubset<T, productosCreateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {productosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productosCreateManyArgs>(args?: SelectSubset<T, productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {productosCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productosWithIdOnly = await prisma.productos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productosCreateManyAndReturnArgs>(args?: SelectSubset<T, productosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productos.
     * @param {productosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends productosDeleteArgs>(args: SelectSubset<T, productosDeleteArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productos.
     * @param {productosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productosUpdateArgs>(args: SelectSubset<T, productosUpdateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {productosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productosDeleteManyArgs>(args?: SelectSubset<T, productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productosUpdateManyArgs>(args: SelectSubset<T, productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {productosUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productosWithIdOnly = await prisma.productos.updateManyAndReturn({
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
    updateManyAndReturn<T extends productosUpdateManyAndReturnArgs>(args: SelectSubset<T, productosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productos.
     * @param {productosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends productosUpsertArgs>(args: SelectSubset<T, productosUpsertArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productosCountArgs>(
      args?: Subset<T, productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosGroupByArgs} args - Group by arguments.
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
      T extends productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productosGroupByArgs['orderBy'] }
        : { orderBy?: productosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productos model
   */
  readonly fields: productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carritoItems<T extends productos$carritoItemsArgs<ExtArgs> = {}>(args?: Subset<T, productos$carritoItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detalleventas<T extends productos$detalleventasArgs<ExtArgs> = {}>(args?: Subset<T, productos$detalleventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimientosinventario<T extends productos$movimientosinventarioArgs<ExtArgs> = {}>(args?: Subset<T, productos$movimientosinventarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the productos model
   */
  interface productosFieldRefs {
    readonly id: FieldRef<"productos", 'Int'>
    readonly nombre: FieldRef<"productos", 'String'>
    readonly tipo: FieldRef<"productos", 'String'>
    readonly preciocompra: FieldRef<"productos", 'Decimal'>
    readonly precioventa: FieldRef<"productos", 'Decimal'>
    readonly stock: FieldRef<"productos", 'Int'>
    readonly stockminimo: FieldRef<"productos", 'Int'>
    readonly fechacaducidad: FieldRef<"productos", 'DateTime'>
    readonly creadoen: FieldRef<"productos", 'DateTime'>
    readonly unidadMedida: FieldRef<"productos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * productos findUnique
   */
  export type productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findUniqueOrThrow
   */
  export type productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findFirst
   */
  export type productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findFirstOrThrow
   */
  export type productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findMany
   */
  export type productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos create
   */
  export type productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to create a productos.
     */
    data?: XOR<productosCreateInput, productosUncheckedCreateInput>
  }

  /**
   * productos createMany
   */
  export type productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productos createManyAndReturn
   */
  export type productosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productos update
   */
  export type productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to update a productos.
     */
    data: XOR<productosUpdateInput, productosUncheckedUpdateInput>
    /**
     * Choose, which productos to update.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos updateMany
   */
  export type productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * productos updateManyAndReturn
   */
  export type productosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * productos upsert
   */
  export type productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The filter to search for the productos to update in case it exists.
     */
    where: productosWhereUniqueInput
    /**
     * In case the productos found by the `where` argument doesn't exist, create a new productos with this data.
     */
    create: XOR<productosCreateInput, productosUncheckedCreateInput>
    /**
     * In case the productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productosUpdateInput, productosUncheckedUpdateInput>
  }

  /**
   * productos delete
   */
  export type productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter which productos to delete.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos deleteMany
   */
  export type productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to delete.
     */
    limit?: number
  }

  /**
   * productos.carritoItems
   */
  export type productos$carritoItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    where?: CarritoItemWhereInput
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    cursor?: CarritoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * productos.detalleventas
   */
  export type productos$detalleventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
    where?: detalleventasWhereInput
    orderBy?: detalleventasOrderByWithRelationInput | detalleventasOrderByWithRelationInput[]
    cursor?: detalleventasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleventasScalarFieldEnum | DetalleventasScalarFieldEnum[]
  }

  /**
   * productos.movimientosinventario
   */
  export type productos$movimientosinventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioInclude<ExtArgs> | null
    where?: movimientosinventarioWhereInput
    orderBy?: movimientosinventarioOrderByWithRelationInput | movimientosinventarioOrderByWithRelationInput[]
    cursor?: movimientosinventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientosinventarioScalarFieldEnum | MovimientosinventarioScalarFieldEnum[]
  }

  /**
   * productos without action
   */
  export type productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
  }


  /**
   * Model proveedores
   */

  export type AggregateProveedores = {
    _count: ProveedoresCountAggregateOutputType | null
    _avg: ProveedoresAvgAggregateOutputType | null
    _sum: ProveedoresSumAggregateOutputType | null
    _min: ProveedoresMinAggregateOutputType | null
    _max: ProveedoresMaxAggregateOutputType | null
  }

  export type ProveedoresAvgAggregateOutputType = {
    id: number | null
  }

  export type ProveedoresSumAggregateOutputType = {
    id: number | null
  }

  export type ProveedoresMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    contacto: string | null
    productos: string | null
  }

  export type ProveedoresMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    contacto: string | null
    productos: string | null
  }

  export type ProveedoresCountAggregateOutputType = {
    id: number
    nombre: number
    contacto: number
    productos: number
    _all: number
  }


  export type ProveedoresAvgAggregateInputType = {
    id?: true
  }

  export type ProveedoresSumAggregateInputType = {
    id?: true
  }

  export type ProveedoresMinAggregateInputType = {
    id?: true
    nombre?: true
    contacto?: true
    productos?: true
  }

  export type ProveedoresMaxAggregateInputType = {
    id?: true
    nombre?: true
    contacto?: true
    productos?: true
  }

  export type ProveedoresCountAggregateInputType = {
    id?: true
    nombre?: true
    contacto?: true
    productos?: true
    _all?: true
  }

  export type ProveedoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proveedores to aggregate.
     */
    where?: proveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedores to fetch.
     */
    orderBy?: proveedoresOrderByWithRelationInput | proveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proveedores
    **/
    _count?: true | ProveedoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProveedoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProveedoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProveedoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProveedoresMaxAggregateInputType
  }

  export type GetProveedoresAggregateType<T extends ProveedoresAggregateArgs> = {
        [P in keyof T & keyof AggregateProveedores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProveedores[P]>
      : GetScalarType<T[P], AggregateProveedores[P]>
  }




  export type proveedoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proveedoresWhereInput
    orderBy?: proveedoresOrderByWithAggregationInput | proveedoresOrderByWithAggregationInput[]
    by: ProveedoresScalarFieldEnum[] | ProveedoresScalarFieldEnum
    having?: proveedoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProveedoresCountAggregateInputType | true
    _avg?: ProveedoresAvgAggregateInputType
    _sum?: ProveedoresSumAggregateInputType
    _min?: ProveedoresMinAggregateInputType
    _max?: ProveedoresMaxAggregateInputType
  }

  export type ProveedoresGroupByOutputType = {
    id: number
    nombre: string | null
    contacto: string | null
    productos: string | null
    _count: ProveedoresCountAggregateOutputType | null
    _avg: ProveedoresAvgAggregateOutputType | null
    _sum: ProveedoresSumAggregateOutputType | null
    _min: ProveedoresMinAggregateOutputType | null
    _max: ProveedoresMaxAggregateOutputType | null
  }

  type GetProveedoresGroupByPayload<T extends proveedoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProveedoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProveedoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProveedoresGroupByOutputType[P]>
            : GetScalarType<T[P], ProveedoresGroupByOutputType[P]>
        }
      >
    >


  export type proveedoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contacto?: boolean
    productos?: boolean
  }, ExtArgs["result"]["proveedores"]>

  export type proveedoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contacto?: boolean
    productos?: boolean
  }, ExtArgs["result"]["proveedores"]>

  export type proveedoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contacto?: boolean
    productos?: boolean
  }, ExtArgs["result"]["proveedores"]>

  export type proveedoresSelectScalar = {
    id?: boolean
    nombre?: boolean
    contacto?: boolean
    productos?: boolean
  }

  export type proveedoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "contacto" | "productos", ExtArgs["result"]["proveedores"]>

  export type $proveedoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "proveedores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      contacto: string | null
      productos: string | null
    }, ExtArgs["result"]["proveedores"]>
    composites: {}
  }

  type proveedoresGetPayload<S extends boolean | null | undefined | proveedoresDefaultArgs> = $Result.GetResult<Prisma.$proveedoresPayload, S>

  type proveedoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<proveedoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProveedoresCountAggregateInputType | true
    }

  export interface proveedoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proveedores'], meta: { name: 'proveedores' } }
    /**
     * Find zero or one Proveedores that matches the filter.
     * @param {proveedoresFindUniqueArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proveedoresFindUniqueArgs>(args: SelectSubset<T, proveedoresFindUniqueArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proveedores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proveedoresFindUniqueOrThrowArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proveedoresFindUniqueOrThrowArgs>(args: SelectSubset<T, proveedoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresFindFirstArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proveedoresFindFirstArgs>(args?: SelectSubset<T, proveedoresFindFirstArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresFindFirstOrThrowArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proveedoresFindFirstOrThrowArgs>(args?: SelectSubset<T, proveedoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proveedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proveedores
     * const proveedores = await prisma.proveedores.findMany()
     * 
     * // Get first 10 Proveedores
     * const proveedores = await prisma.proveedores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proveedoresWithIdOnly = await prisma.proveedores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends proveedoresFindManyArgs>(args?: SelectSubset<T, proveedoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proveedores.
     * @param {proveedoresCreateArgs} args - Arguments to create a Proveedores.
     * @example
     * // Create one Proveedores
     * const Proveedores = await prisma.proveedores.create({
     *   data: {
     *     // ... data to create a Proveedores
     *   }
     * })
     * 
     */
    create<T extends proveedoresCreateArgs>(args: SelectSubset<T, proveedoresCreateArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proveedores.
     * @param {proveedoresCreateManyArgs} args - Arguments to create many Proveedores.
     * @example
     * // Create many Proveedores
     * const proveedores = await prisma.proveedores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends proveedoresCreateManyArgs>(args?: SelectSubset<T, proveedoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proveedores and returns the data saved in the database.
     * @param {proveedoresCreateManyAndReturnArgs} args - Arguments to create many Proveedores.
     * @example
     * // Create many Proveedores
     * const proveedores = await prisma.proveedores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proveedores and only return the `id`
     * const proveedoresWithIdOnly = await prisma.proveedores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends proveedoresCreateManyAndReturnArgs>(args?: SelectSubset<T, proveedoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proveedores.
     * @param {proveedoresDeleteArgs} args - Arguments to delete one Proveedores.
     * @example
     * // Delete one Proveedores
     * const Proveedores = await prisma.proveedores.delete({
     *   where: {
     *     // ... filter to delete one Proveedores
     *   }
     * })
     * 
     */
    delete<T extends proveedoresDeleteArgs>(args: SelectSubset<T, proveedoresDeleteArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proveedores.
     * @param {proveedoresUpdateArgs} args - Arguments to update one Proveedores.
     * @example
     * // Update one Proveedores
     * const proveedores = await prisma.proveedores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends proveedoresUpdateArgs>(args: SelectSubset<T, proveedoresUpdateArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proveedores.
     * @param {proveedoresDeleteManyArgs} args - Arguments to filter Proveedores to delete.
     * @example
     * // Delete a few Proveedores
     * const { count } = await prisma.proveedores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends proveedoresDeleteManyArgs>(args?: SelectSubset<T, proveedoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proveedores
     * const proveedores = await prisma.proveedores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends proveedoresUpdateManyArgs>(args: SelectSubset<T, proveedoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedores and returns the data updated in the database.
     * @param {proveedoresUpdateManyAndReturnArgs} args - Arguments to update many Proveedores.
     * @example
     * // Update many Proveedores
     * const proveedores = await prisma.proveedores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proveedores and only return the `id`
     * const proveedoresWithIdOnly = await prisma.proveedores.updateManyAndReturn({
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
    updateManyAndReturn<T extends proveedoresUpdateManyAndReturnArgs>(args: SelectSubset<T, proveedoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proveedores.
     * @param {proveedoresUpsertArgs} args - Arguments to update or create a Proveedores.
     * @example
     * // Update or create a Proveedores
     * const proveedores = await prisma.proveedores.upsert({
     *   create: {
     *     // ... data to create a Proveedores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proveedores we want to update
     *   }
     * })
     */
    upsert<T extends proveedoresUpsertArgs>(args: SelectSubset<T, proveedoresUpsertArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresCountArgs} args - Arguments to filter Proveedores to count.
     * @example
     * // Count the number of Proveedores
     * const count = await prisma.proveedores.count({
     *   where: {
     *     // ... the filter for the Proveedores we want to count
     *   }
     * })
    **/
    count<T extends proveedoresCountArgs>(
      args?: Subset<T, proveedoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProveedoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProveedoresAggregateArgs>(args: Subset<T, ProveedoresAggregateArgs>): Prisma.PrismaPromise<GetProveedoresAggregateType<T>>

    /**
     * Group by Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresGroupByArgs} args - Group by arguments.
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
      T extends proveedoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proveedoresGroupByArgs['orderBy'] }
        : { orderBy?: proveedoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, proveedoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the proveedores model
   */
  readonly fields: proveedoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proveedores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proveedoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the proveedores model
   */
  interface proveedoresFieldRefs {
    readonly id: FieldRef<"proveedores", 'Int'>
    readonly nombre: FieldRef<"proveedores", 'String'>
    readonly contacto: FieldRef<"proveedores", 'String'>
    readonly productos: FieldRef<"proveedores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * proveedores findUnique
   */
  export type proveedoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Filter, which proveedores to fetch.
     */
    where: proveedoresWhereUniqueInput
  }

  /**
   * proveedores findUniqueOrThrow
   */
  export type proveedoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Filter, which proveedores to fetch.
     */
    where: proveedoresWhereUniqueInput
  }

  /**
   * proveedores findFirst
   */
  export type proveedoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Filter, which proveedores to fetch.
     */
    where?: proveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedores to fetch.
     */
    orderBy?: proveedoresOrderByWithRelationInput | proveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proveedores.
     */
    cursor?: proveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proveedores.
     */
    distinct?: ProveedoresScalarFieldEnum | ProveedoresScalarFieldEnum[]
  }

  /**
   * proveedores findFirstOrThrow
   */
  export type proveedoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Filter, which proveedores to fetch.
     */
    where?: proveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedores to fetch.
     */
    orderBy?: proveedoresOrderByWithRelationInput | proveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proveedores.
     */
    cursor?: proveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proveedores.
     */
    distinct?: ProveedoresScalarFieldEnum | ProveedoresScalarFieldEnum[]
  }

  /**
   * proveedores findMany
   */
  export type proveedoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Filter, which proveedores to fetch.
     */
    where?: proveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedores to fetch.
     */
    orderBy?: proveedoresOrderByWithRelationInput | proveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proveedores.
     */
    cursor?: proveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedores.
     */
    skip?: number
    distinct?: ProveedoresScalarFieldEnum | ProveedoresScalarFieldEnum[]
  }

  /**
   * proveedores create
   */
  export type proveedoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * The data needed to create a proveedores.
     */
    data?: XOR<proveedoresCreateInput, proveedoresUncheckedCreateInput>
  }

  /**
   * proveedores createMany
   */
  export type proveedoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proveedores.
     */
    data: proveedoresCreateManyInput | proveedoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proveedores createManyAndReturn
   */
  export type proveedoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * The data used to create many proveedores.
     */
    data: proveedoresCreateManyInput | proveedoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proveedores update
   */
  export type proveedoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * The data needed to update a proveedores.
     */
    data: XOR<proveedoresUpdateInput, proveedoresUncheckedUpdateInput>
    /**
     * Choose, which proveedores to update.
     */
    where: proveedoresWhereUniqueInput
  }

  /**
   * proveedores updateMany
   */
  export type proveedoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proveedores.
     */
    data: XOR<proveedoresUpdateManyMutationInput, proveedoresUncheckedUpdateManyInput>
    /**
     * Filter which proveedores to update
     */
    where?: proveedoresWhereInput
    /**
     * Limit how many proveedores to update.
     */
    limit?: number
  }

  /**
   * proveedores updateManyAndReturn
   */
  export type proveedoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * The data used to update proveedores.
     */
    data: XOR<proveedoresUpdateManyMutationInput, proveedoresUncheckedUpdateManyInput>
    /**
     * Filter which proveedores to update
     */
    where?: proveedoresWhereInput
    /**
     * Limit how many proveedores to update.
     */
    limit?: number
  }

  /**
   * proveedores upsert
   */
  export type proveedoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * The filter to search for the proveedores to update in case it exists.
     */
    where: proveedoresWhereUniqueInput
    /**
     * In case the proveedores found by the `where` argument doesn't exist, create a new proveedores with this data.
     */
    create: XOR<proveedoresCreateInput, proveedoresUncheckedCreateInput>
    /**
     * In case the proveedores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proveedoresUpdateInput, proveedoresUncheckedUpdateInput>
  }

  /**
   * proveedores delete
   */
  export type proveedoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Filter which proveedores to delete.
     */
    where: proveedoresWhereUniqueInput
  }

  /**
   * proveedores deleteMany
   */
  export type proveedoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proveedores to delete
     */
    where?: proveedoresWhereInput
    /**
     * Limit how many proveedores to delete.
     */
    limit?: number
  }

  /**
   * proveedores without action
   */
  export type proveedoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
  }


  /**
   * Model ventas
   */

  export type AggregateVentas = {
    _count: VentasCountAggregateOutputType | null
    _avg: VentasAvgAggregateOutputType | null
    _sum: VentasSumAggregateOutputType | null
    _min: VentasMinAggregateOutputType | null
    _max: VentasMaxAggregateOutputType | null
  }

  export type VentasAvgAggregateOutputType = {
    id: number | null
    total: Decimal | null
  }

  export type VentasSumAggregateOutputType = {
    id: number | null
    total: Decimal | null
  }

  export type VentasMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    total: Decimal | null
    metodopago: string | null
  }

  export type VentasMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    total: Decimal | null
    metodopago: string | null
  }

  export type VentasCountAggregateOutputType = {
    id: number
    fecha: number
    total: number
    metodopago: number
    _all: number
  }


  export type VentasAvgAggregateInputType = {
    id?: true
    total?: true
  }

  export type VentasSumAggregateInputType = {
    id?: true
    total?: true
  }

  export type VentasMinAggregateInputType = {
    id?: true
    fecha?: true
    total?: true
    metodopago?: true
  }

  export type VentasMaxAggregateInputType = {
    id?: true
    fecha?: true
    total?: true
    metodopago?: true
  }

  export type VentasCountAggregateInputType = {
    id?: true
    fecha?: true
    total?: true
    metodopago?: true
    _all?: true
  }

  export type VentasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ventas to aggregate.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ventas
    **/
    _count?: true | VentasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentasMaxAggregateInputType
  }

  export type GetVentasAggregateType<T extends VentasAggregateArgs> = {
        [P in keyof T & keyof AggregateVentas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVentas[P]>
      : GetScalarType<T[P], AggregateVentas[P]>
  }




  export type ventasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventasWhereInput
    orderBy?: ventasOrderByWithAggregationInput | ventasOrderByWithAggregationInput[]
    by: VentasScalarFieldEnum[] | VentasScalarFieldEnum
    having?: ventasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentasCountAggregateInputType | true
    _avg?: VentasAvgAggregateInputType
    _sum?: VentasSumAggregateInputType
    _min?: VentasMinAggregateInputType
    _max?: VentasMaxAggregateInputType
  }

  export type VentasGroupByOutputType = {
    id: number
    fecha: Date | null
    total: Decimal | null
    metodopago: string | null
    _count: VentasCountAggregateOutputType | null
    _avg: VentasAvgAggregateOutputType | null
    _sum: VentasSumAggregateOutputType | null
    _min: VentasMinAggregateOutputType | null
    _max: VentasMaxAggregateOutputType | null
  }

  type GetVentasGroupByPayload<T extends ventasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentasGroupByOutputType[P]>
            : GetScalarType<T[P], VentasGroupByOutputType[P]>
        }
      >
    >


  export type ventasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    total?: boolean
    metodopago?: boolean
    detalleventas?: boolean | ventas$detalleventasArgs<ExtArgs>
    facturas?: boolean | ventas$facturasArgs<ExtArgs>
    _count?: boolean | VentasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ventas"]>

  export type ventasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    total?: boolean
    metodopago?: boolean
  }, ExtArgs["result"]["ventas"]>

  export type ventasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    total?: boolean
    metodopago?: boolean
  }, ExtArgs["result"]["ventas"]>

  export type ventasSelectScalar = {
    id?: boolean
    fecha?: boolean
    total?: boolean
    metodopago?: boolean
  }

  export type ventasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "total" | "metodopago", ExtArgs["result"]["ventas"]>
  export type ventasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalleventas?: boolean | ventas$detalleventasArgs<ExtArgs>
    facturas?: boolean | ventas$facturasArgs<ExtArgs>
    _count?: boolean | VentasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ventasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ventasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ventasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ventas"
    objects: {
      detalleventas: Prisma.$detalleventasPayload<ExtArgs>[]
      facturas: Prisma.$facturasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date | null
      total: Prisma.Decimal | null
      metodopago: string | null
    }, ExtArgs["result"]["ventas"]>
    composites: {}
  }

  type ventasGetPayload<S extends boolean | null | undefined | ventasDefaultArgs> = $Result.GetResult<Prisma.$ventasPayload, S>

  type ventasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ventasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentasCountAggregateInputType | true
    }

  export interface ventasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ventas'], meta: { name: 'ventas' } }
    /**
     * Find zero or one Ventas that matches the filter.
     * @param {ventasFindUniqueArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ventasFindUniqueArgs>(args: SelectSubset<T, ventasFindUniqueArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ventas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ventasFindUniqueOrThrowArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ventasFindUniqueOrThrowArgs>(args: SelectSubset<T, ventasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindFirstArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ventasFindFirstArgs>(args?: SelectSubset<T, ventasFindFirstArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ventas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindFirstOrThrowArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ventasFindFirstOrThrowArgs>(args?: SelectSubset<T, ventasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.ventas.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.ventas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventasWithIdOnly = await prisma.ventas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ventasFindManyArgs>(args?: SelectSubset<T, ventasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ventas.
     * @param {ventasCreateArgs} args - Arguments to create a Ventas.
     * @example
     * // Create one Ventas
     * const Ventas = await prisma.ventas.create({
     *   data: {
     *     // ... data to create a Ventas
     *   }
     * })
     * 
     */
    create<T extends ventasCreateArgs>(args: SelectSubset<T, ventasCreateArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {ventasCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const ventas = await prisma.ventas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ventasCreateManyArgs>(args?: SelectSubset<T, ventasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventas and returns the data saved in the database.
     * @param {ventasCreateManyAndReturnArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const ventas = await prisma.ventas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventas and only return the `id`
     * const ventasWithIdOnly = await prisma.ventas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ventasCreateManyAndReturnArgs>(args?: SelectSubset<T, ventasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ventas.
     * @param {ventasDeleteArgs} args - Arguments to delete one Ventas.
     * @example
     * // Delete one Ventas
     * const Ventas = await prisma.ventas.delete({
     *   where: {
     *     // ... filter to delete one Ventas
     *   }
     * })
     * 
     */
    delete<T extends ventasDeleteArgs>(args: SelectSubset<T, ventasDeleteArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ventas.
     * @param {ventasUpdateArgs} args - Arguments to update one Ventas.
     * @example
     * // Update one Ventas
     * const ventas = await prisma.ventas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ventasUpdateArgs>(args: SelectSubset<T, ventasUpdateArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {ventasDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.ventas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ventasDeleteManyArgs>(args?: SelectSubset<T, ventasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const ventas = await prisma.ventas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ventasUpdateManyArgs>(args: SelectSubset<T, ventasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas and returns the data updated in the database.
     * @param {ventasUpdateManyAndReturnArgs} args - Arguments to update many Ventas.
     * @example
     * // Update many Ventas
     * const ventas = await prisma.ventas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ventas and only return the `id`
     * const ventasWithIdOnly = await prisma.ventas.updateManyAndReturn({
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
    updateManyAndReturn<T extends ventasUpdateManyAndReturnArgs>(args: SelectSubset<T, ventasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ventas.
     * @param {ventasUpsertArgs} args - Arguments to update or create a Ventas.
     * @example
     * // Update or create a Ventas
     * const ventas = await prisma.ventas.upsert({
     *   create: {
     *     // ... data to create a Ventas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ventas we want to update
     *   }
     * })
     */
    upsert<T extends ventasUpsertArgs>(args: SelectSubset<T, ventasUpsertArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.ventas.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends ventasCountArgs>(
      args?: Subset<T, ventasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentasAggregateArgs>(args: Subset<T, VentasAggregateArgs>): Prisma.PrismaPromise<GetVentasAggregateType<T>>

    /**
     * Group by Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasGroupByArgs} args - Group by arguments.
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
      T extends ventasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ventasGroupByArgs['orderBy'] }
        : { orderBy?: ventasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ventasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ventas model
   */
  readonly fields: ventasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ventas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ventasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalleventas<T extends ventas$detalleventasArgs<ExtArgs> = {}>(args?: Subset<T, ventas$detalleventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    facturas<T extends ventas$facturasArgs<ExtArgs> = {}>(args?: Subset<T, ventas$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ventas model
   */
  interface ventasFieldRefs {
    readonly id: FieldRef<"ventas", 'Int'>
    readonly fecha: FieldRef<"ventas", 'DateTime'>
    readonly total: FieldRef<"ventas", 'Decimal'>
    readonly metodopago: FieldRef<"ventas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ventas findUnique
   */
  export type ventasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas findUniqueOrThrow
   */
  export type ventasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas findFirst
   */
  export type ventasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ventas.
     */
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas findFirstOrThrow
   */
  export type ventasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ventas.
     */
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas findMany
   */
  export type ventasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas create
   */
  export type ventasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The data needed to create a ventas.
     */
    data?: XOR<ventasCreateInput, ventasUncheckedCreateInput>
  }

  /**
   * ventas createMany
   */
  export type ventasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ventas.
     */
    data: ventasCreateManyInput | ventasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ventas createManyAndReturn
   */
  export type ventasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * The data used to create many ventas.
     */
    data: ventasCreateManyInput | ventasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ventas update
   */
  export type ventasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The data needed to update a ventas.
     */
    data: XOR<ventasUpdateInput, ventasUncheckedUpdateInput>
    /**
     * Choose, which ventas to update.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas updateMany
   */
  export type ventasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ventas.
     */
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyInput>
    /**
     * Filter which ventas to update
     */
    where?: ventasWhereInput
    /**
     * Limit how many ventas to update.
     */
    limit?: number
  }

  /**
   * ventas updateManyAndReturn
   */
  export type ventasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * The data used to update ventas.
     */
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyInput>
    /**
     * Filter which ventas to update
     */
    where?: ventasWhereInput
    /**
     * Limit how many ventas to update.
     */
    limit?: number
  }

  /**
   * ventas upsert
   */
  export type ventasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The filter to search for the ventas to update in case it exists.
     */
    where: ventasWhereUniqueInput
    /**
     * In case the ventas found by the `where` argument doesn't exist, create a new ventas with this data.
     */
    create: XOR<ventasCreateInput, ventasUncheckedCreateInput>
    /**
     * In case the ventas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ventasUpdateInput, ventasUncheckedUpdateInput>
  }

  /**
   * ventas delete
   */
  export type ventasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter which ventas to delete.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas deleteMany
   */
  export type ventasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ventas to delete
     */
    where?: ventasWhereInput
    /**
     * Limit how many ventas to delete.
     */
    limit?: number
  }

  /**
   * ventas.detalleventas
   */
  export type ventas$detalleventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
    where?: detalleventasWhereInput
    orderBy?: detalleventasOrderByWithRelationInput | detalleventasOrderByWithRelationInput[]
    cursor?: detalleventasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleventasScalarFieldEnum | DetalleventasScalarFieldEnum[]
  }

  /**
   * ventas.facturas
   */
  export type ventas$facturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasInclude<ExtArgs> | null
    where?: facturasWhereInput
    orderBy?: facturasOrderByWithRelationInput | facturasOrderByWithRelationInput[]
    cursor?: facturasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturasScalarFieldEnum | FacturasScalarFieldEnum[]
  }

  /**
   * ventas without action
   */
  export type ventasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
  }


  /**
   * Model detalleventas
   */

  export type AggregateDetalleventas = {
    _count: DetalleventasCountAggregateOutputType | null
    _avg: DetalleventasAvgAggregateOutputType | null
    _sum: DetalleventasSumAggregateOutputType | null
    _min: DetalleventasMinAggregateOutputType | null
    _max: DetalleventasMaxAggregateOutputType | null
  }

  export type DetalleventasAvgAggregateOutputType = {
    id: number | null
    ventaid: number | null
    productoid: number | null
    cantidad: number | null
    preciounitario: Decimal | null
  }

  export type DetalleventasSumAggregateOutputType = {
    id: number | null
    ventaid: number | null
    productoid: number | null
    cantidad: number | null
    preciounitario: Decimal | null
  }

  export type DetalleventasMinAggregateOutputType = {
    id: number | null
    ventaid: number | null
    productoid: number | null
    cantidad: number | null
    preciounitario: Decimal | null
  }

  export type DetalleventasMaxAggregateOutputType = {
    id: number | null
    ventaid: number | null
    productoid: number | null
    cantidad: number | null
    preciounitario: Decimal | null
  }

  export type DetalleventasCountAggregateOutputType = {
    id: number
    ventaid: number
    productoid: number
    cantidad: number
    preciounitario: number
    _all: number
  }


  export type DetalleventasAvgAggregateInputType = {
    id?: true
    ventaid?: true
    productoid?: true
    cantidad?: true
    preciounitario?: true
  }

  export type DetalleventasSumAggregateInputType = {
    id?: true
    ventaid?: true
    productoid?: true
    cantidad?: true
    preciounitario?: true
  }

  export type DetalleventasMinAggregateInputType = {
    id?: true
    ventaid?: true
    productoid?: true
    cantidad?: true
    preciounitario?: true
  }

  export type DetalleventasMaxAggregateInputType = {
    id?: true
    ventaid?: true
    productoid?: true
    cantidad?: true
    preciounitario?: true
  }

  export type DetalleventasCountAggregateInputType = {
    id?: true
    ventaid?: true
    productoid?: true
    cantidad?: true
    preciounitario?: true
    _all?: true
  }

  export type DetalleventasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalleventas to aggregate.
     */
    where?: detalleventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleventas to fetch.
     */
    orderBy?: detalleventasOrderByWithRelationInput | detalleventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalleventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalleventas
    **/
    _count?: true | DetalleventasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleventasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleventasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleventasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleventasMaxAggregateInputType
  }

  export type GetDetalleventasAggregateType<T extends DetalleventasAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleventas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleventas[P]>
      : GetScalarType<T[P], AggregateDetalleventas[P]>
  }




  export type detalleventasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalleventasWhereInput
    orderBy?: detalleventasOrderByWithAggregationInput | detalleventasOrderByWithAggregationInput[]
    by: DetalleventasScalarFieldEnum[] | DetalleventasScalarFieldEnum
    having?: detalleventasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleventasCountAggregateInputType | true
    _avg?: DetalleventasAvgAggregateInputType
    _sum?: DetalleventasSumAggregateInputType
    _min?: DetalleventasMinAggregateInputType
    _max?: DetalleventasMaxAggregateInputType
  }

  export type DetalleventasGroupByOutputType = {
    id: number
    ventaid: number | null
    productoid: number | null
    cantidad: number | null
    preciounitario: Decimal | null
    _count: DetalleventasCountAggregateOutputType | null
    _avg: DetalleventasAvgAggregateOutputType | null
    _sum: DetalleventasSumAggregateOutputType | null
    _min: DetalleventasMinAggregateOutputType | null
    _max: DetalleventasMaxAggregateOutputType | null
  }

  type GetDetalleventasGroupByPayload<T extends detalleventasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleventasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleventasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleventasGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleventasGroupByOutputType[P]>
        }
      >
    >


  export type detalleventasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaid?: boolean
    productoid?: boolean
    cantidad?: boolean
    preciounitario?: boolean
    productos?: boolean | detalleventas$productosArgs<ExtArgs>
    ventas?: boolean | detalleventas$ventasArgs<ExtArgs>
  }, ExtArgs["result"]["detalleventas"]>

  export type detalleventasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaid?: boolean
    productoid?: boolean
    cantidad?: boolean
    preciounitario?: boolean
    productos?: boolean | detalleventas$productosArgs<ExtArgs>
    ventas?: boolean | detalleventas$ventasArgs<ExtArgs>
  }, ExtArgs["result"]["detalleventas"]>

  export type detalleventasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaid?: boolean
    productoid?: boolean
    cantidad?: boolean
    preciounitario?: boolean
    productos?: boolean | detalleventas$productosArgs<ExtArgs>
    ventas?: boolean | detalleventas$ventasArgs<ExtArgs>
  }, ExtArgs["result"]["detalleventas"]>

  export type detalleventasSelectScalar = {
    id?: boolean
    ventaid?: boolean
    productoid?: boolean
    cantidad?: boolean
    preciounitario?: boolean
  }

  export type detalleventasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ventaid" | "productoid" | "cantidad" | "preciounitario", ExtArgs["result"]["detalleventas"]>
  export type detalleventasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | detalleventas$productosArgs<ExtArgs>
    ventas?: boolean | detalleventas$ventasArgs<ExtArgs>
  }
  export type detalleventasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | detalleventas$productosArgs<ExtArgs>
    ventas?: boolean | detalleventas$ventasArgs<ExtArgs>
  }
  export type detalleventasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | detalleventas$productosArgs<ExtArgs>
    ventas?: boolean | detalleventas$ventasArgs<ExtArgs>
  }

  export type $detalleventasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalleventas"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs> | null
      ventas: Prisma.$ventasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ventaid: number | null
      productoid: number | null
      cantidad: number | null
      preciounitario: Prisma.Decimal | null
    }, ExtArgs["result"]["detalleventas"]>
    composites: {}
  }

  type detalleventasGetPayload<S extends boolean | null | undefined | detalleventasDefaultArgs> = $Result.GetResult<Prisma.$detalleventasPayload, S>

  type detalleventasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detalleventasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleventasCountAggregateInputType | true
    }

  export interface detalleventasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalleventas'], meta: { name: 'detalleventas' } }
    /**
     * Find zero or one Detalleventas that matches the filter.
     * @param {detalleventasFindUniqueArgs} args - Arguments to find a Detalleventas
     * @example
     * // Get one Detalleventas
     * const detalleventas = await prisma.detalleventas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalleventasFindUniqueArgs>(args: SelectSubset<T, detalleventasFindUniqueArgs<ExtArgs>>): Prisma__detalleventasClient<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalleventas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detalleventasFindUniqueOrThrowArgs} args - Arguments to find a Detalleventas
     * @example
     * // Get one Detalleventas
     * const detalleventas = await prisma.detalleventas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalleventasFindUniqueOrThrowArgs>(args: SelectSubset<T, detalleventasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalleventasClient<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalleventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventasFindFirstArgs} args - Arguments to find a Detalleventas
     * @example
     * // Get one Detalleventas
     * const detalleventas = await prisma.detalleventas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalleventasFindFirstArgs>(args?: SelectSubset<T, detalleventasFindFirstArgs<ExtArgs>>): Prisma__detalleventasClient<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalleventas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventasFindFirstOrThrowArgs} args - Arguments to find a Detalleventas
     * @example
     * // Get one Detalleventas
     * const detalleventas = await prisma.detalleventas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalleventasFindFirstOrThrowArgs>(args?: SelectSubset<T, detalleventasFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalleventasClient<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalleventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalleventas
     * const detalleventas = await prisma.detalleventas.findMany()
     * 
     * // Get first 10 Detalleventas
     * const detalleventas = await prisma.detalleventas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleventasWithIdOnly = await prisma.detalleventas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detalleventasFindManyArgs>(args?: SelectSubset<T, detalleventasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalleventas.
     * @param {detalleventasCreateArgs} args - Arguments to create a Detalleventas.
     * @example
     * // Create one Detalleventas
     * const Detalleventas = await prisma.detalleventas.create({
     *   data: {
     *     // ... data to create a Detalleventas
     *   }
     * })
     * 
     */
    create<T extends detalleventasCreateArgs>(args: SelectSubset<T, detalleventasCreateArgs<ExtArgs>>): Prisma__detalleventasClient<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalleventas.
     * @param {detalleventasCreateManyArgs} args - Arguments to create many Detalleventas.
     * @example
     * // Create many Detalleventas
     * const detalleventas = await prisma.detalleventas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalleventasCreateManyArgs>(args?: SelectSubset<T, detalleventasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detalleventas and returns the data saved in the database.
     * @param {detalleventasCreateManyAndReturnArgs} args - Arguments to create many Detalleventas.
     * @example
     * // Create many Detalleventas
     * const detalleventas = await prisma.detalleventas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detalleventas and only return the `id`
     * const detalleventasWithIdOnly = await prisma.detalleventas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detalleventasCreateManyAndReturnArgs>(args?: SelectSubset<T, detalleventasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detalleventas.
     * @param {detalleventasDeleteArgs} args - Arguments to delete one Detalleventas.
     * @example
     * // Delete one Detalleventas
     * const Detalleventas = await prisma.detalleventas.delete({
     *   where: {
     *     // ... filter to delete one Detalleventas
     *   }
     * })
     * 
     */
    delete<T extends detalleventasDeleteArgs>(args: SelectSubset<T, detalleventasDeleteArgs<ExtArgs>>): Prisma__detalleventasClient<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalleventas.
     * @param {detalleventasUpdateArgs} args - Arguments to update one Detalleventas.
     * @example
     * // Update one Detalleventas
     * const detalleventas = await prisma.detalleventas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalleventasUpdateArgs>(args: SelectSubset<T, detalleventasUpdateArgs<ExtArgs>>): Prisma__detalleventasClient<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalleventas.
     * @param {detalleventasDeleteManyArgs} args - Arguments to filter Detalleventas to delete.
     * @example
     * // Delete a few Detalleventas
     * const { count } = await prisma.detalleventas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalleventasDeleteManyArgs>(args?: SelectSubset<T, detalleventasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalleventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalleventas
     * const detalleventas = await prisma.detalleventas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalleventasUpdateManyArgs>(args: SelectSubset<T, detalleventasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalleventas and returns the data updated in the database.
     * @param {detalleventasUpdateManyAndReturnArgs} args - Arguments to update many Detalleventas.
     * @example
     * // Update many Detalleventas
     * const detalleventas = await prisma.detalleventas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detalleventas and only return the `id`
     * const detalleventasWithIdOnly = await prisma.detalleventas.updateManyAndReturn({
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
    updateManyAndReturn<T extends detalleventasUpdateManyAndReturnArgs>(args: SelectSubset<T, detalleventasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detalleventas.
     * @param {detalleventasUpsertArgs} args - Arguments to update or create a Detalleventas.
     * @example
     * // Update or create a Detalleventas
     * const detalleventas = await prisma.detalleventas.upsert({
     *   create: {
     *     // ... data to create a Detalleventas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalleventas we want to update
     *   }
     * })
     */
    upsert<T extends detalleventasUpsertArgs>(args: SelectSubset<T, detalleventasUpsertArgs<ExtArgs>>): Prisma__detalleventasClient<$Result.GetResult<Prisma.$detalleventasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalleventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventasCountArgs} args - Arguments to filter Detalleventas to count.
     * @example
     * // Count the number of Detalleventas
     * const count = await prisma.detalleventas.count({
     *   where: {
     *     // ... the filter for the Detalleventas we want to count
     *   }
     * })
    **/
    count<T extends detalleventasCountArgs>(
      args?: Subset<T, detalleventasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleventasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalleventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleventasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetalleventasAggregateArgs>(args: Subset<T, DetalleventasAggregateArgs>): Prisma.PrismaPromise<GetDetalleventasAggregateType<T>>

    /**
     * Group by Detalleventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventasGroupByArgs} args - Group by arguments.
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
      T extends detalleventasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalleventasGroupByArgs['orderBy'] }
        : { orderBy?: detalleventasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, detalleventasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleventasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalleventas model
   */
  readonly fields: detalleventasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalleventas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalleventasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends detalleventas$productosArgs<ExtArgs> = {}>(args?: Subset<T, detalleventas$productosArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ventas<T extends detalleventas$ventasArgs<ExtArgs> = {}>(args?: Subset<T, detalleventas$ventasArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the detalleventas model
   */
  interface detalleventasFieldRefs {
    readonly id: FieldRef<"detalleventas", 'Int'>
    readonly ventaid: FieldRef<"detalleventas", 'Int'>
    readonly productoid: FieldRef<"detalleventas", 'Int'>
    readonly cantidad: FieldRef<"detalleventas", 'Int'>
    readonly preciounitario: FieldRef<"detalleventas", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * detalleventas findUnique
   */
  export type detalleventasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
    /**
     * Filter, which detalleventas to fetch.
     */
    where: detalleventasWhereUniqueInput
  }

  /**
   * detalleventas findUniqueOrThrow
   */
  export type detalleventasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
    /**
     * Filter, which detalleventas to fetch.
     */
    where: detalleventasWhereUniqueInput
  }

  /**
   * detalleventas findFirst
   */
  export type detalleventasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
    /**
     * Filter, which detalleventas to fetch.
     */
    where?: detalleventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleventas to fetch.
     */
    orderBy?: detalleventasOrderByWithRelationInput | detalleventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalleventas.
     */
    cursor?: detalleventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalleventas.
     */
    distinct?: DetalleventasScalarFieldEnum | DetalleventasScalarFieldEnum[]
  }

  /**
   * detalleventas findFirstOrThrow
   */
  export type detalleventasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
    /**
     * Filter, which detalleventas to fetch.
     */
    where?: detalleventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleventas to fetch.
     */
    orderBy?: detalleventasOrderByWithRelationInput | detalleventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalleventas.
     */
    cursor?: detalleventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalleventas.
     */
    distinct?: DetalleventasScalarFieldEnum | DetalleventasScalarFieldEnum[]
  }

  /**
   * detalleventas findMany
   */
  export type detalleventasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
    /**
     * Filter, which detalleventas to fetch.
     */
    where?: detalleventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleventas to fetch.
     */
    orderBy?: detalleventasOrderByWithRelationInput | detalleventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalleventas.
     */
    cursor?: detalleventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleventas.
     */
    skip?: number
    distinct?: DetalleventasScalarFieldEnum | DetalleventasScalarFieldEnum[]
  }

  /**
   * detalleventas create
   */
  export type detalleventasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
    /**
     * The data needed to create a detalleventas.
     */
    data?: XOR<detalleventasCreateInput, detalleventasUncheckedCreateInput>
  }

  /**
   * detalleventas createMany
   */
  export type detalleventasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalleventas.
     */
    data: detalleventasCreateManyInput | detalleventasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalleventas createManyAndReturn
   */
  export type detalleventasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * The data used to create many detalleventas.
     */
    data: detalleventasCreateManyInput | detalleventasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * detalleventas update
   */
  export type detalleventasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
    /**
     * The data needed to update a detalleventas.
     */
    data: XOR<detalleventasUpdateInput, detalleventasUncheckedUpdateInput>
    /**
     * Choose, which detalleventas to update.
     */
    where: detalleventasWhereUniqueInput
  }

  /**
   * detalleventas updateMany
   */
  export type detalleventasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalleventas.
     */
    data: XOR<detalleventasUpdateManyMutationInput, detalleventasUncheckedUpdateManyInput>
    /**
     * Filter which detalleventas to update
     */
    where?: detalleventasWhereInput
    /**
     * Limit how many detalleventas to update.
     */
    limit?: number
  }

  /**
   * detalleventas updateManyAndReturn
   */
  export type detalleventasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * The data used to update detalleventas.
     */
    data: XOR<detalleventasUpdateManyMutationInput, detalleventasUncheckedUpdateManyInput>
    /**
     * Filter which detalleventas to update
     */
    where?: detalleventasWhereInput
    /**
     * Limit how many detalleventas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * detalleventas upsert
   */
  export type detalleventasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
    /**
     * The filter to search for the detalleventas to update in case it exists.
     */
    where: detalleventasWhereUniqueInput
    /**
     * In case the detalleventas found by the `where` argument doesn't exist, create a new detalleventas with this data.
     */
    create: XOR<detalleventasCreateInput, detalleventasUncheckedCreateInput>
    /**
     * In case the detalleventas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalleventasUpdateInput, detalleventasUncheckedUpdateInput>
  }

  /**
   * detalleventas delete
   */
  export type detalleventasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
    /**
     * Filter which detalleventas to delete.
     */
    where: detalleventasWhereUniqueInput
  }

  /**
   * detalleventas deleteMany
   */
  export type detalleventasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalleventas to delete
     */
    where?: detalleventasWhereInput
    /**
     * Limit how many detalleventas to delete.
     */
    limit?: number
  }

  /**
   * detalleventas.productos
   */
  export type detalleventas$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
  }

  /**
   * detalleventas.ventas
   */
  export type detalleventas$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    where?: ventasWhereInput
  }

  /**
   * detalleventas without action
   */
  export type detalleventasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventas
     */
    select?: detalleventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventas
     */
    omit?: detalleventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventasInclude<ExtArgs> | null
  }


  /**
   * Model facturas
   */

  export type AggregateFacturas = {
    _count: FacturasCountAggregateOutputType | null
    _avg: FacturasAvgAggregateOutputType | null
    _sum: FacturasSumAggregateOutputType | null
    _min: FacturasMinAggregateOutputType | null
    _max: FacturasMaxAggregateOutputType | null
  }

  export type FacturasAvgAggregateOutputType = {
    id: number | null
    ventaid: number | null
    tasaIvaGlobal: Decimal | null
    subtotal: Decimal | null
    iva: Decimal | null
    descuentos: Decimal | null
    total: Decimal | null
  }

  export type FacturasSumAggregateOutputType = {
    id: number | null
    ventaid: number | null
    tasaIvaGlobal: Decimal | null
    subtotal: Decimal | null
    iva: Decimal | null
    descuentos: Decimal | null
    total: Decimal | null
  }

  export type FacturasMinAggregateOutputType = {
    id: number | null
    ventaid: number | null
    folio: string | null
    serie: string | null
    fecha: Date | null
    moneda: string | null
    formaPago: string | null
    metodoPago: string | null
    usoCfdi: string | null
    tasaIvaGlobal: Decimal | null
    observaciones: string | null
    subtotal: Decimal | null
    iva: Decimal | null
    descuentos: Decimal | null
    total: Decimal | null
    negocioNombre: string | null
    negocioRfc: string | null
    negocioDir: string | null
    negocioTel: string | null
    negocioEmail: string | null
    clienteNombre: string | null
    clienteRfc: string | null
    clienteCp: string | null
    clienteDir: string | null
    clienteEmail: string | null
    clienteTel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacturasMaxAggregateOutputType = {
    id: number | null
    ventaid: number | null
    folio: string | null
    serie: string | null
    fecha: Date | null
    moneda: string | null
    formaPago: string | null
    metodoPago: string | null
    usoCfdi: string | null
    tasaIvaGlobal: Decimal | null
    observaciones: string | null
    subtotal: Decimal | null
    iva: Decimal | null
    descuentos: Decimal | null
    total: Decimal | null
    negocioNombre: string | null
    negocioRfc: string | null
    negocioDir: string | null
    negocioTel: string | null
    negocioEmail: string | null
    clienteNombre: string | null
    clienteRfc: string | null
    clienteCp: string | null
    clienteDir: string | null
    clienteEmail: string | null
    clienteTel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacturasCountAggregateOutputType = {
    id: number
    ventaid: number
    folio: number
    serie: number
    fecha: number
    moneda: number
    formaPago: number
    metodoPago: number
    usoCfdi: number
    tasaIvaGlobal: number
    observaciones: number
    subtotal: number
    iva: number
    descuentos: number
    total: number
    negocioNombre: number
    negocioRfc: number
    negocioDir: number
    negocioTel: number
    negocioEmail: number
    clienteNombre: number
    clienteRfc: number
    clienteCp: number
    clienteDir: number
    clienteEmail: number
    clienteTel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacturasAvgAggregateInputType = {
    id?: true
    ventaid?: true
    tasaIvaGlobal?: true
    subtotal?: true
    iva?: true
    descuentos?: true
    total?: true
  }

  export type FacturasSumAggregateInputType = {
    id?: true
    ventaid?: true
    tasaIvaGlobal?: true
    subtotal?: true
    iva?: true
    descuentos?: true
    total?: true
  }

  export type FacturasMinAggregateInputType = {
    id?: true
    ventaid?: true
    folio?: true
    serie?: true
    fecha?: true
    moneda?: true
    formaPago?: true
    metodoPago?: true
    usoCfdi?: true
    tasaIvaGlobal?: true
    observaciones?: true
    subtotal?: true
    iva?: true
    descuentos?: true
    total?: true
    negocioNombre?: true
    negocioRfc?: true
    negocioDir?: true
    negocioTel?: true
    negocioEmail?: true
    clienteNombre?: true
    clienteRfc?: true
    clienteCp?: true
    clienteDir?: true
    clienteEmail?: true
    clienteTel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacturasMaxAggregateInputType = {
    id?: true
    ventaid?: true
    folio?: true
    serie?: true
    fecha?: true
    moneda?: true
    formaPago?: true
    metodoPago?: true
    usoCfdi?: true
    tasaIvaGlobal?: true
    observaciones?: true
    subtotal?: true
    iva?: true
    descuentos?: true
    total?: true
    negocioNombre?: true
    negocioRfc?: true
    negocioDir?: true
    negocioTel?: true
    negocioEmail?: true
    clienteNombre?: true
    clienteRfc?: true
    clienteCp?: true
    clienteDir?: true
    clienteEmail?: true
    clienteTel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacturasCountAggregateInputType = {
    id?: true
    ventaid?: true
    folio?: true
    serie?: true
    fecha?: true
    moneda?: true
    formaPago?: true
    metodoPago?: true
    usoCfdi?: true
    tasaIvaGlobal?: true
    observaciones?: true
    subtotal?: true
    iva?: true
    descuentos?: true
    total?: true
    negocioNombre?: true
    negocioRfc?: true
    negocioDir?: true
    negocioTel?: true
    negocioEmail?: true
    clienteNombre?: true
    clienteRfc?: true
    clienteCp?: true
    clienteDir?: true
    clienteEmail?: true
    clienteTel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacturasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facturas to aggregate.
     */
    where?: facturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facturas to fetch.
     */
    orderBy?: facturasOrderByWithRelationInput | facturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facturas
    **/
    _count?: true | FacturasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturasMaxAggregateInputType
  }

  export type GetFacturasAggregateType<T extends FacturasAggregateArgs> = {
        [P in keyof T & keyof AggregateFacturas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacturas[P]>
      : GetScalarType<T[P], AggregateFacturas[P]>
  }




  export type facturasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facturasWhereInput
    orderBy?: facturasOrderByWithAggregationInput | facturasOrderByWithAggregationInput[]
    by: FacturasScalarFieldEnum[] | FacturasScalarFieldEnum
    having?: facturasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturasCountAggregateInputType | true
    _avg?: FacturasAvgAggregateInputType
    _sum?: FacturasSumAggregateInputType
    _min?: FacturasMinAggregateInputType
    _max?: FacturasMaxAggregateInputType
  }

  export type FacturasGroupByOutputType = {
    id: number
    ventaid: number | null
    folio: string | null
    serie: string | null
    fecha: Date
    moneda: string
    formaPago: string
    metodoPago: string
    usoCfdi: string
    tasaIvaGlobal: Decimal
    observaciones: string | null
    subtotal: Decimal
    iva: Decimal
    descuentos: Decimal
    total: Decimal
    negocioNombre: string
    negocioRfc: string | null
    negocioDir: string | null
    negocioTel: string | null
    negocioEmail: string | null
    clienteNombre: string
    clienteRfc: string | null
    clienteCp: string | null
    clienteDir: string | null
    clienteEmail: string | null
    clienteTel: string | null
    createdAt: Date
    updatedAt: Date
    _count: FacturasCountAggregateOutputType | null
    _avg: FacturasAvgAggregateOutputType | null
    _sum: FacturasSumAggregateOutputType | null
    _min: FacturasMinAggregateOutputType | null
    _max: FacturasMaxAggregateOutputType | null
  }

  type GetFacturasGroupByPayload<T extends facturasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturasGroupByOutputType[P]>
            : GetScalarType<T[P], FacturasGroupByOutputType[P]>
        }
      >
    >


  export type facturasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaid?: boolean
    folio?: boolean
    serie?: boolean
    fecha?: boolean
    moneda?: boolean
    formaPago?: boolean
    metodoPago?: boolean
    usoCfdi?: boolean
    tasaIvaGlobal?: boolean
    observaciones?: boolean
    subtotal?: boolean
    iva?: boolean
    descuentos?: boolean
    total?: boolean
    negocioNombre?: boolean
    negocioRfc?: boolean
    negocioDir?: boolean
    negocioTel?: boolean
    negocioEmail?: boolean
    clienteNombre?: boolean
    clienteRfc?: boolean
    clienteCp?: boolean
    clienteDir?: boolean
    clienteEmail?: boolean
    clienteTel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | facturas$itemsArgs<ExtArgs>
    ventas?: boolean | facturas$ventasArgs<ExtArgs>
    _count?: boolean | FacturasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facturas"]>

  export type facturasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaid?: boolean
    folio?: boolean
    serie?: boolean
    fecha?: boolean
    moneda?: boolean
    formaPago?: boolean
    metodoPago?: boolean
    usoCfdi?: boolean
    tasaIvaGlobal?: boolean
    observaciones?: boolean
    subtotal?: boolean
    iva?: boolean
    descuentos?: boolean
    total?: boolean
    negocioNombre?: boolean
    negocioRfc?: boolean
    negocioDir?: boolean
    negocioTel?: boolean
    negocioEmail?: boolean
    clienteNombre?: boolean
    clienteRfc?: boolean
    clienteCp?: boolean
    clienteDir?: boolean
    clienteEmail?: boolean
    clienteTel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ventas?: boolean | facturas$ventasArgs<ExtArgs>
  }, ExtArgs["result"]["facturas"]>

  export type facturasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaid?: boolean
    folio?: boolean
    serie?: boolean
    fecha?: boolean
    moneda?: boolean
    formaPago?: boolean
    metodoPago?: boolean
    usoCfdi?: boolean
    tasaIvaGlobal?: boolean
    observaciones?: boolean
    subtotal?: boolean
    iva?: boolean
    descuentos?: boolean
    total?: boolean
    negocioNombre?: boolean
    negocioRfc?: boolean
    negocioDir?: boolean
    negocioTel?: boolean
    negocioEmail?: boolean
    clienteNombre?: boolean
    clienteRfc?: boolean
    clienteCp?: boolean
    clienteDir?: boolean
    clienteEmail?: boolean
    clienteTel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ventas?: boolean | facturas$ventasArgs<ExtArgs>
  }, ExtArgs["result"]["facturas"]>

  export type facturasSelectScalar = {
    id?: boolean
    ventaid?: boolean
    folio?: boolean
    serie?: boolean
    fecha?: boolean
    moneda?: boolean
    formaPago?: boolean
    metodoPago?: boolean
    usoCfdi?: boolean
    tasaIvaGlobal?: boolean
    observaciones?: boolean
    subtotal?: boolean
    iva?: boolean
    descuentos?: boolean
    total?: boolean
    negocioNombre?: boolean
    negocioRfc?: boolean
    negocioDir?: boolean
    negocioTel?: boolean
    negocioEmail?: boolean
    clienteNombre?: boolean
    clienteRfc?: boolean
    clienteCp?: boolean
    clienteDir?: boolean
    clienteEmail?: boolean
    clienteTel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type facturasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ventaid" | "folio" | "serie" | "fecha" | "moneda" | "formaPago" | "metodoPago" | "usoCfdi" | "tasaIvaGlobal" | "observaciones" | "subtotal" | "iva" | "descuentos" | "total" | "negocioNombre" | "negocioRfc" | "negocioDir" | "negocioTel" | "negocioEmail" | "clienteNombre" | "clienteRfc" | "clienteCp" | "clienteDir" | "clienteEmail" | "clienteTel" | "createdAt" | "updatedAt", ExtArgs["result"]["facturas"]>
  export type facturasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | facturas$itemsArgs<ExtArgs>
    ventas?: boolean | facturas$ventasArgs<ExtArgs>
    _count?: boolean | FacturasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type facturasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | facturas$ventasArgs<ExtArgs>
  }
  export type facturasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | facturas$ventasArgs<ExtArgs>
  }

  export type $facturasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facturas"
    objects: {
      items: Prisma.$factura_itemsPayload<ExtArgs>[]
      ventas: Prisma.$ventasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ventaid: number | null
      folio: string | null
      serie: string | null
      fecha: Date
      moneda: string
      formaPago: string
      metodoPago: string
      usoCfdi: string
      tasaIvaGlobal: Prisma.Decimal
      observaciones: string | null
      subtotal: Prisma.Decimal
      iva: Prisma.Decimal
      descuentos: Prisma.Decimal
      total: Prisma.Decimal
      negocioNombre: string
      negocioRfc: string | null
      negocioDir: string | null
      negocioTel: string | null
      negocioEmail: string | null
      clienteNombre: string
      clienteRfc: string | null
      clienteCp: string | null
      clienteDir: string | null
      clienteEmail: string | null
      clienteTel: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facturas"]>
    composites: {}
  }

  type facturasGetPayload<S extends boolean | null | undefined | facturasDefaultArgs> = $Result.GetResult<Prisma.$facturasPayload, S>

  type facturasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<facturasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturasCountAggregateInputType | true
    }

  export interface facturasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facturas'], meta: { name: 'facturas' } }
    /**
     * Find zero or one Facturas that matches the filter.
     * @param {facturasFindUniqueArgs} args - Arguments to find a Facturas
     * @example
     * // Get one Facturas
     * const facturas = await prisma.facturas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facturasFindUniqueArgs>(args: SelectSubset<T, facturasFindUniqueArgs<ExtArgs>>): Prisma__facturasClient<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facturas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {facturasFindUniqueOrThrowArgs} args - Arguments to find a Facturas
     * @example
     * // Get one Facturas
     * const facturas = await prisma.facturas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facturasFindUniqueOrThrowArgs>(args: SelectSubset<T, facturasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__facturasClient<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturasFindFirstArgs} args - Arguments to find a Facturas
     * @example
     * // Get one Facturas
     * const facturas = await prisma.facturas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facturasFindFirstArgs>(args?: SelectSubset<T, facturasFindFirstArgs<ExtArgs>>): Prisma__facturasClient<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facturas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturasFindFirstOrThrowArgs} args - Arguments to find a Facturas
     * @example
     * // Get one Facturas
     * const facturas = await prisma.facturas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facturasFindFirstOrThrowArgs>(args?: SelectSubset<T, facturasFindFirstOrThrowArgs<ExtArgs>>): Prisma__facturasClient<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturas
     * const facturas = await prisma.facturas.findMany()
     * 
     * // Get first 10 Facturas
     * const facturas = await prisma.facturas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facturasWithIdOnly = await prisma.facturas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends facturasFindManyArgs>(args?: SelectSubset<T, facturasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facturas.
     * @param {facturasCreateArgs} args - Arguments to create a Facturas.
     * @example
     * // Create one Facturas
     * const Facturas = await prisma.facturas.create({
     *   data: {
     *     // ... data to create a Facturas
     *   }
     * })
     * 
     */
    create<T extends facturasCreateArgs>(args: SelectSubset<T, facturasCreateArgs<ExtArgs>>): Prisma__facturasClient<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facturas.
     * @param {facturasCreateManyArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const facturas = await prisma.facturas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends facturasCreateManyArgs>(args?: SelectSubset<T, facturasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facturas and returns the data saved in the database.
     * @param {facturasCreateManyAndReturnArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const facturas = await prisma.facturas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facturas and only return the `id`
     * const facturasWithIdOnly = await prisma.facturas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends facturasCreateManyAndReturnArgs>(args?: SelectSubset<T, facturasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facturas.
     * @param {facturasDeleteArgs} args - Arguments to delete one Facturas.
     * @example
     * // Delete one Facturas
     * const Facturas = await prisma.facturas.delete({
     *   where: {
     *     // ... filter to delete one Facturas
     *   }
     * })
     * 
     */
    delete<T extends facturasDeleteArgs>(args: SelectSubset<T, facturasDeleteArgs<ExtArgs>>): Prisma__facturasClient<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facturas.
     * @param {facturasUpdateArgs} args - Arguments to update one Facturas.
     * @example
     * // Update one Facturas
     * const facturas = await prisma.facturas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends facturasUpdateArgs>(args: SelectSubset<T, facturasUpdateArgs<ExtArgs>>): Prisma__facturasClient<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facturas.
     * @param {facturasDeleteManyArgs} args - Arguments to filter Facturas to delete.
     * @example
     * // Delete a few Facturas
     * const { count } = await prisma.facturas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends facturasDeleteManyArgs>(args?: SelectSubset<T, facturasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturas
     * const facturas = await prisma.facturas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends facturasUpdateManyArgs>(args: SelectSubset<T, facturasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas and returns the data updated in the database.
     * @param {facturasUpdateManyAndReturnArgs} args - Arguments to update many Facturas.
     * @example
     * // Update many Facturas
     * const facturas = await prisma.facturas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facturas and only return the `id`
     * const facturasWithIdOnly = await prisma.facturas.updateManyAndReturn({
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
    updateManyAndReturn<T extends facturasUpdateManyAndReturnArgs>(args: SelectSubset<T, facturasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facturas.
     * @param {facturasUpsertArgs} args - Arguments to update or create a Facturas.
     * @example
     * // Update or create a Facturas
     * const facturas = await prisma.facturas.upsert({
     *   create: {
     *     // ... data to create a Facturas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facturas we want to update
     *   }
     * })
     */
    upsert<T extends facturasUpsertArgs>(args: SelectSubset<T, facturasUpsertArgs<ExtArgs>>): Prisma__facturasClient<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturasCountArgs} args - Arguments to filter Facturas to count.
     * @example
     * // Count the number of Facturas
     * const count = await prisma.facturas.count({
     *   where: {
     *     // ... the filter for the Facturas we want to count
     *   }
     * })
    **/
    count<T extends facturasCountArgs>(
      args?: Subset<T, facturasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacturasAggregateArgs>(args: Subset<T, FacturasAggregateArgs>): Prisma.PrismaPromise<GetFacturasAggregateType<T>>

    /**
     * Group by Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturasGroupByArgs} args - Group by arguments.
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
      T extends facturasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facturasGroupByArgs['orderBy'] }
        : { orderBy?: facturasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, facturasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facturas model
   */
  readonly fields: facturasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facturas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facturasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends facturas$itemsArgs<ExtArgs> = {}>(args?: Subset<T, facturas$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ventas<T extends facturas$ventasArgs<ExtArgs> = {}>(args?: Subset<T, facturas$ventasArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the facturas model
   */
  interface facturasFieldRefs {
    readonly id: FieldRef<"facturas", 'Int'>
    readonly ventaid: FieldRef<"facturas", 'Int'>
    readonly folio: FieldRef<"facturas", 'String'>
    readonly serie: FieldRef<"facturas", 'String'>
    readonly fecha: FieldRef<"facturas", 'DateTime'>
    readonly moneda: FieldRef<"facturas", 'String'>
    readonly formaPago: FieldRef<"facturas", 'String'>
    readonly metodoPago: FieldRef<"facturas", 'String'>
    readonly usoCfdi: FieldRef<"facturas", 'String'>
    readonly tasaIvaGlobal: FieldRef<"facturas", 'Decimal'>
    readonly observaciones: FieldRef<"facturas", 'String'>
    readonly subtotal: FieldRef<"facturas", 'Decimal'>
    readonly iva: FieldRef<"facturas", 'Decimal'>
    readonly descuentos: FieldRef<"facturas", 'Decimal'>
    readonly total: FieldRef<"facturas", 'Decimal'>
    readonly negocioNombre: FieldRef<"facturas", 'String'>
    readonly negocioRfc: FieldRef<"facturas", 'String'>
    readonly negocioDir: FieldRef<"facturas", 'String'>
    readonly negocioTel: FieldRef<"facturas", 'String'>
    readonly negocioEmail: FieldRef<"facturas", 'String'>
    readonly clienteNombre: FieldRef<"facturas", 'String'>
    readonly clienteRfc: FieldRef<"facturas", 'String'>
    readonly clienteCp: FieldRef<"facturas", 'String'>
    readonly clienteDir: FieldRef<"facturas", 'String'>
    readonly clienteEmail: FieldRef<"facturas", 'String'>
    readonly clienteTel: FieldRef<"facturas", 'String'>
    readonly createdAt: FieldRef<"facturas", 'DateTime'>
    readonly updatedAt: FieldRef<"facturas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * facturas findUnique
   */
  export type facturasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasInclude<ExtArgs> | null
    /**
     * Filter, which facturas to fetch.
     */
    where: facturasWhereUniqueInput
  }

  /**
   * facturas findUniqueOrThrow
   */
  export type facturasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasInclude<ExtArgs> | null
    /**
     * Filter, which facturas to fetch.
     */
    where: facturasWhereUniqueInput
  }

  /**
   * facturas findFirst
   */
  export type facturasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasInclude<ExtArgs> | null
    /**
     * Filter, which facturas to fetch.
     */
    where?: facturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facturas to fetch.
     */
    orderBy?: facturasOrderByWithRelationInput | facturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facturas.
     */
    cursor?: facturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facturas.
     */
    distinct?: FacturasScalarFieldEnum | FacturasScalarFieldEnum[]
  }

  /**
   * facturas findFirstOrThrow
   */
  export type facturasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasInclude<ExtArgs> | null
    /**
     * Filter, which facturas to fetch.
     */
    where?: facturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facturas to fetch.
     */
    orderBy?: facturasOrderByWithRelationInput | facturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facturas.
     */
    cursor?: facturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facturas.
     */
    distinct?: FacturasScalarFieldEnum | FacturasScalarFieldEnum[]
  }

  /**
   * facturas findMany
   */
  export type facturasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasInclude<ExtArgs> | null
    /**
     * Filter, which facturas to fetch.
     */
    where?: facturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facturas to fetch.
     */
    orderBy?: facturasOrderByWithRelationInput | facturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facturas.
     */
    cursor?: facturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facturas.
     */
    skip?: number
    distinct?: FacturasScalarFieldEnum | FacturasScalarFieldEnum[]
  }

  /**
   * facturas create
   */
  export type facturasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasInclude<ExtArgs> | null
    /**
     * The data needed to create a facturas.
     */
    data: XOR<facturasCreateInput, facturasUncheckedCreateInput>
  }

  /**
   * facturas createMany
   */
  export type facturasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facturas.
     */
    data: facturasCreateManyInput | facturasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * facturas createManyAndReturn
   */
  export type facturasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * The data used to create many facturas.
     */
    data: facturasCreateManyInput | facturasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * facturas update
   */
  export type facturasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasInclude<ExtArgs> | null
    /**
     * The data needed to update a facturas.
     */
    data: XOR<facturasUpdateInput, facturasUncheckedUpdateInput>
    /**
     * Choose, which facturas to update.
     */
    where: facturasWhereUniqueInput
  }

  /**
   * facturas updateMany
   */
  export type facturasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facturas.
     */
    data: XOR<facturasUpdateManyMutationInput, facturasUncheckedUpdateManyInput>
    /**
     * Filter which facturas to update
     */
    where?: facturasWhereInput
    /**
     * Limit how many facturas to update.
     */
    limit?: number
  }

  /**
   * facturas updateManyAndReturn
   */
  export type facturasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * The data used to update facturas.
     */
    data: XOR<facturasUpdateManyMutationInput, facturasUncheckedUpdateManyInput>
    /**
     * Filter which facturas to update
     */
    where?: facturasWhereInput
    /**
     * Limit how many facturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * facturas upsert
   */
  export type facturasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasInclude<ExtArgs> | null
    /**
     * The filter to search for the facturas to update in case it exists.
     */
    where: facturasWhereUniqueInput
    /**
     * In case the facturas found by the `where` argument doesn't exist, create a new facturas with this data.
     */
    create: XOR<facturasCreateInput, facturasUncheckedCreateInput>
    /**
     * In case the facturas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facturasUpdateInput, facturasUncheckedUpdateInput>
  }

  /**
   * facturas delete
   */
  export type facturasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasInclude<ExtArgs> | null
    /**
     * Filter which facturas to delete.
     */
    where: facturasWhereUniqueInput
  }

  /**
   * facturas deleteMany
   */
  export type facturasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facturas to delete
     */
    where?: facturasWhereInput
    /**
     * Limit how many facturas to delete.
     */
    limit?: number
  }

  /**
   * facturas.items
   */
  export type facturas$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsInclude<ExtArgs> | null
    where?: factura_itemsWhereInput
    orderBy?: factura_itemsOrderByWithRelationInput | factura_itemsOrderByWithRelationInput[]
    cursor?: factura_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Factura_itemsScalarFieldEnum | Factura_itemsScalarFieldEnum[]
  }

  /**
   * facturas.ventas
   */
  export type facturas$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    where?: ventasWhereInput
  }

  /**
   * facturas without action
   */
  export type facturasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturas
     */
    select?: facturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facturas
     */
    omit?: facturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturasInclude<ExtArgs> | null
  }


  /**
   * Model factura_items
   */

  export type AggregateFactura_items = {
    _count: Factura_itemsCountAggregateOutputType | null
    _avg: Factura_itemsAvgAggregateOutputType | null
    _sum: Factura_itemsSumAggregateOutputType | null
    _min: Factura_itemsMinAggregateOutputType | null
    _max: Factura_itemsMaxAggregateOutputType | null
  }

  export type Factura_itemsAvgAggregateOutputType = {
    id: number | null
    facturaId: number | null
    cantidad: Decimal | null
    precio: Decimal | null
    descuento: Decimal | null
    iva: Decimal | null
    importe: Decimal | null
  }

  export type Factura_itemsSumAggregateOutputType = {
    id: number | null
    facturaId: number | null
    cantidad: Decimal | null
    precio: Decimal | null
    descuento: Decimal | null
    iva: Decimal | null
    importe: Decimal | null
  }

  export type Factura_itemsMinAggregateOutputType = {
    id: number | null
    facturaId: number | null
    descripcion: string | null
    cantidad: Decimal | null
    precio: Decimal | null
    descuento: Decimal | null
    iva: Decimal | null
    importe: Decimal | null
  }

  export type Factura_itemsMaxAggregateOutputType = {
    id: number | null
    facturaId: number | null
    descripcion: string | null
    cantidad: Decimal | null
    precio: Decimal | null
    descuento: Decimal | null
    iva: Decimal | null
    importe: Decimal | null
  }

  export type Factura_itemsCountAggregateOutputType = {
    id: number
    facturaId: number
    descripcion: number
    cantidad: number
    precio: number
    descuento: number
    iva: number
    importe: number
    _all: number
  }


  export type Factura_itemsAvgAggregateInputType = {
    id?: true
    facturaId?: true
    cantidad?: true
    precio?: true
    descuento?: true
    iva?: true
    importe?: true
  }

  export type Factura_itemsSumAggregateInputType = {
    id?: true
    facturaId?: true
    cantidad?: true
    precio?: true
    descuento?: true
    iva?: true
    importe?: true
  }

  export type Factura_itemsMinAggregateInputType = {
    id?: true
    facturaId?: true
    descripcion?: true
    cantidad?: true
    precio?: true
    descuento?: true
    iva?: true
    importe?: true
  }

  export type Factura_itemsMaxAggregateInputType = {
    id?: true
    facturaId?: true
    descripcion?: true
    cantidad?: true
    precio?: true
    descuento?: true
    iva?: true
    importe?: true
  }

  export type Factura_itemsCountAggregateInputType = {
    id?: true
    facturaId?: true
    descripcion?: true
    cantidad?: true
    precio?: true
    descuento?: true
    iva?: true
    importe?: true
    _all?: true
  }

  export type Factura_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which factura_items to aggregate.
     */
    where?: factura_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factura_items to fetch.
     */
    orderBy?: factura_itemsOrderByWithRelationInput | factura_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: factura_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factura_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factura_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned factura_items
    **/
    _count?: true | Factura_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Factura_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Factura_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Factura_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Factura_itemsMaxAggregateInputType
  }

  export type GetFactura_itemsAggregateType<T extends Factura_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateFactura_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactura_items[P]>
      : GetScalarType<T[P], AggregateFactura_items[P]>
  }




  export type factura_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: factura_itemsWhereInput
    orderBy?: factura_itemsOrderByWithAggregationInput | factura_itemsOrderByWithAggregationInput[]
    by: Factura_itemsScalarFieldEnum[] | Factura_itemsScalarFieldEnum
    having?: factura_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Factura_itemsCountAggregateInputType | true
    _avg?: Factura_itemsAvgAggregateInputType
    _sum?: Factura_itemsSumAggregateInputType
    _min?: Factura_itemsMinAggregateInputType
    _max?: Factura_itemsMaxAggregateInputType
  }

  export type Factura_itemsGroupByOutputType = {
    id: number
    facturaId: number
    descripcion: string
    cantidad: Decimal
    precio: Decimal
    descuento: Decimal
    iva: Decimal
    importe: Decimal
    _count: Factura_itemsCountAggregateOutputType | null
    _avg: Factura_itemsAvgAggregateOutputType | null
    _sum: Factura_itemsSumAggregateOutputType | null
    _min: Factura_itemsMinAggregateOutputType | null
    _max: Factura_itemsMaxAggregateOutputType | null
  }

  type GetFactura_itemsGroupByPayload<T extends factura_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Factura_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Factura_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Factura_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Factura_itemsGroupByOutputType[P]>
        }
      >
    >


  export type factura_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    descripcion?: boolean
    cantidad?: boolean
    precio?: boolean
    descuento?: boolean
    iva?: boolean
    importe?: boolean
    factura?: boolean | facturasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura_items"]>

  export type factura_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    descripcion?: boolean
    cantidad?: boolean
    precio?: boolean
    descuento?: boolean
    iva?: boolean
    importe?: boolean
    factura?: boolean | facturasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura_items"]>

  export type factura_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    descripcion?: boolean
    cantidad?: boolean
    precio?: boolean
    descuento?: boolean
    iva?: boolean
    importe?: boolean
    factura?: boolean | facturasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura_items"]>

  export type factura_itemsSelectScalar = {
    id?: boolean
    facturaId?: boolean
    descripcion?: boolean
    cantidad?: boolean
    precio?: boolean
    descuento?: boolean
    iva?: boolean
    importe?: boolean
  }

  export type factura_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facturaId" | "descripcion" | "cantidad" | "precio" | "descuento" | "iva" | "importe", ExtArgs["result"]["factura_items"]>
  export type factura_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | facturasDefaultArgs<ExtArgs>
  }
  export type factura_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | facturasDefaultArgs<ExtArgs>
  }
  export type factura_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | facturasDefaultArgs<ExtArgs>
  }

  export type $factura_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "factura_items"
    objects: {
      factura: Prisma.$facturasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facturaId: number
      descripcion: string
      cantidad: Prisma.Decimal
      precio: Prisma.Decimal
      descuento: Prisma.Decimal
      iva: Prisma.Decimal
      importe: Prisma.Decimal
    }, ExtArgs["result"]["factura_items"]>
    composites: {}
  }

  type factura_itemsGetPayload<S extends boolean | null | undefined | factura_itemsDefaultArgs> = $Result.GetResult<Prisma.$factura_itemsPayload, S>

  type factura_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<factura_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Factura_itemsCountAggregateInputType | true
    }

  export interface factura_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['factura_items'], meta: { name: 'factura_items' } }
    /**
     * Find zero or one Factura_items that matches the filter.
     * @param {factura_itemsFindUniqueArgs} args - Arguments to find a Factura_items
     * @example
     * // Get one Factura_items
     * const factura_items = await prisma.factura_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends factura_itemsFindUniqueArgs>(args: SelectSubset<T, factura_itemsFindUniqueArgs<ExtArgs>>): Prisma__factura_itemsClient<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Factura_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {factura_itemsFindUniqueOrThrowArgs} args - Arguments to find a Factura_items
     * @example
     * // Get one Factura_items
     * const factura_items = await prisma.factura_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends factura_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, factura_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__factura_itemsClient<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factura_itemsFindFirstArgs} args - Arguments to find a Factura_items
     * @example
     * // Get one Factura_items
     * const factura_items = await prisma.factura_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends factura_itemsFindFirstArgs>(args?: SelectSubset<T, factura_itemsFindFirstArgs<ExtArgs>>): Prisma__factura_itemsClient<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factura_itemsFindFirstOrThrowArgs} args - Arguments to find a Factura_items
     * @example
     * // Get one Factura_items
     * const factura_items = await prisma.factura_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends factura_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, factura_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__factura_itemsClient<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Factura_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factura_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Factura_items
     * const factura_items = await prisma.factura_items.findMany()
     * 
     * // Get first 10 Factura_items
     * const factura_items = await prisma.factura_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factura_itemsWithIdOnly = await prisma.factura_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends factura_itemsFindManyArgs>(args?: SelectSubset<T, factura_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Factura_items.
     * @param {factura_itemsCreateArgs} args - Arguments to create a Factura_items.
     * @example
     * // Create one Factura_items
     * const Factura_items = await prisma.factura_items.create({
     *   data: {
     *     // ... data to create a Factura_items
     *   }
     * })
     * 
     */
    create<T extends factura_itemsCreateArgs>(args: SelectSubset<T, factura_itemsCreateArgs<ExtArgs>>): Prisma__factura_itemsClient<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Factura_items.
     * @param {factura_itemsCreateManyArgs} args - Arguments to create many Factura_items.
     * @example
     * // Create many Factura_items
     * const factura_items = await prisma.factura_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends factura_itemsCreateManyArgs>(args?: SelectSubset<T, factura_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Factura_items and returns the data saved in the database.
     * @param {factura_itemsCreateManyAndReturnArgs} args - Arguments to create many Factura_items.
     * @example
     * // Create many Factura_items
     * const factura_items = await prisma.factura_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Factura_items and only return the `id`
     * const factura_itemsWithIdOnly = await prisma.factura_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends factura_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, factura_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Factura_items.
     * @param {factura_itemsDeleteArgs} args - Arguments to delete one Factura_items.
     * @example
     * // Delete one Factura_items
     * const Factura_items = await prisma.factura_items.delete({
     *   where: {
     *     // ... filter to delete one Factura_items
     *   }
     * })
     * 
     */
    delete<T extends factura_itemsDeleteArgs>(args: SelectSubset<T, factura_itemsDeleteArgs<ExtArgs>>): Prisma__factura_itemsClient<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Factura_items.
     * @param {factura_itemsUpdateArgs} args - Arguments to update one Factura_items.
     * @example
     * // Update one Factura_items
     * const factura_items = await prisma.factura_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends factura_itemsUpdateArgs>(args: SelectSubset<T, factura_itemsUpdateArgs<ExtArgs>>): Prisma__factura_itemsClient<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Factura_items.
     * @param {factura_itemsDeleteManyArgs} args - Arguments to filter Factura_items to delete.
     * @example
     * // Delete a few Factura_items
     * const { count } = await prisma.factura_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends factura_itemsDeleteManyArgs>(args?: SelectSubset<T, factura_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factura_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factura_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Factura_items
     * const factura_items = await prisma.factura_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends factura_itemsUpdateManyArgs>(args: SelectSubset<T, factura_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factura_items and returns the data updated in the database.
     * @param {factura_itemsUpdateManyAndReturnArgs} args - Arguments to update many Factura_items.
     * @example
     * // Update many Factura_items
     * const factura_items = await prisma.factura_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Factura_items and only return the `id`
     * const factura_itemsWithIdOnly = await prisma.factura_items.updateManyAndReturn({
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
    updateManyAndReturn<T extends factura_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, factura_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Factura_items.
     * @param {factura_itemsUpsertArgs} args - Arguments to update or create a Factura_items.
     * @example
     * // Update or create a Factura_items
     * const factura_items = await prisma.factura_items.upsert({
     *   create: {
     *     // ... data to create a Factura_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factura_items we want to update
     *   }
     * })
     */
    upsert<T extends factura_itemsUpsertArgs>(args: SelectSubset<T, factura_itemsUpsertArgs<ExtArgs>>): Prisma__factura_itemsClient<$Result.GetResult<Prisma.$factura_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Factura_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factura_itemsCountArgs} args - Arguments to filter Factura_items to count.
     * @example
     * // Count the number of Factura_items
     * const count = await prisma.factura_items.count({
     *   where: {
     *     // ... the filter for the Factura_items we want to count
     *   }
     * })
    **/
    count<T extends factura_itemsCountArgs>(
      args?: Subset<T, factura_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Factura_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factura_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Factura_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Factura_itemsAggregateArgs>(args: Subset<T, Factura_itemsAggregateArgs>): Prisma.PrismaPromise<GetFactura_itemsAggregateType<T>>

    /**
     * Group by Factura_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factura_itemsGroupByArgs} args - Group by arguments.
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
      T extends factura_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: factura_itemsGroupByArgs['orderBy'] }
        : { orderBy?: factura_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, factura_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactura_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the factura_items model
   */
  readonly fields: factura_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for factura_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__factura_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factura<T extends facturasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, facturasDefaultArgs<ExtArgs>>): Prisma__facturasClient<$Result.GetResult<Prisma.$facturasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the factura_items model
   */
  interface factura_itemsFieldRefs {
    readonly id: FieldRef<"factura_items", 'Int'>
    readonly facturaId: FieldRef<"factura_items", 'Int'>
    readonly descripcion: FieldRef<"factura_items", 'String'>
    readonly cantidad: FieldRef<"factura_items", 'Decimal'>
    readonly precio: FieldRef<"factura_items", 'Decimal'>
    readonly descuento: FieldRef<"factura_items", 'Decimal'>
    readonly iva: FieldRef<"factura_items", 'Decimal'>
    readonly importe: FieldRef<"factura_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * factura_items findUnique
   */
  export type factura_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsInclude<ExtArgs> | null
    /**
     * Filter, which factura_items to fetch.
     */
    where: factura_itemsWhereUniqueInput
  }

  /**
   * factura_items findUniqueOrThrow
   */
  export type factura_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsInclude<ExtArgs> | null
    /**
     * Filter, which factura_items to fetch.
     */
    where: factura_itemsWhereUniqueInput
  }

  /**
   * factura_items findFirst
   */
  export type factura_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsInclude<ExtArgs> | null
    /**
     * Filter, which factura_items to fetch.
     */
    where?: factura_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factura_items to fetch.
     */
    orderBy?: factura_itemsOrderByWithRelationInput | factura_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for factura_items.
     */
    cursor?: factura_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factura_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factura_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of factura_items.
     */
    distinct?: Factura_itemsScalarFieldEnum | Factura_itemsScalarFieldEnum[]
  }

  /**
   * factura_items findFirstOrThrow
   */
  export type factura_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsInclude<ExtArgs> | null
    /**
     * Filter, which factura_items to fetch.
     */
    where?: factura_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factura_items to fetch.
     */
    orderBy?: factura_itemsOrderByWithRelationInput | factura_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for factura_items.
     */
    cursor?: factura_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factura_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factura_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of factura_items.
     */
    distinct?: Factura_itemsScalarFieldEnum | Factura_itemsScalarFieldEnum[]
  }

  /**
   * factura_items findMany
   */
  export type factura_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsInclude<ExtArgs> | null
    /**
     * Filter, which factura_items to fetch.
     */
    where?: factura_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factura_items to fetch.
     */
    orderBy?: factura_itemsOrderByWithRelationInput | factura_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing factura_items.
     */
    cursor?: factura_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factura_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factura_items.
     */
    skip?: number
    distinct?: Factura_itemsScalarFieldEnum | Factura_itemsScalarFieldEnum[]
  }

  /**
   * factura_items create
   */
  export type factura_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a factura_items.
     */
    data: XOR<factura_itemsCreateInput, factura_itemsUncheckedCreateInput>
  }

  /**
   * factura_items createMany
   */
  export type factura_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many factura_items.
     */
    data: factura_itemsCreateManyInput | factura_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * factura_items createManyAndReturn
   */
  export type factura_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many factura_items.
     */
    data: factura_itemsCreateManyInput | factura_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * factura_items update
   */
  export type factura_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a factura_items.
     */
    data: XOR<factura_itemsUpdateInput, factura_itemsUncheckedUpdateInput>
    /**
     * Choose, which factura_items to update.
     */
    where: factura_itemsWhereUniqueInput
  }

  /**
   * factura_items updateMany
   */
  export type factura_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update factura_items.
     */
    data: XOR<factura_itemsUpdateManyMutationInput, factura_itemsUncheckedUpdateManyInput>
    /**
     * Filter which factura_items to update
     */
    where?: factura_itemsWhereInput
    /**
     * Limit how many factura_items to update.
     */
    limit?: number
  }

  /**
   * factura_items updateManyAndReturn
   */
  export type factura_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * The data used to update factura_items.
     */
    data: XOR<factura_itemsUpdateManyMutationInput, factura_itemsUncheckedUpdateManyInput>
    /**
     * Filter which factura_items to update
     */
    where?: factura_itemsWhereInput
    /**
     * Limit how many factura_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * factura_items upsert
   */
  export type factura_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the factura_items to update in case it exists.
     */
    where: factura_itemsWhereUniqueInput
    /**
     * In case the factura_items found by the `where` argument doesn't exist, create a new factura_items with this data.
     */
    create: XOR<factura_itemsCreateInput, factura_itemsUncheckedCreateInput>
    /**
     * In case the factura_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<factura_itemsUpdateInput, factura_itemsUncheckedUpdateInput>
  }

  /**
   * factura_items delete
   */
  export type factura_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsInclude<ExtArgs> | null
    /**
     * Filter which factura_items to delete.
     */
    where: factura_itemsWhereUniqueInput
  }

  /**
   * factura_items deleteMany
   */
  export type factura_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which factura_items to delete
     */
    where?: factura_itemsWhereInput
    /**
     * Limit how many factura_items to delete.
     */
    limit?: number
  }

  /**
   * factura_items without action
   */
  export type factura_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura_items
     */
    select?: factura_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura_items
     */
    omit?: factura_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factura_itemsInclude<ExtArgs> | null
  }


  /**
   * Model movimientosinventario
   */

  export type AggregateMovimientosinventario = {
    _count: MovimientosinventarioCountAggregateOutputType | null
    _avg: MovimientosinventarioAvgAggregateOutputType | null
    _sum: MovimientosinventarioSumAggregateOutputType | null
    _min: MovimientosinventarioMinAggregateOutputType | null
    _max: MovimientosinventarioMaxAggregateOutputType | null
  }

  export type MovimientosinventarioAvgAggregateOutputType = {
    id: number | null
    productoid: number | null
    cantidad: number | null
  }

  export type MovimientosinventarioSumAggregateOutputType = {
    id: number | null
    productoid: number | null
    cantidad: number | null
  }

  export type MovimientosinventarioMinAggregateOutputType = {
    id: number | null
    productoid: number | null
    tipo: string | null
    cantidad: number | null
    observacion: string | null
    fecha: Date | null
  }

  export type MovimientosinventarioMaxAggregateOutputType = {
    id: number | null
    productoid: number | null
    tipo: string | null
    cantidad: number | null
    observacion: string | null
    fecha: Date | null
  }

  export type MovimientosinventarioCountAggregateOutputType = {
    id: number
    productoid: number
    tipo: number
    cantidad: number
    observacion: number
    fecha: number
    _all: number
  }


  export type MovimientosinventarioAvgAggregateInputType = {
    id?: true
    productoid?: true
    cantidad?: true
  }

  export type MovimientosinventarioSumAggregateInputType = {
    id?: true
    productoid?: true
    cantidad?: true
  }

  export type MovimientosinventarioMinAggregateInputType = {
    id?: true
    productoid?: true
    tipo?: true
    cantidad?: true
    observacion?: true
    fecha?: true
  }

  export type MovimientosinventarioMaxAggregateInputType = {
    id?: true
    productoid?: true
    tipo?: true
    cantidad?: true
    observacion?: true
    fecha?: true
  }

  export type MovimientosinventarioCountAggregateInputType = {
    id?: true
    productoid?: true
    tipo?: true
    cantidad?: true
    observacion?: true
    fecha?: true
    _all?: true
  }

  export type MovimientosinventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimientosinventario to aggregate.
     */
    where?: movimientosinventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientosinventarios to fetch.
     */
    orderBy?: movimientosinventarioOrderByWithRelationInput | movimientosinventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movimientosinventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientosinventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientosinventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movimientosinventarios
    **/
    _count?: true | MovimientosinventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimientosinventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimientosinventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimientosinventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimientosinventarioMaxAggregateInputType
  }

  export type GetMovimientosinventarioAggregateType<T extends MovimientosinventarioAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimientosinventario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimientosinventario[P]>
      : GetScalarType<T[P], AggregateMovimientosinventario[P]>
  }




  export type movimientosinventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientosinventarioWhereInput
    orderBy?: movimientosinventarioOrderByWithAggregationInput | movimientosinventarioOrderByWithAggregationInput[]
    by: MovimientosinventarioScalarFieldEnum[] | MovimientosinventarioScalarFieldEnum
    having?: movimientosinventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimientosinventarioCountAggregateInputType | true
    _avg?: MovimientosinventarioAvgAggregateInputType
    _sum?: MovimientosinventarioSumAggregateInputType
    _min?: MovimientosinventarioMinAggregateInputType
    _max?: MovimientosinventarioMaxAggregateInputType
  }

  export type MovimientosinventarioGroupByOutputType = {
    id: number
    productoid: number | null
    tipo: string | null
    cantidad: number | null
    observacion: string | null
    fecha: Date | null
    _count: MovimientosinventarioCountAggregateOutputType | null
    _avg: MovimientosinventarioAvgAggregateOutputType | null
    _sum: MovimientosinventarioSumAggregateOutputType | null
    _min: MovimientosinventarioMinAggregateOutputType | null
    _max: MovimientosinventarioMaxAggregateOutputType | null
  }

  type GetMovimientosinventarioGroupByPayload<T extends movimientosinventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimientosinventarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimientosinventarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimientosinventarioGroupByOutputType[P]>
            : GetScalarType<T[P], MovimientosinventarioGroupByOutputType[P]>
        }
      >
    >


  export type movimientosinventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoid?: boolean
    tipo?: boolean
    cantidad?: boolean
    observacion?: boolean
    fecha?: boolean
    productos?: boolean | movimientosinventario$productosArgs<ExtArgs>
  }, ExtArgs["result"]["movimientosinventario"]>

  export type movimientosinventarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoid?: boolean
    tipo?: boolean
    cantidad?: boolean
    observacion?: boolean
    fecha?: boolean
    productos?: boolean | movimientosinventario$productosArgs<ExtArgs>
  }, ExtArgs["result"]["movimientosinventario"]>

  export type movimientosinventarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoid?: boolean
    tipo?: boolean
    cantidad?: boolean
    observacion?: boolean
    fecha?: boolean
    productos?: boolean | movimientosinventario$productosArgs<ExtArgs>
  }, ExtArgs["result"]["movimientosinventario"]>

  export type movimientosinventarioSelectScalar = {
    id?: boolean
    productoid?: boolean
    tipo?: boolean
    cantidad?: boolean
    observacion?: boolean
    fecha?: boolean
  }

  export type movimientosinventarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productoid" | "tipo" | "cantidad" | "observacion" | "fecha", ExtArgs["result"]["movimientosinventario"]>
  export type movimientosinventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | movimientosinventario$productosArgs<ExtArgs>
  }
  export type movimientosinventarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | movimientosinventario$productosArgs<ExtArgs>
  }
  export type movimientosinventarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | movimientosinventario$productosArgs<ExtArgs>
  }

  export type $movimientosinventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movimientosinventario"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productoid: number | null
      tipo: string | null
      cantidad: number | null
      observacion: string | null
      fecha: Date | null
    }, ExtArgs["result"]["movimientosinventario"]>
    composites: {}
  }

  type movimientosinventarioGetPayload<S extends boolean | null | undefined | movimientosinventarioDefaultArgs> = $Result.GetResult<Prisma.$movimientosinventarioPayload, S>

  type movimientosinventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<movimientosinventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimientosinventarioCountAggregateInputType | true
    }

  export interface movimientosinventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movimientosinventario'], meta: { name: 'movimientosinventario' } }
    /**
     * Find zero or one Movimientosinventario that matches the filter.
     * @param {movimientosinventarioFindUniqueArgs} args - Arguments to find a Movimientosinventario
     * @example
     * // Get one Movimientosinventario
     * const movimientosinventario = await prisma.movimientosinventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends movimientosinventarioFindUniqueArgs>(args: SelectSubset<T, movimientosinventarioFindUniqueArgs<ExtArgs>>): Prisma__movimientosinventarioClient<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movimientosinventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {movimientosinventarioFindUniqueOrThrowArgs} args - Arguments to find a Movimientosinventario
     * @example
     * // Get one Movimientosinventario
     * const movimientosinventario = await prisma.movimientosinventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends movimientosinventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, movimientosinventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__movimientosinventarioClient<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimientosinventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientosinventarioFindFirstArgs} args - Arguments to find a Movimientosinventario
     * @example
     * // Get one Movimientosinventario
     * const movimientosinventario = await prisma.movimientosinventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends movimientosinventarioFindFirstArgs>(args?: SelectSubset<T, movimientosinventarioFindFirstArgs<ExtArgs>>): Prisma__movimientosinventarioClient<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimientosinventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientosinventarioFindFirstOrThrowArgs} args - Arguments to find a Movimientosinventario
     * @example
     * // Get one Movimientosinventario
     * const movimientosinventario = await prisma.movimientosinventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends movimientosinventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, movimientosinventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__movimientosinventarioClient<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movimientosinventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientosinventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimientosinventarios
     * const movimientosinventarios = await prisma.movimientosinventario.findMany()
     * 
     * // Get first 10 Movimientosinventarios
     * const movimientosinventarios = await prisma.movimientosinventario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimientosinventarioWithIdOnly = await prisma.movimientosinventario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends movimientosinventarioFindManyArgs>(args?: SelectSubset<T, movimientosinventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movimientosinventario.
     * @param {movimientosinventarioCreateArgs} args - Arguments to create a Movimientosinventario.
     * @example
     * // Create one Movimientosinventario
     * const Movimientosinventario = await prisma.movimientosinventario.create({
     *   data: {
     *     // ... data to create a Movimientosinventario
     *   }
     * })
     * 
     */
    create<T extends movimientosinventarioCreateArgs>(args: SelectSubset<T, movimientosinventarioCreateArgs<ExtArgs>>): Prisma__movimientosinventarioClient<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movimientosinventarios.
     * @param {movimientosinventarioCreateManyArgs} args - Arguments to create many Movimientosinventarios.
     * @example
     * // Create many Movimientosinventarios
     * const movimientosinventario = await prisma.movimientosinventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends movimientosinventarioCreateManyArgs>(args?: SelectSubset<T, movimientosinventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movimientosinventarios and returns the data saved in the database.
     * @param {movimientosinventarioCreateManyAndReturnArgs} args - Arguments to create many Movimientosinventarios.
     * @example
     * // Create many Movimientosinventarios
     * const movimientosinventario = await prisma.movimientosinventario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movimientosinventarios and only return the `id`
     * const movimientosinventarioWithIdOnly = await prisma.movimientosinventario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends movimientosinventarioCreateManyAndReturnArgs>(args?: SelectSubset<T, movimientosinventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movimientosinventario.
     * @param {movimientosinventarioDeleteArgs} args - Arguments to delete one Movimientosinventario.
     * @example
     * // Delete one Movimientosinventario
     * const Movimientosinventario = await prisma.movimientosinventario.delete({
     *   where: {
     *     // ... filter to delete one Movimientosinventario
     *   }
     * })
     * 
     */
    delete<T extends movimientosinventarioDeleteArgs>(args: SelectSubset<T, movimientosinventarioDeleteArgs<ExtArgs>>): Prisma__movimientosinventarioClient<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movimientosinventario.
     * @param {movimientosinventarioUpdateArgs} args - Arguments to update one Movimientosinventario.
     * @example
     * // Update one Movimientosinventario
     * const movimientosinventario = await prisma.movimientosinventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends movimientosinventarioUpdateArgs>(args: SelectSubset<T, movimientosinventarioUpdateArgs<ExtArgs>>): Prisma__movimientosinventarioClient<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movimientosinventarios.
     * @param {movimientosinventarioDeleteManyArgs} args - Arguments to filter Movimientosinventarios to delete.
     * @example
     * // Delete a few Movimientosinventarios
     * const { count } = await prisma.movimientosinventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends movimientosinventarioDeleteManyArgs>(args?: SelectSubset<T, movimientosinventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimientosinventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientosinventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimientosinventarios
     * const movimientosinventario = await prisma.movimientosinventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends movimientosinventarioUpdateManyArgs>(args: SelectSubset<T, movimientosinventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimientosinventarios and returns the data updated in the database.
     * @param {movimientosinventarioUpdateManyAndReturnArgs} args - Arguments to update many Movimientosinventarios.
     * @example
     * // Update many Movimientosinventarios
     * const movimientosinventario = await prisma.movimientosinventario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movimientosinventarios and only return the `id`
     * const movimientosinventarioWithIdOnly = await prisma.movimientosinventario.updateManyAndReturn({
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
    updateManyAndReturn<T extends movimientosinventarioUpdateManyAndReturnArgs>(args: SelectSubset<T, movimientosinventarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movimientosinventario.
     * @param {movimientosinventarioUpsertArgs} args - Arguments to update or create a Movimientosinventario.
     * @example
     * // Update or create a Movimientosinventario
     * const movimientosinventario = await prisma.movimientosinventario.upsert({
     *   create: {
     *     // ... data to create a Movimientosinventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimientosinventario we want to update
     *   }
     * })
     */
    upsert<T extends movimientosinventarioUpsertArgs>(args: SelectSubset<T, movimientosinventarioUpsertArgs<ExtArgs>>): Prisma__movimientosinventarioClient<$Result.GetResult<Prisma.$movimientosinventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movimientosinventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientosinventarioCountArgs} args - Arguments to filter Movimientosinventarios to count.
     * @example
     * // Count the number of Movimientosinventarios
     * const count = await prisma.movimientosinventario.count({
     *   where: {
     *     // ... the filter for the Movimientosinventarios we want to count
     *   }
     * })
    **/
    count<T extends movimientosinventarioCountArgs>(
      args?: Subset<T, movimientosinventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimientosinventarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimientosinventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientosinventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimientosinventarioAggregateArgs>(args: Subset<T, MovimientosinventarioAggregateArgs>): Prisma.PrismaPromise<GetMovimientosinventarioAggregateType<T>>

    /**
     * Group by Movimientosinventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientosinventarioGroupByArgs} args - Group by arguments.
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
      T extends movimientosinventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movimientosinventarioGroupByArgs['orderBy'] }
        : { orderBy?: movimientosinventarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, movimientosinventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientosinventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movimientosinventario model
   */
  readonly fields: movimientosinventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movimientosinventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movimientosinventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends movimientosinventario$productosArgs<ExtArgs> = {}>(args?: Subset<T, movimientosinventario$productosArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the movimientosinventario model
   */
  interface movimientosinventarioFieldRefs {
    readonly id: FieldRef<"movimientosinventario", 'Int'>
    readonly productoid: FieldRef<"movimientosinventario", 'Int'>
    readonly tipo: FieldRef<"movimientosinventario", 'String'>
    readonly cantidad: FieldRef<"movimientosinventario", 'Int'>
    readonly observacion: FieldRef<"movimientosinventario", 'String'>
    readonly fecha: FieldRef<"movimientosinventario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * movimientosinventario findUnique
   */
  export type movimientosinventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioInclude<ExtArgs> | null
    /**
     * Filter, which movimientosinventario to fetch.
     */
    where: movimientosinventarioWhereUniqueInput
  }

  /**
   * movimientosinventario findUniqueOrThrow
   */
  export type movimientosinventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioInclude<ExtArgs> | null
    /**
     * Filter, which movimientosinventario to fetch.
     */
    where: movimientosinventarioWhereUniqueInput
  }

  /**
   * movimientosinventario findFirst
   */
  export type movimientosinventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioInclude<ExtArgs> | null
    /**
     * Filter, which movimientosinventario to fetch.
     */
    where?: movimientosinventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientosinventarios to fetch.
     */
    orderBy?: movimientosinventarioOrderByWithRelationInput | movimientosinventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimientosinventarios.
     */
    cursor?: movimientosinventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientosinventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientosinventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimientosinventarios.
     */
    distinct?: MovimientosinventarioScalarFieldEnum | MovimientosinventarioScalarFieldEnum[]
  }

  /**
   * movimientosinventario findFirstOrThrow
   */
  export type movimientosinventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioInclude<ExtArgs> | null
    /**
     * Filter, which movimientosinventario to fetch.
     */
    where?: movimientosinventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientosinventarios to fetch.
     */
    orderBy?: movimientosinventarioOrderByWithRelationInput | movimientosinventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimientosinventarios.
     */
    cursor?: movimientosinventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientosinventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientosinventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimientosinventarios.
     */
    distinct?: MovimientosinventarioScalarFieldEnum | MovimientosinventarioScalarFieldEnum[]
  }

  /**
   * movimientosinventario findMany
   */
  export type movimientosinventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioInclude<ExtArgs> | null
    /**
     * Filter, which movimientosinventarios to fetch.
     */
    where?: movimientosinventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientosinventarios to fetch.
     */
    orderBy?: movimientosinventarioOrderByWithRelationInput | movimientosinventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movimientosinventarios.
     */
    cursor?: movimientosinventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientosinventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientosinventarios.
     */
    skip?: number
    distinct?: MovimientosinventarioScalarFieldEnum | MovimientosinventarioScalarFieldEnum[]
  }

  /**
   * movimientosinventario create
   */
  export type movimientosinventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a movimientosinventario.
     */
    data?: XOR<movimientosinventarioCreateInput, movimientosinventarioUncheckedCreateInput>
  }

  /**
   * movimientosinventario createMany
   */
  export type movimientosinventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movimientosinventarios.
     */
    data: movimientosinventarioCreateManyInput | movimientosinventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movimientosinventario createManyAndReturn
   */
  export type movimientosinventarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * The data used to create many movimientosinventarios.
     */
    data: movimientosinventarioCreateManyInput | movimientosinventarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * movimientosinventario update
   */
  export type movimientosinventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a movimientosinventario.
     */
    data: XOR<movimientosinventarioUpdateInput, movimientosinventarioUncheckedUpdateInput>
    /**
     * Choose, which movimientosinventario to update.
     */
    where: movimientosinventarioWhereUniqueInput
  }

  /**
   * movimientosinventario updateMany
   */
  export type movimientosinventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movimientosinventarios.
     */
    data: XOR<movimientosinventarioUpdateManyMutationInput, movimientosinventarioUncheckedUpdateManyInput>
    /**
     * Filter which movimientosinventarios to update
     */
    where?: movimientosinventarioWhereInput
    /**
     * Limit how many movimientosinventarios to update.
     */
    limit?: number
  }

  /**
   * movimientosinventario updateManyAndReturn
   */
  export type movimientosinventarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * The data used to update movimientosinventarios.
     */
    data: XOR<movimientosinventarioUpdateManyMutationInput, movimientosinventarioUncheckedUpdateManyInput>
    /**
     * Filter which movimientosinventarios to update
     */
    where?: movimientosinventarioWhereInput
    /**
     * Limit how many movimientosinventarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * movimientosinventario upsert
   */
  export type movimientosinventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the movimientosinventario to update in case it exists.
     */
    where: movimientosinventarioWhereUniqueInput
    /**
     * In case the movimientosinventario found by the `where` argument doesn't exist, create a new movimientosinventario with this data.
     */
    create: XOR<movimientosinventarioCreateInput, movimientosinventarioUncheckedCreateInput>
    /**
     * In case the movimientosinventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movimientosinventarioUpdateInput, movimientosinventarioUncheckedUpdateInput>
  }

  /**
   * movimientosinventario delete
   */
  export type movimientosinventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioInclude<ExtArgs> | null
    /**
     * Filter which movimientosinventario to delete.
     */
    where: movimientosinventarioWhereUniqueInput
  }

  /**
   * movimientosinventario deleteMany
   */
  export type movimientosinventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimientosinventarios to delete
     */
    where?: movimientosinventarioWhereInput
    /**
     * Limit how many movimientosinventarios to delete.
     */
    limit?: number
  }

  /**
   * movimientosinventario.productos
   */
  export type movimientosinventario$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
  }

  /**
   * movimientosinventario without action
   */
  export type movimientosinventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientosinventario
     */
    select?: movimientosinventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientosinventario
     */
    omit?: movimientosinventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientosinventarioInclude<ExtArgs> | null
  }


  /**
   * Model reportes
   */

  export type AggregateReportes = {
    _count: ReportesCountAggregateOutputType | null
    _avg: ReportesAvgAggregateOutputType | null
    _sum: ReportesSumAggregateOutputType | null
    _min: ReportesMinAggregateOutputType | null
    _max: ReportesMaxAggregateOutputType | null
  }

  export type ReportesAvgAggregateOutputType = {
    id: number | null
  }

  export type ReportesSumAggregateOutputType = {
    id: number | null
  }

  export type ReportesMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    fecha: Date | null
  }

  export type ReportesMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    fecha: Date | null
  }

  export type ReportesCountAggregateOutputType = {
    id: number
    tipo: number
    datos: number
    fecha: number
    _all: number
  }


  export type ReportesAvgAggregateInputType = {
    id?: true
  }

  export type ReportesSumAggregateInputType = {
    id?: true
  }

  export type ReportesMinAggregateInputType = {
    id?: true
    tipo?: true
    fecha?: true
  }

  export type ReportesMaxAggregateInputType = {
    id?: true
    tipo?: true
    fecha?: true
  }

  export type ReportesCountAggregateInputType = {
    id?: true
    tipo?: true
    datos?: true
    fecha?: true
    _all?: true
  }

  export type ReportesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reportes to aggregate.
     */
    where?: reportesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reportes to fetch.
     */
    orderBy?: reportesOrderByWithRelationInput | reportesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reportes
    **/
    _count?: true | ReportesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportesMaxAggregateInputType
  }

  export type GetReportesAggregateType<T extends ReportesAggregateArgs> = {
        [P in keyof T & keyof AggregateReportes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportes[P]>
      : GetScalarType<T[P], AggregateReportes[P]>
  }




  export type reportesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportesWhereInput
    orderBy?: reportesOrderByWithAggregationInput | reportesOrderByWithAggregationInput[]
    by: ReportesScalarFieldEnum[] | ReportesScalarFieldEnum
    having?: reportesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportesCountAggregateInputType | true
    _avg?: ReportesAvgAggregateInputType
    _sum?: ReportesSumAggregateInputType
    _min?: ReportesMinAggregateInputType
    _max?: ReportesMaxAggregateInputType
  }

  export type ReportesGroupByOutputType = {
    id: number
    tipo: string | null
    datos: JsonValue | null
    fecha: Date | null
    _count: ReportesCountAggregateOutputType | null
    _avg: ReportesAvgAggregateOutputType | null
    _sum: ReportesSumAggregateOutputType | null
    _min: ReportesMinAggregateOutputType | null
    _max: ReportesMaxAggregateOutputType | null
  }

  type GetReportesGroupByPayload<T extends reportesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportesGroupByOutputType[P]>
            : GetScalarType<T[P], ReportesGroupByOutputType[P]>
        }
      >
    >


  export type reportesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    datos?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["reportes"]>

  export type reportesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    datos?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["reportes"]>

  export type reportesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    datos?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["reportes"]>

  export type reportesSelectScalar = {
    id?: boolean
    tipo?: boolean
    datos?: boolean
    fecha?: boolean
  }

  export type reportesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "datos" | "fecha", ExtArgs["result"]["reportes"]>

  export type $reportesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reportes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string | null
      datos: Prisma.JsonValue | null
      fecha: Date | null
    }, ExtArgs["result"]["reportes"]>
    composites: {}
  }

  type reportesGetPayload<S extends boolean | null | undefined | reportesDefaultArgs> = $Result.GetResult<Prisma.$reportesPayload, S>

  type reportesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportesCountAggregateInputType | true
    }

  export interface reportesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reportes'], meta: { name: 'reportes' } }
    /**
     * Find zero or one Reportes that matches the filter.
     * @param {reportesFindUniqueArgs} args - Arguments to find a Reportes
     * @example
     * // Get one Reportes
     * const reportes = await prisma.reportes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportesFindUniqueArgs>(args: SelectSubset<T, reportesFindUniqueArgs<ExtArgs>>): Prisma__reportesClient<$Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reportes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportesFindUniqueOrThrowArgs} args - Arguments to find a Reportes
     * @example
     * // Get one Reportes
     * const reportes = await prisma.reportes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportesFindUniqueOrThrowArgs>(args: SelectSubset<T, reportesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportesClient<$Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reportes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportesFindFirstArgs} args - Arguments to find a Reportes
     * @example
     * // Get one Reportes
     * const reportes = await prisma.reportes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportesFindFirstArgs>(args?: SelectSubset<T, reportesFindFirstArgs<ExtArgs>>): Prisma__reportesClient<$Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reportes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportesFindFirstOrThrowArgs} args - Arguments to find a Reportes
     * @example
     * // Get one Reportes
     * const reportes = await prisma.reportes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportesFindFirstOrThrowArgs>(args?: SelectSubset<T, reportesFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportesClient<$Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reportes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reportes
     * const reportes = await prisma.reportes.findMany()
     * 
     * // Get first 10 Reportes
     * const reportes = await prisma.reportes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportesWithIdOnly = await prisma.reportes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reportesFindManyArgs>(args?: SelectSubset<T, reportesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reportes.
     * @param {reportesCreateArgs} args - Arguments to create a Reportes.
     * @example
     * // Create one Reportes
     * const Reportes = await prisma.reportes.create({
     *   data: {
     *     // ... data to create a Reportes
     *   }
     * })
     * 
     */
    create<T extends reportesCreateArgs>(args: SelectSubset<T, reportesCreateArgs<ExtArgs>>): Prisma__reportesClient<$Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reportes.
     * @param {reportesCreateManyArgs} args - Arguments to create many Reportes.
     * @example
     * // Create many Reportes
     * const reportes = await prisma.reportes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportesCreateManyArgs>(args?: SelectSubset<T, reportesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reportes and returns the data saved in the database.
     * @param {reportesCreateManyAndReturnArgs} args - Arguments to create many Reportes.
     * @example
     * // Create many Reportes
     * const reportes = await prisma.reportes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reportes and only return the `id`
     * const reportesWithIdOnly = await prisma.reportes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reportesCreateManyAndReturnArgs>(args?: SelectSubset<T, reportesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reportes.
     * @param {reportesDeleteArgs} args - Arguments to delete one Reportes.
     * @example
     * // Delete one Reportes
     * const Reportes = await prisma.reportes.delete({
     *   where: {
     *     // ... filter to delete one Reportes
     *   }
     * })
     * 
     */
    delete<T extends reportesDeleteArgs>(args: SelectSubset<T, reportesDeleteArgs<ExtArgs>>): Prisma__reportesClient<$Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reportes.
     * @param {reportesUpdateArgs} args - Arguments to update one Reportes.
     * @example
     * // Update one Reportes
     * const reportes = await prisma.reportes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportesUpdateArgs>(args: SelectSubset<T, reportesUpdateArgs<ExtArgs>>): Prisma__reportesClient<$Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reportes.
     * @param {reportesDeleteManyArgs} args - Arguments to filter Reportes to delete.
     * @example
     * // Delete a few Reportes
     * const { count } = await prisma.reportes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportesDeleteManyArgs>(args?: SelectSubset<T, reportesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reportes
     * const reportes = await prisma.reportes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportesUpdateManyArgs>(args: SelectSubset<T, reportesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reportes and returns the data updated in the database.
     * @param {reportesUpdateManyAndReturnArgs} args - Arguments to update many Reportes.
     * @example
     * // Update many Reportes
     * const reportes = await prisma.reportes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reportes and only return the `id`
     * const reportesWithIdOnly = await prisma.reportes.updateManyAndReturn({
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
    updateManyAndReturn<T extends reportesUpdateManyAndReturnArgs>(args: SelectSubset<T, reportesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reportes.
     * @param {reportesUpsertArgs} args - Arguments to update or create a Reportes.
     * @example
     * // Update or create a Reportes
     * const reportes = await prisma.reportes.upsert({
     *   create: {
     *     // ... data to create a Reportes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reportes we want to update
     *   }
     * })
     */
    upsert<T extends reportesUpsertArgs>(args: SelectSubset<T, reportesUpsertArgs<ExtArgs>>): Prisma__reportesClient<$Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportesCountArgs} args - Arguments to filter Reportes to count.
     * @example
     * // Count the number of Reportes
     * const count = await prisma.reportes.count({
     *   where: {
     *     // ... the filter for the Reportes we want to count
     *   }
     * })
    **/
    count<T extends reportesCountArgs>(
      args?: Subset<T, reportesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportesAggregateArgs>(args: Subset<T, ReportesAggregateArgs>): Prisma.PrismaPromise<GetReportesAggregateType<T>>

    /**
     * Group by Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportesGroupByArgs} args - Group by arguments.
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
      T extends reportesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportesGroupByArgs['orderBy'] }
        : { orderBy?: reportesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reportesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reportes model
   */
  readonly fields: reportesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reportes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the reportes model
   */
  interface reportesFieldRefs {
    readonly id: FieldRef<"reportes", 'Int'>
    readonly tipo: FieldRef<"reportes", 'String'>
    readonly datos: FieldRef<"reportes", 'Json'>
    readonly fecha: FieldRef<"reportes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reportes findUnique
   */
  export type reportesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
    /**
     * Filter, which reportes to fetch.
     */
    where: reportesWhereUniqueInput
  }

  /**
   * reportes findUniqueOrThrow
   */
  export type reportesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
    /**
     * Filter, which reportes to fetch.
     */
    where: reportesWhereUniqueInput
  }

  /**
   * reportes findFirst
   */
  export type reportesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
    /**
     * Filter, which reportes to fetch.
     */
    where?: reportesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reportes to fetch.
     */
    orderBy?: reportesOrderByWithRelationInput | reportesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reportes.
     */
    cursor?: reportesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reportes.
     */
    distinct?: ReportesScalarFieldEnum | ReportesScalarFieldEnum[]
  }

  /**
   * reportes findFirstOrThrow
   */
  export type reportesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
    /**
     * Filter, which reportes to fetch.
     */
    where?: reportesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reportes to fetch.
     */
    orderBy?: reportesOrderByWithRelationInput | reportesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reportes.
     */
    cursor?: reportesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reportes.
     */
    distinct?: ReportesScalarFieldEnum | ReportesScalarFieldEnum[]
  }

  /**
   * reportes findMany
   */
  export type reportesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
    /**
     * Filter, which reportes to fetch.
     */
    where?: reportesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reportes to fetch.
     */
    orderBy?: reportesOrderByWithRelationInput | reportesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reportes.
     */
    cursor?: reportesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reportes.
     */
    skip?: number
    distinct?: ReportesScalarFieldEnum | ReportesScalarFieldEnum[]
  }

  /**
   * reportes create
   */
  export type reportesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
    /**
     * The data needed to create a reportes.
     */
    data?: XOR<reportesCreateInput, reportesUncheckedCreateInput>
  }

  /**
   * reportes createMany
   */
  export type reportesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reportes.
     */
    data: reportesCreateManyInput | reportesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reportes createManyAndReturn
   */
  export type reportesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
    /**
     * The data used to create many reportes.
     */
    data: reportesCreateManyInput | reportesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reportes update
   */
  export type reportesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
    /**
     * The data needed to update a reportes.
     */
    data: XOR<reportesUpdateInput, reportesUncheckedUpdateInput>
    /**
     * Choose, which reportes to update.
     */
    where: reportesWhereUniqueInput
  }

  /**
   * reportes updateMany
   */
  export type reportesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reportes.
     */
    data: XOR<reportesUpdateManyMutationInput, reportesUncheckedUpdateManyInput>
    /**
     * Filter which reportes to update
     */
    where?: reportesWhereInput
    /**
     * Limit how many reportes to update.
     */
    limit?: number
  }

  /**
   * reportes updateManyAndReturn
   */
  export type reportesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
    /**
     * The data used to update reportes.
     */
    data: XOR<reportesUpdateManyMutationInput, reportesUncheckedUpdateManyInput>
    /**
     * Filter which reportes to update
     */
    where?: reportesWhereInput
    /**
     * Limit how many reportes to update.
     */
    limit?: number
  }

  /**
   * reportes upsert
   */
  export type reportesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
    /**
     * The filter to search for the reportes to update in case it exists.
     */
    where: reportesWhereUniqueInput
    /**
     * In case the reportes found by the `where` argument doesn't exist, create a new reportes with this data.
     */
    create: XOR<reportesCreateInput, reportesUncheckedCreateInput>
    /**
     * In case the reportes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportesUpdateInput, reportesUncheckedUpdateInput>
  }

  /**
   * reportes delete
   */
  export type reportesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
    /**
     * Filter which reportes to delete.
     */
    where: reportesWhereUniqueInput
  }

  /**
   * reportes deleteMany
   */
  export type reportesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reportes to delete
     */
    where?: reportesWhereInput
    /**
     * Limit how many reportes to delete.
     */
    limit?: number
  }

  /**
   * reportes without action
   */
  export type reportesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: reportesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportes
     */
    omit?: reportesOmit<ExtArgs> | null
  }


  /**
   * Model Carrito
   */

  export type AggregateCarrito = {
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  export type CarritoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CarritoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CarritoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    creadoEn: Date | null
    estado: string | null
  }

  export type CarritoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    creadoEn: Date | null
    estado: string | null
  }

  export type CarritoCountAggregateOutputType = {
    id: number
    usuarioId: number
    creadoEn: number
    estado: number
    _all: number
  }


  export type CarritoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CarritoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CarritoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    creadoEn?: true
    estado?: true
  }

  export type CarritoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    creadoEn?: true
    estado?: true
  }

  export type CarritoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    creadoEn?: true
    estado?: true
    _all?: true
  }

  export type CarritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrito to aggregate.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carritos
    **/
    _count?: true | CarritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarritoMaxAggregateInputType
  }

  export type GetCarritoAggregateType<T extends CarritoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrito[P]>
      : GetScalarType<T[P], AggregateCarrito[P]>
  }




  export type CarritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoWhereInput
    orderBy?: CarritoOrderByWithAggregationInput | CarritoOrderByWithAggregationInput[]
    by: CarritoScalarFieldEnum[] | CarritoScalarFieldEnum
    having?: CarritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarritoCountAggregateInputType | true
    _avg?: CarritoAvgAggregateInputType
    _sum?: CarritoSumAggregateInputType
    _min?: CarritoMinAggregateInputType
    _max?: CarritoMaxAggregateInputType
  }

  export type CarritoGroupByOutputType = {
    id: number
    usuarioId: number
    creadoEn: Date
    estado: string
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  type GetCarritoGroupByPayload<T extends CarritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarritoGroupByOutputType[P]>
            : GetScalarType<T[P], CarritoGroupByOutputType[P]>
        }
      >
    >


  export type CarritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    creadoEn?: boolean
    estado?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    items?: boolean | Carrito$itemsArgs<ExtArgs>
    _count?: boolean | CarritoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrito"]>

  export type CarritoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    creadoEn?: boolean
    estado?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrito"]>

  export type CarritoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    creadoEn?: boolean
    estado?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrito"]>

  export type CarritoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    creadoEn?: boolean
    estado?: boolean
  }

  export type CarritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "creadoEn" | "estado", ExtArgs["result"]["carrito"]>
  export type CarritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    items?: boolean | Carrito$itemsArgs<ExtArgs>
    _count?: boolean | CarritoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarritoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type CarritoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $CarritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrito"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      items: Prisma.$CarritoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      creadoEn: Date
      estado: string
    }, ExtArgs["result"]["carrito"]>
    composites: {}
  }

  type CarritoGetPayload<S extends boolean | null | undefined | CarritoDefaultArgs> = $Result.GetResult<Prisma.$CarritoPayload, S>

  type CarritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarritoCountAggregateInputType | true
    }

  export interface CarritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrito'], meta: { name: 'Carrito' } }
    /**
     * Find zero or one Carrito that matches the filter.
     * @param {CarritoFindUniqueArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarritoFindUniqueArgs>(args: SelectSubset<T, CarritoFindUniqueArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarritoFindUniqueOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarritoFindUniqueOrThrowArgs>(args: SelectSubset<T, CarritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarritoFindFirstArgs>(args?: SelectSubset<T, CarritoFindFirstArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarritoFindFirstOrThrowArgs>(args?: SelectSubset<T, CarritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carritos
     * const carritos = await prisma.carrito.findMany()
     * 
     * // Get first 10 Carritos
     * const carritos = await prisma.carrito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carritoWithIdOnly = await prisma.carrito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarritoFindManyArgs>(args?: SelectSubset<T, CarritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrito.
     * @param {CarritoCreateArgs} args - Arguments to create a Carrito.
     * @example
     * // Create one Carrito
     * const Carrito = await prisma.carrito.create({
     *   data: {
     *     // ... data to create a Carrito
     *   }
     * })
     * 
     */
    create<T extends CarritoCreateArgs>(args: SelectSubset<T, CarritoCreateArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carritos.
     * @param {CarritoCreateManyArgs} args - Arguments to create many Carritos.
     * @example
     * // Create many Carritos
     * const carrito = await prisma.carrito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarritoCreateManyArgs>(args?: SelectSubset<T, CarritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carritos and returns the data saved in the database.
     * @param {CarritoCreateManyAndReturnArgs} args - Arguments to create many Carritos.
     * @example
     * // Create many Carritos
     * const carrito = await prisma.carrito.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carritos and only return the `id`
     * const carritoWithIdOnly = await prisma.carrito.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarritoCreateManyAndReturnArgs>(args?: SelectSubset<T, CarritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrito.
     * @param {CarritoDeleteArgs} args - Arguments to delete one Carrito.
     * @example
     * // Delete one Carrito
     * const Carrito = await prisma.carrito.delete({
     *   where: {
     *     // ... filter to delete one Carrito
     *   }
     * })
     * 
     */
    delete<T extends CarritoDeleteArgs>(args: SelectSubset<T, CarritoDeleteArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrito.
     * @param {CarritoUpdateArgs} args - Arguments to update one Carrito.
     * @example
     * // Update one Carrito
     * const carrito = await prisma.carrito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarritoUpdateArgs>(args: SelectSubset<T, CarritoUpdateArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carritos.
     * @param {CarritoDeleteManyArgs} args - Arguments to filter Carritos to delete.
     * @example
     * // Delete a few Carritos
     * const { count } = await prisma.carrito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarritoDeleteManyArgs>(args?: SelectSubset<T, CarritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carritos
     * const carrito = await prisma.carrito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarritoUpdateManyArgs>(args: SelectSubset<T, CarritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carritos and returns the data updated in the database.
     * @param {CarritoUpdateManyAndReturnArgs} args - Arguments to update many Carritos.
     * @example
     * // Update many Carritos
     * const carrito = await prisma.carrito.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carritos and only return the `id`
     * const carritoWithIdOnly = await prisma.carrito.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarritoUpdateManyAndReturnArgs>(args: SelectSubset<T, CarritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrito.
     * @param {CarritoUpsertArgs} args - Arguments to update or create a Carrito.
     * @example
     * // Update or create a Carrito
     * const carrito = await prisma.carrito.upsert({
     *   create: {
     *     // ... data to create a Carrito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrito we want to update
     *   }
     * })
     */
    upsert<T extends CarritoUpsertArgs>(args: SelectSubset<T, CarritoUpsertArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoCountArgs} args - Arguments to filter Carritos to count.
     * @example
     * // Count the number of Carritos
     * const count = await prisma.carrito.count({
     *   where: {
     *     // ... the filter for the Carritos we want to count
     *   }
     * })
    **/
    count<T extends CarritoCountArgs>(
      args?: Subset<T, CarritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarritoAggregateArgs>(args: Subset<T, CarritoAggregateArgs>): Prisma.PrismaPromise<GetCarritoAggregateType<T>>

    /**
     * Group by Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoGroupByArgs} args - Group by arguments.
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
      T extends CarritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarritoGroupByArgs['orderBy'] }
        : { orderBy?: CarritoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrito model
   */
  readonly fields: CarritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Carrito$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Carrito$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Carrito model
   */
  interface CarritoFieldRefs {
    readonly id: FieldRef<"Carrito", 'Int'>
    readonly usuarioId: FieldRef<"Carrito", 'Int'>
    readonly creadoEn: FieldRef<"Carrito", 'DateTime'>
    readonly estado: FieldRef<"Carrito", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Carrito findUnique
   */
  export type CarritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito findUniqueOrThrow
   */
  export type CarritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito findFirst
   */
  export type CarritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito findFirstOrThrow
   */
  export type CarritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito findMany
   */
  export type CarritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carritos to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito create
   */
  export type CarritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrito.
     */
    data: XOR<CarritoCreateInput, CarritoUncheckedCreateInput>
  }

  /**
   * Carrito createMany
   */
  export type CarritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carritos.
     */
    data: CarritoCreateManyInput | CarritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrito createManyAndReturn
   */
  export type CarritoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * The data used to create many Carritos.
     */
    data: CarritoCreateManyInput | CarritoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carrito update
   */
  export type CarritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrito.
     */
    data: XOR<CarritoUpdateInput, CarritoUncheckedUpdateInput>
    /**
     * Choose, which Carrito to update.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito updateMany
   */
  export type CarritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carritos.
     */
    data: XOR<CarritoUpdateManyMutationInput, CarritoUncheckedUpdateManyInput>
    /**
     * Filter which Carritos to update
     */
    where?: CarritoWhereInput
    /**
     * Limit how many Carritos to update.
     */
    limit?: number
  }

  /**
   * Carrito updateManyAndReturn
   */
  export type CarritoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * The data used to update Carritos.
     */
    data: XOR<CarritoUpdateManyMutationInput, CarritoUncheckedUpdateManyInput>
    /**
     * Filter which Carritos to update
     */
    where?: CarritoWhereInput
    /**
     * Limit how many Carritos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carrito upsert
   */
  export type CarritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrito to update in case it exists.
     */
    where: CarritoWhereUniqueInput
    /**
     * In case the Carrito found by the `where` argument doesn't exist, create a new Carrito with this data.
     */
    create: XOR<CarritoCreateInput, CarritoUncheckedCreateInput>
    /**
     * In case the Carrito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarritoUpdateInput, CarritoUncheckedUpdateInput>
  }

  /**
   * Carrito delete
   */
  export type CarritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter which Carrito to delete.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito deleteMany
   */
  export type CarritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carritos to delete
     */
    where?: CarritoWhereInput
    /**
     * Limit how many Carritos to delete.
     */
    limit?: number
  }

  /**
   * Carrito.items
   */
  export type Carrito$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    where?: CarritoItemWhereInput
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    cursor?: CarritoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * Carrito without action
   */
  export type CarritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
  }


  /**
   * Model CarritoItem
   */

  export type AggregateCarritoItem = {
    _count: CarritoItemCountAggregateOutputType | null
    _avg: CarritoItemAvgAggregateOutputType | null
    _sum: CarritoItemSumAggregateOutputType | null
    _min: CarritoItemMinAggregateOutputType | null
    _max: CarritoItemMaxAggregateOutputType | null
  }

  export type CarritoItemAvgAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
    precio: number | null
  }

  export type CarritoItemSumAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
    precio: number | null
  }

  export type CarritoItemMinAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
    precio: number | null
  }

  export type CarritoItemMaxAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
    precio: number | null
  }

  export type CarritoItemCountAggregateOutputType = {
    id: number
    carritoId: number
    productoId: number
    cantidad: number
    precio: number
    _all: number
  }


  export type CarritoItemAvgAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
    precio?: true
  }

  export type CarritoItemSumAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
    precio?: true
  }

  export type CarritoItemMinAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
    precio?: true
  }

  export type CarritoItemMaxAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
    precio?: true
  }

  export type CarritoItemCountAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
    precio?: true
    _all?: true
  }

  export type CarritoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarritoItem to aggregate.
     */
    where?: CarritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoItems to fetch.
     */
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarritoItems
    **/
    _count?: true | CarritoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarritoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarritoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarritoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarritoItemMaxAggregateInputType
  }

  export type GetCarritoItemAggregateType<T extends CarritoItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCarritoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarritoItem[P]>
      : GetScalarType<T[P], AggregateCarritoItem[P]>
  }




  export type CarritoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoItemWhereInput
    orderBy?: CarritoItemOrderByWithAggregationInput | CarritoItemOrderByWithAggregationInput[]
    by: CarritoItemScalarFieldEnum[] | CarritoItemScalarFieldEnum
    having?: CarritoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarritoItemCountAggregateInputType | true
    _avg?: CarritoItemAvgAggregateInputType
    _sum?: CarritoItemSumAggregateInputType
    _min?: CarritoItemMinAggregateInputType
    _max?: CarritoItemMaxAggregateInputType
  }

  export type CarritoItemGroupByOutputType = {
    id: number
    carritoId: number
    productoId: number
    cantidad: number
    precio: number
    _count: CarritoItemCountAggregateOutputType | null
    _avg: CarritoItemAvgAggregateOutputType | null
    _sum: CarritoItemSumAggregateOutputType | null
    _min: CarritoItemMinAggregateOutputType | null
    _max: CarritoItemMaxAggregateOutputType | null
  }

  type GetCarritoItemGroupByPayload<T extends CarritoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarritoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarritoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarritoItemGroupByOutputType[P]>
            : GetScalarType<T[P], CarritoItemGroupByOutputType[P]>
        }
      >
    >


  export type CarritoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carritoId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precio?: boolean
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | productosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carritoItem"]>

  export type CarritoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carritoId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precio?: boolean
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | productosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carritoItem"]>

  export type CarritoItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carritoId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precio?: boolean
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | productosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carritoItem"]>

  export type CarritoItemSelectScalar = {
    id?: boolean
    carritoId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precio?: boolean
  }

  export type CarritoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carritoId" | "productoId" | "cantidad" | "precio", ExtArgs["result"]["carritoItem"]>
  export type CarritoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | productosDefaultArgs<ExtArgs>
  }
  export type CarritoItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | productosDefaultArgs<ExtArgs>
  }
  export type CarritoItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | productosDefaultArgs<ExtArgs>
  }

  export type $CarritoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarritoItem"
    objects: {
      carrito: Prisma.$CarritoPayload<ExtArgs>
      producto: Prisma.$productosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carritoId: number
      productoId: number
      cantidad: number
      precio: number
    }, ExtArgs["result"]["carritoItem"]>
    composites: {}
  }

  type CarritoItemGetPayload<S extends boolean | null | undefined | CarritoItemDefaultArgs> = $Result.GetResult<Prisma.$CarritoItemPayload, S>

  type CarritoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarritoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarritoItemCountAggregateInputType | true
    }

  export interface CarritoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarritoItem'], meta: { name: 'CarritoItem' } }
    /**
     * Find zero or one CarritoItem that matches the filter.
     * @param {CarritoItemFindUniqueArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarritoItemFindUniqueArgs>(args: SelectSubset<T, CarritoItemFindUniqueArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarritoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarritoItemFindUniqueOrThrowArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarritoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CarritoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarritoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemFindFirstArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarritoItemFindFirstArgs>(args?: SelectSubset<T, CarritoItemFindFirstArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarritoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemFindFirstOrThrowArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarritoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CarritoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarritoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarritoItems
     * const carritoItems = await prisma.carritoItem.findMany()
     * 
     * // Get first 10 CarritoItems
     * const carritoItems = await prisma.carritoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carritoItemWithIdOnly = await prisma.carritoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarritoItemFindManyArgs>(args?: SelectSubset<T, CarritoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarritoItem.
     * @param {CarritoItemCreateArgs} args - Arguments to create a CarritoItem.
     * @example
     * // Create one CarritoItem
     * const CarritoItem = await prisma.carritoItem.create({
     *   data: {
     *     // ... data to create a CarritoItem
     *   }
     * })
     * 
     */
    create<T extends CarritoItemCreateArgs>(args: SelectSubset<T, CarritoItemCreateArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarritoItems.
     * @param {CarritoItemCreateManyArgs} args - Arguments to create many CarritoItems.
     * @example
     * // Create many CarritoItems
     * const carritoItem = await prisma.carritoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarritoItemCreateManyArgs>(args?: SelectSubset<T, CarritoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarritoItems and returns the data saved in the database.
     * @param {CarritoItemCreateManyAndReturnArgs} args - Arguments to create many CarritoItems.
     * @example
     * // Create many CarritoItems
     * const carritoItem = await prisma.carritoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarritoItems and only return the `id`
     * const carritoItemWithIdOnly = await prisma.carritoItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarritoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CarritoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarritoItem.
     * @param {CarritoItemDeleteArgs} args - Arguments to delete one CarritoItem.
     * @example
     * // Delete one CarritoItem
     * const CarritoItem = await prisma.carritoItem.delete({
     *   where: {
     *     // ... filter to delete one CarritoItem
     *   }
     * })
     * 
     */
    delete<T extends CarritoItemDeleteArgs>(args: SelectSubset<T, CarritoItemDeleteArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarritoItem.
     * @param {CarritoItemUpdateArgs} args - Arguments to update one CarritoItem.
     * @example
     * // Update one CarritoItem
     * const carritoItem = await prisma.carritoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarritoItemUpdateArgs>(args: SelectSubset<T, CarritoItemUpdateArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarritoItems.
     * @param {CarritoItemDeleteManyArgs} args - Arguments to filter CarritoItems to delete.
     * @example
     * // Delete a few CarritoItems
     * const { count } = await prisma.carritoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarritoItemDeleteManyArgs>(args?: SelectSubset<T, CarritoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarritoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarritoItems
     * const carritoItem = await prisma.carritoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarritoItemUpdateManyArgs>(args: SelectSubset<T, CarritoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarritoItems and returns the data updated in the database.
     * @param {CarritoItemUpdateManyAndReturnArgs} args - Arguments to update many CarritoItems.
     * @example
     * // Update many CarritoItems
     * const carritoItem = await prisma.carritoItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarritoItems and only return the `id`
     * const carritoItemWithIdOnly = await prisma.carritoItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarritoItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CarritoItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarritoItem.
     * @param {CarritoItemUpsertArgs} args - Arguments to update or create a CarritoItem.
     * @example
     * // Update or create a CarritoItem
     * const carritoItem = await prisma.carritoItem.upsert({
     *   create: {
     *     // ... data to create a CarritoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarritoItem we want to update
     *   }
     * })
     */
    upsert<T extends CarritoItemUpsertArgs>(args: SelectSubset<T, CarritoItemUpsertArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarritoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemCountArgs} args - Arguments to filter CarritoItems to count.
     * @example
     * // Count the number of CarritoItems
     * const count = await prisma.carritoItem.count({
     *   where: {
     *     // ... the filter for the CarritoItems we want to count
     *   }
     * })
    **/
    count<T extends CarritoItemCountArgs>(
      args?: Subset<T, CarritoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarritoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarritoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarritoItemAggregateArgs>(args: Subset<T, CarritoItemAggregateArgs>): Prisma.PrismaPromise<GetCarritoItemAggregateType<T>>

    /**
     * Group by CarritoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemGroupByArgs} args - Group by arguments.
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
      T extends CarritoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarritoItemGroupByArgs['orderBy'] }
        : { orderBy?: CarritoItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarritoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarritoItem model
   */
  readonly fields: CarritoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarritoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarritoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrito<T extends CarritoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarritoDefaultArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends productosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productosDefaultArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CarritoItem model
   */
  interface CarritoItemFieldRefs {
    readonly id: FieldRef<"CarritoItem", 'Int'>
    readonly carritoId: FieldRef<"CarritoItem", 'Int'>
    readonly productoId: FieldRef<"CarritoItem", 'Int'>
    readonly cantidad: FieldRef<"CarritoItem", 'Int'>
    readonly precio: FieldRef<"CarritoItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CarritoItem findUnique
   */
  export type CarritoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter, which CarritoItem to fetch.
     */
    where: CarritoItemWhereUniqueInput
  }

  /**
   * CarritoItem findUniqueOrThrow
   */
  export type CarritoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter, which CarritoItem to fetch.
     */
    where: CarritoItemWhereUniqueInput
  }

  /**
   * CarritoItem findFirst
   */
  export type CarritoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter, which CarritoItem to fetch.
     */
    where?: CarritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoItems to fetch.
     */
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarritoItems.
     */
    cursor?: CarritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarritoItems.
     */
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * CarritoItem findFirstOrThrow
   */
  export type CarritoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter, which CarritoItem to fetch.
     */
    where?: CarritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoItems to fetch.
     */
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarritoItems.
     */
    cursor?: CarritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarritoItems.
     */
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * CarritoItem findMany
   */
  export type CarritoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter, which CarritoItems to fetch.
     */
    where?: CarritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoItems to fetch.
     */
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarritoItems.
     */
    cursor?: CarritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoItems.
     */
    skip?: number
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * CarritoItem create
   */
  export type CarritoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CarritoItem.
     */
    data: XOR<CarritoItemCreateInput, CarritoItemUncheckedCreateInput>
  }

  /**
   * CarritoItem createMany
   */
  export type CarritoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarritoItems.
     */
    data: CarritoItemCreateManyInput | CarritoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarritoItem createManyAndReturn
   */
  export type CarritoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * The data used to create many CarritoItems.
     */
    data: CarritoItemCreateManyInput | CarritoItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarritoItem update
   */
  export type CarritoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CarritoItem.
     */
    data: XOR<CarritoItemUpdateInput, CarritoItemUncheckedUpdateInput>
    /**
     * Choose, which CarritoItem to update.
     */
    where: CarritoItemWhereUniqueInput
  }

  /**
   * CarritoItem updateMany
   */
  export type CarritoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarritoItems.
     */
    data: XOR<CarritoItemUpdateManyMutationInput, CarritoItemUncheckedUpdateManyInput>
    /**
     * Filter which CarritoItems to update
     */
    where?: CarritoItemWhereInput
    /**
     * Limit how many CarritoItems to update.
     */
    limit?: number
  }

  /**
   * CarritoItem updateManyAndReturn
   */
  export type CarritoItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * The data used to update CarritoItems.
     */
    data: XOR<CarritoItemUpdateManyMutationInput, CarritoItemUncheckedUpdateManyInput>
    /**
     * Filter which CarritoItems to update
     */
    where?: CarritoItemWhereInput
    /**
     * Limit how many CarritoItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarritoItem upsert
   */
  export type CarritoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CarritoItem to update in case it exists.
     */
    where: CarritoItemWhereUniqueInput
    /**
     * In case the CarritoItem found by the `where` argument doesn't exist, create a new CarritoItem with this data.
     */
    create: XOR<CarritoItemCreateInput, CarritoItemUncheckedCreateInput>
    /**
     * In case the CarritoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarritoItemUpdateInput, CarritoItemUncheckedUpdateInput>
  }

  /**
   * CarritoItem delete
   */
  export type CarritoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter which CarritoItem to delete.
     */
    where: CarritoItemWhereUniqueInput
  }

  /**
   * CarritoItem deleteMany
   */
  export type CarritoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarritoItems to delete
     */
    where?: CarritoItemWhereInput
    /**
     * Limit how many CarritoItems to delete.
     */
    limit?: number
  }

  /**
   * CarritoItem without action
   */
  export type CarritoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
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


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    usuario: 'usuario',
    password: 'password',
    rol: 'rol',
    creadoen: 'creadoen'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const ConfiguracionScalarFieldEnum: {
    id: 'id',
    clave: 'clave',
    valor: 'valor',
    usuarioid: 'usuarioid'
  };

  export type ConfiguracionScalarFieldEnum = (typeof ConfiguracionScalarFieldEnum)[keyof typeof ConfiguracionScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    tipo: 'tipo',
    preciocompra: 'preciocompra',
    precioventa: 'precioventa',
    stock: 'stock',
    stockminimo: 'stockminimo',
    fechacaducidad: 'fechacaducidad',
    creadoen: 'creadoen',
    unidadMedida: 'unidadMedida'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const ProveedoresScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    contacto: 'contacto',
    productos: 'productos'
  };

  export type ProveedoresScalarFieldEnum = (typeof ProveedoresScalarFieldEnum)[keyof typeof ProveedoresScalarFieldEnum]


  export const VentasScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    total: 'total',
    metodopago: 'metodopago'
  };

  export type VentasScalarFieldEnum = (typeof VentasScalarFieldEnum)[keyof typeof VentasScalarFieldEnum]


  export const DetalleventasScalarFieldEnum: {
    id: 'id',
    ventaid: 'ventaid',
    productoid: 'productoid',
    cantidad: 'cantidad',
    preciounitario: 'preciounitario'
  };

  export type DetalleventasScalarFieldEnum = (typeof DetalleventasScalarFieldEnum)[keyof typeof DetalleventasScalarFieldEnum]


  export const FacturasScalarFieldEnum: {
    id: 'id',
    ventaid: 'ventaid',
    folio: 'folio',
    serie: 'serie',
    fecha: 'fecha',
    moneda: 'moneda',
    formaPago: 'formaPago',
    metodoPago: 'metodoPago',
    usoCfdi: 'usoCfdi',
    tasaIvaGlobal: 'tasaIvaGlobal',
    observaciones: 'observaciones',
    subtotal: 'subtotal',
    iva: 'iva',
    descuentos: 'descuentos',
    total: 'total',
    negocioNombre: 'negocioNombre',
    negocioRfc: 'negocioRfc',
    negocioDir: 'negocioDir',
    negocioTel: 'negocioTel',
    negocioEmail: 'negocioEmail',
    clienteNombre: 'clienteNombre',
    clienteRfc: 'clienteRfc',
    clienteCp: 'clienteCp',
    clienteDir: 'clienteDir',
    clienteEmail: 'clienteEmail',
    clienteTel: 'clienteTel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacturasScalarFieldEnum = (typeof FacturasScalarFieldEnum)[keyof typeof FacturasScalarFieldEnum]


  export const Factura_itemsScalarFieldEnum: {
    id: 'id',
    facturaId: 'facturaId',
    descripcion: 'descripcion',
    cantidad: 'cantidad',
    precio: 'precio',
    descuento: 'descuento',
    iva: 'iva',
    importe: 'importe'
  };

  export type Factura_itemsScalarFieldEnum = (typeof Factura_itemsScalarFieldEnum)[keyof typeof Factura_itemsScalarFieldEnum]


  export const MovimientosinventarioScalarFieldEnum: {
    id: 'id',
    productoid: 'productoid',
    tipo: 'tipo',
    cantidad: 'cantidad',
    observacion: 'observacion',
    fecha: 'fecha'
  };

  export type MovimientosinventarioScalarFieldEnum = (typeof MovimientosinventarioScalarFieldEnum)[keyof typeof MovimientosinventarioScalarFieldEnum]


  export const ReportesScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    datos: 'datos',
    fecha: 'fecha'
  };

  export type ReportesScalarFieldEnum = (typeof ReportesScalarFieldEnum)[keyof typeof ReportesScalarFieldEnum]


  export const CarritoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    creadoEn: 'creadoEn',
    estado: 'estado'
  };

  export type CarritoScalarFieldEnum = (typeof CarritoScalarFieldEnum)[keyof typeof CarritoScalarFieldEnum]


  export const CarritoItemScalarFieldEnum: {
    id: 'id',
    carritoId: 'carritoId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    precio: 'precio'
  };

  export type CarritoItemScalarFieldEnum = (typeof CarritoItemScalarFieldEnum)[keyof typeof CarritoItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nombre?: StringNullableFilter<"usuarios"> | string | null
    usuario?: StringFilter<"usuarios"> | string
    password?: StringFilter<"usuarios"> | string
    rol?: EnumRolFilter<"usuarios"> | $Enums.Rol
    creadoen?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    carritos?: CarritoListRelationFilter
    configuraciones?: ConfiguracionListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    usuario?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creadoen?: SortOrderInput | SortOrder
    carritos?: CarritoOrderByRelationAggregateInput
    configuraciones?: configuracionOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuario?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre?: StringNullableFilter<"usuarios"> | string | null
    password?: StringFilter<"usuarios"> | string
    rol?: EnumRolFilter<"usuarios"> | $Enums.Rol
    creadoen?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    carritos?: CarritoListRelationFilter
    configuraciones?: ConfiguracionListRelationFilter
  }, "id" | "usuario">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    usuario?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creadoen?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nombre?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    usuario?: StringWithAggregatesFilter<"usuarios"> | string
    password?: StringWithAggregatesFilter<"usuarios"> | string
    rol?: EnumRolWithAggregatesFilter<"usuarios"> | $Enums.Rol
    creadoen?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
  }

  export type configuracionWhereInput = {
    AND?: configuracionWhereInput | configuracionWhereInput[]
    OR?: configuracionWhereInput[]
    NOT?: configuracionWhereInput | configuracionWhereInput[]
    id?: IntFilter<"configuracion"> | number
    clave?: StringFilter<"configuracion"> | string
    valor?: StringNullableFilter<"configuracion"> | string | null
    usuarioid?: IntNullableFilter<"configuracion"> | number | null
    usuario?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type configuracionOrderByWithRelationInput = {
    id?: SortOrder
    clave?: SortOrder
    valor?: SortOrderInput | SortOrder
    usuarioid?: SortOrderInput | SortOrder
    usuario?: usuariosOrderByWithRelationInput
  }

  export type configuracionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clave_usuarioid?: configuracionClave_usuarioidCompoundUniqueInput
    AND?: configuracionWhereInput | configuracionWhereInput[]
    OR?: configuracionWhereInput[]
    NOT?: configuracionWhereInput | configuracionWhereInput[]
    clave?: StringFilter<"configuracion"> | string
    valor?: StringNullableFilter<"configuracion"> | string | null
    usuarioid?: IntNullableFilter<"configuracion"> | number | null
    usuario?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id" | "clave_usuarioid">

  export type configuracionOrderByWithAggregationInput = {
    id?: SortOrder
    clave?: SortOrder
    valor?: SortOrderInput | SortOrder
    usuarioid?: SortOrderInput | SortOrder
    _count?: configuracionCountOrderByAggregateInput
    _avg?: configuracionAvgOrderByAggregateInput
    _max?: configuracionMaxOrderByAggregateInput
    _min?: configuracionMinOrderByAggregateInput
    _sum?: configuracionSumOrderByAggregateInput
  }

  export type configuracionScalarWhereWithAggregatesInput = {
    AND?: configuracionScalarWhereWithAggregatesInput | configuracionScalarWhereWithAggregatesInput[]
    OR?: configuracionScalarWhereWithAggregatesInput[]
    NOT?: configuracionScalarWhereWithAggregatesInput | configuracionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"configuracion"> | number
    clave?: StringWithAggregatesFilter<"configuracion"> | string
    valor?: StringNullableWithAggregatesFilter<"configuracion"> | string | null
    usuarioid?: IntNullableWithAggregatesFilter<"configuracion"> | number | null
  }

  export type productosWhereInput = {
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    id?: IntFilter<"productos"> | number
    nombre?: StringNullableFilter<"productos"> | string | null
    tipo?: StringNullableFilter<"productos"> | string | null
    preciocompra?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    precioventa?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntNullableFilter<"productos"> | number | null
    stockminimo?: IntNullableFilter<"productos"> | number | null
    fechacaducidad?: DateTimeNullableFilter<"productos"> | Date | string | null
    creadoen?: DateTimeNullableFilter<"productos"> | Date | string | null
    unidadMedida?: StringNullableFilter<"productos"> | string | null
    carritoItems?: CarritoItemListRelationFilter
    detalleventas?: DetalleventasListRelationFilter
    movimientosinventario?: MovimientosinventarioListRelationFilter
  }

  export type productosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    preciocompra?: SortOrderInput | SortOrder
    precioventa?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    stockminimo?: SortOrderInput | SortOrder
    fechacaducidad?: SortOrderInput | SortOrder
    creadoen?: SortOrderInput | SortOrder
    unidadMedida?: SortOrderInput | SortOrder
    carritoItems?: CarritoItemOrderByRelationAggregateInput
    detalleventas?: detalleventasOrderByRelationAggregateInput
    movimientosinventario?: movimientosinventarioOrderByRelationAggregateInput
  }

  export type productosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    nombre?: StringNullableFilter<"productos"> | string | null
    tipo?: StringNullableFilter<"productos"> | string | null
    preciocompra?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    precioventa?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntNullableFilter<"productos"> | number | null
    stockminimo?: IntNullableFilter<"productos"> | number | null
    fechacaducidad?: DateTimeNullableFilter<"productos"> | Date | string | null
    creadoen?: DateTimeNullableFilter<"productos"> | Date | string | null
    unidadMedida?: StringNullableFilter<"productos"> | string | null
    carritoItems?: CarritoItemListRelationFilter
    detalleventas?: DetalleventasListRelationFilter
    movimientosinventario?: MovimientosinventarioListRelationFilter
  }, "id">

  export type productosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    preciocompra?: SortOrderInput | SortOrder
    precioventa?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    stockminimo?: SortOrderInput | SortOrder
    fechacaducidad?: SortOrderInput | SortOrder
    creadoen?: SortOrderInput | SortOrder
    unidadMedida?: SortOrderInput | SortOrder
    _count?: productosCountOrderByAggregateInput
    _avg?: productosAvgOrderByAggregateInput
    _max?: productosMaxOrderByAggregateInput
    _min?: productosMinOrderByAggregateInput
    _sum?: productosSumOrderByAggregateInput
  }

  export type productosScalarWhereWithAggregatesInput = {
    AND?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    OR?: productosScalarWhereWithAggregatesInput[]
    NOT?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productos"> | number
    nombre?: StringNullableWithAggregatesFilter<"productos"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"productos"> | string | null
    preciocompra?: DecimalNullableWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    precioventa?: DecimalNullableWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntNullableWithAggregatesFilter<"productos"> | number | null
    stockminimo?: IntNullableWithAggregatesFilter<"productos"> | number | null
    fechacaducidad?: DateTimeNullableWithAggregatesFilter<"productos"> | Date | string | null
    creadoen?: DateTimeNullableWithAggregatesFilter<"productos"> | Date | string | null
    unidadMedida?: StringNullableWithAggregatesFilter<"productos"> | string | null
  }

  export type proveedoresWhereInput = {
    AND?: proveedoresWhereInput | proveedoresWhereInput[]
    OR?: proveedoresWhereInput[]
    NOT?: proveedoresWhereInput | proveedoresWhereInput[]
    id?: IntFilter<"proveedores"> | number
    nombre?: StringNullableFilter<"proveedores"> | string | null
    contacto?: StringNullableFilter<"proveedores"> | string | null
    productos?: StringNullableFilter<"proveedores"> | string | null
  }

  export type proveedoresOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    productos?: SortOrderInput | SortOrder
  }

  export type proveedoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: proveedoresWhereInput | proveedoresWhereInput[]
    OR?: proveedoresWhereInput[]
    NOT?: proveedoresWhereInput | proveedoresWhereInput[]
    nombre?: StringNullableFilter<"proveedores"> | string | null
    contacto?: StringNullableFilter<"proveedores"> | string | null
    productos?: StringNullableFilter<"proveedores"> | string | null
  }, "id">

  export type proveedoresOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    productos?: SortOrderInput | SortOrder
    _count?: proveedoresCountOrderByAggregateInput
    _avg?: proveedoresAvgOrderByAggregateInput
    _max?: proveedoresMaxOrderByAggregateInput
    _min?: proveedoresMinOrderByAggregateInput
    _sum?: proveedoresSumOrderByAggregateInput
  }

  export type proveedoresScalarWhereWithAggregatesInput = {
    AND?: proveedoresScalarWhereWithAggregatesInput | proveedoresScalarWhereWithAggregatesInput[]
    OR?: proveedoresScalarWhereWithAggregatesInput[]
    NOT?: proveedoresScalarWhereWithAggregatesInput | proveedoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"proveedores"> | number
    nombre?: StringNullableWithAggregatesFilter<"proveedores"> | string | null
    contacto?: StringNullableWithAggregatesFilter<"proveedores"> | string | null
    productos?: StringNullableWithAggregatesFilter<"proveedores"> | string | null
  }

  export type ventasWhereInput = {
    AND?: ventasWhereInput | ventasWhereInput[]
    OR?: ventasWhereInput[]
    NOT?: ventasWhereInput | ventasWhereInput[]
    id?: IntFilter<"ventas"> | number
    fecha?: DateTimeNullableFilter<"ventas"> | Date | string | null
    total?: DecimalNullableFilter<"ventas"> | Decimal | DecimalJsLike | number | string | null
    metodopago?: StringNullableFilter<"ventas"> | string | null
    detalleventas?: DetalleventasListRelationFilter
    facturas?: FacturasListRelationFilter
  }

  export type ventasOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    metodopago?: SortOrderInput | SortOrder
    detalleventas?: detalleventasOrderByRelationAggregateInput
    facturas?: facturasOrderByRelationAggregateInput
  }

  export type ventasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ventasWhereInput | ventasWhereInput[]
    OR?: ventasWhereInput[]
    NOT?: ventasWhereInput | ventasWhereInput[]
    fecha?: DateTimeNullableFilter<"ventas"> | Date | string | null
    total?: DecimalNullableFilter<"ventas"> | Decimal | DecimalJsLike | number | string | null
    metodopago?: StringNullableFilter<"ventas"> | string | null
    detalleventas?: DetalleventasListRelationFilter
    facturas?: FacturasListRelationFilter
  }, "id">

  export type ventasOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    metodopago?: SortOrderInput | SortOrder
    _count?: ventasCountOrderByAggregateInput
    _avg?: ventasAvgOrderByAggregateInput
    _max?: ventasMaxOrderByAggregateInput
    _min?: ventasMinOrderByAggregateInput
    _sum?: ventasSumOrderByAggregateInput
  }

  export type ventasScalarWhereWithAggregatesInput = {
    AND?: ventasScalarWhereWithAggregatesInput | ventasScalarWhereWithAggregatesInput[]
    OR?: ventasScalarWhereWithAggregatesInput[]
    NOT?: ventasScalarWhereWithAggregatesInput | ventasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ventas"> | number
    fecha?: DateTimeNullableWithAggregatesFilter<"ventas"> | Date | string | null
    total?: DecimalNullableWithAggregatesFilter<"ventas"> | Decimal | DecimalJsLike | number | string | null
    metodopago?: StringNullableWithAggregatesFilter<"ventas"> | string | null
  }

  export type detalleventasWhereInput = {
    AND?: detalleventasWhereInput | detalleventasWhereInput[]
    OR?: detalleventasWhereInput[]
    NOT?: detalleventasWhereInput | detalleventasWhereInput[]
    id?: IntFilter<"detalleventas"> | number
    ventaid?: IntNullableFilter<"detalleventas"> | number | null
    productoid?: IntNullableFilter<"detalleventas"> | number | null
    cantidad?: IntNullableFilter<"detalleventas"> | number | null
    preciounitario?: DecimalNullableFilter<"detalleventas"> | Decimal | DecimalJsLike | number | string | null
    productos?: XOR<ProductosNullableScalarRelationFilter, productosWhereInput> | null
    ventas?: XOR<VentasNullableScalarRelationFilter, ventasWhereInput> | null
  }

  export type detalleventasOrderByWithRelationInput = {
    id?: SortOrder
    ventaid?: SortOrderInput | SortOrder
    productoid?: SortOrderInput | SortOrder
    cantidad?: SortOrderInput | SortOrder
    preciounitario?: SortOrderInput | SortOrder
    productos?: productosOrderByWithRelationInput
    ventas?: ventasOrderByWithRelationInput
  }

  export type detalleventasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detalleventasWhereInput | detalleventasWhereInput[]
    OR?: detalleventasWhereInput[]
    NOT?: detalleventasWhereInput | detalleventasWhereInput[]
    ventaid?: IntNullableFilter<"detalleventas"> | number | null
    productoid?: IntNullableFilter<"detalleventas"> | number | null
    cantidad?: IntNullableFilter<"detalleventas"> | number | null
    preciounitario?: DecimalNullableFilter<"detalleventas"> | Decimal | DecimalJsLike | number | string | null
    productos?: XOR<ProductosNullableScalarRelationFilter, productosWhereInput> | null
    ventas?: XOR<VentasNullableScalarRelationFilter, ventasWhereInput> | null
  }, "id">

  export type detalleventasOrderByWithAggregationInput = {
    id?: SortOrder
    ventaid?: SortOrderInput | SortOrder
    productoid?: SortOrderInput | SortOrder
    cantidad?: SortOrderInput | SortOrder
    preciounitario?: SortOrderInput | SortOrder
    _count?: detalleventasCountOrderByAggregateInput
    _avg?: detalleventasAvgOrderByAggregateInput
    _max?: detalleventasMaxOrderByAggregateInput
    _min?: detalleventasMinOrderByAggregateInput
    _sum?: detalleventasSumOrderByAggregateInput
  }

  export type detalleventasScalarWhereWithAggregatesInput = {
    AND?: detalleventasScalarWhereWithAggregatesInput | detalleventasScalarWhereWithAggregatesInput[]
    OR?: detalleventasScalarWhereWithAggregatesInput[]
    NOT?: detalleventasScalarWhereWithAggregatesInput | detalleventasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"detalleventas"> | number
    ventaid?: IntNullableWithAggregatesFilter<"detalleventas"> | number | null
    productoid?: IntNullableWithAggregatesFilter<"detalleventas"> | number | null
    cantidad?: IntNullableWithAggregatesFilter<"detalleventas"> | number | null
    preciounitario?: DecimalNullableWithAggregatesFilter<"detalleventas"> | Decimal | DecimalJsLike | number | string | null
  }

  export type facturasWhereInput = {
    AND?: facturasWhereInput | facturasWhereInput[]
    OR?: facturasWhereInput[]
    NOT?: facturasWhereInput | facturasWhereInput[]
    id?: IntFilter<"facturas"> | number
    ventaid?: IntNullableFilter<"facturas"> | number | null
    folio?: StringNullableFilter<"facturas"> | string | null
    serie?: StringNullableFilter<"facturas"> | string | null
    fecha?: DateTimeFilter<"facturas"> | Date | string
    moneda?: StringFilter<"facturas"> | string
    formaPago?: StringFilter<"facturas"> | string
    metodoPago?: StringFilter<"facturas"> | string
    usoCfdi?: StringFilter<"facturas"> | string
    tasaIvaGlobal?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"facturas"> | string | null
    subtotal?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    iva?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFilter<"facturas"> | string
    negocioRfc?: StringNullableFilter<"facturas"> | string | null
    negocioDir?: StringNullableFilter<"facturas"> | string | null
    negocioTel?: StringNullableFilter<"facturas"> | string | null
    negocioEmail?: StringNullableFilter<"facturas"> | string | null
    clienteNombre?: StringFilter<"facturas"> | string
    clienteRfc?: StringNullableFilter<"facturas"> | string | null
    clienteCp?: StringNullableFilter<"facturas"> | string | null
    clienteDir?: StringNullableFilter<"facturas"> | string | null
    clienteEmail?: StringNullableFilter<"facturas"> | string | null
    clienteTel?: StringNullableFilter<"facturas"> | string | null
    createdAt?: DateTimeFilter<"facturas"> | Date | string
    updatedAt?: DateTimeFilter<"facturas"> | Date | string
    items?: Factura_itemsListRelationFilter
    ventas?: XOR<VentasNullableScalarRelationFilter, ventasWhereInput> | null
  }

  export type facturasOrderByWithRelationInput = {
    id?: SortOrder
    ventaid?: SortOrderInput | SortOrder
    folio?: SortOrderInput | SortOrder
    serie?: SortOrderInput | SortOrder
    fecha?: SortOrder
    moneda?: SortOrder
    formaPago?: SortOrder
    metodoPago?: SortOrder
    usoCfdi?: SortOrder
    tasaIvaGlobal?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    descuentos?: SortOrder
    total?: SortOrder
    negocioNombre?: SortOrder
    negocioRfc?: SortOrderInput | SortOrder
    negocioDir?: SortOrderInput | SortOrder
    negocioTel?: SortOrderInput | SortOrder
    negocioEmail?: SortOrderInput | SortOrder
    clienteNombre?: SortOrder
    clienteRfc?: SortOrderInput | SortOrder
    clienteCp?: SortOrderInput | SortOrder
    clienteDir?: SortOrderInput | SortOrder
    clienteEmail?: SortOrderInput | SortOrder
    clienteTel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: factura_itemsOrderByRelationAggregateInput
    ventas?: ventasOrderByWithRelationInput
  }

  export type facturasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    folio?: string
    AND?: facturasWhereInput | facturasWhereInput[]
    OR?: facturasWhereInput[]
    NOT?: facturasWhereInput | facturasWhereInput[]
    ventaid?: IntNullableFilter<"facturas"> | number | null
    serie?: StringNullableFilter<"facturas"> | string | null
    fecha?: DateTimeFilter<"facturas"> | Date | string
    moneda?: StringFilter<"facturas"> | string
    formaPago?: StringFilter<"facturas"> | string
    metodoPago?: StringFilter<"facturas"> | string
    usoCfdi?: StringFilter<"facturas"> | string
    tasaIvaGlobal?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"facturas"> | string | null
    subtotal?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    iva?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFilter<"facturas"> | string
    negocioRfc?: StringNullableFilter<"facturas"> | string | null
    negocioDir?: StringNullableFilter<"facturas"> | string | null
    negocioTel?: StringNullableFilter<"facturas"> | string | null
    negocioEmail?: StringNullableFilter<"facturas"> | string | null
    clienteNombre?: StringFilter<"facturas"> | string
    clienteRfc?: StringNullableFilter<"facturas"> | string | null
    clienteCp?: StringNullableFilter<"facturas"> | string | null
    clienteDir?: StringNullableFilter<"facturas"> | string | null
    clienteEmail?: StringNullableFilter<"facturas"> | string | null
    clienteTel?: StringNullableFilter<"facturas"> | string | null
    createdAt?: DateTimeFilter<"facturas"> | Date | string
    updatedAt?: DateTimeFilter<"facturas"> | Date | string
    items?: Factura_itemsListRelationFilter
    ventas?: XOR<VentasNullableScalarRelationFilter, ventasWhereInput> | null
  }, "id" | "folio">

  export type facturasOrderByWithAggregationInput = {
    id?: SortOrder
    ventaid?: SortOrderInput | SortOrder
    folio?: SortOrderInput | SortOrder
    serie?: SortOrderInput | SortOrder
    fecha?: SortOrder
    moneda?: SortOrder
    formaPago?: SortOrder
    metodoPago?: SortOrder
    usoCfdi?: SortOrder
    tasaIvaGlobal?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    descuentos?: SortOrder
    total?: SortOrder
    negocioNombre?: SortOrder
    negocioRfc?: SortOrderInput | SortOrder
    negocioDir?: SortOrderInput | SortOrder
    negocioTel?: SortOrderInput | SortOrder
    negocioEmail?: SortOrderInput | SortOrder
    clienteNombre?: SortOrder
    clienteRfc?: SortOrderInput | SortOrder
    clienteCp?: SortOrderInput | SortOrder
    clienteDir?: SortOrderInput | SortOrder
    clienteEmail?: SortOrderInput | SortOrder
    clienteTel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: facturasCountOrderByAggregateInput
    _avg?: facturasAvgOrderByAggregateInput
    _max?: facturasMaxOrderByAggregateInput
    _min?: facturasMinOrderByAggregateInput
    _sum?: facturasSumOrderByAggregateInput
  }

  export type facturasScalarWhereWithAggregatesInput = {
    AND?: facturasScalarWhereWithAggregatesInput | facturasScalarWhereWithAggregatesInput[]
    OR?: facturasScalarWhereWithAggregatesInput[]
    NOT?: facturasScalarWhereWithAggregatesInput | facturasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"facturas"> | number
    ventaid?: IntNullableWithAggregatesFilter<"facturas"> | number | null
    folio?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    serie?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"facturas"> | Date | string
    moneda?: StringWithAggregatesFilter<"facturas"> | string
    formaPago?: StringWithAggregatesFilter<"facturas"> | string
    metodoPago?: StringWithAggregatesFilter<"facturas"> | string
    usoCfdi?: StringWithAggregatesFilter<"facturas"> | string
    tasaIvaGlobal?: DecimalWithAggregatesFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    subtotal?: DecimalWithAggregatesFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    iva?: DecimalWithAggregatesFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalWithAggregatesFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringWithAggregatesFilter<"facturas"> | string
    negocioRfc?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    negocioDir?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    negocioTel?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    negocioEmail?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    clienteNombre?: StringWithAggregatesFilter<"facturas"> | string
    clienteRfc?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    clienteCp?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    clienteDir?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    clienteEmail?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    clienteTel?: StringNullableWithAggregatesFilter<"facturas"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"facturas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"facturas"> | Date | string
  }

  export type factura_itemsWhereInput = {
    AND?: factura_itemsWhereInput | factura_itemsWhereInput[]
    OR?: factura_itemsWhereInput[]
    NOT?: factura_itemsWhereInput | factura_itemsWhereInput[]
    id?: IntFilter<"factura_items"> | number
    facturaId?: IntFilter<"factura_items"> | number
    descripcion?: StringFilter<"factura_items"> | string
    cantidad?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    precio?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    iva?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    importe?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    factura?: XOR<FacturasScalarRelationFilter, facturasWhereInput>
  }

  export type factura_itemsOrderByWithRelationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
    iva?: SortOrder
    importe?: SortOrder
    factura?: facturasOrderByWithRelationInput
  }

  export type factura_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: factura_itemsWhereInput | factura_itemsWhereInput[]
    OR?: factura_itemsWhereInput[]
    NOT?: factura_itemsWhereInput | factura_itemsWhereInput[]
    facturaId?: IntFilter<"factura_items"> | number
    descripcion?: StringFilter<"factura_items"> | string
    cantidad?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    precio?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    iva?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    importe?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    factura?: XOR<FacturasScalarRelationFilter, facturasWhereInput>
  }, "id">

  export type factura_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
    iva?: SortOrder
    importe?: SortOrder
    _count?: factura_itemsCountOrderByAggregateInput
    _avg?: factura_itemsAvgOrderByAggregateInput
    _max?: factura_itemsMaxOrderByAggregateInput
    _min?: factura_itemsMinOrderByAggregateInput
    _sum?: factura_itemsSumOrderByAggregateInput
  }

  export type factura_itemsScalarWhereWithAggregatesInput = {
    AND?: factura_itemsScalarWhereWithAggregatesInput | factura_itemsScalarWhereWithAggregatesInput[]
    OR?: factura_itemsScalarWhereWithAggregatesInput[]
    NOT?: factura_itemsScalarWhereWithAggregatesInput | factura_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"factura_items"> | number
    facturaId?: IntWithAggregatesFilter<"factura_items"> | number
    descripcion?: StringWithAggregatesFilter<"factura_items"> | string
    cantidad?: DecimalWithAggregatesFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    precio?: DecimalWithAggregatesFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalWithAggregatesFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    iva?: DecimalWithAggregatesFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    importe?: DecimalWithAggregatesFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
  }

  export type movimientosinventarioWhereInput = {
    AND?: movimientosinventarioWhereInput | movimientosinventarioWhereInput[]
    OR?: movimientosinventarioWhereInput[]
    NOT?: movimientosinventarioWhereInput | movimientosinventarioWhereInput[]
    id?: IntFilter<"movimientosinventario"> | number
    productoid?: IntNullableFilter<"movimientosinventario"> | number | null
    tipo?: StringNullableFilter<"movimientosinventario"> | string | null
    cantidad?: IntNullableFilter<"movimientosinventario"> | number | null
    observacion?: StringNullableFilter<"movimientosinventario"> | string | null
    fecha?: DateTimeNullableFilter<"movimientosinventario"> | Date | string | null
    productos?: XOR<ProductosNullableScalarRelationFilter, productosWhereInput> | null
  }

  export type movimientosinventarioOrderByWithRelationInput = {
    id?: SortOrder
    productoid?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    cantidad?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    productos?: productosOrderByWithRelationInput
  }

  export type movimientosinventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: movimientosinventarioWhereInput | movimientosinventarioWhereInput[]
    OR?: movimientosinventarioWhereInput[]
    NOT?: movimientosinventarioWhereInput | movimientosinventarioWhereInput[]
    productoid?: IntNullableFilter<"movimientosinventario"> | number | null
    tipo?: StringNullableFilter<"movimientosinventario"> | string | null
    cantidad?: IntNullableFilter<"movimientosinventario"> | number | null
    observacion?: StringNullableFilter<"movimientosinventario"> | string | null
    fecha?: DateTimeNullableFilter<"movimientosinventario"> | Date | string | null
    productos?: XOR<ProductosNullableScalarRelationFilter, productosWhereInput> | null
  }, "id">

  export type movimientosinventarioOrderByWithAggregationInput = {
    id?: SortOrder
    productoid?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    cantidad?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    _count?: movimientosinventarioCountOrderByAggregateInput
    _avg?: movimientosinventarioAvgOrderByAggregateInput
    _max?: movimientosinventarioMaxOrderByAggregateInput
    _min?: movimientosinventarioMinOrderByAggregateInput
    _sum?: movimientosinventarioSumOrderByAggregateInput
  }

  export type movimientosinventarioScalarWhereWithAggregatesInput = {
    AND?: movimientosinventarioScalarWhereWithAggregatesInput | movimientosinventarioScalarWhereWithAggregatesInput[]
    OR?: movimientosinventarioScalarWhereWithAggregatesInput[]
    NOT?: movimientosinventarioScalarWhereWithAggregatesInput | movimientosinventarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movimientosinventario"> | number
    productoid?: IntNullableWithAggregatesFilter<"movimientosinventario"> | number | null
    tipo?: StringNullableWithAggregatesFilter<"movimientosinventario"> | string | null
    cantidad?: IntNullableWithAggregatesFilter<"movimientosinventario"> | number | null
    observacion?: StringNullableWithAggregatesFilter<"movimientosinventario"> | string | null
    fecha?: DateTimeNullableWithAggregatesFilter<"movimientosinventario"> | Date | string | null
  }

  export type reportesWhereInput = {
    AND?: reportesWhereInput | reportesWhereInput[]
    OR?: reportesWhereInput[]
    NOT?: reportesWhereInput | reportesWhereInput[]
    id?: IntFilter<"reportes"> | number
    tipo?: StringNullableFilter<"reportes"> | string | null
    datos?: JsonNullableFilter<"reportes">
    fecha?: DateTimeNullableFilter<"reportes"> | Date | string | null
  }

  export type reportesOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrderInput | SortOrder
    datos?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
  }

  export type reportesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reportesWhereInput | reportesWhereInput[]
    OR?: reportesWhereInput[]
    NOT?: reportesWhereInput | reportesWhereInput[]
    tipo?: StringNullableFilter<"reportes"> | string | null
    datos?: JsonNullableFilter<"reportes">
    fecha?: DateTimeNullableFilter<"reportes"> | Date | string | null
  }, "id">

  export type reportesOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrderInput | SortOrder
    datos?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    _count?: reportesCountOrderByAggregateInput
    _avg?: reportesAvgOrderByAggregateInput
    _max?: reportesMaxOrderByAggregateInput
    _min?: reportesMinOrderByAggregateInput
    _sum?: reportesSumOrderByAggregateInput
  }

  export type reportesScalarWhereWithAggregatesInput = {
    AND?: reportesScalarWhereWithAggregatesInput | reportesScalarWhereWithAggregatesInput[]
    OR?: reportesScalarWhereWithAggregatesInput[]
    NOT?: reportesScalarWhereWithAggregatesInput | reportesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reportes"> | number
    tipo?: StringNullableWithAggregatesFilter<"reportes"> | string | null
    datos?: JsonNullableWithAggregatesFilter<"reportes">
    fecha?: DateTimeNullableWithAggregatesFilter<"reportes"> | Date | string | null
  }

  export type CarritoWhereInput = {
    AND?: CarritoWhereInput | CarritoWhereInput[]
    OR?: CarritoWhereInput[]
    NOT?: CarritoWhereInput | CarritoWhereInput[]
    id?: IntFilter<"Carrito"> | number
    usuarioId?: IntFilter<"Carrito"> | number
    creadoEn?: DateTimeFilter<"Carrito"> | Date | string
    estado?: StringFilter<"Carrito"> | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    items?: CarritoItemListRelationFilter
  }

  export type CarritoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    creadoEn?: SortOrder
    estado?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    items?: CarritoItemOrderByRelationAggregateInput
  }

  export type CarritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarritoWhereInput | CarritoWhereInput[]
    OR?: CarritoWhereInput[]
    NOT?: CarritoWhereInput | CarritoWhereInput[]
    usuarioId?: IntFilter<"Carrito"> | number
    creadoEn?: DateTimeFilter<"Carrito"> | Date | string
    estado?: StringFilter<"Carrito"> | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    items?: CarritoItemListRelationFilter
  }, "id">

  export type CarritoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    creadoEn?: SortOrder
    estado?: SortOrder
    _count?: CarritoCountOrderByAggregateInput
    _avg?: CarritoAvgOrderByAggregateInput
    _max?: CarritoMaxOrderByAggregateInput
    _min?: CarritoMinOrderByAggregateInput
    _sum?: CarritoSumOrderByAggregateInput
  }

  export type CarritoScalarWhereWithAggregatesInput = {
    AND?: CarritoScalarWhereWithAggregatesInput | CarritoScalarWhereWithAggregatesInput[]
    OR?: CarritoScalarWhereWithAggregatesInput[]
    NOT?: CarritoScalarWhereWithAggregatesInput | CarritoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carrito"> | number
    usuarioId?: IntWithAggregatesFilter<"Carrito"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"Carrito"> | Date | string
    estado?: StringWithAggregatesFilter<"Carrito"> | string
  }

  export type CarritoItemWhereInput = {
    AND?: CarritoItemWhereInput | CarritoItemWhereInput[]
    OR?: CarritoItemWhereInput[]
    NOT?: CarritoItemWhereInput | CarritoItemWhereInput[]
    id?: IntFilter<"CarritoItem"> | number
    carritoId?: IntFilter<"CarritoItem"> | number
    productoId?: IntFilter<"CarritoItem"> | number
    cantidad?: IntFilter<"CarritoItem"> | number
    precio?: FloatFilter<"CarritoItem"> | number
    carrito?: XOR<CarritoScalarRelationFilter, CarritoWhereInput>
    producto?: XOR<ProductosScalarRelationFilter, productosWhereInput>
  }

  export type CarritoItemOrderByWithRelationInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    carrito?: CarritoOrderByWithRelationInput
    producto?: productosOrderByWithRelationInput
  }

  export type CarritoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarritoItemWhereInput | CarritoItemWhereInput[]
    OR?: CarritoItemWhereInput[]
    NOT?: CarritoItemWhereInput | CarritoItemWhereInput[]
    carritoId?: IntFilter<"CarritoItem"> | number
    productoId?: IntFilter<"CarritoItem"> | number
    cantidad?: IntFilter<"CarritoItem"> | number
    precio?: FloatFilter<"CarritoItem"> | number
    carrito?: XOR<CarritoScalarRelationFilter, CarritoWhereInput>
    producto?: XOR<ProductosScalarRelationFilter, productosWhereInput>
  }, "id">

  export type CarritoItemOrderByWithAggregationInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    _count?: CarritoItemCountOrderByAggregateInput
    _avg?: CarritoItemAvgOrderByAggregateInput
    _max?: CarritoItemMaxOrderByAggregateInput
    _min?: CarritoItemMinOrderByAggregateInput
    _sum?: CarritoItemSumOrderByAggregateInput
  }

  export type CarritoItemScalarWhereWithAggregatesInput = {
    AND?: CarritoItemScalarWhereWithAggregatesInput | CarritoItemScalarWhereWithAggregatesInput[]
    OR?: CarritoItemScalarWhereWithAggregatesInput[]
    NOT?: CarritoItemScalarWhereWithAggregatesInput | CarritoItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CarritoItem"> | number
    carritoId?: IntWithAggregatesFilter<"CarritoItem"> | number
    productoId?: IntWithAggregatesFilter<"CarritoItem"> | number
    cantidad?: IntWithAggregatesFilter<"CarritoItem"> | number
    precio?: FloatWithAggregatesFilter<"CarritoItem"> | number
  }

  export type usuariosCreateInput = {
    nombre?: string | null
    usuario: string
    password: string
    rol?: $Enums.Rol
    creadoen?: Date | string | null
    carritos?: CarritoCreateNestedManyWithoutUsuariosInput
    configuraciones?: configuracionCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    usuario: string
    password: string
    rol?: $Enums.Rol
    creadoen?: Date | string | null
    carritos?: CarritoUncheckedCreateNestedManyWithoutUsuariosInput
    configuraciones?: configuracionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carritos?: CarritoUpdateManyWithoutUsuariosNestedInput
    configuraciones?: configuracionUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carritos?: CarritoUncheckedUpdateManyWithoutUsuariosNestedInput
    configuraciones?: configuracionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    nombre?: string | null
    usuario: string
    password: string
    rol?: $Enums.Rol
    creadoen?: Date | string | null
  }

  export type usuariosUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type configuracionCreateInput = {
    clave: string
    valor?: string | null
    usuario?: usuariosCreateNestedOneWithoutConfiguracionesInput
  }

  export type configuracionUncheckedCreateInput = {
    id?: number
    clave: string
    valor?: string | null
    usuarioid?: number | null
  }

  export type configuracionUpdateInput = {
    clave?: StringFieldUpdateOperationsInput | string
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuariosUpdateOneWithoutConfiguracionesNestedInput
  }

  export type configuracionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type configuracionCreateManyInput = {
    id?: number
    clave: string
    valor?: string | null
    usuarioid?: number | null
  }

  export type configuracionUpdateManyMutationInput = {
    clave?: StringFieldUpdateOperationsInput | string
    valor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type configuracionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productosCreateInput = {
    nombre?: string | null
    tipo?: string | null
    preciocompra?: Decimal | DecimalJsLike | number | string | null
    precioventa?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    stockminimo?: number | null
    fechacaducidad?: Date | string | null
    creadoen?: Date | string | null
    unidadMedida?: string | null
    carritoItems?: CarritoItemCreateNestedManyWithoutProductoInput
    detalleventas?: detalleventasCreateNestedManyWithoutProductosInput
    movimientosinventario?: movimientosinventarioCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    tipo?: string | null
    preciocompra?: Decimal | DecimalJsLike | number | string | null
    precioventa?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    stockminimo?: number | null
    fechacaducidad?: Date | string | null
    creadoen?: Date | string | null
    unidadMedida?: string | null
    carritoItems?: CarritoItemUncheckedCreateNestedManyWithoutProductoInput
    detalleventas?: detalleventasUncheckedCreateNestedManyWithoutProductosInput
    movimientosinventario?: movimientosinventarioUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    preciocompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioventa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    stockminimo?: NullableIntFieldUpdateOperationsInput | number | null
    fechacaducidad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unidadMedida?: NullableStringFieldUpdateOperationsInput | string | null
    carritoItems?: CarritoItemUpdateManyWithoutProductoNestedInput
    detalleventas?: detalleventasUpdateManyWithoutProductosNestedInput
    movimientosinventario?: movimientosinventarioUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    preciocompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioventa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    stockminimo?: NullableIntFieldUpdateOperationsInput | number | null
    fechacaducidad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unidadMedida?: NullableStringFieldUpdateOperationsInput | string | null
    carritoItems?: CarritoItemUncheckedUpdateManyWithoutProductoNestedInput
    detalleventas?: detalleventasUncheckedUpdateManyWithoutProductosNestedInput
    movimientosinventario?: movimientosinventarioUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosCreateManyInput = {
    id?: number
    nombre?: string | null
    tipo?: string | null
    preciocompra?: Decimal | DecimalJsLike | number | string | null
    precioventa?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    stockminimo?: number | null
    fechacaducidad?: Date | string | null
    creadoen?: Date | string | null
    unidadMedida?: string | null
  }

  export type productosUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    preciocompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioventa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    stockminimo?: NullableIntFieldUpdateOperationsInput | number | null
    fechacaducidad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unidadMedida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    preciocompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioventa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    stockminimo?: NullableIntFieldUpdateOperationsInput | number | null
    fechacaducidad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unidadMedida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type proveedoresCreateInput = {
    nombre?: string | null
    contacto?: string | null
    productos?: string | null
  }

  export type proveedoresUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    contacto?: string | null
    productos?: string | null
  }

  export type proveedoresUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type proveedoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type proveedoresCreateManyInput = {
    id?: number
    nombre?: string | null
    contacto?: string | null
    productos?: string | null
  }

  export type proveedoresUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type proveedoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ventasCreateInput = {
    fecha?: Date | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    metodopago?: string | null
    detalleventas?: detalleventasCreateNestedManyWithoutVentasInput
    facturas?: facturasCreateNestedManyWithoutVentasInput
  }

  export type ventasUncheckedCreateInput = {
    id?: number
    fecha?: Date | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    metodopago?: string | null
    detalleventas?: detalleventasUncheckedCreateNestedManyWithoutVentasInput
    facturas?: facturasUncheckedCreateNestedManyWithoutVentasInput
  }

  export type ventasUpdateInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metodopago?: NullableStringFieldUpdateOperationsInput | string | null
    detalleventas?: detalleventasUpdateManyWithoutVentasNestedInput
    facturas?: facturasUpdateManyWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metodopago?: NullableStringFieldUpdateOperationsInput | string | null
    detalleventas?: detalleventasUncheckedUpdateManyWithoutVentasNestedInput
    facturas?: facturasUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type ventasCreateManyInput = {
    id?: number
    fecha?: Date | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    metodopago?: string | null
  }

  export type ventasUpdateManyMutationInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metodopago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ventasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metodopago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalleventasCreateInput = {
    cantidad?: number | null
    preciounitario?: Decimal | DecimalJsLike | number | string | null
    productos?: productosCreateNestedOneWithoutDetalleventasInput
    ventas?: ventasCreateNestedOneWithoutDetalleventasInput
  }

  export type detalleventasUncheckedCreateInput = {
    id?: number
    ventaid?: number | null
    productoid?: number | null
    cantidad?: number | null
    preciounitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type detalleventasUpdateInput = {
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    preciounitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    productos?: productosUpdateOneWithoutDetalleventasNestedInput
    ventas?: ventasUpdateOneWithoutDetalleventasNestedInput
  }

  export type detalleventasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaid?: NullableIntFieldUpdateOperationsInput | number | null
    productoid?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    preciounitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type detalleventasCreateManyInput = {
    id?: number
    ventaid?: number | null
    productoid?: number | null
    cantidad?: number | null
    preciounitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type detalleventasUpdateManyMutationInput = {
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    preciounitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type detalleventasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaid?: NullableIntFieldUpdateOperationsInput | number | null
    productoid?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    preciounitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type facturasCreateInput = {
    folio?: string | null
    serie?: string | null
    fecha?: Date | string
    moneda?: string
    formaPago?: string
    metodoPago?: string
    usoCfdi?: string
    tasaIvaGlobal?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    descuentos?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    negocioNombre: string
    negocioRfc?: string | null
    negocioDir?: string | null
    negocioTel?: string | null
    negocioEmail?: string | null
    clienteNombre: string
    clienteRfc?: string | null
    clienteCp?: string | null
    clienteDir?: string | null
    clienteEmail?: string | null
    clienteTel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: factura_itemsCreateNestedManyWithoutFacturaInput
    ventas?: ventasCreateNestedOneWithoutFacturasInput
  }

  export type facturasUncheckedCreateInput = {
    id?: number
    ventaid?: number | null
    folio?: string | null
    serie?: string | null
    fecha?: Date | string
    moneda?: string
    formaPago?: string
    metodoPago?: string
    usoCfdi?: string
    tasaIvaGlobal?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    descuentos?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    negocioNombre: string
    negocioRfc?: string | null
    negocioDir?: string | null
    negocioTel?: string | null
    negocioEmail?: string | null
    clienteNombre: string
    clienteRfc?: string | null
    clienteCp?: string | null
    clienteDir?: string | null
    clienteEmail?: string | null
    clienteTel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: factura_itemsUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type facturasUpdateInput = {
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    usoCfdi?: StringFieldUpdateOperationsInput | string
    tasaIvaGlobal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFieldUpdateOperationsInput | string
    negocioRfc?: NullableStringFieldUpdateOperationsInput | string | null
    negocioDir?: NullableStringFieldUpdateOperationsInput | string | null
    negocioTel?: NullableStringFieldUpdateOperationsInput | string | null
    negocioEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteNombre?: StringFieldUpdateOperationsInput | string
    clienteRfc?: NullableStringFieldUpdateOperationsInput | string | null
    clienteCp?: NullableStringFieldUpdateOperationsInput | string | null
    clienteDir?: NullableStringFieldUpdateOperationsInput | string | null
    clienteEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteTel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: factura_itemsUpdateManyWithoutFacturaNestedInput
    ventas?: ventasUpdateOneWithoutFacturasNestedInput
  }

  export type facturasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaid?: NullableIntFieldUpdateOperationsInput | number | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    usoCfdi?: StringFieldUpdateOperationsInput | string
    tasaIvaGlobal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFieldUpdateOperationsInput | string
    negocioRfc?: NullableStringFieldUpdateOperationsInput | string | null
    negocioDir?: NullableStringFieldUpdateOperationsInput | string | null
    negocioTel?: NullableStringFieldUpdateOperationsInput | string | null
    negocioEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteNombre?: StringFieldUpdateOperationsInput | string
    clienteRfc?: NullableStringFieldUpdateOperationsInput | string | null
    clienteCp?: NullableStringFieldUpdateOperationsInput | string | null
    clienteDir?: NullableStringFieldUpdateOperationsInput | string | null
    clienteEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteTel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: factura_itemsUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type facturasCreateManyInput = {
    id?: number
    ventaid?: number | null
    folio?: string | null
    serie?: string | null
    fecha?: Date | string
    moneda?: string
    formaPago?: string
    metodoPago?: string
    usoCfdi?: string
    tasaIvaGlobal?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    descuentos?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    negocioNombre: string
    negocioRfc?: string | null
    negocioDir?: string | null
    negocioTel?: string | null
    negocioEmail?: string | null
    clienteNombre: string
    clienteRfc?: string | null
    clienteCp?: string | null
    clienteDir?: string | null
    clienteEmail?: string | null
    clienteTel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type facturasUpdateManyMutationInput = {
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    usoCfdi?: StringFieldUpdateOperationsInput | string
    tasaIvaGlobal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFieldUpdateOperationsInput | string
    negocioRfc?: NullableStringFieldUpdateOperationsInput | string | null
    negocioDir?: NullableStringFieldUpdateOperationsInput | string | null
    negocioTel?: NullableStringFieldUpdateOperationsInput | string | null
    negocioEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteNombre?: StringFieldUpdateOperationsInput | string
    clienteRfc?: NullableStringFieldUpdateOperationsInput | string | null
    clienteCp?: NullableStringFieldUpdateOperationsInput | string | null
    clienteDir?: NullableStringFieldUpdateOperationsInput | string | null
    clienteEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteTel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facturasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaid?: NullableIntFieldUpdateOperationsInput | number | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    usoCfdi?: StringFieldUpdateOperationsInput | string
    tasaIvaGlobal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFieldUpdateOperationsInput | string
    negocioRfc?: NullableStringFieldUpdateOperationsInput | string | null
    negocioDir?: NullableStringFieldUpdateOperationsInput | string | null
    negocioTel?: NullableStringFieldUpdateOperationsInput | string | null
    negocioEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteNombre?: StringFieldUpdateOperationsInput | string
    clienteRfc?: NullableStringFieldUpdateOperationsInput | string | null
    clienteCp?: NullableStringFieldUpdateOperationsInput | string | null
    clienteDir?: NullableStringFieldUpdateOperationsInput | string | null
    clienteEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteTel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type factura_itemsCreateInput = {
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    importe: Decimal | DecimalJsLike | number | string
    factura: facturasCreateNestedOneWithoutItemsInput
  }

  export type factura_itemsUncheckedCreateInput = {
    id?: number
    facturaId: number
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    importe: Decimal | DecimalJsLike | number | string
  }

  export type factura_itemsUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    factura?: facturasUpdateOneRequiredWithoutItemsNestedInput
  }

  export type factura_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type factura_itemsCreateManyInput = {
    id?: number
    facturaId: number
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    importe: Decimal | DecimalJsLike | number | string
  }

  export type factura_itemsUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type factura_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type movimientosinventarioCreateInput = {
    tipo?: string | null
    cantidad?: number | null
    observacion?: string | null
    fecha?: Date | string | null
    productos?: productosCreateNestedOneWithoutMovimientosinventarioInput
  }

  export type movimientosinventarioUncheckedCreateInput = {
    id?: number
    productoid?: number | null
    tipo?: string | null
    cantidad?: number | null
    observacion?: string | null
    fecha?: Date | string | null
  }

  export type movimientosinventarioUpdateInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: productosUpdateOneWithoutMovimientosinventarioNestedInput
  }

  export type movimientosinventarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoid?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientosinventarioCreateManyInput = {
    id?: number
    productoid?: number | null
    tipo?: string | null
    cantidad?: number | null
    observacion?: string | null
    fecha?: Date | string | null
  }

  export type movimientosinventarioUpdateManyMutationInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientosinventarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoid?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportesCreateInput = {
    tipo?: string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    fecha?: Date | string | null
  }

  export type reportesUncheckedCreateInput = {
    id?: number
    tipo?: string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    fecha?: Date | string | null
  }

  export type reportesUpdateInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportesCreateManyInput = {
    id?: number
    tipo?: string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    fecha?: Date | string | null
  }

  export type reportesUpdateManyMutationInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarritoCreateInput = {
    creadoEn?: Date | string
    estado?: string
    usuarios: usuariosCreateNestedOneWithoutCarritosInput
    items?: CarritoItemCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    creadoEn?: Date | string
    estado?: string
    items?: CarritoItemUncheckedCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUpdateInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuarios?: usuariosUpdateOneRequiredWithoutCarritosNestedInput
    items?: CarritoItemUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    items?: CarritoItemUncheckedUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoCreateManyInput = {
    id?: number
    usuarioId: number
    creadoEn?: Date | string
    estado?: string
  }

  export type CarritoUpdateManyMutationInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type CarritoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type CarritoItemCreateInput = {
    cantidad: number
    precio: number
    carrito: CarritoCreateNestedOneWithoutItemsInput
    producto: productosCreateNestedOneWithoutCarritoItemsInput
  }

  export type CarritoItemUncheckedCreateInput = {
    id?: number
    carritoId: number
    productoId: number
    cantidad: number
    precio: number
  }

  export type CarritoItemUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    carrito?: CarritoUpdateOneRequiredWithoutItemsNestedInput
    producto?: productosUpdateOneRequiredWithoutCarritoItemsNestedInput
  }

  export type CarritoItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type CarritoItemCreateManyInput = {
    id?: number
    carritoId: number
    productoId: number
    cantidad: number
    precio: number
  }

  export type CarritoItemUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type CarritoItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CarritoListRelationFilter = {
    every?: CarritoWhereInput
    some?: CarritoWhereInput
    none?: CarritoWhereInput
  }

  export type ConfiguracionListRelationFilter = {
    every?: configuracionWhereInput
    some?: configuracionWhereInput
    none?: configuracionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type configuracionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creadoen?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creadoen?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creadoen?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UsuariosNullableScalarRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type configuracionClave_usuarioidCompoundUniqueInput = {
    clave: string
    usuarioid: number
  }

  export type configuracionCountOrderByAggregateInput = {
    id?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
    usuarioid?: SortOrder
  }

  export type configuracionAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioid?: SortOrder
  }

  export type configuracionMaxOrderByAggregateInput = {
    id?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
    usuarioid?: SortOrder
  }

  export type configuracionMinOrderByAggregateInput = {
    id?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
    usuarioid?: SortOrder
  }

  export type configuracionSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioid?: SortOrder
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CarritoItemListRelationFilter = {
    every?: CarritoItemWhereInput
    some?: CarritoItemWhereInput
    none?: CarritoItemWhereInput
  }

  export type DetalleventasListRelationFilter = {
    every?: detalleventasWhereInput
    some?: detalleventasWhereInput
    none?: detalleventasWhereInput
  }

  export type MovimientosinventarioListRelationFilter = {
    every?: movimientosinventarioWhereInput
    some?: movimientosinventarioWhereInput
    none?: movimientosinventarioWhereInput
  }

  export type CarritoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type detalleventasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type movimientosinventarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    preciocompra?: SortOrder
    precioventa?: SortOrder
    stock?: SortOrder
    stockminimo?: SortOrder
    fechacaducidad?: SortOrder
    creadoen?: SortOrder
    unidadMedida?: SortOrder
  }

  export type productosAvgOrderByAggregateInput = {
    id?: SortOrder
    preciocompra?: SortOrder
    precioventa?: SortOrder
    stock?: SortOrder
    stockminimo?: SortOrder
  }

  export type productosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    preciocompra?: SortOrder
    precioventa?: SortOrder
    stock?: SortOrder
    stockminimo?: SortOrder
    fechacaducidad?: SortOrder
    creadoen?: SortOrder
    unidadMedida?: SortOrder
  }

  export type productosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    preciocompra?: SortOrder
    precioventa?: SortOrder
    stock?: SortOrder
    stockminimo?: SortOrder
    fechacaducidad?: SortOrder
    creadoen?: SortOrder
    unidadMedida?: SortOrder
  }

  export type productosSumOrderByAggregateInput = {
    id?: SortOrder
    preciocompra?: SortOrder
    precioventa?: SortOrder
    stock?: SortOrder
    stockminimo?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type proveedoresCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contacto?: SortOrder
    productos?: SortOrder
  }

  export type proveedoresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type proveedoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contacto?: SortOrder
    productos?: SortOrder
  }

  export type proveedoresMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contacto?: SortOrder
    productos?: SortOrder
  }

  export type proveedoresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacturasListRelationFilter = {
    every?: facturasWhereInput
    some?: facturasWhereInput
    none?: facturasWhereInput
  }

  export type facturasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ventasCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    metodopago?: SortOrder
  }

  export type ventasAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type ventasMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    metodopago?: SortOrder
  }

  export type ventasMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    metodopago?: SortOrder
  }

  export type ventasSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type ProductosNullableScalarRelationFilter = {
    is?: productosWhereInput | null
    isNot?: productosWhereInput | null
  }

  export type VentasNullableScalarRelationFilter = {
    is?: ventasWhereInput | null
    isNot?: ventasWhereInput | null
  }

  export type detalleventasCountOrderByAggregateInput = {
    id?: SortOrder
    ventaid?: SortOrder
    productoid?: SortOrder
    cantidad?: SortOrder
    preciounitario?: SortOrder
  }

  export type detalleventasAvgOrderByAggregateInput = {
    id?: SortOrder
    ventaid?: SortOrder
    productoid?: SortOrder
    cantidad?: SortOrder
    preciounitario?: SortOrder
  }

  export type detalleventasMaxOrderByAggregateInput = {
    id?: SortOrder
    ventaid?: SortOrder
    productoid?: SortOrder
    cantidad?: SortOrder
    preciounitario?: SortOrder
  }

  export type detalleventasMinOrderByAggregateInput = {
    id?: SortOrder
    ventaid?: SortOrder
    productoid?: SortOrder
    cantidad?: SortOrder
    preciounitario?: SortOrder
  }

  export type detalleventasSumOrderByAggregateInput = {
    id?: SortOrder
    ventaid?: SortOrder
    productoid?: SortOrder
    cantidad?: SortOrder
    preciounitario?: SortOrder
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

  export type Factura_itemsListRelationFilter = {
    every?: factura_itemsWhereInput
    some?: factura_itemsWhereInput
    none?: factura_itemsWhereInput
  }

  export type factura_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type facturasCountOrderByAggregateInput = {
    id?: SortOrder
    ventaid?: SortOrder
    folio?: SortOrder
    serie?: SortOrder
    fecha?: SortOrder
    moneda?: SortOrder
    formaPago?: SortOrder
    metodoPago?: SortOrder
    usoCfdi?: SortOrder
    tasaIvaGlobal?: SortOrder
    observaciones?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    descuentos?: SortOrder
    total?: SortOrder
    negocioNombre?: SortOrder
    negocioRfc?: SortOrder
    negocioDir?: SortOrder
    negocioTel?: SortOrder
    negocioEmail?: SortOrder
    clienteNombre?: SortOrder
    clienteRfc?: SortOrder
    clienteCp?: SortOrder
    clienteDir?: SortOrder
    clienteEmail?: SortOrder
    clienteTel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facturasAvgOrderByAggregateInput = {
    id?: SortOrder
    ventaid?: SortOrder
    tasaIvaGlobal?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    descuentos?: SortOrder
    total?: SortOrder
  }

  export type facturasMaxOrderByAggregateInput = {
    id?: SortOrder
    ventaid?: SortOrder
    folio?: SortOrder
    serie?: SortOrder
    fecha?: SortOrder
    moneda?: SortOrder
    formaPago?: SortOrder
    metodoPago?: SortOrder
    usoCfdi?: SortOrder
    tasaIvaGlobal?: SortOrder
    observaciones?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    descuentos?: SortOrder
    total?: SortOrder
    negocioNombre?: SortOrder
    negocioRfc?: SortOrder
    negocioDir?: SortOrder
    negocioTel?: SortOrder
    negocioEmail?: SortOrder
    clienteNombre?: SortOrder
    clienteRfc?: SortOrder
    clienteCp?: SortOrder
    clienteDir?: SortOrder
    clienteEmail?: SortOrder
    clienteTel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facturasMinOrderByAggregateInput = {
    id?: SortOrder
    ventaid?: SortOrder
    folio?: SortOrder
    serie?: SortOrder
    fecha?: SortOrder
    moneda?: SortOrder
    formaPago?: SortOrder
    metodoPago?: SortOrder
    usoCfdi?: SortOrder
    tasaIvaGlobal?: SortOrder
    observaciones?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    descuentos?: SortOrder
    total?: SortOrder
    negocioNombre?: SortOrder
    negocioRfc?: SortOrder
    negocioDir?: SortOrder
    negocioTel?: SortOrder
    negocioEmail?: SortOrder
    clienteNombre?: SortOrder
    clienteRfc?: SortOrder
    clienteCp?: SortOrder
    clienteDir?: SortOrder
    clienteEmail?: SortOrder
    clienteTel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facturasSumOrderByAggregateInput = {
    id?: SortOrder
    ventaid?: SortOrder
    tasaIvaGlobal?: SortOrder
    subtotal?: SortOrder
    iva?: SortOrder
    descuentos?: SortOrder
    total?: SortOrder
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

  export type FacturasScalarRelationFilter = {
    is?: facturasWhereInput
    isNot?: facturasWhereInput
  }

  export type factura_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
    iva?: SortOrder
    importe?: SortOrder
  }

  export type factura_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
    iva?: SortOrder
    importe?: SortOrder
  }

  export type factura_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
    iva?: SortOrder
    importe?: SortOrder
  }

  export type factura_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
    iva?: SortOrder
    importe?: SortOrder
  }

  export type factura_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
    iva?: SortOrder
    importe?: SortOrder
  }

  export type movimientosinventarioCountOrderByAggregateInput = {
    id?: SortOrder
    productoid?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    observacion?: SortOrder
    fecha?: SortOrder
  }

  export type movimientosinventarioAvgOrderByAggregateInput = {
    id?: SortOrder
    productoid?: SortOrder
    cantidad?: SortOrder
  }

  export type movimientosinventarioMaxOrderByAggregateInput = {
    id?: SortOrder
    productoid?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    observacion?: SortOrder
    fecha?: SortOrder
  }

  export type movimientosinventarioMinOrderByAggregateInput = {
    id?: SortOrder
    productoid?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    observacion?: SortOrder
    fecha?: SortOrder
  }

  export type movimientosinventarioSumOrderByAggregateInput = {
    id?: SortOrder
    productoid?: SortOrder
    cantidad?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type reportesCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    datos?: SortOrder
    fecha?: SortOrder
  }

  export type reportesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type reportesMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
  }

  export type reportesMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
  }

  export type reportesSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type CarritoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    creadoEn?: SortOrder
    estado?: SortOrder
  }

  export type CarritoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CarritoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    creadoEn?: SortOrder
    estado?: SortOrder
  }

  export type CarritoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    creadoEn?: SortOrder
    estado?: SortOrder
  }

  export type CarritoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CarritoScalarRelationFilter = {
    is?: CarritoWhereInput
    isNot?: CarritoWhereInput
  }

  export type ProductosScalarRelationFilter = {
    is?: productosWhereInput
    isNot?: productosWhereInput
  }

  export type CarritoItemCountOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type CarritoItemAvgOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type CarritoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type CarritoItemMinOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type CarritoItemSumOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type CarritoCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<CarritoCreateWithoutUsuariosInput, CarritoUncheckedCreateWithoutUsuariosInput> | CarritoCreateWithoutUsuariosInput[] | CarritoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuariosInput | CarritoCreateOrConnectWithoutUsuariosInput[]
    createMany?: CarritoCreateManyUsuariosInputEnvelope
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
  }

  export type configuracionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<configuracionCreateWithoutUsuarioInput, configuracionUncheckedCreateWithoutUsuarioInput> | configuracionCreateWithoutUsuarioInput[] | configuracionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: configuracionCreateOrConnectWithoutUsuarioInput | configuracionCreateOrConnectWithoutUsuarioInput[]
    createMany?: configuracionCreateManyUsuarioInputEnvelope
    connect?: configuracionWhereUniqueInput | configuracionWhereUniqueInput[]
  }

  export type CarritoUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<CarritoCreateWithoutUsuariosInput, CarritoUncheckedCreateWithoutUsuariosInput> | CarritoCreateWithoutUsuariosInput[] | CarritoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuariosInput | CarritoCreateOrConnectWithoutUsuariosInput[]
    createMany?: CarritoCreateManyUsuariosInputEnvelope
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
  }

  export type configuracionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<configuracionCreateWithoutUsuarioInput, configuracionUncheckedCreateWithoutUsuarioInput> | configuracionCreateWithoutUsuarioInput[] | configuracionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: configuracionCreateOrConnectWithoutUsuarioInput | configuracionCreateOrConnectWithoutUsuarioInput[]
    createMany?: configuracionCreateManyUsuarioInputEnvelope
    connect?: configuracionWhereUniqueInput | configuracionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CarritoUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<CarritoCreateWithoutUsuariosInput, CarritoUncheckedCreateWithoutUsuariosInput> | CarritoCreateWithoutUsuariosInput[] | CarritoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuariosInput | CarritoCreateOrConnectWithoutUsuariosInput[]
    upsert?: CarritoUpsertWithWhereUniqueWithoutUsuariosInput | CarritoUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: CarritoCreateManyUsuariosInputEnvelope
    set?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    disconnect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    delete?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    update?: CarritoUpdateWithWhereUniqueWithoutUsuariosInput | CarritoUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: CarritoUpdateManyWithWhereWithoutUsuariosInput | CarritoUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: CarritoScalarWhereInput | CarritoScalarWhereInput[]
  }

  export type configuracionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<configuracionCreateWithoutUsuarioInput, configuracionUncheckedCreateWithoutUsuarioInput> | configuracionCreateWithoutUsuarioInput[] | configuracionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: configuracionCreateOrConnectWithoutUsuarioInput | configuracionCreateOrConnectWithoutUsuarioInput[]
    upsert?: configuracionUpsertWithWhereUniqueWithoutUsuarioInput | configuracionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: configuracionCreateManyUsuarioInputEnvelope
    set?: configuracionWhereUniqueInput | configuracionWhereUniqueInput[]
    disconnect?: configuracionWhereUniqueInput | configuracionWhereUniqueInput[]
    delete?: configuracionWhereUniqueInput | configuracionWhereUniqueInput[]
    connect?: configuracionWhereUniqueInput | configuracionWhereUniqueInput[]
    update?: configuracionUpdateWithWhereUniqueWithoutUsuarioInput | configuracionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: configuracionUpdateManyWithWhereWithoutUsuarioInput | configuracionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: configuracionScalarWhereInput | configuracionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarritoUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<CarritoCreateWithoutUsuariosInput, CarritoUncheckedCreateWithoutUsuariosInput> | CarritoCreateWithoutUsuariosInput[] | CarritoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuariosInput | CarritoCreateOrConnectWithoutUsuariosInput[]
    upsert?: CarritoUpsertWithWhereUniqueWithoutUsuariosInput | CarritoUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: CarritoCreateManyUsuariosInputEnvelope
    set?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    disconnect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    delete?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    update?: CarritoUpdateWithWhereUniqueWithoutUsuariosInput | CarritoUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: CarritoUpdateManyWithWhereWithoutUsuariosInput | CarritoUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: CarritoScalarWhereInput | CarritoScalarWhereInput[]
  }

  export type configuracionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<configuracionCreateWithoutUsuarioInput, configuracionUncheckedCreateWithoutUsuarioInput> | configuracionCreateWithoutUsuarioInput[] | configuracionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: configuracionCreateOrConnectWithoutUsuarioInput | configuracionCreateOrConnectWithoutUsuarioInput[]
    upsert?: configuracionUpsertWithWhereUniqueWithoutUsuarioInput | configuracionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: configuracionCreateManyUsuarioInputEnvelope
    set?: configuracionWhereUniqueInput | configuracionWhereUniqueInput[]
    disconnect?: configuracionWhereUniqueInput | configuracionWhereUniqueInput[]
    delete?: configuracionWhereUniqueInput | configuracionWhereUniqueInput[]
    connect?: configuracionWhereUniqueInput | configuracionWhereUniqueInput[]
    update?: configuracionUpdateWithWhereUniqueWithoutUsuarioInput | configuracionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: configuracionUpdateManyWithWhereWithoutUsuarioInput | configuracionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: configuracionScalarWhereInput | configuracionScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutConfiguracionesInput = {
    create?: XOR<usuariosCreateWithoutConfiguracionesInput, usuariosUncheckedCreateWithoutConfiguracionesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutConfiguracionesInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosUpdateOneWithoutConfiguracionesNestedInput = {
    create?: XOR<usuariosCreateWithoutConfiguracionesInput, usuariosUncheckedCreateWithoutConfiguracionesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutConfiguracionesInput
    upsert?: usuariosUpsertWithoutConfiguracionesInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutConfiguracionesInput, usuariosUpdateWithoutConfiguracionesInput>, usuariosUncheckedUpdateWithoutConfiguracionesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarritoItemCreateNestedManyWithoutProductoInput = {
    create?: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput> | CarritoItemCreateWithoutProductoInput[] | CarritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutProductoInput | CarritoItemCreateOrConnectWithoutProductoInput[]
    createMany?: CarritoItemCreateManyProductoInputEnvelope
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
  }

  export type detalleventasCreateNestedManyWithoutProductosInput = {
    create?: XOR<detalleventasCreateWithoutProductosInput, detalleventasUncheckedCreateWithoutProductosInput> | detalleventasCreateWithoutProductosInput[] | detalleventasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalleventasCreateOrConnectWithoutProductosInput | detalleventasCreateOrConnectWithoutProductosInput[]
    createMany?: detalleventasCreateManyProductosInputEnvelope
    connect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
  }

  export type movimientosinventarioCreateNestedManyWithoutProductosInput = {
    create?: XOR<movimientosinventarioCreateWithoutProductosInput, movimientosinventarioUncheckedCreateWithoutProductosInput> | movimientosinventarioCreateWithoutProductosInput[] | movimientosinventarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: movimientosinventarioCreateOrConnectWithoutProductosInput | movimientosinventarioCreateOrConnectWithoutProductosInput[]
    createMany?: movimientosinventarioCreateManyProductosInputEnvelope
    connect?: movimientosinventarioWhereUniqueInput | movimientosinventarioWhereUniqueInput[]
  }

  export type CarritoItemUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput> | CarritoItemCreateWithoutProductoInput[] | CarritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutProductoInput | CarritoItemCreateOrConnectWithoutProductoInput[]
    createMany?: CarritoItemCreateManyProductoInputEnvelope
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
  }

  export type detalleventasUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<detalleventasCreateWithoutProductosInput, detalleventasUncheckedCreateWithoutProductosInput> | detalleventasCreateWithoutProductosInput[] | detalleventasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalleventasCreateOrConnectWithoutProductosInput | detalleventasCreateOrConnectWithoutProductosInput[]
    createMany?: detalleventasCreateManyProductosInputEnvelope
    connect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
  }

  export type movimientosinventarioUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<movimientosinventarioCreateWithoutProductosInput, movimientosinventarioUncheckedCreateWithoutProductosInput> | movimientosinventarioCreateWithoutProductosInput[] | movimientosinventarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: movimientosinventarioCreateOrConnectWithoutProductosInput | movimientosinventarioCreateOrConnectWithoutProductosInput[]
    createMany?: movimientosinventarioCreateManyProductosInputEnvelope
    connect?: movimientosinventarioWhereUniqueInput | movimientosinventarioWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput> | CarritoItemCreateWithoutProductoInput[] | CarritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutProductoInput | CarritoItemCreateOrConnectWithoutProductoInput[]
    upsert?: CarritoItemUpsertWithWhereUniqueWithoutProductoInput | CarritoItemUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CarritoItemCreateManyProductoInputEnvelope
    set?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    disconnect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    delete?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    update?: CarritoItemUpdateWithWhereUniqueWithoutProductoInput | CarritoItemUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CarritoItemUpdateManyWithWhereWithoutProductoInput | CarritoItemUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
  }

  export type detalleventasUpdateManyWithoutProductosNestedInput = {
    create?: XOR<detalleventasCreateWithoutProductosInput, detalleventasUncheckedCreateWithoutProductosInput> | detalleventasCreateWithoutProductosInput[] | detalleventasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalleventasCreateOrConnectWithoutProductosInput | detalleventasCreateOrConnectWithoutProductosInput[]
    upsert?: detalleventasUpsertWithWhereUniqueWithoutProductosInput | detalleventasUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: detalleventasCreateManyProductosInputEnvelope
    set?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    disconnect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    delete?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    connect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    update?: detalleventasUpdateWithWhereUniqueWithoutProductosInput | detalleventasUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: detalleventasUpdateManyWithWhereWithoutProductosInput | detalleventasUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: detalleventasScalarWhereInput | detalleventasScalarWhereInput[]
  }

  export type movimientosinventarioUpdateManyWithoutProductosNestedInput = {
    create?: XOR<movimientosinventarioCreateWithoutProductosInput, movimientosinventarioUncheckedCreateWithoutProductosInput> | movimientosinventarioCreateWithoutProductosInput[] | movimientosinventarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: movimientosinventarioCreateOrConnectWithoutProductosInput | movimientosinventarioCreateOrConnectWithoutProductosInput[]
    upsert?: movimientosinventarioUpsertWithWhereUniqueWithoutProductosInput | movimientosinventarioUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: movimientosinventarioCreateManyProductosInputEnvelope
    set?: movimientosinventarioWhereUniqueInput | movimientosinventarioWhereUniqueInput[]
    disconnect?: movimientosinventarioWhereUniqueInput | movimientosinventarioWhereUniqueInput[]
    delete?: movimientosinventarioWhereUniqueInput | movimientosinventarioWhereUniqueInput[]
    connect?: movimientosinventarioWhereUniqueInput | movimientosinventarioWhereUniqueInput[]
    update?: movimientosinventarioUpdateWithWhereUniqueWithoutProductosInput | movimientosinventarioUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: movimientosinventarioUpdateManyWithWhereWithoutProductosInput | movimientosinventarioUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: movimientosinventarioScalarWhereInput | movimientosinventarioScalarWhereInput[]
  }

  export type CarritoItemUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput> | CarritoItemCreateWithoutProductoInput[] | CarritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutProductoInput | CarritoItemCreateOrConnectWithoutProductoInput[]
    upsert?: CarritoItemUpsertWithWhereUniqueWithoutProductoInput | CarritoItemUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CarritoItemCreateManyProductoInputEnvelope
    set?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    disconnect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    delete?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    update?: CarritoItemUpdateWithWhereUniqueWithoutProductoInput | CarritoItemUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CarritoItemUpdateManyWithWhereWithoutProductoInput | CarritoItemUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
  }

  export type detalleventasUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<detalleventasCreateWithoutProductosInput, detalleventasUncheckedCreateWithoutProductosInput> | detalleventasCreateWithoutProductosInput[] | detalleventasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalleventasCreateOrConnectWithoutProductosInput | detalleventasCreateOrConnectWithoutProductosInput[]
    upsert?: detalleventasUpsertWithWhereUniqueWithoutProductosInput | detalleventasUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: detalleventasCreateManyProductosInputEnvelope
    set?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    disconnect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    delete?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    connect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    update?: detalleventasUpdateWithWhereUniqueWithoutProductosInput | detalleventasUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: detalleventasUpdateManyWithWhereWithoutProductosInput | detalleventasUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: detalleventasScalarWhereInput | detalleventasScalarWhereInput[]
  }

  export type movimientosinventarioUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<movimientosinventarioCreateWithoutProductosInput, movimientosinventarioUncheckedCreateWithoutProductosInput> | movimientosinventarioCreateWithoutProductosInput[] | movimientosinventarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: movimientosinventarioCreateOrConnectWithoutProductosInput | movimientosinventarioCreateOrConnectWithoutProductosInput[]
    upsert?: movimientosinventarioUpsertWithWhereUniqueWithoutProductosInput | movimientosinventarioUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: movimientosinventarioCreateManyProductosInputEnvelope
    set?: movimientosinventarioWhereUniqueInput | movimientosinventarioWhereUniqueInput[]
    disconnect?: movimientosinventarioWhereUniqueInput | movimientosinventarioWhereUniqueInput[]
    delete?: movimientosinventarioWhereUniqueInput | movimientosinventarioWhereUniqueInput[]
    connect?: movimientosinventarioWhereUniqueInput | movimientosinventarioWhereUniqueInput[]
    update?: movimientosinventarioUpdateWithWhereUniqueWithoutProductosInput | movimientosinventarioUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: movimientosinventarioUpdateManyWithWhereWithoutProductosInput | movimientosinventarioUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: movimientosinventarioScalarWhereInput | movimientosinventarioScalarWhereInput[]
  }

  export type detalleventasCreateNestedManyWithoutVentasInput = {
    create?: XOR<detalleventasCreateWithoutVentasInput, detalleventasUncheckedCreateWithoutVentasInput> | detalleventasCreateWithoutVentasInput[] | detalleventasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalleventasCreateOrConnectWithoutVentasInput | detalleventasCreateOrConnectWithoutVentasInput[]
    createMany?: detalleventasCreateManyVentasInputEnvelope
    connect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
  }

  export type facturasCreateNestedManyWithoutVentasInput = {
    create?: XOR<facturasCreateWithoutVentasInput, facturasUncheckedCreateWithoutVentasInput> | facturasCreateWithoutVentasInput[] | facturasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: facturasCreateOrConnectWithoutVentasInput | facturasCreateOrConnectWithoutVentasInput[]
    createMany?: facturasCreateManyVentasInputEnvelope
    connect?: facturasWhereUniqueInput | facturasWhereUniqueInput[]
  }

  export type detalleventasUncheckedCreateNestedManyWithoutVentasInput = {
    create?: XOR<detalleventasCreateWithoutVentasInput, detalleventasUncheckedCreateWithoutVentasInput> | detalleventasCreateWithoutVentasInput[] | detalleventasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalleventasCreateOrConnectWithoutVentasInput | detalleventasCreateOrConnectWithoutVentasInput[]
    createMany?: detalleventasCreateManyVentasInputEnvelope
    connect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
  }

  export type facturasUncheckedCreateNestedManyWithoutVentasInput = {
    create?: XOR<facturasCreateWithoutVentasInput, facturasUncheckedCreateWithoutVentasInput> | facturasCreateWithoutVentasInput[] | facturasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: facturasCreateOrConnectWithoutVentasInput | facturasCreateOrConnectWithoutVentasInput[]
    createMany?: facturasCreateManyVentasInputEnvelope
    connect?: facturasWhereUniqueInput | facturasWhereUniqueInput[]
  }

  export type detalleventasUpdateManyWithoutVentasNestedInput = {
    create?: XOR<detalleventasCreateWithoutVentasInput, detalleventasUncheckedCreateWithoutVentasInput> | detalleventasCreateWithoutVentasInput[] | detalleventasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalleventasCreateOrConnectWithoutVentasInput | detalleventasCreateOrConnectWithoutVentasInput[]
    upsert?: detalleventasUpsertWithWhereUniqueWithoutVentasInput | detalleventasUpsertWithWhereUniqueWithoutVentasInput[]
    createMany?: detalleventasCreateManyVentasInputEnvelope
    set?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    disconnect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    delete?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    connect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    update?: detalleventasUpdateWithWhereUniqueWithoutVentasInput | detalleventasUpdateWithWhereUniqueWithoutVentasInput[]
    updateMany?: detalleventasUpdateManyWithWhereWithoutVentasInput | detalleventasUpdateManyWithWhereWithoutVentasInput[]
    deleteMany?: detalleventasScalarWhereInput | detalleventasScalarWhereInput[]
  }

  export type facturasUpdateManyWithoutVentasNestedInput = {
    create?: XOR<facturasCreateWithoutVentasInput, facturasUncheckedCreateWithoutVentasInput> | facturasCreateWithoutVentasInput[] | facturasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: facturasCreateOrConnectWithoutVentasInput | facturasCreateOrConnectWithoutVentasInput[]
    upsert?: facturasUpsertWithWhereUniqueWithoutVentasInput | facturasUpsertWithWhereUniqueWithoutVentasInput[]
    createMany?: facturasCreateManyVentasInputEnvelope
    set?: facturasWhereUniqueInput | facturasWhereUniqueInput[]
    disconnect?: facturasWhereUniqueInput | facturasWhereUniqueInput[]
    delete?: facturasWhereUniqueInput | facturasWhereUniqueInput[]
    connect?: facturasWhereUniqueInput | facturasWhereUniqueInput[]
    update?: facturasUpdateWithWhereUniqueWithoutVentasInput | facturasUpdateWithWhereUniqueWithoutVentasInput[]
    updateMany?: facturasUpdateManyWithWhereWithoutVentasInput | facturasUpdateManyWithWhereWithoutVentasInput[]
    deleteMany?: facturasScalarWhereInput | facturasScalarWhereInput[]
  }

  export type detalleventasUncheckedUpdateManyWithoutVentasNestedInput = {
    create?: XOR<detalleventasCreateWithoutVentasInput, detalleventasUncheckedCreateWithoutVentasInput> | detalleventasCreateWithoutVentasInput[] | detalleventasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalleventasCreateOrConnectWithoutVentasInput | detalleventasCreateOrConnectWithoutVentasInput[]
    upsert?: detalleventasUpsertWithWhereUniqueWithoutVentasInput | detalleventasUpsertWithWhereUniqueWithoutVentasInput[]
    createMany?: detalleventasCreateManyVentasInputEnvelope
    set?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    disconnect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    delete?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    connect?: detalleventasWhereUniqueInput | detalleventasWhereUniqueInput[]
    update?: detalleventasUpdateWithWhereUniqueWithoutVentasInput | detalleventasUpdateWithWhereUniqueWithoutVentasInput[]
    updateMany?: detalleventasUpdateManyWithWhereWithoutVentasInput | detalleventasUpdateManyWithWhereWithoutVentasInput[]
    deleteMany?: detalleventasScalarWhereInput | detalleventasScalarWhereInput[]
  }

  export type facturasUncheckedUpdateManyWithoutVentasNestedInput = {
    create?: XOR<facturasCreateWithoutVentasInput, facturasUncheckedCreateWithoutVentasInput> | facturasCreateWithoutVentasInput[] | facturasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: facturasCreateOrConnectWithoutVentasInput | facturasCreateOrConnectWithoutVentasInput[]
    upsert?: facturasUpsertWithWhereUniqueWithoutVentasInput | facturasUpsertWithWhereUniqueWithoutVentasInput[]
    createMany?: facturasCreateManyVentasInputEnvelope
    set?: facturasWhereUniqueInput | facturasWhereUniqueInput[]
    disconnect?: facturasWhereUniqueInput | facturasWhereUniqueInput[]
    delete?: facturasWhereUniqueInput | facturasWhereUniqueInput[]
    connect?: facturasWhereUniqueInput | facturasWhereUniqueInput[]
    update?: facturasUpdateWithWhereUniqueWithoutVentasInput | facturasUpdateWithWhereUniqueWithoutVentasInput[]
    updateMany?: facturasUpdateManyWithWhereWithoutVentasInput | facturasUpdateManyWithWhereWithoutVentasInput[]
    deleteMany?: facturasScalarWhereInput | facturasScalarWhereInput[]
  }

  export type productosCreateNestedOneWithoutDetalleventasInput = {
    create?: XOR<productosCreateWithoutDetalleventasInput, productosUncheckedCreateWithoutDetalleventasInput>
    connectOrCreate?: productosCreateOrConnectWithoutDetalleventasInput
    connect?: productosWhereUniqueInput
  }

  export type ventasCreateNestedOneWithoutDetalleventasInput = {
    create?: XOR<ventasCreateWithoutDetalleventasInput, ventasUncheckedCreateWithoutDetalleventasInput>
    connectOrCreate?: ventasCreateOrConnectWithoutDetalleventasInput
    connect?: ventasWhereUniqueInput
  }

  export type productosUpdateOneWithoutDetalleventasNestedInput = {
    create?: XOR<productosCreateWithoutDetalleventasInput, productosUncheckedCreateWithoutDetalleventasInput>
    connectOrCreate?: productosCreateOrConnectWithoutDetalleventasInput
    upsert?: productosUpsertWithoutDetalleventasInput
    disconnect?: productosWhereInput | boolean
    delete?: productosWhereInput | boolean
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutDetalleventasInput, productosUpdateWithoutDetalleventasInput>, productosUncheckedUpdateWithoutDetalleventasInput>
  }

  export type ventasUpdateOneWithoutDetalleventasNestedInput = {
    create?: XOR<ventasCreateWithoutDetalleventasInput, ventasUncheckedCreateWithoutDetalleventasInput>
    connectOrCreate?: ventasCreateOrConnectWithoutDetalleventasInput
    upsert?: ventasUpsertWithoutDetalleventasInput
    disconnect?: ventasWhereInput | boolean
    delete?: ventasWhereInput | boolean
    connect?: ventasWhereUniqueInput
    update?: XOR<XOR<ventasUpdateToOneWithWhereWithoutDetalleventasInput, ventasUpdateWithoutDetalleventasInput>, ventasUncheckedUpdateWithoutDetalleventasInput>
  }

  export type factura_itemsCreateNestedManyWithoutFacturaInput = {
    create?: XOR<factura_itemsCreateWithoutFacturaInput, factura_itemsUncheckedCreateWithoutFacturaInput> | factura_itemsCreateWithoutFacturaInput[] | factura_itemsUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: factura_itemsCreateOrConnectWithoutFacturaInput | factura_itemsCreateOrConnectWithoutFacturaInput[]
    createMany?: factura_itemsCreateManyFacturaInputEnvelope
    connect?: factura_itemsWhereUniqueInput | factura_itemsWhereUniqueInput[]
  }

  export type ventasCreateNestedOneWithoutFacturasInput = {
    create?: XOR<ventasCreateWithoutFacturasInput, ventasUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: ventasCreateOrConnectWithoutFacturasInput
    connect?: ventasWhereUniqueInput
  }

  export type factura_itemsUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: XOR<factura_itemsCreateWithoutFacturaInput, factura_itemsUncheckedCreateWithoutFacturaInput> | factura_itemsCreateWithoutFacturaInput[] | factura_itemsUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: factura_itemsCreateOrConnectWithoutFacturaInput | factura_itemsCreateOrConnectWithoutFacturaInput[]
    createMany?: factura_itemsCreateManyFacturaInputEnvelope
    connect?: factura_itemsWhereUniqueInput | factura_itemsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type factura_itemsUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<factura_itemsCreateWithoutFacturaInput, factura_itemsUncheckedCreateWithoutFacturaInput> | factura_itemsCreateWithoutFacturaInput[] | factura_itemsUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: factura_itemsCreateOrConnectWithoutFacturaInput | factura_itemsCreateOrConnectWithoutFacturaInput[]
    upsert?: factura_itemsUpsertWithWhereUniqueWithoutFacturaInput | factura_itemsUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: factura_itemsCreateManyFacturaInputEnvelope
    set?: factura_itemsWhereUniqueInput | factura_itemsWhereUniqueInput[]
    disconnect?: factura_itemsWhereUniqueInput | factura_itemsWhereUniqueInput[]
    delete?: factura_itemsWhereUniqueInput | factura_itemsWhereUniqueInput[]
    connect?: factura_itemsWhereUniqueInput | factura_itemsWhereUniqueInput[]
    update?: factura_itemsUpdateWithWhereUniqueWithoutFacturaInput | factura_itemsUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: factura_itemsUpdateManyWithWhereWithoutFacturaInput | factura_itemsUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: factura_itemsScalarWhereInput | factura_itemsScalarWhereInput[]
  }

  export type ventasUpdateOneWithoutFacturasNestedInput = {
    create?: XOR<ventasCreateWithoutFacturasInput, ventasUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: ventasCreateOrConnectWithoutFacturasInput
    upsert?: ventasUpsertWithoutFacturasInput
    disconnect?: ventasWhereInput | boolean
    delete?: ventasWhereInput | boolean
    connect?: ventasWhereUniqueInput
    update?: XOR<XOR<ventasUpdateToOneWithWhereWithoutFacturasInput, ventasUpdateWithoutFacturasInput>, ventasUncheckedUpdateWithoutFacturasInput>
  }

  export type factura_itemsUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<factura_itemsCreateWithoutFacturaInput, factura_itemsUncheckedCreateWithoutFacturaInput> | factura_itemsCreateWithoutFacturaInput[] | factura_itemsUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: factura_itemsCreateOrConnectWithoutFacturaInput | factura_itemsCreateOrConnectWithoutFacturaInput[]
    upsert?: factura_itemsUpsertWithWhereUniqueWithoutFacturaInput | factura_itemsUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: factura_itemsCreateManyFacturaInputEnvelope
    set?: factura_itemsWhereUniqueInput | factura_itemsWhereUniqueInput[]
    disconnect?: factura_itemsWhereUniqueInput | factura_itemsWhereUniqueInput[]
    delete?: factura_itemsWhereUniqueInput | factura_itemsWhereUniqueInput[]
    connect?: factura_itemsWhereUniqueInput | factura_itemsWhereUniqueInput[]
    update?: factura_itemsUpdateWithWhereUniqueWithoutFacturaInput | factura_itemsUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: factura_itemsUpdateManyWithWhereWithoutFacturaInput | factura_itemsUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: factura_itemsScalarWhereInput | factura_itemsScalarWhereInput[]
  }

  export type facturasCreateNestedOneWithoutItemsInput = {
    create?: XOR<facturasCreateWithoutItemsInput, facturasUncheckedCreateWithoutItemsInput>
    connectOrCreate?: facturasCreateOrConnectWithoutItemsInput
    connect?: facturasWhereUniqueInput
  }

  export type facturasUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<facturasCreateWithoutItemsInput, facturasUncheckedCreateWithoutItemsInput>
    connectOrCreate?: facturasCreateOrConnectWithoutItemsInput
    upsert?: facturasUpsertWithoutItemsInput
    connect?: facturasWhereUniqueInput
    update?: XOR<XOR<facturasUpdateToOneWithWhereWithoutItemsInput, facturasUpdateWithoutItemsInput>, facturasUncheckedUpdateWithoutItemsInput>
  }

  export type productosCreateNestedOneWithoutMovimientosinventarioInput = {
    create?: XOR<productosCreateWithoutMovimientosinventarioInput, productosUncheckedCreateWithoutMovimientosinventarioInput>
    connectOrCreate?: productosCreateOrConnectWithoutMovimientosinventarioInput
    connect?: productosWhereUniqueInput
  }

  export type productosUpdateOneWithoutMovimientosinventarioNestedInput = {
    create?: XOR<productosCreateWithoutMovimientosinventarioInput, productosUncheckedCreateWithoutMovimientosinventarioInput>
    connectOrCreate?: productosCreateOrConnectWithoutMovimientosinventarioInput
    upsert?: productosUpsertWithoutMovimientosinventarioInput
    disconnect?: productosWhereInput | boolean
    delete?: productosWhereInput | boolean
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutMovimientosinventarioInput, productosUpdateWithoutMovimientosinventarioInput>, productosUncheckedUpdateWithoutMovimientosinventarioInput>
  }

  export type usuariosCreateNestedOneWithoutCarritosInput = {
    create?: XOR<usuariosCreateWithoutCarritosInput, usuariosUncheckedCreateWithoutCarritosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCarritosInput
    connect?: usuariosWhereUniqueInput
  }

  export type CarritoItemCreateNestedManyWithoutCarritoInput = {
    create?: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput> | CarritoItemCreateWithoutCarritoInput[] | CarritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutCarritoInput | CarritoItemCreateOrConnectWithoutCarritoInput[]
    createMany?: CarritoItemCreateManyCarritoInputEnvelope
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
  }

  export type CarritoItemUncheckedCreateNestedManyWithoutCarritoInput = {
    create?: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput> | CarritoItemCreateWithoutCarritoInput[] | CarritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutCarritoInput | CarritoItemCreateOrConnectWithoutCarritoInput[]
    createMany?: CarritoItemCreateManyCarritoInputEnvelope
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
  }

  export type usuariosUpdateOneRequiredWithoutCarritosNestedInput = {
    create?: XOR<usuariosCreateWithoutCarritosInput, usuariosUncheckedCreateWithoutCarritosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCarritosInput
    upsert?: usuariosUpsertWithoutCarritosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutCarritosInput, usuariosUpdateWithoutCarritosInput>, usuariosUncheckedUpdateWithoutCarritosInput>
  }

  export type CarritoItemUpdateManyWithoutCarritoNestedInput = {
    create?: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput> | CarritoItemCreateWithoutCarritoInput[] | CarritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutCarritoInput | CarritoItemCreateOrConnectWithoutCarritoInput[]
    upsert?: CarritoItemUpsertWithWhereUniqueWithoutCarritoInput | CarritoItemUpsertWithWhereUniqueWithoutCarritoInput[]
    createMany?: CarritoItemCreateManyCarritoInputEnvelope
    set?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    disconnect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    delete?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    update?: CarritoItemUpdateWithWhereUniqueWithoutCarritoInput | CarritoItemUpdateWithWhereUniqueWithoutCarritoInput[]
    updateMany?: CarritoItemUpdateManyWithWhereWithoutCarritoInput | CarritoItemUpdateManyWithWhereWithoutCarritoInput[]
    deleteMany?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
  }

  export type CarritoItemUncheckedUpdateManyWithoutCarritoNestedInput = {
    create?: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput> | CarritoItemCreateWithoutCarritoInput[] | CarritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutCarritoInput | CarritoItemCreateOrConnectWithoutCarritoInput[]
    upsert?: CarritoItemUpsertWithWhereUniqueWithoutCarritoInput | CarritoItemUpsertWithWhereUniqueWithoutCarritoInput[]
    createMany?: CarritoItemCreateManyCarritoInputEnvelope
    set?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    disconnect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    delete?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    update?: CarritoItemUpdateWithWhereUniqueWithoutCarritoInput | CarritoItemUpdateWithWhereUniqueWithoutCarritoInput[]
    updateMany?: CarritoItemUpdateManyWithWhereWithoutCarritoInput | CarritoItemUpdateManyWithWhereWithoutCarritoInput[]
    deleteMany?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
  }

  export type CarritoCreateNestedOneWithoutItemsInput = {
    create?: XOR<CarritoCreateWithoutItemsInput, CarritoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutItemsInput
    connect?: CarritoWhereUniqueInput
  }

  export type productosCreateNestedOneWithoutCarritoItemsInput = {
    create?: XOR<productosCreateWithoutCarritoItemsInput, productosUncheckedCreateWithoutCarritoItemsInput>
    connectOrCreate?: productosCreateOrConnectWithoutCarritoItemsInput
    connect?: productosWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarritoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CarritoCreateWithoutItemsInput, CarritoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutItemsInput
    upsert?: CarritoUpsertWithoutItemsInput
    connect?: CarritoWhereUniqueInput
    update?: XOR<XOR<CarritoUpdateToOneWithWhereWithoutItemsInput, CarritoUpdateWithoutItemsInput>, CarritoUncheckedUpdateWithoutItemsInput>
  }

  export type productosUpdateOneRequiredWithoutCarritoItemsNestedInput = {
    create?: XOR<productosCreateWithoutCarritoItemsInput, productosUncheckedCreateWithoutCarritoItemsInput>
    connectOrCreate?: productosCreateOrConnectWithoutCarritoItemsInput
    upsert?: productosUpsertWithoutCarritoItemsInput
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutCarritoItemsInput, productosUpdateWithoutCarritoItemsInput>, productosUncheckedUpdateWithoutCarritoItemsInput>
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type CarritoCreateWithoutUsuariosInput = {
    creadoEn?: Date | string
    estado?: string
    items?: CarritoItemCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUncheckedCreateWithoutUsuariosInput = {
    id?: number
    creadoEn?: Date | string
    estado?: string
    items?: CarritoItemUncheckedCreateNestedManyWithoutCarritoInput
  }

  export type CarritoCreateOrConnectWithoutUsuariosInput = {
    where: CarritoWhereUniqueInput
    create: XOR<CarritoCreateWithoutUsuariosInput, CarritoUncheckedCreateWithoutUsuariosInput>
  }

  export type CarritoCreateManyUsuariosInputEnvelope = {
    data: CarritoCreateManyUsuariosInput | CarritoCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type configuracionCreateWithoutUsuarioInput = {
    clave: string
    valor?: string | null
  }

  export type configuracionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    clave: string
    valor?: string | null
  }

  export type configuracionCreateOrConnectWithoutUsuarioInput = {
    where: configuracionWhereUniqueInput
    create: XOR<configuracionCreateWithoutUsuarioInput, configuracionUncheckedCreateWithoutUsuarioInput>
  }

  export type configuracionCreateManyUsuarioInputEnvelope = {
    data: configuracionCreateManyUsuarioInput | configuracionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CarritoUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: CarritoWhereUniqueInput
    update: XOR<CarritoUpdateWithoutUsuariosInput, CarritoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<CarritoCreateWithoutUsuariosInput, CarritoUncheckedCreateWithoutUsuariosInput>
  }

  export type CarritoUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: CarritoWhereUniqueInput
    data: XOR<CarritoUpdateWithoutUsuariosInput, CarritoUncheckedUpdateWithoutUsuariosInput>
  }

  export type CarritoUpdateManyWithWhereWithoutUsuariosInput = {
    where: CarritoScalarWhereInput
    data: XOR<CarritoUpdateManyMutationInput, CarritoUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type CarritoScalarWhereInput = {
    AND?: CarritoScalarWhereInput | CarritoScalarWhereInput[]
    OR?: CarritoScalarWhereInput[]
    NOT?: CarritoScalarWhereInput | CarritoScalarWhereInput[]
    id?: IntFilter<"Carrito"> | number
    usuarioId?: IntFilter<"Carrito"> | number
    creadoEn?: DateTimeFilter<"Carrito"> | Date | string
    estado?: StringFilter<"Carrito"> | string
  }

  export type configuracionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: configuracionWhereUniqueInput
    update: XOR<configuracionUpdateWithoutUsuarioInput, configuracionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<configuracionCreateWithoutUsuarioInput, configuracionUncheckedCreateWithoutUsuarioInput>
  }

  export type configuracionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: configuracionWhereUniqueInput
    data: XOR<configuracionUpdateWithoutUsuarioInput, configuracionUncheckedUpdateWithoutUsuarioInput>
  }

  export type configuracionUpdateManyWithWhereWithoutUsuarioInput = {
    where: configuracionScalarWhereInput
    data: XOR<configuracionUpdateManyMutationInput, configuracionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type configuracionScalarWhereInput = {
    AND?: configuracionScalarWhereInput | configuracionScalarWhereInput[]
    OR?: configuracionScalarWhereInput[]
    NOT?: configuracionScalarWhereInput | configuracionScalarWhereInput[]
    id?: IntFilter<"configuracion"> | number
    clave?: StringFilter<"configuracion"> | string
    valor?: StringNullableFilter<"configuracion"> | string | null
    usuarioid?: IntNullableFilter<"configuracion"> | number | null
  }

  export type usuariosCreateWithoutConfiguracionesInput = {
    nombre?: string | null
    usuario: string
    password: string
    rol?: $Enums.Rol
    creadoen?: Date | string | null
    carritos?: CarritoCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutConfiguracionesInput = {
    id?: number
    nombre?: string | null
    usuario: string
    password: string
    rol?: $Enums.Rol
    creadoen?: Date | string | null
    carritos?: CarritoUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutConfiguracionesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutConfiguracionesInput, usuariosUncheckedCreateWithoutConfiguracionesInput>
  }

  export type usuariosUpsertWithoutConfiguracionesInput = {
    update: XOR<usuariosUpdateWithoutConfiguracionesInput, usuariosUncheckedUpdateWithoutConfiguracionesInput>
    create: XOR<usuariosCreateWithoutConfiguracionesInput, usuariosUncheckedCreateWithoutConfiguracionesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutConfiguracionesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutConfiguracionesInput, usuariosUncheckedUpdateWithoutConfiguracionesInput>
  }

  export type usuariosUpdateWithoutConfiguracionesInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carritos?: CarritoUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutConfiguracionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carritos?: CarritoUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type CarritoItemCreateWithoutProductoInput = {
    cantidad: number
    precio: number
    carrito: CarritoCreateNestedOneWithoutItemsInput
  }

  export type CarritoItemUncheckedCreateWithoutProductoInput = {
    id?: number
    carritoId: number
    cantidad: number
    precio: number
  }

  export type CarritoItemCreateOrConnectWithoutProductoInput = {
    where: CarritoItemWhereUniqueInput
    create: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput>
  }

  export type CarritoItemCreateManyProductoInputEnvelope = {
    data: CarritoItemCreateManyProductoInput | CarritoItemCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type detalleventasCreateWithoutProductosInput = {
    cantidad?: number | null
    preciounitario?: Decimal | DecimalJsLike | number | string | null
    ventas?: ventasCreateNestedOneWithoutDetalleventasInput
  }

  export type detalleventasUncheckedCreateWithoutProductosInput = {
    id?: number
    ventaid?: number | null
    cantidad?: number | null
    preciounitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type detalleventasCreateOrConnectWithoutProductosInput = {
    where: detalleventasWhereUniqueInput
    create: XOR<detalleventasCreateWithoutProductosInput, detalleventasUncheckedCreateWithoutProductosInput>
  }

  export type detalleventasCreateManyProductosInputEnvelope = {
    data: detalleventasCreateManyProductosInput | detalleventasCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type movimientosinventarioCreateWithoutProductosInput = {
    tipo?: string | null
    cantidad?: number | null
    observacion?: string | null
    fecha?: Date | string | null
  }

  export type movimientosinventarioUncheckedCreateWithoutProductosInput = {
    id?: number
    tipo?: string | null
    cantidad?: number | null
    observacion?: string | null
    fecha?: Date | string | null
  }

  export type movimientosinventarioCreateOrConnectWithoutProductosInput = {
    where: movimientosinventarioWhereUniqueInput
    create: XOR<movimientosinventarioCreateWithoutProductosInput, movimientosinventarioUncheckedCreateWithoutProductosInput>
  }

  export type movimientosinventarioCreateManyProductosInputEnvelope = {
    data: movimientosinventarioCreateManyProductosInput | movimientosinventarioCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type CarritoItemUpsertWithWhereUniqueWithoutProductoInput = {
    where: CarritoItemWhereUniqueInput
    update: XOR<CarritoItemUpdateWithoutProductoInput, CarritoItemUncheckedUpdateWithoutProductoInput>
    create: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput>
  }

  export type CarritoItemUpdateWithWhereUniqueWithoutProductoInput = {
    where: CarritoItemWhereUniqueInput
    data: XOR<CarritoItemUpdateWithoutProductoInput, CarritoItemUncheckedUpdateWithoutProductoInput>
  }

  export type CarritoItemUpdateManyWithWhereWithoutProductoInput = {
    where: CarritoItemScalarWhereInput
    data: XOR<CarritoItemUpdateManyMutationInput, CarritoItemUncheckedUpdateManyWithoutProductoInput>
  }

  export type CarritoItemScalarWhereInput = {
    AND?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
    OR?: CarritoItemScalarWhereInput[]
    NOT?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
    id?: IntFilter<"CarritoItem"> | number
    carritoId?: IntFilter<"CarritoItem"> | number
    productoId?: IntFilter<"CarritoItem"> | number
    cantidad?: IntFilter<"CarritoItem"> | number
    precio?: FloatFilter<"CarritoItem"> | number
  }

  export type detalleventasUpsertWithWhereUniqueWithoutProductosInput = {
    where: detalleventasWhereUniqueInput
    update: XOR<detalleventasUpdateWithoutProductosInput, detalleventasUncheckedUpdateWithoutProductosInput>
    create: XOR<detalleventasCreateWithoutProductosInput, detalleventasUncheckedCreateWithoutProductosInput>
  }

  export type detalleventasUpdateWithWhereUniqueWithoutProductosInput = {
    where: detalleventasWhereUniqueInput
    data: XOR<detalleventasUpdateWithoutProductosInput, detalleventasUncheckedUpdateWithoutProductosInput>
  }

  export type detalleventasUpdateManyWithWhereWithoutProductosInput = {
    where: detalleventasScalarWhereInput
    data: XOR<detalleventasUpdateManyMutationInput, detalleventasUncheckedUpdateManyWithoutProductosInput>
  }

  export type detalleventasScalarWhereInput = {
    AND?: detalleventasScalarWhereInput | detalleventasScalarWhereInput[]
    OR?: detalleventasScalarWhereInput[]
    NOT?: detalleventasScalarWhereInput | detalleventasScalarWhereInput[]
    id?: IntFilter<"detalleventas"> | number
    ventaid?: IntNullableFilter<"detalleventas"> | number | null
    productoid?: IntNullableFilter<"detalleventas"> | number | null
    cantidad?: IntNullableFilter<"detalleventas"> | number | null
    preciounitario?: DecimalNullableFilter<"detalleventas"> | Decimal | DecimalJsLike | number | string | null
  }

  export type movimientosinventarioUpsertWithWhereUniqueWithoutProductosInput = {
    where: movimientosinventarioWhereUniqueInput
    update: XOR<movimientosinventarioUpdateWithoutProductosInput, movimientosinventarioUncheckedUpdateWithoutProductosInput>
    create: XOR<movimientosinventarioCreateWithoutProductosInput, movimientosinventarioUncheckedCreateWithoutProductosInput>
  }

  export type movimientosinventarioUpdateWithWhereUniqueWithoutProductosInput = {
    where: movimientosinventarioWhereUniqueInput
    data: XOR<movimientosinventarioUpdateWithoutProductosInput, movimientosinventarioUncheckedUpdateWithoutProductosInput>
  }

  export type movimientosinventarioUpdateManyWithWhereWithoutProductosInput = {
    where: movimientosinventarioScalarWhereInput
    data: XOR<movimientosinventarioUpdateManyMutationInput, movimientosinventarioUncheckedUpdateManyWithoutProductosInput>
  }

  export type movimientosinventarioScalarWhereInput = {
    AND?: movimientosinventarioScalarWhereInput | movimientosinventarioScalarWhereInput[]
    OR?: movimientosinventarioScalarWhereInput[]
    NOT?: movimientosinventarioScalarWhereInput | movimientosinventarioScalarWhereInput[]
    id?: IntFilter<"movimientosinventario"> | number
    productoid?: IntNullableFilter<"movimientosinventario"> | number | null
    tipo?: StringNullableFilter<"movimientosinventario"> | string | null
    cantidad?: IntNullableFilter<"movimientosinventario"> | number | null
    observacion?: StringNullableFilter<"movimientosinventario"> | string | null
    fecha?: DateTimeNullableFilter<"movimientosinventario"> | Date | string | null
  }

  export type detalleventasCreateWithoutVentasInput = {
    cantidad?: number | null
    preciounitario?: Decimal | DecimalJsLike | number | string | null
    productos?: productosCreateNestedOneWithoutDetalleventasInput
  }

  export type detalleventasUncheckedCreateWithoutVentasInput = {
    id?: number
    productoid?: number | null
    cantidad?: number | null
    preciounitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type detalleventasCreateOrConnectWithoutVentasInput = {
    where: detalleventasWhereUniqueInput
    create: XOR<detalleventasCreateWithoutVentasInput, detalleventasUncheckedCreateWithoutVentasInput>
  }

  export type detalleventasCreateManyVentasInputEnvelope = {
    data: detalleventasCreateManyVentasInput | detalleventasCreateManyVentasInput[]
    skipDuplicates?: boolean
  }

  export type facturasCreateWithoutVentasInput = {
    folio?: string | null
    serie?: string | null
    fecha?: Date | string
    moneda?: string
    formaPago?: string
    metodoPago?: string
    usoCfdi?: string
    tasaIvaGlobal?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    descuentos?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    negocioNombre: string
    negocioRfc?: string | null
    negocioDir?: string | null
    negocioTel?: string | null
    negocioEmail?: string | null
    clienteNombre: string
    clienteRfc?: string | null
    clienteCp?: string | null
    clienteDir?: string | null
    clienteEmail?: string | null
    clienteTel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: factura_itemsCreateNestedManyWithoutFacturaInput
  }

  export type facturasUncheckedCreateWithoutVentasInput = {
    id?: number
    folio?: string | null
    serie?: string | null
    fecha?: Date | string
    moneda?: string
    formaPago?: string
    metodoPago?: string
    usoCfdi?: string
    tasaIvaGlobal?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    descuentos?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    negocioNombre: string
    negocioRfc?: string | null
    negocioDir?: string | null
    negocioTel?: string | null
    negocioEmail?: string | null
    clienteNombre: string
    clienteRfc?: string | null
    clienteCp?: string | null
    clienteDir?: string | null
    clienteEmail?: string | null
    clienteTel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: factura_itemsUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type facturasCreateOrConnectWithoutVentasInput = {
    where: facturasWhereUniqueInput
    create: XOR<facturasCreateWithoutVentasInput, facturasUncheckedCreateWithoutVentasInput>
  }

  export type facturasCreateManyVentasInputEnvelope = {
    data: facturasCreateManyVentasInput | facturasCreateManyVentasInput[]
    skipDuplicates?: boolean
  }

  export type detalleventasUpsertWithWhereUniqueWithoutVentasInput = {
    where: detalleventasWhereUniqueInput
    update: XOR<detalleventasUpdateWithoutVentasInput, detalleventasUncheckedUpdateWithoutVentasInput>
    create: XOR<detalleventasCreateWithoutVentasInput, detalleventasUncheckedCreateWithoutVentasInput>
  }

  export type detalleventasUpdateWithWhereUniqueWithoutVentasInput = {
    where: detalleventasWhereUniqueInput
    data: XOR<detalleventasUpdateWithoutVentasInput, detalleventasUncheckedUpdateWithoutVentasInput>
  }

  export type detalleventasUpdateManyWithWhereWithoutVentasInput = {
    where: detalleventasScalarWhereInput
    data: XOR<detalleventasUpdateManyMutationInput, detalleventasUncheckedUpdateManyWithoutVentasInput>
  }

  export type facturasUpsertWithWhereUniqueWithoutVentasInput = {
    where: facturasWhereUniqueInput
    update: XOR<facturasUpdateWithoutVentasInput, facturasUncheckedUpdateWithoutVentasInput>
    create: XOR<facturasCreateWithoutVentasInput, facturasUncheckedCreateWithoutVentasInput>
  }

  export type facturasUpdateWithWhereUniqueWithoutVentasInput = {
    where: facturasWhereUniqueInput
    data: XOR<facturasUpdateWithoutVentasInput, facturasUncheckedUpdateWithoutVentasInput>
  }

  export type facturasUpdateManyWithWhereWithoutVentasInput = {
    where: facturasScalarWhereInput
    data: XOR<facturasUpdateManyMutationInput, facturasUncheckedUpdateManyWithoutVentasInput>
  }

  export type facturasScalarWhereInput = {
    AND?: facturasScalarWhereInput | facturasScalarWhereInput[]
    OR?: facturasScalarWhereInput[]
    NOT?: facturasScalarWhereInput | facturasScalarWhereInput[]
    id?: IntFilter<"facturas"> | number
    ventaid?: IntNullableFilter<"facturas"> | number | null
    folio?: StringNullableFilter<"facturas"> | string | null
    serie?: StringNullableFilter<"facturas"> | string | null
    fecha?: DateTimeFilter<"facturas"> | Date | string
    moneda?: StringFilter<"facturas"> | string
    formaPago?: StringFilter<"facturas"> | string
    metodoPago?: StringFilter<"facturas"> | string
    usoCfdi?: StringFilter<"facturas"> | string
    tasaIvaGlobal?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"facturas"> | string | null
    subtotal?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    iva?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"facturas"> | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFilter<"facturas"> | string
    negocioRfc?: StringNullableFilter<"facturas"> | string | null
    negocioDir?: StringNullableFilter<"facturas"> | string | null
    negocioTel?: StringNullableFilter<"facturas"> | string | null
    negocioEmail?: StringNullableFilter<"facturas"> | string | null
    clienteNombre?: StringFilter<"facturas"> | string
    clienteRfc?: StringNullableFilter<"facturas"> | string | null
    clienteCp?: StringNullableFilter<"facturas"> | string | null
    clienteDir?: StringNullableFilter<"facturas"> | string | null
    clienteEmail?: StringNullableFilter<"facturas"> | string | null
    clienteTel?: StringNullableFilter<"facturas"> | string | null
    createdAt?: DateTimeFilter<"facturas"> | Date | string
    updatedAt?: DateTimeFilter<"facturas"> | Date | string
  }

  export type productosCreateWithoutDetalleventasInput = {
    nombre?: string | null
    tipo?: string | null
    preciocompra?: Decimal | DecimalJsLike | number | string | null
    precioventa?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    stockminimo?: number | null
    fechacaducidad?: Date | string | null
    creadoen?: Date | string | null
    unidadMedida?: string | null
    carritoItems?: CarritoItemCreateNestedManyWithoutProductoInput
    movimientosinventario?: movimientosinventarioCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutDetalleventasInput = {
    id?: number
    nombre?: string | null
    tipo?: string | null
    preciocompra?: Decimal | DecimalJsLike | number | string | null
    precioventa?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    stockminimo?: number | null
    fechacaducidad?: Date | string | null
    creadoen?: Date | string | null
    unidadMedida?: string | null
    carritoItems?: CarritoItemUncheckedCreateNestedManyWithoutProductoInput
    movimientosinventario?: movimientosinventarioUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutDetalleventasInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutDetalleventasInput, productosUncheckedCreateWithoutDetalleventasInput>
  }

  export type ventasCreateWithoutDetalleventasInput = {
    fecha?: Date | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    metodopago?: string | null
    facturas?: facturasCreateNestedManyWithoutVentasInput
  }

  export type ventasUncheckedCreateWithoutDetalleventasInput = {
    id?: number
    fecha?: Date | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    metodopago?: string | null
    facturas?: facturasUncheckedCreateNestedManyWithoutVentasInput
  }

  export type ventasCreateOrConnectWithoutDetalleventasInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutDetalleventasInput, ventasUncheckedCreateWithoutDetalleventasInput>
  }

  export type productosUpsertWithoutDetalleventasInput = {
    update: XOR<productosUpdateWithoutDetalleventasInput, productosUncheckedUpdateWithoutDetalleventasInput>
    create: XOR<productosCreateWithoutDetalleventasInput, productosUncheckedCreateWithoutDetalleventasInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutDetalleventasInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutDetalleventasInput, productosUncheckedUpdateWithoutDetalleventasInput>
  }

  export type productosUpdateWithoutDetalleventasInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    preciocompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioventa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    stockminimo?: NullableIntFieldUpdateOperationsInput | number | null
    fechacaducidad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unidadMedida?: NullableStringFieldUpdateOperationsInput | string | null
    carritoItems?: CarritoItemUpdateManyWithoutProductoNestedInput
    movimientosinventario?: movimientosinventarioUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutDetalleventasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    preciocompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioventa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    stockminimo?: NullableIntFieldUpdateOperationsInput | number | null
    fechacaducidad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unidadMedida?: NullableStringFieldUpdateOperationsInput | string | null
    carritoItems?: CarritoItemUncheckedUpdateManyWithoutProductoNestedInput
    movimientosinventario?: movimientosinventarioUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type ventasUpsertWithoutDetalleventasInput = {
    update: XOR<ventasUpdateWithoutDetalleventasInput, ventasUncheckedUpdateWithoutDetalleventasInput>
    create: XOR<ventasCreateWithoutDetalleventasInput, ventasUncheckedCreateWithoutDetalleventasInput>
    where?: ventasWhereInput
  }

  export type ventasUpdateToOneWithWhereWithoutDetalleventasInput = {
    where?: ventasWhereInput
    data: XOR<ventasUpdateWithoutDetalleventasInput, ventasUncheckedUpdateWithoutDetalleventasInput>
  }

  export type ventasUpdateWithoutDetalleventasInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metodopago?: NullableStringFieldUpdateOperationsInput | string | null
    facturas?: facturasUpdateManyWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateWithoutDetalleventasInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metodopago?: NullableStringFieldUpdateOperationsInput | string | null
    facturas?: facturasUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type factura_itemsCreateWithoutFacturaInput = {
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    importe: Decimal | DecimalJsLike | number | string
  }

  export type factura_itemsUncheckedCreateWithoutFacturaInput = {
    id?: number
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    importe: Decimal | DecimalJsLike | number | string
  }

  export type factura_itemsCreateOrConnectWithoutFacturaInput = {
    where: factura_itemsWhereUniqueInput
    create: XOR<factura_itemsCreateWithoutFacturaInput, factura_itemsUncheckedCreateWithoutFacturaInput>
  }

  export type factura_itemsCreateManyFacturaInputEnvelope = {
    data: factura_itemsCreateManyFacturaInput | factura_itemsCreateManyFacturaInput[]
    skipDuplicates?: boolean
  }

  export type ventasCreateWithoutFacturasInput = {
    fecha?: Date | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    metodopago?: string | null
    detalleventas?: detalleventasCreateNestedManyWithoutVentasInput
  }

  export type ventasUncheckedCreateWithoutFacturasInput = {
    id?: number
    fecha?: Date | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    metodopago?: string | null
    detalleventas?: detalleventasUncheckedCreateNestedManyWithoutVentasInput
  }

  export type ventasCreateOrConnectWithoutFacturasInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutFacturasInput, ventasUncheckedCreateWithoutFacturasInput>
  }

  export type factura_itemsUpsertWithWhereUniqueWithoutFacturaInput = {
    where: factura_itemsWhereUniqueInput
    update: XOR<factura_itemsUpdateWithoutFacturaInput, factura_itemsUncheckedUpdateWithoutFacturaInput>
    create: XOR<factura_itemsCreateWithoutFacturaInput, factura_itemsUncheckedCreateWithoutFacturaInput>
  }

  export type factura_itemsUpdateWithWhereUniqueWithoutFacturaInput = {
    where: factura_itemsWhereUniqueInput
    data: XOR<factura_itemsUpdateWithoutFacturaInput, factura_itemsUncheckedUpdateWithoutFacturaInput>
  }

  export type factura_itemsUpdateManyWithWhereWithoutFacturaInput = {
    where: factura_itemsScalarWhereInput
    data: XOR<factura_itemsUpdateManyMutationInput, factura_itemsUncheckedUpdateManyWithoutFacturaInput>
  }

  export type factura_itemsScalarWhereInput = {
    AND?: factura_itemsScalarWhereInput | factura_itemsScalarWhereInput[]
    OR?: factura_itemsScalarWhereInput[]
    NOT?: factura_itemsScalarWhereInput | factura_itemsScalarWhereInput[]
    id?: IntFilter<"factura_items"> | number
    facturaId?: IntFilter<"factura_items"> | number
    descripcion?: StringFilter<"factura_items"> | string
    cantidad?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    precio?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    iva?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
    importe?: DecimalFilter<"factura_items"> | Decimal | DecimalJsLike | number | string
  }

  export type ventasUpsertWithoutFacturasInput = {
    update: XOR<ventasUpdateWithoutFacturasInput, ventasUncheckedUpdateWithoutFacturasInput>
    create: XOR<ventasCreateWithoutFacturasInput, ventasUncheckedCreateWithoutFacturasInput>
    where?: ventasWhereInput
  }

  export type ventasUpdateToOneWithWhereWithoutFacturasInput = {
    where?: ventasWhereInput
    data: XOR<ventasUpdateWithoutFacturasInput, ventasUncheckedUpdateWithoutFacturasInput>
  }

  export type ventasUpdateWithoutFacturasInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metodopago?: NullableStringFieldUpdateOperationsInput | string | null
    detalleventas?: detalleventasUpdateManyWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateWithoutFacturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metodopago?: NullableStringFieldUpdateOperationsInput | string | null
    detalleventas?: detalleventasUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type facturasCreateWithoutItemsInput = {
    folio?: string | null
    serie?: string | null
    fecha?: Date | string
    moneda?: string
    formaPago?: string
    metodoPago?: string
    usoCfdi?: string
    tasaIvaGlobal?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    descuentos?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    negocioNombre: string
    negocioRfc?: string | null
    negocioDir?: string | null
    negocioTel?: string | null
    negocioEmail?: string | null
    clienteNombre: string
    clienteRfc?: string | null
    clienteCp?: string | null
    clienteDir?: string | null
    clienteEmail?: string | null
    clienteTel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ventas?: ventasCreateNestedOneWithoutFacturasInput
  }

  export type facturasUncheckedCreateWithoutItemsInput = {
    id?: number
    ventaid?: number | null
    folio?: string | null
    serie?: string | null
    fecha?: Date | string
    moneda?: string
    formaPago?: string
    metodoPago?: string
    usoCfdi?: string
    tasaIvaGlobal?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    descuentos?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    negocioNombre: string
    negocioRfc?: string | null
    negocioDir?: string | null
    negocioTel?: string | null
    negocioEmail?: string | null
    clienteNombre: string
    clienteRfc?: string | null
    clienteCp?: string | null
    clienteDir?: string | null
    clienteEmail?: string | null
    clienteTel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type facturasCreateOrConnectWithoutItemsInput = {
    where: facturasWhereUniqueInput
    create: XOR<facturasCreateWithoutItemsInput, facturasUncheckedCreateWithoutItemsInput>
  }

  export type facturasUpsertWithoutItemsInput = {
    update: XOR<facturasUpdateWithoutItemsInput, facturasUncheckedUpdateWithoutItemsInput>
    create: XOR<facturasCreateWithoutItemsInput, facturasUncheckedCreateWithoutItemsInput>
    where?: facturasWhereInput
  }

  export type facturasUpdateToOneWithWhereWithoutItemsInput = {
    where?: facturasWhereInput
    data: XOR<facturasUpdateWithoutItemsInput, facturasUncheckedUpdateWithoutItemsInput>
  }

  export type facturasUpdateWithoutItemsInput = {
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    usoCfdi?: StringFieldUpdateOperationsInput | string
    tasaIvaGlobal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFieldUpdateOperationsInput | string
    negocioRfc?: NullableStringFieldUpdateOperationsInput | string | null
    negocioDir?: NullableStringFieldUpdateOperationsInput | string | null
    negocioTel?: NullableStringFieldUpdateOperationsInput | string | null
    negocioEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteNombre?: StringFieldUpdateOperationsInput | string
    clienteRfc?: NullableStringFieldUpdateOperationsInput | string | null
    clienteCp?: NullableStringFieldUpdateOperationsInput | string | null
    clienteDir?: NullableStringFieldUpdateOperationsInput | string | null
    clienteEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteTel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ventas?: ventasUpdateOneWithoutFacturasNestedInput
  }

  export type facturasUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaid?: NullableIntFieldUpdateOperationsInput | number | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    usoCfdi?: StringFieldUpdateOperationsInput | string
    tasaIvaGlobal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFieldUpdateOperationsInput | string
    negocioRfc?: NullableStringFieldUpdateOperationsInput | string | null
    negocioDir?: NullableStringFieldUpdateOperationsInput | string | null
    negocioTel?: NullableStringFieldUpdateOperationsInput | string | null
    negocioEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteNombre?: StringFieldUpdateOperationsInput | string
    clienteRfc?: NullableStringFieldUpdateOperationsInput | string | null
    clienteCp?: NullableStringFieldUpdateOperationsInput | string | null
    clienteDir?: NullableStringFieldUpdateOperationsInput | string | null
    clienteEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteTel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosCreateWithoutMovimientosinventarioInput = {
    nombre?: string | null
    tipo?: string | null
    preciocompra?: Decimal | DecimalJsLike | number | string | null
    precioventa?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    stockminimo?: number | null
    fechacaducidad?: Date | string | null
    creadoen?: Date | string | null
    unidadMedida?: string | null
    carritoItems?: CarritoItemCreateNestedManyWithoutProductoInput
    detalleventas?: detalleventasCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutMovimientosinventarioInput = {
    id?: number
    nombre?: string | null
    tipo?: string | null
    preciocompra?: Decimal | DecimalJsLike | number | string | null
    precioventa?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    stockminimo?: number | null
    fechacaducidad?: Date | string | null
    creadoen?: Date | string | null
    unidadMedida?: string | null
    carritoItems?: CarritoItemUncheckedCreateNestedManyWithoutProductoInput
    detalleventas?: detalleventasUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutMovimientosinventarioInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutMovimientosinventarioInput, productosUncheckedCreateWithoutMovimientosinventarioInput>
  }

  export type productosUpsertWithoutMovimientosinventarioInput = {
    update: XOR<productosUpdateWithoutMovimientosinventarioInput, productosUncheckedUpdateWithoutMovimientosinventarioInput>
    create: XOR<productosCreateWithoutMovimientosinventarioInput, productosUncheckedCreateWithoutMovimientosinventarioInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutMovimientosinventarioInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutMovimientosinventarioInput, productosUncheckedUpdateWithoutMovimientosinventarioInput>
  }

  export type productosUpdateWithoutMovimientosinventarioInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    preciocompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioventa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    stockminimo?: NullableIntFieldUpdateOperationsInput | number | null
    fechacaducidad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unidadMedida?: NullableStringFieldUpdateOperationsInput | string | null
    carritoItems?: CarritoItemUpdateManyWithoutProductoNestedInput
    detalleventas?: detalleventasUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutMovimientosinventarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    preciocompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioventa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    stockminimo?: NullableIntFieldUpdateOperationsInput | number | null
    fechacaducidad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unidadMedida?: NullableStringFieldUpdateOperationsInput | string | null
    carritoItems?: CarritoItemUncheckedUpdateManyWithoutProductoNestedInput
    detalleventas?: detalleventasUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type usuariosCreateWithoutCarritosInput = {
    nombre?: string | null
    usuario: string
    password: string
    rol?: $Enums.Rol
    creadoen?: Date | string | null
    configuraciones?: configuracionCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateWithoutCarritosInput = {
    id?: number
    nombre?: string | null
    usuario: string
    password: string
    rol?: $Enums.Rol
    creadoen?: Date | string | null
    configuraciones?: configuracionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosCreateOrConnectWithoutCarritosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutCarritosInput, usuariosUncheckedCreateWithoutCarritosInput>
  }

  export type CarritoItemCreateWithoutCarritoInput = {
    cantidad: number
    precio: number
    producto: productosCreateNestedOneWithoutCarritoItemsInput
  }

  export type CarritoItemUncheckedCreateWithoutCarritoInput = {
    id?: number
    productoId: number
    cantidad: number
    precio: number
  }

  export type CarritoItemCreateOrConnectWithoutCarritoInput = {
    where: CarritoItemWhereUniqueInput
    create: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput>
  }

  export type CarritoItemCreateManyCarritoInputEnvelope = {
    data: CarritoItemCreateManyCarritoInput | CarritoItemCreateManyCarritoInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithoutCarritosInput = {
    update: XOR<usuariosUpdateWithoutCarritosInput, usuariosUncheckedUpdateWithoutCarritosInput>
    create: XOR<usuariosCreateWithoutCarritosInput, usuariosUncheckedCreateWithoutCarritosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutCarritosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutCarritosInput, usuariosUncheckedUpdateWithoutCarritosInput>
  }

  export type usuariosUpdateWithoutCarritosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    configuraciones?: configuracionUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutCarritosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    configuraciones?: configuracionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CarritoItemUpsertWithWhereUniqueWithoutCarritoInput = {
    where: CarritoItemWhereUniqueInput
    update: XOR<CarritoItemUpdateWithoutCarritoInput, CarritoItemUncheckedUpdateWithoutCarritoInput>
    create: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput>
  }

  export type CarritoItemUpdateWithWhereUniqueWithoutCarritoInput = {
    where: CarritoItemWhereUniqueInput
    data: XOR<CarritoItemUpdateWithoutCarritoInput, CarritoItemUncheckedUpdateWithoutCarritoInput>
  }

  export type CarritoItemUpdateManyWithWhereWithoutCarritoInput = {
    where: CarritoItemScalarWhereInput
    data: XOR<CarritoItemUpdateManyMutationInput, CarritoItemUncheckedUpdateManyWithoutCarritoInput>
  }

  export type CarritoCreateWithoutItemsInput = {
    creadoEn?: Date | string
    estado?: string
    usuarios: usuariosCreateNestedOneWithoutCarritosInput
  }

  export type CarritoUncheckedCreateWithoutItemsInput = {
    id?: number
    usuarioId: number
    creadoEn?: Date | string
    estado?: string
  }

  export type CarritoCreateOrConnectWithoutItemsInput = {
    where: CarritoWhereUniqueInput
    create: XOR<CarritoCreateWithoutItemsInput, CarritoUncheckedCreateWithoutItemsInput>
  }

  export type productosCreateWithoutCarritoItemsInput = {
    nombre?: string | null
    tipo?: string | null
    preciocompra?: Decimal | DecimalJsLike | number | string | null
    precioventa?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    stockminimo?: number | null
    fechacaducidad?: Date | string | null
    creadoen?: Date | string | null
    unidadMedida?: string | null
    detalleventas?: detalleventasCreateNestedManyWithoutProductosInput
    movimientosinventario?: movimientosinventarioCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutCarritoItemsInput = {
    id?: number
    nombre?: string | null
    tipo?: string | null
    preciocompra?: Decimal | DecimalJsLike | number | string | null
    precioventa?: Decimal | DecimalJsLike | number | string | null
    stock?: number | null
    stockminimo?: number | null
    fechacaducidad?: Date | string | null
    creadoen?: Date | string | null
    unidadMedida?: string | null
    detalleventas?: detalleventasUncheckedCreateNestedManyWithoutProductosInput
    movimientosinventario?: movimientosinventarioUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutCarritoItemsInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutCarritoItemsInput, productosUncheckedCreateWithoutCarritoItemsInput>
  }

  export type CarritoUpsertWithoutItemsInput = {
    update: XOR<CarritoUpdateWithoutItemsInput, CarritoUncheckedUpdateWithoutItemsInput>
    create: XOR<CarritoCreateWithoutItemsInput, CarritoUncheckedCreateWithoutItemsInput>
    where?: CarritoWhereInput
  }

  export type CarritoUpdateToOneWithWhereWithoutItemsInput = {
    where?: CarritoWhereInput
    data: XOR<CarritoUpdateWithoutItemsInput, CarritoUncheckedUpdateWithoutItemsInput>
  }

  export type CarritoUpdateWithoutItemsInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuarios?: usuariosUpdateOneRequiredWithoutCarritosNestedInput
  }

  export type CarritoUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type productosUpsertWithoutCarritoItemsInput = {
    update: XOR<productosUpdateWithoutCarritoItemsInput, productosUncheckedUpdateWithoutCarritoItemsInput>
    create: XOR<productosCreateWithoutCarritoItemsInput, productosUncheckedCreateWithoutCarritoItemsInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutCarritoItemsInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutCarritoItemsInput, productosUncheckedUpdateWithoutCarritoItemsInput>
  }

  export type productosUpdateWithoutCarritoItemsInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    preciocompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioventa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    stockminimo?: NullableIntFieldUpdateOperationsInput | number | null
    fechacaducidad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unidadMedida?: NullableStringFieldUpdateOperationsInput | string | null
    detalleventas?: detalleventasUpdateManyWithoutProductosNestedInput
    movimientosinventario?: movimientosinventarioUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutCarritoItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    preciocompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioventa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    stockminimo?: NullableIntFieldUpdateOperationsInput | number | null
    fechacaducidad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unidadMedida?: NullableStringFieldUpdateOperationsInput | string | null
    detalleventas?: detalleventasUncheckedUpdateManyWithoutProductosNestedInput
    movimientosinventario?: movimientosinventarioUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type CarritoCreateManyUsuariosInput = {
    id?: number
    creadoEn?: Date | string
    estado?: string
  }

  export type configuracionCreateManyUsuarioInput = {
    id?: number
    clave: string
    valor?: string | null
  }

  export type CarritoUpdateWithoutUsuariosInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    items?: CarritoItemUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    items?: CarritoItemUncheckedUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type configuracionUpdateWithoutUsuarioInput = {
    clave?: StringFieldUpdateOperationsInput | string
    valor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type configuracionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    valor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type configuracionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    valor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarritoItemCreateManyProductoInput = {
    id?: number
    carritoId: number
    cantidad: number
    precio: number
  }

  export type detalleventasCreateManyProductosInput = {
    id?: number
    ventaid?: number | null
    cantidad?: number | null
    preciounitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type movimientosinventarioCreateManyProductosInput = {
    id?: number
    tipo?: string | null
    cantidad?: number | null
    observacion?: string | null
    fecha?: Date | string | null
  }

  export type CarritoItemUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    carrito?: CarritoUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CarritoItemUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type CarritoItemUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type detalleventasUpdateWithoutProductosInput = {
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    preciounitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ventas?: ventasUpdateOneWithoutDetalleventasNestedInput
  }

  export type detalleventasUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaid?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    preciounitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type detalleventasUncheckedUpdateManyWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaid?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    preciounitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type movimientosinventarioUpdateWithoutProductosInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientosinventarioUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientosinventarioUncheckedUpdateManyWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalleventasCreateManyVentasInput = {
    id?: number
    productoid?: number | null
    cantidad?: number | null
    preciounitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type facturasCreateManyVentasInput = {
    id?: number
    folio?: string | null
    serie?: string | null
    fecha?: Date | string
    moneda?: string
    formaPago?: string
    metodoPago?: string
    usoCfdi?: string
    tasaIvaGlobal?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    descuentos?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    negocioNombre: string
    negocioRfc?: string | null
    negocioDir?: string | null
    negocioTel?: string | null
    negocioEmail?: string | null
    clienteNombre: string
    clienteRfc?: string | null
    clienteCp?: string | null
    clienteDir?: string | null
    clienteEmail?: string | null
    clienteTel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type detalleventasUpdateWithoutVentasInput = {
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    preciounitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    productos?: productosUpdateOneWithoutDetalleventasNestedInput
  }

  export type detalleventasUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoid?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    preciounitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type detalleventasUncheckedUpdateManyWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoid?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    preciounitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type facturasUpdateWithoutVentasInput = {
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    usoCfdi?: StringFieldUpdateOperationsInput | string
    tasaIvaGlobal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFieldUpdateOperationsInput | string
    negocioRfc?: NullableStringFieldUpdateOperationsInput | string | null
    negocioDir?: NullableStringFieldUpdateOperationsInput | string | null
    negocioTel?: NullableStringFieldUpdateOperationsInput | string | null
    negocioEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteNombre?: StringFieldUpdateOperationsInput | string
    clienteRfc?: NullableStringFieldUpdateOperationsInput | string | null
    clienteCp?: NullableStringFieldUpdateOperationsInput | string | null
    clienteDir?: NullableStringFieldUpdateOperationsInput | string | null
    clienteEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteTel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: factura_itemsUpdateManyWithoutFacturaNestedInput
  }

  export type facturasUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    usoCfdi?: StringFieldUpdateOperationsInput | string
    tasaIvaGlobal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFieldUpdateOperationsInput | string
    negocioRfc?: NullableStringFieldUpdateOperationsInput | string | null
    negocioDir?: NullableStringFieldUpdateOperationsInput | string | null
    negocioTel?: NullableStringFieldUpdateOperationsInput | string | null
    negocioEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteNombre?: StringFieldUpdateOperationsInput | string
    clienteRfc?: NullableStringFieldUpdateOperationsInput | string | null
    clienteCp?: NullableStringFieldUpdateOperationsInput | string | null
    clienteDir?: NullableStringFieldUpdateOperationsInput | string | null
    clienteEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteTel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: factura_itemsUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type facturasUncheckedUpdateManyWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    usoCfdi?: StringFieldUpdateOperationsInput | string
    tasaIvaGlobal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuentos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    negocioNombre?: StringFieldUpdateOperationsInput | string
    negocioRfc?: NullableStringFieldUpdateOperationsInput | string | null
    negocioDir?: NullableStringFieldUpdateOperationsInput | string | null
    negocioTel?: NullableStringFieldUpdateOperationsInput | string | null
    negocioEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteNombre?: StringFieldUpdateOperationsInput | string
    clienteRfc?: NullableStringFieldUpdateOperationsInput | string | null
    clienteCp?: NullableStringFieldUpdateOperationsInput | string | null
    clienteDir?: NullableStringFieldUpdateOperationsInput | string | null
    clienteEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clienteTel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type factura_itemsCreateManyFacturaInput = {
    id?: number
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    iva?: Decimal | DecimalJsLike | number | string
    importe: Decimal | DecimalJsLike | number | string
  }

  export type factura_itemsUpdateWithoutFacturaInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type factura_itemsUncheckedUpdateWithoutFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type factura_itemsUncheckedUpdateManyWithoutFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    iva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    importe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemCreateManyCarritoInput = {
    id?: number
    productoId: number
    cantidad: number
    precio: number
  }

  export type CarritoItemUpdateWithoutCarritoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    producto?: productosUpdateOneRequiredWithoutCarritoItemsNestedInput
  }

  export type CarritoItemUncheckedUpdateWithoutCarritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type CarritoItemUncheckedUpdateManyWithoutCarritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
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