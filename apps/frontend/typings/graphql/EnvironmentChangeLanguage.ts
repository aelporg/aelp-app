/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EnvironmentChangeLanguage
// ====================================================

export interface EnvironmentChangeLanguage_changeLanguage {
  __typename: "Environment";
  id: string;
}

export interface EnvironmentChangeLanguage {
  changeLanguage: EnvironmentChangeLanguage_changeLanguage;
}

export interface EnvironmentChangeLanguageVariables {
  id: string;
  languageId: string;
}
