// Type definitions for jec-juta
// Project: JEC JUTA
// Definitions by: Pascal ECHEMANN <https://github.com/pechemann/JEC>

// Please maintain packages and alphabetical order.

declare module "jec-juta" {

export interface AnnotatedMethodParams {
    timeout?: number;
    async?: boolean;
    disabled?: boolean;
}

export interface TestParams extends AnnotatedMethodParams {
    description: string;
    repeat?: number;
    order?: number;
}

export interface TestSuiteParams {
    description: string;
    disabled?: boolean;
    testOrder?: number;
}

export function After(params?: AnnotatedMethodParams): Function;

export function AfterClass(params?: AnnotatedMethodParams): Function;

export function Async(target: Object, propertyKey: string | symbol, parameterIndex: number): void;

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
    static readonly ASYNC_CONNECTOR_REF: string;
}

export interface AnnotatedMethod extends TestableMethod {
    type: number;
}

export interface RunableTestSuite {
    getTestSuite(): any;
    setTestSuite(testSuite: any): void;
    getTestMethods(): TestMethod[];
    getDescription(): string;
    getAnnotatedMethods(): AnnotatedMethod[];
    isDisabled(): boolean;
    getTestOrder(): number;
}

export interface TestableMethod {
    name: string;
    timeout: number;
    async: boolean;
    disabled: boolean;
}

export interface TestMethod extends TestableMethod {
    description: string;
    repeat: number;
    order: number;
}

export interface TestRunner {
    runTest(testSuite: RunableTestSuite, callback: (stats: TestStats) => void): void;
    runAllTests(testSuiteColl: RunableTestSuite[], callback: (stats: TestStats) => void): void;
}

export interface TestStats {
    numTestSuites: number;
    numDisabledTestSuites: number;
    numTests: number;
    numAsyncTests :number;
    numDisabledTests :number;
    duration :number;
    time :string;
    error: any;
}

export enum AnnotatedMethodType {
    BEFORE_CLASS = 0,
    AFTER_CLASS = 1,
    BEFORE = 2,
    AFTER = 3,
}

export enum TestSorters {
    DEFAULT = 0,
    NAME_ASCENDING = 1,
    NAME_DESCENDING = 2,
    ORDER_ASCENDING = 3,
    ORDER_DESCENDING = 4,
}

}