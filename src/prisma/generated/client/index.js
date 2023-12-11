
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.7.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.MuscleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.ExerciseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  muscleId: 'muscleId',
  description: 'description',
  image: 'image',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.TrainingPlanScalarFieldEnum = {
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

exports.Prisma.TrainingScalarFieldEnum = {
  id: 'id',
  name: 'name',
  order: 'order',
  trainingPlanId: 'trainingPlanId',
  isInProgress: 'isInProgress',
  isRecommendedToDay: 'isRecommendedToDay',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.TrainingExerciseScalarFieldEnum = {
  id: 'id',
  treiningId: 'treiningId',
  exerciseId: 'exerciseId',
  intervalInSeconds: 'intervalInSeconds',
  status: 'status',
  order: 'order',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.StudentExerciseScalarFieldEnum = {
  id: 'id',
  exerciseId: 'exerciseId',
  weightInKg: 'weightInKg',
  createdAt: 'createdAt'
};

exports.Prisma.TrainingHistoryScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  trainingId: 'trainingId'
};

exports.Prisma.TrainingExerciseHistoryScalarFieldEnum = {
  id: 'id',
  trainingExerciseId: 'trainingExerciseId',
  startDate: 'startDate',
  endDate: 'endDate',
  exerciseId: 'exerciseId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Gender = exports.$Enums.Gender = {
  M: 'M',
  F: 'F',
  O: 'O'
};

exports.ExerciseStatus = exports.$Enums.ExerciseStatus = {
  READY_TO_START: 'READY_TO_START',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
};

exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\hewerton.paz\\Documents\\projetos\\gym\\gym-power-front\\src\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.7.0",
  "engineVersion": "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": true,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogICAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICAgIHByb3ZpZGVyID0gIm15c3FsIg0KICAgIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KfQ0KDQplbnVtIEdlbmRlciB7DQogICAgTQ0KICAgIEYNCiAgICBPDQp9DQoNCmVudW0gRXhlcmNpc2VTdGF0dXMgew0KICAgIFJFQURZX1RPX1NUQVJUDQogICAgSU5fUFJPR1JFU1MNCiAgICBGSU5JU0hFRA0KfQ0KDQptb2RlbCBVc2VyIHsNCiAgICBpZCAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpDQogICAgZW1haWwgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAdW5pcXVlDQogICAgbmFtZSAgICAgICAgICAgICBTdHJpbmcNCiAgICBwYXNzd29yZCAgICAgICAgIFN0cmluZz8NCiAgICBpc0FjdGl2ZSAgICAgICAgIEJvb2xlYW4gICAgICAgICAgIEBkZWZhdWx0KHRydWUpDQogICAgaXNBZG1pbiAgICAgICAgICBCb29sZWFuDQogICAgaXNUZWFjaGVyICAgICAgICBCb29sZWFuDQogICAgdHJhaW5pbmdQbGFucyAgICBUcmFpbmluZ1BsYW5bXQ0KICAgIGRhdGVPZkJpcnRoICAgICAgRGF0ZVRpbWUNCiAgICBnZW5kZXIgICAgICAgICAgIEdlbmRlcg0KICAgIGhlaWdodEluTXQgICAgICAgRmxvYXQ/DQogICAgd2VpZ2h0SW5LZyAgICAgICBGbG9hdD8NCiAgICBzdHVkZW50RXhlcmNpc2VzIFN0dWRlbnRFeGVyY2lzZVtdDQogICAgYXZhdGFyQmdDb2xvciAgICBTdHJpbmcNCiAgICBjcmVhdGVkQXQgICAgICAgIERhdGVUaW1lICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KfQ0KDQptb2RlbCBNdXNjbGUgew0KICAgIGlkICAgICAgICBTdHJpbmcgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpDQogICAgbmFtZSAgICAgIFN0cmluZw0KICAgIGlzQWN0aXZlICBCb29sZWFuPyAgIEBkZWZhdWx0KHRydWUpDQogICAgZXhlcmNpc2VzIEV4ZXJjaXNlW10NCiAgICBjcmVhdGVkQXQgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkNCn0NCg0KbW9kZWwgRXhlcmNpc2Ugew0KICAgIGlkICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkNCiAgICBuYW1lICAgICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgICBtdXNjbGVJZCAgICAgICAgICAgICAgICBTdHJpbmcNCiAgICBkZXNjcmlwdGlvbiAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwMDApDQogICAgaW1hZ2UgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIGlzQWN0aXZlICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICAgQGRlZmF1bHQodHJ1ZSkNCiAgICBtdXNjbGUgICAgICAgICAgICAgICAgICBNdXNjbGUgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFttdXNjbGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgc3R1ZGVudEV4ZXJjaXNlcyAgICAgICAgU3R1ZGVudEV4ZXJjaXNlW10NCiAgICB0cmFpbmluZ0V4ZXJjaXNlSGlzdG9yeSBUcmFpbmluZ0V4ZXJjaXNlSGlzdG9yeVtdDQogICAgdHJhaW5pbmdFeGVyY2lzZXMgICAgICAgVHJhaW5pbmdFeGVyY2lzZVtdDQogICAgY3JlYXRlZEF0ICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkNCn0NCg0KLy8gbW9kZWwgVXNlclRyYWluZ1BsYW4gew0KLy8gICAgIGlkICAgICAgICAgICBTdHJpbmcgICAgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkNCi8vICAgICB1c2VySWQgICAgICAgU3RyaW5nDQovLyAgICAgdHJhaW5pbmdQbGFuIFRyYWluaW5nUGxhbiBAcmVsYXRpb24oZmllbGRzOiBbdHJhaW5pbmdQbGFuSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KLy8gICAgIHRyYWluaW5nUGxhbklkIFN0cmluZw0KLy8gICAgIGNyZWF0ZWRBdCAgICBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpDQovLyAgICAgYXV0aG9ySWQgIFN0cmluZw0KLy8gICAgIHN0dWRlbnRJZCBTdHJpbmcNCi8vICAgICB0ZWFjaGVyICAgVXNlciAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYXV0aG9ySWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KLy8gICAgIHN0dWRlbnQgICBVc2VyICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzdHVkZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KLy8gfQ0KDQptb2RlbCBUcmFpbmluZ1BsYW4gew0KICAgIGlkICAgICAgICAgICBTdHJpbmcgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpDQogICAgbmFtZSAgICAgICAgIFN0cmluZw0KICAgIGlzQWN0aXZlICAgICBCb29sZWFuPyAgIEBkZWZhdWx0KHRydWUpDQogICAgb2JqZWN0aXZlICAgIFN0cmluZz8gICAgQGRiLlZhckNoYXIoMTAwMCkNCiAgICB0ZWFjaGVySWQgICAgU3RyaW5nDQogICAgdGVhY2hlck5hbWUgIFN0cmluZw0KICAgIHRlYWNoZXJFbWFpbCBTdHJpbmcNCiAgICBzdHVkZW50SWQgICAgU3RyaW5nDQogICAgc3R1ZGVudCAgICAgIFVzZXIgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3N0dWRlbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgLy8gdXNlciAgVXNlciAgICBAcmVsYXRpb24oZmllbGRzOiBbYXV0aG9ySWQsIHN0dWRhbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgdHJhaW5pbmdzICAgIFRyYWluaW5nW10NCiAgICBjcmVhdGVkQXQgICAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkNCn0NCg0KbW9kZWwgVHJhaW5pbmcgew0KICAgIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkNCiAgICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nDQogICAgb3JkZXIgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQ0KICAgIHRyYWluaW5nUGxhbklkICAgICBTdHJpbmcNCiAgICBpc0luUHJvZ3Jlc3MgICAgICAgQm9vbGVhbj8gICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQ0KICAgIGlzUmVjb21tZW5kZWRUb0RheSBCb29sZWFuPyAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpDQogICAgaXNBY3RpdmUgICAgICAgICAgIEJvb2xlYW4/ICAgICAgICAgICBAZGVmYXVsdCh0cnVlKQ0KICAgIGNyZWF0ZWRBdCAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgQGRlZmF1bHQobm93KCkpDQogICAgdHJhaW5pbmdQbGFuICAgICAgIFRyYWluaW5nUGxhbiAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdHJhaW5pbmdQbGFuSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIHRyYWluaW5nSGlzdG9yeSAgICBUcmFpbmluZ0hpc3RvcnlbXQ0KICAgIHRyYWluaW5nRXhlcmNpc2VzICBUcmFpbmluZ0V4ZXJjaXNlW10NCn0NCg0KbW9kZWwgVHJhaW5pbmdFeGVyY2lzZSB7DQogICAgaWQgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQ0KICAgIHRyZWluaW5nSWQgICAgICAgICAgICAgIFN0cmluZw0KICAgIGV4ZXJjaXNlSWQgICAgICAgICAgICAgIFN0cmluZw0KICAgIGludGVydmFsSW5TZWNvbmRzICAgICAgIEludD8NCiAgICBzdGF0dXMgICAgICAgICAgICAgICAgICBFeGVyY2lzZVN0YXR1cyAgICAgICAgICAgIEBkZWZhdWx0KFJFQURZX1RPX1NUQVJUKQ0KICAgIG9yZGVyICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkNCiAgICBpc0FjdGl2ZSAgICAgICAgICAgICAgICBCb29sZWFuPyAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KHRydWUpDQogICAgY3JlYXRlZEF0ICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkNCiAgICB0cmFpbmluZyAgICAgICAgICAgICAgICBUcmFpbmluZyAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt0cmVpbmluZ0lkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBleGVyY2lzZSAgICAgICAgICAgICAgICBFeGVyY2lzZSAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtleGVyY2lzZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICB0cmFpbmluZ0V4ZXJjaXNlSGlzdG9yeSBUcmFpbmluZ0V4ZXJjaXNlSGlzdG9yeVtdDQp9DQoNCm1vZGVsIFN0dWRlbnRFeGVyY2lzZSB7DQogICAgaWQgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQ0KICAgIGV4ZXJjaXNlSWQgU3RyaW5nDQogICAgd2VpZ2h0SW5LZyBGbG9hdA0KICAgIGNyZWF0ZWRBdCAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogICAgc3R1ZGVudCAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIGV4ZXJjaXNlICAgRXhlcmNpc2UgQHJlbGF0aW9uKGZpZWxkczogW2V4ZXJjaXNlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQptb2RlbCBUcmFpbmluZ0hpc3Rvcnkgew0KICAgIGlkICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpDQogICAgc3RhcnREYXRlICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpDQogICAgZW5kRGF0ZSAgICBEYXRlVGltZT8NCiAgICB0cmFpbmluZyAgIFRyYWluaW5nPyBAcmVsYXRpb24oZmllbGRzOiBbdHJhaW5pbmdJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgdHJhaW5pbmdJZCBTdHJpbmc/DQp9DQoNCm1vZGVsIFRyYWluaW5nRXhlcmNpc2VIaXN0b3J5IHsNCiAgICBpZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQ0KICAgIHRyYWluaW5nRXhlcmNpc2VJZCBTdHJpbmcNCiAgICBzdGFydERhdGUgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICBAZGVmYXVsdChub3coKSkNCiAgICBlbmREYXRlICAgICAgICAgICAgRGF0ZVRpbWU/DQogICAgdHJhaW5pbmdFeGVyY2lzZSAgIFRyYWluaW5nRXhlcmNpc2UgQHJlbGF0aW9uKGZpZWxkczogW3RyYWluaW5nRXhlcmNpc2VJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgRXhlcmNpc2UgICAgICAgICAgIEV4ZXJjaXNlPyAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2V4ZXJjaXNlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIGV4ZXJjaXNlSWQgICAgICAgICBTdHJpbmc/DQp9DQo=",
  "inlineSchemaHash": "f0a23a6c5568ed9ce8ec9b9542da591b4de095e1b90298046212ce141875c7f6",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/prisma/generated/client",
    "prisma/generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isAdmin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isTeacher\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingPlans\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TrainingPlan\",\"relationName\":\"TrainingPlanToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateOfBirth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"heightInMt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weightInKg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentExercises\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentExercise\",\"relationName\":\"StudentExerciseToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatarBgColor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Muscle\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercises\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Exercise\",\"relationName\":\"ExerciseToMuscle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Exercise\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"muscleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"muscle\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Muscle\",\"relationName\":\"ExerciseToMuscle\",\"relationFromFields\":[\"muscleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentExercises\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentExercise\",\"relationName\":\"ExerciseToStudentExercise\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingExerciseHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TrainingExerciseHistory\",\"relationName\":\"ExerciseToTrainingExerciseHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingExercises\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TrainingExercise\",\"relationName\":\"ExerciseToTrainingExercise\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TrainingPlan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"objective\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacherId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacherName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacherEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"TrainingPlanToUser\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Training\",\"relationName\":\"TrainingToTrainingPlan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Training\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingPlanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isInProgress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRecommendedToDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingPlan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TrainingPlan\",\"relationName\":\"TrainingToTrainingPlan\",\"relationFromFields\":[\"trainingPlanId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TrainingHistory\",\"relationName\":\"TrainingToTrainingHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingExercises\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TrainingExercise\",\"relationName\":\"TrainingToTrainingExercise\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TrainingExercise\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"treiningId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exerciseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"intervalInSeconds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ExerciseStatus\",\"default\":\"READY_TO_START\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"training\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Training\",\"relationName\":\"TrainingToTrainingExercise\",\"relationFromFields\":[\"treiningId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Exercise\",\"relationName\":\"ExerciseToTrainingExercise\",\"relationFromFields\":[\"exerciseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingExerciseHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TrainingExerciseHistory\",\"relationName\":\"TrainingExerciseToTrainingExerciseHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StudentExercise\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exerciseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weightInKg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"StudentExerciseToUser\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Exercise\",\"relationName\":\"ExerciseToStudentExercise\",\"relationFromFields\":[\"exerciseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TrainingHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"training\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Training\",\"relationName\":\"TrainingToTrainingHistory\",\"relationFromFields\":[\"trainingId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TrainingExerciseHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingExerciseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingExercise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TrainingExercise\",\"relationName\":\"TrainingExerciseToTrainingExerciseHistory\",\"relationFromFields\":[\"trainingExerciseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Exercise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Exercise\",\"relationName\":\"ExerciseToTrainingExerciseHistory\",\"relationFromFields\":[\"exerciseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exerciseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Gender\":{\"values\":[{\"name\":\"M\",\"dbName\":null},{\"name\":\"F\",\"dbName\":null},{\"name\":\"O\",\"dbName\":null}],\"dbName\":null},\"ExerciseStatus\":{\"values\":[{\"name\":\"READY_TO_START\",\"dbName\":null},{\"name\":\"IN_PROGRESS\",\"dbName\":null},{\"name\":\"FINISHED\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/prisma/generated/client/schema.prisma")
