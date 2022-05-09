export type Survey = {
  description: string;
};

globalThis.survey = globalThis.survey ?? [];

export function getSurvey(): Survey[] {
  return globalThis.survey;
}

export function postSurvey(survey: Survey) {
  globalThis.survey.push(survey);
}
