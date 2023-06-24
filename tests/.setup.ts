import { vi } from 'vitest';

const cryptoMock = { randomUUID: vi.fn(() => Math.random().toString()) };
vi.stubGlobal("crypto", cryptoMock);

const documentMock = { querySelector: vi.fn(() => {}) };
vi.stubGlobal("document", documentMock);