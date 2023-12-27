export const CONSTANTS = {
  VALIDATION_ERROR_MESSAGES: {
    REQUIRED_FIELDS: "Preenchimento obrigatório",
    INVALID_FILE: "Deve ser um arquivo válido",
    INVALID_DATE: "Data inválida",
    INVALID_TIME: "Hora inválida",
    INVALID_MAX_FILE: "A imagem deve possuir no máximo 2 mb.",
    INVALID_PASSWORD: "Senha inválida",
    PASSWORDS_NOT_MATCH: "As senhas não coincidem",
    INVALID_EMAIL: "E-mail inválido",
    MUST_BE_BOOLEAN: "Deve ser um valor booleano",
    PASSWORD_MIN_LENGTH: "Senha deve ter no mínimo 6 caracteres",
    MUST_BE_VALID: "Deve ser um valor válido",
    MUST_BE_NUMBER: "Deve ser um número",
    MUST_BE_POSITIVE: "Deve ser um número positivo",
    // deve ser maior que 0
    MUST_BE_GREATER_THAN_ZERO: "Deve ser maior que 0",
    MUST_BE_ARRAY: "Deve ser um array",
  },
  API_RESPONSE_MENSSAGES: {
    VALIDATION_ERROR: "Erro de validação",
    USER_HAS_NO_PERMISSION: "Usuário não tem permissão para realizar esta ação",
    INVALID_TOKEN: "Token inválido",
    TOKEN_NOT_PROVIDED: "Token não informado",
    INVALID_CREDENTIALS: "Usuário ou senha inválidos",
    USER_NOT_FOUND: "Usuário não encontrado",
    TRAINING_NOT_FOUND: "Treino não encontrado",
    TRAINING_PLAN_NOT_FOUND: "Plano de treino não encontrado",
    TRAINING_ALWREADY_PROGRESS: "Treino já está em andamento",
    ALWREADY_HAS_TRAINING_IN_PROGRESS: "Já existe um treino em andamento",
    TRAINING_ALWREADY_NOT_PROGRESS: "Treino já não está em andamento",
    EXERCISE_ALWREADY_PROGRESS: "Exercício já está em andamento",
    EXERCISE_ALWREADY_FINISHED: "Exercício já está finalizado",
    EXERCISE_WAS_NOT_STARTED: "Exercício não foi iniciado",
    EXERCISE_NOT_FOUND: "Exercício não encontrado",
    THERE_IS_EXERCISES_NOT_FINISHED: "Há exercícios que não foram finalizados",
    USER_ALREADY_EXISTS: "Já existe um usuário com este e-mail",
    INTERNAL_SERVER_ERROR: "Erro interno do servidor",
    STUDENT_ALREADY_HAS_TRAINING_PLAN:
      "O aluno já possui um plano de treino ativo",
    PLAN_NOT_FOUND: "Plano de treino não encontrado",
    // invalid password
    INVALID_PASSWORD: "Senha inválida",
  },
  COOKIES_KEYS: {
    TOKEN: "TOKEN",
    THEME: "THEME",
  },
};
