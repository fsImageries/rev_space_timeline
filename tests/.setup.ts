import { vi } from 'vitest';

const cryptoMock = { randomUUID: vi.fn(() => Math.random().toString()) };
vi.stubGlobal("crypto", cryptoMock);

const documentMock = { querySelector: vi.fn(() => {}), getElementById: vi.fn(() => {return {onclick:null}}) };
vi.stubGlobal("document", documentMock);

const windowMock = { addEventListener: vi.fn(() => {}) };
vi.stubGlobal("window", windowMock);

const localStoraeMock = { 
    getItem: vi.fn(() => "value"),
    setItem: vi.fn(() => {})
 };
vi.stubGlobal("localStorage", localStoraeMock);