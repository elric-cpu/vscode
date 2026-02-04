export const evaluateDependsOn = (condition, answers) => {
  if (!condition) return true;
  if (Array.isArray(condition.all)) {
    return condition.all.every((item) => evaluateDependsOn(item, answers));
  }
  if (Array.isArray(condition.any)) {
    return condition.any.some((item) => evaluateDependsOn(item, answers));
  }
  if (condition.field_key) {
    const matches = answers.filter((answer) => answer.field_key === condition.field_key);
    if (!matches.length) return false;
    if (condition.equals !== undefined) {
      return matches.some((answer) => String(answer.value) === String(condition.equals));
    }
    return true;
  }
  return true;
};

export const normalizeAnswerPayload = (answers) =>
  answers.map((answer) => ({
    question_id: answer.question_id,
    target_id: answer.target_id || null,
    value: answer.value,
  }));
