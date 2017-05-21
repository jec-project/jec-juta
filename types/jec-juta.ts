// Type definitions for jec-juta
// Project: JEC JUTA
// Definitions by: Pascal ECHEMANN <https://github.com/pechemann/JEC>

// Please maintain packages and alphabetical order.

declare module "jec-juta" {

export interface AnnotatedMethodParams {
    timeout?: number;
}

export interface TestParams extends AnnotatedMethodParams {
    description: string;
}

export interface TestSuiteParams {
    description: string;
    timeout?: number;
}

export function After(params?: AnnotatedMethodParams): Function;

export function AfterClass(params?: AnnotatedMethodParams): Function;

export function Before(params?: AnnotatedMethodParams): Function;

export function BeforeClass(params?: AnnotatedMethodParams): Function;

export function Test(params: TestParams): Function;

export function TestSuite(params: TestSuiteParams): Function;

export class TestSuiteError extends Error {
    constructor(message: string);
}

export class JutaConnectorRefs {
    static readonly TEST_CONNECTOR_REF: string;
    static readonly TEST_SUITE_CONNECTOR_REF: string;
    static readonly BEFORE_CLASS_CONNECTOR_REF: string;
    static readonly BEFORE_CONNECTOR_REF: string;
    static readonly AFTER_CLASS_CONNECTOR_REF: string;
    static readonly AFTER_CONNECTOR_REF: string;
}

export interface AnnotatedMethod {
    name: string;
    timeout: number;
    type: number;
}

export interface RunableTestSuite {
    getTestSuite(): any;
    setTestSuite(testSuite: any): void;
    getTestMethods(): TestMethod[];
    getDescription(): string;
    getAnnotatedMethods(): AnnotatedMethod[];
}

export interface TestMethod {
    description: string;
    name: string;
}

export interface TestRunner {
    runTest(testSuite: RunableTestSuite, callback: (err: any) => void): void;
    runAllTests(testSuiteColl: RunableTestSuite[], callback: (err: any) => void): void;
}

export enum AnnotatedMethodType {
    BEFORE_CLASS = 0,
    AFTER_CLASS = 1,
    BEFORE = 2,
    AFTER = 3,
}

}