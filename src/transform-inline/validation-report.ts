import * as ts from 'typescript';

export interface AlwaysTrueValidationReport {
    type: 'always-true';
}

export interface AlwaysFalseValidationReport {
    type: 'always-false';
    reason: string;
}

export interface ConditionalValidationReport {
    type: 'conditional';
    condition: ts.Expression;
    reason: string;
}

export interface ArrayEveryValidationReport {
    type: 'array-every';
    arrayAccessor: ts.Expression;
    itemIdentifier: ts.Identifier;
    report: ValidationReport;
}

export interface ObjectEveryValidationReport {
    type: 'object-every';
    objectAccessor: ts.Expression;
    keyIdentifier: ts.Identifier;
    report: ValidationReport;
}

export interface ConjunctionValidationReport {
    type: 'conjunction';
    reports: ValidationReport[];
}

export interface DisjunctionValidationReport {
    type: 'disjunction';
    reports: ValidationReport[];
}

export type ValidationReport =
    AlwaysTrueValidationReport
    | AlwaysFalseValidationReport
    | ConditionalValidationReport
    | ArrayEveryValidationReport
    | ObjectEveryValidationReport
    | ConjunctionValidationReport
    | DisjunctionValidationReport;

export function createAlwaysTrueValidationReport(): AlwaysTrueValidationReport {
    return { type: 'always-true' };
}

export function createAlwaysFalseValidationReport(reason: string): AlwaysFalseValidationReport {
    return { type: 'always-false', reason };
}

export function createConditionalValidationReport(condition: ts.Expression, reason: string): ConditionalValidationReport {
    return { type: 'conditional', condition, reason };
}

export function createArrayEveryValidationReport(arrayAccessor: ts.Expression, itemIdentifier: ts.Identifier, report: ValidationReport): ArrayEveryValidationReport {
    return { type: 'array-every', arrayAccessor, itemIdentifier, report };
}

export function createObjectEveryValidationReport(objectAccessor: ts.Expression, keyIdentifier: ts.Identifier, report: ValidationReport): ObjectEveryValidationReport {
    return { type: 'object-every', objectAccessor, keyIdentifier, report };
}

export function createConjunctionValidationReport(reports: ValidationReport[]): ConjunctionValidationReport {
    return { type: 'conjunction', reports };
}

export function createDisjunctionValidationReport(reports: ValidationReport[]): DisjunctionValidationReport {
    return { type: 'disjunction', reports };
}