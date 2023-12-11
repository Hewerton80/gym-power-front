
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
